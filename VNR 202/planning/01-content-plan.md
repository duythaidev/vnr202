# Nội dung chi tiết 15 tranh VNR202

Trạng thái: **đã triển khai 15 tranh / 60 step trong runtime**. Các ghi chú biên tập trong tài liệu này được chuyển thành nội dung học ngắn gọn, không in nguyên trên thẻ. Nguồn chính: bài `VNR202 - Nhóm 1.docx`; đánh số đoạn theo [bản trích xuất](sources/presentation-paragraphs.txt). Tài liệu không kèm bản giáo trình được dẫn trang 35–124, vì vậy không giả định đã kiểm tra nguyên bản giáo trình.

Mạch chính: bối cảnh và chuẩn bị → hình thành đường lối → trải nghiệm 1930–1935 → điều chỉnh sách lược 1936–1939 → chuyển hướng 1939–1941 → chuẩn bị và thắng lợi 1945. Trọng tâm là **sự chuyển dịch đường lối**, không chỉ kể niên biểu sự kiện.

Giữ 15 tranh hiện tại, phân bổ 4–4–2–3–2 cho năm phần/người như nguồn. Có 60 step (3–6 step/tranh), không ép tất cả thành ba thẻ vì Hội nghị Trung ương 8 có sáu nội dung riêng. ID tranh ổn định `vnr-p01..vnr-p15`; index JS 0–14; ID step `vnr-pNN-sNN`.

## Bản đồ tổng thể

| Tranh/index | Người/phần | Mốc | Tiêu đề ngắn | Step | Đoạn DOCX |
|---|---|---|---|---:|---|
| 01/0 | I / Người 1 | Trước 1930 | Bối cảnh thuộc địa và những ngả đường cứu nước | 4 | 022–046 |
| 02/1 | I / Người 1 | 1911–1929 | Nguyễn Ái Quốc chuẩn bị cho sự ra đời của Đảng | 4 | 047–052 |
| 03/2 | I / Người 1 | 1929–02/1930 | Từ các tổ chức cộng sản đến một chính đảng | 3 | 053–059 |
| 04/3 | I / Người 1 | 02/1930 | Cương lĩnh đầu tiên: độc lập và tập hợp lực lượng | 4 | 060–065 |
| 05/4 | II / Người 2 | 1930–1931 | Cao trào cách mạng và Xô viết Nghệ–Tĩnh | 3 | 067–073 |
| 06/5 | II / Người 2 | 10/1930 | Luận cương và sự khác biệt với Cương lĩnh | 4 | 074–085 |
| 07/6 | II / Người 2 | 1931–1934 | Giữ tổ chức và đấu tranh trong nhà tù | 3 | 086–092 |
| 08/7 | II / Người 2 | 1932–1935 | Khôi phục tổ chức và Đại hội I | 3 | 093–098 |
| 09/8 | III / Người 3 | 1935–1937 | Từ bối cảnh chống phát xít đến sách lược mới | 4 | 099–117 |
| 10/9 | III / Người 3 | 1937–1939 | Mặt trận dân chủ, báo chí và kinh nghiệm tổ chức | 4 | 118–127 |
| 11/10 | IV / Người 4 | 1939–1941 | Chuyển hướng trong hoàn cảnh chiến tranh | 4 | 128–141;154–158 |
| 12/11 | IV / Người 4 | 05/1941 | Hội nghị Trung ương 8: sáu nội dung trọng tâm | 6 | 142–153 |
| 13/12 | IV / Người 4 | 1941–1944 | Chuẩn bị lực lượng và căn cứ địa | 4 | 159–171 |
| 14/13 | V / Người 5 | 03–08/1945 | Kháng Nhật cứu nước và chuẩn bị tổng khởi nghĩa | 5 | 172–195 |
| 15/14 | V / Người 5 | 08–09/1945 | Giành chính quyền, độc lập và bài học đường lối | 5 | 196–219 |

## Quy ước dựng thẻ và voice

Mỗi step dưới đây là **ý nghĩa phải truyền đạt**, không phải một đoạn để dán nguyên lên canvas. Rút thành 2–3 ý, khoảng 35–60 từ/thẻ; tiêu đề tối đa khoảng 8 từ. Chọn 1 hình hoặc 1 sơ đồ + chữ ngắn, không nhồi tất cả loại block. Các từ timeline, flow, note, image, text, bullets là block hiện có trong renderer.

Lời nói sau này diễn giải bằng câu hoàn chỉnh, không đọc nhãn kiểm chứng, mã block hoặc tên file. Đề xuất 15 lời dẫn tranh + 60 lời nói step = 75 MP3; chưa có các file này. Generate TTS sau khi duyệt nội dung, trước buổi học; không gọi TTS ở runtime. Thời lượng phải đo từ bản thu; không suy ra timer chuyển bước từ số từ.

## Tranh 01 · Bối cảnh thuộc địa và những ngả đường cứu nước

- ID/index: `vnr-p01` / `0`. Người/phần: I / Người 1.
- Mốc: Trước 1930. Nguồn: DOCX đoạn 022–046.
- Hình ảnh dự kiến: Bản đồ thuộc địa hoặc ảnh lao động xác minh; nole.png chỉ là ứng viên.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Thế giới thay đổi

ID: `vnr-p01-s01`. Gợi ý block: `timeline`. Chủ nghĩa đế quốc mở rộng thuộc địa; Cách mạng Tháng Mười năm 1917 và Quốc tế Cộng sản năm 1919 là bối cảnh quốc tế. Không kể những sự kiện này như nguyên nhân duy nhất của chuyển biến ở Việt Nam.

### Step 02 · Xã hội thuộc địa nửa phong kiến

ID: `vnr-p01-s02`. Gợi ý block: `text`. Hai cuộc khai thác thuộc địa và chính sách cai trị làm biến đổi kinh tế, xã hội. Trên thẻ chỉ giữ cơ chế bóc lột, sự phân hóa xã hội và mâu thuẫn dân tộc; các số liệu dân số/công nhân chuyển vào ghi chú cần kiểm chứng.

### Step 03 · Các khuynh hướng yêu nước

ID: `vnr-p01-s03`. Gợi ý block: `timeline`. Đặt Cần Vương, Yên Thế, Đông Du, Duy Tân và Việt Nam Quốc dân Đảng theo thời gian. Phân biệt phong trào vũ trang, cải cách và tổ chức chính trị, không nén tất cả thành một kiểu đấu tranh.

### Step 04 · Vấn đề đặt ra

ID: `vnr-p01-s04`. Gợi ý block: `flow`. Theo phân tích của bài nhóm, hạn chế chung đặt ra yêu cầu có đường lối, tổ chức lãnh đạo và phương pháp thích hợp. Dẫn sang hành trình tìm đường cứu nước của Nguyễn Ái Quốc.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 02 · Nguyễn Ái Quốc chuẩn bị cho sự ra đời của Đảng

- ID/index: `vnr-p02` / `1`. Người/phần: I / Người 1.
- Mốc: 1911–1929. Nguồn: DOCX đoạn 047–052.
- Hình ảnh dự kiến: Tư liệu Nguyễn Ái Quốc, bìa Đường Kách mệnh, báo Thanh Niên cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Tìm đường cứu nước

ID: `vnr-p02-s01`. Gợi ý block: `timeline`. 1911 ra đi; 1919 gửi Yêu sách; 1920 đọc Luận cương của Lênin và tham gia Đại hội Tours. Bốn mốc là trục kể, không liệt kê mọi nơi từng đi qua.

### Step 02 · Chuẩn bị tư tưởng và chính trị

ID: `vnr-p02-s02`. Gợi ý block: `text`. Thông qua báo chí, hoạt động quốc tế và lý luận, Nguyễn Ái Quốc truyền bá chủ nghĩa Mác–Lênin và quan điểm giải phóng dân tộc. Diễn giải quan hệ thuộc địa–chính quốc bằng lời, tránh trích dẫn dài không có xuất xứ.

### Step 03 · Xây dựng tổ chức

ID: `vnr-p02-s03`. Gợi ý block: `timeline`. Hội Việt Nam Cách mạng Thanh niên năm 1925, các lớp huấn luyện ở Quảng Châu, báo Thanh Niên và Đường Kách mệnh năm 1927 là những hình thức chuẩn bị cán bộ và tổ chức.

### Step 04 · Đưa lý luận vào phong trào

ID: `vnr-p02-s04`. Gợi ý block: `flow`. Phong trào vô sản hóa năm 1928 gắn cán bộ với môi trường công nhân. Kết luận: chuẩn bị tư tưởng, chính trị và tổ chức có quan hệ với nhau; không thu toàn bộ hành trình 1911–1929 vào riêng lớp học năm 1925.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 03 · Từ các tổ chức cộng sản đến một chính đảng

- ID/index: `vnr-p03` / `2`. Người/phần: I / Người 1.
- Mốc: 1929–02/1930. Nguồn: DOCX đoạn 053–059.
- Hình ảnh dự kiến: Ảnh hội nghị thường là tranh tái hiện: phải ghi đúng loại tư liệu.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Ba tổ chức trong năm 1929

ID: `vnr-p03-s01`. Gợi ý block: `timeline`. Giới thiệu Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn. Không chốt tháng thành lập tổ chức nào khi nguồn dùng khác nhau; xem audit trước khi điền ngày chi tiết.

### Step 02 · Hội nghị hợp nhất

ID: `vnr-p03-s02`. Gợi ý block: `text`. Nguyễn Ái Quốc chủ trì hội nghị đầu năm 1930 tại Hương Cảng. Đại biểu hai tổ chức tham dự; không viết rằng cả ba tổ chức đồng thời cùng dự hội nghị.

### Step 03 · Hoàn thành quá trình thống nhất

ID: `vnr-p03-s03`. Gợi ý block: `timeline`. Đảng Cộng sản Việt Nam ra đời và thông qua các văn kiện cơ bản; ngày 24/2/1930 Đông Dương Cộng sản Liên đoàn gia nhập. Phân biệt diễn biến hội nghị và ngày kỷ niệm 3/2.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 04 · Cương lĩnh đầu tiên: độc lập và tập hợp lực lượng

- ID/index: `vnr-p04` / `3`. Người/phần: I / Người 1.
- Mốc: 02/1930. Nguồn: DOCX đoạn 060–065.
- Hình ảnh dự kiến: Bản chụp Chánh cương/Sách lược cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Mục tiêu chiến lược

ID: `vnr-p04-s01`. Gợi ý block: `text`. Giới thiệu phương hướng của Cương lĩnh chính trị đầu tiên và quan hệ với mục tiêu lâu dài. Nếu dùng câu trích văn kiện, ghi rõ tên văn kiện, không biến khẩu hiệu hiện đại thành nguyên văn năm 1930.

### Step 02 · Nhiệm vụ trước mắt

ID: `vnr-p04-s02`. Gợi ý block: `flow`. Nhấn mạnh chống đế quốc, giành độc lập dân tộc; trình bày nhiệm vụ kinh tế và xã hội bằng 2–3 ý. Không hiểu đặt độc lập lên hàng đầu là phủ nhận mọi nhiệm vụ dân chủ.

### Step 03 · Lực lượng và vai trò lãnh đạo

ID: `vnr-p04-s03`. Gợi ý block: `text`. Công–nông là nền tảng, đồng thời tranh thủ và tập hợp các lực lượng yêu nước rộng rãi theo điều kiện cụ thể. Làm rõ cách nhìn lực lượng để so sánh với Luận cương tháng 10 sau này.

### Step 04 · Ý nghĩa của bước khởi đầu

ID: `vnr-p04-s04`. Gợi ý block: `flow`. Sự ra đời của Đảng gắn với việc xác lập đường lối và tổ chức lãnh đạo. Đặt đây là mốc đường lối thứ nhất, không chỉ một lễ kỷ niệm.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 05 · Cao trào cách mạng và Xô viết Nghệ–Tĩnh

- ID/index: `vnr-p05` / `4`. Người/phần: II / Người 2.
- Mốc: 1930–1931. Nguồn: DOCX đoạn 067–073.
- Hình ảnh dự kiến: Ảnh/tranh Xô viết Nghệ–Tĩnh và bản đồ địa bàn cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Bối cảnh và phát triển

ID: `vnr-p05-s01`. Gợi ý block: `timeline`. Khủng hoảng kinh tế, sự đàn áp và phong trào công–nông tạo bối cảnh cho cao trào. Chia nhịp đầu năm 1930, tháng 5–8 và đỉnh cao tháng 9.

### Step 02 · Chính quyền ở cơ sở

ID: `vnr-p05-s02`. Gợi ý block: `text`. Tại một số địa phương Nghệ An, Hà Tĩnh, tổ chức cách mạng và nông hội thực hiện chức năng quản lý đời sống. Không tô bản đồ như toàn bộ hai tỉnh đều đã được kiểm soát.

### Step 03 · Ý nghĩa và tổn thất

ID: `vnr-p05-s03`. Gợi ý block: `note`. Cao trào để lại kinh nghiệm về liên minh công–nông, tổ chức quần chúng và vai trò lãnh đạo; đồng thời bị đàn áp, chịu tổn thất lớn. Số thương vong cụ thể chỉ đưa vào khi đối chiếu nguồn.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 06 · Luận cương và sự khác biệt với Cương lĩnh

- ID/index: `vnr-p06` / `5`. Người/phần: II / Người 2.
- Mốc: 10/1930. Nguồn: DOCX đoạn 074–085.
- Hình ảnh dự kiến: Chân dung Trần Phú hoặc bản văn kiện, không dùng ảnh hội nghị không rõ nguồn.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Hội nghị Trung ương lần thứ nhất

ID: `vnr-p06-s01`. Gợi ý block: `timeline`. Giới thiệu Hội nghị tháng 10/1930, đổi tên Đảng và bầu Trần Phú làm Tổng Bí thư. Trên thẻ dùng tháng, không cần dải ngày nếu chưa đối chiếu giáo trình.

### Step 02 · Nội dung cơ bản

ID: `vnr-p06-s02`. Gợi ý block: `bullets`. Luận cương bàn nhiệm vụ phản đế và thổ địa, động lực công–nông, vai trò của Đảng và phương pháp cách mạng. Trình bày cả nội dung đóng góp trước khi nêu hạn chế.

### Step 03 · So sánh trên cùng tiêu chí

ID: `vnr-p06-s03`. Gợi ý block: `flow`. So sánh với Cương lĩnh tháng 2 theo nhiệm vụ ưu tiên, lực lượng và cách xác định mâu thuẫn. Dùng từng cặp ngắn trên thẻ, không thêm bảng so sánh fullscreen.

### Step 04 · Hạn chế và bài học nhận thức

ID: `vnr-p06-s04`. Gợi ý block: `note`. Theo bài nhóm, Luận cương nặng về đấu tranh giai cấp và chưa đánh giá đầy đủ khả năng tập hợp lực lượng dân tộc. Nêu đây là phân tích nội dung lịch sử, tránh chỉ gắn nhãn đúng/sai mà không giải thích.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 07 · Giữ tổ chức và đấu tranh trong nhà tù

- ID/index: `vnr-p07` / `6`. Người/phần: II / Người 2.
- Mốc: 1931–1934. Nguồn: DOCX đoạn 086–092.
- Hình ảnh dự kiến: Di tích Hỏa Lò/Côn Đảo hoặc báo tù cần bổ sung và chú thích niên đại.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Tổn thất sau cao trào

ID: `vnr-p07-s01`. Gợi ý block: `text`. Sự đàn áp gây tổn thất lớn cho hệ thống tổ chức. Kể quá trình giữ liên lạc và ý chí hoạt động, không biến thành danh sách dài tên người và ngày bị bắt.

### Step 02 · Nhà tù thành nơi học tập

ID: `vnr-p07-s02`. Gợi ý block: `image`. Tài liệu nhóm đề cập chi bộ, học tập lý luận và báo chí trong tù. Phân biệt ảnh di tích chụp ngày nay với ảnh tư liệu cùng thời.

### Step 03 · Giữ lực lượng, sửa sai

ID: `vnr-p07-s03`. Gợi ý block: `note`. Nêu việc phê phán sai lầm trong công tác tổ chức và ý nghĩa bảo vệ lực lượng. Các câu khẩu hiệu lịch sử phải có nguồn và bối cảnh, không làm thành tiêu đề cổ động của sản phẩm.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 08 · Khôi phục tổ chức và Đại hội I

- ID/index: `vnr-p08` / `7`. Người/phần: II / Người 2.
- Mốc: 1932–1935. Nguồn: DOCX đoạn 093–098.
- Hình ảnh dự kiến: Tư liệu Đại hội I/Ma Cao hoặc chân dung Lê Hồng Phong cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Chương trình hành động

ID: `vnr-p08-s01`. Gợi ý block: `timeline`. Năm 1932, Chương trình hành động đặt các nhiệm vụ khôi phục tổ chức và phong trào. Chỉ giữ mốc và mục tiêu, không nhầm với Cương lĩnh tháng 2/1930.

### Step 02 · Ban Chỉ huy ở ngoài

ID: `vnr-p08-s02`. Gợi ý block: `flow`. Đầu năm 1934, cơ quan chỉ đạo ở ngoài tham gia khôi phục hệ thống tổ chức và liên hệ phong trào. Phân biệt cơ cấu này với các tổ chức cộng sản năm 1929.

### Step 03 · Đại hội I và giới hạn

ID: `vnr-p08-s03`. Gợi ý block: `text`. Đại hội I tháng 3/1935 đánh dấu phục hồi tổ chức và đề ra nhiệm vụ trước mắt. Bài nhóm cũng đánh giá những hạn chế đường lối còn tồn tại; đây là cầu nối sang điều chỉnh năm 1936.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 09 · Từ bối cảnh chống phát xít đến sách lược mới

- ID/index: `vnr-p09` / `8`. Người/phần: III / Người 3.
- Mốc: 1935–1937. Nguồn: DOCX đoạn 099–117.
- Hình ảnh dự kiến: Báo chí/văn kiện 1936 và tư liệu Mặt trận cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Điều kiện quốc tế và trong nước

ID: `vnr-p09-s01`. Gợi ý block: `timeline`. Nguy cơ phát xít, Đại hội VII Quốc tế Cộng sản và thắng lợi Mặt trận Nhân dân Pháp tạo điều kiện mới. Không viết rằng nhờ thay đổi ở Pháp mà mọi quyền thuộc địa tự động được bảo đảm.

### Step 02 · Nhiệm vụ và hình thức đấu tranh

ID: `vnr-p09-s02`. Gợi ý block: `flow`. Đòi tự do, dân chủ, cơm áo, hòa bình; kết hợp công khai, hợp pháp với bí mật. Phân biệt mục tiêu chiến lược lâu dài với nhiệm vụ trước mắt.

### Step 03 · Chung quanh vấn đề chiến sách mới

ID: `vnr-p09-s03`. Gợi ý block: `text`. Văn kiện tháng 10/1936 thể hiện bước nhận thức linh hoạt về quan hệ giữa giải phóng dân tộc và nhiệm vụ ruộng đất. Tóm tắt lập luận trước rồi mới chọn một câu trích ngắn.

### Step 04 · Tập hợp quần chúng

ID: `vnr-p09-s04`. Gợi ý block: `timeline`. Phong trào Đông Dương Đại hội và dân nguyện mở rộng vận động quần chúng. Con số 600 ủy ban trong tài liệu chỉ đưa lên thẻ sau khi xác định thời điểm, địa bàn và nguồn.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 10 · Mặt trận dân chủ, báo chí và kinh nghiệm tổ chức

- ID/index: `vnr-p10` / `9`. Người/phần: III / Người 3.
- Mốc: 1937–1939. Nguồn: DOCX đoạn 118–127.
- Hình ảnh dự kiến: Ảnh mít tinh Đấu Xảo 1938 hoặc báo công khai cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Mở rộng mặt trận

ID: `vnr-p10-s01`. Gợi ý block: `timeline`. Phát triển chủ trương mặt trận và tổ chức quần chúng, đến Mặt trận Dân chủ Đông Dương năm 1938. Tránh gọi cùng một tên mặt trận cho toàn bộ giai đoạn 1936–1939.

### Step 02 · Nhiều hình thức đấu tranh

ID: `vnr-p10-s02`. Gợi ý block: `bullets`. Biểu tình, bãi công, báo chí và hoạt động nghị trường bổ sung cho nhau. Chọn một sự kiện tiêu biểu và giải thích ý nghĩa, không chỉ liệt kê tên báo.

### Step 03 · Văn hóa và tự phê bình

ID: `vnr-p10-s03`. Gợi ý block: `text`. Hội Truyền bá Quốc ngữ và tác phẩm Tự chỉ trích là hai ví dụ về hoạt động văn hóa/tư tưởng. Mốc Hội Truyền bá Quốc ngữ cần sửa theo audit, không dùng cuối năm 1937 từ DOCX.

### Step 04 · Tích lũy lực lượng và kinh nghiệm

ID: `vnr-p10-s04`. Gợi ý block: `note`. Cao trào để lại kinh nghiệm tổ chức, mặt trận và kết hợp hình thức đấu tranh; đến chiến tranh 1939, điều kiện thay đổi. Số 35.009 hội viên không phải tổng số người tham gia toàn phong trào và cần nguồn kèm mốc.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 11 · Chuyển hướng trong hoàn cảnh chiến tranh

- ID/index: `vnr-p11` / `10`. Người/phần: IV / Người 4.
- Mốc: 1939–1941. Nguồn: DOCX đoạn 128–141;154–158.
- Hình ảnh dự kiến: Poster Pháp–Nhật chỉ có thể dùng như minh họa; cần tư liệu Bắc Sơn/Nam Kỳ.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Chiến tranh và hai tầng áp bức

ID: `vnr-p11-s01`. Gợi ý block: `timeline`. Chiến tranh thế giới thứ hai bùng nổ; Nhật vào Đông Dương năm 1940 trong khi Pháp tiếp tục bộ máy cai trị. Diễn giải bối cảnh, không dùng ảnh minh họa hai binh sĩ như ảnh sự kiện.

### Step 02 · Hội nghị tháng 11/1939

ID: `vnr-p11-s02`. Gợi ý block: `text`. Đặt vấn đề giải phóng dân tộc ở vị trí cấp bách và điều chỉnh khẩu hiệu, tập hợp lực lượng. Giới thiệu đây là bước mở đầu chuyển hướng, chưa phải toàn bộ nội dung hoàn chỉnh năm 1941.

### Step 03 · Bước tiếp tháng 11/1940

ID: `vnr-p11-s03`. Gợi ý block: `note`. Tài liệu nhóm chỉ ra sự tiếp tục điều chỉnh và những điểm chưa dứt khoát trong quan hệ phản đế–thổ địa. Không vẽ ba hội nghị như ba lần lặp nguyên một nghị quyết.

### Step 04 · Những tiếng súng báo hiệu

ID: `vnr-p11-s04`. Gợi ý block: `timeline`. Bắc Sơn 27/9/1940, Nam Kỳ 23/11/1940, Đô Lương 13/1/1941. Nêu cả tinh thần đấu tranh và bài học điều kiện khởi nghĩa, không gom thành một cuộc tổng khởi nghĩa thắng lợi.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 12 · Hội nghị Trung ương 8: sáu nội dung trọng tâm

- ID/index: `vnr-p12` / `11`. Người/phần: IV / Người 4.
- Mốc: 05/1941. Nguồn: DOCX đoạn 142–153.
- Hình ảnh dự kiến: Tư liệu Pác Bó/Việt Minh: cần ảnh và nguồn phù hợp.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Mâu thuẫn cấp bách

ID: `vnr-p12-s01`. Gợi ý block: `text`. Hội nghị do Nguyễn Ái Quốc chủ trì trong hoàn cảnh dân tộc chịu ách Pháp–Nhật. Nhấn mạnh vấn đề sinh tồn dân tộc, không mở bằng một đoạn trích rất dài.

### Step 02 · Ưu tiên giải phóng dân tộc

ID: `vnr-p12-s02`. Gợi ý block: `flow`. Đặt giải phóng dân tộc lên hàng đầu và điều chỉnh nhiệm vụ ruộng đất cho phù hợp. Giải thích tạm gác khác với xóa bỏ vĩnh viễn một nhiệm vụ.

### Step 03 · Quyền dân tộc tự quyết

ID: `vnr-p12-s03`. Gợi ý block: `text`. Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương. Phân biệt chủ trương liên minh với việc áp một mô hình nhà nước duy nhất cho cả ba nước.

### Step 04 · Mặt trận Việt Minh

ID: `vnr-p12-s04`. Gợi ý block: `image`. Tập hợp rộng rãi các lực lượng yêu nước trong mặt trận và các đoàn thể cứu quốc. Nếu dùng biểu trưng hay văn kiện, cần đúng xuất xứ, không dùng poster hiện đại làm tài liệu gốc.

### Step 05 · Hình thức nhà nước dự kiến

ID: `vnr-p12-s05`. Gợi ý block: `text`. Nêu chủ trương nhà nước dân chủ cộng hòa của toàn dân tộc sau khi giành độc lập. Đây là nội dung để phân biệt với mô hình chính quyền Xô viết trong cao trào trước.

### Step 06 · Chuẩn bị khởi nghĩa

ID: `vnr-p12-s06`. Gợi ý block: `flow`. Chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm, đi từ từng phần tới tổng khởi nghĩa khi đủ điều kiện. Chốt bước hoàn chỉnh chuyển hướng bằng quan hệ nhiệm vụ–lực lượng–phương pháp.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 13 · Chuẩn bị lực lượng và căn cứ địa

- ID/index: `vnr-p13` / `12`. Người/phần: IV / Người 4.
- Mốc: 1941–1944. Nguồn: DOCX đoạn 159–171.
- Hình ảnh dự kiến: Ảnh Đội Việt Nam tuyên truyền giải phóng quân và tài liệu văn hóa cần bổ sung.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Xây dựng lực lượng chính trị

ID: `vnr-p13-s01`. Gợi ý block: `text`. Phát triển Việt Minh, đoàn thể cứu quốc, tuyên truyền và các hình thức tổ chức. Giải thích lực lượng chính trị là nền tảng quần chúng, không chỉ danh sách các cơ quan lãnh đạo.

### Step 02 · Văn hóa và trí thức

ID: `vnr-p13-s02`. Gợi ý block: `image`. Đề cương về văn hóa Việt Nam năm 1943, ba nguyên tắc dân tộc, khoa học, đại chúng và việc vận động trí thức. Ảnh bìa có chữ cần giữ màu/độ tương phản, không phủ sepia làm mất chữ.

### Step 03 · Căn cứ và hành lang liên lạc

ID: `vnr-p13-s03`. Gợi ý block: `flow`. Cao Bằng, Bắc Sơn–Võ Nhai và hướng Nam tiến liên kết lực lượng. Bản đồ cần ghi là sơ đồ khái quát, không tự dựng ranh giới kiểm soát như bản đồ quân sự xác thực.

### Step 04 · Đội quân ra đời

ID: `vnr-p13-s04`. Gợi ý block: `timeline`. Ngày 22/12/1944 thành lập Đội Việt Nam tuyên truyền giải phóng quân; Phai Khắt và Nà Ngần là các trận đầu. Không dùng ảnh Điện Biên Phủ hoặc thu vũ khí sau này chỉ vì có Võ Nguyên Giáp.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 14 · Kháng Nhật cứu nước và chuẩn bị tổng khởi nghĩa

- ID/index: `vnr-p14` / `13`. Người/phần: V / Người 5.
- Mốc: 03–08/1945. Nguồn: DOCX đoạn 172–195.
- Hình ảnh dự kiến: Chỉ thị 12/3, phá kho thóc, Tân Trào; ảnh hiện có phần lớn chưa xác minh.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Đảo chính và chỉ thị

ID: `vnr-p14-s01`. Gợi ý block: `timeline`. Nhật đảo chính Pháp 9/3/1945; Chỉ thị 12/3 xác định kẻ thù trực tiếp và nhiệm vụ mới. Tách sự kiện thay đổi tình hình với quyết định chỉ đạo sau đó.

### Step 02 · Cao trào và dân sinh

ID: `vnr-p14-s02`. Gợi ý block: `text`. Khởi nghĩa từng phần, chiến tranh du kích cục bộ và phong trào phá kho thóc giải quyết nạn đói. Ảnh đói trong kho hiện có có thể là cảnh phim, không chú thích là ảnh chụp lịch sử khi chưa xác minh.

### Step 03 · Thống nhất lực lượng, xây căn cứ

ID: `vnr-p14-s03`. Gợi ý block: `timeline`. Hội nghị quân sự cách mạng Bắc Kỳ tháng 4/1945, thống nhất lực lượng tháng 5 và Khu giải phóng tháng 6 là các mốc khác nhau. Không dùng ngày 15/5 làm ngày họp hội nghị quân sự như DOCX.

### Step 04 · Nhận định thời cơ

ID: `vnr-p14-s04`. Gợi ý block: `flow`. Sự đầu hàng của Nhật, lực lượng đã chuẩn bị và nguy cơ quân Đồng minh vào tạo một tình thế phải hành động kịp thời. Không giải thích thắng lợi chỉ do khoảng trống quyền lực khách quan.

### Step 05 · Quyết định tại Tân Trào

ID: `vnr-p14-s05`. Gợi ý block: `timeline`. Quân lệnh số 1, Hội nghị toàn quốc của Đảng và Quốc dân Đại hội có vai trò khác nhau. Nêu tập trung, thống nhất, kịp thời; giữ rõ chủ thể và thứ tự sự kiện.

**Chuyển tiếp:** mở sang tranh kế sau khi hoàn tất lời nói và nét viết; lời dẫn nối bằng vấn đề vừa đặt ra, không đọc lại nguyên tiêu đề.

## Tranh 15 · Giành chính quyền, độc lập và bài học đường lối

- ID/index: `vnr-p15` / `14`. Người/phần: V / Người 5.
- Mốc: 08–09/1945. Nguồn: DOCX đoạn 196–219.
- Hình ảnh dự kiến: Ảnh lễ đài 2/9 hiện có là ứng viên; cần xác minh caption.
- Mục tiêu người học: nhận ra quan hệ giữa bối cảnh, chủ trương và kết quả của chặng này.

### Step 01 · Làn sóng giành chính quyền

ID: `vnr-p15-s01`. Gợi ý block: `timeline`. Hà Nội 19/8, Huế 23/8 và Sài Gòn 25/8 là các mốc tiêu biểu. Không đồng nhất ba thành phố này với toàn bộ diễn biến các địa phương.

### Step 02 · Từ thắng lợi đến nhà nước độc lập

ID: `vnr-p15-s02`. Gợi ý block: `timeline`. Chính phủ lâm thời, sự thoái vị của Bảo Đại và Tuyên ngôn 2/9 nối quá trình giành chính quyền với xác lập nhà nước. Dùng ảnh lễ đài có nguồn, không lấy ảnh khác địa điểm làm Ba Đình.

### Step 03 · Tính chất và ý nghĩa

ID: `vnr-p15-s03`. Gợi ý block: `text`. Theo bài nhóm, đây là cách mạng giải phóng dân tộc mang tính chất dân chủ mới; cần phân biệt những nhiệm vụ đã thực hiện với các vấn đề xã hội còn tiếp tục. Không ghi rằng mọi nhiệm vụ ruộng đất đã hoàn tất.

### Step 04 · Bốn bài học

ID: `vnr-p15-s04`. Gợi ý block: `bullets`. Bài học về chỉ đạo chiến lược; xây dựng lực lượng; phương pháp cách mạng và thời cơ; xây dựng Đảng gắn với quần chúng. Diễn giải ngắn bằng sự kiện vừa đi qua, không chỉ đọc tên bốn mục.

### Step 05 · Năm mốc chuyển dịch đường lối

ID: `vnr-p15-s05`. Gợi ý block: `flow`. 1930 Cương lĩnh → 10/1930 và khôi phục → 1936 đổi mới sách lược → 1939–1941 chuyển hướng → 1945 chớp thời cơ. Chốt quan hệ mục tiêu–lực lượng–phương pháp, không dùng hình xoắn ốc như một chứng minh lịch sử tự động.

**Kết thúc:** trở lại năm mốc đường lối, hiện hoàn tất; không tự lặp tour hay mở quiz.

