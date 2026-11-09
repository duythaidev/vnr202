# VNR202 · chỉ dẫn hiện hành

Bản trưng bày **revision 2: 10 tranh / 38 thẻ**, ngày 09/11/2026. Nguồn nhóm: [VNR202 - Nhóm 1 (2).docx](../VNR202%20-%20Nhóm%201%20(2).docx), 209 đoạn không rỗng. Hash và bản trích xuất tại [sources/](sources/).

- [01-content-plan.md](01-content-plan.md): mạch 10 chặng, ý chính từng thẻ, cách gộp bản 15 tranh.
- [02-image-plan.md](02-image-plan.md): ảnh đang dùng, phân biệt tư liệu / tranh tái hiện / di tích hiện đại.
- [03-implementation-plan.md](03-implementation-plan.md): triển khai và quy tắc phòng tự co giãn.
- [04-source-audit.md](04-source-audit.md): các mốc lịch sử cần giữ đúng.
- [05-narration-plan.md](05-narration-plan.md), [06-presentation-implementation-plan.md](06-presentation-implementation-plan.md): tour/camera/phụ đề đã triển khai; giọng đọc MP3 còn thiếu.
- [content-index.json](content-index.json), [presentation-clip-index.json](presentation-clip-index.json), [runtime-image-manifest.json](runtime-image-manifest.json): ánh xạ hiện hành. 48 clip dự kiến = 10 intro + 38 thẻ.

[archive/15-paintings/](archive/15-paintings/) là bản cũ để đối chiếu, không phải yêu cầu runtime. ID vnr-pNN được đánh lại cho thứ tự 10 tranh; **revision 2 không tương thích nội dung revision 1 dù chuỗi ID giống nhau**. Khi làm voice/cache phải khóa bằng revision và hash nội dung. `mergedFrom` chỉ tới ID của bản 15 tranh cũ.
