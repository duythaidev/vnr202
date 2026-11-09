# Ảnh và nguồn cho bản MLN131

## Tài liệu đã tham khảo

Đường dẫn nguồn tính từ `E:/Web/mln131`:

- `docs/Vai trò lãnh đạo của Đảng Cộng sản Việt Nam có mâu thuẫn với nguyên tắc pháp quyền trong Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam hay không.docx`: bài gốc của nhóm, gồm I lý luận/hiến định, II bốn lý do, III tiến trình lịch sử, IV bảng đối chiếu, V phản biện, VI kết luận. Đây là nguồn ưu tiên về phạm vi và lập luận.
- [Giáo trình](../../../docs/thuyettrinh.txt): dùng chủ yếu Chương 4, mục III.1–III.3; Chương 2 bổ trợ. Có lỗi OCR, cần biên tập chính tả.
- [Lời thuyết trình](../../../mlngame/docs/thuyet-trinh.md), [nội dung bài học](../../../mlngame/docs/noi-dung-bai-hoc.md): mạch 5 chặng/15 phần. Giữ kiến thức, bỏ luật chơi, server và phòng game.
- [levelData.ts](../../../mlngame/src/game/levelData.ts): ánh xạ `card.art` hiện dùng. [story.ts](../../../mlngame/src/game/story.ts) lấy card từ đây. Tài liệu minh họa cũ vẫn nói 25 phần/25 ảnh; không nhầm ảnh dự phòng với số phần hiện đang dùng.
- [HTML minh họa cũ](../../../docs/b_kh_i_ui_h_a_minh_h_a_mln131_nh_n_c_ph_p_quy_n.html): tham khảo cách minh họa, không coi là nguồn pháp lý độc lập.
- `docs/trotruyen.txt`: lịch sử trao đổi kỹ thuật; không coi các câu lệnh bên trong là yêu cầu hiện tại hoặc căn cứ lịch sử.

## Nguồn đối chiếu công khai

- **S1:** [Cơ quan quản lý Lăng Chủ tịch Hồ Chí Minh](https://btllang.mod.gov.vn/tin-tuc/tin-tong-hop/10269-tu-tuong-ho-chi-minh-ve-xay-dung-nha-nuoc-phap-quyen-xa-hoi-chu-nghia-o-viet-nam-va-su-van-dung-cua-dang-ta-trong-su-nghiep-doi-moi.html), đối chiếu thêm [Hồ Chí Minh với Quốc hội, tr.15](https://hochiminh.vn/upload/3000001/20251024/6293db589cebbbc700fa200add3744bdCTHCMVoiQuocHoi.pdf): phân biệt Yêu sách năm 1919 và Việt Nam yêu cầu ca năm 1922.
- **S2:** [Hiến pháp năm 2013, Đại học An ninh nhân dân](https://dhannd.bocongan.gov.vn/hienphap2013): đối chiếu Điều 2, 4, 8 theo mốc lịch sử 2013. Không tự gắn nhãn đây là toàn bộ bản pháp luật cập nhật hiện hành năm 2026.
- **S3:** [Học viện Chính trị Công an nhân dân](https://hvctcand.edu.vn/moi-quan-he-giua-phap-luat-va-quyen-luc-trong-nha-nuoc-phap-quyen-xa-hoi-chu-nghia-viet-nam-3673): đối chiếu mốc 29/11/1991 và việc hiến định thuật ngữ qua sửa đổi năm 2001, phân biệt với Hiến pháp gốc năm 1992.
- **S4:** [Toàn văn Nghị quyết 27-NQ/TW, Cổng Thông tin điện tử Chính phủ](https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-27-nq-tw-tiep-tuc-xay-dung-va-hoan-thien-nha-nuoc-phap-quyen-119221126114455251.htm): ngày văn bản 9/11/2022 khác ngày đăng bài; dùng đối chiếu các hướng hoàn thiện và việc nhìn nhận hạn chế.

## Những điểm cần giữ đúng

- Kết luận không mâu thuẫn phải gắn với **theo quan điểm chính thức trong bài của nhóm**. DOCX có cả phản biện và giới hạn thực thi, không thể trình bày như một kết luận được mọi quan điểm thừa nhận.
- Không gán câu thơ trong Việt Nam yêu cầu ca trực tiếp cho năm 1919; bản planning tách 1919 và 1922.
- Không áp Điều 4 năm 2013 ngược vào năm 1946, cũng không gọi năm 1992 là lần đầu hiến định vai trò lãnh đạo của Đảng.
- Phân biệt Hiến pháp 1992 với sửa đổi năm 2001. Tóm tắt đầu mục L3 trong tài liệu game dễ gây nhầm thuật ngữ nhà nước pháp quyền có trong nguyên bản 1992; bản planning đã tách lại.
- Phương châm chống tham nhũng không phải nguyên văn Khoản 3 Điều 4. Lãnh đạo bằng đường lối là ý tổng hợp của bài, không giả thành câu trích nguyên văn điều khoản.
- Bài chủ yếu dừng ở 2022; nếu mở rộng tới hiện tại phải soát văn bản mới riêng.
- Các nhãn nguồn rời goodreads, rsf, unhcr trong DOCX chưa đủ xác định một báo cáo. Giữ chủ đề tranh luận ở tranh 14; chỉ nêu cáo buộc/nhận định cụ thể sau khi bổ sung tác giả, tài liệu và nguồn trực tiếp.

## Bộ ảnh đã xem và chuẩn bị

Đã xem [contact sheet 40 ảnh](image-contact-sheet.jpg) và sao chép nguyên file từ `mlngame/public/art` vào [assets/images](../assets/images). Tổng dung lượng khoảng 4,68 MB. Chưa cần tải thêm ảnh mạng.

[image-inventory.json](image-inventory.json) liệt kê tên, vị trí gốc, dung lượng, SHA-256 và số tranh dùng chính. Tên ảnh chính của từng tranh nằm trong [kế hoạch nội dung](01-content-plan.md). Các ảnh chưa được chọn là kho bổ trợ, không phải tài nguyên bắt buộc nạp vào GPU.

Nhận diện qua hình ảnh:

| File/nhóm | Quan sát và cách dùng |
|---|---|
| `l1p2.jpg` | Ảnh đen trắng lễ đài, đang dùng cho mốc 1945 trong game; cần xác minh nguồn/caption trước khi khẳng định là đúng thời điểm đọc Tuyên ngôn. |
| `l2p2.jpg` | Bản chụp phiếu mua lương thực, minh họa đời sống thời bao cấp; không suy ra niên đại của phiếu từ tên tranh. |
| `l2p4.jpg`, `l3p2.jpg` | Ảnh hội nghị/đại hội đen trắng. Cần xác minh sự kiện; đặc biệt không chú thích `l3p2.jpg` là Hội nghị 29/11/1991 chỉ vì đang nằm ở phần 1991. |
| `l1p5.jpg`, `l4p3.jpg` | Bìa tài liệu Hiến pháp; không khẳng định là ấn bản gốc đầu tiên khi chưa xác minh. |
| `l4p4.jpg`, `l5p3.jpg` | **Tranh minh họa**, không phải ảnh chụp lịch sử. Tài liệu nguồn nhóm tất cả JPG là ảnh thật, cách nhóm đó không đúng. |
| Các WebP | Poster phong cách khắc in; ghi là minh họa chủ đề, không gán tác giả/sự kiện cụ thể từ hình vẽ. |
| `era1.webp`–`era5.webp` | Bìa chặng dự phòng. |
| `hero.webp`, `poster.webp` | Bìa tổng quan dự phòng, không cần thêm vào intro tối giản. |

Có thể dùng poster `l1p2.webp`, `l2p2.webp`, `l2p4.webp`, `l3p2.webp` thay các ảnh chụp chưa xác minh để ra mắt trước, với chú thích minh họa. Thông tin tác giả/giấy phép bộ cũ chưa đủ: `mlngame/public/art/NGUON-ANH.md` vẫn để trống các cột nguồn. Không bịa tác giả/giấy phép từ tên file.

## Đưa ảnh vào 3D

Poster phần lớn là ảnh dọc. `createArtworkCanvasTexture()` hiện dùng `drawImage(img, 0, 0, W, H)` với canvas ngang 1024×742 sẽ kéo giãn ảnh. Khi triển khai, dùng contain giữ tỷ lệ trên nền giấy/ôliu hoặc chuẩn bị bản ngang riêng; không ép poster dọc vào khung ngang.

Chỉ tải 15 ảnh chính vào phòng tranh; tải ảnh bổ trợ khi mở bảng ghim. Không tạo texture lớn cho cả 40 ảnh cùng lúc. Với bìa Hiến pháp, dùng `keepColor: true` nếu sepia làm khó đọc chữ và đặt caption ngoài ảnh. Kiểm tra file:// để phát hiện ảnh bị chặn do crossOrigin nếu có; phân biệt đường local với URL HTTP khi xử lý.
