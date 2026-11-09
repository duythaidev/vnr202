# Bảo tàng MLN 131

Bản môn học này được sao chép từ base tại thư mục cha `vnr202/`. Điểm vào: [museum-3d-single.html](museum-3d-single.html).

## Phạm vi chỉnh sửa

- Triển khai nội dung **MLN 131** trong thư mục này. Bản môn còn lại nằm ở `../VNR 202/`.
- `museum-3d-single-02.js`: nội dung tranh, ảnh, tiêu đề và các mốc/sự kiện.
- `museum-3d-single-03.js`: nội dung từng step trên bảng ghim 3D.
- `museum-3d-single.html`, `museum-intro.js`: nhãn môn, tiêu đề trang, lời chào intro nếu cần điều chỉnh.
- Khung 3D, điều khiển, hiệu ứng và âm thanh kế thừa base; renderer đã chỉnh bố cục tranh, nguồn và cách fit ảnh cho MLN131. Tất cả tài nguyên local đã được sao chép vào đây; đường dẫn không phụ thuộc tài nguyên ở thư mục môn còn lại.

**Trạng thái hiện tại:** đã triển khai nội dung MLN131 gồm 15 tranh, 45 step, ảnh local và nhãn môn. Mỗi step có ID ổn định và nguồn ngắn hiện trên giấy. Không còn story mock hoặc nội dung VNR202 trong dữ liệu môn.

Đọc [context base](../CONTEXT.md) để xem vai trò đầy đủ của các file, đồ họa, intro, âm thanh và kế hoạch mode thuyết trình. Trong tài liệu đó, các đường dẫn file không có tiền tố cũng tồn tại tương ứng ngay trong thư mục môn học này. Mode thuyết trình vẫn chỉ là kế hoạch; MP3 thuyết trình phải generate trước theo kịch bản riêng của từng môn.

Các file `tham-khao-intro-sound.*` là bản tham khảo; `writing-with-pencil.mp3` là âm bút dùng trong runtime. Chưa có MP3 thuyết trình hay kịch bản voice cho môn học.

## Planning nội dung MLN131 đã chuẩn bị

Đọc [planning/README.md](planning/README.md) trước khi triển khai. Đã có bản biên tập 15 tranh × 3 step = 45 step, dựa trên bài DOCX của nhóm tại `../../docs`, giáo trình và tài liệu game tại `../../mlngame`. Chủ đề là vai trò lãnh đạo của Đảng và nguyên tắc pháp quyền, không phải toàn bộ học phần MLN131.

Bộ 40 ảnh đã sao chép từ `../../mlngame/public/art` vào `assets/images/`; planning có ánh xạ 15 ảnh chính, ảnh bổ trợ, chú thích và lưu ý giữ tỷ lệ ảnh. Chưa cần tải ảnh mạng. Các điểm sai khác 1919/1922, Hiến pháp 1992/sửa đổi 2001 và giới hạn nguồn phản biện được ghi trong tài liệu nguồn.

**Đã triển khai:** MUSEUM_PIECES, STORY_DATA và nhãn HTML đã thay bằng nội dung MLN131. Dùng poster minh họa thay các ảnh hội nghị/ảnh lịch sử chưa xác minh caption, giữ hai ảnh bìa Hiến pháp và ảnh phiếu mua lương thực với nhãn phù hợp. Gallery dùng ảnh contain bên trái, tên/mốc/tóm tắt bên phải. Bảng ghim có nguồn cuối thẻ, chữ phân cấp và caption wrap; không tạo ảnh tư liệu giả khi file lỗi. STORY_CONFIG được đọc đúng từ biến global lexical để số thẻ trang trí/tốc độ có hiệu lực. Tùy chọn âm thanh/đồ họa dùng khóa riêng mln131-sound / mln131-graphics-quality.

Hồ sơ đối chiếu mốc/điều khoản: [planning/04-implementation-source-check.md](planning/04-implementation-source-check.md). Các điều Hiến pháp được trình bày theo mốc lịch sử tương ứng, không gắn nhãn bản luật hiện hành đầy đủ năm 2026. Kết luận luôn nêu theo quan điểm chính thức, phần giới hạn thực thi và phản biện vẫn có ở tranh 14.

Mode thuyết trình và voice TTS vẫn chưa triển khai; không có MP3 thuyết trình. Phải generate trước khi tích hợp, không gọi TTS ở runtime.

## Ảnh khi mở file local

Loader chỉ nạp museum-image-data.js khi mở file://. Bundle chứa data URL của ảnh runtime để tránh canvas bị taint trên Chrome/Edge. Khi thay ảnh hoặc imageUrl/block image, chạy `node scripts/build-local-image-data.cjs` từ thư mục MLN 131. Khi chạy HTTP dùng ảnh gốc bình thường, không nạp bundle này. Cách đóng gói này chỉ sửa nạp ảnh, không đổi nội dung môn.

## Planning implement mode thuyết trình MLN131

Đọc [planning/05-presentation-implementation-plan.md](planning/05-presentation-implementation-plan.md) trước khi code tính năng. [Chỉ mục clip](planning/presentation-clip-index.json) liệt kê đúng 15 intro + 45 step theo contentId/step.id hiện tại; tất cả vẫn planned-not-generated, không phải manifest runtime.

Kế hoạch gồm pipeline local TTS generate trước, 60 MP3, voice player riêng, controller làm chủ chuyển bước, tín hiệu camera-arrived/step-ready/writer-done/board-closed thay timer đoán, pause/resume và hủy từng operation để tránh callback cũ. Dùng JS manifest cho file://, không fetch JSON local; lỗi/thiếu voice không được chặn chế độ khám phá. Cấu hình TTS/khóa chỉ ở công cụ local, không có request TTS trong phiên tham quan.

Trạng thái đợt này: chỉ ghi planning và danh mục clip; chưa viết script generate, chưa tạo đầy đủ kịch bản nói, chưa sinh MP3, chưa sửa UI/API scene hoặc controller. Giữ nguyên nội dung 15 tranh/45 step đã triển khai.
