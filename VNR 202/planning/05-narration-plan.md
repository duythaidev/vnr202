# Planning voice VNR202 · revision 3 (bản 3 ý chính)

Trạng thái: **đã có bản nháp đủ 48 lời nói** (10 lời dẫn + 38 step, trung bình 52 từ, 30–65 từ) trong [presentation-script.json](presentation-script.json) và trường `intro`/`narration` của `museum-3d-single-03.js`; **chưa duyệt, chưa có MP3**. Phụ đề tour giờ hiện đúng các lời này. Nội dung thẻ đã viết lại theo bản 3 ý chính: mỗi thẻ có một câu ý chính (khối `thesis`) và các ý phụ từ bài chi tiết. Voice phải bám cấu trúc đó. Tour, camera và phụ đề hiện chạy bằng Narrator mô phỏng (đồng hồ, không có tiếng); xem [06-presentation-implementation-plan.md](06-presentation-implementation-plan.md). Danh mục **48 clip = 10 lời dẫn + 38 lời nói step** ở [presentation-clip-index.json](presentation-clip-index.json), đã cập nhật tiêu đề và `thesis` theo dữ liệu hiện hành. Kịch bản revision 1/2 cũ (pilot tranh 01 với các step "Bài toán độc lập", "Bước ngoặt năm 1920"…) **không còn khớp**, bỏ.

## Cấu trúc nói theo ý chính

| Nhóm | Tranh | Vai trò trong lời nói |
|---|---|---|
| Mở đầu | 01–02 | Bối cảnh và sự ra đời của Đảng; dẫn vào ba câu hỏi chính. |
| Ý chính 1 · 1930–1935 | 03–04 | Cao trào 1930–1931, Xô viết Nghệ–Tĩnh; Luận cương 10/1930 và khôi phục 1932–1935. |
| Ý chính 2 · 1936–1939 | 05 | Phong trào dân chủ và bước đột phá nhận thức. |
| Ý chính 3 · 1939–1945 | 06–09 | Chuyển hướng chiến lược, chuẩn bị lực lượng, kháng Nhật cứu nước, Tổng khởi nghĩa. |
| Kết | 10 | Tuyên ngôn Độc lập, tính chất, bốn bài học, năm cột mốc. |

**Công thức mỗi clip step:** câu ý chính trước (diễn đạt lại `thesis`, không đọc nguyên văn), sau đó 1–2 chứng cứ quan trọng nhất từ ý phụ trên thẻ (mốc, nhân vật, con số). Không đọc hết từng ô của thẻ; chữ trên thẻ đã cho người xem đọc. Lời dẫn tranh chỉ đặt một câu hỏi hoặc nêu ý chính mà tranh trả lời.

## Nhịp nói: voice đọc nhanh nên mọi thứ phải gọn

Voice `vi-VN-NamMinhNeural` đọc nhanh, khoảng 3,5 từ mỗi giây (cần đo thật sau lần generate đầu). Vì vậy:

- Lời dẫn tranh: 25–35 từ (khoảng 8–10 giây). Lời nói step: 40–60 từ (khoảng 12–17 giây), tối đa 3 câu ngắn. Không dùng câu dài nhiều vế vì giọng nhanh sẽ khó nghe.
- Mỗi clip một ý chính; số liệu nhiều thì chọn 1–2 số, không liệt kê cả dãy.
- Ngày tháng viết bằng chữ trong input TTS ("tháng chín năm một nghìn chín trăm bốn mươi"); giao diện giữ ký hiệu gọn.
- Bút viết và camera phải theo kịp lời nói (xem mục Đồng bộ ở file 06). Hiện chế độ thuyết trình mặc định chạy 1,25× và đồng hồ mô phỏng tính 3,4 từ mỗi giây; khi có MP3 thì `ended` mới là tín hiệu thật.
- Viết tên đầy đủ trước viết tắt; kiểm tra cách đọc Nguyễn Ái Quốc, Hương Cảng, Phai Khắt, Nà Ngần, Pốtxđam, Hirôsima, Béclin. Giữ chính xác tên văn kiện, không sửa chính tả giao diện để chiều giọng đọc.
- Bám [audit nguồn](04-source-audit.md): giữ phân biệt hai tổ chức dự hội nghị đầu 1930 với Liên đoàn gia nhập sau, Hội truyền bá quốc ngữ 1938, hội nghị quân sự 4/1945 với hợp nhất lực lượng 5/1945. Không gọi tranh tái hiện là ảnh chụp, không gọi ảnh Pác Bó hiện đại là ảnh năm 1941. Tránh số thương vong chưa thống nhất.

## Lời dẫn 10 tranh (bản nháp, cần nghe thử)

1. Trước năm một nghìn chín trăm ba mươi, dân tộc ta đã có lòng yêu nước nhưng chưa có đường lối đúng. Nguyễn Ái Quốc tìm con đường ấy như thế nào?
2. Từ ba tổ chức cộng sản riêng rẽ năm một nghìn chín trăm hai mươi chín, Đảng Cộng sản Việt Nam ra đời với một cương lĩnh đặt độc lập dân tộc lên hàng đầu.
3. Ý chính thứ nhất: cao trào cách mạng một nghìn chín trăm ba mươi, một nghìn chín trăm ba mươi mốt. Đảng vừa ra đời đã đối mặt với khủng hoảng và khủng bố, và Xô viết Nghệ Tĩnh là đỉnh cao.
4. Luận cương tháng mười năm một nghìn chín trăm ba mươi khác Cương lĩnh ở đâu? Và Đảng khôi phục tổ chức thế nào để tới Đại hội thứ nhất năm một nghìn chín trăm ba mươi lăm?
5. Ý chính thứ hai: giai đoạn một nghìn chín trăm ba mươi sáu đến ba mươi chín. Trước nguy cơ phát xít, Đảng điều chỉnh chiến lược, đòi dân chủ, cơm áo, hòa bình.
6. Ý chính thứ ba: từ năm một nghìn chín trăm ba mươi chín, Đảng chuyển hướng chiến lược, đặt giải phóng dân tộc lên trên hết, qua ba hội nghị Trung ương.
7. Chuyển hướng rồi thì phải chuẩn bị lực lượng: từ những tiếng súng đầu tiên năm một nghìn chín trăm bốn mươi đến đội quân giải phóng cuối năm một nghìn chín trăm bốn mươi bốn.
8. Đêm chín tháng ba năm một nghìn chín trăm bốn mươi lăm, Nhật đảo chính Pháp. Đảng phản ứng ngay bằng chỉ thị ngày mười hai tháng ba và phát động cao trào kháng Nhật cứu nước.
9. Tháng tám năm một nghìn chín trăm bốn mươi lăm, thời cơ chỉ kéo dài khoảng nửa tháng. Đảng đã nắm bắt thế nào để giành chính quyền trong cả nước?
10. Độc lập, rồi bài học: cách mạng ấy mang tính chất gì, để lại bốn bài học nào, và đường lối đã chuyển dịch qua năm cột mốc ra sao?

## Mẫu tranh 06 (đã nằm trong bản nháp đủ 48 lời) "Chuyển hướng chiến lược" (Ý chính 3)

Chưa duyệt, cần nghe thử. Đây là mẫu độ dài và cách viết cho 4 step còn lại của các tranh.

- s01 — Chiến tranh và “một cổ hai tròng”: Chiến tranh thế giới thứ hai đặt nhân dân Đông Dương dưới hai tầng áp bức Pháp và Nhật. Tháng chín năm một nghìn chín trăm ba mươi chín, Pháp cấm tuyên truyền cộng sản; một năm sau, Nhật vào Đông Dương. Đảng rút vào bí mật và xác định: hoàn cảnh sẽ tiến đến vấn đề dân tộc giải phóng.
- s02 — Ba bước chuyển hướng chiến lược: Sự chuyển hướng đi qua ba hội nghị. Trung ương sáu, tháng mười một năm một nghìn chín trăm ba mươi chín, đặt giải phóng dân tộc lên tối cao. Trung ương bảy còn chưa dứt khoát. Trung ương tám, tháng năm một nghìn chín trăm bốn mươi mốt, do Nguyễn Ái Quốc chủ trì ở Cao Bằng, hoàn chỉnh triệt để.
- s03 — Bốn nội dung chuyển hướng cốt lõi: Hội nghị Trung ương tám chốt bốn nội dung: đặt giải phóng dân tộc lên hàng đầu; tạm gác cách mạng ruộng đất; lập Mặt trận Việt Minh; và coi khởi nghĩa vũ trang là nhiệm vụ trung tâm, đi từ khởi nghĩa từng phần tiến lên tổng khởi nghĩa.
- s04 — Việt Minh và nhà nước của toàn dân: Việt Minh tập hợp mọi người yêu nước, từ thợ thuyền đến địa chủ và tư bản bản xứ. Nhà nước tương lai là Việt Nam Dân chủ Cộng hòa, của toàn dân tộc, không phải chính quyền Xôviết. Chuyển hướng này khắc phục hạn chế của Luận cương và phát triển Cương lĩnh đầu tiên.

Các tranh còn lại đã viết theo cùng công thức. Cần nghe thử, rút bớt 4 step hơi dài (p01-s02, p04-s04, p05-s04, p10-s04, 63–65 từ) nếu giọng đọc dài quá. Sửa lời thì sửa cả `museum-3d-single-03.js` và `presentation-script.json`.

## Generate trước, phát sau

Endpoint người dùng cung cấp: POST `http://localhost:5050/v1/audio/speech`, model `tts-1`, voice `vi-VN-NamMinhNeural`, response_format `mp3`; input là đoạn nói đã duyệt. Bearer key lấy từ biến môi trường/cấu hình local của công cụ, không ghi vào frontend.

Pipeline: duyệt script → generate local → kiểm tra status, file/giải mã → **đo thời lượng thật từng clip** → nghe thử → sinh manifest có revision, ID, hash input, model, voice, `duration` → triển khai MP3 cùng trang. Chỉ tạo lại nội dung thay đổi hoặc file thiếu/hỏng. Không phát sinh request TTS trong phiên tham quan; tắt service local vẫn nghe được toàn bộ bài. Nội dung thẻ đã đổi nên **không dùng lại audio hay hash của revision 2**.

Camera tới tranh rồi nói lời dẫn; mở bảng, đợi tới thẻ rồi phát clip thẻ. Chờ audio `ended` và `writer.done` rồi chuyển. Runtime giữ clip hiện tại + clip kế, dùng HTMLAudioElement với src relative để hỗ trợ file://. Thiếu MP3 báo trạng thái và cho khám phá tự do, không tự gọi TTS.

Pause/skip/thoát phải hủy operation cũ và ngăn callback `ended` trễ. Giảm SFX dưới voice; tắt tiếng không được coi như audio ended.
