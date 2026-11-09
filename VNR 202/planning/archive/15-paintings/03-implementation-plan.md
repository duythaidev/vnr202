# Lộ trình triển khai nội dung VNR202

Phạm vi: chỉ `vnr202/VNR 202/`. Nội dung và bố cục đã triển khai; các bước voice/tour vẫn chưa triển khai. Không thực hiện thay đổi trong base hoặc bản MLN131.

## Hiện trạng cần khắc phục

| Hạng mục | Hiện tại | Đích của đợt triển khai |
|---|---|---|
| Tranh | 15 mục, tiêu đề dài và ảnh placehold.co | Giữ ID 0–14, tên ngắn, nội dung đúng nguồn, ảnh có caption |
| Story | Chỉ index 0, 1, 9 có khai báo riêng; phần còn lại gọi buildMockStory | Khai báo đủ 15 story, tổng 60 step theo content-index.json |
| Ảnh trong thẻ | Có src rỗng, mock sepia | Ảnh thật/ảnh minh họa đã phân loại; không giả mock là tư liệu |
| Số liệu | Có số thiếu nguồn hoặc chart mock | Đúng đối tượng, mốc và nguồn; bỏ số chưa chốt |
| Nội dung so sánh | Flat View/quiz cũ đã gỡ | Diễn giải bằng step ngắn, không bật lại modal cũ |
| Thuyết trình tự động | Mới là kế hoạch | Chưa xây controller trong đợt nội dung; chuẩn bị ID/kịch bản cho đợt sau |

## Đợt 1 — Chốt nội dung và xử lý các mốc sai

1. Duyệt 15 tranh/60 step trong `01-content-plan.md` với năm phần bài gốc. Giữ quan hệ bối cảnh–chủ trương–lực lượng–phương pháp–kết quả, không chỉ chạy danh sách ngày.
2. Áp dụng `04-source-audit.md`: hai tổ chức tại hội nghị hợp nhất rồi tổ chức thứ ba gia nhập; Hội Truyền bá Quốc ngữ 1938; tách Hội nghị quân sự tháng 4 và thống nhất lực lượng tháng 5/1945; tránh gộp Ai Lao vào mốc 1887.
3. 35.009 là hội viên quần chúng theo báo cáo, không phải đảng viên hoặc số người tại một mít tinh. Số thương vong Hưng Nguyên còn khác nhau giữa nguồn; không chọn làm stat lớn khi chưa chốt.
4. Tách phần ghi chú người biên tập khỏi chữ hiện cho học sinh. Các câu như cần xác minh ảnh hoặc chưa có giáo trình không được đưa vào lời TTS.

Hoàn tất khi mọi thẻ có ý chính, nguồn và loại hình; các điểm chưa xác minh có cách bỏ/rút gọn an toàn hoặc người chịu trách nhiệm bổ sung.

## Đợt 2 — Chuẩn bị ảnh

Thực hiện ma trận ở `02-image-plan.md`. Không gọi các ảnh ứng viên là đã duyệt. Bổ sung ảnh có nguồn cho các ô thiếu, hoặc dùng thẻ nền giấy và tên văn kiện tạm thời. Không lấy ảnh Điện Biên Phủ, tòa nhà không rõ địa điểm hoặc cảnh phim gán vào sự kiện năm 1945.

Khai báo manifest ảnh gồm mã, đường dẫn local, caption, loại ảnh, nguồn trang và trạng thái kiểm chứng. Chỉ tải ảnh chính khi dựng phòng, ảnh phụ theo bảng ghim. Với ảnh dọc phải giữ tỷ lệ, không kéo giãn.

## Đợt 3 — Áp dữ liệu và nhãn UI

- `museum-3d-single-02.js`: giữ 15 id, cập nhật title/shortLabel/subtitle cho dễ đọc; chapter theo 5 phần, imageUrl là đường local đã duyệt. Nội dung dài chuyển thành bullets/hotspots để tham khảo/fallback, không tái dựng drawer cũ.
- `museum-3d-single-03.js`: thay story ví dụ và khai báo đủ index 0–14. Số step lần lượt **4, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 6, 4, 5, 5**. Dùng seed cố định, block và chiều cao ảnh hiện có; kiểm tra đủ chỗ cho 6 dot trên mobile ở tranh 12.
- Mỗi step nên có id ổn định theo content-index.json để về sau nối MP3; đổi tiêu đề không đổi id. Không dùng chuỗi tiêu đề làm khóa file audio.
- `museum-3d-single-05.js`: chỉ sửa cách fit ảnh/caption cần thiết, không tăng hình học hoặc số đèn. Phòng 15 tranh và low/high graphics giữ nguyên.
- `museum-3d-single.html`: tiêu đề và HUD vẫn là VNR202; giữ nhãn đúng chủ đề, không để các tên ví dụ hoặc nhãn mô tả phần cứng. Tên thành viên chỉ đưa vào trang khi nhóm muốn công bố; không tự bịa tên người còn thiếu.
- `museum-intro.js`: giữ lời chào đã gộp, step cuối có ding, thanh tải chỉ hiện ở bước cuối, whoosh vào cảnh. Nội dung 15 tranh không yêu cầu thay trải nghiệm intro mới được duyệt.
- CSS và điều khiển chỉ sửa khi nội dung thực tế gây tràn/khó đọc. Không mở lại Flat View, quiz, phần sơ đồ fullscreen hoặc drawer chi tiết.

Hoàn tất khi 15 tranh mở đúng tổng 60 step, không gọi buildMockStory cho tranh triển khai, không còn ảnh mock/chữ ví dụ hiển thị.

## Đợt 4 — Voice và mode thuyết trình riêng

Thực hiện `05-narration-plan.md` sau khi nội dung đã duyệt. Generate MP3 trước, kiểm tra đủ manifest/file rồi mới nối tour controller. Runtime không gọi TTS local. Giữ tách biệt lời nói với MP3 tiếng bút hiện có.

## Kiểm tra nghiệm thu

1. Kiểm tra cú pháp, ID tranh liên tục 0–14, tổng step 60, khóa step không trùng và file ảnh tồn tại.
2. Soát nguồn tại tranh 03/06/10/12/14/15; kiểm tra có đủ sáu ý Trung ương 8, bốn bài học và năm mốc đường lối cuối bài.
3. Mở đủ từng tranh/step. Đọc chữ ở desktop và mobile, kiểm tra tên dài, 6 dot, ảnh bìa không bị méo hoặc sepia làm mất chữ.
4. Kiểm tra low/high, chuyển tranh, vào/đóng bảng, viết nhanh, âm bút MP3, tiếng chân và mute. Viết xong không tự cắt lời nói nếu về sau bật mode thuyết trình.
5. Kiểm tra local file:// và HTTP; ảnh có nguồn local, không còn phụ thuộc placehold.co sau khi triển khai đầy đủ. Kiểm tra tải lỗi có fallback đúng tên/nội dung, không hiện ảnh sai sự kiện.
6. Đối chiếu DOCX theo bảng nguồn; kiểm tra diff chỉ trong bản VNR202. Cập nhật CONTEXT và trạng thái các tài liệu sau khi hoàn tất, không đánh dấu tính năng dự kiến là đã có.

Trạng thái cập nhật: đã áp đủ 15 tranh/60 thẻ, nguồn và hình ảnh tương ứng; dùng sơ đồ tự biên soạn cho chủ đề chưa có ảnh tư liệu xác minh. Chưa thu lời nói hoặc xây tour.
