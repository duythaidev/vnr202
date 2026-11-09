# Kế hoạch nội dung bảo tàng MLN131

Trạng thái: bản biên tập đã triển khai thành 15 tranh / 45 step trong HTML/JS. Các ghi chú biên tập ở tài liệu này không được in nguyên lên thẻ. Chủ đề của nhóm: **Vai trò lãnh đạo của Đảng Cộng sản Việt Nam có mâu thuẫn với nguyên tắc pháp quyền trong Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam hay không? Vì sao?**

Giữ khung 15 tranh của base, chia 5 chặng × 3 tranh. Mỗi tranh có 3 step bảng ghim, tổng 45 step; đây là cách chia mới cho bảo tàng, không phải khẳng định game nguồn có 45 phần. Nội dung chính dựa trên DOCX nhóm; giáo trình và tài liệu game bổ trợ. Đây không phải giáo án bao quát toàn bộ môn MLN131.

## Bản đồ hành trình

| Tranh | Chặng | Mốc | Tên tranh | Ảnh chính |
|---|---|---|---|---|
| 01 | I · Nền móng | 1919–1945 | Từ yêu sách đến độc lập | [l1p2.jpg](../assets/images/l1p2.jpg) |
| 02 | I · Nền móng | 06/01/1946 | Mỗi công dân, một lá phiếu | [l1p3.webp](../assets/images/l1p3.webp) |
| 03 | I · Nền móng | 11/1946 | Hiến pháp đầu tiên | [l1p5.jpg](../assets/images/l1p5.jpg) |
| 04 | II · Đổi mới tư duy | 1976–1986 | Dân chủ và yêu cầu đổi mới | [l2p2.jpg](../assets/images/l2p2.jpg) |
| 05 | II · Đổi mới tư duy | 12/1986 | Đổi mới: lấy dân làm gốc | [l2p4.jpg](../assets/images/l2p4.jpg) |
| 06 | II · Đổi mới tư duy | Thời kỳ Đổi mới | Bản chất, mục tiêu, động lực | [l2p5.webp](../assets/images/l2p5.webp) |
| 07 | III · Hình thành mô hình | 1991 | Quản lý xã hội bằng pháp luật | [l3p2.jpg](../assets/images/l3p2.jpg) |
| 08 | III · Hình thành mô hình | 1992 | Quyền lãnh đạo và khuôn khổ pháp luật | [l3p3.webp](../assets/images/l3p3.webp) |
| 09 | III · Hình thành mô hình | 1994–1995 | Của dân, do dân, vì dân | [l3p4.webp](../assets/images/l3p4.webp) |
| 10 | IV · Hiến định và hoàn thiện | 2001–2011 | Thống nhất nhưng có kiểm soát | [l4p2.webp](../assets/images/l4p2.webp) |
| 11 | IV · Hiến định và hoàn thiện | 2013 | Điều 4: lãnh đạo và trách nhiệm | [l4p3.jpg](../assets/images/l4p3.jpg) |
| 12 | IV · Hiến định và hoàn thiện | 2021–2022 | Tiếp tục hoàn thiện nhà nước pháp quyền | [l4p5.webp](../assets/images/l4p5.webp) |
| 13 | V · Lập luận và kết luận | Bốn lý do | Vì sao theo quan điểm chính thức không mâu thuẫn | [l5p1.webp](../assets/images/l5p1.webp) |
| 14 | V · Lập luận và kết luận | Cải cách và thực thi | Từ khuôn khổ đến đời sống | [l5p3.jpg](../assets/images/l5p3.jpg) |
| 15 | V · Lập luận và kết luận | Kết luận | Lãnh đạo trong khuôn khổ pháp luật | [l5p5.webp](../assets/images/l5p5.webp) |

## Cách đọc và triển khai

Mỗi đoạn dưới đây là nội dung diễn giải của một thẻ; khi đưa lên canvas, rút thành 2–3 ý ngắn và giữ phần giải thích dài cho lời nói. `text`, `note`, `flow`, `timeline`, `image`, `quote`, `bullets` là gợi ý block có sẵn trong renderer, không phải yêu cầu tạo component mới. Không dán nguyên một đoạn dài vào thẻ.

Lời thuyết trình sau này đi từ giới thiệu tranh đến từng step; mỗi step nói theo chính ý nghĩa dưới đây bằng câu hoàn chỉnh. Chỉ generate MP3 sau khi nhóm duyệt nội dung. Không tạo voice ở runtime; không bật lại quiz, Flat View hay drawer cũ. Thời lượng sơ bộ 15–22 phút, phải đo lại sau khi viết và generate lời nói, không dùng con số này làm timer chuyển cảnh.

## Tranh 01 · Từ yêu sách đến độc lập

- ID dự kiến: `mln-p01`; index JS: `0`.
- Chặng/mốc: I · Nền móng · 1919–1945.
- Ảnh chính: [l1p2.jpg](../assets/images/l1p2.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.1; giáo trình Chương 4; mốc 1922 đối chiếu nguồn S1.

### Step 01 · Đòi quyền bằng pháp luật

Gợi ý block: `timeline`. 1919: Yêu sách của nhân dân An Nam đòi các bảo đảm pháp lý và thay chế độ sắc lệnh bằng chế độ đạo luật. Đây là tiền đề tư tưởng, chưa phải thuật ngữ Nhà nước pháp quyền xã hội chủ nghĩa.

### Step 02 · Tư tưởng hiến pháp

Gợi ý block: `quote`. 1922: Việt Nam yêu cầu ca diễn đạt tư tưởng đề cao hiến pháp, pháp luật. Khi trích câu thơ phải ghi đúng tác phẩm và mốc năm, không gán trực tiếp câu thơ cho năm 1919.

### Step 03 · Nhân dân thành chủ thể

Gợi ý block: `image`. Ngày 2/9/1945 mở ra nhà nước Việt Nam Dân chủ Cộng hòa. Từ yêu cầu quyền của một dân tộc, bài học chuyển sang cách tổ chức quyền lực của một nhà nước độc lập.

## Tranh 02 · Mỗi công dân, một lá phiếu

- ID dự kiến: `mln-p02`; index JS: `1`.
- Chặng/mốc: I · Nền móng · 06/01/1946.
- Ảnh chính: [l1p3.webp](../assets/images/l1p3.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.1; giáo trình Chương 4 I.2.b.

### Step 01 · Chọn người đại diện

Gợi ý block: `image`. Tổng tuyển cử đầu tiên ngày 6/1/1946 bầu Quốc hội. Lá phiếu là hình ảnh trực quan về sự tham gia của người dân vào việc hình thành cơ quan quyền lực nhà nước.

### Step 02 · Quyền làm chủ chính trị

Gợi ý block: `text`. Dân chủ trên lĩnh vực chính trị thể hiện ở quyền tham gia công việc nhà nước. Giải thích bằng tình huống bầu đại biểu, không đồng nhất toàn bộ dân chủ với một thủ tục bỏ phiếu.

### Step 03 · Từ lá phiếu đến Hiến pháp

Gợi ý block: `flow`. Nhân dân bầu cơ quan đại diện; Quốc hội thực hiện nhiệm vụ lập hiến. Đây là cầu nối để sang bức tranh về Hiến pháp đầu tiên.

## Tranh 03 · Hiến pháp đầu tiên

- ID dự kiến: `mln-p03`; index JS: `2`.
- Chặng/mốc: I · Nền móng · 11/1946.
- Ảnh chính: [l1p5.jpg](../assets/images/l1p5.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.1; bản thuyết trình game L1.3.

### Step 01 · Nền tảng tổ chức nhà nước

Gợi ý block: `image`. Hiến pháp năm 1946 đặt nền móng cho tổ chức nhà nước dân chủ. Dùng ảnh bìa tài liệu hiện có để học sinh nhận diện một văn bản cụ thể.

### Step 02 · Quyền lực cần khuôn khổ

Gợi ý block: `flow`. Hiến pháp xác lập nền tảng cho tổ chức quyền lực và quyền của công dân. Diễn giải mối liên hệ giữa độc lập dân tộc, dân chủ và khuôn khổ pháp luật.

### Step 03 · Phân biệt các giai đoạn

Gợi ý block: `note`. Hiến pháp 1946 chưa có điều khoản về vai trò lãnh đạo của Đảng. Không áp nội dung Điều 4 Hiến pháp 2013 ngược về năm 1946; các mốc hiến định sau được giới thiệu ở chặng tiếp theo.

## Tranh 04 · Dân chủ và yêu cầu đổi mới

- ID dự kiến: `mln-p04`; index JS: `3`.
- Chặng/mốc: II · Đổi mới tư duy · 1976–1986.
- Ảnh chính: [l2p2.jpg](../assets/images/l2p2.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: Giáo trình Chương 4 III.1.a; DOCX III.2.

### Step 01 · Bối cảnh sau thống nhất

Gợi ý block: `timeline`. Sau năm 1976, xây dựng đất nước đặt ra yêu cầu phát triển kinh tế và hoàn thiện quản lý xã hội. Ảnh phiếu mua lương thực minh họa đời sống một thời kỳ, không đại diện cho toàn bộ lịch sử.

### Step 02 · Những vấn đề được đặt ra

Gợi ý block: `text`. Theo giáo trình, quan hệ giữa dân chủ và nhà nước pháp quyền chưa được làm rõ đầy đủ trong giai đoạn này. Dân sinh, dân trí và dân quyền cần được đặt đúng vị trí.

### Step 03 · Vì sao cần đổi mới

Gợi ý block: `flow`. Từ những hạn chế trong nhận thức và thực tiễn, hình thành nhu cầu đổi mới tư duy quản lý. Bài học dẫn sang Đại hội VI, không quy mọi khó khăn về một nguyên nhân duy nhất.

## Tranh 05 · Đổi mới: lấy dân làm gốc

- ID dự kiến: `mln-p05`; index JS: `4`.
- Chặng/mốc: II · Đổi mới tư duy · 12/1986.
- Ảnh chính: [l2p4.jpg](../assets/images/l2p4.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.2; giáo trình Chương 4 III.1.a.

### Step 01 · Bước ngoặt Đại hội VI

Gợi ý block: `image`. Đại hội VI năm 1986 khởi xướng công cuộc Đổi mới. Giới thiệu đây là bước ngoặt tư duy, trong đó có phát huy dân chủ và tăng cường pháp chế.

### Step 02 · Nhân dân ở vị trí trung tâm

Gợi ý block: `text`. Tư tưởng lấy dân làm gốc nhấn mạnh vai trò và quyền làm chủ của nhân dân. Dùng ví dụ về việc lắng nghe ý kiến, không thêm một số liệu thành tựu chưa có trong tài liệu.

### Step 03 · Dân chủ gắn với pháp luật

Gợi ý block: `flow`. Phát huy dân chủ cần đi cùng kỷ luật, kỷ cương và thể chế hóa bằng pháp luật. Chuyển sang ba phương diện của dân chủ ở bức tranh kế.

## Tranh 06 · Bản chất, mục tiêu, động lực

- ID dự kiến: `mln-p06`; index JS: `5`.
- Chặng/mốc: II · Đổi mới tư duy · Thời kỳ Đổi mới.
- Ảnh chính: [l2p5.webp](../assets/images/l2p5.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: Giáo trình Chương 4 III.1.a; bản thuyết trình game L2.3.

### Step 01 · Bản chất và mục tiêu

Gợi ý block: `text`. Theo giáo trình, dân chủ xã hội chủ nghĩa thể hiện bản chất của chế độ, đồng thời là mục tiêu của quá trình xây dựng và phát triển. Trình bày hai ý ngắn, tránh một định nghĩa quá dài.

### Step 02 · Động lực phát triển

Gợi ý block: `image`. Sự tham gia và sáng kiến của nhân dân là nguồn lực của phát triển. Tranh lao động hiện có chỉ đóng vai trò minh họa, không được chú thích như ảnh tư liệu một sự kiện cụ thể.

### Step 03 · Quyền đi cùng trách nhiệm

Gợi ý block: `flow`. Dân chủ gắn với kỷ luật, kỷ cương và pháp luật. Quyền làm chủ cần cơ chế bảo đảm thực hiện, không chỉ dừng ở khẩu hiệu.

## Tranh 07 · Quản lý xã hội bằng pháp luật

- ID dự kiến: `mln-p07`; index JS: `6`.
- Chặng/mốc: III · Hình thành mô hình · 1991.
- Ảnh chính: [l3p2.jpg](../assets/images/l3p2.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.3; nguồn S3.

### Step 01 · Cương lĩnh năm 1991

Gợi ý block: `text`. Cương lĩnh năm 1991 nêu định hướng Nhà nước quản lý xã hội bằng pháp luật. Không viết rằng cụm từ Nhà nước pháp quyền đã có trong chính Cương lĩnh này.

### Step 02 · Mốc phát triển nhận thức

Gợi ý block: `timeline`. Theo nguồn đối chiếu, Hội nghị Trung ương 2 khóa VII ngày 29/11/1991 đề cập khái niệm Nhà nước pháp quyền xã hội chủ nghĩa. Phân biệt hội nghị này với Đại hội VII diễn ra trước đó.

### Step 03 · Từ định hướng đến thể chế

Gợi ý block: `flow`. Định hướng chính trị cần được thể hiện trong thiết chế và pháp luật. Dẫn vào việc đọc Điều 4 và Điều 12 của Hiến pháp năm 1992.

## Tranh 08 · Quyền lãnh đạo và khuôn khổ pháp luật

- ID dự kiến: `mln-p08`; index JS: `7`.
- Chặng/mốc: III · Hình thành mô hình · 1992.
- Ảnh chính: [l3p3.webp](../assets/images/l3p3.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.4; nội dung bài học L3.2.

### Step 01 · Vai trò lãnh đạo

Gợi ý block: `text`. Điều 4 Hiến pháp 1992 ghi nhận vai trò lãnh đạo của Đảng. Khi trình bày đây là mốc trong tiến trình hiến định, không gọi năm 1992 là lần đầu tiên hiến định vai trò này.

### Step 02 · Nghĩa vụ tuân thủ

Gợi ý block: `flow`. Cũng tại Điều 4, các tổ chức của Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật. Quyền lãnh đạo và khuôn khổ hoạt động phải được đọc cùng nhau.

### Step 03 · Nhà nước quản lý bằng pháp luật

Gợi ý block: `text`. Điều 12 nói về quản lý xã hội bằng pháp luật và tăng cường pháp chế. Không gán thuật ngữ hiến định được bổ sung năm 2001 cho nguyên bản năm 1992.

## Tranh 09 · Của dân, do dân, vì dân

- ID dự kiến: `mln-p09`; index JS: `8`.
- Chặng/mốc: III · Hình thành mô hình · 1994–1995.
- Ảnh chính: [l3p4.webp](../assets/images/l3p4.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.3; giáo trình Chương 4 III.2.b.

### Step 01 · Quan điểm được phát triển

Gợi ý block: `timeline`. Tài liệu nhóm đặt các mốc Hội nghị giữa nhiệm kỳ khóa VII năm 1994 và Hội nghị Trung ương 8 khóa VII năm 1995 trong quá trình phát triển quan điểm về nhà nước của dân, do dân, vì dân.

### Step 02 · Ba mặt gắn liền

Gợi ý block: `flow`. Của dân: quyền lực thuộc về nhân dân. Do dân: nhân dân tham gia xây dựng và giám sát nhà nước. Vì dân: hoạt động nhà nước hướng tới phục vụ nhân dân.

### Step 03 · Từ nguyên tắc đến cơ chế

Gợi ý block: `text`. Các nguyên tắc cần biểu hiện trong bầu cử, giám sát và trách nhiệm phục vụ. Gắn lại câu hỏi xuyên suốt: lãnh đạo và pháp quyền phải hướng tới quyền làm chủ.

## Tranh 10 · Thống nhất nhưng có kiểm soát

- ID dự kiến: `mln-p10`; index JS: `9`.
- Chặng/mốc: IV · Hiến định và hoàn thiện · 2001–2011.
- Ảnh chính: [l4p2.webp](../assets/images/l4p2.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.4; nguồn S3; giáo trình Chương 4 III.2.

### Step 01 · Hiến định thuật ngữ

Gợi ý block: `timeline`. Năm 2001, sửa đổi Hiến pháp 1992 hiến định thuật ngữ Nhà nước pháp quyền xã hội chủ nghĩa. Phân biệt thời điểm sửa đổi với bản Hiến pháp gốc năm 1992.

### Step 02 · Ba chức năng của quyền lực

Gợi ý block: `flow`. Cương lĩnh bổ sung, phát triển năm 2011 nêu quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát trong thực hiện các quyền lập pháp, hành pháp, tư pháp.

### Step 03 · Không chỉ là chia việc

Gợi ý block: `note`. Kiểm soát là thành tố cần được nhấn mạnh bên cạnh phân công và phối hợp. Sơ đồ chỉ nhằm diễn giải nguyên tắc, không vẽ ba nhánh như mô hình tam quyền phân lập.

## Tranh 11 · Điều 4: lãnh đạo và trách nhiệm

- ID dự kiến: `mln-p11`; index JS: `10`.
- Chặng/mốc: IV · Hiến định và hoàn thiện · 2013.
- Ảnh chính: [l4p3.jpg](../assets/images/l4p3.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX II.2, III.4; Hiến pháp 2013, nguồn S2.

### Step 01 · Vai trò được ghi nhận

Gợi ý block: `text`. Khoản 1 Điều 4 xác định vai trò lãnh đạo Nhà nước và xã hội của Đảng. Đây là một phần của điều khoản, cần đọc tiếp các yêu cầu về trách nhiệm và khuôn khổ hoạt động.

### Step 02 · Giám sát và trách nhiệm

Gợi ý block: `flow`. Khoản 2 đặt yêu cầu gắn bó, phục vụ, chịu sự giám sát và chịu trách nhiệm trước nhân dân. Minh họa mối liên hệ giữa lãnh đạo và trách nhiệm giải trình.

### Step 03 · Khuôn khổ áp dụng cho ai

Gợi ý block: `note`. Khoản 3 đề cập các tổ chức của Đảng và đảng viên hoạt động trong khuôn khổ Hiến pháp và pháp luật. Phân biệt với cách diễn đạt về tổ chức của Đảng ở bản năm 1992.

## Tranh 12 · Tiếp tục hoàn thiện nhà nước pháp quyền

- ID dự kiến: `mln-p12`; index JS: `11`.
- Chặng/mốc: IV · Hiến định và hoàn thiện · 2021–2022.
- Ảnh chính: [l4p5.webp](../assets/images/l4p5.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX III.5; Nghị quyết 27, nguồn S4.

### Step 01 · Một tiến trình tiếp tục

Gợi ý block: `timeline`. Bài nhóm đặt Đại hội XIII và Nghị quyết 27 trong chặng hoàn thiện mô hình. Mốc ngày của nghị quyết là 9/11/2022, không nhầm với ngày đăng bài giới thiệu văn bản.

### Step 02 · Những hướng cần làm

Gợi ý block: `text`. Tổng hợp các hướng trong tài liệu: hoàn thiện thể chế, kiểm soát quyền lực và nâng hiệu lực thực thi. Không biến một chủ trương thành khẳng định rằng mọi mục tiêu đã hoàn tất.

### Step 03 · Nhìn cả kết quả và hạn chế

Gợi ý block: `note`. Tài liệu thừa nhận còn các vấn đề cần khắc phục. Đây là cầu nối sang phần lập luận: sự thống nhất được giải thích ở bình diện lý luận và thể chế, còn thực thi phải được đánh giá riêng.

## Tranh 13 · Vì sao theo quan điểm chính thức không mâu thuẫn

- ID dự kiến: `mln-p13`; index JS: `12`.
- Chặng/mốc: V · Lập luận và kết luận · Bốn lý do.
- Ảnh chính: [l5p1.webp](../assets/images/l5p1.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX I, II, IV; bản thuyết trình mục 5.

### Step 01 · Bản chất và mục tiêu

Gợi ý block: `text`. Theo quan điểm chính thức trong bài nhóm, vai trò lãnh đạo và pháp quyền cùng hướng tới lợi ích của nhân dân. Đây là lý do thứ nhất; giữ rõ chủ thể của nhận định, không viết như một kết luận được mọi quan điểm thừa nhận.

### Step 02 · Hiến định và phương thức lãnh đạo

Gợi ý block: `flow`. Lý do thứ hai là cơ sở hiến định gắn quyền với nghĩa vụ. Lý do thứ ba là lãnh đạo bằng đường lối, công tác cán bộ, kiểm tra và nêu gương; không đồng nhất lãnh đạo với làm thay chức năng nhà nước.

### Step 03 · Kiểm soát và đối chiếu

Gợi ý block: `text`. Lý do thứ tư là kiểm soát quyền lực. Thu gọn bảng đối chiếu của DOCX thành bốn cặp: nguồn gốc quyền lực, cơ sở hoạt động, ranh giới quyền lực và trách nhiệm giải trình; dùng block ngắn, không thêm modal sơ đồ riêng.

## Tranh 14 · Từ khuôn khổ đến đời sống

- ID dự kiến: `mln-p14`; index JS: `13`.
- Chặng/mốc: V · Lập luận và kết luận · Cải cách và thực thi.
- Ảnh chính: [l5p3.jpg](../assets/images/l5p3.jpg); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX II.4, V; giáo trình Chương 4 III.3.b.

### Step 01 · Phục vụ người dân

Gợi ý block: `image`. Cải cách hành chính và bãi bỏ thủ tục gây phiền hà là ví dụ trong giáo trình về hoàn thiện nhà nước pháp quyền. Ảnh minh họa việc bỏ giấy tờ không phải bằng chứng một thủ tục cụ thể đã được bãi bỏ.

### Step 02 · Kiểm soát lạm quyền

Gợi ý block: `flow`. Trách nhiệm công vụ, giám sát và xử lý vi phạm là điều kiện để khuôn khổ có hiệu lực. Phân biệt kỷ luật trong Đảng với trách nhiệm theo pháp luật; không đồng nhất hai hình thức xử lý.

### Step 03 · Những vấn đề còn được tranh luận

Gợi ý block: `note`. DOCX có phần phản biện về kiểm soát độc lập, tư pháp và cách hiểu pháp quyền. Bảo lưu điều này bằng ghi chú về yêu cầu kiểm chứng hiệu quả cơ chế trong thực tế; các cáo buộc/báo cáo cụ thể chỉ đưa vào khi có nguồn xác định, không biến thành quiz.

## Tranh 15 · Lãnh đạo trong khuôn khổ pháp luật

- ID dự kiến: `mln-p15`; index JS: `14`.
- Chặng/mốc: V · Lập luận và kết luận · Kết luận.
- Ảnh chính: [l5p5.webp](../assets/images/l5p5.webp); xem lưu ý ảnh trong [kế hoạch ảnh](02-images-and-sources.md).
- Căn cứ: DOCX VI; bản thuyết trình mục 5–6.

### Step 01 · Trả lời câu hỏi mở đầu

Gợi ý block: `text`. Theo quan điểm chính thức được trình bày trong bài nhóm, vai trò lãnh đạo của Đảng và nguyên tắc pháp quyền không loại trừ nhau. Nêu kết luận kèm các điều kiện, không chỉ đặt một khẩu hiệu kết thúc.

### Step 02 · Ba ý cần nhớ

Gợi ý block: `bullets`. Quyền lãnh đạo gắn nghĩa vụ tuân thủ pháp luật. Pháp quyền đặt yêu cầu kiểm soát và ngăn lạm quyền. Xây dựng cơ chế và nâng chất lượng thực thi vẫn là nhiệm vụ tiếp tục.

### Step 03 · Liên hệ với người học

Gợi ý block: `text`. Quay lại quyền tham gia, giám sát và ý thức tuân thủ pháp luật của mỗi người. Kết thúc hành trình bằng trách nhiệm công dân, không tự mở lại quiz hay bảng phản biện đã được gỡ.

## Nguồn và các điểm cần soát

Đọc [02-images-and-sources.md](02-images-and-sources.md) cho danh sách nguồn S1–S4 và những sai khác đã tìm thấy trong tài liệu cũ. Riêng phần phản biện trong DOCX là nội dung có thực của bài nhóm, không được xóa khỏi hồ sơ nguồn: bản bảo tàng rút thành ghi chú ở tranh 14, còn phần chi tiết dùng cho người thuyết trình khi thảo luận. Nếu muốn công bố nhận định của một tổ chức/báo cáo cụ thể, cần bổ sung nguồn đầy đủ thay cho các tên miền rời rạc trong DOCX.

## Quyết định khi triển khai

Dùng l1p2.webp, l2p2.webp, l2p4.webp và l3p2.webp cho ảnh chính thay các ảnh chụp sự kiện chưa xác minh. Dùng l5p3.webp thay JPG trùng minh họa. Nhãn ảnh ghi minh họa chủ đề; hai bìa Hiến pháp ghi bìa tài liệu. Dữ liệu runtime là nơi kiểm tra danh sách ảnh đang thực sự dùng.
