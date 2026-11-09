
// =============================================================================
// BÚT VIẾT TRÊN THẺ GIẤY
//  - Dàn trang một "step" (label, tiêu đề, các block) thành chuỗi thao tác (ops)
//  - Mỗi op: viết chữ (lộ dần theo ngòi bút), vẽ nét (mũi tên, khoanh tròn, gạch chân),
//    hiện ảnh/đồ họa (fade + "đóng dấu"), có thời lượng riêng
//  - update(dt) vẽ lại canvas theo thời gian và trả về vị trí ngòi bút để bút 3D bám theo
// =============================================================================
const BoardWriter = (() => {
    const W = 1600, H = 1040;
    const INK = '#231b13', RED = '#b3211b', SOFT = '#4a3c2b';
    const SANS = '"Be Vietnam Pro", sans-serif';
    const HAND = '"Patrick Hand", "Be Vietnam Pro", cursive';
    const imageCache = {};

    function loadImage(src, onReady) {
        if (!src) return null;
        if (!imageCache[src]) {
            const img = new Image();
            if (/^https?:/i.test(src)) img.crossOrigin = 'anonymous';
            imageCache[src] = { img, ok: false, failed: false, cbs: [] };
            img.onload = () => { imageCache[src].ok = true; imageCache[src].cbs.splice(0).forEach(f => f()); };
            img.onerror = () => { imageCache[src].failed = true; imageCache[src].cbs.splice(0).forEach(f => f()); };
            img.src = museumImageSrc(src);
        }
        const e = imageCache[src];
        if (!e.ok && !e.failed && onReady && !e.cbs.includes(onReady)) e.cbs.push(onReady);
        return e.ok ? e.img : null;
    }

    function wrapLines(ctx, text, maxW) {
        const out = [];
        String(text).split('\n').forEach(par => {
            let line = '';
            par.split(' ').forEach(word => {
                const test = line ? line + ' ' + word : word;
                if (ctx.measureText(test).width > maxW && line) { out.push(line); line = word; } else line = test;
            });
            out.push(line);
        });
        return out;
    }

    const numStr = (step) => String((step.label || '').split('/')[0]).trim();

    // Đường tròn vẽ tay (hơi lệch, vượt quá 1 vòng)
    function handCircle(cx, cy, rx, ry, seed) {
        const rand = FX.rng(seed);
        const pts = [], turns = 1.12, n = 64, start = rand.range(-2.2, -1.6);
        for (let i = 0; i <= n; i++) {
            const t = start + (i / n) * Math.PI * 2 * turns;
            const k = 1 + Math.sin(t * 2 + seed) * 0.03 + (i / n) * 0.06;
            pts.push([cx + Math.cos(t) * rx * k, cy + Math.sin(t) * ry * k]);
        }
        return pts;
    }

    // ---------- Dàn trang ----------
    function layout(ctx, step, scale, seed) {
        const ops = [];
        const S = (v) => Math.round(v * scale);
        const X0 = 120;
        const hasRight = (step.blocks || []).some(b => b.col === 'right');
        const LW = hasRight ? 840 : 1360;
        const RX = 1010, RW = 470;
        const speed = ((typeof STORY_CONFIG !== 'undefined') && STORY_CONFIG.writeSpeed) || 1;

        const textOp = (text, x, y, font, size, color, pxPerSec, extra = {}) => {
            ctx.font = font;
            const w = ctx.measureText(text).width;
            ops.push({ kind: 'text', text, x, y, font, size, color, w, dur: Math.max(0.12, w / (pxPerSec * speed)), ...extra });
        };
        const strokeOp = (pts, color, width, pxPerSec = 1400, extra = {}) => {
            let L = 0;
            for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
            ops.push({ kind: 'stroke', pts, color, width, L, dur: Math.max(0.15, L / (pxPerSec * speed)), ...extra });
        };
        const fadeOp = (draw, anchor, dur = 0.7) => ops.push({ kind: 'fade', draw, anchor, dur: dur / speed });

        const wrap = (text, w, font) => { ctx.font = font; return wrapLines(ctx, text, w); };
        // khung chữ nhật vẽ tay (hơi lệch, nét cuối vượt góc)
        const wobbleRect = (rx, ry, rw, rh, sd) => {
            const r = FX.rng(sd), j = () => (r() - 0.5) * S(7);
            return [[rx + j(), ry + j()], [rx + rw + j(), ry + j()], [rx + rw + j(), ry + rh + j()], [rx + j(), ry + rh + j()], [rx + j(), ry - S(5) + j()]];
        };
        const arrowOps = (ax, ay, bx, by, color = RED, w = S(7)) => {
            strokeOp([[ax, ay], [bx, by]], color, w, 1300);
            const a = Math.atan2(by - ay, bx - ax), L = S(26);
            strokeOp([[bx - Math.cos(a - 0.5) * L, by - Math.sin(a - 0.5) * L], [bx, by], [bx - Math.cos(a + 0.5) * L, by - Math.sin(a + 0.5) * L]], color, w, 900);
        };
        const HILITE = '#f0cd62';

        // label nhỏ
        let y = S(132);
        if (step.label) textOp(step.label.toUpperCase(), X0, y, `600 ${S(30)}px ${SANS}`, S(30), SOFT, 1300);
        // tiêu đề: 5 kiểu đầu thẻ (step.head) để mỗi tranh một giọng riêng
        const headStyle = step.head || 'plain';
        if (step.title) {
            const T = step.title.toUpperCase();
            const numeral = headStyle === 'numeral';
            const tx = X0 + (numeral ? S(215) : 0);
            const maxW = 1360 - (numeral ? S(215) : 0) - (headStyle === 'box' ? S(44) : 0);
            let size = S(88);
            ctx.font = `800 ${size}px ${SANS}`;
            while (ctx.measureText(T).width > maxW && size > S(58)) { size -= 3; ctx.font = `800 ${size}px ${SANS}`; }
            const font = `800 ${size}px ${SANS}`;
            const lines = wrapLines(ctx, T, maxW);
            const widths = lines.map(l => { ctx.font = font; return ctx.measureText(l).width; });
            const maxLW = Math.max(...widths);
            const top = y + size * 0.1 + (headStyle === 'box' ? S(16) : 0), pad = headStyle === 'box' ? S(22) : 0;
            let by = y + pad + (numeral ? S(52) : 0);
            lines.forEach((line, li) => {
                by += size * 1.04;
                if (headStyle === 'band') strokeOp([[tx - S(12), by - size * 0.32], [tx + widths[li] + S(12), by - size * 0.32 + 2]], HILITE, size * 0.92, 2400, { alpha: 0.5 });
                textOp(line, tx + pad, by, font, size, INK, 780);
            });
            if (numeral) {
                const ns = S(138), nf = `800 ${ns}px ${SANS}`, nw = (ctx.font = nf, ctx.measureText(numStr(step)).width);
                textOp(numStr(step), X0, by + S(6), nf, ns, RED, 520);
                strokeOp([[X0 - S(4), by + S(26)], [X0 + nw + S(8), by + S(22)]], INK, S(6), 1500);
            }
            if (headStyle === 'underline') {
                strokeOp([[tx - S(4), by + S(16)], [tx + maxLW + S(8), by + S(11)]], RED, S(9), 2200);
                strokeOp([[tx + S(40), by + S(33)], [tx + maxLW * 0.7, by + S(30)]], RED, S(5), 2200);
            }
            if (headStyle === 'box') {
                strokeOp(wobbleRect(tx - S(8), top, maxLW + pad * 2 + S(16), by - top + S(18) + pad * 0.3, seed + 7), RED, S(7), 2600);
                by += pad;
            }
            y = by + (headStyle === 'underline' ? S(26) : 0);
        }
        y += S(44);
        const cursor = { left: y, right: y };

        (step.blocks || []).forEach((b, bi) => {
            const right = b.col === 'right';
            const x = right ? RX : X0;
            const cw = right ? RW : LW;
            let cy = right ? cursor.right : cursor.left;
            const bseed = seed * 31 + bi;

            if (b.type === 'text' || b.type === 'note') {
                const isNote = b.type === 'note';
                const sz = isNote ? S(42) : S({ lg: 52, md: 40, sm: 32 }[b.size || 'md']);
                const wt = isNote ? 400 : (b.size === 'lg' ? 600 : b.size === 'sm' ? 400 : 500);
                const font = isNote ? `${sz}px ${HAND}` : `${wt} ${sz}px ${SANS}`;
                ctx.font = font;
                const text = b.text;
                wrapLines(ctx, text, cw).forEach(line => {
                    cy += sz * 1.3;
                    textOp(line, x + (isNote ? S(10) : 0), cy, font, sz, b.color || (isNote ? RED : INK), isNote ? 900 : 1500,
                        isNote ? { rot: -0.025 } : {});
                });
                cy += S(isNote ? 20 : 14);
            }
            else if (b.type === 'bullets') {
                const sz = S(b.size === 'sm' ? 36 : 44), font = `500 ${sz}px ${SANS}`;
                ctx.font = font;
                (b.items || []).forEach(item => {
                    cy += sz * 1.35;
                    strokeOp([[x + S(4), cy - sz * 0.33], [x + S(26), cy - sz * 0.36]], RED, S(7), 500);
                    wrapLines(ctx, item, cw - S(50)).forEach((line, li) => {
                        if (li) cy += sz * 1.3;
                        textOp(line, x + S(46), cy, font, sz, INK, 1500);
                    });
                });
                cy += S(18);
            }
            else if (b.type === 'flow') {
                let sz = S(150);
                ctx.font = `800 ${sz}px ${SANS}`;
                while (ctx.measureText(String(b.from)).width + ctx.measureText(String(b.to)).width + S(340) > cw && sz > S(40)) {
                    sz -= 2; ctx.font = `800 ${sz}px ${SANS}`;
                }
                const font = `800 ${sz}px ${SANS}`;
                const base = cy + sz * 0.95;
                ctx.font = font;
                const fw = ctx.measureText(String(b.from)).width;
                const tw = ctx.measureText(String(b.to)).width;
                const fx = x + S(40), tx = x + cw - tw - S(70);
                const midY = base - sz * 0.36;
                textOp(String(b.from), fx, base, font, sz, INK, 420);
                strokeOp([[fx + fw + S(60), midY], [tx - S(90), midY + S(4)]], RED, S(7), 1300);
                strokeOp([[tx - S(130), midY - S(28)], [tx - S(90), midY + S(4)], [tx - S(132), midY + S(34)]], RED, S(7), 900);
                textOp(String(b.to), tx, base, font, sz, INK, 420);
                strokeOp(handCircle(tx + tw / 2, midY + S(4), tw / 2 + S(60), sz * 0.6, bseed), RED, S(8), 2000);
                cy = base + S(40);
                if (b.caption) {
                    const cs = S(50), cf = `800 ${cs}px ${SANS}`;
                    ctx.font = cf;
                    wrapLines(ctx, b.caption.toUpperCase(), cw).forEach(line => { cy += cs * 1.2; textOp(line, x, cy, cf, cs, INK, 1100); });
                }
                if (b.sub) {
                    const ss = S(38), sf = `500 ${ss}px ${SANS}`;
                    ctx.font = sf;
                    wrapLines(ctx, b.sub, cw).forEach(line => { cy += ss * 1.3; textOp(line, x, cy, sf, ss, INK, 1500); });
                }
                cy += S(20);
            }
            else if (b.type === 'image') {
                const iw = cw, ih = Math.min(S(b.h || cw * 0.62), H - cy - S(110));
                const ix = x, iy = cy + S(20);
                const tilt = (FX.rng(bseed)() - 0.5) * 0.05;
                fadeOp((c, p, redraw) => {
                    const e = FX.easeOutCubic(p);
                    c.save();
                    c.globalAlpha = e;
                    c.translate(ix + iw / 2, iy + ih / 2);
                    c.rotate(tilt);
                    const s = 1.06 - 0.06 * e;
                    c.scale(s, s);
                    c.shadowColor = 'rgba(40,20,5,0.45)'; c.shadowBlur = 18; c.shadowOffsetY = 8;
                    c.fillStyle = '#efe6d0'; c.fillRect(-iw / 2 - 12, -ih / 2 - 12, iw + 24, ih + 24);
                    c.shadowColor = 'transparent';
                    const img = loadImage(b.src, redraw);
                    if (img) {
                        const r = (b.fit === 'contain' ? Math.min : Math.max)(iw / img.width, ih / img.height);
                        c.save(); c.beginPath(); c.rect(-iw / 2, -ih / 2, iw, ih); c.clip();
                        c.filter = b.keepColor ? 'none' : 'sepia(0.55) contrast(1.05)';
                        c.drawImage(img, -img.width * r / 2, -img.height * r / 2, img.width * r, img.height * r);
                        c.restore();
                    } else {
                        c.fillStyle = '#d4c8a8'; c.fillRect(-iw / 2, -ih / 2, iw, ih);
                        c.fillStyle = SOFT; c.font = `500 26px ${SANS}`; c.textAlign = 'center';
                        c.fillText(imageCache[b.src]?.failed ? 'Không tải được hình minh họa' : 'Đang tải hình minh họa…', 0, 0);
                    }
                    // băng dính 2 góc
                    c.fillStyle = 'rgba(235,225,190,0.75)';
                    [[-iw / 2, -ih / 2, -0.6], [iw / 2, -ih / 2, 0.6]].forEach(([tx, ty, a]) => {
                        c.save(); c.translate(tx, ty); c.rotate(a); c.fillRect(-55, -16, 110, 32); c.restore();
                    });
                    c.restore();
                }, { x: ix + iw * 0.8, y: iy + ih * 0.8 }, 0.8);
                cy = iy + ih + S(14);
                if (b.caption) {
                    const cs = S(28), cf = `italic 500 ${cs}px ${SANS}`;
                    ctx.font = cf;
                    wrapLines(ctx, b.caption, cw).forEach(line => { cy += cs * 1.3; textOp(line, ix, cy, cf, cs, SOFT, 1300); });
                }
                cy += S(16);
            }
            else if (b.type === 'timeline') {
                const items = b.items || [];
                const ly = cy + S(80);
                strokeOp([[x, ly], [x + cw, ly + S(3)]], INK, S(4), 2600);
                const seg = cw / Math.max(1, items.length);
                let maxBottom = ly;
                items.forEach((it, i) => {
                    const px = x + seg * i + S(18);
                    strokeOp(handCircle(px + S(10), ly, S(12), S(12), bseed + i), RED, S(6), 900);
                    textOp(String(it.date), px - S(4), ly - S(30), `800 ${S(36)}px ${SANS}`, S(36), RED, 900);
                    ctx.font = `500 ${S(28)}px ${SANS}`;
                    let ty = ly + S(30);
                    wrapLines(ctx, it.text, seg - S(30)).slice(0, 4).forEach(line => {
                        ty += S(36);
                        textOp(line, px - S(4), ty, `500 ${S(28)}px ${SANS}`, S(28), INK, 1500);
                    });
                    maxBottom = Math.max(maxBottom, ty);
                });
                cy = maxBottom + S(30);
            }
            else if (b.type === 'stat') {
                const sz = S(150), font = `800 ${sz}px ${SANS}`;
                ctx.font = font;
                const vw = ctx.measureText(String(b.value)).width;
                const base = cy + sz * 0.95;
                textOp(String(b.value), x, base, font, sz, INK, 520);
                strokeOp([[x - S(6), base + S(22)], [x + vw * 0.55, base + S(16)], [x + vw + S(10), base + S(24)]], RED, S(9), 1500);
                const ts = S(40), tf = `600 ${ts}px ${SANS}`;
                ctx.font = tf;
                let ty = base + S(24);
                wrapLines(ctx, b.text || '', cw).forEach(line => { ty += ts * 1.3; textOp(line, x, ty, tf, ts, INK, 1400); });
                cy = ty + S(24);
            }
            else if (b.type === 'quote') {
                textOp('“', x - S(10), cy + S(110), `800 ${S(150)}px Georgia, serif`, S(150), RED, 600);
                const qs = S(42), qf = `italic 500 ${qs}px ${SANS}`;
                ctx.font = qf;
                let ty = cy + S(20);
                wrapLines(ctx, b.text, cw - S(90)).forEach(line => { ty += qs * 1.35; textOp(line, x + S(90), ty, qf, qs, INK, 1300); });
                if (b.by) { ty += S(52); textOp('— ' + b.by, x + S(90), ty, `600 ${S(30)}px ${SANS}`, S(30), SOFT, 1200); }
                cy = ty + S(24);
            }
            else if (b.type === 'chart') {
                const bars = b.bars || [];
                const ch = S(b.h || 300);
                const base = cy + ch + S(10);
                strokeOp([[x, cy + S(10)], [x + S(2), base], [x + cw, base + S(2)]], INK, S(4), 2600);
                const max = Math.max(...bars.map(r => r.value), 1);
                const bw = (cw - S(40)) / Math.max(1, bars.length);
                bars.forEach((r, i) => {
                    const bx = x + S(40) + bw * i + bw * 0.5;
                    const top = base - (r.value / max) * (ch - S(40));
                    const hw = Math.min(bw * 0.275, (base - top) / 2 - 1);
                    strokeOp([[bx, base - hw - S(3)], [bx + S(2), top + hw]], r.color || RED, bw * 0.55, 900, { alpha: 0.82 });
                    textOp(String(r.value), bx - bw * 0.25, top - S(16), `800 ${S(32)}px ${SANS}`, S(32), INK, 900);
                    textOp(String(r.label), bx - bw * 0.35, base + S(42), `500 ${S(26)}px ${SANS}`, S(26), INK, 1300);
                });
                cy = base + S(70);
            }
            else if (b.type === 'thesis') {
                // Ý CHÍNH: câu khẳng định, vạch đỏ bên trái + bút dạ quang
                const sz = S(b.size || 40), font = `700 ${sz}px ${SANS}`, pad = S(34), lh = sz * 1.42;
                const lines = wrap(b.text, cw - pad - S(8), font);
                const top = cy + S(8);
                strokeOp([[x + S(8), top], [x + S(10), top + lines.length * lh + S(2)]], RED, S(9), 1800);
                lines.forEach((line, li) => {
                    const base = top + lh * (li + 1) - S(8);
                    ctx.font = font;
                    const w = ctx.measureText(line).width;
                    strokeOp([[x + pad - S(6), base - sz * 0.32], [x + pad + w + S(6), base - sz * 0.32 + 2]], HILITE, sz * 0.98, 2400, { alpha: 0.5 });
                    textOp(line, x + pad, base, font, sz, INK, 1500);
                });
                cy = top + lines.length * lh + S(18);
            }
            else if (b.type === 'chain') {
                // các hộp nối nhau bằng mũi tên: nguyên nhân → hệ quả
                const items = (b.items || []).map(it => typeof it === 'string' ? { text: it } : it);
                const n = items.length, gap = S(60), bw = (cw - gap * (n - 1)) / n, pad = S(18);
                const hs = S(31), ts = S(b.ts || 29), hf = `800 ${hs}px ${SANS}`, tf = `500 ${ts}px ${SANS}`;
                const wr = items.map(it => ({ h: it.head ? wrap(it.head, bw - pad * 2, hf) : [], t: wrap(it.text || '', bw - pad * 2, tf) }));
                const bh = pad * 2 + Math.max(...wr.map(w => w.h.length * hs * 1.3 + w.t.length * ts * 1.3)) + S(8);
                const top = cy + S(12);
                items.forEach((it, i) => {
                    const bx = x + i * (bw + gap);
                    strokeOp(wobbleRect(bx, top, bw, bh, bseed + i), INK, S(4), 2600);
                    let ty = top + pad;
                    wr[i].h.forEach(l => { ty += hs * 1.3; textOp(l, bx + pad, ty, hf, hs, RED, 1400); });
                    wr[i].t.forEach(l => { ty += ts * 1.3; textOp(l, bx + pad, ty, tf, ts, INK, 1800); });
                    if (i < n - 1) arrowOps(bx + bw + S(8), top + bh / 2, bx + bw + gap - S(8), top + bh / 2 + S(3));
                });
                cy = top + bh + S(22);
            }
            else if (b.type === 'grid') {
                // lưới ô đánh số (2 hoặc 3 cột)
                const cols = b.cols || 2, items = b.items || [], gap = S(28), cwid = (cw - gap * (cols - 1)) / cols, pad = S(20);
                const hs = S(b.hs || 33), ts = S(b.ts || 29), hf = `800 ${hs}px ${SANS}`, tf = `500 ${ts}px ${SANS}`;
                const numW = (cols < 3 && b.numbered !== false) ? S(60) : 0;
                const cells = items.map(it => ({ h: wrap(it.head || '', cwid - pad * 2 - numW, hf), t: wrap(it.text || '', cwid - pad * 2, tf) }));
                let top = cy + S(12);
                for (let r = 0; r * cols < items.length; r++) {
                    const row = cells.slice(r * cols, r * cols + cols);
                    const headH = (c) => Math.max(c.h.length * hs * 1.25, numW ? S(54) : 0);
                    const rh = pad * 2 + Math.max(...row.map(c => headH(c) + c.t.length * ts * 1.3)) + S(8);
                    row.forEach((c, k) => {
                        const idx = r * cols + k, it = items[idx], bx = x + k * (cwid + gap);
                        strokeOp(wobbleRect(bx, top, cwid, rh, bseed + idx), INK, S(4), 2600);
                        let ty = top + pad;
                        if (numW) {
                            strokeOp(handCircle(bx + pad + S(22), ty + S(27), S(24), S(24), bseed + idx), RED, S(5), 900);
                            textOp(String(it.n || idx + 1), bx + pad + S(12), ty + S(39), `800 ${S(32)}px ${SANS}`, S(32), RED, 800);
                        }
                        const hh = headH(c), hy0 = ty + (hh - c.h.length * hs * 1.25) / 2;
                        c.h.forEach((l, li) => textOp(l, bx + pad + numW, hy0 + hs * 1.1 + li * hs * 1.25, hf, hs, INK, 1100));
                        ty += hh;
                        c.t.forEach(l => { ty += ts * 1.3; textOp(l, bx + pad, ty, tf, ts, INK, 1800); });
                    });
                    top += rh + gap * 0.6;
                }
                cy = top - gap * 0.6 + S(18);
            }
            else if (b.type === 'versus') {
                // hai cột đối chiếu theo hàng: Trước/Sau, Cương lĩnh/Luận cương...
                const rows = b.rows || [], mid = S(b.arrow ? 90 : 70), colW = (cw - mid) / 2, pad = S(14);
                const hs = S(34), ts = S(b.ts || 29), hf = `800 ${hs}px ${SANS}`, tf = `500 ${ts}px ${SANS}`;
                const lx = x, rx = x + colW + mid;
                let top = cy + S(10);
                const hl = wrap(b.left || '', colW - pad * 2, hf), hr = wrap(b.right || '', colW - pad * 2, hf);
                const hh = Math.max(hl.length, hr.length) * hs * 1.25 + pad * 2;
                strokeOp(wobbleRect(lx, top, colW, hh, bseed), INK, S(5), 2600);
                strokeOp(wobbleRect(rx, top, colW, hh, bseed + 1), RED, S(5), 2600);
                hl.forEach((l, i) => textOp(l, lx + pad, top + pad + hs * 1.1 + i * hs * 1.25, hf, hs, INK, 1200));
                hr.forEach((l, i) => textOp(l, rx + pad, top + pad + hs * 1.1 + i * hs * 1.25, hf, hs, RED, 1200));
                if (b.arrow) arrowOps(lx + colW + S(14), top + hh / 2, rx - S(14), top + hh / 2 + S(2));
                else { ctx.font = `800 ${S(30)}px ${SANS}`; textOp('VS', lx + colW + (mid - ctx.measureText('VS').width) / 2, top + hh / 2 + S(11), `800 ${S(30)}px ${SANS}`, S(30), SOFT, 600); }
                top += hh + S(8);
                rows.forEach((row, ri) => {
                    const ll = wrap(row.l || '', colW - pad * 2 - S(10), tf), rl = wrap(row.r || '', colW - pad * 2 - S(10), tf);
                    const rh = Math.max(ll.length, rl.length) * ts * 1.3 + S(26);
                    let ty = top + S(8);
                    ll.forEach(l => { ty += ts * 1.3; textOp(l, lx + pad + S(10), ty, tf, ts, INK, 1800); });
                    ty = top + S(8);
                    rl.forEach(l => { ty += ts * 1.3; textOp(l, rx + pad + S(10), ty, tf, ts, INK, 1800); });
                    strokeOp([[lx, top + rh - S(4)], [rx + colW, top + rh - S(2)]], '#988367', S(2.5), 3000, { alpha: 0.6 });
                    top += rh;
                });
                cy = top + S(12);
            }
            else if (b.type === 'ladder') {
                // bậc thang: các mốc tăng dần (hội nghị, bước chuẩn bị)
                const items = b.items || [], n = items.length, gap = S(18), colW = (cw - gap * (n - 1)) / n, pad = S(16), rise = S(b.rise || 44);
                const tf = `500 ${S(31)}px ${SANS}`, ts = S(31), tagf = `800 ${S(34)}px ${SANS}`, dtf = `700 ${S(26)}px ${SANS}`;
                const wr = items.map(it => wrap(it.text || '', colW - pad * 2, tf));
                const base = cy + S(14);
                const need = items.map((it, i) => (n - 1 - i) * rise + pad + S(44) + (it.date ? S(34) : 0) + wr[i].length * ts * 1.3 + pad);
                const bottom = base + Math.max(...need);
                items.forEach((it, i) => {
                    const bx = x + i * (colW + gap), top = base + (n - 1 - i) * rise;
                    strokeOp(wobbleRect(bx, top, colW, bottom - top, bseed + i), i === n - 1 ? RED : INK, S(i === n - 1 ? 6 : 4), 2600);
                    let ty = top + pad;
                    ty += S(38); textOp(String(it.tag || ''), bx + pad, ty, tagf, S(34), RED, 900);
                    if (it.date) { ty += S(34); textOp(String(it.date), bx + pad, ty, dtf, S(26), SOFT, 1200); }
                    wr[i].forEach(l => { ty += ts * 1.3; textOp(l, bx + pad, ty, tf, ts, INK, 1800); });
                });
                cy = bottom + S(20);
            }
            else if (b.type === 'hub') {
                // một trung tâm, nhiều nan hoa
                const items = (b.items || []).map(it => typeof it === 'string' ? { text: it } : it);
                const R = S(b.r || 128), lx0 = x + R + S(20), tx = x + R * 2 + S(110), tw = cw - (tx - x);
                const hs = S(31), ts = S(28), hf = `800 ${hs}px ${SANS}`, tf = `500 ${ts}px ${SANS}`;
                const wr = items.map(it => ({ h: it.head ? wrap(it.head, tw, hf) : [], t: wrap(it.text || '', tw, tf) }));
                const hts = wr.map(w => w.h.length * hs * 1.25 + w.t.length * ts * 1.28 + S(16));
                const total = hts.reduce((a, v) => a + v, 0), blockH = Math.max(total, R * 2 + S(30));
                const top = cy + S(10), cyy = top + blockH / 2;
                strokeOp(handCircle(lx0, cyy, R, R, bseed), RED, S(7), 1800);
                strokeOp(handCircle(lx0, cyy, R - S(14), R - S(14), bseed + 3), RED, S(3), 1800, { alpha: 0.55 });
                const cl = wrap(b.center || '', R * 1.5, `800 ${S(34)}px ${SANS}`);
                cl.forEach((l, i) => {
                    ctx.font = `800 ${S(34)}px ${SANS}`;
                    textOp(l, lx0 - ctx.measureText(l).width / 2, cyy + (i - (cl.length - 1) / 2) * S(42) + S(12), `800 ${S(34)}px ${SANS}`, S(34), INK, 900);
                });
                let ty = top + (blockH - total) / 2;
                items.forEach((it, i) => {
                    const midY = ty + hts[i] / 2 - S(4);
                    strokeOp([[lx0 + R * 0.96, cyy + (midY - cyy) * 0.25], [tx - S(46), midY]], RED, S(5), 1500);
                    let yy = ty;
                    wr[i].h.forEach(l => { yy += hs * 1.25; textOp(l, tx, yy, hf, hs, RED, 1300); });
                    wr[i].t.forEach(l => { yy += ts * 1.28; textOp(l, tx, yy, tf, ts, INK, 1800); });
                    ty += hts[i];
                });
                cy = top + blockH + S(18);
            }
            else if (b.type === 'rail') {
                // đường ray ngang có mốc đánh số: ngày, tiêu đề ngắn, giải thích
                const items = b.items || [], n = items.length, colW = cw / n, pad = S(12);
                const hs = S(30), ts = S(27), hf = `800 ${hs}px ${SANS}`, tf = `500 ${ts}px ${SANS}`;
                const ly = cy + S(86);
                strokeOp([[x, ly], [x + cw - S(26), ly + S(3)]], INK, S(5), 2600);
                arrowOps(x + cw - S(60), ly + S(3), x + cw - S(6), ly + S(3), INK, S(5));
                let maxB = ly;
                items.forEach((it, i) => {
                    const px = x + colW * i;
                    strokeOp(handCircle(px + S(24), ly + S(1), S(22), S(22), bseed + i), RED, S(5), 900);
                    textOp(String(i + 1), px + S(15), ly + S(12), `800 ${S(28)}px ${SANS}`, S(28), RED, 700);
                    textOp(String(it.date || ''), px + S(2), ly - S(34), `800 ${S(31)}px ${SANS}`, S(31), RED, 1100);
                    let ty = ly + S(44);
                    wrap(it.head || '', colW - S(24), hf).forEach(l => { ty += hs * 1.25; textOp(l, px + S(2), ty, hf, hs, INK, 1300); });
                    wrap(it.text || '', colW - S(24), tf).forEach(l => { ty += ts * 1.3; textOp(l, px + S(2), ty, tf, ts, INK, 1800); });
                    maxB = Math.max(maxB, ty);
                });
                cy = maxB + S(26);
            }
            else if (b.type === 'vtimeline') {
                // trục dọc: cột ngày bên trái, diễn biến bên phải
                const items = b.items || [], dw = S(b.dw || 196), ts = S(b.ts || 30), tf = `500 ${ts}px ${SANS}`, df = `800 ${S(29)}px ${SANS}`;
                const wr = items.map(it => wrap(it.text || '', cw - dw - S(44), tf));
                const dr = items.map(it => wrap(String(it.date || ''), dw - S(14), df));
                const rh = items.map((it, i) => Math.max(wr[i].length * ts * 1.3, dr[i].length * S(34)) + S(24));
                const top = cy + S(10), total = rh.reduce((a, v) => a + v, 0), lineX = x + dw + S(10);
                strokeOp([[lineX, top + S(6)], [lineX + S(2), top + total - S(10)]], INK, S(4), 2600);
                let ty = top;
                items.forEach((it, i) => {
                    strokeOp(handCircle(lineX + S(1), ty + S(22), S(11), S(11), bseed + i), RED, S(5), 900);
                    dr[i].forEach((l, li) => textOp(l, x, ty + S(32) + li * S(34), df, S(29), RED, 1200));
                    wr[i].forEach((l, li) => textOp(l, lineX + S(34), ty + S(32) + li * ts * 1.3, tf, ts, INK, 1800));
                    ty += rh[i];
                });
                cy = top + total + S(10);
            }
            else if (b.type === 'checklist') {
                // dấu tick (nội dung) hoặc dấu gạch chéo (hạn chế)
                const sz = S(b.size || 34), font = `500 ${sz}px ${SANS}`, cross = b.mark === 'cross';
                (b.items || []).forEach(item => {
                    const lines = wrap(item, cw - S(62), font);
                    const ty0 = cy + sz * 1.3;
                    const mx = x + S(4), my = ty0 - sz * 0.32;
                    if (cross) {
                        strokeOp([[mx + S(2), my - S(14)], [mx + S(26), my + S(10)]], RED, S(7), 800);
                        strokeOp([[mx + S(26), my - S(14)], [mx + S(2), my + S(10)]], RED, S(7), 800);
                    } else {
                        strokeOp([[mx, my], [mx + S(12), my + S(13)], [mx + S(36), my - S(24)]], RED, S(8), 900);
                    }
                    lines.forEach((l, li) => { cy += sz * 1.3; textOp(l, x + S(54), cy, font, sz, INK, 1800); });
                    cy += S(7);
                });
                cy += S(10);
            }
            else if (b.type === 'stats') {
                // hàng 2–3 con số lớn, mỗi số một chú thích
                const items = b.items || [], n = items.length, colW = cw / n, vs = S(b.vs || 92), ts = S(28), tf = `500 ${ts}px ${SANS}`;
                const base = cy + vs * 1.0 + S(8);
                let maxB = base;
                items.forEach((it, i) => {
                    const px = x + colW * i;
                    let size = vs, f = `800 ${size}px ${SANS}`;
                    ctx.font = f;
                    while (ctx.measureText(String(it.value)).width > colW - S(30) && size > S(46)) { size -= 4; f = `800 ${size}px ${SANS}`; ctx.font = f; }
                    const vw = ctx.measureText(String(it.value)).width;
                    textOp(String(it.value), px, base, f, size, INK, 520);
                    strokeOp([[px - S(4), base + S(16)], [px + vw * 0.6, base + S(11)], [px + vw + S(6), base + S(18)]], RED, S(7), 1500);
                    let ty = base + S(18);
                    wrap(it.text || '', colW - S(30), tf).forEach(l => { ty += ts * 1.3; textOp(l, px, ty, tf, ts, INK, 1800); });
                    maxB = Math.max(maxB, ty);
                });
                cy = maxB + S(24);
            }
            else if (b.type === 'table') {
                // sổ kẻ tay: hàng tiêu đề + các hàng nội dung
                const cols = b.cols || [], ws = b.widths || cols.map(() => 1 / cols.length), ts = S(b.ts || 29), tf = `500 ${ts}px ${SANS}`, bf = `800 ${ts}px ${SANS}`;
                const colX = []; let acc = 0;
                ws.forEach(w => { colX.push(x + acc * cw); acc += w; });
                const colW = ws.map(w => w * cw - S(24));
                let top = cy + S(8);
                cols.forEach((c, i) => textOp(String(c).toUpperCase(), colX[i] + S(6), top + S(34), `800 ${S(25)}px ${SANS}`, S(25), RED, 1100));
                top += S(46);
                strokeOp([[x, top], [x + cw, top + S(3)]], INK, S(5), 3000);
                (b.rows || []).forEach((row) => {
                    const cells = row.map((c, i) => wrap(String(c), colW[i], i === 0 && b.boldFirst !== false ? bf : tf));
                    const rh = Math.max(...cells.map(c => c.length)) * ts * 1.3 + S(22);
                    cells.forEach((lines, i) => lines.forEach((l, li) =>
                        textOp(l, colX[i] + S(6), top + S(10) + (li + 1) * ts * 1.3, i === 0 && b.boldFirst !== false ? bf : tf, ts, INK, 1800)));
                    top += rh;
                    strokeOp([[x, top], [x + cw, top + S(2)]], '#988367', S(2.5), 3000, { alpha: 0.7 });
                });
                cy = top + S(14);
            }
            if (right) cursor.right = cy; else cursor.left = cy;
        });

        // con dấu đỏ "đóng" lên cuối cùng
        if (step.stamp) {
            const sx = 1300, sy = 900;
            fadeOp((c, p) => {
                const e = FX.easeOutCubic(p);
                c.save();
                c.globalAlpha = Math.min(1, p * 2.2) * 0.8;
                c.globalCompositeOperation = 'multiply';
                c.translate(sx, sy); c.rotate(-0.2);
                const s = 1.7 - 0.7 * e; c.scale(s, s);
                c.strokeStyle = RED; c.lineWidth = 7;
                c.font = `800 ${S(46)}px ${SANS}`;
                const tw = c.measureText(step.stamp.toUpperCase()).width;
                c.strokeRect(-tw / 2 - 26, -42, tw + 52, 84);
                c.fillStyle = RED; c.textAlign = 'center';
                c.fillText(step.stamp.toUpperCase(), 0, 16);
                c.restore();
            }, { x: sx + 150, y: sy + 80 }, 0.45);
        }
        return { ops, bottom: Math.max(cursor.left, cursor.right) };
    }

    // ---------- Vẽ 1 op theo tiến độ p ----------
    function drawOp(c, op, p, redraw) {
        if (op.kind === 'text') {
            c.save();
            c.globalCompositeOperation = 'multiply';
            c.font = op.font; c.fillStyle = op.color; c.textBaseline = 'alphabetic';
            c.translate(op.x, op.y);
            if (op.rot) c.rotate(op.rot);
            if (p < 1) { c.beginPath(); c.rect(-10, -op.size * 1.3, op.w * p + 6, op.size * 1.8); c.clip(); }
            c.globalAlpha = 0.94;
            c.fillText(op.text, 0, 0);
            c.restore();
        } else if (op.kind === 'stroke') {
            const target = op.L * p;
            c.save();
            c.globalCompositeOperation = 'multiply';
            c.strokeStyle = op.color; c.lineWidth = op.width; c.lineCap = 'round'; c.lineJoin = 'round';
            c.globalAlpha = op.alpha ?? 0.9;
            c.beginPath(); c.moveTo(op.pts[0][0], op.pts[0][1]);
            let acc = 0;
            for (let i = 1; i < op.pts.length; i++) {
                const [ax, ay] = op.pts[i - 1], [bx, by] = op.pts[i];
                const seg = Math.hypot(bx - ax, by - ay);
                if (acc + seg >= target) { const k = (target - acc) / (seg || 1); c.lineTo(ax + (bx - ax) * k, ay + (by - ay) * k); break; }
                c.lineTo(bx, by); acc += seg;
            }
            c.stroke();
            c.globalAlpha *= 0.35; c.lineWidth = op.width * 0.45; c.translate(1.5, 1); c.stroke(); // vệt mực không đều
            c.restore();
        } else if (op.kind === 'fade') {
            op.draw(c, p, redraw);
        }
    }

    function tipOf(op, p, time) {
        if (op.kind === 'text') {
            const wob = Math.sin(time * 38) * op.size * 0.18 + Math.sin(time * 13) * op.size * 0.08;
            let x = op.w * p, y = -op.size * 0.32 + wob;
            if (op.rot) { const cs = Math.cos(op.rot), sn = Math.sin(op.rot); [x, y] = [x * cs - y * sn, x * sn + y * cs]; }
            return { x: op.x + x, y: op.y + y, lift: 0 };
        }
        if (op.kind === 'stroke') {
            const target = op.L * p;
            let acc = 0;
            for (let i = 1; i < op.pts.length; i++) {
                const [ax, ay] = op.pts[i - 1], [bx, by] = op.pts[i];
                const seg = Math.hypot(bx - ax, by - ay);
                if (acc + seg >= target) { const k = (target - acc) / (seg || 1); return { x: ax + (bx - ax) * k, y: ay + (by - ay) * k, lift: 0 }; }
                acc += seg;
            }
            const l = op.pts[op.pts.length - 1];
            return { x: l[0], y: l[1], lift: 0 };
        }
        return { x: op.anchor.x, y: op.anchor.y, lift: 1 };
    }
    const startTip = (op) => tipOf(op, 0, 0);
    const endTip = (op) => tipOf(op, 1, 0);

    // ---------- Writer: quản lý timeline của 1 thẻ ----------
    class Writer {
        constructor(canvas, paper, step, seed) {
            this.canvas = canvas; this.ctx = canvas.getContext('2d');
            this.paper = paper; this.step = step; this.seed = seed;
            let res, scale = 1;
            for (let i = 0; i < 16; i++) { res = layout(this.ctx, step, scale, seed); if (res.bottom < H - (step.source ? 125 : 60)) break; if (i < 15) scale *= 0.96; }
            // thẻ thưa thì phóng chữ lên cho dễ đọc từ xa
            if (scale === 1 && res.bottom < H * 0.82) {
                for (const up of [1.08, 1.16, 1.24]) {
                    const r2 = layout(this.ctx, step, up, seed);
                    if (r2.bottom > H * 0.92) break;
                    res = r2; scale = up;
                }
                if (scale === 1) res = layout(this.ctx, step, 1, seed);
            }
            this.layoutScale = scale; this.contentBottom = res.bottom;
            // chèn quãng di chuyển bút giữa các op (nhấc bút lên)
            this.timeline = [];
            let t = 0.35, prevEnd = { x: 900, y: 700 };
            res.ops.forEach(op => {
                const s = startTip(op);
                const travel = Math.min(0.32, Math.max(0.06, Math.hypot(s.x - prevEnd.x, s.y - prevEnd.y) / 2600));
                this.timeline.push({ kind: 'travel', from: prevEnd, to: s, start: t, dur: travel });
                t += travel;
                op.start = t; t += op.dur;
                this.timeline.push(op);
                prevEnd = endTip(op);
            });
            this.timeline.push({ kind: 'travel', from: prevEnd, to: { x: 1700, y: 1250 }, start: t, dur: 0.6, exit: true });
            this.total = t + 0.6;
            this.contentEnd = t;
            this.t = 0;
            this.dirty = true;
            this.redraw = () => { this.dirty = true; };
        }
        get done() { return this.t >= this.total; }
        finish() { this.t = this.total; this.dirty = true; }
        render() {
            const c = this.ctx;
            c.drawImage(this.paper, 0, 0, W, H);
            for (const op of this.timeline) {
                if (op.kind === 'travel') continue;
                if (op.start > this.t) break;
                drawOp(c, op, FX.clamp01((this.t - op.start) / op.dur), this.redraw);
            }
            if (this.step.source) {
                c.save(); c.strokeStyle = '#988367'; c.lineWidth = 1;
                c.beginPath(); c.moveTo(120, H - 98); c.lineTo(W - 120, H - 98); c.stroke();
                c.font = `500 25px ${SANS}`; c.fillStyle = SOFT; c.textAlign = 'left';
                wrapLines(c, 'Nguồn: ' + this.step.source, W - 240).slice(0, 2).forEach((line, i) => c.fillText(line, 120, H - 60 + i * 29));
                c.restore();
            }
            this.dirty = false;
        }
        // trả về {changed, tip:{x,y,lift}, visible}
        update(dt) {
            const was = this.t;
            this.t = Math.min(this.total, this.t + dt);
            const changed = this.dirty || (this.t !== was && was < this.contentEnd + 0.01);
            if (changed) this.render();
            let tip = { x: 1700, y: 1250, lift: 1 }, visible = this.t < this.total, writing = false;
            for (const op of this.timeline) {
                const end = op.start + op.dur;
                if (this.t >= op.start && this.t <= end) {
                    const p = FX.clamp01((this.t - op.start) / op.dur);
                    if (op.kind === 'travel') {
                        const e = FX.easeInOutSine(p);
                        tip = { x: op.from.x + (op.to.x - op.from.x) * e, y: op.from.y + (op.to.y - op.from.y) * e, lift: op.exit ? p : Math.sin(Math.PI * p) * 0.6 };
                    } else {
                        tip = tipOf(op, p, this.t);
                        writing = (op.kind === 'text' || op.kind === 'stroke') && this.t > was && p < 1;
                    }
                    break;
                }
            }
            if (this.t < 0.35) tip = { x: 1700 - (1700 - 900) * FX.easeOutCubic(this.t / 0.35), y: 1250 - 550 * FX.easeOutCubic(this.t / 0.35), lift: 1 - this.t / 0.35 * 0.6 };
            return { changed, tip, visible, writing: writing && visible && this.t >= .35 };
        }
    }

    // Thẻ chưa viết: giấy trắng + số thứ tự bút chì
    function drawBlank(canvas, paper, step, index) {
        const c = canvas.getContext('2d');
        c.drawImage(paper, 0, 0, W, H);
        c.save();
        c.globalCompositeOperation = 'multiply';
        c.fillStyle = 'rgba(60,50,40,0.35)';
        c.font = `600 34px ${SANS}`;
        c.fillText(`${String(index + 1).padStart(2, '0')} / ${step.label ? step.label.replace(/^\s*\d+\s*\/\s*/, '').toUpperCase() : ''}`, 120, 132);
        c.restore();
    }

    // Thẻ trang trí nhỏ xung quanh (ghi chú, ô vuông) giống ảnh mẫu
    function drawMiniCard(canvas, paper, info, seed) {
        const c = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        const rand = FX.rng(seed);
        c.drawImage(paper, 0, 0, w, h);
        c.save();
        c.globalCompositeOperation = 'multiply';
        c.fillStyle = 'rgba(40,30,20,0.8)';
        c.font = `700 ${w * 0.034}px ${SANS}`;
        c.fillText(String(info.label || 'GHI CHÚ').toUpperCase(), w * 0.1, h * 0.17);
        c.font = `500 ${w * 0.024}px ${SANS}`;
        c.fillStyle = 'rgba(40,30,20,0.65)';
        (info.lines || []).slice(0, 3).forEach((line, i) => {
            c.fillText('• ' + line, w * 0.1, h * (0.3 + i * 0.1), w * 0.8);
        });
        const kind = info.kind || rand.pick(['boxes', 'photo', 'lines']);
        if (kind === 'boxes') {
            c.strokeStyle = 'rgba(40,30,20,0.5)'; c.lineWidth = 2;
            for (let i = 0; i < 3; i++) c.strokeRect(w * (0.1 + i * 0.28), h * 0.66, w * 0.22, h * 0.15);
        } else if (kind === 'photo') {
            c.globalCompositeOperation = 'source-over';
            BoardPaper.sepiaPhoto(c, w * 0.55, h * 0.5, w * 0.34, h * 0.36, seed);
        } else {
            c.strokeStyle = 'rgba(150,30,25,0.6)'; c.lineWidth = 4; c.lineCap = 'round';
            c.beginPath(); c.moveTo(w * 0.1, h * 0.75); c.quadraticCurveTo(w * 0.4, h * 0.6, w * 0.75, h * 0.72); c.stroke();
            c.beginPath(); c.ellipse(w * 0.78, h * 0.72, w * 0.08, h * 0.08, 0, 0, Math.PI * 2); c.stroke();
        }
        c.restore();
    }

    return { W, H, Writer, drawBlank, drawMiniCard };
})();

