# Bảo tàng VNR 202

Bản môn học này được sao chép từ base tại thư mục cha `vnr202/`. Điểm vào: [museum-3d-single.html](museum-3d-single.html).

## Phạm vi chỉnh sửa

- Triển khai nội dung **VNR 202** trong thư mục này. Bản môn còn lại nằm ở `../MLN 131/`.
- `museum-3d-single-02.js`: nội dung tranh, ảnh, tiêu đề và các mốc/sự kiện.
- `museum-3d-single-03.js`: nội dung từng step trên bảng ghim 3D.
- `museum-3d-single.html`, `museum-intro.js`: nhãn môn, tiêu đề trang, lời chào intro nếu cần điều chỉnh.
- Khung 3D, hiệu ứng và âm thanh kế thừa base; renderer đã bổ sung nguồn cuối thẻ, fit ảnh và bố cục tranh VNR202. Tất cả tài nguyên local đã được sao chép vào đây; đường dẫn không phụ thuộc tài nguyên ở thư mục môn còn lại.

**Trạng thái hiện tại:** đã triển khai 15 tranh / 60 thẻ VNR202 theo bài nhóm, không còn story mock hoặc ảnh placehold.co trong dữ liệu môn.

Đọc [context base](../CONTEXT.md) để xem vai trò đầy đủ của các file, đồ họa, intro, âm thanh và kế hoạch mode thuyết trình. Trong tài liệu đó, các đường dẫn file không có tiền tố cũng tồn tại tương ứng ngay trong thư mục môn học này. Mode thuyết trình vẫn chỉ là kế hoạch; MP3 thuyết trình phải generate trước theo kịch bản riêng của từng môn.

Các file `tham-khao-intro-sound.*` là bản tham khảo; `writing-with-pencil.mp3` là âm bút dùng trong runtime. Chưa có MP3 thuyết trình; mẫu kịch bản pilot nằm trong planning.

## Planning nội dung VNR202 đã chuẩn bị

Đọc [planning/README.md](planning/README.md) trước khi triển khai. Nguồn chính là `../../mlngame/docs/VNR202 - Nhóm 1.docx`, đã trích xuất 219 đoạn không rỗng và lưu hash tại `planning/sources/`. Không nhầm bài này với tài liệu pháp quyền MLN131 cùng project.

Đã triển khai 15 tranh / 60 step, giữ phân bổ 4–4–2–3–2 cho năm phần/người thuyết trình. Planning có nội dung từng step, ánh xạ ID, lộ trình triển khai, audit mốc lịch sử, ma trận ảnh và kế hoạch 75 clip voice. Mẫu voice mới là pilot; chưa có đủ kịch bản đã duyệt hoặc MP3 thuyết trình.

Đã xem 8 ảnh ứng viên sẵn có và tạo bản WebP tối ưu trong `assets/images/`, tổng khoảng 615KB. Nhiều ảnh chưa xác minh được sự kiện/niên đại, không tự gắn làm ảnh chính. Ma trận nguồn chỉ rõ ảnh còn thiếu; không ghi là đã chuẩn bị đủ 15 ảnh. Chưa tải thêm ảnh mạng.

**Runtime đã triển khai:** đủ STORY_DATA[0..14] với số thẻ 4,4,3,4,3,4,3,3,4,4,4,6,4,5,5. ID khớp planning/content-index.json. Nguồn ngắn hiện cuối giấy; sửa các mốc Hội Truyền bá Quốc ngữ 1938, Hội nghị quân sự tháng 4/1945 và hợp nhất lực lượng tháng 5, hai tổ chức tại hội nghị đầu 1930 rồi Liên đoàn gia nhập. Số 35.009 ghi đúng hội viên quần chúng; không dùng số thương vong Hưng Nguyên còn khác nhau giữa nguồn.

Ảnh runtime: 6 tư liệu có nguồn BTLSQG trong assets/images/verified; 4 trong số đó là ảnh chính ở tranh 02/06/10/13, còn lại là ảnh hỗ trợ. Các chủ đề còn thiếu ảnh dùng sơ đồ SVG biên soạn trong assets/images/diagrams, ghi rõ không phải ảnh tư liệu. 8 ảnh ứng viên cũ chưa xác minh không gắn vào runtime. Ghi chú nguồn ảnh: assets/images/verified/README-SOURCES.md; ánh xạ runtime tại planning/runtime-image-manifest.json.

Để mở bằng file:// trên Chrome/Edge mà canvas không bị taint, loader nạp museum-image-data.js chứa data URL ảnh đang dùng. Chạy `node scripts/build-local-image-data.cjs` trong thư mục môn sau khi đổi file ảnh hoặc đường dẫn ảnh. Qua HTTP, dùng tệp ảnh bình thường và không tải bundle này. Đợt này cũng sửa cơ chế nạp ảnh tương ứng của bản MLN131 để khắc phục lỗi file:// đã phát hiện; không đổi nội dung MLN131 hoặc base.

Voice/tour vẫn chưa triển khai; MP3 phải generate trước, không gọi TTS khi đến detail.

## Planning implement mode thuyết trình VNR202

Đọc [planning/06-presentation-implementation-plan.md](planning/06-presentation-implementation-plan.md) trước khi code. [Chỉ mục voice](planning/presentation-clip-index.json) liệt kê đủ 75 clip dự kiến theo ID thực tế: 15 intro + 60 step; trạng thái planned-not-generated, không phải manifest runtime.

Số bước/tranh: 4,4,3,4,3,4,3,3,4,4,4,6,4,5,5. Tour phải đọc độ dài story thật; không giả định 3 bước/tranh. Bài có năm phần/người với phân bổ 4–4–2–3–2 tranh. Voice bám audit nguồn, không đọc ghi chú biên tập hoặc coi sơ đồ biên soạn là ảnh chụp lịch sử.

Kế hoạch gồm TTS local generate trước, voice player riêng, controller sở hữu luồng chuyển bước, tín hiệu camera-arrived/step-ready/writer-done/board-closed thay timer đoán, pause/resume và hủy từng operation. JS manifest hỗ trợ file://; thiếu voice không được chặn khám phá tự do. TTS/key chỉ có trong công cụ local, không gọi TTS lúc tham quan.

Trạng thái: mới lập kế hoạch và chỉ mục clip; chưa viết đầy đủ kịch bản nói, script generate, MP3, UI tour hoặc controller. Nội dung 15 tranh/60 step và runtime không thay đổi trong đợt này.
