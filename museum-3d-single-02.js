
// =========================================================================
// DỮ LIỆU 15 BỨC TRANH TRONG BẢO TÀNG (tách nguyên văn từ file HTML gốc)
// Sửa imageUrl / title / hotspots tại đây.
// Nội dung các step trên bảng ghim (khi click vào tranh) nằm ở js/story-data.js
// =========================================================================
const MUSEUM_PIECES = [
    {
        id: 0,
        code: "PIECE 01",
        shortLabel: "1. Khai thác & Phong trào cũ",
        chapter: "PHẦN I · NỀN TẢNG XUẤT PHÁT (1884 – 2/1930)",
        date: "1884 – 02/1930",
        // 👇 THAY LINK ẢNH SỐ 1 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/2c221e/e6c786?text=TRANH+01%0AKhai+Thac+Thuoc+Dia+%26%0APhong+Trao+Yeu+Nuoc+Cu+(1884-1930)",
        title: "1. Bối cảnh thuộc địa nửa phong kiến & Sự thất bại của các phong trào yêu nước cũ",
        subtitle: "Hiệp ước Patơnốt (6/6/1884), 2 cuộc khai thác thuộc địa & 3 ngả đường cứu nước cũ đều bế tắc",
        hotspots: [
            { name: "Hiệp ước Patơnốt & 2 Cuộc khai thác thuộc địa", desc: "Sau Hiệp ước Patơnốt (6/6/1884) và hai cuộc khai thác thuộc địa của Pháp (1897–1914; 1919–1929), xã hội Việt Nam chuyển thành xã hội thuộc địa nửa phong kiến. Mâu thuẫn chủ yếu nhất là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp và phong kiến phản động." },
            { name: "Khuynh hướng Phong kiến (Cần Vương & Yên Thế)", desc: "Phong trào Cần Vương (1885–1896) và khởi nghĩa nông dân Yên Thế của Hoàng Hoa Thám chiến đấu anh dũng nhưng cuối cùng thất bại do hệ tư tưởng phong kiến đã lỗi thời." },
            { name: "Khuynh hướng Dân chủ tư sản (Phan Bội Châu, Phan Châu Trinh)", desc: "Xu hướng bạo động của Phan Bội Châu và cải cách của Phan Châu Trinh đều không thành công vì thiếu đường lối đúng đắn." },
            { name: "Khởi nghĩa Yên Bái (2/1930 - Việt Nam Quốc dân Đảng)", desc: "Khởi nghĩa Yên Bái (2/1930) thất bại, chấm dứt vai trò lịch sử của khuynh hướng dân chủ tư sản." }
        ],
        bullets: [
            "<strong>Quốc tế:</strong> CNTB chuyển sang đế quốc chủ nghĩa; Cách mạng Tháng Mười Nga (1917) và Quốc tế Cộng sản (3/1919) mở ra thời đại cách mạng vô sản.",
            "<strong>Trong nước:</strong> 2 cuộc khai thác thuộc địa (1897–1914; 1919–1929) làm mâu thuẫn dân tộc gay gắt tột độ.",
            "<strong>Kết cục:</strong> Cả khuynh hướng phong kiến lẫn dân chủ tư sản (đến khởi nghĩa Yên Bái 2/1930) đều thất bại vì thiếu đường lối đúng đắn."
        ],
    },
    {
        id: 1,
        code: "PIECE 02",
        shortLabel: "2. Nguyễn Ái Quốc (1911–1929)",
        chapter: "PHẦN I · NỀN TẢNG XUẤT PHÁT (1884 – 2/1930)",
        date: "1911 – 1929",
        // 👇 THAY LINK ẢNH SỐ 2 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/1e293b/fcd34d?text=TRANH+02%0ANguyen+Ai+Quoc+Chuan+Bi%0ABao+Thanh+Nien+(1925)+%26+Duong+Kach+Menh",
        title: "2. Lớp huấn luyện Quảng Châu, Báo Thanh Niên (1925) & Phong trào 'Vô sản hóa' (1928)",
        subtitle: "Quá trình chuẩn bị toàn diện về Tư tưởng, Chính trị và Tổ chức của Nguyễn Ái Quốc",
        hotspots: [
            { name: "Luận cương của Lênin (7/1920) & Đại hội Tours (12/1920)", desc: "Đọc Luận cương của V.I. Lênin (7/1920) và tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours (12/1920)." },
            { name: "Báo Thanh Niên (21/6/1925) & Đường Kách Mệnh (1927)", desc: "Tháng 6/1925 lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu, ra báo Thanh Niên (21/6/1925) và tác phẩm Đường Kách Mệnh (1927)." },
            { name: "Chuẩn bị về Chính trị (Lấy Công – Nông làm gốc)", desc: "Cách mạng giải phóng dân tộc thuộc phạm trù cách mạng vô sản, có thể thắng lợi trước cách mạng vô sản ở chính quốc." },
            { name: "Phong trào 'Vô sản hóa' (từ 29/9/1928)", desc: "Đưa cán bộ vào nhà máy, hầm mỏ, đồn điền cùng lao động và giác ngộ công nhân." }
        ],
        bullets: [
            "<strong>Tư tưởng:</strong> Báo <em>Người cùng khổ</em>, tác phẩm <em>Đường cách mệnh (1927)</em>.",
            "<strong>Chính trị:</strong> Cách mạng giải phóng dân tộc thuộc phạm trù cách mạng vô sản, có thể thắng lợi trước cách mạng vô sản ở chính quốc.",
            "<strong>Tổ chức:</strong> Lập Hội VN Cách mạng Thanh niên (6/1925 tại Quảng Châu), ra báo <em>Thanh niên (21/6/1925)</em>, thúc đẩy <em>'Vô sản hóa' (29/9/1928)</em>."
        ],
    },
    {
        id: 2,
        code: "PIECE 03",
        shortLabel: "3. Hội nghị Cửu Long (2/1930)",
        chapter: "PHẦN I · NỀN TẢNG XUẤT PHÁT (1884 – 2/1930)",
        date: "06/1 – 07/2/1930",
        // 👇 THAY LINK ẢNH SỐ 3 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/451a03/fde047?text=TRANH+03%0AHoi+Nghi+Thanh+Lap+Dang%0ACuu+Long+-+Huong+Cang+(02/1930)",
        title: "3. Hội nghị Hợp nhất thành lập Đảng Cộng sản Việt Nam tại Cửu Long, Hương Cảng (2/1930)",
        subtitle: "Nguyễn Ái Quốc chủ trì hợp nhất 3 tổ chức cộng sản (6/1 – 7/2/1930)",
        hotspots: [
            { name: "Lãnh tụ Nguyễn Ái Quốc chủ trì Hội nghị (6/1 – 7/2/1930)", desc: "Tại bán đảo Cửu Long (Hồng Kông), Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất, thành lập Đảng Cộng sản Việt Nam." },
            { name: "Đông Dương Cộng sản Đảng (17/6/1929 - Bắc Kỳ)", desc: "Ra đời ngày 17/6/1929 tại Bắc Kỳ trước sự lớn mạnh của phong trào công nhân." },
            { name: "An Nam Cộng sản Đảng (11/1929 - Nam Kỳ)", desc: "Ra đời tháng 11/1929 tại Nam Kỳ." },
            { name: "Đông Dương Cộng sản Liên đoàn (Gia nhập 24/2/1930)", desc: "Ra đời tháng 9/1929 tại Trung Kỳ; ngày 24/2/1930 chính thức gia nhập Đảng Cộng sản Việt Nam." }
        ],
        bullets: [
            "<strong>3 Tổ chức Cộng sản năm 1929:</strong> Đông Dương CSĐ (17/6/1929 - Bắc Kỳ), An Nam CSĐ (11/1929 - Nam Kỳ), Đông Dương CS Liên đoàn (9/1929 - Trung Kỳ).",
            "<strong>Hội nghị hợp nhất (6/1 – 7/2/1930):</strong> Họp tại Cửu Long (Hương Cảng) do Nguyễn Ái Quốc chủ trì, thành lập <strong>Đảng Cộng sản Việt Nam</strong> (24/2/1930 Đông Dương CS Liên đoàn chính thức gia nhập)."
        ],
    },
    {
        id: 3,
        code: "PIECE 04",
        shortLabel: "4. Cương lĩnh đầu tiên (2/1930)",
        chapter: "PHẦN I · NỀN TẢNG XUẤT PHÁT (1884 – 2/1930)",
        date: "Tháng 02/1930",
        // 👇 THAY LINK ẢNH SỐ 4 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/7f1d1d/fef08a?text=TRANH+04%0ACuong+Linh+Chinh+Tri+Dau+Tien%0AChanh+Cuong+%26+Sach+Luoc+Van+Tat+(2/1930)",
        title: "4. Cương Lĩnh Chính Trị Đầu Tiên (Chánh Cương Vắn Tắt & Sách Lược Vắn Tắt 2/1930)",
        subtitle: "Đặt nhiệm vụ chống đế quốc, giành độc lập dân tộc lên hàng đầu & Khối đại đoàn kết dân tộc",
        hotspots: [
            { name: "Phương hướng chiến lược", desc: "Làm 'tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'." },
            { name: "Nhiệm vụ hàng đầu: Chống đế quốc, giành độc lập dân tộc", desc: "Đặt chống đế quốc ở vị trí hàng đầu; về kinh tế chỉ tịch thu sản nghiệp và ruộng đất của đế quốc Pháp chia cho dân cày nghèo." },
            { name: "Lực lượng cách mạng (Đại đoàn kết dân tộc)", desc: "Công – nông là gốc; liên lạc với tiểu tư sản, trí thức, trung nông; lợi dụng hoặc trung lập phú nông, trung/tiểu địa chủ và tư bản An Nam chưa rõ mặt phản cách mạng." },
            { name: "Phương pháp & Vai trò lãnh đạo", desc: "Dùng bạo lực cách mạng của quần chúng; gắn kết cách mạng thế giới; Đảng là đội tiên phong của giai cấp vô sản." }
        ],
        bullets: [
            "<strong>Chiến lược:</strong> Làm <em>'tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'</em>.",
            "<strong>Ưu tiên số 1:</strong> Đặt <strong>chống đế quốc, giành độc lập dân tộc ở vị trí hàng đầu</strong> (chỉ tịch thu ruộng đất của đế quốc Pháp).",
            "<strong>Lực lượng:</strong> Công – nông là gốc; lôi kéo tiểu tư sản, trí thức, trung nông; trung lập/lợi dụng phú nông, trung/tiểu địa chủ và tư bản An Nam."
        ],
    },
    {
        id: 4,
        code: "PIECE 05",
        shortLabel: "5. Xô viết Nghệ Tĩnh (9/1930)",
        chapter: "PHẦN II · CÂU 1: CAO TRÀO 1930–1931 & KHÔI PHỤC 1932–1935",
        date: "Tháng 1 – 9/1930",
        // 👇 THAY LINK ẢNH SỐ 5 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/5c1414/fde047?text=TRANH+05%0ACao+Trao+1930-1931+%26+Dinh+Cao%0AXo+Viet+Nghe+-+Tinh+(9/1930)",
        title: "5. Phong trào cách mạng 1930 – 1931 và Đỉnh cao Xô Viết Nghệ - Tĩnh",
        subtitle: "Bãi công Bến Thủy (8/1930), Biểu tình Hưng Nguyên (12/9/1930) & Ủy ban tự quản kiểu Xô viết",
        hotspots: [
            { name: "Tháng 1–8/1930: Bãi công Phú Riềng, Nam Định, Bến Thủy", desc: "Bùng nổ ngày Quốc tế Lao động 1/5/1930 và 121 cuộc đấu tranh từ tháng 6–8/1930, tiêu biểu là tổng bãi công Bến Thủy – Vinh (8/1930)." },
            { name: "Biểu tình Hưng Nguyên (12/9/1930)", desc: "Cuộc biểu tình ở Hưng Nguyên ngày 12/9/1930 bị Pháp ném bom làm 171 người thiệt mạng." },
            { name: "Ủy ban tự quản kiểu Xô viết ở thôn, xã", desc: "Các chi bộ đảng và ban chấp hành nông hội đứng ra quản lý đời sống xã hội theo hình thức ủy ban tự quản kiểu Xôviết." },
            { name: "Ý nghĩa lịch sử 1930 – 1931", desc: "Khẳng định trên thực tế quyền và năng lực lãnh đạo của giai cấp vô sản; củng cố khối liên minh công – nông." }
        ],
        bullets: [
            "<strong>Bối cảnh:</strong> Khủng hoảng kinh tế 1929–1933 + Khủng bố trắng sau Yên Bái (2/1930).",
            "<strong>Diễn biến:</strong> Tháng 1–4/1930 → Tháng 5–8/1930 (Bến Thủy 8/1930) → Tháng 9/1930 (Đỉnh cao Xô viết Nghệ - Tĩnh, Hưng Nguyên 12/9/1930).",
            "<strong>Chính quyền tự quản:</strong> Chi bộ đảng & Nông hội quản lý xã thôn theo mô hình Xô viết."
        ],
    },
    {
        id: 5,
        code: "PIECE 06",
        shortLabel: "6. Luận cương Trần Phú (10/1930)",
        chapter: "PHẦN II · CÂU 1: CAO TRÀO 1930–1931 & KHÔI PHỤC 1932–1935",
        date: "14 – 31/10/1930",
        // 👇 THAY LINK ẢNH SỐ 6 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/1e293b/cbd5e1?text=TRANH+06%0ALuan+Cuong+Chinh+Tri+Thang+10/1930%0ATong+Bi+Thu+Tran+Phu",
        title: "6. Hội nghị Trung ương 1 & Luận Cương Chính Trị Tháng 10/1930 (Điểm nhấn phản biện)",
        subtitle: "Đổi tên Đảng Cộng sản Đông Dương, bầu đồng chí Trần Phú làm Tổng Bí thư & Hạn chế 'tả' khuynh",
        hotspots: [
            { name: "Hội nghị TW 1 tại Hương Cảng (14–31/10/1930)", desc: "Đổi tên Đảng thành Đảng Cộng sản Đông Dương, bầu đồng chí Trần Phú làm Tổng Bí thư." },
            { name: "Nội dung: 'Vấn đề thổ địa là cái cốt'", desc: "Khẳng định 'Vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền'; động lực chính là vô sản và nông dân." },
            { name: "Hạn chế và nguyên nhân (Điểm nhấn phản biện)", desc: "Không đặt nhiệm vụ giải phóng dân tộc lên hàng đầu mà nặng về đấu tranh giai cấp và cách mạng ruộng đất; chưa đánh giá đúng khả năng yêu nước của các giai tầng khác." },
            { name: "Chỉ thị lập Hội Phản đế đồng minh (18/11/1930)", desc: "Ngày 18/11/1930 Thường vụ TW ra chỉ thị lập Hội Phản đế đồng minh, nhưng tư tưởng chung vẫn chịu ảnh hưởng 'tả' khuynh của QTCS." }
        ],
        bullets: [
            "<strong>Nội dung Luận cương (10/1930):</strong> Coi <em>'Vấn đề thổ địa là cái cốt'</em>, phương pháp là <em>'võ trang bạo động'</em> theo khuôn phép nhà binh.",
            "<strong>Hạn chế (Điểm nhấn phản biện):</strong> Nặng về đấu tranh giai cấp & ruộng đất; xem nhẹ khả năng yêu nước của tiểu tư sản, tư sản dân tộc, tiểu/trung địa chủ."
        ],
    },
    {
        id: 6,
        code: "PIECE 07",
        shortLabel: "7. Nhà tù Đế quốc & Báo tù",
        chapter: "PHẦN II · CÂU 1: CAO TRÀO 1930–1931 & KHÔI PHỤC 1932–1935",
        date: "1931 – 1934",
        // 👇 THAY LINK ẢNH SỐ 7 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/18181b/f87171?text=TRANH+07%0ANha+Tu+Hoa+Lo+-+Con+Dao+(1931-1934)%0ABao+Duoc+Dua+Duong+%26+Nguoi+Tu+Do",
        title: "7. Đấu tranh trong Nhà tù Đế quốc (Hỏa Lò, Côn Đảo) & Phê phán sai lầm 'Thanh Đảng' (5/1931)",
        subtitle: "Biến nhà tù thành trường học cách mạng, ra báo Đuốc đưa đường, Con đường chính, Người tù đỏ",
        hotspots: [
            { name: "Khủng bố trắng 4/1931 & TBT Trần Phú hy sinh (6/9/1931)", desc: "Tháng 4/1931 toàn bộ BCH Trung ương bị bắt; Trần Phú hy sinh ngày 6/9/1931 tại Sài Gòn; Nguyễn Ái Quốc bị bắt ở Hồng Kông ngày 6/6/1931." },
            { name: "Chỉ thị tháng 5/1931 phê phán 'Thanh trừ trí, phú, địa, hào'", desc: "Tháng 5/1931, Thường vụ Trung ương ra chỉ thị phê phán chủ trương thanh Đảng sai lầm 'thanh trừ trí, phú, địa, hào, đào tận gốc trốc tận rễ' của Xứ ủy Trung Kỳ." },
            { name: "Báo chí trong tù: Đuốc đưa đường, Con đường chính, Người tù đỏ", desc: "Các đảng viên lập chi bộ bí mật trong tù, biên soạn lý luận, dịch kinh điển Mác – Lênin và viết báo bí mật." },
            { name: "Ngày 11/4/1931: QTCS công nhận Chi bộ độc lập", desc: "Ngày 11/4/1931, Quốc tế Cộng sản công nhận Đảng Cộng sản Đông Dương là một chi bộ độc lập." }
        ],
        bullets: [
            "<strong>Tổn thất 1931:</strong> Tháng 4/1931 toàn bộ BCH Trung ương bị bắt; Trần Phú hy sinh (6/9/1931); Nguyễn Ái Quốc bị bắt ở Hồng Kông (6/6/1931).",
            "<strong>Chấn chỉnh sai lầm:</strong> Tháng 5/1931 phê phán khẩu hiệu <em>'thanh trừ trí, phú, địa, hào, đào tận gốc trốc tận rễ'</em> của Xứ ủy Trung Kỳ.",
            "<strong>Trong nhà tù đế quốc:</strong> Ra báo <em>Đuốc đưa đường, Con đường chính, Người tù đỏ</em>."
        ],
    },
    {
        id: 7,
        code: "PIECE 08",
        shortLabel: "8. Đại hội I tại Ma Cao (3/1935)",
        chapter: "PHẦN II · CÂU 1: CAO TRÀO 1930–1931 & KHÔI PHỤC 1932–1935",
        date: "1932 – 03/1935",
        // 👇 THAY LINK ẢNH SỐ 8 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/3b1812/fde047?text=TRANH+08%0ADai+Hoi+Dai+Bieu+Lan+Thu+I%0AMa+Cao+-+Trung+Quoc+(3/1935)",
        title: "8. Chương Trình Hành Động (1932), Ban Chỉ Huy Ở Ngoài & Đại Hội I Tại Ma Cao (3/1935)",
        subtitle: "Bầu đồng chí Lê Hồng Phong làm Tổng Bí thư, đánh dấu sự phục hồi hệ thống tổ chức Đảng",
        hotspots: [
            { name: "Chương trình hành động của Đảng (15/6/1932)", desc: "Lê Hồng Phong cùng một số đồng chí công bố Chương trình hành động của Đảng Cộng sản Đông Dương theo chỉ thị của QTCS." },
            { name: "Sơ thảo lịch sử Đảng (3/1933) & Ban Chỉ huy ở ngoài (1934)", desc: "Tháng 3/1933 Hà Huy Tập viết Sơ thảo lịch sử phong trào CSĐD; đầu năm 1934 lập Ban Chỉ huy ở ngoài." },
            { name: "Đại hội I tại Ma Cao (3/1935 - 3 nhiệm vụ trước mắt)", desc: "Đề ra 3 nhiệm vụ: củng cố phát triển Đảng, đẩy mạnh tập hợp quần chúng, tuyên truyền chống đế quốc; bầu Lê Hồng Phong làm Tổng Bí thư." },
            { name: "Hạn chế của Đại hội I (3/1935)", desc: "Vẫn chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, còn rập khuôn gắn chặt phản đế với điền địa." }
        ],
        bullets: [
            "<strong>Chỉ đạo khôi phục:</strong> <em>Chương trình hành động</em> (15/6/1932 - Lê Hồng Phong); <em>Sơ thảo lịch sử phong trào CSĐD</em> (3/1933 - Hà Huy Tập); lập <strong>Ban Chỉ huy ở ngoài</strong> (đầu 1934).",
            "<strong>Đại hội I tại Ma Cao (3/1935):</strong> Bầu <strong>Lê Hồng Phong</strong> làm Tổng Bí thư, cử <strong>Nguyễn Ái Quốc</strong> làm đại diện bên cạnh QTCS."
        ],
    },
    {
        id: 8,
        code: "PIECE 09",
        shortLabel: "9. Đông Dương ĐH & Chiến sách mới",
        chapter: "PHẦN II · CÂU 2: PHONG TRÀO DÂN CHỦ (1936 – 1939)",
        date: "1936 – 1937",
        // 👇 THAY LINK ẢNH SỐ 9 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/0c4a6e/7dd3fc?text=TRANH+09%0AChien+Sach+Moi+(10/1936)+%26%0ADong+Duong+Dai+Hoi+(600+Uy+Ban)",
        title: "9. Hội Nghị TW 7/1936, 'Chiến Sách Mới' (10/1936), 600 Ủy Ban Hành Động & Đón Gôđa",
        subtitle: "Bước đột phá lý luận tháng 10/1936 & Cao trào Đông Dương Đại hội thu thập Dân nguyện",
        hotspots: [
            { name: "Đại hội VII QTCS (7/1935) & HN TW 7/1936 (Thượng Hải)", desc: "Xác định kẻ thù nguy hiểm trước mắt là chủ nghĩa phát xít và bọn phản động thuộc địa; đòi tự do, dân chủ, cơm áo, hòa bình." },
            { name: "Văn kiện 'Chung quanh vấn đề chiến sách mới' (10/1936)", desc: "Khẳng định cuộc dân tộc giải phóng không nhất định phải kết chặt với cuộc cách mạng điền địa — bước đột phá lý luận quan trọng." },
            { name: "Phong trào Đông Dương đại hội (600 Ủy ban ở Nam Kỳ)", desc: "Lập các ủy ban hành động thu thập 'dân nguyện' gửi phái đoàn điều tra của Chính phủ Mặt trận nhân dân Pháp." },
            { name: "Đón rước phái viên Gôđa & Toàn quyền Brêviê (Đầu 1937)", desc: "Tổ chức biểu dương lực lượng quần chúng đón Gôđa (Godart) và Toàn quyền Brêviê." }
        ],
        bullets: [
            "<strong>Hội nghị TW 7/1936 (Thượng Hải):</strong> Lập Mặt trận nhân dân phản đế (đến 3/1938 đổi thành <strong>Mặt trận Dân chủ Đông Dương</strong>); kết hợp công khai, hợp pháp với bí mật, bất hợp pháp.",
            "<strong>Đột phá lý luận (10/1936):</strong> Văn kiện <em>Chung quanh vấn đề chiến sách mới</em> tháo gỡ sự buộc chặt giữa phản đế và điền địa."
        ],
    },
    {
        id: 9,
        code: "PIECE 10",
        shortLabel: "10. Khu Đấu Xảo & Tự chỉ trích",
        chapter: "PHẦN II · CÂU 2: PHONG TRÀO DÂN CHỦ (1936 – 1939)",
        date: "1937 – 1939",
        // 👇 THAY LINK ẢNH SỐ 10 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/1e3a8a/fde047?text=TRANH+10%0AMit+Tinh+Khu+Dau+Xao+(1/5/1938)%0ABao+Dan+Chung+%26+Sach+Tu+Chi+Trich",
        title: "10. Mít Tinh Khu Đấu Xảo (1/5/1938), Báo Chí Công Khai & Tác Phẩm 'Tự Chỉ Trích' (1939)",
        subtitle: "Đấu tranh nghị trường, Hội truyền bá Quốc ngữ & Đội quân chính trị 35.009 hội viên",
        hotspots: [
            { name: "Mít tinh Khu Đấu Xảo Hà Nội (1/5/1938)", desc: "Kỷ niệm Quốc tế Lao động 1/5/1938 với cuộc mít tinh khổng lồ tại Khu Đấu Xảo Hà Nội." },
            { name: "Đấu tranh Nghị trường & Hội truyền bá Quốc ngữ (Cuối 1937)", desc: "Tranh cử vào Viện dân biểu Bắc Kỳ, Trung Kỳ, Hội đồng quản hạt Nam Kỳ; phát triển mạnh Hội truyền bá quốc ngữ." },
            { name: "Tác phẩm 'Tự chỉ trích' (Tổng Bí thư Nguyễn Văn Cừ, 1939)", desc: "Tác phẩm lý luận xuất sắc về tự phê bình và phê bình trong Đảng cùng Vấn đề dân cày (1938), Chủ nghĩa mácxít phổ thông (1938)." },
            { name: "Kết quả đội quân chính trị (4/1938)", desc: "Đến tháng 4/1938 có 1.597 đảng viên bí mật, hơn 200 đảng viên công khai và 35.009 hội viên quần chúng." }
        ],
        bullets: [
            "<strong>Quần chúng & Nghị trường:</strong> Bãi công vùng mỏ (12/11/1936); Mít tinh Khu Đấu Xảo (1/5/1938); lập <strong>Hội truyền bá Quốc ngữ (cuối 1937)</strong>.",
            "<strong>Báo chí & Lý luận:</strong> <em>Tờrốtxky và phản cách mạng</em> (Hà Huy Tập, 5/1937), <em>Vấn đề dân cày</em> (1938), <em>Chủ nghĩa mácxít phổ thông</em> (Hải Triều), <strong>Tự chỉ trích</strong> (Nguyễn Văn Cừ, 1939)."
        ],
    },
    {
        id: 10,
        code: "PIECE 11",
        shortLabel: "11. Bà Điểm TW 6 & 3 Tiếng súng",
        chapter: "PHẦN II · CÂU 3: GIẢI PHÓNG DÂN TỘC (1939 – 1945)",
        date: "09/1939 – 01/1941",
        // 👇 THAY LINK ẢNH SỐ 11 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/451a03/fbbf24?text=TRANH+11%0AHoi+Nghi+TW+6+Ba+Diem+(11/1939)%0ABac+Son+-+Nam+Ky+-+Do+Luong",
        title: "11. Hội Nghị TW 6 (11/1939 tại Bà Điểm, Hóc Môn), TW 7 (11/1940) & 3 Tiếng Súng Báo Hiệu",
        subtitle: "Ách 'một cổ hai tròng' Pháp – Nhật & Mở đầu chuyển hướng chỉ đạo chiến lược",
        hotspots: [
            { name: "Ách 'Một cổ hai tròng' Pháp – Nhật (9/1940)", desc: "Tháng 9/1939 Thế chiến II bùng nổ; tháng 9/1940 Nhật vào Đông Dương, Pháp câu kết với Nhật đẩy nhân dân ta vào cảnh 'một cổ hai tròng'." },
            { name: "Hội nghị Trung ương 6 (11/1939 tại Bà Điểm, Hóc Môn)", desc: "Chủ trương 'Đứng trên lập trường giải phóng dân tộc, lấy quyền lợi dân tộc làm tối cao'; tạm gác khẩu hiệu cách mạng ruộng đất; lập Mặt trận dân tộc thống nhất phản đế Đông Dương." },
            { name: "Hội nghị Cán bộ Trung ương 7 (11/1940 tại Đình Bảng)", desc: "Vẫn chưa thật sự dứt khoát khi cho rằng 'Cách mạng phản đế và cách mạng thổ địa phải đồng thời tiến'." },
            { name: "3 Tiếng súng báo hiệu: Bắc Sơn, Nam Kỳ, Đô Lương", desc: "Khởi nghĩa Bắc Sơn (27/9/1940), Khởi nghĩa Nam Kỳ (23/11/1940) và Binh biến Đô Lương (13/1/1941)." }
        ],
        bullets: [
            "<strong>Hội nghị TW 6 (11/1939 - Bà Điểm, Hóc Môn):</strong> Đặt quyền lợi dân tộc làm tối cao; tạm gác khẩu hiệu cách mạng ruộng đất.",
            "<strong>3 Tiếng súng báo hiệu:</strong> Bắc Sơn (27/9/1940), Nam Kỳ (23/11/1940), Đô Lương (13/1/1941)."
        ],
    },
    {
        id: 11,
        code: "PIECE 12",
        shortLabel: "12. Pác Bó & HN TW 8 (5/1941)",
        chapter: "PHẦN II · CÂU 3: GIẢI PHÓNG DÂN TỘC (1939 – 1945)",
        date: "10 – 19/5/1941",
        // 👇 THAY LINK ẢNH SỐ 12 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/064e3b/fde047?text=TRANH+12%0AHoi+Nghi+Trung+Uong+8+(5/1941)%0APac+Bo+-+Cao+Bang+%26+Mat+Tran+Viet+Minh",
        title: "12. Hội Nghị Trung Ương 8 (5/1941 tại Pác Bó, Cao Bằng) & 6 Nội Dung Cốt Lõi",
        subtitle: "Nguyễn Ái Quốc chủ trì, bầu Trường Chinh làm Tổng Bí thư, thành lập Mặt trận Việt Minh",
        hotspots: [
            { name: "Nội dung 1 & 2: Mâu thuẫn chủ yếu & Chỉ giải quyết Dân tộc giải phóng", desc: "Khẳng định cuộc cách mạng hiện tại chỉ giải quyết một vấn đề cần kíp là 'dân tộc giải phóng', tiếp tục tạm gác khẩu hiệu đánh đổ địa chủ chia ruộng đất." },
            { name: "Nội dung 3 & 4: Dân tộc tự quyết từng nước & Mặt trận Việt Minh", desc: "Lập ở mỗi nước Đông Dương một mặt trận riêng (ở Việt Nam là Việt Minh); tập hợp mọi người yêu nước không phân biệt giai cấp vào các hội 'Cứu quốc'." },
            { name: "Nội dung 5: Thành lập nước Việt Nam Dân chủ Cộng hòa", desc: "Sau khi cách mạng thành công sẽ lập nước Việt Nam Dân chủ Cộng hòa của toàn thể nhân dân liên hợp chứ không lập chính quyền Xôviết của riêng công – nông." },
            { name: "Nội dung 6: Chuẩn bị Khởi nghĩa vũ trang là nhiệm vụ trung tâm", desc: "Đi từ khởi nghĩa từng phần trong từng địa phương để mở đường cho cuộc tổng khởi nghĩa to lớn." }
        ],
        bullets: [
            "<strong>Hoàn chỉnh chuyển hướng (5/1941 tại Cao Bằng):</strong> Nguyễn Ái Quốc chủ trì, bầu đồng chí <strong>Trường Chinh</strong> làm Tổng Bí thư.",
            "<strong>6 Nội dung cốt lõi:</strong> (1) Mâu thuẫn toàn dân tộc với Pháp–Nhật; (2) Chỉ giải quyết một vấn đề cần kíp là <em>dân tộc giải phóng</em>; (3) Lập <strong>Mặt trận Việt Minh</strong>; (4) Hội <em>Cứu quốc</em>; (5) Lập nhà nước <strong>Việt Nam Dân chủ Cộng hòa</strong>; (6) Chuẩn bị khởi nghĩa vũ trang là trung tâm."
        ],
    },
    {
        id: 12,
        code: "PIECE 13",
        shortLabel: "13. Rừng Trần Hưng Đạo (12/1944)",
        chapter: "PHẦN II · CÂU 3: GIẢI PHÓNG DÂN TỘC (1939 – 1945)",
        date: "1941 – 12/1944",
        // 👇 THAY LINK ẢNH SỐ 13 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/14532d/a7f3d0?text=TRANH+13%0ADoi+VN+Tuyen+Truyen+Giai+Phong+Quan%0A22/12/1944+%26+De+Cuong+Van+Hoa+1943",
        title: "13. Đề Cương Văn Hóa (1943), Hành Lang 'Nam Tiến' & Đội VN Tuyên Truyền Giải Phóng Quân (22/12/1944)",
        subtitle: "Xây dựng lực lượng chính trị, văn hóa, căn cứ địa và thắng lợi Phai Khất – Nà Ngần",
        hotspots: [
            { name: "Đề cương về Văn hóa Việt Nam (1943) & Đảng Dân chủ (6/1944)", desc: "Năm 1943 công bố Đề cương văn hóa Việt Nam với 3 nguyên tắc: Dân tộc – Khoa học – Đại chúng; tháng 6/1944 giúp lập Đảng Dân chủ Việt Nam." },
            { name: "Căn cứ Bắc Sơn – Võ Nhai, Cao Bằng & Hành lang 'Nam tiến' (Cuối 1943)", desc: "Mở rộng căn cứ Cao Bằng và mở hành lang 'Nam tiến' nối liền với Bắc Sơn – Võ Nhai cuối năm 1943." },
            { name: "Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944)", desc: "Thành lập ngày 22/12/1944 tại Cao Bằng theo chỉ thị của Hồ Chí Minh." },
            { name: "Chiến thắng Phai Khất (25/12) & Nà Ngần (26/12/1944)", desc: "Thắng liền hai trận mở màn Phai Khất và Nà Ngần chỉ vài ngày sau khi thành lập." }
        ],
        bullets: [
            "<strong>Chính trị & Văn hóa:</strong> Tuyên ngôn Việt Minh (25/10/1941); HN Võng La (2/1943); <strong>Đề cương văn hóa Việt Nam (1943)</strong> (Dân tộc, Khoa học, Đại chúng).",
            "<strong>Căn cứ & Vũ trang:</strong> Mở hành lang <strong>'Nam tiến' (cuối 1943)</strong>; ngày <strong>22/12/1944</strong> thành lập <strong>Đội VN Tuyên truyền Giải phóng quân</strong>, thắng trận Phai Khất & Nà Ngần."
        ],
    },
    {
        id: 13,
        code: "PIECE 14",
        shortLabel: "14. Phá kho thóc & Tân Trào",
        chapter: "PHẦN II · CÂU 3: GIẢI PHÓNG DÂN TỘC (1939 – 1945)",
        date: "09/3 – 16/8/1945",
        // 👇 THAY LINK ẢNH SỐ 14 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/78350f/fde047?text=TRANH+14%0AChi+Thi+12/3/1945+-+Pha+Kho+Thoc%0A%26+Dai+Hoi+Quoc+Dan+Tan+Trao+(16/8/1945)",
        title: "14. Cao Trào Kháng Nhật Cứu Nước (Chỉ Thị 12/3/1945), Phá Kho Thóc & Đại Hội Quốc Dân Tân Trào",
        subtitle: "Quân lệnh số 1 (13/8/1945), 3 nguyên tắc chỉ đạo khởi nghĩa & Thời cơ 'Ngàn năm có một'",
        hotspots: [
            { name: "Chỉ thị 'Nhật – Pháp bắn nhau và hành động của chúng ta' (12/3/1945)", desc: "Ngay sau đêm 9/3/1945 Nhật đảo chính Pháp, Ban Thường vụ TW ra chỉ thị xác định kẻ thù duy nhất trước mắt là phát xít Nhật." },
            { name: "Phá kho thóc Nhật giải quyết nạn đói & Khu giải phóng Việt Bắc (4/6/1945)", desc: "Khởi nghĩa Ba Tơ; HN quân sự Bắc Kỳ (15/5/1945); lập Khu giải phóng Việt Bắc (4/6/1945) và phong trào Phá kho thóc Nhật." },
            { name: "Thời cơ 'Ngàn năm có một' & Quân lệnh số 1 (23h ngày 13/8/1945)", desc: "Tồn tại từ khi Nhật đầu hàng Đồng minh (15/8) đến trước khi quân Đồng minh (Tưởng & Anh) kéo vào Đông Dương." },
            { name: "Hội nghị toàn quốc (14–15/8) & Đại hội Quốc dân Tân Trào (16/8/1945)", desc: "Xác định 3 nguyên tắc (tập trung, thống nhất, kịp thời); thông qua 10 chính sách Việt Minh và cử Ủy ban dân tộc giải phóng Việt Nam." }
        ],
        bullets: [
            "<strong>Chỉ thị 12/3/1945:</strong> Xác định kẻ thù duy nhất là <strong>phát xít Nhật</strong>; đẩy mạnh <em>'Phá kho thóc, giải quyết nạn đói'</em>; lập <strong>Khu giải phóng Việt Bắc (4/6/1945)</strong>.",
            "<strong>Chạy đua nước rút (8/1945):</strong> <strong>Quân lệnh số 1</strong> (13/8); <strong>HN toàn quốc</strong> (14–15/8); <strong>Đại hội Quốc dân Tân Trào</strong> (16/8/1945)."
        ],
    },
    {
        id: 14,
        code: "PIECE 15",
        shortLabel: "15. Ba Đình Độc Lập (2/9/1945)",
        chapter: "PHẦN II · CÂU 3: TỔNG KHỞI NGHĨA & 4 BÀI HỌC KINH NGHIỆM",
        date: "14/8 – 02/9/1945",
        // 👇 THAY LINK ẢNH SỐ 15 CỦA BẠN TẠI ĐÂY:
        imageUrl: "https://placehold.co/900x650/991b1b/fde047?text=TRANH+15%0ATuyen+Ngon+Doc+Lap+2/9/1945%0AQuang+Truong+Ba+Dinh+-+Ha+Noi",
        title: "15. Thắng Lợi Thần Tốc Trong 15 Ngày & Tuyên Ngôn Độc Lập Tại Quảng Trường Ba Đình (2/9/1945)",
        subtitle: "Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8), Bảo Đại thoái vị (30/8) & 4 Bài học kinh nghiệm",
        hotspots: [
            { name: "4 Tỉnh sớm nhất (14–18/8) & Khởi nghĩa Hà Nội (19/8/1945)", desc: "4 tỉnh giành chính quyền sớm nhất: Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam. Ngày 19/8 khởi nghĩa thắng lợi ở Hà Nội." },
            { name: "Khởi nghĩa Huế (23/8), Sài Gòn (25/8) & Bảo Đại thoái vị (30/8/1945)", desc: "Đập tan cơ quan đầu não địch; ngày 30/8/1945 vua Bảo Đại thoái vị tại Huế, chấm dứt chế độ quân chủ hàng nghìn năm." },
            { name: "Tuyên ngôn Độc lập tại Quảng trường Ba Đình (2/9/1945)", desc: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa." },
            { name: "4 Bài học kinh nghiệm lớn của Cách mạng Tháng Tám", desc: "(1) Giương cao ngọn cờ giải phóng dân tộc; (2) Đại đoàn kết trong Mặt trận Việt Minh; (3) Bạo lực quần chúng, kết hợp chính trị – vũ trang, chớp thời cơ; (4) Xây dựng Đảng tiên phong vững mạnh." }
        ],
        bullets: [
            "<strong>Thắng lợi thần tốc trong 15 ngày:</strong> 4 tỉnh sớm nhất (Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam 14–18/8) → <strong>Hà Nội (19/8)</strong> → <strong>Huế (23/8)</strong> → <strong>Sài Gòn (25/8)</strong> → <strong>Tuyên ngôn Độc lập (2/9/1945)</strong>.",
            "<strong>4 Bài học lớn:</strong> (1) Đặt giải phóng dân tộc lên tối cao; (2) Đại đoàn kết trong Mặt trận Việt Minh; (3) Kết hợp chính trị – vũ trang, chớp thời cơ; (4) Xây dựng Đảng vững mạnh."
        ],
    }
];

