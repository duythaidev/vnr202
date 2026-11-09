# Kế hoạch triển khai mode thuyết trình MLN131

Trạng thái: **kế hoạch triển khai, chưa viết controller, chưa generate MP3**. Áp dụng riêng `vnr202/MLN 131/`, dựa trên 15 tranh / 45 step hiện đã có. Không sửa base hoặc VNR202. Các API, file và lệnh ghi là đề xuất dưới đây chưa tồn tại, trừ khi mục hiện trạng nói rõ đã có.

## 1. Kết quả người dùng cần nhận được

Sau intro, người dùng bấm **Thuyết trình**. Camera đi mượt qua từng tranh, nói lời giới thiệu, mở bảng ghim rồi nói lần lượt từng step. Xong một tranh thì đóng bảng, đi sang tranh kế; hết tranh 15 thì kết thúc.

**MP3 phải được tạo sẵn trước buổi học.** Trong lúc tham quan không gọi TTS, kể cả lần đầu mở detail. Detail ở đây là bảng ghim `StoryBoard`; không khôi phục drawer cũ, Flat View hoặc quiz.

Danh mục đầu ra theo ID thực tế: [presentation-clip-index.json](presentation-clip-index.json), gồm đủ 60 clip dự kiến; file này là chỉ mục planning, không phải manifest audio sẵn sàng phát.

MVP bắt đầu từ tranh 01, dùng một giọng `vi-VN-NamMinhNeural`. Mỗi tranh một lời dẫn và mỗi step một clip: **15 + 45 = 60 MP3**. Khi người dùng chủ động chọn bước khác, controller chuyển vị trí tương ứng và phát lại clip bước đó từ đầu. Chưa làm đồng bộ nhiều người, nhận diện giọng nói, lưu tiến trình qua lần tải lại hoặc chọn nhiều giọng.

### Trình tự một tranh

1. Đóng bảng hiện tại nếu còn mở và chờ đóng xong.
2. Camera bảo tàng di chuyển tới tranh; chờ đến đích cả vị trí lẫn góc nhìn.
3. Phát lời dẫn tranh từ MP3 đã chuẩn bị.
4. Mở bảng ghim; chờ khởi tạo, dựng thẻ và camera tới thẻ đầu tiên.
5. Bắt đầu lời nói của step đồng thời với tiến trình viết thẻ.
6. Chờ **audio ended VÀ writer.done** rồi mới chuyển step.
7. Sau step cuối, quay lại bước 1 cho tranh tiếp theo. Sau tranh 15, dừng và hiện hoàn tất, không tự vòng lại.

Nếu viết nhanh hơn lời nói, giữ thẻ cho người nghe. Nếu lời nói hết trước, tiếp tục chờ nét viết. Không dùng độ dài văn bản hoặc `setTimeout(duration)` thay cho sự kiện kết thúc audio.

## 2. Hiện trạng và khoảng trống đã đọc trong mã

| File / cơ chế hiện có | Khoảng trống cần sửa |
|---|---|
| `museum-3d-single-02.js` có 15 `contentId` mln-p01…mln-p15 | Chưa có kịch bản lời dẫn hoặc đường dẫn audio thuyết trình. |
| `museum-3d-single-03.js` có 45 step ID mln-pNN-sNN | Dùng ID này làm khóa; không suy khóa từ title hoặc chỉ số text. |
| `flyToPiece()` trong `-09.js` đặt đích rồi tạo `pendingBoardTimer` | Timer không chứng minh camera đã tới nơi; tour cần chờ tín hiệu đến đích và tự quyết định mở bảng. |
| `animateMuseum()` lerp vị trí/góc; vòng lặp tiếp tục chạy | Cần pause chuyển động có chủ đích mà không dừng các listener hoặc tạo thêm RAF loop. |
| `StoryBoard.open()` là async | Promise hiện kết thúc trước khi camera bay tới thẻ đầu; không được dùng trực tiếp làm bằng chứng step-ready. |
| `StoryBoard.goTo()` cập nhật st.current trước, rồi bay; onDone mới tạo writer | Phải phân biệt đã chọn step với đã tới step. |
| `StoryBoard.close()` dùng timeout 650ms | Cần tín hiệu đóng xong; listener/timer cũ không được làm đổi trạng thái phiên mới. |
| `updateWriting()` biết writer.done; có autoTimer 1,4s khi autoAdvance bật | Tour phải là bộ điều phối duy nhất; vô hiệu hóa auto-advance cũ khi tour hoạt động. |
| Nút/dot/phím/click giấy gọi goTo/skipOrNext trực tiếp | Phải điều phối qua tour khi tour đang chiếm quyền, nếu không clip và thẻ sẽ lệch. |
| `MuseumSound` dùng master Web Audio, tiếng bút là HTMLAudio riêng | Chưa có voice channel; không mute/duck voice bằng cách thay mỗi master của SFX. |
| `MuseumApp.prepare()` gán StoryBoard.onClose | Không ghi đè callback này khi thêm tour; cần cơ chế subscribe hoặc nối callback có cleanup. |
| Mở bằng file://; JSON fetch không đáng tin cậy trên đường này | Runtime dùng manifest JS được generate, còn JSON là đầu vào của công cụ Node. Audio local phát qua HTMLAudioElement. |

## 3. Cấu trúc file đề xuất

| File mới | Vai trò |
|---|---|
| `presentation/presentation-script.json` | Nguồn duy nhất của 60 đoạn lời nói đã biên tập; không chứa API key. |
| `scripts/generate-presentation-audio.mjs` | Chạy local trước buổi học: gọi TTS, lưu MP3, ghi manifest. |
| `scripts/check-presentation-audio.mjs` | Kiểm tra ID, nội dung/hash, file, metadata giải mã và độ phủ 60 clip. |
| `presentation/presentation-audio.json` | Manifest phục vụ công cụ kiểm tra, không fetch ở runtime file://. |
| `presentation/presentation-audio.js` | Cùng manifest ở dạng classic-script `PRESENTATION_AUDIO`; có thể nạp bằng script src trên file:// và HTTP. |
| `audio/presentation/mln-p01/…mp3` | Tài nguyên đã generate, triển khai cùng trang. |
| `museum-narration.js` | Voice player: load/play/pause/resume/stop, xử lý ended và lỗi. |
| `museum-presentation.js` | Điều phối chuyến tham quan, phiên hủy, pause, skip và trạng thái UI. |
| `presentation/tests/` | Kiểm thử bộ điều phối với scene/voice giả, không phụ thuộc render GPU cho logic. |

Giữ `writing-with-pencil.mp3` và các hiệu ứng hiện tại. Không đóng gói MP3 voice vào `museum-image-data.js`; bundle đó chỉ giải quyết ảnh/canvas trên file://.

### Schema đầu vào tối thiểu

```json
{
  "course": "MLN131",
  "version": 1,
  "model": "tts-1",
  "voice": "vi-VN-NamMinhNeural",
  "pieces": [
    {
      "pieceId": "mln-p01",
      "intro": "Lời dẫn tranh đã được duyệt…",
      "steps": [
        { "stepId": "mln-p01-s01", "text": "Lời nói cho step 01…" },
        { "stepId": "mln-p01-s02", "text": "Lời nói cho step 02…" },
        { "stepId": "mln-p01-s03", "text": "Lời nói cho step 03…" }
      ]
    }
  ]
}
```

Ví dụ trên minh họa schema, không phải kịch bản đủ 15 tranh. Tool phải từ chối bản thiếu tranh/step, trùng ID hoặc text placeholder. Lời nói dựa trên ý nghĩa thẻ, không tự bóc tất cả text canvas rồi coi là kịch bản hoàn chỉnh.

Manifest mỗi clip cần có `clipId`, `pieceId`, `stepId` nếu có, `src`, `textHash`, `model`, `voice`, `bytes`, `durationSeconds` lấy từ MP3 thật và trạng thái ready. Hash cache bao gồm text, model, voice và định dạng. Ghi thêm dấu vân tay nội dung tranh/step để tool check phát hiện thẻ đã đổi nhưng voice chưa được biên tập lại.

## 4. Generate MP3 trước khi tích hợp

Endpoint người dùng đã cung cấp:

```text
POST http://localhost:5050/v1/audio/speech
Authorization: Bearer <key từ cấu hình local>
Content-Type: application/json
{ model: "tts-1", input: sentence,
  voice: "vi-VN-NamMinhNeural", response_format: "mp3" }
```

Đề xuất cấu hình bằng `TTS_BASE_URL`, `TTS_API_KEY`, `TTS_VOICE`; mặc định endpoint và voice như trên. Chỉ công cụ Node biết key. Không đưa key vào manifest, source trình duyệt, log, thông báo lỗi hoặc tên file.

Quy trình:

1. Đọc kịch bản, đối chiếu IDs với MUSEUM_PIECES/STORY_DATA thực tế. Đủ 15 intro/45 step rồi mới chạy batch.
2. Chạy thử một intro, một đoạn có ngày tháng, một đoạn có Điều 4; nghe kiểm tra phát âm, ngắt câu và âm lượng.
3. Generate với giới hạn đồng thời 1–2 request. Mỗi request có timeout, kiểm tra HTTP và không ghi body lỗi JSON/HTML thành MP3. Retry giới hạn cho lỗi tạm thời, không retry vô hạn lỗi key/input.
4. Nhận binary, ghi tệp tạm, kiểm tra MP3 giải mã được rồi đưa vào tên file chứa hash. Chỉ đánh dấu ready sau thành công; không phá file tốt cũ khi request mới lỗi.
5. Bỏ qua clip có cùng cache key và file hợp lệ. Nếu text/voice/model đổi thì tạo clip mới; không chỉ kiểm tra tên file tồn tại.
6. Sinh JSON và JS manifest từ cùng dữ liệu. Bản manifest hoàn chỉnh chỉ được phát hành khi kiểm tra đủ 60 clip. Batch lỗi lưu báo cáo để chạy tiếp, không âm thầm đánh dấu thiếu clip là đạt.
7. Chạy check và nghe thử. Sau đó tắt TTS local và kiểm tra bài vẫn chạy từ MP3 sẵn có.

Lệnh dự kiến, chưa chạy trong đợt planning:

```text
node scripts/generate-presentation-audio.mjs --dry-run
node scripts/generate-presentation-audio.mjs --only mln-p01-intro
node scripts/generate-presentation-audio.mjs
node scripts/check-presentation-audio.mjs
```

Không tự xóa MP3 cũ trong batch generate. Dọn clip không còn dùng là công việc riêng sau khi manifest mới đã được kiểm tra.

## 5. Luồng trạng thái và đồng bộ

Controller đề xuất giữ:

```text
status: idle | running | paused | error | completed
phase: closing | moving | piece-intro | opening | step | finishing
pieceId, stepId, runId, operationId
pending: arrived / audioEnded / writerDone / boardClosed
```

Một public interface gọn: `start()`, `pause()`, `resume()`, `next()`, `previous()`, `seek({pieceId, stepId})`, `stop()`, `subscribe(listener)` và snapshot chỉ đọc. Controller chịu trách nhiệm chuỗi tác vụ; UI không tự mở bảng hoặc đổi audio. Voice player không biết camera; scene không biết URL MP3.

Mỗi lần start/stop tạo runId mới. Mỗi lần seek/next/previous tạo operationId mới và hủy operation cũ. Kết quả load audio, ended, camera-ready và callback đóng bảng phải khớp cả phiên lẫn operation trước khi được xử lý. Chỉ token phiên sẽ không đủ khi skip hai lần trong cùng một tour.

Mọi promise chờ phải nhận AbortSignal hoặc cơ chế hủy tương đương; khi bị hủy phải kết thúc với AbortError, gỡ listener và không để chờ treo. Các hàm wait kiểm tra trạng thái hiện tại trước khi subscribe để không bỏ lỡ tín hiệu đã xảy ra.

### Hàng rào hoàn tất một step

```js
// Pseudocode; các API này chưa tồn tại.
await board.goToAndWait(stepIndex, { signal });
await Promise.all([
  narration.play(stepClip, { signal }),
  board.waitUntilWritten(stepId, { signal }),
]);
// Chỉ tiếp tục khi operation còn hiệu lực và tour không paused.
```

Nét viết bắt đầu sau khi camera tới thẻ; lời nói bắt đầu sau tín hiệu step-ready. Nếu play bị chặn/lỗi, pause tiến trình viết của step và hiện cách tiếp tục, không cho tour âm thầm chạy thẻ không tiếng.

### Đến đích trong phòng tranh

Thêm adapter quanh camera hiện có trong `-09.js`: `moveToPiece(index, {signal})`, `pause()`, `resume()`, `cancel()`. Resolve khi sai số vị trí và yaw/pitch dưới ngưỡng đã kiểm tra qua hình; gợi ý vị trí 0,08 đơn vị và góc 0,02 rad. Có thể cần giữ ổn định vài frame; không dựa vào FPS hoặc timeout cố định. Điều chỉnh ngưỡng khi chạy thật, không coi con số gợi ý là thông số đã đo.

Tour gọi chế độ chỉ di chuyển, không kích hoạt pendingBoardTimer. Khi stop/seek phải hủy timer cũ của khám phá, quên đích cũ và không để camera tiếp tục kéo người dùng về tranh trước. Có watchdog để báo lỗi di chuyển bị kẹt; watchdog không được tính là camera đã đến nơi.

## 6. Sửa scene để hỗ trợ tour, giữ khám phá tự do

### Bảng ghim `museum-3d-single-08.js`

- Bổ sung API/adapter: open-and-ready, go-to-and-ready, wait-written, close-and-wait, pause/resume/cancel. Tên hàm cụ thể có thể điều chỉnh, nhưng các tín hiệu phải có ngữ nghĩa này.
- Dùng `st.flight.onDone` cho tín hiệu đến thẻ; không phát step-ready ngay khi st.current đổi.
- Dùng cạnh chuyển writer.done từ false sang true, hoặc snapshot done hiện có, cho wait-written. `finishCurrent()` phải thông báo hoàn tất ngay cả khi do nút Viết nhanh.
- Khi pause: freeze st.flight.t, writer.t, autoTimer; ngừng tiếng bút. RAF có thể tiếp tục render khung hiện tại. Vẫn đọc/reset clock để resume không nhảy thời gian.
- Các fade mở/đóng overlay đang dựa vào CSS và timeout có thể hoàn tất trong lúc pause; controller ghi nhận xong nhưng không tiến phase tới khi resume. Camera, writer và lời nói vẫn phải đứng yên. Không tuyên bố pause có thể dừng từng mili giây của CSS fade.
- Không để `st.isTransitioning` phụ thuộc callback cũ của bảng trước. Hủy timer nội bộ khi đóng/mở/seek, hoặc gắn generation của bảng.
- Tour tạm chiếm quyền autoAdvance; không sửa vĩnh viễn cấu hình khám phá. Cleanup xong phải trả quyền lại.
- Không ghi đè StoryBoard.onClose mà MuseumApp đang dùng để reset clock; dùng subscription hoặc callback được nối và tháo đúng cách.

### Điều khiển `museum-3d-single-09.js`

- Khi tour đang chạy/paused/error: vô hiệu hóa WASD, wheel và kéo camera; xóa moveKeys khi bắt đầu chiếm quyền. Hover không phát âm trong tour.
- Click một tranh khác hoặc bấm nút tranh trước/tiếp trong phòng phải gọi một chính sách duy nhất: MVP dừng tour rồi mới thực hiện khám phá thủ công. Không vừa chạy tour vừa nhận đích khám phá mới.
- Nút/dot/Arrow trong bảng khi tour còn hoạt động được chuyển tới next/previous/seek của controller. Không gọi goTo trực tiếp. Escape dừng tour và đóng bảng về phòng, hủy các tác vụ chờ.
- Nút Viết nhanh chỉ finish writer, vẫn đợi voice. Bước tiếp trong toolbar của tour là hành động skip có chủ ý, dừng clip và chuyển bước.
- Trả quyền điều khiển sau stop/completed/error-exit; không khởi tạo thêm vòng lặp animateMuseum.

### Pause và trạng thái tab

Pause dừng voice tại currentTime, camera tại pose/tiến độ hiện tại, writer tại writer.t. Resume thử phát audio từ cùng vị trí rồi mới mở lại chuyển động; nếu play bị chặn, giữ paused và hiện nút Tiếp tục cần thao tác người dùng. Clip ended xảy ra sát pause được ghi nhận nhưng không được tự chuyển bước cho tới resume.

Tab ẩn tự pause. Quay lại tab vẫn paused, chờ người dùng Tiếp tục để tránh bất ngờ phát tiếng hoặc vấp chính sách autoplay. Không tự pause chỉ vì mở bảng đồ họa; toggle high/low vẫn được phép trong tour.

## 7. Voice player và âm lượng

`museum-narration.js` sở hữu tối đa hai HTMLAudioElement: clip hiện tại và clip kế đang preload; xử lý metadata/canplay, play rejection, ended, error và stalled có watchdog. Không tải cả 60 file vào bộ nhớ và không fetch MP3 local thành blob chỉ để phát; HTMLAudioElement src relative chạy trên file://.

Giữ nguyên tốc độ/cao độ của voice trong MVP. Không thêm thanh seek/rate ngay giai đoạn đầu. Stop/seek phải pause, xóa listeners và dừng clip cũ trước khi gắn clip mới. Sau mỗi trạng thái error phải có cleanup; không tiếp tục dùng ended của element cũ.

Âm lượng đề xuất:

- Voice: slider riêng, mặc định mức dễ nghe; mute voice không thay đổi thời lượng hay logic ended.
- SFX: giữ thiết lập sẵn; khi voice thực sự playing thì hạ bút/vút xuống khoảng 25–35% mức thường. Khôi phục khi voice kết thúc, pause, stop hoặc lỗi. Dùng gain nhân riêng, không ghi đè preference người dùng.
- Nút tắt âm hiện tại được mở rộng thành master mute cho cả voice và SFX. Không tự bật lại âm người dùng đã tắt khi bắt đầu tour. Bắt đầu tour vẫn hoạt động nếu người dùng chủ ý nghe ở mức mute; timeline audio vẫn chạy bình thường.
- Tiếng chân không phát khi tour tự bay; khi pause writer không còn tiếng bút. Không thêm tiếng hover trên giấy.

## 8. UI và chính sách bước trước/tiếp

Nút Thuyết trình xuất hiện sau intro ở phòng và vẫn truy cập được khi đang ở bảng ghim. Khi bấm từ bảng đang mở, controller đóng bảng an toàn rồi bắt đầu từ tranh 01. Không mở thêm một intro dài.

Toolbar gọn trong tour: Tạm dừng/Tiếp tục, Trước, Tiếp, Thoát, chỉ báo `Tranh 03/15 · Bước 02/03`, thanh thời gian clip hiện tại và trạng thái ngắn. Không thêm modal chứa lại toàn bộ bài học.

Quy tắc điều hướng MVP:

- Tiếp ở lời dẫn tranh: bỏ lời dẫn, mở step đầu của tranh đó.
- Tiếp ở một step: sang step kế; cuối tranh thì sang lời dẫn tranh kế. Trong pha chuyển động, áp dụng theo đích logic đã chọn, hủy chuyển động cũ trước khi đi đích mới.
- Trước ở step 02/03: về step trước, phát lại từ đầu. Trước ở step đầu: về lời dẫn cùng tranh. Trước ở lời dẫn: về step cuối tranh trước; ở lời dẫn đầu tiên thì disabled.
- Mỗi lần quay lại step, reset writer và trạng thái visited của đúng step để viết lại đồng bộ voice; không reset mọi thẻ đang xem. Nét viết của thẻ khác vẫn có thể giữ trên bảng.
- Skip liên tiếp phải gộp theo cursor logic, không chạy nhiều chuỗi open/close chồng nhau. Chỉ operation mới nhất được quyền thay phase.
- Hoàn tất: dừng audio, trả điều khiển, hiện Đã hoàn tất 15 tranh và nút Phát lại; không tự replay.

Trạng thái lỗi/thiếu audio: nói rõ tranh/step lỗi, có Thử lại, Bỏ qua đoạn, Thoát. Thử lại clip đó từ đầu; không tự chạy generator. Skip clip lỗi được xem như audio barrier đã được người dùng bỏ qua, nhưng vẫn cần xử lý thẻ/chuyển cảnh theo điều khiển đã chọn.

## 9. Thứ tự nạp và khả năng chạy thiếu tài nguyên voice

Giữ nguyên intro hiện tại. Sau `-02.js` và `-03.js`, nạp manifest JS, voice player và controller; adapter scene phải chỉ được truy cập sau khi `MuseumApp.prepare()` hoàn tất. Có thể nạp controller sau `-09.js` vì nó phải định nghĩa xong trước khi loader gọi prepare.

Không để thiếu manifest MP3 làm boot toàn bảo tàng thất bại. Ship manifest JS rỗng có `status: not-generated` trước giai đoạn generate, hoặc bắt riêng lỗi tải tài nguyên tính năng và hiện nút Thuyết trình chưa sẵn sàng; khám phá tự do vẫn chạy. Không dùng catch chung rồi nuốt lỗi lập trình scene.

Runtime kiểm tra đủ IDs/version/manifest trước khi bật tour; công cụ check trước triển khai chịu trách nhiệm kiểm tra đủ file thật. Không HEAD/fetch 60 MP3 ngay đầu trên file://. Khi chạy, kiểm tra clip hiện tại và preload clip kế; thiếu file được xử lý tại chỗ bằng UI lỗi.

## 10. Work package và điểm dừng

| Gói | File/chỗ sửa | Hoàn tất khi |
|---|---|---|
| A — Kịch bản | presentation-script.json | Đủ 60 đoạn, đúng ID, giữ các phân biệt lịch sử/quan điểm trong bài; không có placeholder. |
| B — Generate/check | Hai script Node + manifest + audio/ | Dry-run đúng, sinh thử nghe được, full batch đủ 60 MP3, chạy lại không gọi lại clip không đổi. |
| C — Voice player | museum-narration.js | play/pause/resume/stop, mute, preload, lỗi và AbortSignal hoạt động độc lập scene. |
| D — Scene adapter | -08.js, -09.js; -07.js nếu cần reset writer | Có arrived/step-ready/written/closed, freeze/resume thật; khám phá tự do không đổi hành vi. |
| E — Controller | museum-presentation.js | Đi đúng 15/45, completion barrier và cancellation đúng, chỉ một tour sở hữu scene. |
| F — UI và tích hợp | HTML/CSS, museum-intro.js, MuseumSound | Nút/toolbar, input routing, ducking, master mute, thiếu voice vẫn mở bảo tàng được. |
| G — Nghiệm thu | tests, CONTEXT, README | Qua ma trận bên dưới và cập nhật đúng trạng thái triển khai. |

Không triển khai tour full rồi mới phát hiện thiếu MP3. Có thể dùng audio fixture ngắn trong test C–E, nhưng không thay fixture bằng lời giảng thật và ghi tính năng đã hoàn tất nếu batch 60 MP3 chưa có.

## 11. Ma trận kiểm thử cần có

### Logic với scene/voice giả

- Đúng thứ tự 15 tranh, 45 step và 15 intro; kết thúc một lần, không vòng lại.
- Camera chưa arrived thì chưa phát lời dẫn; thẻ chưa ready thì chưa phát voice step.
- Voice hết trước writer / writer hết trước voice / cả hai xong: chỉ chuyển khi đủ hai điều kiện.
- Pause trong moving, intro, opening, step và closing; ended sát pause; resume không nhảy pose/time.
- Next/previous liên tục; stop trong load; callback cũ sau stop; restart khi phiên cũ chưa trả callback; không chồng giọng hoặc mở nhầm bảng.
- Viết nhanh giữ clip; Bước tiếp cắt clip; quay lại step reset đúng writer.
- Clip thiếu/HTTP lỗi/decode lỗi/play rejected/stall: không tự nhảy bước hoặc gọi TTS.
- Mute không làm ended sớm; ducking được phục hồi sau mọi nhánh thoát/lỗi.

### Trình duyệt với tài nguyên thật

- Đi thử tranh 01, 08, 11, 14, 15: mốc lịch sử, Điều 4 và kết luận khớp voice/thẻ; cuối cùng chạy đủ một tour.
- Bắt đầu từ phòng và từ một bảng đã mở; thoát rồi WASD/chuột dùng bình thường; deep link board cũ không tranh quyền tour.
- Tab ẩn/tải lại trang; bật/tắt âm; đổi low/high trong lúc pause và chạy.
- Desktop/mobile: toolbar không che nội dung, nút đủ dễ bấm, điều khiển cũ không làm lệch tour.
- file:// trên Chrome/Edge mặc định và HTTP: manifest JS, MP3, ảnh và preload chạy đúng. Không cần cờ allow-file-access-from-files.
- Tắt service localhost:5050, mở bài và tour vẫn chạy. Theo dõi request: không có lời gọi TTS nào trong phiên tham quan.
- File thiếu: khám phá vẫn chạy; tour báo đúng đoạn; Thử lại/Bỏ qua/Thoát có tác dụng.

## 12. Tiêu chí hoàn thành

Tính năng chỉ được đánh dấu hoàn tất khi có **60 MP3 được generate trước và kiểm tra**, tour chạy hết 15 tranh/45 step đúng thứ tự, voice không chồng, camera và writer pause/resume đúng, lỗi và skip không để callback cũ sống lại, file:// lẫn HTTP hoạt động, và chế độ khám phá không bị hỏng. Không mở lại quiz, drawer hoặc Flat View.

Đợt này chỉ bàn giao kế hoạch. Chưa gọi TTS, chưa tạo kịch bản đầy đủ, chưa sinh MP3, chưa sửa API scene hoặc UI runtime.
