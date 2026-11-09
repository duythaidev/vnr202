
// =============================================================================
// BẢNG GHIM 3D FULLSCREEN (mở khi click một bức tranh)
//  - Bảng xanh đen, thẻ giấy cũ ghim đinh đỏ, dây đỏ nối các checkpoint (step)
//  - Bố cục ngẫu nhiên theo seed: thẻ kế tiếp có thể nằm ở BẤT KỲ hướng nào
//  - Camera bay theo đường cong Bezier + lắc nghiêng, có motion blur theo vận tốc
//  - Tới thẻ mới: bút 3D viết chữ, rồi ảnh / đồ hoạ hiện lên (board-writer.js)
// =============================================================================
const StoryBoard = (() => {
    const CW = 3.2, CH = CW * BoardWriter.H / BoardWriter.W;   // kích thước thẻ chính
    const MW = 1.6, MH = 1.08;                                // thẻ trang trí
    const V3 = THREE.Vector3;
    let renderer, scene, camera, fx, root, spot, fill, pen, pinGeo, pinMat, needleMat, stringMat, softTex;
    let raf = 0, inited = false;
    const clock = new THREE.Clock();
    const raycaster = new THREE.Raycaster();
    const st = {
        isOpen: false, isTransitioning: false, piece: 0, story: null,
        cards: [], decor: [], current: -1, flight: null, writer: null,
        mouse: { x: 0, y: 0 }, parallax: new THREE.Vector2(),
        cam: { pos: new V3(), look: new V3(), roll: 0 },
        prevLook: new V3(), prevDist: 0, idleTime: 0, autoTimer: 0,
        paused: false, opening: false, gen: 0
    };
    // ---- sự kiện cho mode thuyết trình: stepReady / written / opened / closed ----
    const listeners = {};
    function on(ev, fn) { (listeners[ev] = listeners[ev] || new Set()).add(fn); return () => listeners[ev].delete(fn); }
    function emit(ev, data) { (listeners[ev] || []).forEach(fn => { try { fn(data); } catch (e) { console.error(e); } }); }
    // mode thuyết trình có thể "chiếm" input: trả về true nghĩa là đã xử lý
    const routed = (action, arg) => !!(api.inputHook && api.inputHook(action, arg));
    const $ = (id) => document.getElementById(id);

    // ---------------- Khởi tạo renderer / ánh sáng / bút ----------------
    function init() {
        if (inited) return;
        inited = true;
        const wrap = $('boardCanvasWrap');
        renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
        renderer.setPixelRatio(GraphicsQuality.pixelRatio());
        renderer.setSize(innerWidth, innerHeight);
        renderer.physicallyCorrectLights = true;
        renderer.toneMapping = THREE.NoToneMapping;
        renderer.shadowMap.enabled = !GraphicsQuality.low;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        wrap.appendChild(renderer.domElement);

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x070a09);
        camera = new THREE.PerspectiveCamera(36, innerWidth / innerHeight, 0.05, 200);
        root = new THREE.Group();
        scene.add(root);

        const pm = new THREE.PMREMGenerator(renderer);
        scene.environment = pm.fromScene(new THREE.RoomEnvironment(), 0.04).texture;
        pm.dispose();

        scene.add(new THREE.HemisphereLight(0x9fb3a6, 0x140e08, 0.35));
        spot = new THREE.SpotLight(0xffd6a0, 120, 0, 0.36, 0.85, 2);
        spot.castShadow = true;
        spot.shadow.mapSize.set(2048, 2048);
        spot.shadow.bias = -0.0012;
        spot.shadow.normalBias = 0.035;
        spot.shadow.camera.near = 2; spot.shadow.camera.far = 20;
        scene.add(spot, spot.target);
        fill = new THREE.SpotLight(0xc8d6cc, 26, 0, 0.95, 1, 2);
        scene.add(fill, fill.target);

        // ghim: tiện tròn (lathe) – đầu tròn, cổ, đế
        const prof = [[0, 0.175], [0.03, 0.172], [0.055, 0.162], [0.072, 0.145], [0.08, 0.122], [0.076, 0.1], [0.06, 0.085], [0.035, 0.078],
            [0.03, 0.05], [0.046, 0.036], [0.052, 0.022], [0.046, 0.01], [0, 0.008]].map(([r, y]) => new THREE.Vector2(r, y));
        pinGeo = new THREE.LatheGeometry(prof, 28);
        pinGeo.rotateX(Math.PI / 2);
        pinMat = new THREE.MeshPhysicalMaterial({ color: 0xc0141b, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.5 });
        needleMat = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, metalness: 1, roughness: 0.3 });
        stringMat = new THREE.MeshStandardMaterial({ color: 0xa3121a, roughness: 0.65, envMapIntensity: 0.2 });
        softTex = softRectTexture();
        pen = buildPen();
        scene.add(pen);

        fx = FX.createComposer(renderer, scene, camera, {
            bloom: { strength: 0.22, radius: 0.6, threshold: 0.88 },
            motionBlur: true,
            grade: { exposure: 1.05, saturation: 0.95, vignette: 0.7, vignetteSoft: 0.85, grain: 0.045, tint: [1.04, 0.99, 0.9] }
        });
        bindEvents();
    }

    function softRectTexture() {
        const [cv, c] = BoardPaper.makeCanvas(256, 256);
        c.filter = 'blur(18px)';
        c.fillStyle = 'rgba(0,0,0,0.85)';
        c.fillRect(40, 40, 176, 176);
        return FX.canvasTexture(cv, { srgb: false });
    }

    function buildPen() {
        const g = new THREE.Group();
        const lacquer = new THREE.MeshPhysicalMaterial({ color: 0x0c0b0a, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 0.8 });
        const gold = new THREE.MeshStandardMaterial({ color: 0xd9ac5a, metalness: 1, roughness: 0.25, envMapIntensity: 1.2 });
        const add = (geo, mat, y) => { const m = new THREE.Mesh(geo, mat); m.position.y = y; m.castShadow = true; g.add(m); return m; };
        const nib = add(new THREE.ConeGeometry(0.018, 0.08, 20), gold, 0.04); nib.rotation.x = Math.PI;
        add(new THREE.CylinderGeometry(0.021, 0.018, 0.16, 20), lacquer, 0.16);
        add(new THREE.CylinderGeometry(0.025, 0.025, 0.026, 20), gold, 0.253);
        add(new THREE.CylinderGeometry(0.026, 0.023, 0.6, 24), lacquer, 0.566);
        add(new THREE.CylinderGeometry(0.027, 0.027, 0.02, 20), gold, 0.82);
        const cap = add(new THREE.SphereGeometry(0.026, 20, 12), lacquer, 0.866); cap.scale.y = 0.8;
        const clip = add(new THREE.BoxGeometry(0.008, 0.22, 0.012), gold, 0.72); clip.position.x = 0.03;
        g.visible = false;
        return g;
    }

    // ---------------- Dựng bảng cho 1 bức tranh ----------------
    function clearBoard() {
        root.traverse(o => {
            if (o.isMesh) {
                if (o.geometry !== pinGeo) o.geometry.dispose();
                if (o.material.map && o.material.map !== softTex) o.material.map.dispose();
                if (o.material !== pinMat && o.material !== needleMat && o.material !== stringMat) o.material.dispose();
            }
        });
        root.clear();
        st.cards = []; st.decor = []; st.current = -1; st.writer = null;
    }

    function overlaps(placed, x, y, w, h, pad) {
        return placed.some(p => Math.abs(p.x - x) < (p.w + w) / 2 + pad && Math.abs(p.y - y) < (p.h + h) / 2 + pad);
    }

    function curvedCardGeo(w, h, rand) {
        const geo = new THREE.PlaneGeometry(w, h, 40, 26);
        const pos = geo.attributes.position;
        const ph = rand() * 6, bulge = rand.range(0.02, 0.05), curl = rand.range(-0.03, 0.04);
        for (let i = 0; i < pos.count; i++) {
            const u = pos.getX(i) / w + 0.5, v = pos.getY(i) / h + 0.5;
            let z = bulge * Math.sin(Math.PI * u) * Math.sin(Math.PI * v);
            z += 0.006 * Math.sin(u * 7 + ph) * Math.sin(v * 5);
            z += curl * Math.pow(1 - v, 3) * Math.sin(Math.PI * u) * 0.6; // mép dưới hơi cong lên
            pos.setZ(i, z);
        }
        geo.computeVertexNormals();
        return geo;
    }

    function addPin(x, y, scale = 1, z = 0.03) {
        const pin = new THREE.Mesh(pinGeo, pinMat);
        pin.position.set(x, y, z);
        pin.scale.setScalar(scale);
        pin.rotation.set(0.12, -0.1, 0);
        pin.castShadow = true;
        root.add(pin);
        return pin.position.clone().setZ(z + 0.06 * scale);
    }

    function addString(a, b) {
        const geo = new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 1, 0.009, 6, false);
        const m = new THREE.Mesh(geo, stringMat);
        m.castShadow = true;
        root.add(m);
    }

    function addCard(x, y, w, h, rot, canvas, seed, rand) {
        const tex = FX.canvasTexture(canvas, { aniso: 8 });
        const mat = new THREE.MeshStandardMaterial({
            map: tex, roughness: 0.92, envMapIntensity: 0.04,
            bumpMap: BoardPaper.paperBump(512, Math.round(512 * h / w), seed), bumpScale: 0.012
        });
        const mesh = new THREE.Mesh(curvedCardGeo(w, h, rand), mat);
        mesh.position.set(x, y, 0.02);
        mesh.rotation.z = rot;
        mesh.castShadow = true; mesh.receiveShadow = true;
        root.add(mesh);
        // bóng mềm (AO) dưới thẻ
        const ao = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.12, h * 1.14),
            new THREE.MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false, opacity: 0.6 }));
        ao.position.set(x + 0.04, y - 0.06, 0.004); ao.rotation.z = rot;
        root.add(ao);
        mesh.updateMatrixWorld();
        return { mesh, tex };
    }

    function buildBoard(story) {
        clearBoard();
        const steps = story.steps;
        const rand = FX.rng(story.seed ?? FX.hashString(String(st.piece)));
        const placed = [];

        // 1) Thẻ step: mỗi thẻ kế tiếp đặt theo hướng ngẫu nhiên quanh thẻ trước
        steps.forEach((step, i) => {
            let x = 0, y = 0;
            if (step.pos) [x, y] = step.pos;
            else if (i > 0) {
                const prev = placed[i - 1];
                for (let k = 0; k < 400; k++) {
                    const a = rand() * Math.PI * 2, d = rand.range(4.1, 5.3) * (1 + k * 0.004);
                    x = prev.x + Math.cos(a) * d * 1.1; y = prev.y + Math.sin(a) * d * 0.8;
                    if (!overlaps(placed, x, y, CW, CH, 0.55)) break;
                }
            }
            placed.push({ x, y, w: CW, h: CH });
        });

        // 2) Thẻ trang trí xung quanh
        const decorN = ((typeof STORY_CONFIG !== 'undefined') && STORY_CONFIG.decorCards) ?? 9;
        const piece = MUSEUM_PIECES[st.piece];
        const decorPlaced = [];
        for (let i = 0; i < decorN; i++) {
            const host = placed[rand.int(0, placed.length - 1)];
            for (let k = 0; k < 120; k++) {
                const a = rand() * Math.PI * 2, d = rand.range(2.5, 3.6);
                const x = host.x + Math.cos(a) * d * 1.15, y = host.y + Math.sin(a) * d * 0.85;
                if (!overlaps(placed.concat(decorPlaced), x, y, MW, MH, 0.25)) { decorPlaced.push({ x, y, w: MW, h: MH }); break; }
            }
        }

        // 3) Mặt bảng phủ toàn bộ bố cục
        const all = placed.concat(decorPlaced);
        const minX = Math.min(...all.map(p => p.x)) - 9, maxX = Math.max(...all.map(p => p.x)) + 9;
        const minY = Math.min(...all.map(p => p.y)) - 7, maxY = Math.max(...all.map(p => p.y)) + 7;
        const bw = maxX - minX, bh = maxY - minY;
        const boardTex = BoardPaper.boardSurface();
        boardTex.repeat.set(bw / 7, bh / 7);
        const board = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh),
            new THREE.MeshStandardMaterial({ map: boardTex, roughness: 0.95, envMapIntensity: 0.15 }));
        board.position.set((minX + maxX) / 2, (minY + maxY) / 2, 0);
        board.receiveShadow = true;
        root.add(board);
        const chalkTex = BoardPaper.chalkMarks(rand.int(1, 9999));
        chalkTex.wrapS = chalkTex.wrapT = THREE.RepeatWrapping;
        chalkTex.repeat.set(bw / 11, bh / 11);
        const chalk = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh),
            new THREE.MeshStandardMaterial({ map: chalkTex, transparent: true, opacity: 0.06, roughness: 1, depthWrite: false, envMapIntensity: 0.12 }));
        chalk.position.copy(board.position).setZ(0.003);
        root.add(chalk);
        st.bounds = { cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, w: bw - 14, h: bh - 10 };

        // 4) Tạo mesh thẻ step + ghim 4 góc
        steps.forEach((step, i) => {
            const p = placed[i];
            const rot = rand.range(-0.07, 0.07);
            const seed = (story.seed || 1) * 100 + i;
            const paper = BoardPaper.agedPaper(BoardWriter.W, BoardWriter.H, seed);
            const canvas = document.createElement('canvas');
            canvas.width = BoardWriter.W; canvas.height = BoardWriter.H;
            BoardWriter.drawBlank(canvas, paper, step, i);
            const { mesh, tex } = addCard(p.x, p.y, CW, CH, rot, canvas, seed, rand);
            mesh.userData.stepIndex = i;
            const pins = [[-1, 1], [1, 1], [-1, -1], [1, -1]].map(([sx, sy]) => {
                const v = new V3(sx * (CW / 2 - 0.12), sy * (CH / 2 - 0.12), 0).applyAxisAngle(new V3(0, 0, 1), rot);
                return addPin(p.x + v.x, p.y + v.y, 1.15, 0.03);
            });
            st.cards.push({
                step, mesh, tex, canvas, paper, seed, pins, rot, visited: false, writer: null,
                center: new V3(p.x, p.y, 0),
                camOff: new THREE.Vector2(rand.range(-0.22, 0.22), rand.range(-0.34, -0.12))
            });
        });

        // 5) Ghi chú phụ lấy từ nội dung tranh VNR202
        decorPlaced.forEach((p, i) => {
            const rot = rand.range(-0.12, 0.12);
            const seed = (story.seed || 1) * 1000 + i;
            const paper = BoardPaper.agedPaper(800, 540, seed, { folds: rand() < 0.6, burns: 1 });
            const canvas = document.createElement('canvas'); canvas.width = 800; canvas.height = 540;
            const h = piece.hotspots[i % piece.hotspots.length];
            BoardWriter.drawMiniCard(canvas, paper, { kind: 'lines', label: h.name.split('(')[0].slice(0, 26), lines: [h.desc.slice(0, 48), piece.date] }, seed);
            const { mesh } = addCard(p.x, p.y, MW, MH, rot, canvas, seed, rand);
            const pinsD = (rand() < 0.5 ? [[-1, 1], [1, 1]] : [[0, 1]]).map(([sx, sy]) => {
                const v = new V3(sx * (MW / 2 - 0.1), sy * (MH / 2 - 0.1), 0).applyAxisAngle(new V3(0, 0, 1), rot);
                return addPin(p.x + v.x, p.y + v.y, 0.8, 0.03);
            });
            st.decor.push({ mesh, pins: pinsD, center: new V3(p.x, p.y, 0) });
        });

        // 6) Dây đỏ nối các checkpoint theo thứ tự step (qua 1 ghim nhỏ ở giữa)
        const nearestPin = (pins, target) => pins.reduce((a, b) => (a.distanceTo(target) < b.distanceTo(target) ? a : b));
        for (let i = 0; i < st.cards.length - 1; i++) {
            const A = st.cards[i], B = st.cards[i + 1];
            const pa = nearestPin(A.pins, B.center), pb = nearestPin(B.pins, A.center);
            const mid = pa.clone().lerp(pb, 0.5);
            const perp = new V3(-(pb.y - pa.y), pb.x - pa.x, 0).normalize().multiplyScalar(rand.range(-0.7, 0.7));
            const j = addPin(mid.x + perp.x, mid.y + perp.y, 0.55, 0.02);
            addString(pa, j); addString(j, pb);
        }
        // dây phụ từ thẻ trang trí tới thẻ chính / ra mép bảng
        st.decor.forEach((d, i) => {
            if (rand() < 0.45) return;
            const target = rand() < 0.6 ? nearestPin(st.cards.flatMap(c => c.pins), d.center)
                : d.center.clone().add(new V3(rand.range(-6, 6), rand.range(-5, 5), 0.02));
            const a = d.pins[0];
            const j = addPin((a.x + target.x) / 2 + rand.range(-0.4, 0.4), (a.y + target.y) / 2 + rand.range(-0.4, 0.4), 0.5, 0.02);
            addString(a, j); addString(j, target);
        });
    }

    // ---------------- Camera ----------------
    function cardPose(card) {
        const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const aspect = innerWidth / innerHeight;
        const mobile = aspect < 0.9;
        const d = Math.max(CW * (mobile ? 1.06 : 1.3) / (2 * t * aspect), CH * 1.5 / (2 * t));
        const dir = new V3(card.camOff.x, card.camOff.y, 1).normalize();
        // mode thuyết trình: lùi xa hơn một chút + đẩy thẻ lên trên để chừa chỗ cho phụ đề
        const tour = api.tourActive ? 1 : 0;
        const dd = d * (1 + 0.2 * tour);
        return {
            pos: card.center.clone().add(new V3(0, -0.42 * tour, 0)).addScaledVector(dir, dd).setZ(card.center.z + dir.z * dd),
            look: card.center.clone().add(new V3(0, -0.03 - 0.42 * tour, 0.02)),
            roll: card.rot * 0.55
        };
    }
    function overviewPose() {
        const b = st.bounds, t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const d = Math.max(b.w / (2 * t * camera.aspect), b.h / (2 * t)) * 1.05;
        const c = new V3(b.cx, b.cy, 0);
        return { pos: c.clone().add(new V3(1.5, -3, d)), look: c, roll: -0.12 };
    }

    function startFlight(toPose, dur, kick) {
        const from = { pos: st.cam.pos.clone(), look: st.cam.look.clone(), roll: st.cam.roll };
        const dist = from.look.distanceTo(toPose.look);
        const side = new V3(-(toPose.look.y - from.look.y), toPose.look.x - from.look.x, 0).normalize();
        const speed = ((typeof STORY_CONFIG !== 'undefined') && STORY_CONFIG.flightSpeed) || 1;
        st.flight = {
            t: 0, dur: (dur ?? Math.min(1.9, 1.05 + dist * 0.07)) / speed, from, to: toPose,
            pull: 0.8 + dist * 0.22, side: side.multiplyScalar((Math.random() - 0.5) * dist * 0.25),
            kick: kick ?? (Math.random() < 0.5 ? -1 : 1) * (0.12 + Math.random() * 0.14)
        };
    }

    function updateFlight(dt) {
        const f = st.flight;
        if (!f) return;
        f.t = Math.min(1, f.t + dt / f.dur);
        const e = FX.easeInOutCubic(f.t);
        const P0 = f.from.pos, P3 = f.to.pos;
        const P1 = P0.clone().add(new V3(0, 0, f.pull)).add(f.side);
        const P2 = P3.clone().add(new V3(0, 0, f.pull * 0.8)).add(f.side);
        const u = 1 - e;
        st.cam.pos.set(0, 0, 0)
            .addScaledVector(P0, u * u * u).addScaledVector(P1, 3 * u * u * e)
            .addScaledVector(P2, 3 * u * e * e).addScaledVector(P3, e * e * e);
        const el = FX.easeInOutSine(FX.clamp01((f.t - 0.04) / 0.9));
        st.cam.look.lerpVectors(f.from.look, f.to.look, el);
        st.cam.roll = f.from.roll + (f.to.roll - f.from.roll) * e + Math.sin(Math.PI * f.t) * f.kick;
        if (f.t >= 1) { st.flight = null; if (f.onDone) f.onDone(); }
    }

    function applyCamera(dt) {
        st.parallax.lerp(new THREE.Vector2(st.mouse.x, st.mouse.y), 1 - Math.pow(0.02, dt));
        const k = st.flight ? 0.3 : 1;
        camera.position.copy(st.cam.pos).add(new V3(st.parallax.x * 0.16 * k, st.parallax.y * 0.1 * k, 0));
        camera.up.set(-Math.sin(st.cam.roll), Math.cos(st.cam.roll), 0);
        camera.lookAt(st.cam.look);
        // đèn rọi bám theo điểm nhìn (từ trên-trái → bóng ghim đổ xuống phải như ảnh mẫu)
        spot.position.copy(st.cam.look).add(new V3(-2.2, 2.9, 5.6));
        spot.target.position.copy(st.cam.look);
        fill.position.copy(st.cam.look).add(new V3(2, -1, 9));
        fill.target.position.copy(st.cam.look);
    }

    // motion blur: đo điểm nhìn của frame trước bị "trôi" bao xa trên màn hình
    function updateMotionBlur(dt) {
        // quy về "màn trập" tương đương 60fps để độ nhoè không phụ thuộc FPS
        const strength = ((typeof STORY_CONFIG !== 'undefined') ? STORY_CONFIG.motionBlur : 1) * THREE.MathUtils.clamp((1 / 60) / Math.max(dt, 1e-3), 0.3, 1.5);
        const p = st.prevLook.clone().project(camera);
        const v = new THREE.Vector2(p.x * 0.5, p.y * 0.5).multiplyScalar(-1.5 * strength);
        if (v.length() > 0.14) v.setLength(0.14);
        const dist = camera.position.distanceTo(st.cam.look);
        const zoom = st.prevDist ? THREE.MathUtils.clamp((st.prevDist - dist) / dist * 1.4 * strength, -0.12, 0.12) : 0;
        fx.motion.uniforms.velocity.value.copy(v);
        fx.motion.uniforms.zoom.value = zoom;
        fx.motion.enabled = !GraphicsQuality.low && (v.length() > 0.0012 || Math.abs(zoom) > 0.002);
        st.prevLook.copy(st.cam.look);
        st.prevDist = dist;
    }

    // ---------------- Bút + viết ----------------
    const penLocalQuat = new THREE.Quaternion().setFromUnitVectors(new V3(0, 1, 0), new V3(0.42, 0.48, 0.77).normalize());
    let previousPenTip = null;
    function updateWriting(dt) {
        const card = st.cards[st.current];
        if (!card || !card.writer) { pen.visible = false; MuseumSound.writing(false); return; }
        const res = card.writer.update(dt);
        if (res.changed) card.tex.needsUpdate = true;
        pen.visible = res.visible && !st.flight;
        const writing = pen.visible && res.writing && !st.isTransitioning && !st.paused;
        const penSpeed = previousPenTip && writing ? Math.hypot(res.tip.x - previousPenTip.x, res.tip.y - previousPenTip.y) / Math.max(dt, .001) / 1100 : 1;
        MuseumSound.writing(writing, penSpeed);
        previousPenTip = writing ? { x: res.tip.x, y: res.tip.y } : null;
        if (pen.visible) {
            const lx = (res.tip.x / BoardWriter.W - 0.5) * CW, ly = (0.5 - res.tip.y / BoardWriter.H) * CH;
            const zSurf = 0.035 + res.tip.lift * 0.2;
            const world = card.mesh.localToWorld(new V3(lx, ly, zSurf));
            pen.position.lerp(world, res.tip.lift > 0.5 ? 0.25 : 1);
            const wob = new THREE.Quaternion().setFromEuler(new THREE.Euler(
                Math.sin(performance.now() * 0.011) * 0.04, Math.sin(performance.now() * 0.007) * 0.05, 0));
            pen.quaternion.copy(card.mesh.quaternion).multiply(penLocalQuat).multiply(wob);
        }
        if (card.writer.done && !card.visited) {
            card.visited = true;
            updateHud();
            if (!api.tourActive && typeof STORY_CONFIG !== 'undefined' && STORY_CONFIG.autoAdvance && st.current < st.cards.length - 1) st.autoTimer = 1.4;
            emit('written', { piece: st.piece, index: st.current, gen: st.gen });
        }
    }

    function finishCurrent() {
        previousPenTip = null;
        MuseumSound.writing(false);
        const card = st.cards[st.current];
        if (card && card.writer && !card.writer.done) {
            card.writer.finish(); card.writer.update(0); card.tex.needsUpdate = true;
            if (!card.visited) { card.visited = true; updateHud(); emit('written', { piece: st.piece, index: st.current, gen: st.gen }); }
        }
    }

    function goTo(i, opts = {}) {
        if (i < 0 || i >= st.cards.length || (i === st.current && !opts.force)) return;
        if (!opts.instant && !opts.entering) MuseumSound.whoosh();
        if (i !== st.current) finishCurrent();
        st.autoTimer = 0;
        st.current = i;
        const card = st.cards[i];
        if (opts.rewrite) {          // viết lại từ đầu (dùng khi thuyết trình quay lại 1 bước)
            card.writer = null; card.visited = false;
            BoardWriter.drawBlank(card.canvas, card.paper, card.step, i);
            card.tex.needsUpdate = true;
        }
        updateHud();
        const gen = st.gen;
        const begin = () => {
            if (gen !== st.gen) return;
            if (!card.writer) {
                card.writer = new BoardWriter.Writer(card.canvas, card.paper, card.step, card.seed);
                if (card.visited) card.writer.finish();
            }
            emit('stepReady', { piece: st.piece, index: i, gen });
        };
        if (opts.instant) {
            const pose = cardPose(card);
            st.cam.pos.copy(pose.pos); st.cam.look.copy(pose.look); st.cam.roll = pose.roll;
            st.flight = null; begin();
        } else {
            startFlight(cardPose(card), opts.dur, opts.kick);
            st.flight.onDone = begin;
        }
    }

    // ---------------- HUD ----------------
    function updateHud() {
        const p = MUSEUM_PIECES[st.piece];
        $('boardPieceCode').textContent = `${p.code} · BƯỚC ${st.current + 1}/${st.cards.length}`;
        $('boardPieceTitle').textContent = p.title;
        $('boardDots').innerHTML = st.cards.map((c, i) =>
            `<button class="board-dot${i === st.current ? ' on' : ''}${c.visited ? ' done' : ''}" data-i="${i}" title="${(c.step.title || '').replace(/"/g, '')}">${i + 1}</button>`).join('');
        $('boardPrev').disabled = !api.tourActive && st.current <= 0;
        $('boardNext').disabled = !api.tourActive && st.current >= st.cards.length - 1;
    }

    function bindEvents() {
        const dom = renderer.domElement;
        let down = null;
        dom.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
        dom.addEventListener('pointerup', (e) => {
            if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
            const hit = pick(e);
            if (hit) { if (!routed('card', hit.userData.stepIndex)) goTo(hit.userData.stepIndex); }
            else if (!routed('space')) skipOrNext();
        });
        dom.addEventListener('pointermove', (e) => {
            st.mouse.x = (e.clientX / innerWidth) * 2 - 1;
            st.mouse.y = -(e.clientY / innerHeight) * 2 + 1;
            dom.style.cursor = pick(e) ? 'pointer' : 'default';
        });
        $('boardPrev').onclick = () => { if (!routed('prev')) goTo(st.current - 1); };
        $('boardNext').onclick = () => { if (!routed('next')) goTo(st.current + 1); };
        $('boardSkip').onclick = () => finishCurrent();
        $('boardClose').onclick = () => { if (!routed('close')) close(); };
        $('boardDots').onclick = (e) => {
            const b = e.target.closest('[data-i]');
            if (b && !routed('card', +b.dataset.i)) goTo(+b.dataset.i);
        };
        window.addEventListener('keydown', (e) => {
            if (!st.isOpen || e.target.tagName === 'INPUT' || api.tourActive) return;
            if (e.code === 'Escape') {
                close();
            } else if (e.code === 'ArrowRight' || e.code === 'KeyD') goTo(st.current + 1);
            else if (e.code === 'ArrowLeft' || e.code === 'KeyA') goTo(st.current - 1);
            else if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); skipOrNext(); }
            else if (/^Digit[1-9]$/.test(e.code)) goTo(+e.code.slice(5) - 1);
        });
        window.addEventListener('resize', () => {
            if (!inited) return;
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(innerWidth, innerHeight);
            fx.setSize(innerWidth, innerHeight);
            if (st.isOpen && !st.flight && st.cards[st.current]) {
                const pose = cardPose(st.cards[st.current]);
                st.cam.pos.copy(pose.pos); st.cam.look.copy(pose.look);
            }
        });
    }

    function skipOrNext() {
        const card = st.cards[st.current];
        if (card && card.writer && !card.writer.done) finishCurrent();
        else if (!st.flight) goTo(st.current + 1 < st.cards.length ? st.current + 1 : 0);
    }

    function pick(e) {
        raycaster.setFromCamera({ x: (e.clientX / innerWidth) * 2 - 1, y: -(e.clientY / innerHeight) * 2 + 1 }, camera);
        const hits = raycaster.intersectObjects(st.cards.map(c => c.mesh));
        return hits.length ? hits[0].object : null;
    }

    // ---------------- Vòng lặp ----------------
    function loop() {
        raf = requestAnimationFrame(loop);
        const realDt = Math.min(0.05, clock.getDelta());
        const dt = st.paused ? 0 : realDt * (api.timeScale || 1) * (window.__tourScale || 1);   // tạm dừng: đóng băng bay + bút
        if (!st.paused) { updateFlight(dt); applyCamera(realDt); updateWriting(dt); }
        else MuseumSound.writing(false);
        st.cards.forEach(c => { if (c !== st.cards[st.current] && c.writer && c.writer.dirty) { c.writer.update(0); c.tex.needsUpdate = true; } });
        if (st.autoTimer > 0 && (st.autoTimer -= dt) <= 0) goTo(st.current + 1);
        updateMotionBlur(st.paused ? realDt : dt);
        fx.grade.uniforms.time.value = performance.now() * 0.001;
        fx.composer.render(dt);
    }

    async function waitFonts() {
        const fonts = ['800 100px "Be Vietnam Pro"', '600 30px "Be Vietnam Pro"', '500 30px "Be Vietnam Pro"', '40px "Patrick Hand"'];
        try { await Promise.race([Promise.all(fonts.map(f => document.fonts.load(f, 'ĐẦU'))), new Promise(r => setTimeout(r, 1500))]); } catch (e) { /* fallback font */ }
    }

    // ---------------- API ----------------
    async function open(pieceIdx, opts = {}) {
        if (st.isOpen) return;
        st.isOpen = true; st.isTransitioning = true; st.opening = true;
        const gen = ++st.gen;
        init();
        await waitFonts();
        if (gen !== st.gen) return;
        st.piece = pieceIdx;
        st.story = getStory(pieceIdx);
        buildBoard(st.story);
        st.opening = false;
        const ov = $('boardOverlay');
        ov.classList.add('open');
        ov.setAttribute('aria-hidden', 'false');
        const start = opts.step || 0;
        if (opts.instant) {
            goTo(start, { instant: true, force: true });
        } else {
            const o = overviewPose();
            st.cam.pos.copy(o.pos); st.cam.look.copy(o.look); st.cam.roll = o.roll;
            MuseumSound.boardEntry();
            goTo(start, { dur: 2.1, kick: 0.05, force: true, entering: true });
        }
        st.prevLook.copy(st.cam.look); st.prevDist = 0;
        clock.getDelta();
        cancelAnimationFrame(raf);
        loop();
        setTimeout(() => { if (gen === st.gen && st.isOpen) st.isTransitioning = false; }, 700);
        emit('opened', { piece: pieceIdx, gen });
    }

    // trả về Promise: resolve khi overlay đã đóng hẳn (an toàn cho mode thuyết trình)
    let closing = null;
    function close() {
        if (!st.isOpen) return Promise.resolve();
        if (closing) return closing;
        MuseumSound.writing(false);
        st.opening = false;
        const gen = ++st.gen;                 // vô hiệu mọi callback của phiên bảng cũ
        st.isTransitioning = true;
        st.flight = null; st.autoTimer = 0;
        const ov = $('boardOverlay');
        ov.classList.remove('open');
        ov.setAttribute('aria-hidden', 'true');
        closing = new Promise(resolve => setTimeout(() => {
            closing = null;
            if (gen !== st.gen) return resolve();
            cancelAnimationFrame(raf);
            st.isOpen = false; st.isTransitioning = false;
            pen.visible = false;
            if (api.onClose) api.onClose();
            emit('closed', { gen });
            resolve();
        }, 650));
        return closing;
    }

    function isStepReady(i) {
        const c = st.cards[i];
        return st.isOpen && st.current === i && !st.flight && !!(c && c.writer);
    }
    function isWritten(i) {
        const c = st.cards[i];
        return !!(c && c.writer && c.writer.done);
    }

    const api = {
        open, close, goTo,
        next: () => goTo(st.current + 1),
        prev: () => goTo(st.current - 1),
        get isOpen() { return st.isOpen; },
        get isTransitioning() { return st.isTransitioning; },
        get state() { return st; },
        get piece() { return st.piece; },
        get current() { return st.current; },
        get cardCount() { return st.cards.length; },
        get isClosing() { return !!closing; },
        get isOpening() { return st.opening; },
        on, isStepReady, isWritten, finishCurrent,
        setPaused(b) { st.paused = !!b; if (st.paused) MuseumSound.writing(false); },
        tourActive: false, inputHook: null, timeScale: 1,
        onClose: null
    };
    return api;
})();
