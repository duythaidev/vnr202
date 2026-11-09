# Bảo tàng VNR202

Điểm vào: [museum-3d-single.html](museum-3d-single.html). Bản độc lập trong `vnr202/VNR 202/`; base ở thư mục cha, MLN131 ở `../MLN 131/`.

## Hiện trạng

**Revision 2: 10 tác phẩm / 38 thẻ**, rút từ bài nhóm [VNR202 - Nhóm 1 (2).docx](VNR202%20-%20Nhóm%201%20(2).docx), 209 đoạn không rỗng. Bộ cũ 15 tranh/60 thẻ được lưu tại [planning/archive/15-paintings/](planning/archive/15-paintings/), không dùng để triển khai hiện tại.

Ảnh trong khung là ảnh tư liệu, chân dung, ảnh hiện vật, hai tranh lịch sử tái hiện và một ảnh di tích Pác Bó hiện đại. **Không vẽ slide, sơ đồ, title hoặc UI lên ảnh trong khung.** Nhãn riêng bên cạnh ghi tên, niên đại, loại ảnh và nguồn. Bộ ảnh/metadata hiện hành ở [assets/images/exhibition-10/](assets/images/exhibition-10/). Ảnh cũ/diagrams chưa dùng có thể còn trong kho, không tự gắn lại.

Phòng tự dài theo số tác phẩm: 2 tranh/khoang, ceil(N/2) khoang, mỗi khoang 11.5 đơn vị + 16 khoảng đầu/cuối. Hiện 5 khoang, dài 73.5. Số lẻ không nhân đôi tranh cuối. Thay số tranh phải sửa dữ liệu và story tương ứng, không kéo giãn tọa độ thủ công.

## File và thuật ngữ

- **Tranh/tác phẩm**: một mục MUSEUM_PIECES ở `museum-3d-single-02.js`, có contentId, ảnh, tiêu đề, nguồn và revision.
- **Story/detail**: bảng ghim 3D của tranh. STORY_DATA trong `-03.js` gồm 38 step, số bước `[4,4,3,4,4,4,3,4,4,4]`. Không còn drawer cũ, quiz hoặc Flat View.
- **Khoang**: một cặp vị trí trái/phải trong phòng; tính từ số tác phẩm.
- `-01.js`: FX và quality; `-04.js`: texture nhãn; `-05.js`: phòng, khung, ảnh, ánh sáng; `-06.js`: giấy; `-07.js`: bút/dàn thẻ; `-08.js`: StoryBoard; `-09.js`: điều khiển, camera, vòng lặp, bootstrap.
- `museum-intro.js/css`: intro từng bước, lazy boot và âm thanh. `writing-with-pencil.mp3`: loop bút. `tham-khao-intro-sound.*`: tài liệu tham khảo, không phải entry của môn.
- `museum-image-data.js`: bundle ảnh data URL cho file://. Sau đổi ảnh hoặc src chạy `node scripts/build-local-image-data.cjs` tại đây; HTTP dùng ảnh thường, không nạp bundle.

Hover tranh trong phòng hiện tooltip hai dòng: tên và niên đại từ `MUSEUM_PIECES`. HTML/CSS dùng `paintingTooltip`/`.painting-tooltip`; raycast và đóng tooltip khi rời tranh, kéo nhìn, di chuyển hoặc mở detail nằm trong `-09.js`. Không thêm mô tả dài, ảnh hay âm thanh riêng cho tooltip.

ID vnr-p01…p10 của revision 2 đã sắp xếp lại; **không dùng voice/cache revision 1 chỉ vì cùng ID**. `mergedFrom` trong dữ liệu trỏ vào bản cũ, còn nguồn đoạn trong thẻ trỏ vào snapshot 209 đoạn hiện hành.

## Điểm bắt đầu cho agent

Đọc [planning/README.md](planning/README.md), [content-index.json](planning/content-index.json) và [04-source-audit.md](planning/04-source-audit.md). Giữ phân biệt hai tổ chức dự hội nghị đầu 1930 với Liên đoàn gia nhập sau, Hội Truyền bá Quốc ngữ 1938, hội nghị quân sự 4/1945 với hợp nhất lực lượng 5/1945. Tránh số thương vong chưa thống nhất.

## Mode thuyết trình

Mới là kế hoạch: [06-presentation-implementation-plan.md](planning/06-presentation-implementation-plan.md). Chỉ mục đã cập nhật **48 clip = 10 lời dẫn + 38 step**, trạng thái planned-not-generated. Chưa có script generate, MP3, UI hoặc tour controller.

MP3 phải generate trước bằng service local POST localhost:5050/v1/audio/speech, model tts-1, voice vi-VN-NamMinhNeural; key ở công cụ local. Không gọi TTS khi vào detail. Tour tương lai di chuyển camera mượt, đợi đến tranh, nói lời dẫn, mở story rồi nói từng step; chuyển khi cả audio ended và writer.done. Phải xử lý pause/skip/thoát, không dùng timer đoán camera đến nơi.

Giữ cơ chế intro, âm thanh và low graphic/MSAA kế thừa base. Vai trò file/kiến trúc chung có thêm tại [context base](../CONTEXT.md), nhưng số lượng và dữ liệu VNR202 lấy tài liệu tại thư mục này.
