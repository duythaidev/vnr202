
// =============================================================================
// 📌 NỘI DUNG BẢNG GHIM 3D (hiện ra khi click vào từng bức tranh)
//
// Cách điền nội dung thật:
//   STORY_DATA[<số thứ tự tranh 0..14>] = { seed, steps: [ step, step, ... ] }
//   Mỗi step = 1 thẻ giấy ghim trên bảng. Camera bay giữa các thẻ theo sợi dây đỏ.
//   Tranh nào CHƯA khai báo ở đây sẽ tự sinh 3 step mock từ museum-data.js
//   (hotspots + bullets) để bạn xem trước.
//
// Cấu trúc một step:
//   {
//     label: "02 / Quan sát ở cấp phần cứng",   // dòng nhỏ phía trên (bút viết trước)
//     title: "Kích hoạt",                        // tiêu đề lớn (tự IN HOA)
//     stamp: "Mật",                              // (tuỳ chọn) con dấu đỏ đóng góc phải
//     blocks: [ ...các khối nội dung, viết lần lượt theo thứ tự... ]
//   }
//
// Các loại block (thêm col: "right" để đặt sang cột phải, mặc định cột trái):
//   { type: "text",     text: "...", size: "lg" | "md" | "sm" }
//   { type: "note",     text: "Ghi chú tay màu đỏ" }
//   { type: "bullets",  items: ["...", "..."] }
//   { type: "flow",     from: "0", to: "1", caption: "Dòng chữ lớn", sub: "dòng phụ" }   // như ảnh mẫu 0 → (1)
//   { type: "image",    src: "link-anh.jpg" | "", caption: "...", h: 360, keepColor: false } // src rỗng = ảnh sepia giả
//   { type: "timeline", items: [{ date: "1930", text: "..." }, ...] }   // tối đa ~4 mốc / cột trái
//   { type: "stat",     value: "35.009", text: "hội viên quần chúng" }
//   { type: "quote",    text: "...", by: "Tác giả" }
//   { type: "chart",    bars: [{ label: "A", value: 10 }, ...], h: 300 }
//
// Mẹo: chữ quá dài sẽ tự thu nhỏ cả thẻ cho vừa. Nên ≤ 6–8 dòng mỗi thẻ.
// =============================================================================
const STORY_CONFIG = {
    writeSpeed: 1.0,       // tốc độ bút viết (2 = nhanh gấp đôi)
    flightSpeed: 1.0,      // tốc độ camera bay giữa các thẻ
    motionBlur: 1.0,       // độ nhoè chuyển động (0 = tắt)
    decorCards: 9,         // số thẻ trang trí xung quanh
    autoAdvance: false     // true = viết xong tự bay sang thẻ kế
};

const STORY_DATA = {
    // ---------------- TRANH 01 (ví dụ đầy đủ các loại block) ----------------
    0: {
        seed: 7,
        steps: [
            {
                label: "01 / Bối cảnh 1884 – 1930",
                title: "Hai cuộc khai thác",
                blocks: [
                    { type: "text", text: "Sau Hiệp ước Patơnốt (6/6/1884), Pháp tiến hành hai cuộc khai thác thuộc địa quy mô lớn." },
                    { type: "image", col: "right", src: "", caption: "Ảnh tư liệu (mock) · thay link ảnh thật", h: 330 },
                    { type: "timeline", items: [
                        { date: "1884", text: "Hiệp ước Patơnốt" },
                        { date: "1897", text: "Khai thác lần 1 (1897–1914)" },
                        { date: "1919", text: "Khai thác lần 2 (1919–1929)" }
                    ] }
                ]
            },
            {
                label: "02 / Các ngả đường cũ",
                title: "Đều thất bại",
                blocks: [
                    { type: "bullets", items: [
                        "Phong kiến: Cần Vương, Yên Thế",
                        "Dân chủ tư sản: Phan Bội Châu, Phan Châu Trinh",
                        "Khởi nghĩa Yên Bái (2/1930)"
                    ] },
                    { type: "note", text: "→ Thiếu một đường lối đúng đắn!" },
                    { type: "image", col: "right", src: "", caption: "Minh hoạ (mock)", h: 380 }
                ]
            },
            {
                label: "03 / Kết luận",
                title: "Khủng hoảng đường lối",
                stamp: "Bế tắc",
                blocks: [
                    { type: "flow", from: "1884", to: "1930", caption: "Cần một con đường mới", sub: "cho cách mạng giải phóng dân tộc Việt Nam" }
                ]
            }
        ]
    },

    // ---------------- TRANH 02 ----------------
    1: {
        seed: 21,
        steps: [
            {
                label: "01 / Tìm đường cứu nước",
                title: "Luận cương Lênin",
                blocks: [
                    { type: "quote", text: "Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!", by: "Nguyễn Ái Quốc, 1920" },
                    { type: "image", col: "right", src: "", caption: "Ảnh tư liệu (mock)", h: 380 }
                ]
            },
            {
                label: "02 / Chuẩn bị tổ chức",
                title: "Thanh Niên 1925",
                blocks: [
                    { type: "timeline", items: [
                        { date: "7/1920", text: "Đọc Luận cương của Lênin" },
                        { date: "12/1920", text: "Đại hội Tours" },
                        { date: "6/1925", text: "Hội VN Cách mạng Thanh niên" },
                        { date: "1927", text: "Đường Kách Mệnh" }
                    ] },
                    { type: "text", text: "Báo Thanh Niên ra số đầu ngày 21/6/1925 tại Quảng Châu." }
                ]
            },
            {
                label: "03 / Vô sản hoá",
                title: "Lấy công – nông làm gốc",
                stamp: "1928",
                blocks: [
                    { type: "bullets", items: ["Đưa cán bộ vào nhà máy, hầm mỏ, đồn điền", "Cùng lao động, giác ngộ công nhân"] },
                    { type: "note", text: "Phong trào bắt đầu từ 29/9/1928" }
                ]
            }
        ]
    },

    // ---------------- TRANH 10 (ví dụ block stat + chart) ----------------
    9: {
        seed: 99,
        steps: [
            {
                label: "01 / Mít tinh 1/5/1938",
                title: "Khu Đấu Xảo",
                blocks: [
                    { type: "text", text: "Cuộc mít tinh khổng lồ kỷ niệm Quốc tế Lao động tại Khu Đấu Xảo Hà Nội." },
                    { type: "image", src: "", caption: "Ảnh tư liệu (mock)", h: 360 }
                ]
            },
            {
                label: "02 / Đội quân chính trị (4/1938)",
                title: "Lực lượng",
                blocks: [
                    { type: "stat", value: "35.009", text: "hội viên quần chúng" },
                    { type: "chart", col: "right", h: 320, bars: [
                        { label: "Bí mật", value: 1597 },
                        { label: "Công khai", value: 200 }
                    ] },
                    { type: "note", text: "Số liệu đảng viên (mock chart)" }
                ]
            },
            {
                label: "03 / Lý luận",
                title: "Tự chỉ trích",
                stamp: "1939",
                blocks: [
                    { type: "text", text: "Tác phẩm của Tổng Bí thư Nguyễn Văn Cừ về tự phê bình và phê bình trong Đảng.", size: "md" },
                    { type: "flow", from: "Sai", to: "Sửa", caption: "Tự phê bình để trưởng thành" }
                ]
            }
        ]
    }
};

// -----------------------------------------------------------------------------
// Sinh nội dung MOCK cho tranh chưa có dữ liệu (lấy từ hotspots trong museum-data.js)
// -----------------------------------------------------------------------------
function buildMockStory(pieceIndex) {
    const p = MUSEUM_PIECES[pieceIndex];
    const strip = (s) => String(s).replace(/<[^>]+>/g, '');
    const hs = p.hotspots || [];
    const short = (s, n = 26) => { const t = strip(s).replace(/\(.*?\)/g, '').trim(); return t.length > n ? t.slice(0, n).trim() + '…' : t; };
    const years = (strip(p.date).match(/\d{4}/g) || ['?', '?']);
    return {
        seed: 100 + pieceIndex * 17,
        steps: [
            {
                label: `01 / ${p.code} · ${p.date}`,
                title: short(hs[0]?.name || p.title, 40),
                blocks: [
                    { type: "text", text: strip(hs[0]?.desc || p.subtitle) },
                    { type: "image", col: "right", src: "", caption: "Ảnh tư liệu (mock)", h: 340 }
                ]
            },
            {
                label: "02 / Diễn biến chính",
                title: short(hs[1]?.name || 'Diễn biến', 40),
                blocks: [
                    { type: "bullets", items: hs.slice(1, 4).map(h => short(h.name, 60)) },
                    { type: "note", text: short(hs[2]?.desc || 'Ghi chú (mock)', 60) }
                ]
            },
            {
                label: "03 / Ý nghĩa",
                title: short(hs[3]?.name || 'Ý nghĩa', 40),
                stamp: years[years.length - 1],
                blocks: [
                    { type: "flow", from: years[0], to: years[years.length - 1], caption: short(p.shortLabel.replace(/^\d+\.\s*/, ''), 40), sub: short(strip(p.bullets?.[p.bullets.length - 1] || ''), 90) }
                ]
            }
        ]
    };
}

function getStory(pieceIndex) {
    return STORY_DATA[pieceIndex] || buildMockStory(pieceIndex);
}

