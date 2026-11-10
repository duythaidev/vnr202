# Planning voice VNR202 – revision 4 (8 tranh, 26 thẻ)

Trạng thái: nội dung đã gọn lại còn **8 tranh, 26 thẻ**. Kịch bản **34 lời nói** (8 lời dẫn và 26 lời step, khoảng 41 từ mỗi lời, tổng khoảng 6 phút 20 giây) nằm trong [presentation-script.json](presentation-script.json) và trong trường `intro` / `narration` của `museum-3d-single-03.js`. **Chưa duyệt, chưa có MP3 cho bản này.** 48 MP3 của bản 10 tranh đã chuyển sang `audio/archive-10-paintings/`, không còn khớp nội dung, không dùng lại. Phụ đề tour hiện đúng các lời này; voice chạy đồng hồ dự phòng cho tới khi tạo MP3 mới. Danh mục 34 clip ở [presentation-clip-index.json](presentation-clip-index.json).

## Cấu trúc nói theo ý chính

| Nhóm | Tranh | Nội dung |
|---|---|---|
| Mở đầu | 01 | Trước 1930 và Đảng ra đời (4 thẻ) |
| Ý chính 1 | 02, 03 | Xô viết Nghệ–Tĩnh; Luận cương và khôi phục (3 + 3 thẻ) |
| Ý chính 2 | 04 | Dân chủ, cơm áo, hòa bình (3 thẻ) |
| Ý chính 3 | 05, 06, 07 | Chuyển hướng; chuẩn bị khởi nghĩa; kháng Nhật và Tổng khởi nghĩa (3 + 3 + 4 thẻ) |
| Kết | 08 | Độc lập và bài học (3 thẻ) |

**Công thức mỗi clip step:** câu ý chính trước (diễn đạt lại `thesis`), rồi 1–2 chứng cứ quan trọng nhất từ thẻ. Không đọc hết từng ô của thẻ vì chữ trên thẻ đã đủ cho người xem.

## Nhịp nói

Voice `vi-VN-NamMinhNeural` đọc nhanh, khoảng 3,7 từ mỗi giây (đo trên bản 10 tranh).

- Lời dẫn tranh 20–30 từ (7–9 giây). Lời step 35–50 từ (10–14 giây), tối đa ba câu ngắn.
- Mỗi clip một ý chính, số liệu chọn 1–2 số.
- Ngày tháng viết bằng chữ trong input TTS; giao diện giữ ký hiệu gọn.
- Chế độ thuyết trình mặc định chạy 1,25× cho camera và bút; voice luôn 1×. Rào chuyển thẻ là `ended` và `writer.done`.
- Viết tên đầy đủ trước viết tắt; kiểm tra cách đọc Nguyễn Ái Quốc, Hương Cảng, Phai Khắt, Nà Ngần. Giữ chính xác tên văn kiện.
- Bám [audit nguồn](04-source-audit.md): không gọi tranh tái hiện là ảnh chụp, không gọi ảnh Pác Bó hiện đại là ảnh năm 1941; tránh số thương vong chưa thống nhất.

## Generate trước, phát sau

Công cụ: `node scripts/generate-presentation-audio.mjs` (cần biến môi trường `TTS_API_KEY`, endpoint mặc định `http://localhost:5050/v1/audio/speech`, model `tts-1`, voice `vi-VN-NamMinhNeural`, mp3). Công cụ chỉ tạo clip mới hoặc đổi nội dung, ghi `audio/presentation/<clipId>.mp3` và `hashes.json`, tối đa 2 request đồng thời. Sau đó chạy `node scripts/build-presentation-audio-manifest.cjs` để đo thời lượng và sinh `presentation-audio.js` (chỉ clip có hash khớp kịch bản mới được tính là sẵn sàng). Không gọi TTS trong phiên tham quan.

Thứ tự: duyệt script, generate, nghe thử, chạy manifest. Thiếu clip thì tour chạy đồng hồ phụ đề cho clip đó, không tự gọi TTS. Pause, bỏ qua và thoát phải hủy clip cũ và ngăn callback `ended` trễ.
