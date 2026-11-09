# Ảnh cho 15 tranh VNR202

## Cập nhật sau triển khai

Đã bổ sung 6 ảnh từ Bảo tàng Lịch sử Quốc gia, có nguồn và caption tại [README-SOURCES](../assets/images/verified/README-SOURCES.md). Dùng 4 ảnh cho tranh chính 02/06/10/13 và 6 ảnh trong các thẻ phù hợp; các tranh khác dùng sơ đồ nội dung SVG tự biên soạn, ghi rõ không phải ảnh tư liệu. [Manifest đang dùng](runtime-image-manifest.json) là nơi kiểm tra ảnh runtime. Những bảng dưới đây lưu kết quả kiểm kê và nhu cầu ảnh tư liệu; không còn nghĩa runtime đang dùng placeholder. 8 ảnh ứng viên cũ chưa xác minh vẫn không dùng.

## Hiện trạng đã kiểm tra

DOCX của nhóm không có ảnh nhúng. 15 `imageUrl` trong dữ liệu bảo tàng hiện là placeholder. Kho `mlngame/public/art` chủ yếu phục vụ bài MLN131 về nhà nước pháp quyền, không được lấy các poster Hiến pháp/Đổi mới sau 1945 rồi gán vào câu chuyện 1930–1945.

Đã xem [contact sheet](image-contact-sheet.jpg) của 8 ảnh ngoài thư mục art. Tạo các bản WebP ứng viên trong `../assets/images/`, giữ tỷ lệ, cạnh tối đa 1200px. Tổng từ khoảng 12,9MB xuống khoảng 615KB. [image-inventory.json](image-inventory.json) ghi vị trí nguồn, hash, kích thước và tên bản tối ưu. Chưa gắn các ảnh này vào runtime và chưa tải thêm ảnh mạng.

## Phân loại ảnh đã xem

| File gốc trong mlngame/public | Bản chuẩn bị | Quan sát / quyết định |
|---|---|---|
| `bacHodoctuyenngon.webp` | `declaration-candidate.webp` | Ảnh đen trắng lễ đài; ứng viên tranh 15. Cần nguồn và caption xác minh sự kiện/địa điểm trước khi công bố. Bỏ bản PNG trùng để tránh tải nặng. |
| `doi1945.png` | `famine-candidate.webp` | Cảnh người đói/ngôi làng, có thể là cảnh phim hoặc tái hiện; chỉ dùng tranh 14 nếu xác định nguồn và ghi đúng loại hình. Không mặc định là ảnh chụp năm 1945. |
| `nole.png` | `colonial-labor-candidate.webp` | Ảnh lao động tập thể đen trắng; ứng viên minh họa bối cảnh tranh 01 sau khi xác minh địa điểm/niên đại. |
| `phapnhat.png` | `occupation-illustration.webp` | Hình hai binh sĩ có dấu hiệu tái hiện/xử lý; chỉ coi là minh họa cần xác minh, không gọi là ảnh Nhật đảo chính Pháp 9/3/1945. |
| `thoico.jpg` | `time-window-illustration.webp` | Minh họa đồng hồ cát, phù hợp ẩn dụ thời cơ ở tranh 14; phải ghi minh họa, không ảnh tư liệu. |
| `kehoach.jpg` | `map-meeting-unverified.webp` | Ảnh lãnh đạo bên bản đồ, chưa xác minh niên đại. **Không dùng cho Tân Trào 1945** chỉ vì tên file là kế hoạch; có nguy cơ là tư liệu chiến dịch giai đoạn sau. |
| `nhathavuki.png` | `weapons-scene-unverified.webp` | Cảnh quân nhân bên vũ khí chưa rõ sự kiện. **Không dùng cho Đội quân 22/12/1944 hoặc phá kho vũ khí 1945** khi chưa có nguồn. |
| `quangtruong.jpg` | `building-unverified.webp` | Ảnh tòa nhà/quảng trường chưa rõ danh tính. **Không ghi là Ba Đình hoặc Nhà hát Lớn Hà Nội** từ tên file. |

Ba file unverified cuối được chuẩn bị để truy xuất/đối chiếu, không phải được duyệt đưa vào bài. Các ảnh chó/mèo trong public không liên quan, không sao chép. Các nhận xét qua hình không đủ để xác lập tác giả hay bản quyền.

## Danh sách ảnh cần hoàn thiện theo từng tranh

| Tranh | Ảnh chính mong muốn | Ảnh hỗ trợ trong step | Trạng thái |
|---|---|---|---|
| 01 | Bản đồ/chế độ thuộc địa có nguồn | Hai cuộc khai thác; các khuynh hướng cứu nước | Có ứng viên lao động, chưa xác minh; thiếu tư liệu đặc trưng |
| 02 | Nguyễn Ái Quốc trong giai đoạn 1911–1929 | Báo Thanh Niên, bìa Đường Kách mệnh, lớp huấn luyện | Cần bổ sung |
| 03 | Tư liệu hoặc tranh tái hiện hội nghị thành lập Đảng | Sơ đồ hai tổ chức hợp nhất rồi Liên đoàn gia nhập | Cần bổ sung; ghi rõ tranh tái hiện nếu là tranh |
| 04 | Chánh cương/Sách lược vắn tắt | Sơ đồ nhiệm vụ và lực lượng tự dựng bằng block | Cần bổ sung bản chụp văn kiện |
| 05 | Xô viết Nghệ–Tĩnh, phân biệt ảnh/tranh tái hiện | Sơ đồ địa bàn, mốc Hưng Nguyên | Cần bổ sung |
| 06 | Trần Phú hoặc Luận cương tháng 10/1930 | Các cặp tiêu chí so sánh bằng block | Cần bổ sung |
| 07 | Di tích/tư liệu nhà tù có caption thời gian | Báo tù hoặc tài liệu học tập có nguồn | Cần bổ sung; ảnh di tích hiện nay không giả là ảnh năm 1931 |
| 08 | Lê Hồng Phong hoặc tư liệu Đại hội I | Chương trình hành động 1932 | Cần bổ sung |
| 09 | Văn kiện/chứng tích vận động dân chủ 1936 | Dân nguyện, báo chí | Cần bổ sung |
| 10 | Mít tinh Đấu Xảo 1/5/1938 có nguồn | Tự chỉ trích, Hội Truyền bá Quốc ngữ | Cần bổ sung; kiểm tra ảnh đông người có đúng sự kiện |
| 11 | Bắc Sơn/Nam Kỳ hoặc ảnh bối cảnh Pháp–Nhật | Timeline ba cuộc nổi dậy | Chỉ có minh họa ứng viên, thiếu ảnh tư liệu |
| 12 | Pác Bó hoặc tư liệu Việt Minh | Văn kiện/chương trình, sơ đồ 6 nội dung | Cần bổ sung; ảnh di tích ngày nay phải ghi rõ |
| 13 | Đội Việt Nam tuyên truyền giải phóng quân | Đề cương văn hóa 1943, căn cứ địa | Cần bổ sung; không dùng ảnh chiến dịch sau năm 1945 |
| 14 | Tư liệu Chỉ thị 12/3/Tân Trào | Phá kho thóc; ẩn dụ thời cơ; sơ đồ thời điểm | Có ảnh minh họa ứng viên, ảnh lịch sử chưa đủ |
| 15 | Lễ Độc lập 2/9/1945 có nguồn | Hà Nội/Huế/Sài Gòn, Tuyên ngôn | Có ứng viên lễ đài; cần nguồn và ảnh hỗ trợ |

Không coi 15 ảnh đã đầy đủ. Có thể bắt đầu triển khai bằng thẻ nền giấy hiển thị đúng tên sự kiện, thay vì gắn nhầm ảnh; trước khi công bố bản hoàn chỉnh phải giải quyết các ô thiếu trong bảng.

## Quy trình bổ sung và gắn ảnh

Ưu tiên kho của Bảo tàng Lịch sử Quốc gia, Bảo tàng Hồ Chí Minh, cơ quan lưu trữ, bảo tàng địa phương hoặc cơ quan sở hữu tư liệu. Tìm trang có caption đầy đủ trước, sau đó mới lấy tệp ảnh; không dùng thumbnail tìm kiếm như bằng chứng. Mỗi ảnh phải lưu URL trang nguồn, URL tệp, mô tả, loại hình (ảnh cùng thời/di tích hiện nay/tranh tái hiện/minh họa), ngày truy cập và thông tin tác giả/giấy phép nếu nguồn có.

Tên file triển khai gắn nội dung, ví dụ `party-founding-reconstruction.webp`; trường caption phải thể hiện là tái hiện. Không ghi ngày sự kiện vào tên file nếu chính tư liệu chưa được xác định. Giữ bản gốc ở nguồn, bản runtime nén khoảng 100–180KB, không tải toàn bộ ảnh hỗ trợ từ đầu.

Renderer hiện kéo ảnh vào canvas ngang 1024×742. Cần dùng contain giữ tỷ lệ hoặc bố cục ảnh ngang được biên tập riêng; ảnh bìa/văn kiện dùng `keepColor: true` khi sepia làm chữ khó đọc. Caption nằm ngoài ảnh và có độ tương phản tốt. Chỉ xử lý trong bản VNR202.
