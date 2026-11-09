# Triển khai VNR202 · revision 2

Đã thay dữ liệu bằng 10 tác phẩm / 38 thẻ; đủ 10 ảnh có nguồn, không còn UI/diagram làm tranh chính. Điểm vào `../museum-3d-single.html`. Bản MLN131 và base độc lập, không áp dụng dữ liệu này sang đó.

## Quy tắc theo dữ liệu

- `MUSEUM_PIECES` trong -02 quyết định số tác phẩm và thứ tự; `STORY_DATA` trong -03 phải có một story tương ứng cho mỗi index.
- Hai tranh/khoang: `NUM_BAYS = Math.max(1, Math.ceil(MUSEUM_PIECES.length / 2))`.
- `HALL_LENGTH = NUM_BAYS * BAY_LENGTH + 16`; BAY_LENGTH=11.5. Với 10 tranh: 5 khoang, dài 73.5 đơn vị thay cho 108 của bản 8 khoang.
- Camera đầu, vị trí tranh, tường cuối, trần, sàn, đèn, lan can, ghế và giới hạn di chuyển cùng dựa vào kích thước phòng; không giữ tọa độ camera 44 của bản dài.
- Khoang cuối có một tranh thì bên còn lại vẫn là tường, không lặp tranh bằng phép modulo. HUD xử lý thiếu tranh bên phải.
- Header, next/previous và số dot detail đọc số phần tử thật; không hard-code 10 hoặc 15 trong logic.

## Vai trò file

- -02/-03: nội dung, ảnh, revision/ID và thẻ.
- -04: texture nhãn nhỏ ngoài khung.
- -05: hình học phòng theo dữ liệu; texture tác phẩm chỉ ảnh, khung có tỷ lệ theo ảnh.
- -09: điều khiển, camera, HUD, điều hướng.
- `museum-image-data.js`: sinh tự động bằng `scripts/build-local-image-data.cjs`, phục vụ file://.
- `planning/content-index.json`: mapping revision 2 và gộp từ bản cũ; không nhầm ID cũ với ID mới.

Giữ intro, âm bút MP3, bước chân, chuyển cảnh và chế độ đồ họa thấp/cao. Tour/voice vẫn là kế hoạch 48 clip, chưa có runtime. Sau khi sửa dữ liệu cần kiểm tra số frame, ID duy nhất, chiều dài, giới hạn camera, canvas không bị taint, layout từng thẻ, mở/đóng/đổi bước, file:// và HTTP. Có thêm kiểm tra số tranh lẻ để phòng không nhân đôi tác phẩm.

## Kết quả kiểm tra 09/11/2026

- Edge mở file:// theo cấu hình mặc định, không bật cờ bỏ bảo vệ file: đủ 10 frame/5 khoang, ảnh đều giải mã và đưa lên canvas an toàn.
- 38 thẻ không tràn vùng viết, không cần thu nhỏ layout; nguồn còn trong vùng giấy. Đã xem ảnh chụp phòng, cận tranh và thẻ có ảnh trên desktop/mobile.
- HTTP với bộ dữ liệu thử 9 tranh: 9 frame duy nhất/5 khoang, HUD khoang cuối không lỗi, next từ tranh cuối về đầu; không tải bundle dành cho file://, không lỗi request local hoặc lỗi JavaScript.
- Kiểm tra hình học với 1, 2, 9, 10, 11 tranh: số khoang và camera đầu nằm trong phòng đúng theo dữ liệu.
- Tất cả JS qua node --check; git diff --check không có lỗi whitespace. Kiểm tra dùng GPU phần mềm để xác nhận chức năng; chưa có benchmark FPS trên thiết bị học sinh.
