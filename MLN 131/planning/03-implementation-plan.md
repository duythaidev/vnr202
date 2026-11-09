# Lộ trình áp nội dung vào MLN131

Các bước nội dung và bố cục đã triển khai. Phần voice vẫn chưa triển khai. Đường dẫn mã dưới đây nằm trong `vnr202/MLN 131/`.

## 1. Duyệt nội dung và ảnh

Đọc `01-content-plan.md` theo thứ tự 15 tranh. Đối chiếu DOCX: phần I ở tranh 06/09/13, phần II ở 11/13/14, phần III ở 01–12, phần IV ở 13, phần V ở 14, phần VI ở 15. Việc rút gọn phản biện là biên tập cho bảo tàng, không phải bài nhóm không có phản biện.

Ảnh chụp nào chưa xác minh caption thì dùng poster minh họa cùng mã theo kế hoạch ảnh. Hoàn tất khi 15 tranh có ảnh, ý chính và nguồn rõ; không còn mốc bị gán nhầm.

## 2. Thay dữ liệu, giữ khung trải nghiệm

- `museum-3d-single-02.js`: thay `MUSEUM_PIECES` bằng 15 mục MLN131; giữ `id` 0–14. Điền code, date, chapter, shortLabel, title, subtitle, imageUrl theo bản đồ nội dung. Đường ảnh dạng `assets/images/l1p2.jpg`, không dùng `/art/...` của app game.
- `museum-3d-single-03.js`: khai báo đủ `STORY_DATA[0..14]`, mỗi mục 3 step. Dùng block có sẵn; rút đoạn dài thành 2–3 ý. Hotspots/bullets của dữ liệu tranh có thể giữ làm tóm tắt/fallback, nhưng không để story âm thầm sinh nội dung VNR202 cũ.
- Chọn image cho ảnh, timeline cho niên biểu, flow cho quan hệ, note cho phân biệt/giới hạn. Không đưa cả trang văn vào một thẻ và không lặp cùng ảnh trên mọi step.
- `museum-3d-single.html`: đổi title, nhãn bảo tàng, chủ đề và mốc thời gian. Bỏ nhãn VNR202, 1884–1945 và NHÓM 1 kế thừa. Chưa có nguồn tên nhóm MLN131 thì chỉ ghi môn, không bịa số nhóm.
- `museum-intro.js`: thay lời dẫn/mốc VNR202 nếu còn; giữ nhịp hai câu chào, step cuối có ding, thanh tải hiện ở cuối rồi tự vào cảnh.
- `museum-3d-single-05.js`: sửa cách fit ảnh giữ tỷ lệ nếu dùng poster dọc. Không thay quy mô phòng hoặc tăng độ nặng đồ họa để làm nội dung.

Hoàn tất khi 15 tranh đều có 3 step MLN131, không còn nội dung VNR202 hiển thị, ảnh không méo và tài nguyên chạy độc lập trong thư mục môn. Chỉ thay bản MLN131, không sửa base hoặc bản VNR202.

## 3. Voice là một đợt sau khi duyệt kịch bản

Kế hoạch mode thuyết trình nằm trong context base. Sau khi duyệt nội dung, viết một lời dẫn tranh và lời nói cho mỗi step: dự kiến 15 + 45 = 60 clip nếu mỗi step một clip. Đây là số lượng đề xuất, chưa có các MP3 này.

Kịch bản nói là câu văn hoàn chỉnh theo ý trong planning, không đọc nhãn block, tên file hoặc ghi chú kiểm chứng. Generate MP3 trước bằng TTS local của người dùng, kiểm tra đủ file rồi tích hợp. Khi tham quan chỉ tải/phát MP3 sẵn có, không gọi TTS lúc đến tranh/detail. Giảm tiếng bút/vút dưới giọng nói. Chưa triển khai tour controller trong đợt làm nội dung tranh.

## 4. Kiểm tra trước khi đánh dấu hoàn tất

1. Cú pháp JS hợp lệ; đủ 15 tranh/45 step; tất cả file ảnh tham chiếu tồn tại.
2. Soát kỹ tranh 01, 08, 11, 15 cho đầu hành trình, mốc hiến định và kết luận; sau đó kiểm tra toàn bộ tranh/step một lượt để bắt lệch thứ tự, rơi nguồn.
3. Ảnh bìa/ảnh dọc giữ tỷ lệ, chữ đọc được, không cắt nội dung quan trọng.
4. Low/high graphics, mở/đóng bảng, chuyển step, viết nhanh, MP3 bút và bước chân vẫn hoạt động. Không thêm quiz, Flat View hoặc drawer cũ.
5. Kiểm tra desktop/mobile và file:// theo cách mở hiện có. Không còn ảnh placeholder của VNR202 khi ảnh MLN131 đã tải.
6. Kiểm tra diff: chỉ MLN131 thay đổi. Cập nhật trạng thái CONTEXT sau khi thực sự triển khai.

Trạng thái cập nhật: nội dung, nhãn môn, ảnh giữ tỷ lệ và nguồn từng thẻ đã triển khai. Đã kiểm tra đủ 45 bố cục không tràn chữ; cần giữ bước kiểm tra tương ứng khi biên tập thêm nội dung. TTS và tour controller là đợt riêng.
