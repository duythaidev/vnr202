
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

        // label nhỏ
        let y = S(132);
        if (step.label) textOp(step.label.toUpperCase(), X0, y, `600 ${S(30)}px ${SANS}`, S(30), SOFT, 1300);
        // tiêu đề lớn
        if (step.title) {
            let size = S(116);
            ctx.font = `800 ${size}px ${SANS}`;
            while (ctx.measureText(step.title.toUpperCase()).width > 1360 && size > S(80)) { size -= 4; ctx.font = `800 ${size}px ${SANS}`; }
            const lines = wrapLines(ctx, step.title.toUpperCase(), 1360);
            lines.forEach(line => { y += size * 1.02; textOp(line, X0, y, `800 ${size}px ${SANS}`, size, INK, 750); });
        }
        y += S(56);
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
                const sz = S(44), font = `500 ${sz}px ${SANS}`;
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
                    strokeOp([[bx, base - S(4)], [bx + S(2), top]], r.color || RED, bw * 0.55, 900, { alpha: 0.82 });
                    textOp(String(r.value), bx - bw * 0.25, top - S(16), `800 ${S(32)}px ${SANS}`, S(32), INK, 900);
                    textOp(String(r.label), bx - bw * 0.35, base + S(42), `500 ${S(26)}px ${SANS}`, S(26), INK, 1300);
                });
                cy = base + S(70);
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
            for (let i = 0; i < 9; i++) { res = layout(this.ctx, step, scale, seed); if (res.bottom < H - (step.source ? 125 : 60)) break; if (i < 8) scale *= 0.9; }
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
        c.fillText(`${String(index + 1).padStart(2, '0')} / ${step.label ? step.label.split('/').pop().trim().toUpperCase() : ''}`, 120, 132);
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

