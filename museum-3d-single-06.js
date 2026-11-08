
// =============================================================================
// TEXTURE BẢNG GHIM: giấy cũ (ố vàng, nếp gấp, vết cà phê, lỗ ghim cháy),
// nền bảng xanh đen (dạ / bảng phấn có vết phấn mờ), ảnh tư liệu sepia giả lập.
// =============================================================================
const BoardPaper = (() => {
    function makeCanvas(w, h) {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        return [c, c.getContext('2d')];
    }

    // ---------- Giấy cũ ----------
    // trả về canvas nền (vẽ 1 lần, cache) — nội dung chữ vẽ đè lên sau
    function agedPaper(W, H, seed, opts = {}) {
        const [cv, c] = makeCanvas(W, H);
        const rand = FX.rng(seed);
        const tone = opts.tone ?? rand.range(-8, 8);
        const base = c.createRadialGradient(W * 0.45, H * 0.4, W * 0.05, W * 0.5, H * 0.5, W * 0.75);
        base.addColorStop(0, `rgb(${238 + tone},${218 + tone},${168 + tone})`);
        base.addColorStop(0.6, `rgb(${222 + tone},${192 + tone},${136 + tone})`);
        base.addColorStop(1, `rgb(${178 + tone},${138 + tone},${84 + tone})`);
        c.fillStyle = base; c.fillRect(0, 0, W, H);

        // sợi giấy + hạt
        const n = (W * H) / 90;
        for (let i = 0; i < n; i++) {
            const d = rand();
            c.fillStyle = d < 0.5 ? `rgba(90,60,25,${rand() * 0.07})` : `rgba(255,248,225,${rand() * 0.08})`;
            c.fillRect(rand() * W, rand() * H, 1 + rand() * 2.5, 1 + rand() * 1.2);
        }
        // mảng ố loang
        for (let i = 0; i < 14; i++) {
            const x = rand() * W, y = rand() * H, r = rand.range(W * 0.04, W * 0.18);
            const g = c.createRadialGradient(x, y, r * 0.2, x, y, r);
            const a = rand.range(0.04, 0.12);
            g.addColorStop(0, `rgba(150,100,40,${a})`);
            g.addColorStop(0.75, `rgba(150,100,40,${a * 0.6})`);
            g.addColorStop(1, 'rgba(150,100,40,0)');
            c.fillStyle = g; c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
            // viền loang đậm hơn (vết nước khô)
            if (rand() < 0.5) {
                c.strokeStyle = `rgba(120,75,30,${a * 0.8})`;
                c.lineWidth = rand.range(1, 3);
                c.beginPath();
                for (let k = 0; k <= 40; k++) {
                    const t = (k / 40) * Math.PI * 2;
                    const rr = r * (0.8 + Math.sin(t * 3 + x) * 0.06 + rand() * 0.04);
                    const px = x + Math.cos(t) * rr, py = y + Math.sin(t) * rr;
                    k ? c.lineTo(px, py) : c.moveTo(px, py);
                }
                c.stroke();
            }
        }
        // vết cốc cà phê
        if (opts.coffee !== false && rand() < 0.8) {
            const x = rand.range(W * 0.6, W * 0.92), y = rand.range(H * 0.5, H * 0.85), r = W * rand.range(0.06, 0.09);
            for (let k = 0; k < 3; k++) {
                c.strokeStyle = `rgba(110,65,25,${0.08 + rand() * 0.08})`;
                c.lineWidth = rand.range(2, 7);
                c.beginPath(); c.arc(x + rand() * 4, y + rand() * 4, r * (1 - k * 0.03), rand() * 6, rand() * 6 + Math.PI * rand.range(1.2, 2)); c.stroke();
            }
        }
        // nếp gấp: 1 dọc giữa + 2 ngang
        const fold = (x0, y0, x1, y1) => {
            c.strokeStyle = 'rgba(90,60,25,0.22)'; c.lineWidth = 2.5;
            c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
            c.strokeStyle = 'rgba(255,245,215,0.35)'; c.lineWidth = 2;
            c.beginPath(); c.moveTo(x0 + 3, y0 + 3); c.lineTo(x1 + 3, y1 + 3); c.stroke();
        };
        if (opts.folds !== false) {
            fold(W * 0.5 + rand.range(-8, 8), 0, W * 0.5 + rand.range(-8, 8), H);
            fold(0, H * 0.355, W, H * 0.355 + rand.range(-6, 6));
            fold(0, H * 0.7, W, H * 0.7 + rand.range(-6, 6));
        }
        // lỗ ghim cháy xém hình sao ở mép trái/phải
        const burns = opts.burns ?? 3;
        for (let i = 0; i < burns; i++) {
            const x = rand() < 0.5 ? rand.range(W * 0.03, W * 0.06) : rand.range(W * 0.93, W * 0.97);
            const y = rand.range(H * 0.2, H * 0.85);
            c.fillStyle = 'rgba(70,35,15,0.75)';
            c.beginPath();
            for (let k = 0; k < 10; k++) {
                const t = (k / 10) * Math.PI * 2, rr = k % 2 ? 4 : 11;
                c.lineTo(x + Math.cos(t) * rr, y + Math.sin(t) * rr);
            }
            c.fill();
        }
        // mép tối, cháy nhẹ
        const edge = c.createLinearGradient(0, 0, W, 0);
        edge.addColorStop(0, 'rgba(90,50,15,0.35)'); edge.addColorStop(0.04, 'rgba(90,50,15,0)');
        edge.addColorStop(0.96, 'rgba(90,50,15,0)'); edge.addColorStop(1, 'rgba(90,50,15,0.35)');
        c.fillStyle = edge; c.fillRect(0, 0, W, H);
        const edgeV = c.createLinearGradient(0, 0, 0, H);
        edgeV.addColorStop(0, 'rgba(90,50,15,0.3)'); edgeV.addColorStop(0.05, 'rgba(90,50,15,0)');
        edgeV.addColorStop(0.95, 'rgba(90,50,15,0)'); edgeV.addColorStop(1, 'rgba(90,50,15,0.35)');
        c.fillStyle = edgeV; c.fillRect(0, 0, W, H);
        return cv;
    }

    // bump map cho giấy: nếp gấp nổi + sợi
    function paperBump(W, H, seed) {
        const [cv, c] = makeCanvas(W, H);
        const rand = FX.rng(seed + 1);
        c.fillStyle = '#808080'; c.fillRect(0, 0, W, H);
        for (let i = 0; i < (W * H) / 60; i++) {
            const v = 110 + rand() * 40 | 0;
            c.fillStyle = `rgb(${v},${v},${v})`;
            c.fillRect(rand() * W, rand() * H, 1 + rand() * 3, 1);
        }
        const ridge = (x0, y0, x1, y1) => {
            c.strokeStyle = '#b0b0b0'; c.lineWidth = 6;
            c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
            c.strokeStyle = '#d0d0d0'; c.lineWidth = 2;
            c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
        };
        ridge(W * 0.5, 0, W * 0.5, H);
        ridge(0, H * 0.355, W, H * 0.355);
        ridge(0, H * 0.7, W, H * 0.7);
        return FX.canvasTexture(cv, { srgb: false });
    }

    // ---------- Nền bảng ----------
    function boardSurface() {
        const S = 1024;
        const [cv, c] = makeCanvas(S, S);
        const rand = FX.rng(2024);
        c.fillStyle = '#1a2420'; c.fillRect(0, 0, S, S);
        for (let i = 0; i < 70000; i++) {
            const v = rand();
            c.fillStyle = v < 0.5 ? `rgba(0,0,0,${rand() * 0.12})` : `rgba(120,150,130,${rand() * 0.05})`;
            c.fillRect(rand() * S, rand() * S, 1 + rand() * 2, 1 + rand() * 2);
        }
        for (let i = 0; i < 18; i++) {
            const x = rand() * S, y = rand() * S, r = rand.range(60, 220);
            const g = c.createRadialGradient(x, y, 0, x, y, r);
            g.addColorStop(0, `rgba(${rand() < 0.5 ? '0,0,0' : '60,80,70'},0.12)`); g.addColorStop(1, 'rgba(0,0,0,0)');
            c.fillStyle = g; c.fillRect(0, 0, S, S);
        }
        return FX.canvasTexture(cv, { repeat: [3, 3], aniso: 8 });
    }

    // vết phấn mờ (vòng tròn, mũi tên) — lớp phủ trong suốt đặt trên bảng
    function chalkMarks(seed) {
        const [cv, c] = makeCanvas(1024, 1024);
        const rand = FX.rng(seed);
        c.lineCap = 'round';
        for (let i = 0; i < 5; i++) {
            c.strokeStyle = `rgba(220,230,220,${rand.range(0.5, 0.9)})`;
            c.lineWidth = rand.range(2, 4);
            const x = rand() * 1024, y = rand() * 1024, r = rand.range(40, 120);
            c.beginPath();
            if (rand() < 0.5) c.ellipse(x, y, r, r * rand.range(0.5, 0.9), rand() * 3, 0, Math.PI * rand.range(1.5, 2.1));
            else { c.moveTo(x, y); c.quadraticCurveTo(x + r, y - r * 0.6, x + r * 2, y + rand.range(-40, 40)); }
            c.stroke();
        }
        const tex = FX.canvasTexture(cv);
        return tex;
    }

    // ---------- Ảnh tư liệu sepia giả (placeholder) ----------
    function sepiaPhoto(c, x, y, w, h, seed) {
        const rand = FX.rng(seed);
        c.save();
        c.fillStyle = '#efe6d0';
        c.fillRect(x - 12, y - 12, w + 24, h + 24);
        c.beginPath(); c.rect(x, y, w, h); c.clip();
        const sky = c.createLinearGradient(0, y, 0, y + h);
        sky.addColorStop(0, '#cdb48a'); sky.addColorStop(0.55, '#a88a5e'); sky.addColorStop(1, '#5d4529');
        c.fillStyle = sky; c.fillRect(x, y, w, h);
        // đường chân trời: đồi / mái nhà
        c.fillStyle = 'rgba(70,50,30,0.65)';
        c.beginPath(); c.moveTo(x, y + h * 0.62);
        for (let i = 0; i <= 12; i++) c.lineTo(x + (w * i) / 12, y + h * (0.5 + rand() * 0.14));
        c.lineTo(x + w, y + h); c.lineTo(x, y + h); c.fill();
        // đám đông / bóng người
        for (let i = 0; i < 26; i++) {
            const px = x + rand() * w, py = y + h * rand.range(0.68, 0.95), s = rand.range(6, 16) * (w / 400);
            c.fillStyle = `rgba(40,28,16,${rand.range(0.6, 0.9)})`;
            c.beginPath(); c.arc(px, py - s * 1.6, s * 0.45, 0, Math.PI * 2); c.fill();
            c.fillRect(px - s * 0.45, py - s * 1.2, s * 0.9, s * 1.8);
        }
        // cờ / cột
        if (rand() < 0.7) {
            const fx = x + w * rand.range(0.2, 0.8);
            c.fillStyle = 'rgba(40,28,16,0.85)'; c.fillRect(fx, y + h * 0.2, 3 * (w / 400), h * 0.5);
            c.fillStyle = 'rgba(120,40,30,0.55)'; c.fillRect(fx, y + h * 0.2, w * 0.12, h * 0.08);
        }
        // hạt, xước, vignette
        for (let i = 0; i < w * h / 70; i++) {
            c.fillStyle = `rgba(${rand() < 0.5 ? '0,0,0' : '255,240,210'},${rand() * 0.12})`;
            c.fillRect(x + rand() * w, y + rand() * h, 1.5, 1.5);
        }
        for (let i = 0; i < 6; i++) {
            c.strokeStyle = 'rgba(255,240,210,0.18)'; c.lineWidth = 1;
            const sx = x + rand() * w;
            c.beginPath(); c.moveTo(sx, y); c.lineTo(sx + rand.range(-10, 10), y + h); c.stroke();
        }
        const vg = c.createRadialGradient(x + w / 2, y + h / 2, Math.min(w, h) * 0.25, x + w / 2, y + h / 2, Math.max(w, h) * 0.75);
        vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(40,20,5,0.55)');
        c.fillStyle = vg; c.fillRect(x, y, w, h);
        c.restore();
    }

    return { agedPaper, paperBump, boardSurface, chalkMarks, sepiaPhoto, makeCanvas };
})();

