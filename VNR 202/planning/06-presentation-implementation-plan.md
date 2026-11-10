# Mode thuyết trình VNR202 - triển khai từ bản tham khảo

Cập nhật 09/11/2026. **Đã triển khai camera, animation, phụ đề và bộ điều khiển tour** cho 8 tranh / 26 step (34 đoạn). Phần phát giọng đọc MP3 chưa triển khai: `Narrator` trong bản tham khảo cũng chỉ là đồng hồ mô phỏng thời gian đọc. Không coi chạy hết tour đồng nghĩa đã có 48 file voice.

## Nguồn chuyển sang

- `E:/Web/mln131/museum-3d-single.html`: MuseumTour, Narrator, CSS thuyết trình và các hook StoryBoard.
- `E:/Web/mln131/presentation.js`: bộ điều phối Presentation; dùng bản JS này làm nguồn controller, không chép thêm bản inline trùng trong HTML.
- Tích hợp vào `vnr202/VNR 202/`. Không đổi base, MLN131 hoặc file tham khảo.

Không mang drawer, quiz, Flat View, nội dung 15 tranh, chất lượng renderer cũ hoặc bootstrap window.load sang bản mới. Giữ bộ ảnh và dữ liệu revision 2, MP3 tiếng bút, âm chuyển cảnh, tooltip ngắn và quality toggle của bản VNR202.

## File đang chạy

| File | Trách nhiệm |
|---|---|
| `museum-tour.js` | Camera phòng tranh theo đường cong Bézier; đi qua lối giữa, quay nhìn tranh, tiến chậm khi giới thiệu; pause/cancel. Chứa Narrator mô phỏng thời gian đọc. |
| `presentation.js` | Controller duy nhất: 34 segment theo dữ liệu thật, tiến/lùi/seek, tốc độ, phụ đề, trạng thái lỗi và hoàn tất. |
| `presentation.css` | Khung điện ảnh, thẻ giới thiệu, phụ đề và thanh điều khiển lấy từ tham khảo. |
| `museum-3d-single-08.js` | StoryBoard có sự kiện, Promise đóng bảng, hủy callback phiên cũ, pause/timeScale và điều phối input cho tour. |
| `museum-3d-single-09.js` | Cho tour sở hữu camera, chặn điều khiển đi tự do, hủy pendingBoardTimer và khởi tạo UI sau prepare. |
| `museum-intro.js` | Lazy-load numbered scripts → museum-tour.js → presentation.js trước MuseumApp.prepare. Không phụ thuộc sự kiện window.load đã qua. |
| `museum-3d-single.html` | Nút Thuyết trình ở phòng, nút Thuyết trình từ tranh này trong detail, link CSS. |

## Luồng và quyền sở hữu

Bắt đầu → đóng detail nếu đang mở → camera tới tranh → giới thiệu + drift chậm → mở detail → đợi `stepReady` → chạy phụ đề cùng bút → **đợi Narrator hoàn tất VÀ writer.done** → bước kế → đóng detail → tranh kế. Hết 34 đoạn: lùi camera ra toàn cảnh rồi hiện hoàn tất, không lặp tự động.

`Presentation` quyết định chuyển đoạn; `MuseumTour` giữ camera; `StoryBoard` giữ chuyển động/viết trên bảng. Không dùng timer mở bảng của khám phá tự do trong tour. Các Promise chuyển camera hoàn tất tại đích thật. Bản Narrator hiện tại hoàn tất theo đồng hồ, chưa phải audio ended.

- Mỗi lần seek/next/prev/stop hủy operation bằng AbortController; runId ngăn vòng lặp cũ tiếp tục.
- StoryBoard dùng gen để vô hiệu callbacks của phiên đóng/mở cũ; stepReady/written có piece/index/gen. `isOpening` ngăn seek nhầm vào bảng chưa dựng xong trong lúc đợi font.
- Close trả Promise, có thể được nhiều bên đợi cùng lúc. Seek trong lúc camera kết thúc được quay lại vòng lặp, không bị đánh dấu completed sai.
- Pause dừng đồng hồ tour, camera, flight và writer; tắt loop tiếng bút khi pause. Resize vẫn cập nhật kích thước viewport. Ẩn tab tự tạm dừng.
- Tốc độ 1× / 1,25× (mặc định) / 1,5× / 2× áp dụng cùng tour, flight và bút. `window.__tourScale` chỉ là hệ số thử nghiệm từ tham khảo, mặc định 1, không đặt trong cấu hình production.
- Thoát trả camera target về vị trí hiện tại, reset timeScale/inputHook/tourActive, đóng bảng và dừng Narrator.

## API và điều khiển

`Presentation.start(fromPiece=0)`, stop, pause, resume, toggle, next, prev, seek({piece,step=-1}), subscribe(fn), snapshot, active. Piece/step index tính từ 0. Snapshot có status/phase/index/total/piece/step/speed.

`StoryBoard.on(event, fn)` trả hàm unsubscribe. Sự kiện `stepReady`, `written`, `opened`, `closed`; API có isStepReady, isWritten, finishCurrent, setPaused, piece/current/cardCount/isOpening/isClosing, tourActive/inputHook/timeScale. Vẫn giữ `onClose` dùng bởi bootstrap.

Phím: Space/K tạm dừng hoặc tiếp; →/PageDown/L tiến; ←/PageUp/J lùi; Esc thoát. Click một đoạn trên timeline để chọn, CC bật/tắt phụ đề. Nút bắt đầu trong detail chạy từ lời dẫn của tranh hiện tại. `?present=0` tự bắt đầu sau intro; `?board=...` vẫn dùng cho khám phá, present được ưu tiên nếu có cả hai.

Các điều khiển khám phá bị ẩn khi chạy tour được đặt inert để không nhận Tab/Enter ngoài ý muốn. Focus vào nút tạm dừng khi bắt đầu, trả về nút Thuyết trình khi thoát. Thanh tiến độ dùng transform scaleX, tránh thay đổi layout mỗi frame.

## Kết quả kiểm tra

- Edge file://: chạy tự nhiên đủ 34 đoạn theo thứ tự với đồng hồ thử nghiệm tăng tốc; cả 38 bước chỉ hoàn tất khi writer.done và Narrator đã xong. Kết thúc đóng bảng và camera về toàn cảnh. Không có lỗi JavaScript trong lượt này.
- Kiểm tra pause camera/Narrator và pause writer; rapid next/prev/seek qua các bảng; seek sau hoàn tất; đổi chặng trong lúc camera đang kết thúc; bắt đầu từ tranh đang mở; hủy pending timer của khám phá tự do; Esc và reset timeScale/inputHook/tourActive.
- Sau tinh chỉnh UI: kiểm tra riêng controller + Narrator thật trong browser với adapter camera/bảng giả lập, không cần mạng. 390px: các nút chính trong viewport, Tab không lọt vào điều khiển bị ẩn, focus/inert được khôi phục, pause và transform progress hoạt động. Đây không thay cho kiểm tra render cảnh 3D trên điện thoại thật.
- Lượt HTTP/ảnh chụp mobile đầy đủ cuối không hoàn tất do DNS không phân giải được cdn.tailwindcss.com và fonts.googleapis.com; startup dừng trước thư viện đầu tiên (progress 0). Không ghi lượt này là pass, không thay CDN/bootstrap ngoài phạm vi chuyển tính năng.
- JS đã qua node --check; diff --check không có lỗi whitespace. Chưa có benchmark FPS hoặc kiểm tra giọng đọc vì chưa có MP3 thuyết trình.

## Nhịp thuyết trình nhanh (cập nhật 10/11/2026)

Voice TTS đọc nhanh nên tour phải gọn hơn:

- Mặc định chạy **1,25×** (danh sách tốc độ nay là 1× / 1,25× / 1,5× / 2×; bỏ 0,75×). Tốc độ áp dụng cùng camera, bút và đồng hồ phụ đề.
- Đồng hồ Narrator mô phỏng đọc **3,4 từ mỗi giây** (trước là 2,5) cho tới khi có MP3; đây chỉ là đồng hồ tạm.
- Thẻ nay dày hơn (thesis + ý phụ, khoảng 12-19 giây viết ở 1×), nên đồng bộ với voice là việc phải làm khi gắn MP3: khi biết `duration` của clip, đặt `StoryBoard.timeScale = clamp(Writer.total / duration, 1, 2.2) × tốc độ người dùng` để bút xong gần cùng lúc lời nói. Nếu voice dài hơn bút thì giữ 1× (không làm chậm bút). Rào chuyển step vẫn là `ended` **và** `writer.done`.
- Độ dài lời nói theo [05-narration-plan.md](05-narration-plan.md): step 40-60 từ, lời dẫn tranh 25-35 từ.
- Thẻ nay có thêm khối `thesis chain grid versus ladder hub rail vtimeline checklist stats table`; phụ đề lấy từ `stepText()` đã hỗ trợ các khối này. Phụ đề chỉ là phương án tạm: lời nói đã duyệt đặt vào `step.narration` / `story.intro`.

## Giọng đọc MP3 - phần tiếp theo

Giữ yêu cầu người dùng: **generate tất cả MP3 trước**, không gọi TTS khi vào tranh/detail hoặc trong phiên tour. Service local POST localhost:5050/v1/audio/speech, model tts-1, voice vi-VN-NamMinhNeural, response_format mp3; Bearer key chỉ ở công cụ generate local. Kịch bản mới phải theo revision 2 và hash nội dung, không tái dùng audio revision 1 chỉ vì cùng ID.

Danh mục [presentation-clip-index.json](presentation-clip-index.json) vẫn là **planned-not-generated**: 10 intro + 38 step. Mẫu và quy tắc biên tập ở [05-narration-plan.md](05-narration-plan.md). Cần viết đủ script, generate, kiểm tra giải mã và nghe thử trước khi thêm voice runtime.

Khi triển khai audio thật, thay Narrator bằng HTMLAudioElement với src MP3 relative, giữ play/stop/progress và xử lý abort. Chuyển barrier từ đồng hồ sang `ended`; phụ đề bám currentTime/duration, pause và playbackRate phải điều khiển audio. Chỉ giữ clip hiện tại + kế, xử lý play rejection/file lỗi rõ ràng, không tự gọi TTS để vá thiếu file. Giảm SFX dưới voice. `step.narration` và `story.intro` có thể đặt lời nói đã biên tập; fallback ghép từ block chỉ phục vụ phụ đề hiện tại, không tự coi là kịch bản voice đã duyệt.

Kế hoạch đầy đủ trước khi chuyển bản tham khảo được giữ tại [archive/presentation-before-port/](archive/presentation-before-port/), chỉ dùng đối chiếu phần audio còn thiếu. Không làm lại những API/controller đã có.
