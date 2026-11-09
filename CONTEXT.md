# Context: hai trang vnr202

Tất cả đường dẫn dưới đây nằm trong cùng thư mục `vnr202/`. Hai trang HTML là điểm vào độc lập; CSS và JavaScript được tách nguyên nội dung từ HTML tương ứng.

## Tổ chức base và hai bản môn học

Thư mục chứa toàn bộ các bản là `E:\Web\mln131\vnr202` (thư mục hiện tại). Hai thư mục môn học cùng nằm trực tiếp bên trong thư mục này:

- `VNR 202/`: bản để triển khai nội dung môn VNR 202; mở `VNR 202/museum-3d-single.html`.
- `MLN 131/`: bản để triển khai nội dung môn MLN 131; mở `MLN 131/museum-3d-single.html`.
- Các file HTML/CSS/JS/MP3 ở ngay thư mục cha tiếp tục là **base** hiện tại, được giữ lại làm nguồn tham khảo.

Hai bản môn học khởi đầu từ cùng base, gồm cả intro, đồ họa, âm thanh và trang tham khảo. Mỗi bản có tài nguyên riêng để chạy độc lập. Chúng chưa có nội dung môn học mới: bản MLN 131 hiện vẫn chứa dữ liệu/nhãn VNR202 kế thừa từ base, cần thay khi biên soạn. Khác biệt dự kiến chủ yếu nằm ở nội dung tranh và step; giữ khung trải nghiệm tương đồng.

Khi làm nội dung môn nào, sửa trong thư mục môn đó; đọc `CONTEXT.md` ngay trong thư mục môn trước. Bản sao không tự đồng bộ: sửa base không tự cập nhật hai môn, sửa một môn không tác động môn còn lại. Kế hoạch thuyết trình bên dưới dùng chung về hướng thiết kế; kịch bản và MP3 sau này thuộc từng môn.

## Bảo tàng 3D

- `museum-3d-single.html`: cấu trúc trang, intro và giao diện bảo tàng.
- `museum-3d-single.css`: kiểu dáng của trang bảo tàng.
- `museum-3d-single-01.js`: tiện ích hiệu ứng chung, màu sắc và hậu kỳ.
- `museum-3d-single-02.js`: dữ liệu 15 bức tranh (`MUSEUM_PIECES`), gồm tiêu đề, ảnh, và hotspot.
- `museum-3d-single-03.js`: dữ liệu nội dung bảng ghim (`STORY_DATA`) cho từng tranh.
- `museum-3d-single-04.js`: tạo texture cho không gian bảo tàng.
- `museum-3d-single-05.js`: dựng cảnh bảo tàng 3D, ánh sáng và chất liệu.
- `museum-3d-single-06.js`: tạo texture giấy và nền bảng ghim.
- `museum-3d-single-07.js`: bố trí và hiệu ứng viết nội dung trên thẻ giấy.
- `museum-3d-single-08.js`: dựng và điều khiển cảnh bảng ghim 3D.
- `museum-3d-single-09.js`: điều khiển bảo tàng, HUD, âm thanh và vòng lặp.

Các script được loader trong `museum-intro.js` tải theo thứ tự số sau các thư viện Three.js và chia sẻ biến toàn cục. Giữ thứ tự này khi chỉnh sửa. Một số comment trong mã còn nhắc tên file cũ như `js/story-data.js`; vị trí thực tế là các file được liệt kê ở đây.

## Trang tham khảo intro và âm thanh

- `tham-khao-intro-sound.html`: cấu trúc và nội dung trang.
- `tham-khao-intro-sound.css`: kiểu dáng của trang.
- `tham-khao-intro-sound.js`: logic tương tác và âm thanh của trang.

Cả hai trang tải Tailwind và phông chữ từ CDN; trang bảo tàng còn tải Three.js và các thành phần hậu kỳ từ CDN. Giữ các file tách ra cùng thư mục với HTML để đường dẫn tương đối hoạt động.

## Chế độ đồ họa

Nút `graphicsQualityToggle` xuất hiện trong cả bảo tàng và bảng ghim. `GraphicsQuality` trong `museum-3d-single-01.js` quản lý hai mức `high` / `low`, lưu lựa chọn tại localStorage (`vnr202-graphics-quality`) và cập nhật các renderer đã khởi tạo ngay khi đổi. Mặc định thấp trên thiết bị di động / màn hình hẹp, cao trên desktop.

Mức thấp giới hạn pixel ratio ở 1, giữ khử răng cưa MSAA 2× (mức cao: 4×), tắt bóng đổ, bloom, motion blur và grain. Phản chiếu sàn được ẩn trong `museum-3d-single-05.js`; shader sàn cũng bỏ đóng góp phản chiếu. Pass chỉnh màu được giữ để nội dung vẫn sáng và đọc được. Mức cao khôi phục cấu hình hiệu ứng; giới hạn phần cứng có sẵn cho thiết bị di động vẫn áp dụng.

## Intro, tải cảnh và âm thanh

- `museum-intro.css`: giao diện intro độc lập Tailwind / WebGL, chủ đề phòng trưng bày giấy ngà và ôliu, đáp ứng mobile và reduced motion.
- `museum-intro.js`: `MuseumIntro` hiển thị trước, đợi hai khung hình rồi tải phông chữ, Tailwind, Three.js và các script theo danh sách `sources`. Tiến độ dựa trên các script đã tải và bước dựng cảnh; không phải phần trăm tải ảnh. Lỗi mạng / khởi tạo hiện nút tải lại. `MuseumSound` dùng chuông nhiều bồi âm và tiếng vút stereo 3,8 giây theo file tham khảo (bandpass + lowpass + sub-air + panner + compressor). Gain tổng là 1, có limiter; hover/click dùng tiếng vút ngắn với buffer chung, giới hạn tần suất âm hover và nút tắt chung. Âm thanh chỉ được kích hoạt sau thao tác người dùng; lưu tùy chọn `vnr202-sound`.
- `MuseumApp.prepare()` trong `museum-3d-single-09.js`: dựng và render khung hình đầu tiên sau intro đã xuất hiện. `MuseumApp.start()`: chạy vòng lặp, xử lý deep link `?board=...&step=...` sau khi người dùng vào bảo tàng. Không còn khởi tạo trực tiếp bằng sự kiện window load.

`#museumApp` được đặt inert và ẩn khỏi cây accessibility trong khi intro còn mở. Người dùng bấm Bắt đầu một lần để mở khóa âm thanh. Timeline hiện Xin chào tất cả các bạn → lời dẫn bảo tàng (mỗi câu 2,2 giây, chuyển 0,8 giây), sau đó là bước Không gian lịch sử đang mở… có tiếng ding thứ ba. Sau timeline và khi dựng cảnh/render đầu tiên hoàn tất, tiếng vút 3,8 giây tự chuyển vào bảo tàng, reveal tại đỉnh 1,95 giây; không cần bấm lần hai. Việc tải script bắt đầu sớm, bước dựng cảnh đồng bộ chạy sau timeline để không làm giật nhịp lời chào. Ảnh tranh tải độc lập và có placeholder sẵn. Hover tranh trong bảo tàng có tiếng ngắn; hover giấy trong bảng ghim im lặng. Khi mở bảng ghim phát `MuseumSound.boardEntry()` (2,1 giây, stereo và lớp trầm riêng); chuyển thẻ dùng tiếng vút ngắn. `BoardWriter.update()` trả cờ `writing` khi thực sự viết chữ/vẽ nét, `updateWriting()` dùng cờ này để điều khiển tiếng bút; tắt khi nhấc bút, bay camera, viết nhanh hoặc đóng bảng. Tiếng chân theo khoảng cách camera di chuyển thủ công bằng WASD/mũi tên/cuộn chuột, không phát khi đứng yên hoặc camera tự bay. Nút âm thanh hiện điều khiển âm tương tác thay cho drone nền cũ.

Màn bắt đầu intro chỉ gồm biểu tượng bảo tàng, tiêu đề, một dòng dẫn và nút bắt đầu; chuỗi lời chào không có nhãn phụ. `#introLoading` ban đầu hidden và chỉ hiện ở bước chuẩn bị cảnh sau lời chào cuối. Các nhãn tải vẫn cập nhật trong nền. `MuseumSound.writing()` điều khiển MP3 theo trạng thái viết; nút tắt âm chung điều khiển cả master Web Audio và MP3.

Tiếng bút dùng file `writing-with-pencil.mp3` cùng thư mục, phát bằng HTMLAudioElement (hỗ trợ cả file://), preload và loop, giữ vị trí phát giữa các nét để tránh lặp lại đầu clip. `MuseumSound.writing()` điều khiển play/pause và fade-out 45ms, giữ nguyên cao độ/tốc độ gốc, chỉ thay nhẹ âm lượng theo tốc độ ngòi. Không còn tổng hợp tiếng bút bằng noise. Tắt âm chung cũng dừng MP3. Tiếng chân giảm gain phần chạm từ 0,32 xuống 0,19, phần trầm từ 0,27 xuống 0,13 và rút ngắn đuôi trầm.

## Kế hoạch: mode thuyết trình (chưa triển khai)

### Yêu cầu và thuật ngữ

Mode thuyết trình là chuyến tham quan tự động: camera đi mượt lần lượt qua 15 tranh, có giọng dẫn; đến tranh thì mở detail và thuyết trình lần lượt các step bên trong. Trong kế hoạch này, **detail là bảng ghim 3D `StoryBoard` hiện có**, không phải drawer chi tiết/quiz đã bị gỡ. Mỗi tranh tương ứng một phần tử `MUSEUM_PIECES`; mỗi step tương ứng một thẻ trong `getStory(pieceIndex).steps`.

**Yêu cầu đã chốt: generate toàn bộ MP3 trước buổi thuyết trình. Không đợi đến khi vào detail mới tạo MP3. Trong lúc học sinh xem, ứng dụng chỉ tải/phát MP3 có sẵn, tuyệt đối không gọi endpoint TTS.** Công đoạn tạo giọng là công cụ chạy local riêng, không thuộc luồng mở tranh hay chuyển step.

### Luồng trải nghiệm dự kiến

1. Sau intro, người dùng bấm “Bắt đầu thuyết trình”. Mặc định đi từ tranh đầu tiên đến tranh cuối, giữ lựa chọn đồ họa hiện tại.
2. Camera đi mượt tới tranh kế tiếp. Chỉ tiếp tục sau tín hiệu camera đã đến đích; không lấy thời gian chờ cố định làm bằng chứng đã tới nơi.
3. Phát lời giới thiệu tranh từ MP3 đã tạo sẵn, sau đó mở bảng ghim. Đây là vị trí phát lời giới thiệu được đề xuất; có thể chỉnh kịch bản trước khi triển khai.
4. Khi camera trong bảng ghim tới thẻ/step, phát MP3 thuyết trình tương ứng. Nội dung nói dẫn dắt các phần của step theo thứ tự, không chỉ đọc tên tranh.
5. Khi lời nói kết thúc **và** thẻ đã viết xong, chuyển mượt sang step tiếp theo. Nút “Viết nhanh” chỉ kết thúc nét viết, không tự cắt lời nói. Nút “Bước tiếp” chủ động bỏ qua lời nói hiện tại và chuyển bước.
6. Hết step cuối: đóng bảng ghim, đợi đóng xong, đi tới tranh kế tiếp. Hết tranh thứ 15: dừng và hiện trạng thái hoàn tất; không tự vòng lại.

Điều khiển tối thiểu dự kiến: bắt đầu, tạm dừng/tiếp tục, bước trước/tiếp, thoát thuyết trình. Tạm dừng cần giữ vị trí audio, tiến trình camera và nét viết; tiếp tục chạy từ vị trí đó. Thoát/Escape dừng lời nói, hủy tác vụ chuyển cảnh đang chờ và trả về chế độ khám phá. Mọi chuyển bước phải dừng clip cũ để không chồng giọng. Khi tab bị ẩn thì tạm dừng cả chuyến tham quan.

### Tạo giọng trước bằng TTS local

Service do người dùng cung cấp, hợp đồng request chưa được kiểm thử trong phiên lập kế hoạch:

```js
const response = await fetch("http://localhost:5050/v1/audio/speech", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "tts-1",
    input: sentence,
    voice: "vi-VN-NamMinhNeural",
    response_format: "mp3",
  }),
});
// Công cụ generate: kiểm tra response.ok, nhận arrayBuffer và ghi ra file .mp3.
// Không đặt đoạn gọi TTS này trong runtime của trình duyệt.
```

`apiKey` là cấu hình local/biến môi trường của công cụ generate; `your_api_key_here` chỉ là placeholder, không phải khóa thật. Công cụ sẽ kiểm tra lỗi HTTP và file rỗng, ghi file hoàn chỉnh sau khi request thành công, báo rõ tranh/step lỗi để chạy lại. Giới hạn số request đồng thời, không bắn tất cả đoạn văn cùng lúc.

Dữ liệu và đường dẫn **đề xuất, chưa tồn tại**:

- `presentation-script.json`: kịch bản nói đã duyệt, mỗi tranh có `pieceId`, lời giới thiệu và danh sách step có `stepId` ổn định + `text`. Viết lời nói riêng bằng tiếng Việt mạch lạc; không gửi nguyên HTML, nhãn điều khiển hoặc placeholder vào TTS. Nếu cần nói theo từng phần nhỏ của thẻ, chia thành các segment có thứ tự trong step.
- `scripts/generate-presentation-audio.mjs`: công cụ local đọc kịch bản, gọi TTS, lưu MP3. Chạy công cụ này trước khi triển khai/buổi học.
- `audio/presentation/piece-01/intro.mp3`, `audio/presentation/piece-01/step-01.mp3`, …: một clip lời dẫn tranh và ít nhất một clip cho mỗi step. Nếu chia segment, tên file bổ sung định danh segment.
- `presentation-audio.json`: manifest ánh xạ `pieceId`/`stepId`/segment sang đường dẫn MP3, kèm hash của nội dung + model + voice để nhận biết đoạn cần generate lại. Chỉ tái tạo những clip có nội dung/cấu hình đổi hoặc chưa có file; không tái sử dụng clip đã lỗi thời.

Thứ tự chuẩn bị: chốt kịch bản → generate MP3 → kiểm tra đủ manifest/file và nghe thử → đưa MP3 cùng mã trang vào bộ tài nguyên triển khai. Sau đó TTS local có thể tắt; chuyến thuyết trình vẫn chạy từ các file đã tạo.

### Phần cần nối vào mã hiện có

- `museum-3d-single-02.js`, `museum-3d-single-03.js`: đối chiếu danh sách tranh và story thực tế, gồm các tranh đang dùng story sinh tự động. Manifest cần phủ đầy đủ **các step thực sự hiển thị**, không chỉ các entry khai báo tay trong `STORY_DATA`.
- `museum-3d-single-09.js`: tái dùng `flyToPiece`, bổ sung tín hiệu/promise camera đến đích. Hiện việc tự mở bảng ghim dùng timer `pendingBoardTimer`; timer này chưa đủ để đồng bộ thuyết trình. Cần hủy timer/tác vụ cũ khi dừng hoặc chuyển tranh.
- `museum-3d-single-08.js`: tái dùng `StoryBoard.open/close/goTo`. Bổ sung sự kiện đến step, viết xong và đóng xong; không đồng nhất `st.current` đã đổi với việc camera đã đến thẻ. Tạm vô hiệu hóa auto-advance cũ trong mode thuyết trình để chỉ có một bộ điều phối chuyển bước.
- `museum-3d-single-07.js`: dùng trạng thái writer.done cho điều kiện chuyển step và hỗ trợ pause tiến trình viết.
- Đề xuất `museum-presentation.js`: bộ điều phối riêng giữ trạng thái chuyến tham quan, audio lời nói và hủy tác vụ cũ. Đây là file dự kiến, chưa được tạo. Khi triển khai phải thêm vào thứ tự tải trong `museum-intro.js`.

Trạng thái đề xuất: nghỉ → đi tới tranh → giới thiệu tranh → mở bảng → tới step → nói/viết → step kế → đóng bảng → tranh kế → hoàn tất; tạm dừng/lỗi là trạng thái có thể phục hồi. Dùng mã phiên/token để callback `ended`, kết quả tải clip hoặc timer cũ không làm chạy tiếp sau khi người dùng thoát/chuyển bước.

### Phát audio và tiêu chí nghiệm thu dự kiến

Chỉ tải trước clip hiện tại và clip kế tiếp để không kéo toàn bộ MP3 vào bộ nhớ. `ended` của clip là tín hiệu kết thúc lời nói; không dùng độ dài văn bản hay setTimeout để đoán thời lượng. Clip thiếu/hỏng phải hiện bước đang lỗi cùng lựa chọn thử lại/bỏ qua; không gọi TTS để chữa lỗi trong phiên xem. Giữ tương thích cách mở trang hiện tại bằng `file://` khi chọn cơ chế nạp manifest và audio; cũng kiểm tra khi phục vụ qua HTTP.

Lời thuyết trình cần rõ hơn âm hiệu ứng: đề xuất hạ tiếng bút/tiếng vút trong lúc voice nói. Điều khiển âm voice và hiệu ứng cần có ý nghĩa rõ: tắt tiếng không được tự coi clip đã kết thúc hoặc làm vòng tham quan chạy vô hạn. Hành vi pause/resume và đổi âm lượng phải được kiểm thử khi đang bay, đang viết và đang nói.

Hoàn thành khi: đi hết 15 tranh đúng thứ tự; từng clip khớp tranh/step; camera đến nơi rồi mới nói; chỉ một voice phát tại một thời điểm; chuyển step đợi đủ lời nói và nét viết; pause/skip/thoát không để âm hay callback cũ chạy tiếp; thiếu MP3 có xử lý rõ ràng; low graphics vẫn hoạt động; không có request nào tới `localhost:5050` trong phiên tham quan, kể cả lần đầu mở detail.

Phạm vi lần ghi context này: lưu kế hoạch và endpoint mẫu, **chưa gọi TTS, chưa generate MP3 và chưa triển khai mode thuyết trình**.
