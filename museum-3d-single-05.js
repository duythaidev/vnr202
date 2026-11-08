
// =============================================================================
// DỰNG KHÔNG GIAN BẢO TÀNG 3D (bản nâng cấp ánh sáng & chất liệu)
//
// Kỹ thuật dùng để giống ảnh mẫu hơn:
//  1. Quản lý màu chuẩn + ACES Filmic tone mapping (fx-core.js) → màu không bị bệt.
//  2. physicallyCorrectLights: đèn rọi thật (SpotLight) cho từng tranh, tạo vệt
//     sáng hình parabol trên tường tự nhiên thay vì vẽ sẵn.
//  3. RectAreaLight dài chạy theo mái kính → ánh sáng trời mềm rọi xuống sàn/tường.
//  4. Env map PMREM chụp từ chính căn phòng → khung vàng/sàn phản chiếu đúng môi trường
//     (giống light probe / ánh sáng dội lại).
//  5. Sàn gỗ PBR (roughness + bump) + phản chiếu thật bằng Reflector ở nửa độ phân giải,
//     làm nhoè theo độ nhám → bóng gương mờ như sàn đánh sáp.
//  6. Bóng đổ mềm (PCFSoft) từ ánh sáng trời theo vị trí người xem + bóng tiếp xúc giả.
//  7. Bloom nhẹ cho mái kính / đèn, vignette + film grain.
// =============================================================================
let scene, camera, renderer, raycaster, mouse, postFX;
const paintingMeshes = [];
let activePieceIndex = 0;

const HALL_WIDTH = 16;
const HALL_HEIGHT = 10.5;
const BAY_LENGTH = 11.5;
const NUM_BAYS = 8;
const HALL_LENGTH = NUM_BAYS * BAY_LENGTH + 16;
const BAY_START_Z = (NUM_BAYS - 1) * BAY_LENGTH * 0.5;

let camPos = new THREE.Vector3(0, 2.75, 44);
let camTargetPos = new THREE.Vector3(0, 2.75, 44);
let yaw = 0, pitch = 0, targetYaw = 0, targetPitch = 0;
let isDraggingLook = false;
let prevMouse = { x: 0, y: 0 };
const moveKeys = { w: false, a: false, s: false, d: false };
let isAutoFlying = false;

const MuseumScene = { sunLight: null, lastShadowZ: Infinity, reflector: null, floor: null };

// ---------- Ảnh tranh: placeholder sang trọng, tải URL nếu có ----------
function createArtworkCanvasTexture(piece) {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 742;
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#2f3229'); bg.addColorStop(1, '#16180f');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#b89342'; ctx.lineWidth = 5; ctx.strokeRect(30, 30, W - 60, H - 60);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 28px "JetBrains Mono", monospace';
    ctx.fillText(`${piece.code}  ·  ${piece.date}`, W / 2, 140);
    ctx.fillStyle = '#f5f5f4';
    ctx.font = 'bold 40px "Be Vietnam Pro", sans-serif';
    wrapCanvasText(ctx, piece.title, W / 2, 235, 860, 54);
    ctx.fillStyle = '#a8a29e';
    ctx.font = 'italic 26px "Be Vietnam Pro", sans-serif';
    wrapCanvasText(ctx, piece.subtitle, W / 2, 430, 820, 38);
    ctx.fillStyle = '#fde047';
    ctx.font = 'bold 24px "Be Vietnam Pro", sans-serif';
    ctx.fillText('CLICK ĐỂ MỞ BẢNG GHIM 3D', W / 2, 620);
    const tex = FX.canvasTexture(c);
    if (piece.imageUrl) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => { ctx.drawImage(img, 0, 0, W, H); tex.needsUpdate = true; };
        img.src = piece.imageUrl;
    }
    return tex;
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text).split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const test = line + words[n] + ' ';
        if (ctx.measureText(test).width > maxWidth && n > 0) {
            ctx.fillText(line, x, y); line = words[n] + ' '; y += lineHeight;
        } else line = test;
    }
    ctx.fillText(line, x, y);
}

// ---------- Khởi tạo ----------
function initThreeMuseum() {
    const container = document.getElementById('museumCanvasContainer');
    const low = FX.isLowPower;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2c3029);
    scene.fog = new THREE.FogExp2(0x4a4a3e, 0.0105);

    camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 220);
    camera.position.copy(camPos);

    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(GraphicsQuality.pixelRatio());
    renderer.setSize(innerWidth, innerHeight);
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.NoToneMapping;     // tone map ở pass cuối (FX)
    renderer.shadowMap.enabled = !GraphicsQuality.low;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.shadowMap.autoUpdate = false;
    container.appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    THREE.RectAreaLightUniformsLib.init();

    buildLighting(low);
    buildFloor(low);
    buildCeiling();
    buildWallsAndArt();
    buildEndWalls();

    postFX = FX.createComposer(renderer, scene, camera, {
        bloom: { strength: 0.32, radius: 0.55, threshold: 0.92 },
        grade: { exposure: 1.0, saturation: 1.04, vignette: 0.42, grain: 0.03, tint: [1.03, 1.0, 0.95] }
    });

    bakeEnvironment();
    GraphicsQuality.subscribe(() => {
        if (MuseumScene.reflector) MuseumScene.reflector.visible = !GraphicsQuality.low;
        if (MuseumScene.floorShader) MuseumScene.floorShader.uniforms.uReflStrength.value = GraphicsQuality.low ? 0 : 0.65;
    });
    setupMuseumControls();
}

// ---------- Ánh sáng ----------
function buildLighting(low) {
    // trời qua mái kính: hemisphere + RectArea dài + Directional để đổ bóng
    scene.add(new THREE.HemisphereLight(0xf2efe4, 0x3a2a1c, 0.55));

    const skyRect = new THREE.RectAreaLight(0xfff6e8, 2.6, 6.2, HALL_LENGTH);
    skyRect.position.set(0, HALL_HEIGHT + 0.2, 0);
    skyRect.lookAt(0, 0, 0);
    scene.add(skyRect);

    const sun = new THREE.DirectionalLight(0xfff2dd, 0.9);
    sun.castShadow = true;
    sun.shadow.mapSize.set(low ? 1024 : 2048, low ? 1024 : 2048);
    const sc = sun.shadow.camera;
    sc.left = -10; sc.right = 10; sc.top = 26; sc.bottom = -26; sc.near = 1; sc.far = 40;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    sun.shadow.radius = 4;
    scene.add(sun, sun.target);
    MuseumScene.sunLight = sun;
}

// ---------- Sàn gỗ bóng có phản chiếu ----------
function buildFloor(low) {
    const tex = MuseumTextures.hardwoodFloor();
    const geo = new THREE.PlaneGeometry(HALL_WIDTH, HALL_LENGTH);
    const mat = new THREE.MeshStandardMaterial({
        map: tex.map, roughnessMap: tex.roughnessMap, bumpMap: tex.bumpMap,
        bumpScale: 0.12, roughness: 0.5, metalness: 0.0, envMapIntensity: 0.35
    });
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    MuseumScene.floor = floor;

    if (low || !THREE.Reflector) return;
    const pr = renderer.getPixelRatio();
    const reflector = new THREE.Reflector(geo, {
        textureWidth: innerWidth * pr * 0.5, textureHeight: innerHeight * pr * 0.5,
        clipBias: 0.003, multisample: 0
    });
    reflector.rotation.x = -Math.PI / 2;
    const texMatrix = reflector.material.uniforms.textureMatrix.value;
    const reflTex = reflector.getRenderTarget().texture;
    // Reflector chỉ làm nhiệm vụ render ảnh phản chiếu, không tự vẽ màu ra màn hình
    reflector.material = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
    const origBefore = reflector.onBeforeRender;
    reflector.onBeforeRender = function (r, s, cam) {
        floor.visible = false;
        origBefore.call(this, r, s, cam);
        floor.visible = true;
    };
    scene.add(reflector);
    MuseumScene.reflector = reflector;

    mat.onBeforeCompile = (shader) => {
        shader.uniforms.tReflect = { value: reflTex };
        shader.uniforms.uTexMatrix = { value: texMatrix };
        shader.uniforms.uReflStrength = { value: GraphicsQuality.low ? 0 : 0.65 };
        MuseumScene.floorShader = shader;
        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', '#include <common>\nuniform mat4 uTexMatrix;\nvarying vec4 vReflUv;')
            .replace('#include <begin_vertex>', '#include <begin_vertex>\nvReflUv = uTexMatrix * vec4(transformed, 1.0);');
        shader.fragmentShader = shader.fragmentShader
            .replace('#include <common>', '#include <common>\nuniform sampler2D tReflect;\nuniform float uReflStrength;\nvarying vec4 vReflUv;')
            .replace('#include <output_fragment>', `
                vec2 ruv = vReflUv.xy / vReflUv.w;
                float spread = 0.003 + 0.03 * roughnessFactor;
                vec3 refl = texture2D(tReflect, ruv).rgb * 0.28;
                refl += texture2D(tReflect, ruv + vec2(0.0, spread)).rgb * 0.2;
                refl += texture2D(tReflect, ruv - vec2(0.0, spread)).rgb * 0.2;
                refl += texture2D(tReflect, ruv + vec2(spread * 0.4, spread * 2.2)).rgb * 0.16;
                refl += texture2D(tReflect, ruv - vec2(spread * 0.4, spread * 2.2)).rgb * 0.16;
                float nv = clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0);
                float fres = 0.06 + 0.94 * pow(1.0 - nv, 4.0);
                outgoingLight += refl * uReflStrength * fres * (1.0 - roughnessFactor * 0.75);
                #include <output_fragment>`);
    };
}

// ---------- Trần + mái vòm kính ----------
function buildCeiling() {
    const ceilMat = new THREE.MeshStandardMaterial({ color: 0x9a9e90, roughness: 0.9, emissive: 0x23251f });
    const sideW = (HALL_WIDTH - 6.4) / 2;
    [-1, 1].forEach(side => {
        const ceil = new THREE.Mesh(new THREE.PlaneGeometry(sideW, HALL_LENGTH), ceilMat);
        ceil.rotation.x = Math.PI / 2;
        ceil.position.set(side * (HALL_WIDTH / 2 - sideW / 2), HALL_HEIGHT, 0);
        scene.add(ceil);
    });

    const glassMat = new THREE.MeshBasicMaterial({
        map: MuseumTextures.skylightGlass(), side: THREE.BackSide,
        color: new THREE.Color(1, 0.99, 0.96).multiplyScalar(2.4)
    });
    const vault = new THREE.Mesh(new THREE.CylinderGeometry(3.25, 3.25, HALL_LENGTH, 48, 1, true, 0, Math.PI), glassMat);
    vault.rotation.z = Math.PI / 2;
    vault.rotation.y = Math.PI / 2;
    vault.position.set(0, HALL_HEIGHT, 0);
    scene.add(vault);

    // Sườn vòm (arch ribs) bằng InstancedMesh: tạo chiều sâu như ảnh mẫu
    const ribGeo = new THREE.TorusGeometry(3.2, 0.07, 6, 32, Math.PI);
    const ribMat = new THREE.MeshBasicMaterial({ color: 0x77746c });
    const count = Math.floor(HALL_LENGTH / 1.4);
    const ribs = new THREE.InstancedMesh(ribGeo, ribMat, count);
    const m = new THREE.Matrix4();
    for (let i = 0; i < count; i++) {
        m.makeTranslation(0, HALL_HEIGHT, -HALL_LENGTH / 2 + 0.7 + i * 1.4);
        ribs.setMatrixAt(i, m);
    }
    scene.add(ribs);

    const corniceMat = new THREE.MeshStandardMaterial({ color: 0x80867a, roughness: 0.75 });
    const pilasterMat = new THREE.MeshStandardMaterial({ color: 0x6a7262, roughness: 0.8 });
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x1a1714, roughness: 0.4 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.35, metalness: 0.8 });
    MuseumScene.mats = { corniceMat, pilasterMat, baseMat, metalMat };

    [-1, 1].forEach(side => {
        const wallX = side * (HALL_WIDTH / 2);
        const box = (w, h, d, mat, x, y) => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
            mesh.position.set(x, y, 0);
            mesh.receiveShadow = true;
            scene.add(mesh);
            return mesh;
        };
        box(0.7, 0.8, HALL_LENGTH, corniceMat, wallX - side * 0.25, HALL_HEIGHT - 0.38);
        box(0.42, 0.22, HALL_LENGTH, pilasterMat, wallX - side * 0.18, HALL_HEIGHT - 0.88);
        box(0.36, 0.12, HALL_LENGTH, corniceMat, wallX - side * 0.15, HALL_HEIGHT - 1.06);
        box(0.6, 0.5, HALL_LENGTH, corniceMat, side * 3.4, HALL_HEIGHT - 0.12);
        box(0.3, 0.75, HALL_LENGTH, baseMat, wallX - side * 0.08, 0.375);
        box(0.09, 0.09, HALL_LENGTH - 6, metalMat, side * (HALL_WIDTH / 2 - 2.35), HALL_HEIGHT - 0.12);
    });
}

// ---------- Tường, cột, đèn rọi, tranh, dây chắn, ghế ----------
function buildWallsAndArt() {
    const { corniceMat, pilasterMat, baseMat, metalMat } = MuseumScene.mats;
    const wallMat = new THREE.MeshStandardMaterial({ map: MuseumTextures.wallBay(), roughness: 0.92, envMapIntensity: 0.8 });
    const goldMat = new THREE.MeshPhysicalMaterial({
        color: 0xc9a14a, metalness: 1.0, roughness: 0.34,
        roughnessMap: MuseumTextures.goldPatina(), clearcoat: 0.25, clearcoatRoughness: 0.4, envMapIntensity: 1.4
    });
    const darkGoldMat = new THREE.MeshStandardMaterial({ color: 0x6b5222, metalness: 0.9, roughness: 0.5 });
    const linenMat = new THREE.MeshStandardMaterial({ color: 0xd8d0bb, roughness: 0.95 });
    const lensMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.9, 0.7).multiplyScalar(6) });
    const ropeMat = new THREE.MeshStandardMaterial({ color: 0x1b1716, roughness: 0.65 });
    const shadowTex = MuseumTextures.softShadow();

    for (let b = 0; b < NUM_BAYS; b++) {
        const bayZ = BAY_START_Z - b * BAY_LENGTH;
        [-1, 1].forEach(side => {
            const wallX = side * (HALL_WIDTH / 2);
            const pieceIndex = (b * 2 + (side === -1 ? 0 : 1)) % MUSEUM_PIECES.length;
            const rotY = side === -1 ? Math.PI / 2 : -Math.PI / 2;

            const bay = new THREE.Mesh(new THREE.PlaneGeometry(BAY_LENGTH, HALL_HEIGHT), wallMat);
            bay.position.set(wallX, HALL_HEIGHT / 2, bayZ);
            bay.rotation.y = rotY;
            bay.receiveShadow = true;
            scene.add(bay);

            buildPilasterColumn(wallX, side, bayZ + BAY_LENGTH / 2, pilasterMat, baseMat, corniceMat);
            if (b === NUM_BAYS - 1) buildPilasterColumn(wallX, side, bayZ - BAY_LENGTH / 2, pilasterMat, baseMat, corniceMat);

            // Đèn rọi thật cho từng bức tranh
            const trackX = side * (HALL_WIDTH / 2 - 2.35);
            const spot = new THREE.SpotLight(0xffe2b8, 260, 0, 0.44, 0.6, 2);
            spot.position.set(trackX, HALL_HEIGHT - 0.4, bayZ);
            spot.target.position.set(wallX, 3.7, bayZ);
            scene.add(spot, spot.target);
            const lamp = new THREE.Group();
            const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.28, 8), metalMat);
            const head = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 0.34, 16), metalMat);
            const lens = new THREE.Mesh(new THREE.CircleGeometry(0.1, 16), lensMat);
            lens.position.y = -0.172; lens.rotation.x = Math.PI / 2;
            const headPivot = new THREE.Group();
            headPivot.add(head, lens);
            headPivot.position.y = -0.24;
            headPivot.rotation.z = side * 0.95;
            lamp.add(stem, headPivot);
            lamp.position.set(trackX, HALL_HEIGHT - 0.2, bayZ);
            scene.add(lamp);

            // Khung tranh mạ vàng (đùn khối có vát cạnh) + tranh
            const piece = MUSEUM_PIECES[pieceIndex];
            const fw = 3.9, fh = 2.85;
            const frame = new THREE.Group();
            const outer = gildedRing(fw + 0.62, fh + 0.62, fw + 0.12, fh + 0.12, 0.05, 0.1, goldMat);
            const inner = gildedRing(fw + 0.14, fh + 0.14, fw, fh, 0.03, 0.03, darkGoldMat);
            inner.position.z = 0.1;
            const liner = new THREE.Mesh(new THREE.PlaneGeometry(fw + 0.14, fh + 0.14), linenMat);
            liner.position.z = 0.06;
            const art = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh),
                new THREE.MeshStandardMaterial({ map: createArtworkCanvasTexture(piece), roughness: 0.6, envMapIntensity: 0.3 }));
            art.position.z = 0.075;
            art.userData = { isArtwork: true, pieceIndex };
            paintingMeshes.push(art);
            const plac = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.25, 0.015),
                new THREE.MeshStandardMaterial({ map: MuseumTextures.placard(piece), roughness: 0.8 }));
            plac.position.set(fw / 2 + 0.75, -0.75, -0.03);
            frame.add(outer, inner, liner, art, plac);
            frame.traverse(o => { if (o.isMesh) o.castShadow = true; });
            frame.position.set(wallX - side * 0.04, 3.55, bayZ);
            frame.rotation.y = rotY;
            scene.add(frame);

            // Cột chắn + dây nhung
            const sx = wallX - side * 1.55;
            buildStanchionPost(sx, bayZ + 2.7, metalMat, shadowTex);
            buildStanchionPost(sx, bayZ - 2.7, metalMat, shadowTex);
            buildVelvetRope(sx, bayZ + 2.7, bayZ - 2.7, ropeMat);
        });
        if (b < NUM_BAYS - 1) buildCenterBench(0, bayZ - BAY_LENGTH / 2, shadowTex);
    }
}

function gildedRing(ow, oh, iw, ih, depth, bevel, mat) {
    const s = new THREE.Shape();
    s.moveTo(-ow / 2, -oh / 2); s.lineTo(ow / 2, -oh / 2); s.lineTo(ow / 2, oh / 2); s.lineTo(-ow / 2, oh / 2); s.lineTo(-ow / 2, -oh / 2);
    const hole = new THREE.Path();
    hole.moveTo(-iw / 2, -ih / 2); hole.lineTo(-iw / 2, ih / 2); hole.lineTo(iw / 2, ih / 2); hole.lineTo(iw / 2, -ih / 2); hole.lineTo(-iw / 2, -ih / 2);
    s.holes.push(hole);
    const g = new THREE.ExtrudeGeometry(s, {
        depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.9, bevelSegments: 4, curveSegments: 1
    });
    return new THREE.Mesh(g, mat);
}

function buildPilasterColumn(wallX, side, zPos, pilasterMat, baseMat, capMat) {
    const g = new THREE.Group();
    const add = (w, h, d, mat, y) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.y = y; m.castShadow = true; m.receiveShadow = true; g.add(m);
    };
    add(0.5, HALL_HEIGHT - 1.5, 0.92, pilasterMat, HALL_HEIGHT / 2);
    add(0.6, 0.95, 1.06, baseMat, 0.475);
    add(0.62, 0.12, 1.1, capMat, 1.0);
    add(0.6, 0.28, 1.06, capMat, HALL_HEIGHT - 1.05);
    add(0.7, 0.25, 1.16, capMat, HALL_HEIGHT - 0.8);
    g.position.set(wallX - side * 0.17, 0, zPos);
    scene.add(g);
}

function contactShadow(x, z, w, d, tex, opacity = 0.6) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({
        map: tex, transparent: true, opacity, depthWrite: false, color: 0xffffff
    }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, 0.012, z);
    scene.add(m);
}

function buildStanchionPost(x, z, mat, shadowTex) {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.05, 24), mat);
    base.position.y = 0.025;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.92, 12), mat);
    pole.position.y = 0.48;
    const fin = new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 14), mat);
    fin.position.y = 0.96;
    g.add(base, pole, fin);
    g.traverse(o => { if (o.isMesh) o.castShadow = true; });
    g.position.set(x, 0, z);
    scene.add(g);
    contactShadow(x, z, 0.75, 0.75, shadowTex, 0.7);
}

function buildVelvetRope(x, z1, z2, mat) {
    const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(x, 0.9, z1), new THREE.Vector3(x, 0.6, (z1 + z2) / 2), new THREE.Vector3(x, 0.9, z2));
    const rope = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.022, 8, false), mat);
    rope.castShadow = true;
    scene.add(rope);
}

function buildCenterBench(x, z, shadowTex) {
    const g = new THREE.Group();
    const wood = new THREE.MeshStandardMaterial({ color: 0x2a1c13, roughness: 0.38 });
    const leg = new THREE.MeshStandardMaterial({ color: 0x151311, roughness: 0.4, metalness: 0.6 });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.09, 0.82), wood);
    seat.position.y = 0.52;
    const apron = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.08, 0.66), leg);
    apron.position.y = 0.44;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.05, 0.06), leg);
    bar.position.y = 0.16;
    g.add(seat, apron, bar);
    [-1.15, 1.15].forEach(lx => [-0.3, 0.3].forEach(lz => {
        const l = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.48, 0.08), leg);
        l.position.set(lx, 0.24, lz); g.add(l);
    }));
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    g.position.set(x, 0, z);
    scene.add(g);
    contactShadow(x, z, 3.4, 1.4, shadowTex, 0.75);
}

function buildEndWalls() {
    const { corniceMat, pilasterMat } = MuseumScene.mats;
    const endZ = -HALL_LENGTH / 2;
    const backMat = new THREE.MeshStandardMaterial({ map: MuseumTextures.plaster('#6b7262', 3), roughness: 0.9 });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(HALL_WIDTH, HALL_HEIGHT), backMat);
    back.position.set(0, HALL_HEIGHT / 2, endZ);
    scene.add(back);
    const portal = new THREE.Mesh(new THREE.BoxGeometry(3.0, 4.4, 0.3), corniceMat);
    portal.position.set(0, 2.2, endZ + 0.1);
    scene.add(portal);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.9),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.86, 0.6).multiplyScalar(2.2), fog: false }));
    glow.position.set(0, 2.0, endZ + 0.27);
    scene.add(glow);
    const warm = new THREE.PointLight(0xffd59a, 60, 0, 2);
    warm.position.set(0, 2.5, endZ + 2);
    scene.add(warm);
    const front = new THREE.Mesh(new THREE.PlaneGeometry(HALL_WIDTH, HALL_HEIGHT), pilasterMat);
    front.position.set(0, HALL_HEIGHT / 2, HALL_LENGTH / 2);
    front.rotation.y = Math.PI;
    scene.add(front);
}

// Chụp môi trường phòng → env map PMREM (ánh sáng dội & phản chiếu cho khung vàng)
function bakeEnvironment() {
    const pmrem = new THREE.PMREMGenerator(renderer);
    if (MuseumScene.reflector) MuseumScene.reflector.visible = false;
    renderer.shadowMap.needsUpdate = true;
    scene.position.set(0, -3.2, 0);
    scene.updateMatrixWorld(true);
    const rt = pmrem.fromScene(scene, 0.035, 0.1, 120);
    scene.position.set(0, 0, 0);
    scene.updateMatrixWorld(true);
    if (MuseumScene.reflector) MuseumScene.reflector.visible = true;
    scene.environment = rt.texture;
    pmrem.dispose();
}

// Bóng đổ đi theo người xem (cập nhật khi di chuyển đủ xa → tiết kiệm GPU)
function updateMuseumShadows() {
    if (GraphicsQuality.low) return;
    const sun = MuseumScene.sunLight;
    if (Math.abs(camPos.z - MuseumScene.lastShadowZ) < 1.5) return;
    const cz = camPos.z - 10;
    sun.position.set(3, 22, cz + 7);
    sun.target.position.set(0, 0, cz);
    sun.target.updateMatrixWorld();
    MuseumScene.lastShadowZ = camPos.z;
    renderer.shadowMap.needsUpdate = true;
}

function resizeMuseum() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    postFX.setSize(innerWidth, innerHeight);
}

