# Planning voice thuyết trình VNR202

Chỉ là kế hoạch và mẫu lời nói chưa duyệt. Luồng mode thuyết trình chung nằm trong context base. Bản VNR202 dự kiến **75 clip: 15 lời dẫn tranh + 60 lời nói step**, không bao gồm âm chuông, vút, bước chân và tiếng bút.

## Kịch bản và thứ tự

Các ID chuẩn nằm trong `content-index.json`; nội dung ý nghĩa tại `01-content-plan.md`. Ví dụ file sau này:

```text
audio/presentation/vnr-p01/intro.mp3
audio/presentation/vnr-p01/s01.mp3
audio/presentation/vnr-p01/s02.mp3
...
audio/presentation/vnr-p12/s06.mp3
audio/presentation/vnr-p15/s05.mp3
```

Camera tới tranh rồi phát lời dẫn. Mở bảng ghim, đợi tới thẻ rồi nói nội dung thẻ; nói xong và viết xong mới sang thẻ kế. Hết tranh thì đóng bảng và đi tới tranh kế. Pause/skip/thoát phải hủy tác vụ cũ, không để clip ended hoặc timer cũ tự chạy tiếp.

Người 1 phụ trách tranh 01–04; người 2: 05–08; người 3: 09–10; người 4: 11–13; người 5: 14–15. Đây là phân công nội dung gốc, không yêu cầu TTS phải dùng năm giọng khác nhau.

## Quy tắc viết lời nói

- Mỗi lời dẫn tranh nói một vấn đề dẫn vào, không đọc lại cả title/subtitle. Mỗi step là một đoạn tự nhiên khoảng 2–4 câu, chỉ giữ một ý chính. Độ dài điều chỉnh sau khi nghe, không ấn định timer bằng số chữ.
- Dùng tên đầy đủ trước khi viết tắt; chuyển TW, QTCS, các số La Mã sang cách đọc tự nhiên trong input TTS. Ngày tháng viết bằng lời nếu dịch vụ đọc ký hiệu chưa tốt.
- Giữ chính xác tên văn kiện và người; tên Pháp/địa danh cần nghe thử, không sửa spelling trên giao diện chỉ để TTS đọc dễ.
- Không đọc nhãn block, ID, chú thích người biên tập hoặc một bảng số liệu dài. Nếu cần trích nguyên văn, kiểm tra nguồn và dùng đoạn ngắn có giới thiệu.
- Điểm nhấn năm 1930, 1936, 1939–1941 và 1945 phải có phần giải thích sự điều chỉnh đường lối, không chỉ có tiếng đọc năm.

## Mẫu bản thu thử cho tranh 01

### Lời dẫn tranh

Trước khi đi vào sự ra đời của Đảng, chúng ta cùng nhìn lại bối cảnh Việt Nam cuối thế kỷ mười chín, đầu thế kỷ hai mươi. Vấn đề đặt ra không chỉ là mong muốn độc lập, mà còn là tìm được con đường và lực lượng có thể thực hiện mong muốn ấy.

### Step 01 — Thế giới thay đổi

Sự mở rộng của chủ nghĩa đế quốc làm vấn đề thuộc địa trở nên gay gắt. Trong khi đó, Cách mạng Tháng Mười Nga và sự ra đời của Quốc tế Cộng sản đem đến những ảnh hưởng mới đối với phong trào giải phóng dân tộc. Đó là bối cảnh quốc tế để chúng ta hiểu các chuyển biến ở Việt Nam.

### Step 02 — Xã hội thuộc địa nửa phong kiến

Hai cuộc khai thác thuộc địa làm thay đổi đời sống kinh tế và cơ cấu xã hội Việt Nam. Chính sách cai trị và bóc lột làm mâu thuẫn dân tộc ngày càng sâu sắc. Bức tranh này vì vậy cần được nhìn từ cả hoàn cảnh kinh tế, xã hội lẫn yêu cầu độc lập.

### Step 03 — Các khuynh hướng yêu nước

Nhiều phong trào yêu nước đã diễn ra với những cách tiếp cận khác nhau, từ đấu tranh vũ trang đến vận động cải cách. Những phong trào ấy cho thấy tinh thần yêu nước mạnh mẽ, đồng thời bộc lộ giới hạn về đường lối và tổ chức trong điều kiện lịch sử lúc bấy giờ.

### Step 04 — Vấn đề đặt ra

Theo cách phân tích trong bài thuyết trình, yêu cầu cấp thiết là tìm một đường lối phù hợp, một tổ chức lãnh đạo và phương pháp tập hợp lực lượng có hiệu quả. Từ vấn đề đó, chúng ta chuyển sang hành trình tìm đường cứu nước và quá trình chuẩn bị của Nguyễn Ái Quốc.

Mẫu trên là pilot để nghe giọng/tốc độ, không phải tất cả 75 đoạn đã được viết xong. Phải duyệt những số liệu và tên riêng trước khi sinh hàng loạt file.

## Câu nối giữa năm phần — bản nháp

- Sau tranh 04: Đường lối đã được xác lập; giai đoạn tiếp theo cho thấy quá trình tổ chức quần chúng, những thử thách và cả những điều chỉnh trong nhận thức.
- Sau tranh 08: Sự phục hồi tổ chức đặt cơ sở để Đảng điều chỉnh sách lược trước tình hình mới, mở ra phong trào dân chủ những năm ba mươi.
- Sau tranh 10: Khi chiến tranh thế giới bùng nổ, điều kiện hoạt động thay đổi; vấn đề giải phóng dân tộc được đặt ra ngày càng cấp bách.
- Sau tranh 13: Lực lượng và căn cứ được chuẩn bị qua nhiều năm. Năm một nghìn chín trăm bốn mươi lăm đặt ra yêu cầu nhận định và hành động đúng thời cơ.
- Sau tranh 15: Nhìn lại năm mốc đường lối cho thấy mối liên hệ giữa mục tiêu, tập hợp lực lượng, phương pháp và thời điểm hành động. Đây là trục tổng kết của bài, không chỉ là chuỗi ngày cần ghi nhớ.

## Generate trước, phát sau

Endpoint người dùng cung cấp: POST `http://localhost:5050/v1/audio/speech`, model `tts-1`, voice `vi-VN-NamMinhNeural`, response_format `mp3`; input là đoạn nói đã duyệt. Khóa Bearer lấy từ cấu hình local/biến môi trường của công cụ generate, không đưa khóa hoặc lời gọi TTS vào trình duyệt.

Pipeline đề xuất: duyệt script → generate local → kiểm tra HTTP/file/giải mã → nghe thử → tạo manifest clip kèm ID/hash nội dung/model/voice → triển khai cùng trang. Chỉ tạo lại clip đổi nội dung hoặc bị thiếu/hỏng. Tắt service local rồi mở bài kiểm tra: bài phải phát được hoàn toàn từ MP3 có sẵn.

Runtime chỉ preload clip hiện tại và clip kế, xử lý play bị chặn và file lỗi bằng trạng thái rõ ràng, không tự gọi TTS để chữa thiếu file. Giảm âm bút/vút dưới lời nói, ngừng tiếng bút khi pause. Tắt tiếng không được coi như clip ended; tránh nhảy step tức thì hoặc chờ mãi.

Nghiệm thu riêng: 75 đường dẫn theo manifest khớp tranh/step, không phát chồng giọng, clip cũ không sống lại sau skip/thoát, chuyển bước theo ended và writer.done, không có request tới localhost:5050 trong phiên tham quan.

## Tài liệu triển khai tiếp theo

Đọc [06-presentation-implementation-plan.md](06-presentation-implementation-plan.md) cho luồng controller, scene adapter, generate/check MP3, UI và kiểm thử. [Danh mục 75 clip](presentation-clip-index.json) là chỉ mục planning theo ID thật, không phải manifest đã có file audio. Nội dung pilot ở tài liệu này vẫn cần duyệt và mở rộng thành đủ 75 đoạn trước khi generate.
