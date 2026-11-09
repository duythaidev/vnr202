# Planning nội dung MLN131

Chủ đề: vai trò lãnh đạo của Đảng và nguyên tắc pháp quyền theo bài của nhóm. Đã tham khảo DOCX, giáo trình, lời dẫn, nội dung và ảnh của game MLN131 cũ. Đã áp nội dung lên JavaScript bảo tàng: 15 tranh / 45 thẻ, kèm ảnh local và nguồn cuối thẻ.

Đọc theo thứ tự:

1. [Nội dung 15 tranh và 45 step](01-content-plan.md).
2. [Ảnh, nguồn và điểm cần kiểm chứng](02-images-and-sources.md).
3. [Lộ trình triển khai vào mã hiện tại](03-implementation-plan.md).

Tài nguyên: [contact sheet 40 ảnh](image-contact-sheet.jpg), [kiểm kê ảnh](image-inventory.json), ảnh gốc đã sao chép trong `../assets/images/`.

Ưu tiên bộ ảnh sẵn có, chưa tải thêm ảnh mạng. Runtime hiện đã dùng dữ liệu MLN131. Các tài liệu planning giữ vai trò đối chiếu; xem CONTEXT để biết trạng thái mới nhất. Không sửa thư mục môn VNR202 hoặc base khi làm nội dung môn này.

Hồ sơ nguồn bổ sung: [soát mốc trước triển khai](04-implementation-source-check.md). Mode thuyết trình/TTS vẫn là kế hoạch.

## Kế hoạch implement mode thuyết trình

Đã viết [kế hoạch triển khai chi tiết](05-presentation-implementation-plan.md) dựa trên mã hiện tại, kèm [chỉ mục 60 clip dự kiến](presentation-clip-index.json). Bao gồm API scene cần bổ sung, state machine, pause/skip/cancel, kịch bản và pipeline generate MP3 trước, file://, UI và ma trận kiểm thử. Đây là planning, chưa triển khai controller hoặc generate audio.
