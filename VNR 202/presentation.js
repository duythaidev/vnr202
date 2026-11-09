// =============================================================================
// MODE THUYẾT TRÌNH (bộ điều phối duy nhất)
//
//   ▶ Thuyết trình → với từng tranh:
//      [đóng bảng nếu đang mở] → camera đi tới tranh → giới thiệu tranh (thẻ tiêu đề,
//      camera tiến chậm lại gần) → mở bảng ghim → mỗi step: chờ camera tới thẻ, rồi
//      CHỜ ĐỦ CẢ HAI: người dẫn đọc xong + bút viết xong → chuyển step → ... → tranh kế.
//   Hết tranh cuối: lùi ra toàn cảnh hành lang + màn hoàn tất (không tự vòng lại).
//
//   Mọi bước chờ đều huỷ được (AbortController). Mỗi lần Trước/Tiếp/Seek chỉ đổi
//   "con trỏ" rồi huỷ thao tác đang chạy → bấm liên tục cũng không mở chồng bảng.
//   Pause = đóng băng camera bảo tàng, camera bảng, bút và người dẫn cùng lúc.
//
//   Phím: Space tạm dừng/tiếp · → / PageDown tiếp · ← / PageUp trước · Esc thoát
//   (PageUp/PageDown: dùng được bút trình chiếu / clicker)
// =============================================================================
const Presentation = (() => {
    const $ = (id) => document.getElementById(id);
    const SPEEDS = [1, 1.25, 1.5, 2];   // mặc định 1.25× (idx 1): voice TTS đọc nhanh, bút và camera phải theo kịp
    let status = 'idle';          // idle | running | paused | error | completed
    let phase = '';               // closing | moving | intro | opening | step | finishing
    let segs = [], idx = 0, runId = 0, opCtl = null, speedIdx = 1;
    let captionsOn = true, rafId = 0, lastT = 0, timers = [], ui = null, lastError = null;
    const listeners = new Set();
    const freeControls = () => document.querySelectorAll('#museumApp .museum-pill, #museumApp .board-bottom, #museumApp .tour-start-board, #museumApp .museum-location, #museumApp .fixed.bottom-5.right-6');

    // ---------- Nội dung đọc ----------
    const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    const endDot = (s) => (s && !/[.!?…:]$/.test(s) ? s + '.' : s);
    function introText(p) {
        const story = getStory(p), piece = MUSEUM_PIECES[p];
        if (story.intro) return strip(story.intro);
        return [endDot(strip(piece.title).replace(/^\d+\.\s*/, '')), endDot(strip(piece.subtitle))].filter(Boolean).join(' ');
    }
    function stepText(p, s) {
        const step = getStory(p).steps[s];
        if (step.narration) return strip(step.narration);
        const out = [endDot(strip(step.title))];
        (step.blocks || []).forEach(b => {
            if (b.type === 'text' || b.type === 'note') out.push(endDot(strip(b.text)));
            else if (b.type === 'bullets') (b.items || []).forEach(i => out.push(endDot(strip(i))));
            else if (b.type === 'quote') out.push(endDot(`"${strip(b.text)}"${b.by ? ', ' + strip(b.by) : ''}`));
            else if (b.type === 'flow') out.push(endDot([`Từ ${strip(b.from)} đến ${strip(b.to)}`, strip(b.caption), strip(b.sub)].filter(Boolean).join(': ')));
            else if (b.type === 'stat') out.push(endDot(`${strip(b.value)} ${strip(b.text)}`));
            else if (b.type === 'timeline' || b.type === 'vtimeline') (b.items || []).forEach(i => out.push(endDot(`${strip(i.date)}: ${strip(i.text)}`)));
            else if (b.type === 'thesis') out.push(endDot(strip(b.text)));
            else if (b.type === 'stats') (b.items || []).forEach(i => out.push(endDot(`${strip(i.value)} ${strip(i.text)}`)));
            else if (b.type === 'checklist') (b.items || []).forEach(i => out.push(endDot(strip(i))));
            else if (b.type === 'chain' || b.type === 'hub') {
                if (b.center) out.push(endDot(strip(b.center)));
                (b.items || []).forEach(i => out.push(endDot(typeof i === 'string' ? strip(i) : [strip(i.head), strip(i.text)].filter(Boolean).join(': '))));
            }
            else if (b.type === 'grid') (b.items || []).forEach(i => out.push(endDot([strip(i.head), strip(i.text)].filter(Boolean).join(': '))));
            else if (b.type === 'ladder') (b.items || []).forEach(i => out.push(endDot([strip(i.tag), strip(i.date), strip(i.text)].filter(Boolean).join(', '))));
            else if (b.type === 'rail') (b.items || []).forEach(i => out.push(endDot([strip(i.date), strip(i.head), strip(i.text)].filter(Boolean).join(', '))));
            else if (b.type === 'versus') (b.rows || []).forEach(r => out.push(endDot(`${strip(b.left)}: ${strip(r.l)} ${strip(b.right)}: ${strip(r.r)}`)));
            else if (b.type === 'table') (b.rows || []).forEach(r => out.push(endDot(r.map(strip).join(': '))));
        });
        return out.filter(Boolean).join(' ').replace(/→\s*/g, '');
    }

    // MP3 đã tạo sẵn (presentation-audio.js). Thiếu clip → Narrator chạy đồng hồ phụ đề.
    const audioOf = (clipId) => {
        const c = (typeof PRESENTATION_AUDIO !== 'undefined') && PRESENTATION_AUDIO[clipId];
        return c ? { src: c.file, duration: c.duration } : {};
    };
    const introClip = (p) => audioOf(`${getStory(p).id}-intro`);
    const stepClip = (p, s) => audioOf(getStory(p).steps[s].id);

    function buildSegments() {
        segs = [];
        MUSEUM_PIECES.forEach((_, p) => {
            segs.push({ p, s: -1 });
            getStory(p).steps.forEach((__, s) => segs.push({ p, s }));
        });
    }
    const pieceStart = (p) => segs.findIndex(g => g.p === p && g.s === -1);
    const segOf = (p, s) => segs.findIndex(g => g.p === p && g.s === s);

    // ---------- Đồng hồ của tour (chỉ chạy khi running) ----------
    function delay(sec, signal) {
        if (signal && signal.aborted) return Promise.reject(abortError());
        return new Promise((resolve, reject) => {
            const tm = { left: sec, resolve };
            timers.push(tm);
            if (signal) signal.addEventListener('abort', () => {
                timers = timers.filter(x => x !== tm); reject(abortError());
            }, { once: true });
        });
    }
    // chờ tới khi không còn pause (giữa các pha)
    const waitRunning = (signal) => (signal && signal.aborted ? Promise.reject(abortError()) : status === 'running' ? Promise.resolve() : new Promise((resolve, reject) => {
        const off = subscribe(() => { if (status === 'running') { off(); resolve(); } });
        if (signal) signal.addEventListener('abort', () => { off(); reject(abortError()); }, { once: true });
    }));
    // chờ sự kiện từ bảng ghim; có watchdog (tính theo thời gian chạy, không tính lúc pause)
    function waitBoard(ev, pred, signal, watchdog = 20) {
        if (signal && signal.aborted) return Promise.reject(abortError());
        return new Promise((resolve, reject) => {
            let off = () => {};
            const done = (fn, v) => { off(); timers = timers.filter(x => x !== tm); fn(v); };
            const tm = { left: watchdog, resolve: () => done(reject, new Error(`Bảng ghim không phản hồi (${ev})`)) };
            timers.push(tm);
            off = StoryBoard.on(ev, (d) => { if (pred(d)) done(resolve, d); });
            if (signal) signal.addEventListener('abort', () => done(reject, abortError()), { once: true });
        });
    }
    // màn rộng: đẩy tranh sang phải để thẻ giới thiệu (góc trái) không che tranh
    const introShift = () => (innerWidth / innerHeight > 1.2 ? 1.0 : 0);
    const abortable = (promise, signal) => new Promise((resolve, reject) => {
        if (signal.aborted) return reject(abortError());
        signal.addEventListener('abort', () => reject(abortError()), { once: true });
        promise.then(resolve, reject);
    });

    function tick(now) {
        rafId = requestAnimationFrame(tick);
        const dt = Math.min(0.1, (now - (lastT || now)) / 1000);
        lastT = now;
        if (status === 'running') {
            const sdt = dt * SPEEDS[speedIdx] * (window.__tourScale || 1);
            Narrator.tick(sdt);
            timers.slice().forEach(tm => { if ((tm.left -= sdt) <= 0) { timers = timers.filter(x => x !== tm); tm.resolve(); } });
        }
        renderLive();
    }

    // ---------- Một đoạn (segment) ----------
    async function playSegment(seg, signal) {
        await waitRunning(signal);
        const { p, s } = seg;
        if (s === -1) {
            if (StoryBoard.isOpen) { setPhase('closing'); await abortable(StoryBoard.close(), signal); }
            await waitRunning(signal);
            setPhase('moving');
            await MuseumTour.moveToPiece(p, { signal, shift: introShift() });
            await waitRunning(signal);
            setPhase('intro');
            const text = introText(p);
            showIntroCard(p, true);
            const clip = introClip(p);
            MuseumTour.startDrift(p, clip.duration || Narrator.durationFor(text), introShift());
            await Narrator.play(text, { signal, ...clip });
            await delay(0.35, signal);
            showIntroCard(p, false);
            return;
        }
        showIntroCard(p, false);
        const sameBoard = StoryBoard.isOpen && !StoryBoard.isClosing && !StoryBoard.isOpening && StoryBoard.piece === p;
        if (!sameBoard) {
            if (StoryBoard.isOpen) { setPhase('closing'); await abortable(StoryBoard.close(), signal); }
            if (!MuseumTour.isAt(p)) { setPhase('moving'); await MuseumTour.moveToPiece(p, { signal }); }
            await waitRunning(signal);
            setPhase('opening');
            const ready = waitBoard('stepReady', d => d.piece === p && d.index === s, signal);
            await Promise.all([StoryBoard.open(p, { step: s }), ready]);
        } else {
            setPhase('opening');
            const ready = waitBoard('stepReady', d => d.piece === p && d.index === s, signal);
            StoryBoard.goTo(s, { force: true, rewrite: true });
            await ready;
        }
        await waitRunning(signal);
        setPhase('step');
        const written = StoryBoard.isWritten(s) ? Promise.resolve() : waitBoard('written', d => d.piece === p && d.index === s, signal, 120);
        // HÀNG RÀO: chỉ đi tiếp khi người dẫn đọc xong VÀ bút viết xong
        await Promise.all([Narrator.play(stepText(p, s), { signal, ...stepClip(p, s) }), written]);
        setPhase('finishing');
        await delay(0.7, signal);
    }

    async function runLoop(run) {
        while (run === runId) {
            if (idx >= segs.length) { if (await finish(run)) return; continue; }
            const ctl = new AbortController();
            opCtl = ctl;
            const at = idx;
            try {
                await playSegment(segs[at], ctl.signal);
                if (run !== runId) return;
                if (!ctl.signal.aborted && idx === at) idx++;
            } catch (e) {
                if (run !== runId) return;
                if (e.name === 'AbortError') continue;     // con trỏ đã đổi → chạy đoạn mới
                console.error(e);
                lastError = e; setStatus('error');
                await waitRunning(ctl.signal).catch(() => {});
            }
        }
    }

    async function finish(run) {
        setPhase('finishing');
        const ctl = new AbortController(); opCtl = ctl;
        try {
            if (StoryBoard.isOpen) await abortable(StoryBoard.close(), ctl.signal);
            await MuseumTour.moveToPose(MuseumTour.overviewPose(), { signal: ctl.signal });
        } catch (e) { if (run !== runId || ctl.signal.aborted) return false; throw e; }
        if (run !== runId || ctl.signal.aborted) return false;
        Narrator.stop();
        setStatus('completed');
        return true;
    }

    // ---------- Điều khiển công khai ----------
    function start(fromPiece = 0) {
        buildUI();
        buildSegments();
        stopInternal(false);
        const run = ++runId;
        idx = Math.max(0, pieceStart(fromPiece));
        lastError = null;
        MuseumTour.take();
        MuseumTour.speed = SPEEDS[speedIdx];
        StoryBoard.tourActive = true;
        StoryBoard.timeScale = SPEEDS[speedIdx];
        StoryBoard.inputHook = handleBoardInput;
        Narrator.rate = 1;
        hidePaintingTooltip();
        document.body.classList.add('tour-on');
        freeControls().forEach(el => { el.inert = true; });
        setStatus('running');
        $('tourPlay').focus({ preventScroll: true });
        cancelAnimationFrame(rafId); lastT = 0; rafId = requestAnimationFrame(tick);
        runLoop(run);
    }

    function seekIndex(i) {
        if (status === 'idle' || !segs.length) return;
        showIntroCard(0, false);
        const wasCompleted = status === 'completed';
        idx = THREE.MathUtils.clamp(i, 0, segs.length - 1);
        if (status === 'completed' || status === 'error') setStatus('running');
        Narrator.stop();
        if (opCtl) opCtl.abort();
        if (wasCompleted) runLoop(runId);     // vòng lặp cũ đã kết thúc → chạy lại từ con trỏ mới
        notify();
    }
    function next() {
        if (status === 'idle') return;
        if (idx >= segs.length - 1) { idx = segs.length; Narrator.stop(); if (opCtl) opCtl.abort(); return; }  // → màn hoàn tất
        seekIndex(idx + 1);
    }
    function prev() { if (idx > 0) seekIndex(idx - 1); }
    function seek({ piece, step = -1 }) { const i = step < 0 ? pieceStart(piece) : segOf(piece, step); if (i >= 0) seekIndex(i); }

    function pause() {
        if (status !== 'running') return;
        setStatus('paused');
    }
    function resume() {
        if (status !== 'paused' && status !== 'error') return;
        if (status === 'error') { Narrator.stop(); if (opCtl) opCtl.abort(); }   // "Thử lại" = chạy lại đoạn lỗi
        lastT = 0;
        setStatus('running');
    }
    const toggle = () => (status === 'running' ? pause() : status === 'completed' ? start(0) : resume());

    function stopInternal(closeBoard) {
        runId++;
        if (opCtl) opCtl.abort();
        opCtl = null;
        timers = [];
        Narrator.stop();
        MuseumTour.release();
        StoryBoard.tourActive = false;
        StoryBoard.inputHook = null;
        StoryBoard.timeScale = 1;
        StoryBoard.setPaused(false);
        if (closeBoard && StoryBoard.isOpen) StoryBoard.close();
    }
    function stop() {
        if (status === 'idle') return;
        stopInternal(true);
        cancelAnimationFrame(rafId);
        document.body.classList.remove('tour-on');
        freeControls().forEach(el => { el.inert = false; });
        showIntroCard(0, false);
        setStatus('idle');
        $('startTourBtn').focus({ preventScroll: true });
    }

    function cycleSpeed() {
        speedIdx = (speedIdx + 1) % SPEEDS.length;
        MuseumTour.speed = SPEEDS[speedIdx];
        StoryBoard.timeScale = SPEEDS[speedIdx];
        notify();
    }

    // input từ bảng ghim khi tour đang giữ quyền
    function handleBoardInput(action, arg) {
        if (action === 'next') next();
        else if (action === 'prev') prev();
        else if (action === 'close') stop();
        else if (action === 'card') seek({ piece: StoryBoard.piece, step: arg });
        else if (action === 'space') StoryBoard.finishCurrent();     // click giấy = viết nhanh, vẫn chờ người dẫn
        return true;
    }

    // ---------- Trạng thái + UI ----------
    function setStatus(s) {
        status = s;
        const paused = s !== 'running';
        MuseumTour.paused = paused;
        Narrator.setPaused(paused);
        StoryBoard.setPaused(paused && s !== 'idle');
        notify();
    }
    function setPhase(ph) { phase = ph; notify(); }
    function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
    function notify() { renderStatic(); listeners.forEach(fn => fn(snapshot())); }
    function snapshot() {
        const g = segs[Math.min(idx, segs.length - 1)] || { p: 0, s: -1 };
        return { status, phase, index: idx, total: segs.length, piece: g.p, step: g.s, speed: SPEEDS[speedIdx] };
    }

    function buildUI() {
        if (ui) return;
        const wrap = document.createElement('div');
        wrap.id = 'tourRoot';
        wrap.setAttribute('role', 'region');
        wrap.setAttribute('aria-label', 'Điều khiển thuyết trình');
        wrap.innerHTML = `
            <div class="tour-letterbox top"></div><div class="tour-letterbox bottom"></div>
            <div id="tourIntro" class="tour-intro">
                <div class="tour-intro-code font-mono-museum"></div>
                <div class="tour-intro-title font-serif-museum"></div>
                <div class="tour-intro-meta"></div>
            </div>
            <div id="tourCaption" class="tour-caption"></div>
            <div id="tourDock" class="tour-dock">
                <div id="tourChapters" class="tour-chapters"></div>
                <div class="tour-bar">
                    <button id="tourPlay" class="tour-btn round" title="Tạm dừng / tiếp tục (Space)"></button>
                    <button id="tourPrev" class="tour-btn" title="Trước (←)">⏮</button>
                    <button id="tourNext" class="tour-btn" title="Tiếp (→)">⏭</button>
                    <div class="tour-info">
                        <div id="tourWhere" class="tour-where font-mono-museum"></div>
                        <div id="tourWhat" class="tour-what"></div>
                        <div class="tour-progress"><i id="tourProg"></i></div>
                    </div>
                    <button id="tourSpeed" class="tour-btn" title="Tốc độ"></button>
                    <button id="tourCC" class="tour-btn" title="Phụ đề lời dẫn">CC</button>
                    <button id="tourExit" class="tour-btn" title="Thoát (Esc)">✕</button>
                </div>
            </div>
            <div id="tourPanel" class="tour-panel"></div>`;
        document.body.appendChild(wrap);
        ui = wrap;
        wrap.querySelectorAll('button[title]').forEach(b => b.setAttribute('aria-label', b.title));
        $('tourPlay').onclick = toggle;
        $('tourPrev').onclick = prev;
        $('tourNext').onclick = next;
        $('tourExit').onclick = stop;
        $('tourSpeed').onclick = cycleSpeed;
        $('tourCC').onclick = () => { captionsOn = !captionsOn; notify(); };
        $('tourChapters').onclick = (e) => {
            const b = e.target.closest('[data-seg]');
            if (b) seekIndex(+b.dataset.seg);
        };
        $('tourPanel').onclick = (e) => {
            const a = e.target.closest('[data-act]');
            if (!a) return;
            ({ retry: resume, skip: () => { setStatus('running'); next(); }, exit: stop, replay: () => start(0), museum: stop })[a.dataset.act]();
        };
    }

    function renderChapters() {
        const el = $('tourChapters');
        if (el.dataset.n === String(segs.length)) return;
        el.dataset.n = segs.length;
        let html = '';
        MUSEUM_PIECES.forEach((piece, p) => {
            const items = segs.map((g, i) => ({ g, i })).filter(x => x.g.p === p);
            html += `<div class="tour-ch" title="${strip(piece.title).replace(/"/g, '')}">` +
                items.map(({ g, i }) => `<button data-seg="${i}" class="${g.s < 0 ? 'intro' : ''}" aria-label="Tranh ${p + 1}, ${g.s < 0 ? 'giới thiệu' : 'bước ' + (g.s + 1)}"></button>`).join('') +
                `<span>${String(p + 1).padStart(2, '0')}</span></div>`;
        });
        el.innerHTML = html;
    }

    function renderStatic() {
        if (!ui) return;
        const snap = snapshot();
        const piece = MUSEUM_PIECES[snap.piece];
        const story = getStory(snap.piece);
        const n = story.steps.length;
        renderChapters();
        $('tourChapters').querySelectorAll('[data-seg]').forEach(b => {
            const i = +b.dataset.seg;
            b.classList.toggle('done', i < idx);
            b.classList.toggle('on', i === idx);
        });
        $('tourPlay').innerHTML = status === 'running' ? '❚❚' : '▶';
        $('tourPlay').classList.toggle('paused', status === 'paused');
        $('tourPrev').disabled = idx <= 0;
        $('tourNext').disabled = idx >= segs.length;
        $('tourSpeed').textContent = `${SPEEDS[speedIdx]}×`;
        $('tourCC').classList.toggle('on', captionsOn);
        $('tourCC').setAttribute('aria-pressed', String(captionsOn));
        $('tourPlay').setAttribute('aria-label', status === 'running' ? 'Tạm dừng' : status === 'completed' ? 'Phát lại' : 'Tiếp tục');
        $('tourWhere').textContent = `TRANH ${String(snap.piece + 1).padStart(2, '0')}/${MUSEUM_PIECES.length}` +
            (snap.step < 0 ? ' · GIỚI THIỆU' : ` · BƯỚC ${String(snap.step + 1).padStart(2, '0')}/${String(n).padStart(2, '0')}`);
        const phaseLabel = { closing: 'Đóng bảng…', moving: 'Đang di chuyển…', opening: 'Mở thẻ…' }[phase];
        $('tourWhat').textContent = status === 'paused' ? 'Đã tạm dừng · Space để tiếp tục'
            : phaseLabel || (snap.step < 0 ? strip(piece.title) : strip(story.steps[snap.step].title));
        // bảng trạng thái: lỗi / hoàn tất
        const panel = $('tourPanel');
        if (status === 'error') {
            panel.innerHTML = `<div class="tour-card"><b>Có lỗi ở ${$('tourWhere').textContent.toLowerCase()}</b>
                <p>${strip(lastError && lastError.message)}</p>
                <div><button data-act="retry">Thử lại</button><button data-act="skip">Bỏ qua đoạn</button><button data-act="exit">Thoát</button></div></div>`;
        } else if (status === 'completed') {
            panel.innerHTML = `<div class="tour-card done"><div class="font-mono-museum">THE VNR202 MUSEUM</div>
                <b class="font-serif-museum">Đã hoàn tất ${MUSEUM_PIECES.length} tranh</b>
                <p>${segs.length - MUSEUM_PIECES.length} bước nội dung · cảm ơn đã theo dõi</p>
                <div><button data-act="replay">↺ Phát lại</button><button data-act="museum">Về bảo tàng</button></div></div>`;
        } else panel.innerHTML = '';
        panel.classList.toggle('show', status === 'error' || status === 'completed');
    }

    let lastCaption = '';
    function renderLive() {
        if (!ui) return;
        const cap = $('tourCaption');
        const text = captionsOn && Narrator.active ? Narrator.text : '';
        if (text !== lastCaption) {
            lastCaption = text;
            cap.innerHTML = text.split(/\s+/).map(w => `<span>${w.replace(/</g, '&lt;')}</span>`).join(' ');
            cap.classList.toggle('show', !!text);
        }
        if (text) {   // tô dần từng chữ theo tiến độ người dẫn (phụ đề kiểu karaoke)
            const spans = cap.children, k = Math.floor(Narrator.progress * spans.length * 1.04);
            for (let i = 0; i < spans.length; i++) spans[i].classList.toggle('lit', i < k);
        }
        $('tourProg').style.transform = `scaleX(${phase === 'intro' || phase === 'step' ? Narrator.progress : 0})`;
    }

    function showIntroCard(p, on) {
        if (!ui) return;
        const el = $('tourIntro');
        if (on) {
            const piece = MUSEUM_PIECES[p];
            el.querySelector('.tour-intro-code').textContent = `${piece.code} · ${piece.date}`;
            el.querySelector('.tour-intro-title').textContent = strip(piece.title).replace(/^\d+\.\s*/, '');
            el.querySelector('.tour-intro-meta').textContent = `${strip(piece.chapter)} · ${getStory(p).steps.length} bước`;
        }
        el.classList.toggle('show', on);
    }

    // ---------- Phím tắt (chặn trước các listener khác khi tour đang chạy) ----------
    window.addEventListener('keydown', (e) => {
        if (status === 'idle' || e.target.tagName === 'INPUT') return;
        const map = {
            Space: toggle, KeyK: toggle,
            ArrowRight: next, PageDown: next, KeyL: next,
            ArrowLeft: prev, PageUp: prev, KeyJ: prev,
            Escape: stop
        };
        const fn = map[e.code];
        if (fn) { e.preventDefault(); e.stopImmediatePropagation(); if (!e.repeat) fn(); }
        else if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.stopImmediatePropagation();
    }, true);
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });

    function init() { buildUI(); }

    return {
        init, start, stop, pause, resume, toggle, next, prev, seek, subscribe,
        get snapshot() { return snapshot(); },
        get active() { return status !== 'idle'; },
        // tiện cho kiểm thử
        _debug: { get segs() { return segs; }, introText, stepText }
    };
})();
