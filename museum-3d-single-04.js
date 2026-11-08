
// =============================================================================
// TEXTURE PROCEDURAL CHO BẢO TÀNG (không cần file ảnh ngoài)
//  - Sàn gỗ: map màu + roughnessMap + bumpMap (khe ván) → sàn bóng như ảnh mẫu
//  - Tường sơn xanh xám: hạt sơn + AO nướng sẵn ở mép trần / chân tường / cột
//  - Mái vòm kính skylight: ô kính phát sáng HDR (ăn bloom)
//  - Khung tranh mạ vàng: roughness patina
// =============================================================================
const MuseumTextures = (() => {
    function makeCanvas(w, h) {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        return [c, c.getContext('2d')];
    }

    // ---------- SÀN GỖ: ván dài chạy dọc hành lang ----------
    function hardwoodFloor() {
        const S = 2048;
        const [cc, c] = makeCanvas(S, S);      // màu
        const [rc, r] = makeCanvas(S / 2, S / 2); // roughness
        const [bc, b] = makeCanvas(S / 2, S / 2); // bump
        const rand = FX.rng(1884);
        const cols = 16;
        const pw = S / cols;
        const palette = [
            [66, 46, 33], [56, 38, 27], [78, 55, 38], [46, 31, 22],
            [88, 66, 48], [62, 44, 31], [54, 40, 31], [100, 80, 62], [72, 51, 36]
        ];
        c.fillStyle = '#20140c'; c.fillRect(0, 0, S, S);
        r.fillStyle = '#b4b4b4'; r.fillRect(0, 0, S / 2, S / 2);
        b.fillStyle = '#ffffff'; b.fillRect(0, 0, S / 2, S / 2);

        for (let col = 0; col < cols; col++) {
            let y = -rand() * 600;
            while (y < S) {
                const ph = 700 + rand() * 1100;
                const base = rand.pick(palette);
                const k = 0.82 + rand() * 0.32;
                const x0 = col * pw;
                const g = c.createLinearGradient(x0, y, x0 + pw, y + ph);
                const col1 = `rgb(${base[0] * k | 0},${base[1] * k | 0},${base[2] * k | 0})`;
                const k2 = k * (0.86 + rand() * 0.2);
                const col2 = `rgb(${base[0] * k2 | 0},${base[1] * k2 | 0},${base[2] * k2 | 0})`;
                g.addColorStop(0, col1); g.addColorStop(1, col2);
                c.fillStyle = g;
                c.fillRect(x0, y, pw, ph);

                // vân gỗ lượn sóng
                c.save();
                c.beginPath(); c.rect(x0, y, pw, ph); c.clip();
                const lines = 10 + (rand() * 14 | 0);
                for (let i = 0; i < lines; i++) {
                    const gx = x0 + rand() * pw;
                    const amp = 1 + rand() * 5;
                    const freq = 0.004 + rand() * 0.01;
                    const ph0 = rand() * 6.28;
                    c.strokeStyle = rand() < 0.5 ? `rgba(20,10,4,${0.10 + rand() * 0.18})` : `rgba(150,105,70,${0.05 + rand() * 0.08})`;
                    c.lineWidth = 0.6 + rand() * 1.8;
                    c.beginPath();
                    for (let yy = y; yy <= y + ph; yy += 12) {
                        const xx = gx + Math.sin(yy * freq + ph0) * amp;
                        yy === y ? c.moveTo(xx, yy) : c.lineTo(xx, yy);
                    }
                    c.stroke();
                }
                // mắt gỗ
                if (rand() < 0.25) {
                    const kx = x0 + pw * (0.3 + rand() * 0.4), ky = y + rand() * ph;
                    const kg = c.createRadialGradient(kx, ky, 1, kx, ky, 14);
                    kg.addColorStop(0, 'rgba(20,10,5,0.6)'); kg.addColorStop(1, 'rgba(20,10,5,0)');
                    c.fillStyle = kg; c.beginPath(); c.ellipse(kx, ky, 9, 22, 0, 0, Math.PI * 2); c.fill();
                }
                c.restore();

                // khe ghép ván
                c.fillStyle = 'rgba(12,6,2,0.9)';
                c.fillRect(x0, y, 2.5, ph);
                c.fillRect(x0, y, pw, 2.5);

                // roughness: mỗi tấm bóng khác nhau một chút (sáp, mòn)
                const rv = 70 + rand() * 70 | 0;
                r.fillStyle = `rgb(${rv},${rv},${rv})`;
                r.fillRect(x0 / 2 + 1, y / 2 + 1, pw / 2 - 1, ph / 2 - 1);
                b.fillStyle = '#000';
                b.fillRect(x0 / 2, y / 2, 1.5, ph / 2);
                b.fillRect(x0 / 2, y / 2, pw / 2, 1.5);
                y += ph;
            }
        }
        return {
            map: FX.canvasTexture(cc, { repeat: [4, 26], aniso: 16 }),
            roughnessMap: FX.canvasTexture(rc, { repeat: [4, 26], srgb: false }),
            bumpMap: FX.canvasTexture(bc, { repeat: [4, 26], srgb: false })
        };
    }

    // ---------- TƯỜNG XANH XÁM (một khoang giữa 2 cột) ----------
    function wallBay() {
        const W = 1024, H = 1024;
        const [cc, c] = makeCanvas(W, H);
        const rand = FX.rng(42);
        c.fillStyle = '#6b7262';
        c.fillRect(0, 0, W, H);
        // hạt sơn mịn + vệt lăn sơn
        for (let i = 0; i < 26000; i++) {
            const v = rand();
            c.fillStyle = v < 0.5 ? `rgba(0,0,0,${rand() * 0.05})` : `rgba(255,255,240,${rand() * 0.04})`;
            c.fillRect(rand() * W, rand() * H, 1 + rand() * 2, 1 + rand() * 2);
        }
        for (let i = 0; i < 40; i++) {
            c.fillStyle = `rgba(${rand() < 0.5 ? '0,0,0' : '255,255,240'},0.008)`;
            c.fillRect(rand() * W, 0, 20 + rand() * 60, H);
        }
        // AO nướng sẵn: dưới phào trần, trên len chân tường, sát 2 cột
        const ao = (x0, y0, x1, y1, a) => {
            const g = c.createLinearGradient(x0, y0, x1, y1);
            g.addColorStop(0, `rgba(10,12,8,${a})`); g.addColorStop(1, 'rgba(10,12,8,0)');
            c.fillStyle = g; c.fillRect(0, 0, W, H);
        };
        ao(0, 0, 0, 160, 0.55);
        ao(0, H, 0, H - 120, 0.45);
        ao(0, 0, 70, 0, 0.35);
        ao(W, 0, W - 70, 0, 0.35);
        return FX.canvasTexture(cc);
    }

    // Texture tường trơn có lặp (cho cột, tường đầu hồi)
    function plaster(color = '#6b7262', seed = 7) {
        const S = 512;
        const [cc, c] = makeCanvas(S, S);
        const rand = FX.rng(seed);
        c.fillStyle = color; c.fillRect(0, 0, S, S);
        for (let i = 0; i < 9000; i++) {
            c.fillStyle = rand() < 0.5 ? `rgba(0,0,0,${rand() * 0.05})` : `rgba(255,255,240,${rand() * 0.035})`;
            c.fillRect(rand() * S, rand() * S, 1 + rand() * 2, 1 + rand() * 2);
        }
        return FX.canvasTexture(cc, { repeat: [1, 1] });
    }

    // ---------- MÁI VÒM KÍNH ----------
    function skylightGlass() {
        const W = 512, H = 512;
        const [cc, c] = makeCanvas(W, H);
        const g = c.createLinearGradient(0, 0, W, 0);
        g.addColorStop(0, '#d9d6cc'); g.addColorStop(0.5, '#ffffff'); g.addColorStop(1, '#d9d6cc');
        c.fillStyle = g; c.fillRect(0, 0, W, H);
        // các ô kính hơi khác sắc độ
        const rand = FX.rng(9);
        const cols = 10, rows = 2;
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
            c.fillStyle = `rgba(${rand() < 0.5 ? '200,205,210' : '255,250,235'},${rand() * 0.25})`;
            c.fillRect(i * W / cols, j * H / rows, W / cols, H / rows);
        }
        c.strokeStyle = '#8f8c84';
        c.lineWidth = 5;
        for (let i = 0; i <= cols; i++) { c.beginPath(); c.moveTo(i * W / cols, 0); c.lineTo(i * W / cols, H); c.stroke(); }
        c.lineWidth = 10;
        for (let j = 0; j <= rows; j++) { c.beginPath(); c.moveTo(0, j * H / rows); c.lineTo(W, j * H / rows); c.stroke(); }
        return FX.canvasTexture(cc, { repeat: [1, 36] });
    }

    // ---------- PATINA VÀNG (roughness) ----------
    function goldPatina() {
        const S = 256;
        const [cc, c] = makeCanvas(S, S);
        const rand = FX.rng(77);
        c.fillStyle = '#5a5a5a'; c.fillRect(0, 0, S, S);
        for (let i = 0; i < 3000; i++) {
            const v = 40 + rand() * 140 | 0;
            c.fillStyle = `rgba(${v},${v},${v},0.35)`;
            c.beginPath(); c.arc(rand() * S, rand() * S, 1 + rand() * 4, 0, Math.PI * 2); c.fill();
        }
        return FX.canvasTexture(cc, { repeat: [3, 3], srgb: false });
    }

    // Bóng mềm tiếp xúc (contact shadow) dưới ghế / cột chắn
    function softShadow() {
        const S = 128;
        const [cc, c] = makeCanvas(S, S);
        const g = c.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
        g.addColorStop(0, 'rgba(0,0,0,0.75)');
        g.addColorStop(0.55, 'rgba(0,0,0,0.3)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        c.fillStyle = g; c.fillRect(0, 0, S, S);
        return FX.canvasTexture(cc, { srgb: false });
    }

    // Bảng chú thích nhỏ cạnh tranh
    function placard(piece) {
        const [cc, c] = makeCanvas(256, 192);
        c.fillStyle = '#efece3'; c.fillRect(0, 0, 256, 192);
        c.fillStyle = '#2a2a26';
        c.font = '600 22px "JetBrains Mono", monospace';
        c.fillText(piece.code, 18, 40);
        c.font = '500 15px "Be Vietnam Pro", sans-serif';
        c.fillStyle = '#55524a';
        c.fillText(piece.date, 18, 70);
        c.fillStyle = '#8a8679';
        c.fillRect(18, 90, 220, 2);
        c.font = '400 13px "Be Vietnam Pro", sans-serif';
        c.fillText('Click để mở bảng ghim', 18, 120);
        return FX.canvasTexture(cc);
    }

    return { hardwoodFloor, wallBay, plaster, skylightGlass, goldPatina, softShadow, placard };
})();

