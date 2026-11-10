# Planning voice VNR202 - revision 5 (8 tranh, 26 thẻ)

Trạng thái 11/11/2026: đã tạo đủ 34 MP3 giọng nam `vi-VN-NamMinhNeural` cho revision 5, tổng khoảng 416 giây. Lời hiển thị lấy từ `intro` / `narration` trong `museum-3d-single-03.js`; `scripts/build-presentation-script.cjs` tạo bản đọc số bằng chữ để gửi TTS. Manifest khớp hash và thời lượng, 34/34 ready. Bộ 10 tranh cũ ở `audio/archive-10-paintings/`. Phần kiểm tra chạy nền và toàn bộ tour cần xem kết quả mới nhất trong context.

## Cấu trúc nói theo ý chính

| Nhóm | Tranh | Nội dung |
|---|---|---|
| Mở đầu | 01 | Trước 1930 và Đảng ra đời (4 thẻ) |
| Ý chính 1 | 02, 03 | Xô viết Nghệ-Tĩnh; Luận cương và khôi phục (3 + 3 thẻ) |
| Ý chính 2 | 04 | Dân chủ, cơm áo, hòa bình (3 thẻ) |
| Ý chính 3 | 05, 06, 07 | Chuyển hướng; chuẩn bị khởi nghĩa; kháng Nhật và Tổng khởi nghĩa (3 + 3 + 4 thẻ) |
| Kết | 08 | Độc lập và bài học (3 thẻ) |

**Công thức mỗi clip step:** câu ý chính trước (diễn đạt lại `thesis`), rồi 1-2 chứng cứ quan trọng nhất từ thẻ. Không đọc hết từng ô của thẻ vì chữ trên thẻ đã đủ cho người xem.

## Nhịp nói

Voice `vi-VN-NamMinhNeural` đọc nhanh, khoảng 3,7 từ mỗi giây (đo trên bản 10 tranh).

- Lời dẫn tranh 20-30 từ (7-9 giây). Lời step 35-50 từ (10-14 giây), tối đa ba câu ngắn.
- Mỗi clip một ý chính, số liệu chọn 1-2 số.
- Ngày tháng viết bằng chữ trong input TTS; giao diện giữ ký hiệu gọn.
- Chế độ thuyết trình mặc định chạy 1,25× cho camera và bút; voice luôn 1×. Rào chuyển thẻ là `ended` và `writer.done`.
- Viết tên đầy đủ trước viết tắt; kiểm tra cách đọc Nguyễn Ái Quốc, Hương Cảng, Phai Khắt, Nà Ngần. Giữ chính xác tên văn kiện.
- Bám [audit nguồn](04-source-audit.md): không gọi tranh tái hiện là ảnh chụp, không gọi ảnh Pác Bó hiện đại là ảnh năm 1941; tránh số thương vong chưa thống nhất.

## Generate trước, phát sau

Công cụ: `node scripts/build-presentation-script.cjs` rồi `node scripts/generate-presentation-audio.cjs` (biến môi trường `VNR_TTS_API_KEY`, endpoint `http://localhost:5050/v1/audio/speech`, model `tts-1`, voice `vi-VN-NamMinhNeural`). Công cụ chỉ tạo clip mới hoặc đổi nội dung, ghi `audio/presentation/<clipId>.mp3` cùng file `.sha256` của bản đọc, tối đa 2 request đồng thời. Sau đó chạy `node scripts/build-presentation-audio-manifest.cjs` để đo thời lượng và sinh `presentation-audio.js` (chỉ clip có hash khớp kịch bản mới được tính là sẵn sàng). Không gọi TTS trong phiên tham quan.

Thứ tự: duyệt script, generate, nghe thử, chạy manifest. Thiếu clip thì tour chạy đồng hồ phụ đề cho clip đó, không tự gọi TTS. Pause, bỏ qua và thoát phải hủy clip cũ và ngăn callback `ended` trễ.

## Cập nhật (11/11/2026)

- Nguồn duy nhất của lời thuyết trình là `museum-3d-single-03.js` (`intro` và `narration`, viết số bằng chữ số để phụ đề hiện 1939 thay vì chữ). Chạy `node scripts/build-presentation-script.cjs` để sinh `presentation-script.json`: mỗi clip có `display` (chữ số, hiện phụ đề) và `text` (số đọc thành chữ, gửi TTS và tính hash). Quy tắc đọc số ở `scripts/spoken-text.cjs`.
- Lời nói không dùng nhãn "ý chính". Lời dẫn tranh 1 mở bằng câu hỏi dẫn vào bối cảnh: vì sao nhiều thế hệ đấu tranh mà chưa giành được độc lập, rồi mới quay lại trước năm 1930.
- Nhãn nhóm trên thẻ giới thiệu là Mở đầu, Giai đoạn 1930-1935, 1936-1939, 1939-1945, Kết luận.
- Chế độ thuyết trình không còn tự tạm dừng khi chuyển tab hay cửa sổ; vòng lặp có bộ hẹn giờ dự phòng khi tab bị ẩn (chậm hơn khi tab ẩn, trình duyệt có thể giới hạn tốc độ).
