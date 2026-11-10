// Popup hướng dẫn nhanh sau khi vào phòng 1 giây: hai demo con trỏ (bấm khung tranh, bấm nút Thuyết trình).
// Ảnh nền là ảnh chụp màn hình thật: assets/images/guide/gallery.webp (tỉ lệ 1440x860). Chọn "Không hiện lại" lưu localStorage `vnr202-guide-off`.
const MuseumGuide = (() => {
    const KEY = 'vnr202-guide-off';
    const CURSOR = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 2l7.5 19 2.6-7.9L21 10.5z" fill="#fff" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/></svg>';
    let root = null, timer = 0, prevFocus = null;
    const store = {
        get() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } },
        set() { try { localStorage.setItem(KEY, '1'); } catch (e) { } }
    };

    function build() {
        const shot = 'assets/images/guide/gallery.webp';
        root = document.createElement('div');
        root.className = 'guide'; root.hidden = true;
        root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'Hướng dẫn nhanh');
        root.innerHTML = `
        <div class="guide-box">
            <h2>Hướng dẫn nhanh</h2>
            <div class="guide-grid">
                <figure class="guide-card" style="margin:0">
                    <div class="guide-stage d1" aria-hidden="true">
                        <div class="guide-view"><img src="${shot}" alt=""><div class="guide-hl g-frame"></div></div>
                        <div class="guide-ripple"></div><div class="guide-cursor">${CURSOR}</div>
                    </div>
                    <figcaption><b>Xem tranh</b>Click vào khung tranh để bay tới và xem chi tiết. Đi lại bằng W A S D hoặc kéo chuột.</figcaption>
                </figure>
                <figure class="guide-card" style="margin:0">
                    <div class="guide-stage d2" aria-hidden="true">
                        <div class="guide-view"><img src="${shot}" alt=""></div>
                        <div class="guide-hl g-btn"></div><div class="guide-bar t"></div><div class="guide-bar b"></div>
                        <div class="guide-sub">Phụ đề thuyết trình hiện ở đây</div>
                        <div class="guide-ripple"></div><div class="guide-cursor">${CURSOR}</div>
                    </div>
                    <figcaption><b>Thuyết trình</b>Bấm nút Thuyết trình để xem và nghe tự động từ đầu đến cuối.</figcaption>
                </figure>
            </div>
            <div class="guide-foot"><button type="button" class="guide-skip">Không hiện lại</button><button type="button" class="guide-ok">Đã hiểu</button></div>
        </div>`;
        document.body.appendChild(root);
        root.querySelector('.guide-ok').addEventListener('click', hide);
        root.querySelector('.guide-skip').addEventListener('click', () => { store.set(); hide(); });
        root.addEventListener('mousedown', (e) => { if (e.target === root) hide(); });
        document.addEventListener('keydown', (e) => { if (root && !root.hidden && e.key === 'Escape') { e.stopPropagation(); hide(); } }, true);
    }
    function show(delay = 1000) {
        const q = new URLSearchParams(location.search);
        if (store.get() || q.has('present') || q.has('board')) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (!root) build();
            prevFocus = document.activeElement;
            root.hidden = false;
            requestAnimationFrame(() => root.classList.add('show'));
            root.querySelector('.guide-ok').focus({ preventScroll: true });
        }, delay);
    }
    function hide() {
        clearTimeout(timer);
        if (!root || root.hidden) return;
        root.classList.remove('show');
        setTimeout(() => { root.hidden = true; if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true }); }, 350);
    }
    return { show, hide };
})();
