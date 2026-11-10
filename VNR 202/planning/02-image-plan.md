# Ảnh trưng bày VNR202 · revision 2

Đủ 10 tệp WebP trong `assets/images/exhibition-10/`, khoảng 880 KiB. Đã tải từ nguồn bảo tàng, cơ quan sở hữu tư liệu và Báo Nhân Dân. Manifest đầy đủ URL trang, URL ảnh, kích thước, credit và nhận diện: [10-images.json](../assets/images/exhibition-10/10-images.json); ghi chú [README-SOURCES.md](../assets/images/exhibition-10/README-SOURCES.md).

Khung tranh chỉ chứa ảnh, giữ tỷ lệ và toàn bộ nội dung. Không biến ảnh thành slide, không đặt title, timeline, CTA hay mô tả cạnh ảnh bên trong canvas khung. Nhãn ngoài khung ghi rõ loại ảnh. Không gọi tranh tái hiện là ảnh chụp sự kiện hoặc gán ảnh di tích hiện đại thành ảnh năm 1941.

| Tranh | Hình | Loại | Nguồn |
|---|---|---|---|
| 01 | Nguyễn Ái Quốc tại Đại hội Tours, 1920. | Ảnh tư liệu | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/2002/68220/djang-cong-san-viet-nam-ra-djoi-buoc-ngoat-lich-su-cua-cach-mang-viet-nam.html) |
| 02 | Hội nghị thành lập Đảng - tranh Phi Hoanh. | Tranh lịch sử tái hiện | [Họa sĩ Phi Hoanh; ảnh đăng Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/2001/68276/ho-chi-minh-voi-cach-mang-giai-phong-dan-toc-va-khoi-nghia.html) |
| 03 | Xô viết Nghệ Tĩnh - tranh sơn mài tái hiện. | Tranh lịch sử tái hiện | [Tác phẩm nhóm họa sĩ Nguyễn Đức Nùng, Trần Đình Thọ, Nguyễn Văn Tỵ, Phạm Văn Đôn, Nguyễn Sỹ Ngọc và Huỳnh Văn Thuận; Bảo tàng Mỹ thuật Việt Nam; ảnh đăng Báo Nhân Dân](https://nhandan.vn/special/nhung-mua-xuan-co-dang-qua-tranh-cua-cac-danh-hoa-vi-t/) |
| 04 | Trần Phú (1904-1931), Tổng Bí thư đầu tiên. | Chân dung lịch sử | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Album/47/ky-niem-90-nam-ngay-thanh-lap-djang-cong-san-viet-nam-3-2-1930-3-2-2020) |
| 05 | Mít tinh Đấu Xảo, Hà Nội, 1/5/1938. | Ảnh tư liệu | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsuquocgia.vn/vi/Articles/3097/14191/ngay-1-5-trong-qua-trinh-djau-tranh-cach-mang-viet-nam.html) |
| 06 | Suối Lê-nin, Pác Bó - ảnh hiện đại. | Di tích · ảnh hiện đại | [Bảo tàng Hồ Chí Minh](https://baotanghochiminh.vn/phat-trien-du-lich-pac-bo-trong-tinh-hinh-moi.htm) |
| 07 | Đội Việt Nam Tuyên truyền Giải phóng quân, 22/12/1944. | Ảnh tư liệu | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/2002/68108/lung-bo-noi-lanh-tu-ho-chi-minh-quyet-djinh-thanh-lap-djoi-viet-nam-tuyen-truyen-giai-phong-quan.html) |
| 08 | Sách in Chỉ thị ngày 12/3/1945. | Ảnh tư liệu hiện vật | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/1002/73335/suu-tap-hien-vat-ve-cach-mang-thang-tam-nam-1945-tai-bao-tang-lich-su-quoc-gia.html) |
| 09 | Nhân dân Hà Nội chiếm Phủ Khâm sai, 19/8/1945. | Ảnh tư liệu | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu) |
| 10 | Lễ Độc lập tại Ba Đình, 2/9/1945. | Ảnh tư liệu | [Bảo tàng Lịch sử Quốc gia](https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu) |

Nguồn chưa nêu giấy phép mở: manifest để license=null, không tự nhận public domain/CC. Giữ dấu nguồn có sẵn trong ảnh. File ảnh cũ và diagrams còn để đối chiếu nhưng không có trong runtime revision 2.

Sau khi đổi ảnh/data, chạy `node scripts/build-local-image-data.cjs` tại thư mục môn để cập nhật bundle cho Chrome/Edge mở file://. HTTP tải ảnh WebP trực tiếp. Tổng thể 10 ảnh dùng lại trong một số thẻ có liên quan, không tải lại ảnh mạng khi tham quan.
