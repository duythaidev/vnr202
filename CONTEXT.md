# Context: hai trang vnr202

Tất cả đường dẫn dưới đây nằm trong cùng thư mục `vnr202/`. Hai trang HTML là điểm vào độc lập; CSS và JavaScript được tách nguyên nội dung từ HTML tương ứng.

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

`#museumApp` được đặt inert và ẩn khỏi cây accessibility trong khi intro còn mở. Người dùng bấm Bắt đầu một lần để mở khóa âm thanh. Timeline hiện Xin chào → tất cả các bạn → lời dẫn bảo tàng (mỗi câu 2,2 giây, chuyển 0,8 giây). Sau timeline và khi dựng cảnh/render đầu tiên hoàn tất, tiếng vút 3,8 giây tự chuyển vào bảo tàng, reveal tại đỉnh 1,95 giây; không cần bấm lần hai. Việc tải script bắt đầu sớm, bước dựng cảnh đồng bộ chạy sau timeline để không làm giật nhịp lời chào. Ảnh tranh tải độc lập và có placeholder sẵn. Hover tranh trong bảo tàng có tiếng ngắn; hover giấy trong bảng ghim im lặng. Khi mở bảng ghim phát `MuseumSound.boardEntry()` (2,1 giây, stereo và lớp trầm riêng); chuyển thẻ dùng tiếng vút ngắn. `BoardWriter.update()` trả cờ `writing` khi thực sự viết chữ/vẽ nét, `updateWriting()` dùng cờ này để điều khiển tiếng bút; tắt khi nhấc bút, bay camera, viết nhanh hoặc đóng bảng. Tiếng chân theo khoảng cách camera di chuyển thủ công bằng WASD/mũi tên/cuộn chuột, không phát khi đứng yên hoặc camera tự bay. Nút âm thanh hiện điều khiển âm tương tác thay cho drone nền cũ.

Màn bắt đầu intro chỉ gồm biểu tượng bảo tàng, tiêu đề, một dòng dẫn và nút bắt đầu; chuỗi lời chào không có nhãn phụ. `#introLoading` ban đầu hidden và chỉ hiện ở bước chuẩn bị cảnh sau lời chào cuối. Các nhãn tải vẫn cập nhật trong nền. `MuseumSound.writing()` tạo nguồn noise khi cần, dừng và giải phóng khi thôi viết; toàn bộ âm tương tác dùng cùng master mute.
