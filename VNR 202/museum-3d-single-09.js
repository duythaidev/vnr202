
// =============================================================================
// ĐIỀU KHIỂN BẢO TÀNG + HUD + DRAWER CHI TIẾT + ÂM THANH + VÒNG LẶP
// Click tranh → camera bay tới tranh → mở BẢNG GHIM 3D fullscreen (board-scene.js)
// =============================================================================
let pendingBoardTimer = null;
function cancelPendingBoard() { clearTimeout(pendingBoardTimer); pendingBoardTimer = null; }
const tourOwnsCamera = () => typeof MuseumTour !== 'undefined' && MuseumTour.owns;

function setupMuseumControls() {
    const dom = renderer.domElement;
    paintingTooltip = document.getElementById('paintingTooltip');
    dom.addEventListener('mouseleave', hidePaintingTooltip);
    let downPos = { x: 0, y: 0 };
    let tourClickArmed = false;
    dom.addEventListener('mousedown', (e) => {
        hidePaintingTooltip();
        if (tourOwnsCamera()) { downPos = { x: e.clientX, y: e.clientY }; tourClickArmed = true; return; }
        isDraggingLook = true; isAutoFlying = false;
        prevMouse = { x: e.clientX, y: e.clientY };
        downPos = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDraggingLook) { hoverPainting(e); return; }
        targetYaw -= (e.clientX - prevMouse.x) * 0.0032;
        targetPitch = Math.max(-0.55, Math.min(0.55, targetPitch - (e.clientY - prevMouse.y) * 0.0028));
        prevMouse = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('mouseup', (e) => {
        if (tourClickArmed) {
            tourClickArmed = false;
            if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) < 6) {
                const hit = pickPainting(e);
                if (hit) { Presentation.stop(); flyToPiece(hit.userData.pieceIndex, true); }
            }
            return;
        }
        if (!isDraggingLook) return;
        isDraggingLook = false;
        if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) < 6) handleCanvasClick(e);
    });

    let touchStart = null;
    dom.addEventListener('touchstart', (e) => {
        hidePaintingTooltip();
        if (e.touches.length !== 1 || tourOwnsCamera()) return;
        isDraggingLook = true; isAutoFlying = false;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        touchStart = { ...prevMouse, t: performance.now() };
    }, { passive: true });
    dom.addEventListener('touchmove', (e) => {
        if (!isDraggingLook || e.touches.length !== 1) return;
        const t = e.touches[0];
        targetYaw -= (t.clientX - prevMouse.x) * 0.004;
        targetPitch = Math.max(-0.5, Math.min(0.5, targetPitch - (t.clientY - prevMouse.y) * 0.003));
        prevMouse = { x: t.clientX, y: t.clientY };
    }, { passive: true });
    dom.addEventListener('touchend', () => {
        isDraggingLook = false;
        if (touchStart && Math.hypot(prevMouse.x - touchStart.x, prevMouse.y - touchStart.y) < 8 && performance.now() - touchStart.t < 400) {
            handleCanvasClick({ clientX: prevMouse.x, clientY: prevMouse.y });
        }
        touchStart = null;
    });

    dom.addEventListener('wheel', (e) => {
        hidePaintingTooltip();
        if (tourOwnsCamera()) return;
        wheelWalkUntil = performance.now() + 250;
        isAutoFlying = false;
        const fwd = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
        camTargetPos.addScaledVector(fwd, -e.deltaY * 0.012);
        clampPositionInHall(camTargetPos);
    }, { passive: true });

    const keyMap = { KeyW: 'w', ArrowUp: 'w', KeyS: 's', ArrowDown: 's', KeyA: 'a', ArrowLeft: 'a', KeyD: 'd', ArrowRight: 'd' };
    window.addEventListener('keydown', (e) => {
        if (MuseumIntro.active || e.target.tagName === 'INPUT' || StoryBoard.isOpen || tourOwnsCamera()) return;
        if (keyMap[e.code]) { hidePaintingTooltip(); moveKeys[keyMap[e.code]] = true; }
    });
    window.addEventListener('keyup', (e) => { if (keyMap[e.code]) moveKeys[keyMap[e.code]] = false; });
    window.addEventListener('blur', () => { hidePaintingTooltip(); Object.keys(moveKeys).forEach(k => { moveKeys[k] = false; }); footDistance = 0; });
    window.addEventListener('resize', hidePaintingTooltip);
    window.addEventListener('resize', resizeMuseum);
}

function clampPositionInHall(pos) {
    pos.x = Math.max(-5.6, Math.min(5.6, pos.x));
    pos.z = Math.max(-HALL_LENGTH / 2 + 5, Math.min(HALL_LENGTH / 2 - 4, pos.z));
    pos.y = 2.75;
}

function pickPainting(e) {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(paintingMeshes);
    return hits.length ? hits[0].object : null;
}

let hoveredPainting = null;
let paintingTooltip = null;
function hidePaintingTooltip() {
    hoveredPainting = null;
    if (paintingTooltip) paintingTooltip.hidden = true;
    if (renderer) renderer.domElement.style.cursor = 'grab';
}

function hoverPainting(e) {
    if (MuseumIntro.active || StoryBoard.isOpen || tourOwnsCamera() || e.target !== renderer.domElement) { hidePaintingTooltip(); return; }
    const hit = pickPainting(e);
    if (!hit) { hidePaintingTooltip(); return; }
    if (hit !== hoveredPainting) {
        MuseumSound.whoosh(true);
        const piece = MUSEUM_PIECES[hit.userData.pieceIndex];
        document.getElementById('paintingTooltipTitle').textContent = piece.title;
        document.getElementById('paintingTooltipDate').textContent = piece.date;
    }
    hoveredPainting = hit;
    renderer.domElement.style.cursor = 'pointer';
    paintingTooltip.hidden = false;
    const pad = 12, offset = 16;
    const { width, height } = paintingTooltip.getBoundingClientRect();
    let x = e.clientX + offset, y = e.clientY + offset;
    if (x + width > innerWidth - pad) x = e.clientX - width - offset;
    if (y + height > innerHeight - pad) y = e.clientY - height - offset;
    x = Math.max(pad, Math.min(x, innerWidth - width - pad));
    y = Math.max(pad, Math.min(y, innerHeight - height - pad));
    paintingTooltip.style.transform = `translate(${x}px, ${y}px)`;
}

function handleCanvasClick(e) {
    const hit = pickPainting(e);
    if (hit) flyToPiece(hit.userData.pieceIndex, true);
}

// Bay tới trước bức tranh; openBoard=true → mở bảng ghim 3D khi tới nơi
function flyToPiece(pieceIdx, openBoard = true) {
    hidePaintingTooltip();
    MuseumSound.whoosh();
    activePieceIndex = (pieceIdx + MUSEUM_PIECES.length) % MUSEUM_PIECES.length;
    const isLeft = activePieceIndex % 2 === 0;
    const pieceZ = BAY_START_Z - Math.floor(activePieceIndex / 2) * BAY_LENGTH;
    isAutoFlying = true;
    camTargetPos.set(isLeft ? -2.4 : 2.4, 2.75, pieceZ);
    targetYaw = isLeft ? Math.PI / 2 : -Math.PI / 2;
    targetPitch = 0.1;
    // tránh xoay vòng dài: đưa yaw hiện tại về gần targetYaw
    while (targetYaw - yaw > Math.PI) yaw += Math.PI * 2;
    while (yaw - targetYaw > Math.PI) yaw -= Math.PI * 2;
    clearTimeout(pendingBoardTimer);
    if (openBoard) {
        const dist = camPos.distanceTo(camTargetPos);
        pendingBoardTimer = setTimeout(() => StoryBoard.open(activePieceIndex), Math.min(1600, 450 + dist * 28));
    }
}

function stepToNextPiece(delta) {
    const n = (activePieceIndex + delta + MUSEUM_PIECES.length) % MUSEUM_PIECES.length;
    if (StoryBoard.isOpen) { StoryBoard.close().then(() => { if (!tourOwnsCamera()) flyToPiece(n, true); }); return; }
    flyToPiece(n, false);
}

// ---------- Vòng lặp render ----------
const museumClock = new THREE.Clock();
let footDistance = 0, wheelWalkUntil = 0;
function animateMuseum() {
    requestAnimationFrame(animateMuseum);
    const dt = Math.min(0.05, museumClock.getDelta());
    if (StoryBoard.isOpen && hoveredPainting) hidePaintingTooltip();
    if (StoryBoard.isOpen && !StoryBoard.isTransitioning) return; // bảng ghim đang chiếm màn hình

    if (tourOwnsCamera()) {
        MuseumTour.update(dt);
        footDistance = 0;
    } else {
        if (moveKeys.w || moveKeys.s || moveKeys.a || moveKeys.d) {
            isAutoFlying = false;
            const sp = 7.5 * dt;
            const fwd = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
            const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
            if (moveKeys.w) camTargetPos.addScaledVector(fwd, sp);
            if (moveKeys.s) camTargetPos.addScaledVector(fwd, -sp);
            if (moveKeys.d) camTargetPos.addScaledVector(right, sp);
            if (moveKeys.a) camTargetPos.addScaledVector(right, -sp);
            clampPositionInHall(camTargetPos);
        }
        const k = 1 - Math.pow(0.0006, dt);
        const beforeX = camPos.x, beforeZ = camPos.z;
        camPos.lerp(camTargetPos, k * 0.9);
        const walked = Math.hypot(camPos.x - beforeX, camPos.z - beforeZ);
        const manualWalk = !StoryBoard.isOpen && !isAutoFlying && (Object.values(moveKeys).some(Boolean) || performance.now() < wheelWalkUntil);
        if (manualWalk && walked > .005) {
            footDistance += walked;
            if (footDistance >= 1.8) { MuseumSound.footstep(); footDistance = 0; }
        } else footDistance = 0;
        yaw += (targetYaw - yaw) * k;
        pitch += (targetPitch - pitch) * k;
    }
    if (!tourOwnsCamera() || !MuseumTour.paused) {
        camera.position.copy(camPos);
        camera.position.y += Math.sin(performance.now() * 0.0012) * 0.008; // nhịp thở rất nhẹ
        camera.lookAt(camPos.x - Math.sin(yaw) * Math.cos(pitch), camPos.y + Math.sin(pitch), camPos.z - Math.cos(yaw) * Math.cos(pitch));
    }

    updateMuseumShadows();
    updateNearestHudText();
    postFX.grade.uniforms.time.value = performance.now() * 0.001;
    postFX.composer.render(dt);
}

let lastHudPiece = -2;
const _hudPos = new THREE.Vector3();
// Hiện tên tranh khi đứng ở nửa tường của tranh đó và nằm trong khoảng giữa hai bên của khoang (rộng, không cần sát tranh).
function updateNearestHudText() {
    let best = -1, bestDz = BAY_LENGTH * 0.5;
    const side = Math.abs(camPos.x) < 0.8 ? Math.sign(-Math.sin(yaw)) : Math.sign(camPos.x);   // đứng giữa lối thì lấy bên đang nhìn
    for (const art of paintingMeshes) {
        art.getWorldPosition(_hudPos);
        const dz = Math.abs(_hudPos.z - camPos.z);
        if (Math.sign(_hudPos.x) === side && dz < bestDz) { bestDz = dz; best = art.userData.pieceIndex; }
    }
    if (best === lastHudPiece) return;
    lastHudPiece = best;
    const box = document.getElementById('hudPiece');
    if (best < 0) { box.classList.remove('show'); return; }
    const pc = MUSEUM_PIECES[best];
    document.getElementById('hudPieceTitle').textContent = pc.title;
    document.getElementById('hudPieceDate').textContent = pc.date;
    box.classList.add('show');
}

// ---------- Âm thanh tương tác dùng chung với intro ----------
function toggleAmbientAudio() { MuseumSound.toggle(); }

window.MuseumApp = {
    async prepare() {
        initThreeMuseum();
        updateNearestHudText();
        postFX.composer.render(0); // Sẵn sàng sau khung hình thật đầu tiên.
        StoryBoard.onClose = () => { museumClock.getDelta(); };
        Presentation.init();
    },
    start() {
        museumClock.getDelta();
        animateMuseum();
        const q = new URLSearchParams(location.search);
        if (q.has('present')) Presentation.start(Math.max(0, Math.min(MUSEUM_PIECES.length - 1, parseInt(q.get('present'), 10) || 0)));
        else if (q.has('board')) StoryBoard.open(parseInt(q.get('board'), 10) || 0, { instant: true, step: parseInt(q.get('step') || '0', 10) });
    }
};
