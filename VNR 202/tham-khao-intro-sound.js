
        // =========================================================================
        // 1. BỘ TỔNG HỢP ÂM THANH TRÌNH DUYỆT (WEB AUDIO API SYNTHESIZER)
        // Tự tạo tiếng chuông Astrology Ding, tiếng Vút (Whoosh) & tiếng Lật sách
        // =========================================================================
        let audioCtx = null;

        function ensureAudioContext() {
            if (!audioCtx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContextClass();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }

        /**
         * Tiếng "Ding" nhẹ kiểu Astrology / Celestial Crystal Chime
         * Kết hợp tần số cơ bản + quãng 5 + bồi âm pha lê cao vút (2.756x) kèm ngân vang
         */
        function playAstrologyDing(pitchVariant = 0) {
            try {
                const ctx = ensureAudioContext();
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
                    gainNode.connect(ctx.destination);

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
                    sGain.connect(ctx.destination);

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
        function playWhooshTransition() {
            try {
                const ctx = ensureAudioContext();
                const now = ctx.currentTime;
                const duration = 3.8; // Kéo dài lên 3.8 giây để tạo tiếng gió vúttttt cuộn dài

                // Bộ nén âm DynamicsCompressor giữ âm lượng to, chắc và không bị vỡ tiếng
                const compressor = ctx.createDynamicsCompressor();
                compressor.threshold.setValueAtTime(-18, now);
                compressor.knee.setValueAtTime(10, now);
                compressor.ratio.setValueAtTime(6, now);
                compressor.attack.setValueAtTime(0.003, now);
                compressor.release.setValueAtTime(0.25, now);
                compressor.connect(ctx.destination);

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
                filter.Q.linearRampToValueAtTime(4.2, now + 1.9); // Tăng cộng hưởng tại đỉnh gió (1.9s)
                filter.Q.exponentialRampToValueAtTime(1.1, now + duration);

                // Tần số quét mở rộng: Bắt đầu từ 95Hz -> rít vút lên 2250Hz ở giữa -> hạ về 90Hz
                filter.frequency.setValueAtTime(95, now);
                filter.frequency.exponentialRampToValueAtTime(2250, now + 1.95);
                filter.frequency.exponentialRampToValueAtTime(90, now + duration);

                // 2. BỘ LỌC LOWPASS làm mềm tầng cao, giữ lại độ gầm rú dày dặn của luồng gió
                const lowpass = ctx.createBiquadFilter();
                lowpass.type = 'lowpass';
                lowpass.frequency.setValueAtTime(280, now);
                lowpass.frequency.exponentialRampToValueAtTime(4200, now + 1.95);
                lowpass.frequency.exponentialRampToValueAtTime(220, now + duration);

                // 3. ENVELOPE ÂM LƯỢNG (Đã tăng to hơn rõ rệt: đỉnh đạt 0.68 thay vì 0.42)
                const mainGain = ctx.createGain();
                mainGain.gain.setValueAtTime(0.0001, now);
                mainGain.gain.exponentialRampToValueAtTime(0.18, now + 0.6);
                mainGain.gain.linearRampToValueAtTime(0.68, now + 1.9); // Đỉnh gió to và uy lực
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
                airFilter.frequency.linearRampToValueAtTime(460, now + 1.85);
                airFilter.frequency.linearRampToValueAtTime(80, now + duration);

                const airGain = ctx.createGain();
                airGain.gain.setValueAtTime(0.0001, now);
                airGain.gain.exponentialRampToValueAtTime(0.12, now + 0.5);
                airGain.gain.linearRampToValueAtTime(0.44, now + 1.85); // Âm lượng tầng trầm mạnh mẽ
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

        /**
         * Âm thanh lật mở trang giấy khi sách mở ra
         */
        function playPageFlipSound() {
            try {
                const ctx = ensureAudioContext();
                const now = ctx.currentTime;
                const dur = 0.28;

                const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
                const data = buf.getChannelData(0);
                for (let i = 0; i < data.length; i++) {
                    data[i] = (Math.random() * 2 - 1) * Math.sin((i / data.length) * Math.PI);
                }

                const src = ctx.createBufferSource();
                src.buffer = buf;

                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.setValueAtTime(1200, now);
                filter.frequency.exponentialRampToValueAtTime(2800, now + dur);

                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.14, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

                src.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                src.start(now);
                src.stop(now + dur);
            } catch (e) {}
        }

        function testAstrologyDing() {
            playAstrologyDing(Math.floor(Math.random() * 3));
        }

        function testWhooshSound() {
            const whooshEl = document.getElementById('whooshEffect');
            whooshEl.classList.remove('whoosh-active');
            void whooshEl.offsetWidth;
            whooshEl.classList.add('whoosh-active');
            playWhooshTransition();
        }

        // =========================================================================
        // 2. KỊCH BẢN TIMELINE INTRO CHÍNH XÁC THEO YÊU CẦU (KHOẢNG ĐỢI ~2 GIÂY)
        // =========================================================================
        let introTimeouts = [];

        function clearAllIntroTimeouts() {
            introTimeouts.forEach(t => clearTimeout(t));
            introTimeouts = [];
        }

        function scheduleStep(fn, delayMs) {
            const id = setTimeout(fn, delayMs);
            introTimeouts.push(id);
        }

        function resetVisualElements() {
            ['stepText1', 'stepText2', 'stepText3'].forEach(id => {
                const el = document.getElementById(id);
                el.className = 'intro-text-base';
            });
            const bookScene = document.getElementById('bookScene');
            bookScene.classList.remove('visible');

            const book3D = document.getElementById('book3D');
            book3D.classList.remove('is-open');

            const whooshEl = document.getElementById('whooshEffect');
            whooshEl.classList.remove('whoosh-active');
        }

        function startIntroWithAudio() {
            ensureAudioContext();
            const overlay = document.getElementById('startOverlay');
            overlay.style.opacity = '0';
            setTimeout(() => overlay.classList.add('hidden'), 500);
            runIntroTimeline();
        }

        function restartIntroSequence() {
            ensureAudioContext();
            const overlay = document.getElementById('startOverlay');
            overlay.classList.add('hidden');
            runIntroTimeline();
        }

        function runIntroTimeline() {
            clearAllIntroTimeouts();
            resetVisualElements();

            const t1 = document.getElementById('stepText1');
            const t2 = document.getElementById('stepText2');
            const t3 = document.getElementById('stepText3');
            const bookScene = document.getElementById('bookScene');
            const book3D = document.getElementById('book3D');
            const whooshEl = document.getElementById('whooshEffect');
            const statusLabel = document.getElementById('statusLabel');

            // --- BƯỚC 1: Hiện chữ "Xin chào" + Tiếng Ding 1 ---
            scheduleStep(() => {
                statusLabel.innerText = '1/4 · "Xin chào"';
                t1.classList.add('fade-in-center');
                playAstrologyDing(0);
            }, 300);

            // Đợi 2 giây sau khi hiện -> Mờ chữ "Xin chào" đi
            scheduleStep(() => {
                t1.classList.remove('fade-in-center');
                t1.classList.add('fade-out-center');
            }, 300 + 2200);

            // --- BƯỚC 2: Từ dưới lên chữ "tất cả các bạn" + Tiếng Ding 2 ---
            scheduleStep(() => {
                statusLabel.innerText = '2/4 · "tất cả các bạn"';
                t2.classList.add('slide-up-in');
                playAstrologyDing(1);
            }, 300 + 2200 + 800);

            // Đợi 2 giây -> Mờ chữ "tất cả các bạn" đi
            scheduleStep(() => {
                t2.classList.remove('slide-up-in');
                t2.classList.add('slide-up-out');
            }, 300 + 2200 + 800 + 2200);

            // --- BƯỚC 3: Từ dưới lên chữ "Hôm nay chúng ta sẽ cùng học bài nhé" + Tiếng Ding 3 ---
            scheduleStep(() => {
                statusLabel.innerText = '3/4 · "Hôm nay chúng ta sẽ cùng học bài nhé"';
                t3.classList.add('slide-up-in');
                playAstrologyDing(2);
            }, 300 + 2200 + 800 + 2200 + 800);

            // Đợi 2 giây -> Mờ đi và phát âm thanh VÚT DÀI (3.8s) chuyển cảnh
            scheduleStep(() => {
                t3.classList.remove('slide-up-in');
                t3.classList.add('slide-up-out');

                statusLabel.innerText = '4/4 · Gió dịch chuyển & mở Sách Tri Thức...';
                whooshEl.classList.remove('whoosh-active');
                void whooshEl.offsetWidth;
                whooshEl.classList.add('whoosh-active');
                playWhooshTransition();
            }, 300 + 2200 + 800 + 2200 + 800 + 2200);

            // --- BƯỚC 4: Cuốn sách 3D hiện lên giữa không gian ngay đỉnh gió vút (khoảng 1.95s) ---
            scheduleStep(() => {
                bookScene.classList.add('visible');
                statusLabel.innerText = '✨ Hoàn tất Intro · Cuốn sách đã sẵn sàng';
            }, 300 + 2200 + 800 + 2200 + 800 + 2200 + 1950);

            // Tự động mở bìa sách sau khi luồng gió lắng dần (~3.85s)
            scheduleStep(() => {
                book3D.classList.add('is-open');
                playPageFlipSound();
            }, 300 + 2200 + 800 + 2200 + 800 + 2200 + 3850);
        }

        // =========================================================================
        // 3. TƯƠNG TÁC ĐÓNG / MỞ & LẬT TRANG TRONG CUỐN SÁCH 3D
        // =========================================================================
        const BOOK_PAGES = [
            {
                chapter: 'Chương I · Khởi Đầu',
                badge: '02 / 04',
                title: '1. Bối Cảnh & Những Ngả Đường Lịch Sử',
                body: 'Trước khi bước vào từng phần chi tiết, chúng ta sẽ điểm qua bức tranh toàn cảnh từ đầu thế kỷ XX đến mùa thu Tháng Tám năm 1945.',
                icon: '🧭',
                highlight: '"Từ lịch sử đến câu trả lời hôm nay"',
                sub: 'Sẵn sàng bước vào nội dung chính'
            },
            {
                chapter: 'Chương II · Bước Ngoặt 1930',
                badge: '03 / 04',
                title: '2. Sự Ra Đời Của Đảng & Cương Lĩnh Đầu Tiên',
                body: 'Mùa xuân năm 1930 tại Cửu Long (Hương Cảng), Hội nghị hợp nhất các tổ chức cộng sản đã mở ra bước ngoặt quyết định cho cách mạng Việt Nam.',
                icon: '📜',
                highlight: '"Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu"',
                sub: 'Chánh cương vắn tắt & Sách lược vắn tắt (2/1930)'
            },
            {
                chapter: 'Chương III · Cao Trào & Thắng Lợi',
                badge: '04 / 04',
                title: '3. Ba Cao Trào Cách Mạng Tiến Tới Tháng Tám 1945',
                body: 'Trải qua 3 cuộc tổng diễn tập lớn (1930–1931, 1936–1939 và 1939–1945), toàn dân tộc đã chớp thời cơ ngàn năm có một để giành độc lập.',
                icon: '⭐',
                highlight: '"Nước Việt Nam có quyền hưởng tự do và độc lập"',
                sub: 'Tuyên ngôn Độc lập · 02/09/1945'
            }
        ];
        let currentBookPageIdx = 0;

        function toggleBookOpen() {
            const book3D = document.getElementById('book3D');
            book3D.classList.toggle('is-open');
            playPageFlipSound();
        }

        function changeBookLessonPage(delta) {
            currentBookPageIdx = (currentBookPageIdx + delta + BOOK_PAGES.length) % BOOK_PAGES.length;
            const p = BOOK_PAGES[currentBookPageIdx];

            playPageFlipSound();
            document.getElementById('pageChapterTag').innerText = p.chapter;
            document.getElementById('pageNumBadge').innerText = p.badge;
            document.getElementById('pageTitle').innerText = p.title;
            document.getElementById('pageBody').innerText = p.body;
            document.getElementById('pageIcon').innerText = p.icon;
            document.getElementById('pageHighlight').innerText = p.highlight;
            document.getElementById('pageSubHighlight').innerText = p.sub;
        }

        // =========================================================================
        // 4. HIỆU ỨNG BẦU TRỜI SAO LẤP LÁNH (STARFIELD CANVAS)
        // =========================================================================
        function initStarfield() {
            const canvas = document.getElementById('starfieldCanvas');
            const ctx = canvas.getContext('2d');
            let w = canvas.width = window.innerWidth;
            let h = canvas.height = window.innerHeight;

            const stars = Array.from({ length: 130 }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.6 + 0.3,
                alpha: Math.random(),
                speed: Math.random() * 0.018 + 0.004,
                vy: -(Math.random() * 0.15 + 0.04)
            }));

            window.addEventListener('resize', () => {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            });

            function drawStars() {
                ctx.clearRect(0, 0, w, h);
                for (const s of stars) {
                    s.alpha += s.speed;
                    s.y += s.vy;
                    if (s.y < 0) s.y = h;
                    const a = (Math.sin(s.alpha) + 1) * 0.45 + 0.1;

                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(253, 230, 138, ${a})`;
                    ctx.fill();
                }
                requestAnimationFrame(drawStars);
            }
            drawStars();
        }

        window.onload = function () {
            initStarfield();
        };
    