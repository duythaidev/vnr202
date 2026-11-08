
// =============================================================================
// ĐIỀU KHIỂN BẢO TÀNG + HUD + DRAWER CHI TIẾT + FLAT VIEW + ÂM THANH + VÒNG LẶP
// Click tranh → camera bay tới tranh → mở BẢNG GHIM 3D fullscreen (board-scene.js)
// =============================================================================
let pendingBoardTimer = null;

function setupMuseumControls() {
    const dom = renderer.domElement;
    let downPos = { x: 0, y: 0 };
    dom.addEventListener('mousedown', (e) => {
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
        if (!isDraggingLook) return;
        isDraggingLook = false;
        if (Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y) < 6) handleCanvasClick(e);
    });

    let touchStart = null;
    dom.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
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
        isAutoFlying = false;
        const fwd = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
        camTargetPos.addScaledVector(fwd, -e.deltaY * 0.012);
        clampPositionInHall(camTargetPos);
    }, { passive: true });

    const keyMap = { KeyW: 'w', ArrowUp: 'w', KeyS: 's', ArrowDown: 's', KeyA: 'a', ArrowLeft: 'a', KeyD: 'd', ArrowRight: 'd' };
    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || StoryBoard.isOpen) return;
        if (e.code === 'Escape') { closeArtworkDetail(); closeFlatViewModal(); }
        if (keyMap[e.code]) moveKeys[keyMap[e.code]] = true;
    });
    window.addEventListener('keyup', (e) => { if (keyMap[e.code]) moveKeys[keyMap[e.code]] = false; });
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

function hoverPainting(e) {
    if (StoryBoard.isOpen || e.target !== renderer.domElement) return;
    renderer.domElement.style.cursor = pickPainting(e) ? 'pointer' : 'grab';
}

function handleCanvasClick(e) {
    const hit = pickPainting(e);
    if (hit) flyToPiece(hit.userData.pieceIndex, true);
}

// Bay tới trước bức tranh; openBoard=true → mở bảng ghim 3D khi tới nơi
function flyToPiece(pieceIdx, openBoard = true) {
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
    if (StoryBoard.isOpen) { StoryBoard.close(); setTimeout(() => flyToPiece(n, true), 700); return; }
    flyToPiece(n, false);
    openArtworkDetail(activePieceIndex);
}

// ---------- Vòng lặp render ----------
const museumClock = new THREE.Clock();
function animateMuseum() {
    requestAnimationFrame(animateMuseum);
    const dt = Math.min(0.05, museumClock.getDelta());
    if (StoryBoard.isOpen && !StoryBoard.isTransitioning) return; // bảng ghim đang chiếm màn hình

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
    camPos.lerp(camTargetPos, k * 0.9);
    yaw += (targetYaw - yaw) * k;
    pitch += (targetPitch - pitch) * k;
    camera.position.copy(camPos);
    camera.position.y += Math.sin(performance.now() * 0.0012) * 0.008; // nhịp thở rất nhẹ
    camera.lookAt(camPos.x - Math.sin(yaw) * Math.cos(pitch), camPos.y + Math.sin(pitch), camPos.z - Math.cos(yaw) * Math.cos(pitch));

    updateMuseumShadows();
    updateNearestHudText();
    postFX.grade.uniforms.time.value = performance.now() * 0.001;
    postFX.composer.render(dt);
}

let lastHudBay = -1;
function updateNearestHudText() {
    const bay = Math.max(0, Math.min(NUM_BAYS - 1, Math.round((BAY_START_Z - camPos.z) / BAY_LENGTH)));
    if (bay === lastHudBay) return;
    lastHudBay = bay;
    const L = MUSEUM_PIECES[Math.min(MUSEUM_PIECES.length - 1, bay * 2)];
    const R = MUSEUM_PIECES[Math.min(MUSEUM_PIECES.length - 1, bay * 2 + 1)];
    document.getElementById('hudNearestPiece').innerText = `Khoang ${bay + 1}: Trái [${L.shortLabel}] · Phải [${R.shortLabel}]`;
}

// ---------- Drawer chi tiết (mở từ nút "Chi tiết & Quiz" trong bảng ghim) ----------
function openArtworkDetail(idx) {
    activePieceIndex = idx;
    const p = MUSEUM_PIECES[idx];
    const $ = (id) => document.getElementById(id);
    $('modalPieceNumber').innerText = `${p.code} / ${MUSEUM_PIECES.length}`;
    $('modalPieceDate').innerText = p.date;
    $('modalPieceChapter').innerText = p.chapter;
    $('modalPieceTitle').innerText = p.title;
    $('modalPieceSubtitle').innerText = p.subtitle;
    $('modalPieceImage').src = p.imageUrl;
    $('customImageUrlInput').value = p.imageUrl;
    $('modalBottomIndex').innerText = `${idx + 1} / ${MUSEUM_PIECES.length}`;
    $('modalPieceBullets').innerHTML = p.bullets.map(b => `<div class="p-2.5 rounded-lg bg-stone-900 border border-stone-800">${b}</div>`).join('');
    $('modalPieceHotspots').innerHTML = p.hotspots.map((h, i) => `
        <div class="p-3 rounded-lg bg-stone-900/70 border border-stone-800/90">
            <div class="font-bold text-amber-300 text-xs">${i + 1}. ${h.name}</div>
            <p class="text-stone-300 text-[11px] mt-1 leading-relaxed">${h.desc}</p>
        </div>`).join('');
    $('modalQuizQ').innerText = p.quiz.q;
    $('modalQuizOpts').innerHTML = p.quiz.options.map((opt, o) => `
        <button onclick="checkModalQuiz(${o})" class="w-full text-left p-2 rounded-lg bg-stone-950 hover:bg-stone-800 border border-stone-700 text-stone-200 transition flex items-start gap-2">
            <span class="font-mono-museum font-bold text-amber-400">${String.fromCharCode(65 + o)}.</span><span>${opt}</span>
        </button>`).join('');
    $('modalQuizFeedback').classList.add('hidden');
    $('artworkDetailModal').classList.remove('hidden');
}
function closeArtworkDetail() { document.getElementById('artworkDetailModal').classList.add('hidden'); }

function checkModalQuiz(o) {
    const p = MUSEUM_PIECES[activePieceIndex];
    const fb = document.getElementById('modalQuizFeedback');
    fb.classList.remove('hidden');
    if (o === p.quiz.ans) {
        fb.className = 'mt-2.5 p-2.5 rounded-lg text-[11px] bg-emerald-950/90 border border-emerald-500/40 text-emerald-200 font-semibold';
        fb.innerHTML = `✓ ${p.quiz.explain}`;
    } else {
        fb.className = 'mt-2.5 p-2.5 rounded-lg text-[11px] bg-rose-950/90 border border-rose-500/40 text-rose-200';
        fb.innerHTML = '✕ Chưa chính xác, hãy thử phương án khác!';
    }
}

// ---------- Thay ảnh tranh ----------
function updatePieceTextureIn3D(idx, url) {
    MUSEUM_PIECES[idx].imageUrl = url;
    const tex = createArtworkCanvasTexture(MUSEUM_PIECES[idx]);
    paintingMeshes.forEach(m => { if (m.userData.pieceIndex === idx) { m.material.map = tex; m.material.needsUpdate = true; } });
    if (activePieceIndex === idx) document.getElementById('modalPieceImage').src = url;
    renderFlatGalleryGrid();
}
function readFileAsUrl(event, cb) {
    const f = event.target.files && event.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (e) => cb(e.target.result);
    r.readAsDataURL(f);
}
function handleLocalImageUpload(e) { readFileAsUrl(e, (u) => updatePieceTextureIn3D(activePieceIndex, u)); }
function uploadImageForPiece(idx, e) { readFileAsUrl(e, (u) => updatePieceTextureIn3D(idx, u)); }
function toggleUrlInputBox() { document.getElementById('urlInputBox').classList.toggle('hidden'); }
function applyCustomImageUrl() {
    const v = document.getElementById('customImageUrlInput').value.trim();
    if (v) { updatePieceTextureIn3D(activePieceIndex, v); document.getElementById('urlInputBox').classList.add('hidden'); }
}

// ---------- Flat view ----------
function renderFlatGalleryGrid() {
    document.getElementById('flatContent_gallery').innerHTML = MUSEUM_PIECES.map((p, idx) => `
        <div class="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
            <div>
                <div class="relative h-44 bg-stone-950 border-b border-stone-800">
                    <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover">
                    <span class="absolute top-2.5 left-2.5 font-mono-museum text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-amber-300 border border-amber-500/30">${p.code} · ${p.date}</span>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-sm text-white line-clamp-2">${p.title}</h3>
                    <p class="text-xs text-stone-400 mt-1 line-clamp-2">${p.subtitle}</p>
                </div>
            </div>
            <div class="p-3 bg-stone-950/80 border-t border-stone-800/80 flex items-center justify-between gap-2">
                <label class="cursor-pointer px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-semibold transition">
                    🖼️ Thay ảnh file<input type="file" accept="image/*" class="hidden" onchange="uploadImageForPiece(${idx}, event)">
                </label>
                <button onclick="closeFlatViewModal(); StoryBoard.open(${idx});" class="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold">Mở bảng ghim</button>
                <button onclick="closeFlatViewModal(); flyToPiece(${idx}, false);" class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition">Bay tới →</button>
            </div>
        </div>`).join('');
}
function openFlatViewModal(tab = 'gallery') {
    renderFlatGalleryGrid();
    document.getElementById('flatViewModal').classList.remove('hidden');
    switchFlatTab(tab);
}
function openImageManagerModal() { openFlatViewModal('gallery'); }
function closeFlatViewModal() { document.getElementById('flatViewModal').classList.add('hidden'); }
function switchFlatTab(tab) {
    ['gallery', 'spiral', 'matrix', 'debate'].forEach(t => {
        const on = t === tab;
        document.getElementById(`flatContent_${t}`).classList.toggle('hidden', !on);
        document.getElementById(`flatTab_${t}`).className = on
            ? 'px-4 py-2 rounded-full text-xs font-bold bg-amber-500 text-stone-950 shadow'
            : 'px-4 py-2 rounded-full text-xs font-bold bg-stone-800 text-stone-300 hover:bg-stone-700';
    });
}

// ---------- Âm thanh nền ----------
let audioCtx = null, isAudioPlaying = false, ambientGain = null;
function toggleAmbientAudio() {
    const btn = document.getElementById('soundToggleBtn');
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        ambientGain = audioCtx.createGain();
        ambientGain.gain.value = 0.04;
        ambientGain.connect(audioCtx.destination);
        [130.81, 196.0, 246.94, 293.66].forEach(f => {
            const o = audioCtx.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.connect(ambientGain); o.start();
        });
        isAudioPlaying = true;
    } else {
        isAudioPlaying = !isAudioPlaying;
        if (isAudioPlaying) audioCtx.resume();
        ambientGain.gain.setTargetAtTime(isAudioPlaying ? 0.04 : 0.0001, audioCtx.currentTime, 0.2);
    }
    btn.classList.toggle('ring-2', isAudioPlaying);
    btn.classList.toggle('ring-amber-400', isAudioPlaying);
}

window.addEventListener('load', async () => {
    try { await document.fonts.ready; } catch (e) { /* bỏ qua */ }
    initThreeMuseum();
    animateMuseum();
    StoryBoard.onClose = () => { museumClock.getDelta(); };
    const q = new URLSearchParams(location.search);
    if (q.has('board')) StoryBoard.open(parseInt(q.get('board'), 10) || 0, { instant: true, step: parseInt(q.get('step') || '0', 10) });
});

