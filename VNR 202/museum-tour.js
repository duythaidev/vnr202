// Port từ museum-3d-single.html tham khảo. Narrator hiện là đồng hồ phụ đề, chưa phát MP3.
const abortError = () => new DOMException('Đã huỷ', 'AbortError');

const MuseumTour = (() => {
    let owns = false, paused = false, move = null, drift = null, speed = 1;

    const wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
    const lerpAngle = (a, b, t) => a + wrapAngle(b - a) * t;
    const smooth = (e0, e1, x) => { const t = FX.clamp01((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };

    // tư thế đứng xem 1 bức tranh (standX = khoảng cách tới trục giữa hành lang)
    // shift > 0: lệch máy quay sang trái để tranh nằm lệch phải khung hình (chừa chỗ cho thẻ giới thiệu)
    function piecePose(idx, standX = 1.6, shift = 0) {
        const left = idx % 2 === 0;
        return {
            pos: new THREE.Vector3(left ? -standX : standX, 2.75, BAY_START_Z - Math.floor(idx / 2) * BAY_LENGTH + (left ? shift : -shift)),
            yaw: left ? Math.PI / 2 : -Math.PI / 2,
            pitch: 0.07
        };
    }

    function take() {
        if (owns) return;
        owns = true;
        cancelPendingBoard();
        hidePaintingTooltip();
        Object.keys(moveKeys).forEach(k => { moveKeys[k] = false; });
        isDraggingLook = false; isAutoFlying = false;
    }
    function release() {
        if (move) { move.reject(abortError()); move = null; }
        owns = false; drift = null; paused = false;
        camTargetPos.copy(camPos); targetYaw = yaw; targetPitch = pitch;   // không "giật" về đích cũ
    }

    function moveToPose(pose, { signal } = {}) {
        take();
        drift = null;
        if (move) { move.reject(abortError()); move = null; }
        if (signal && signal.aborted) return Promise.reject(abortError());
        const P0 = camPos.clone(), P3 = pose.pos.clone();
        const dist = P0.distanceTo(P3);
        if (dist < 0.05 && Math.abs(wrapAngle(pose.yaw - yaw)) < 0.02) return Promise.resolve();
        const dz = P3.z - P0.z;
        // đi qua lối giữa hành lang khi phải đi xa, để không "trượt" sát tường
        const lane = Math.min(1, Math.abs(dz) / 8);
        const C1 = new THREE.Vector3(P0.x * (1 - 0.8 * lane), 2.75, P0.z + dz * 0.3);
        const C2 = new THREE.Vector3(P3.x * (1 - 0.6 * lane), 2.75, P0.z + dz * 0.78);
        const turn = Math.abs(wrapAngle(pose.yaw - yaw));
        const dur = THREE.MathUtils.clamp(1.6 + dist * 0.075 + turn * 0.35, 1.8, 8);
        return new Promise((resolve, reject) => {
            move = { t: 0, dur, P0, C1, C2, P3, yaw0: yaw, yawF: pose.yaw, pitch0: pitch, pitchF: pose.pitch, far: Math.min(1, dist / 6), resolve, reject };
            if (signal) signal.addEventListener('abort', () => {
                if (move && move.resolve === resolve) { move = null; reject(abortError()); }
            }, { once: true });
        });
    }

    function bez(m, e, out) {
        const u = 1 - e;
        return out.set(0, 0, 0).addScaledVector(m.P0, u * u * u).addScaledVector(m.C1, 3 * u * u * e)
            .addScaledVector(m.C2, 3 * u * e * e).addScaledVector(m.P3, e * e * e);
    }
    const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();

    // gọi mỗi frame từ animateMuseum() khi tour giữ camera
    function update(dt) {
        if (paused) return;
        dt *= speed * (window.__tourScale || 1);
        if (move) {
            const m = move;
            m.t = Math.min(1, m.t + dt / m.dur);
            const e = FX.easeInOutCubic(m.t);
            bez(m, e, camPos);
            // hướng nhìn: từ hướng cũ → hướng đi → quay mặt vào tranh khi gần tới
            bez(m, Math.min(1, e + 0.02), tmpA); bez(m, Math.max(0, e - 0.02), tmpB);
            const d = tmpA.sub(tmpB);
            const walkYaw = d.lengthSq() > 1e-6 ? Math.atan2(-d.x, -d.z) : m.yawF;
            const a = lerpAngle(m.yaw0, walkYaw, smooth(0, 0.22, m.t) * m.far);
            yaw = lerpAngle(a, m.yawF, smooth(0.55, 1, m.t));
            pitch = m.pitch0 + (m.pitchF - m.pitch0) * smooth(0.5, 1, m.t) - Math.sin(Math.PI * m.t) * 0.03 * m.far;
            camPos.y = 2.75 + Math.sin(m.t * Math.PI * 2 * Math.max(1, m.dur * 0.9)) * 0.018 * m.far; // bước chân nhẹ
            if (m.t >= 1) { move = null; camPos.y = 2.75; yaw = m.yawF; pitch = m.pitchF; m.resolve(); }
        } else if (drift) {     // tiến lại gần tranh rất chậm khi đang giới thiệu
            drift.t = Math.min(1, drift.t + dt / drift.dur);
            camPos.lerpVectors(drift.from, drift.to, FX.easeInOutSine(drift.t));
            pitch += (0.09 - pitch) * Math.min(1, dt);
            if (drift.t >= 1) drift = null;
        }
        camTargetPos.copy(camPos); targetYaw = yaw; targetPitch = pitch;
    }

    return {
        get owns() { return owns; },
        set paused(v) { paused = !!v; },
        get paused() { return paused; },
        set speed(v) { speed = v; },
        take, release, piecePose, update,
        moveToPiece: (idx, opts = {}) => moveToPose(piecePose(idx, 1.6, opts.shift || 0), opts),
        moveToPose,
        startDrift(idx, seconds, shift = 0) {
            drift = { from: camPos.clone(), to: piecePose(idx, 2.7, shift * 1.25).pos, t: 0, dur: Math.max(3, seconds) };
        },
        isAt(idx) {
            const p = piecePose(idx);
            return camPos.distanceTo(p.pos) < 1.6 && Math.abs(wrapAngle(p.yaw - yaw)) < 0.35;
        },
        overviewPose: () => ({ pos: new THREE.Vector3(0, 2.75, HALL_LENGTH / 2 - 9), yaw: 0, pitch: 0.03 })
    };
})();

// ---------------- Người dẫn: phát MP3 đã tạo sẵn; không có MP3 thì chạy đồng hồ phụ đề ----------------
const Narrator = (() => {
    let cur = null, rate = 1, paused = false;
    const WORDS_PER_SEC = 3.6;    // voice TTS đo thật ~3,7 từ/giây; chỉ dùng cho đồng hồ dự phòng khi thiếu MP3

    function durationFor(text) {
        const words = String(text || '').trim().split(/\s+/).filter(Boolean).length;
        return THREE.MathUtils.clamp(words / WORDS_PER_SEC + 0.8, 3, 60);
    }
    function dropAudio(c) {
        const a = c && c.audio;
        if (!a) return;
        c.audio = null;
        a.pause(); a.removeAttribute('src'); a.load();
    }

    // opts.src: đường dẫn MP3 relative; opts.duration: thời lượng (giây) từ manifest
    function play(text, { signal, src, duration } = {}) {
        stop();
        if (signal && signal.aborted) return Promise.reject(abortError());
        return new Promise((resolve, reject) => {
            const me = { text, t: 0, dur: duration || durationFor(text), resolve, reject, audio: null };
            cur = me;
            if (src) {
                const a = new Audio(src);
                me.audio = a;
                a.preload = 'auto';
                // MP3 lỗi/bị chặn: chuyển sang đồng hồ để tour không đứng, không gọi TTS
                me.fallback = (why) => { if (cur === me && me.audio) { console.warn('Voice không phát được, dùng đồng hồ:', src, why); dropAudio(me); me.t = 0; } };
                a.addEventListener('ended', () => { if (cur === me && me.audio) { dropAudio(me); cur = null; resolve(); } });
                a.addEventListener('error', () => me.fallback('error'));
                a.addEventListener('loadedmetadata', () => { if (cur === me && isFinite(a.duration) && a.duration > 0) me.dur = a.duration; });
                if (!paused) a.play().catch(e => me.fallback(e.name));
            }
            if (signal) signal.addEventListener('abort', () => {
                if (cur === me) { dropAudio(me); cur = null; reject(abortError()); }
            }, { once: true });
        });
    }
    // chỉ được gọi khi tour đang chạy (pause = không gọi tick). Có MP3 thì `ended` mới là tín hiệu kết thúc.
    function tick(dt) {
        if (!cur || cur.audio) return;
        cur.t += dt * rate;
        if (cur.t >= cur.dur) { const c = cur; cur = null; c.resolve(); }
    }
    function setPaused(v) {
        paused = !!v;
        const a = cur && cur.audio;
        if (!a) return;
        if (paused) a.pause(); else a.play().catch(e => cur && cur.fallback && cur.fallback(e.name));
    }
    function stop() { if (cur) { const c = cur; cur = null; dropAudio(c); c.reject(abortError()); } }
    function skip() { if (cur) { const c = cur; cur = null; dropAudio(c); c.resolve(); } }
    const elapsed = () => (cur.audio ? cur.audio.currentTime : cur.t);

    return {
        play, tick, stop, skip, durationFor, setPaused,
        set rate(v) { rate = v; },
        get active() { return !!cur; },
        get text() { return cur ? cur.text : ''; },
        get progress() { return cur ? FX.clamp01(elapsed() / cur.dur) : 0; },
        get remaining() { return cur ? Math.max(0, (cur.dur - elapsed()) / (cur.audio ? 1 : rate)) : 0; }
    };
})();
