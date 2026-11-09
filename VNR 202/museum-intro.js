/* Intro và âm thanh chạy độc lập trước Three.js, không tạo thêm cảnh WebGL. */
const MuseumSound = (() => {
    let ctx, master, noise, enabled = false, unlocked = false, lastHover = -Infinity;
    function sync() {
        for (const id of ['introSound', 'soundToggleBtn']) {
            const button = document.getElementById(id);
            if (!button) continue;
            button.setAttribute('aria-pressed', String(enabled && unlocked));
            button.setAttribute('aria-label', enabled ? 'Tắt âm thanh' : 'Bật âm thanh');
            button.title = enabled ? 'Tắt âm thanh' : 'Bật âm thanh';
            if (id === 'introSound') button.textContent = enabled && !unlocked ? 'Bật âm thanh' : (enabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt');
            else button.style.opacity = enabled ? '1' : '.5';
        }
    }
    function unlock() {
        penBlocked = false;
        try {
            const Audio = window.AudioContext || window.webkitAudioContext;
            if (!Audio) return;
            if (!ctx) {
                ctx = new Audio(); master = ctx.createGain();
                master.gain.value = enabled ? 1 : 0;
                const limiter = ctx.createDynamicsCompressor();
                limiter.threshold.value = -3; limiter.knee.value = 3; limiter.ratio.value = 12;
                master.connect(limiter); limiter.connect(ctx.destination);
                noise = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * .7), ctx.sampleRate);
                const data = noise.getChannelData(0);
                for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
            }
            unlocked = true;
            if (ctx.state === 'suspended') ctx.resume().catch(() => {});
            sync();
        } catch (_) { /* Chế độ không hỗ trợ âm thanh vẫn dùng được. */ }
    }
    function setEnabled(value) {
        enabled = value; unlock();
        if (!enabled) writing(false);
        if (ctx && master) master.gain.setTargetAtTime(enabled ? 1 : 0, ctx.currentTime, .03);
        try { localStorage.setItem('vnr202-sound', enabled ? 'on' : 'off'); } catch (_) {}
        sync();
    }
        function playAstrologyDing(pitchVariant = 0) {
            try {
                if (!enabled || !unlocked || !ctx) return;
                const now = ctx.currentTime;

                // Chọn nốt chủ đạo theo từng câu chữ để tạo cảm giác dẫn dắt cảm xúc
                const baseFreqs = [528, 639, 741]; // Tần số Solfeggio/Celestial trong trẻo
                const root = baseFreqs[pitchVariant % baseFreqs.length];

                // Các bồi âm chuông pha lê (Crystal Bell Harmonics)
                const harmonics = [
                    { ratio: 1.0,   gain: 0.22, decay: 2.6 },
                    { ratio: 1.5,   gain: 0.11, decay: 2.1 },
                    { ratio: 2.0,   gain: 0.14, decay: 1.8 },
                    { ratio: 2.756, gain: 0.08, decay: 1.4 }, // Bồi âm kim loại/pha lê đặc trưng
                    { ratio: 4.0,   gain: 0.04, decay: 0.9 }
                ];

                harmonics.forEach((h, idx) => {
                    const osc = ctx.createOscillator();
                    const gainNode = ctx.createGain();

                    osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
                    osc.frequency.setValueAtTime(root * h.ratio, now);
                    // Độ rung nhẹ (vibrato) cực tinh tế ở đuôi âm
                    osc.frequency.exponentialRampToValueAtTime(root * h.ratio * 1.002, now + h.decay);

                    gainNode.gain.setValueAtTime(0.0001, now);
                    gainNode.gain.linearRampToValueAtTime(h.gain, now + 0.018); // Tiếng gõ chuông trong trẻo
                    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + h.decay);

                    osc.connect(gainNode);
                    gainNode.connect(master);

                    osc.start(now);
                    osc.stop(now + h.decay + 0.05);
                });

                // Thêm 2 hạt lấp lánh (Starlight Shimmer) nối đuôi sau 90ms và 180ms
                [1.25, 1.875].forEach((shimmerRatio, i) => {
                    const sOsc = ctx.createOscillator();
                    const sGain = ctx.createGain();
                    const startT = now + (i + 1) * 0.085;

                    sOsc.type = 'sine';
                    sOsc.frequency.setValueAtTime(root * 2 * shimmerRatio, startT);

                    sGain.gain.setValueAtTime(0.0001, startT);
                    sGain.gain.linearRampToValueAtTime(0.045, startT + 0.015);
                    sGain.gain.exponentialRampToValueAtTime(0.0001, startT + 1.1);

                    sOsc.connect(sGain);
                    sGain.connect(master);

                    sOsc.start(startT);
                    sOsc.stop(startT + 1.15);
                });
            } catch (e) {
                console.warn('Web Audio API chưa sẵn sàng:', e);
            }
        }

        /**
         * Âm thanh "Vút dài" thuần túy (Deep Cinematic Airy Vortex Wind Whoooosh)
         * Kéo dài lên 3.8s, âm lượng lớn hơn, tiếng gió xoáy cuộn sâu và không gian mở rộng
         */
        function playWhooshTransition({ duration = 3.8, board = false } = {}) {
            try {
                if (!enabled || !unlocked || !ctx) return;
                const now = ctx.currentTime;
                const scale = duration / 3.8; // Bảng ghim: nhịp ngắn hơn, trầm hơn intro.

                // Bộ nén âm DynamicsCompressor giữ âm lượng to, chắc và không bị vỡ tiếng
                const compressor = ctx.createDynamicsCompressor();
                compressor.threshold.setValueAtTime(-18, now);
                compressor.knee.setValueAtTime(10, now);
                compressor.ratio.setValueAtTime(6, now);
                compressor.attack.setValueAtTime(0.003, now);
                compressor.release.setValueAtTime(0.25, now);
                compressor.connect(master);

                // Tạo buffer stereo noise độc lập giữa 2 tai
                const bufferSize = ctx.sampleRate * duration;
                const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
                const leftChannel = noiseBuffer.getChannelData(0);
                const rightChannel = noiseBuffer.getChannelData(1);

                for (let i = 0; i < bufferSize; i++) {
                    leftChannel[i] = (Math.random() * 2 - 1);
                    rightChannel[i] = (Math.random() * 2 - 1);
                }

                const noiseSrc = ctx.createBufferSource();
                noiseSrc.buffer = noiseBuffer;

                // 1. BỘ LỌC CHÍNH (Dynamic Dual-Resonant Bandpass): Quét từ luồng khí trầm -> đỉnh bão gió rít cực đại -> tan dần
                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.Q.setValueAtTime(1.6, now);
                filter.Q.linearRampToValueAtTime(4.2, now + 1.9 * scale); // Tăng cộng hưởng tại đỉnh gió (1.9s)
                filter.Q.exponentialRampToValueAtTime(1.1, now + duration);

                // Tần số quét mở rộng: Bắt đầu từ 95Hz -> rít vút lên 2250Hz ở giữa -> hạ về 90Hz
                filter.frequency.setValueAtTime(board ? 70 : 95, now);
                filter.frequency.exponentialRampToValueAtTime(board ? 1550 : 2250, now + 1.95 * scale);
                filter.frequency.exponentialRampToValueAtTime(90, now + duration);

                // 2. BỘ LỌC LOWPASS làm mềm tầng cao, giữ lại độ gầm rú dày dặn của luồng gió
                const lowpass = ctx.createBiquadFilter();
                lowpass.type = 'lowpass';
                lowpass.frequency.setValueAtTime(280, now);
                lowpass.frequency.exponentialRampToValueAtTime(4200, now + 1.95 * scale);
                lowpass.frequency.exponentialRampToValueAtTime(220, now + duration);

                // 3. ENVELOPE ÂM LƯỢNG (Đã tăng to hơn rõ rệt: đỉnh đạt 0.68 thay vì 0.42)
                const mainGain = ctx.createGain();
                mainGain.gain.setValueAtTime(0.0001, now);
                mainGain.gain.exponentialRampToValueAtTime(0.18, now + 0.6 * scale);
                mainGain.gain.linearRampToValueAtTime(board ? 0.55 : 0.68, now + 1.9 * scale); // Đỉnh gió to và uy lực
                mainGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

                // 4. STEREO PANNER QUÉT TỪ XA VÀO TÂM
                if (ctx.createStereoPanner) {
                    const panner = ctx.createStereoPanner();
                    panner.pan.setValueAtTime(-0.9, now);
                    panner.pan.linearRampToValueAtTime(0.9, now + duration);

                    noiseSrc.connect(filter);
                    filter.connect(lowpass);
                    lowpass.connect(mainGain);
                    mainGain.connect(panner);
                    panner.connect(compressor);
                } else {
                    noiseSrc.connect(filter);
                    filter.connect(lowpass);
                    lowpass.connect(mainGain);
                    mainGain.connect(compressor);
                }

                noiseSrc.start(now);
                noiseSrc.stop(now + duration);

                // 5. LỚP SUB-AIR RUMBLE (Luồng khí nén gầm trầm dịch chuyển không gian - tăng âm lượng lên 0.44)
                const airNoise = ctx.createBufferSource();
                airNoise.buffer = noiseBuffer;
                const airFilter = ctx.createBiquadFilter();
                airFilter.type = 'lowpass';
                airFilter.frequency.setValueAtTime(140, now);
                airFilter.frequency.linearRampToValueAtTime(460, now + 1.85 * scale);
                airFilter.frequency.linearRampToValueAtTime(80, now + duration);

                const airGain = ctx.createGain();
                airGain.gain.setValueAtTime(0.0001, now);
                airGain.gain.exponentialRampToValueAtTime(0.12, now + 0.5 * scale);
                airGain.gain.linearRampToValueAtTime(board ? 0.32 : 0.44, now + 1.85 * scale); // Âm lượng tầng trầm mạnh mẽ
                airGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

                airNoise.connect(airFilter);
                airFilter.connect(airGain);
                airGain.connect(compressor);

                airNoise.start(now);
                airNoise.stop(now + duration);
            } catch (e) {
                console.warn('Lỗi tạo âm thanh vút:', e);
            }
        }


    function chime(variant = 0) { playAstrologyDing(variant); }
    function whoosh(hover = false) {
        if (!enabled || !unlocked || !ctx) return;
        if (hover && performance.now() - lastHover < 180) return;
        if (hover) lastHover = performance.now();
        const now = ctx.currentTime, duration = hover ? .2 : .65;
        const src = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), gain = ctx.createGain();
        src.buffer = noise; filter.type = 'bandpass'; filter.Q.value = .7;
        filter.frequency.setValueAtTime(hover ? 900 : 200, now);
        filter.frequency.exponentialRampToValueAtTime(hover ? 1600 : 1800, now + duration * .45);
        filter.frequency.exponentialRampToValueAtTime(250, now + duration);
        gain.gain.setValueAtTime(.0001, now);
        gain.gain.linearRampToValueAtTime(hover ? .16 : .4, now + duration * .35);
        gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
        src.connect(filter); filter.connect(gain); gain.connect(master);
        src.start(now); src.stop(now + duration);
        src.onended = () => { src.disconnect(); filter.disconnect(); gain.disconnect(); };
    }
    // HTMLAudioElement để MP3 phát được cả khi mở trang bằng file://.
    const penAudio = new window.Audio(new URL('writing-with-pencil.mp3', document.baseURI).href);
    penAudio.preload = 'auto';
    penAudio.loop = true;
    penAudio.volume = 0;
    let penPlaying = false, penFade = 0, penBlocked = false;
    let lastFoot = -Infinity, footSide = 1;
    function writing(active, speed = 1) {
        active = active && enabled && unlocked && !document.hidden;
        if (!active) {
            if (document.hidden) {
                penPlaying = false; cancelAnimationFrame(penFade);
                penAudio.pause(); penAudio.volume = 0; return;
            }
            if (!penPlaying) return;
            penPlaying = false;
            cancelAnimationFrame(penFade);
            const initial = penAudio.volume, start = performance.now();
            const fadeOut = () => {
                if (penPlaying) return;
                const t = Math.min(1, (performance.now() - start) / 45);
                penAudio.volume = initial * (1 - t);
                if (t < 1) penFade = requestAnimationFrame(fadeOut);
                else penAudio.pause();
            };
            penFade = requestAnimationFrame(fadeOut);
            return;
        }
        cancelAnimationFrame(penFade);
        // Giữ nguyên cao độ / tốc độ MP3; chỉ thay âm lượng nhẹ theo tốc độ ngòi.
        const motion = Math.max(.15, Math.min(2, speed));
        penAudio.volume = Math.min(.8, .55 + .1 * Math.sqrt(motion));
        if (!penPlaying && !penBlocked) {
            penPlaying = true;
            penAudio.play().catch(error => {
                if (error.name !== 'AbortError') penBlocked = true;
                penPlaying = false;
            });
        }
    }
    function footstep() {
        if (!enabled || !unlocked || !ctx || document.hidden || performance.now() - lastFoot < 300) return;
        lastFoot = performance.now(); footSide *= -1;
        const now = ctx.currentTime;
        const src = ctx.createBufferSource(), filter = ctx.createBiquadFilter(), gain = ctx.createGain();
        const body = ctx.createOscillator(), bodyGain = ctx.createGain();
        const pan = ctx.createStereoPanner(); pan.pan.value = footSide * .16;
        src.buffer = noise; filter.type = 'lowpass'; filter.frequency.value = 700 + Math.random() * 250;
        gain.gain.setValueAtTime(.0001, now); gain.gain.linearRampToValueAtTime(.19, now + .012);
        gain.gain.exponentialRampToValueAtTime(.0001, now + .16);
        body.frequency.setValueAtTime(105 + Math.random() * 16, now);
        body.frequency.exponentialRampToValueAtTime(48, now + .13);
        bodyGain.gain.setValueAtTime(.0001, now); bodyGain.gain.linearRampToValueAtTime(.13, now + .014);
        bodyGain.gain.exponentialRampToValueAtTime(.0001, now + .13);
        src.connect(filter); filter.connect(gain); gain.connect(pan);
        body.connect(bodyGain); bodyGain.connect(pan); pan.connect(master);
        src.start(now); src.stop(now + .18); body.start(now); body.stop(now + .2);
        body.onended = () => { src.disconnect(); filter.disconnect(); gain.disconnect(); body.disconnect(); bodyGain.disconnect(); pan.disconnect(); };
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) writing(false); });
    window.addEventListener('blur', () => writing(false));
    try { enabled = localStorage.getItem('vnr202-sound') !== 'off'; } catch (_) { enabled = true; }
    // Không phát trước thao tác người dùng dù đã lưu lựa chọn bật.
    sync();
    return { unlock, chime, whoosh, writing, footstep, boardEntry() { playWhooshTransition({ duration: 2.1, board: true }); }, transition: playWhooshTransition, toggle() {
        if (!unlocked && enabled) { unlock(); chime(); return; }
        setEnabled(!enabled); if (enabled) chime();
    } };
})();

const MuseumIntro = (() => {
    const overlay = document.getElementById('museumIntro');
    const app = document.getElementById('museumApp');
    const enter = document.getElementById('introEnter');
    const status = document.getElementById('introStatus');
    const progress = document.getElementById('introProgress');
    let ready = false, entered = false, failed = false, started = false;
    let finishTimeline;
    const timelineDone = new Promise(resolve => { finishTimeline = resolve; });
    const stage = document.getElementById('introStage');
    const title = document.getElementById('introTitle');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const sources = [
        "https://cdn.tailwindcss.com",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/shaders/CopyShader.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/shaders/LuminosityHighPassShader.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/postprocessing/EffectComposer.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/postprocessing/RenderPass.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/postprocessing/ShaderPass.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/postprocessing/UnrealBloomPass.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/objects/Reflector.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/lights/RectAreaLightUniformsLib.js",
        "https://cdn.jsdelivr.net/npm/three@0.147.0/examples/js/environments/RoomEnvironment.js",
        "museum-3d-single-01.js",
        ...(location.protocol === 'file:' ? ['museum-image-data.js'] : []),
        "museum-3d-single-02.js",
        "museum-3d-single-03.js",
        "museum-3d-single-04.js",
        "museum-3d-single-05.js",
        "museum-3d-single-06.js",
        "museum-3d-single-07.js",
        "museum-3d-single-08.js",
        "museum-3d-single-09.js",
        "museum-tour.js",
        "presentation.js"
];
    const nextPaint = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            const timer = setTimeout(() => { script.remove(); reject(new Error('Timeout: ' + src)); }, 25000);
            script.src = src;
            script.onload = () => { clearTimeout(timer); resolve(); };
            script.onerror = () => { clearTimeout(timer); reject(new Error('Không tải được: ' + src)); };
            document.body.appendChild(script);
        });
    }
    document.getElementById('introSound').addEventListener('click', () => MuseumSound.toggle());
    async function showStep(text, index) {
        title.textContent = text;

        stage.classList.remove('step-out'); stage.classList.add('step-in');
        MuseumSound.chime(index);
        await delay(2200);
        stage.classList.remove('step-in'); stage.classList.add('step-out');
        await delay(reduced ? 100 : 800);
    }
    async function transition() {
        if (!ready || !started || entered || failed) return;
        entered = true;
        title.textContent = 'Bước vào những trang sử';

        stage.classList.remove('step-out'); stage.classList.add('step-in');
        MuseumSound.transition();
        overlay.classList.add('intro-transition');
        // Reveal đúng đỉnh tiếng vút 1,95s, phần đuôi âm tiếp tục trong bảo tàng.
        await delay(reduced ? 400 : 1950);
        overlay.classList.add('intro-leaving');
        await delay(reduced ? 0 : 750);
        overlay.hidden = true; app.inert = false; app.removeAttribute('aria-hidden');
        window.MuseumApp.start();
        document.getElementById('graphicsQualityToggle').focus({ preventScroll: true });
    }
    enter.addEventListener('click', async () => {
        if (failed) { location.reload(); return; }
        if (started) return;
        started = true;
        MuseumSound.unlock();
        document.getElementById('introWelcome').hidden = true;
        stage.hidden = false;
        await delay(300);
        for (const [i, text] of ['Xin chào tất cả các bạn', 'Hôm nay, cùng khám phá bảo tàng nhé'].entries()) {
            if (failed) break;
            await showStep(text, i);
        }
        if (!failed) {
            title.textContent = 'Không gian lịch sử đang mở…';
            MuseumSound.chime(2);
            document.getElementById('introLoading').hidden = false;
            stage.classList.remove('step-out'); stage.classList.add('step-in');
        }
        finishTimeline();
    });
    async function boot() {
        // Hai khung hình cho intro được vẽ trước mọi thư viện / khởi tạo 3D.
        await nextPaint();
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet'; fonts.href = "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Patrick+Hand&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap";
        document.head.appendChild(fonts);
        try {
            for (let i = 0; i < sources.length; i++) {
                status.textContent = i < 11 ? 'Đang chuẩn bị phòng trưng bày…' : 'Đang sắp xếp tác phẩm và tư liệu…';
                await loadScript(sources[i]);
                progress.value = Math.round((i + 1) / sources.length * 80);
            }
            await timelineDone;
            if (failed) return;
            status.textContent = 'Đang dựng ánh sáng và không gian 3D…';
            progress.value = 85; await nextPaint();
            await window.MuseumApp.prepare();
            await nextPaint();
            ready = true; progress.value = 100;
            status.textContent = 'Phòng trưng bày đã sẵn sàng.';
            transition();
        } catch (error) {
            console.error('Museum startup:', error);
            failed = true;
            document.getElementById('introWelcome').hidden = false;
            stage.hidden = true;
            document.getElementById('introWelcomeTitle').textContent = 'Chưa mở được phòng trưng bày';
            status.textContent = 'Chưa mở được phòng trưng bày. Kiểm tra kết nối rồi thử lại.';
            enter.textContent = 'Tải lại phòng trưng bày'; enter.disabled = false;
        }
    }
    boot();
    return { get active() { return !overlay.hidden; } };
})();
