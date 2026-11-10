# Bảo tàng VNR202

Điểm vào: [index.html](index.html). Bản độc lập trong `vnr202/VNR 202/`; base ở thư mục cha, MLN131 ở `../MLN 131/`.

## Hiện trạng

**Revision 3: 8 tác phẩm / 26 thẻ** (rút gọn từ 10 tác phẩm / 38 thẻ; bản 10 tranh không dùng nữa), rút từ bài nhóm [VNR202 - Nhóm 1 (2).docx](VNR202%20-%20Nhóm%201%20(2).docx), 209 đoạn không rỗng. Bộ cũ 15 tranh/60 thẻ được lưu tại [planning/archive/15-paintings/](planning/archive/15-paintings/), không dùng để triển khai hiện tại.

Ảnh trong khung là ảnh tư liệu, chân dung, ảnh hiện vật, hai tranh lịch sử tái hiện và một ảnh di tích Pác Bó hiện đại. **Không vẽ slide, sơ đồ, title hoặc UI lên ảnh trong khung.** Nhãn riêng bên cạnh ghi tên, niên đại, loại ảnh và nguồn. Bộ ảnh hiện hành ở [assets/images/exhibition-8/](assets/images/exhibition-8/) (nguồn và giấy phép ở README-SOURCES.md trong đó); thư mục exhibition-10 là bản cũ. Ảnh cũ/diagrams chưa dùng có thể còn trong kho, không tự gắn lại.

Phòng tự dài theo số tác phẩm: 2 tranh/khoang, ceil(N/2) khoang, mỗi khoang 11.5 đơn vị + 16 khoảng đầu/cuối. Hiện 5 khoang, dài 73.5. Số lẻ không nhân đôi tranh cuối. Thay số tranh phải sửa dữ liệu và story tương ứng, không kéo giãn tọa độ thủ công.

## File và thuật ngữ

- **Tranh/tác phẩm**: một mục MUSEUM_PIECES ở `museum-3d-single-02.js`, có contentId, ảnh, tiêu đề, nguồn và revision.
- **Story/detail**: bảng ghim 3D của tranh. STORY_DATA trong `-03.js` gồm 26 step, số bước `[4,3,3,3,3,3,4,3]`. Không còn drawer cũ, quiz hoặc Flat View.
- **Cấu trúc nội dung (bản 3 ý chính)**: tranh 1 = Mở đầu; tranh 2–3 = Ý chính 1 (1930–35); tranh 4 = Ý chính 2 (1936–39); tranh 5–7 = Ý chính 3 (1939–45); tranh 8 = Kết. Nhãn nhỏ trên thẻ là ngày tháng (ví dụ `02 / 9/1930`); không dùng ký tự `·` trong chữ hiển thị. Mỗi thẻ có một khối `thesis` (câu ý chính theo bản (3)) rồi các ý phụ lấy từ bản (2). Thẻ không còn dòng "Nguồn" ở chân. `head` của step chọn kiểu đầu thẻ (`plain|underline|box|numeral|band`), mỗi tranh một kiểu.
- **Kiểu khối trong `-07.js`**: `text note bullets flow image timeline stat quote chart` cùng các khối mới `thesis chain grid versus ladder hub rail vtimeline checklist stats table`. Thêm khối mới phải thêm nhánh tương ứng trong `layout()` và trong `stepText()` của `presentation.js`. Dàn trang tự thu nhỏ khi tràn và phóng chữ lên khi thẻ thưa. `-02.js` giữ `chapter`, `hotspots` (tên + mô tả ngắn, dùng cho thẻ trang trí) khớp tiêu đề step; đổi tiêu đề step thì sửa cả hai.
- **Khoang**: một cặp vị trí trái/phải trong phòng; tính từ số tác phẩm.
- `-01.js`: FX và quality; `-04.js`: texture nhãn; `-05.js`: phòng, khung, ảnh, ánh sáng; `-06.js`: giấy; `-07.js`: bút/dàn thẻ; `-08.js`: StoryBoard; `-09.js`: điều khiển, camera, vòng lặp, bootstrap.
- `museum-intro.js/css`: intro từng bước, lazy boot và âm thanh. `writing-with-pencil.mp3`: loop bút. `tham-khao-intro-sound.*`: tài liệu tham khảo, không phải entry của môn.
- `museum-image-data.js`: bundle ảnh data URL cho file://. Sau đổi ảnh hoặc src chạy `node scripts/build-local-image-data.cjs` tại đây; HTTP dùng ảnh thường, không nạp bundle.

Hover tranh trong phòng hiện tooltip hai dòng: tên và niên đại từ `MUSEUM_PIECES`. HTML/CSS dùng `paintingTooltip`/`.painting-tooltip`; raycast và đóng tooltip khi rời tranh, kéo nhìn, di chuyển hoặc mở detail nằm trong `-09.js`. Không thêm mô tả dài, ảnh hay âm thanh riêng cho tooltip.

ID vnr-p01…p10 của revision 2 đã sắp xếp lại; **không dùng voice/cache revision 1 chỉ vì cùng ID**. `mergedFrom` trong dữ liệu trỏ vào bản cũ, còn nguồn đoạn trong thẻ trỏ vào snapshot 209 đoạn hiện hành.

## Điểm bắt đầu cho agent

Đọc [planning/README.md](planning/README.md), [content-index.json](planning/content-index.json) và [04-source-audit.md](planning/04-source-audit.md). Giữ phân biệt hai tổ chức dự hội nghị đầu 1930 với Liên đoàn gia nhập sau, Hội Truyền bá Quốc ngữ 1938, hội nghị quân sự 4/1945 với hợp nhất lực lượng 5/1945. Tránh số thương vong chưa thống nhất.

## Mode thuyết trình

Đã tích hợp **camera/animation, phụ đề và controller** từ `E:/Web/mln131/museum-3d-single.html` và `E:/Web/mln131/presentation.js`. Đọc [06-presentation-implementation-plan.md](planning/06-presentation-implementation-plan.md) trước khi sửa tour hoặc thêm voice.

File mới: `museum-tour.js` (camera + Narrator phát MP3 và đồng hồ dự phòng), `presentation.js` (điều phối), `presentation.css` (UI). Loader nạp sau -09, UI init trong MuseumApp.prepare; không gắn window.load vì trang dùng lazy boot. -08 có Promise close, sự kiện stepReady/written, pause/timeScale/inputHook; -09 nhường quyền camera và hủy pendingBoardTimer.

Nút **Thuyết trình** chạy từ tranh đầu; nút trong detail chạy từ tranh hiện tại. Có pause, tốc độ (mặc định 1,25×, voice đọc nhanh), chọn đoạn, CC, phím Space/←/→/PageUp/PageDown/Esc; kết thúc lùi camera về toàn cảnh. Tổng **34 segment = 8 giới thiệu + 26 step**, lấy từ dữ liệu chứ không hard-code 3 bước/tranh.

**Voice:** tour phát MP3 trong `audio/presentation/` qua `presentation-audio.js` (sinh bởi `scripts/build-presentation-audio-manifest.cjs`); clip thiếu thì chạy đồng hồ phụ đề. **Đã tạo đủ 34 MP3 bản 8 tranh**, giọng nam vi-VN-NamMinhNeural; 48 MP3 cũ ở `audio/archive-10-paintings/`. Manifest revision 4 có đủ 34 clip ready. Tạo bằng `scripts/generate-presentation-audio.mjs`, kịch bản ở `planning/presentation-script.json`. Tốc độ tour mặc định 1,25×, voice 1×.

Giữ cơ chế intro, âm thanh và low graphic/MSAA kế thừa base. Vai trò file/kiến trúc chung có thêm tại [context base](../CONTEXT.md), nhưng số lượng và dữ liệu VNR202 lấy tài liệu tại thư mục này.
