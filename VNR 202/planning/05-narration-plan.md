# Planning voice VNR202 · revision 2

Trạng thái: kế hoạch voice, chưa có MP3. Tour/camera/phụ đề đã chạy bằng Narrator mô phỏng từ bản tham khảo; xem 06-presentation-implementation-plan.md. Dùng 10 tác phẩm và 38 thẻ hiện hành, **48 clip: 10 lời dẫn + 38 lời nói step**. Chỉ mục đúng ID ở [presentation-clip-index.json](presentation-clip-index.json). Bản pilot revision 1 tại archive/15-paintings không còn khớp nội dung; không đưa vào batch mới.

## Viết lời nói

Một lời dẫn gợi vấn đề trước mỗi tranh, một đoạn nói khoảng 2–4 câu cho mỗi thẻ. Nội dung mở rộng luận điểm, không đọc từng nhãn UI, ID, nguồn kỹ thuật hoặc mô tả lại điều ảnh thể hiện rõ. Nghe thử để điều chỉnh tốc độ và độ dài; không đồng bộ bằng số chữ.

Giữ các điểm nhấn: sự chuẩn bị trước 1930; Cương lĩnh và Luận cương; điều chỉnh sách lược 1936; chuyển hướng 1939–1941; lực lượng, thời cơ và tổng khởi nghĩa 1945. Bám [audit nguồn](04-source-audit.md); không gọi tranh tái hiện là ảnh chụp hoặc ảnh Pác Bó hiện đại là ảnh năm 1941.

Viết tên đầy đủ trước viết tắt; kiểm tra cách đọc Nguyễn Ái Quốc, Hương Cảng, Phai Khắt, Nà Ngần. Input TTS có thể viết ngày tháng bằng lời; giao diện giữ ký hiệu gọn. Giữ chính xác tên văn kiện, không sửa chính tả UI để chiều giọng đọc.

## Pilot mới · tranh 01

Lời dẫn: Trước năm một nghìn chín trăm ba mươi, yêu cầu độc lập đặt ra một câu hỏi lớn: cần con đường nào và lực lượng nào để đi tới thắng lợi? Chặng đầu nhìn vào quá trình Nguyễn Ái Quốc tìm đường và chuẩn bị cho một tổ chức lãnh đạo mới.

- s01 — Bài toán độc lập: Các phong trào yêu nước cho thấy tinh thần đấu tranh bền bỉ. Tuy nhiên, yêu cầu độc lập chưa gặp được đường lối và tổ chức đủ sức đưa cuộc đấu tranh tới thắng lợi. Đó là vấn đề đặt ra cho thế hệ tiếp theo.
- s02 — Bước ngoặt năm 1920: Từ hành trình ra đi năm một nghìn chín trăm mười một đến Đại hội Tours, Nguyễn Ái Quốc từng bước xác định con đường cứu nước. Việc tiếp cận Luận cương của Lênin và tham gia Đại hội Tours đánh dấu một chuyển biến trong nhận thức và hoạt động cách mạng.
- s03 — Chuẩn bị một lực lượng mới: Báo chí, đào tạo cán bộ và tổ chức Thanh niên đưa lý luận vào hoạt động thực tiễn. Đường Kách mệnh và phong trào vô sản hóa góp phần chuẩn bị tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.
- s04 — Gắn lý luận với phong trào: Quá trình chuẩn bị không dừng ở việc lựa chọn tư tưởng. Nó gắn lý luận với những người trực tiếp hoạt động trong phong trào, tạo điều kiện cho bước thống nhất tổ chức vào đầu năm một nghìn chín trăm ba mươi.

Đây là pilot chưa duyệt, cần nghe thử; chưa phải 48 kịch bản hoàn chỉnh. Revision 2 đổi nghĩa nhiều ID, phải viết lại kịch bản từ dữ liệu hiện hành trước khi generate.

## Generate trước, phát sau

Endpoint người dùng cung cấp: POST `http://localhost:5050/v1/audio/speech`, model `tts-1`, voice `vi-VN-NamMinhNeural`, response_format `mp3`; input là đoạn nói đã duyệt. Bearer key lấy từ biến môi trường/cấu hình local của công cụ, không ghi vào frontend.

Pipeline: duyệt script → generate local → kiểm tra status, file/giải mã → nghe thử → sinh manifest có revision, ID, hash input, model, voice → triển khai MP3 cùng trang. Chỉ tạo lại nội dung thay đổi hoặc file thiếu/hỏng. Không phát sinh request TTS trong phiên tham quan; tắt service local vẫn nghe được toàn bộ bài.

Camera tới tranh rồi nói lời dẫn; mở bảng, đợi tới thẻ rồi phát clip thẻ. Chờ audio ended và writer.done rồi chuyển. Runtime giữ clip hiện tại + clip kế, dùng HTMLAudioElement với src relative để hỗ trợ file://. Thiếu MP3 báo trạng thái và cho khám phá tự do, không tự gọi TTS.

Pause/skip/thoát phải hủy operation cũ và ngăn callback ended trễ. Giảm SFX dưới voice; tắt tiếng không được coi như audio ended. Kế hoạch kỹ thuật và các cổng nghiệm thu ở [06-presentation-implementation-plan.md](06-presentation-implementation-plan.md).
