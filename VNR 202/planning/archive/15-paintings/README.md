# Planning nội dung VNR202

Nguồn chính là bài `mlngame/docs/VNR202 - Nhóm 1.docx`, 219 đoạn có nội dung, phân công cho 5 người. Trọng tâm: tiến trình hình thành, điều chỉnh và phát triển đường lối cách mạng từ trước năm 1930 đến Cách mạng Tháng Tám năm 1945.

Đã chuẩn bị **15 tranh / 60 step**, giữ thứ tự tranh hiện tại nhưng thay các story mock bằng bản biên tập có nguồn. Đã triển khai HTML/JS và nội dung 15 tranh / 60 thẻ. Chưa generate MP3 hoặc triển khai mode thuyết trình.

Đọc theo thứ tự:

1. [Nội dung từng tranh và step](01-content-plan.md).
2. [Kế hoạch ảnh và những ảnh cần tránh dùng nhầm](02-image-plan.md).
3. [Lộ trình triển khai và tiêu chí nghiệm thu](03-implementation-plan.md).
4. [Đối chiếu các mốc, số liệu cần sửa](04-source-audit.md).
5. [Kế hoạch lời dẫn và MP3 thuyết trình](05-narration-plan.md).
6. [Kế hoạch implement mode thuyết trình](06-presentation-implementation-plan.md).

Tài nguyên hỗ trợ: [bản trích xuất có số đoạn](sources/presentation-paragraphs.txt), [hash nguồn DOCX](sources/source-manifest.json), [chỉ mục tranh/step](content-index.json), [contact sheet ảnh sẵn có](image-contact-sheet.jpg), [kiểm kê ảnh](image-inventory.json).

Phạm vi môn này độc lập với `../MLN 131/`. Không dùng tài liệu về Nhà nước pháp quyền của MLN131 làm nguồn nội dung cho VNR202, dù cùng nằm trong project. Không sửa base, bản MLN131 hoặc tài liệu DOCX của nhóm khi triển khai kế hoạch này.

## Trạng thái triển khai

Đã khai báo đủ 60 step, gắn nguồn, ảnh tư liệu được xác minh hoặc sơ đồ nội dung biên soạn. [Ảnh và nguồn đang dùng](runtime-image-manifest.json); [nguồn ảnh BTLSQG](../assets/images/verified/README-SOURCES.md). Ảnh ứng viên cũ chưa xác minh vẫn chỉ để tham khảo. Mở trang museum-3d-single.html trong thư mục môn để xem nội dung.

Khi cập nhật ảnh, chạy `node scripts/build-local-image-data.cjs` từ thư mục môn để đồng bộ bundle hỗ trợ file://. Nội dung MP3 thuyết trình vẫn là đợt riêng.

## Planning implement mode thuyết trình

[Kế hoạch implement](06-presentation-implementation-plan.md) có schema kịch bản/manifest, pipeline generate trước, API scene cần bổ sung, state machine, xử lý pause/skip/cancel và ma trận kiểm thử. [Chỉ mục 75 clip dự kiến](presentation-clip-index.json) lấy trực tiếp từ 15 tranh/60 step hiện có, chưa phải manifest MP3 runtime. Tất cả vẫn planned-not-generated; chưa viết controller hoặc generate audio.
