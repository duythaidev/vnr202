# Context: hai trang vnr202

Tất cả đường dẫn dưới đây nằm trong cùng thư mục `vnr202/`. Hai trang HTML là điểm vào độc lập; CSS và JavaScript được tách nguyên nội dung từ HTML tương ứng.

## Bảo tàng 3D

- `museum-3d-single.html`: cấu trúc trang, giao diện và thứ tự tải thư viện/script.
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

Các script chạy theo thứ tự số sau các thư viện Three.js trong HTML và chia sẻ biến toàn cục. Giữ thứ tự này khi chỉnh sửa. Một số comment trong mã còn nhắc tên file cũ như `js/story-data.js`; vị trí thực tế là các file được liệt kê ở đây.

## Trang tham khảo intro và âm thanh

- `tham-khao-intro-sound.html`: cấu trúc và nội dung trang.
- `tham-khao-intro-sound.css`: kiểu dáng của trang.
- `tham-khao-intro-sound.js`: logic tương tác và âm thanh của trang.

Cả hai trang tải Tailwind và phông chữ từ CDN; trang bảo tàng còn tải Three.js và các thành phần hậu kỳ từ CDN. Giữ các file tách ra cùng thư mục với HTML để đường dẫn tương đối hoạt động.
