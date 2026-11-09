# Ảnh tư liệu đã đối chiếu chú thích

Sáu ảnh được tải từ trang của Bảo tàng Lịch sử Quốc gia ngày 09/11/2026, chuyển sang WebP và giữ tỷ lệ gốc. Không upscale ảnh nhỏ, không cắt watermark hoặc sửa nội dung ảnh. Manifest [verified-images.json](verified-images.json) lưu URL trang nguồn, URL ảnh, caption biên tập, kích thước, dung lượng và gợi ý index tranh (0-based).

“Đã đối chiếu” ở đây nghĩa là hình được chọn khớp hình/chú thích của trang bảo tàng đã xem; không phải khẳng định đã kiểm định độc lập nguồn gốc âm bản hay giấy phép sử dụng. Trang nguồn không công bố giấy phép mở rõ ràng, vì vậy `license` để null và giữ credit bảo tàng; không tự gắn public domain/Creative Commons.

| File | Index tranh gợi ý | Nội dung và giới hạn chú thích | Trang nguồn |
|---|---:|---|---|
| [duong-kach-menh-1927.webp](duong-kach-menh-1927.webp) | 1 | Ảnh **trang sách mở** của Đường Kách mệnh, không phải bìa sách. Dùng minh họa tác phẩm năm 1927; không hứa đọc rõ toàn bộ chữ từ ảnh nhỏ. | [Sách Đường Kách Mệnh](https://baotanglichsuquocgia.vn/vi/Articles/1001/28315/sach-djuong-kach-menh.html) |
| [bao-thanh-nien-1926.webp](bao-thanh-nien-1926.webp) | 1 | Số báo có mốc **3/10/1926** theo caption bảo tàng. Không ghi là số đầu ra ngày 21/6/1925. | [Đường Kách Mệnh: sự xuất hiện và hành trình](https://baotanglichsu.vn/vi/Articles/1001/19692/cuon-djuong-kach-menh-cua-nguyen-ai-quoc-su-xuat-hien-va-hanh-trinh.html) |
| [nha-huan-luyen-quang-chau.webp](nha-huan-luyen-quang-chau.webp) | 1 | Ảnh ngôi nhà/di tích trên đường Văn Minh, nơi từng mở lớp giai đoạn 1925–1927. Không chú thích đây là ảnh chụp một lớp học đang diễn ra. | [Cùng bài về hành trình tác phẩm](https://baotanglichsu.vn/vi/Articles/1001/19692/cuon-djuong-kach-menh-cua-nguyen-ai-quoc-su-xuat-hien-va-hanh-trinh.html) |
| [luan-cuong-1930.webp](luan-cuong-1930.webp) | 5 | Ảnh văn kiện do bảo tàng giới thiệu gắn với Luận cương tháng 10/1930. Không nhầm với Cương lĩnh tháng 2/1930 hay ảnh chân dung Trần Phú. | [Trần Phú – Tổng Bí thư đầu tiên](https://baotanglichsu.vn/vi/Articles/3098/19407/tran-phu-tong-bi-thu-djau-tien-cua-djang.html) |
| [dau-xao-1938.webp](dau-xao-1938.webp) | 9 | Hình mít tinh 1/5/1938 tại Đấu xảo Hà Nội, theo chú thích ngay dưới hình. Không lấy ảnh áp phích năm 1989 ở phía sau trong cùng bài. | [Ngày 1–5 trong quá trình đấu tranh cách mạng](https://baotanglichsuquocgia.vn/vi/Articles/3097/14191/ngay-1-5-trong-qua-trinh-djau-tranh-cach-mang-viet-nam.html) |
| [doi-tuyen-truyen-giai-phong-quan-1944.webp](doi-tuyen-truyen-giai-phong-quan-1944.webp) | 12 | Hình Đội Việt Nam Tuyên truyền Giải phóng quân, được bài bảo tàng chú thích ở mốc thành lập 22/12/1944. Chú thích theo nguồn, không tự thêm tên người chụp hoặc kết luận về âm bản. | [Lũng Bó và quyết định thành lập Đội](https://baotanglichsu.vn/vi/Articles/2002/68108/lung-bo-noi-lanh-tu-ho-chi-minh-quyet-djinh-thanh-lap-djoi-viet-nam-tuyen-truyen-giai-phong-quan.html) |

## Cách dùng trong bảo tàng

- Các ảnh tài liệu dọc cần fit `contain` hoặc đặt trên nền giấy; không kéo ngang để lấp khung 1024×742.
- Dùng caption văn bản ngoài ảnh để đọc trên màn hình nhỏ. Nội dung kiến thức vẫn phải nằm trong block text/timeline, không phụ thuộc việc đọc chữ trong ảnh tài liệu.
- File có kích thước nhỏ vì nguồn bảo tàng cung cấp như vậy; không nâng ảnh lên texture 4K hoặc áp bộ lọc tạo thêm chi tiết giả.
- Bộ này bổ trợ các tranh 02, 06, 10, 13; không dùng lặp cùng hình như chứng cứ cho mọi giai đoạn. Các chủ đề chưa có ảnh xác định dùng sơ đồ minh họa tự dựng, ghi rõ minh họa.
- Không sửa nội dung runtime trong công đoạn sưu tầm này. Mọi file mới của công đoạn nằm trong thư mục `verified/`.
