// VNR202: 10 tác phẩm / 38 thẻ. Ảnh chính không chứa UI hoặc sơ đồ.
const MUSEUM_PIECES = [
    {
        "id": 0,
        "contentId": "vnr-p01",
        "revision": 2,
        "mergedFrom": [
            "vnr-p01",
            "vnr-p02"
        ],
        "code": "01",
        "shortLabel": "01 Tìm đường cứu nước",
        "chapter": "I · TRƯỚC 1930 VÀ ĐẢNG RA ĐỜI",
        "date": "Trước 1930",
        "title": "Tìm đường cứu nước",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/nguyen-ai-quoc-tours-1920.webp",
        "imageAspect": 1.3953488372093024,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Bài toán độc lập",
                "desc": "Bài toán độc lập"
            },
            {
                "name": "Bước ngoặt năm 1920",
                "desc": "Bước ngoặt năm 1920"
            },
            {
                "name": "Chuẩn bị một lực lượng mới",
                "desc": "Chuẩn bị một lực lượng mới"
            },
            {
                "name": "Gắn lý luận với phong trào",
                "desc": "Sự chuẩn bị của Nguyễn Ái Quốc gắn con đường giải phóng dân tộc với một tổ chức lãnh đạo mới."
            }
        ],
        "bullets": [
            "Bài toán độc lập",
            "Bước ngoặt năm 1920",
            "Chuẩn bị một lực lượng mới",
            "Gắn lý luận với phong trào"
        ],
        "imageCaption": "Nguyễn Ái Quốc tại Đại hội Tours, 1920.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/2002/68220/djang-cong-san-viet-nam-ra-djoi-buoc-ngoat-lich-su-cua-cach-mang-viet-nam.html"
    },
    {
        "id": 1,
        "contentId": "vnr-p02",
        "revision": 2,
        "mergedFrom": [
            "vnr-p03",
            "vnr-p04"
        ],
        "code": "02",
        "shortLabel": "02 Đảng ra đời",
        "chapter": "I · TRƯỚC 1930 VÀ ĐẢNG RA ĐỜI",
        "date": "02/1930",
        "title": "Đảng ra đời",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/hoi-nghi-thanh-lap-dang-phi-hoanh.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Tranh lịch sử tái hiện",
        "imageCredit": "Phi Hoanh · BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Thống nhất tổ chức",
                "desc": "Thống nhất tổ chức"
            },
            {
                "name": "Độc lập là nhiệm vụ hàng đầu",
                "desc": "Cương lĩnh đầu tiên đặt nhiệm vụ chống đế quốc, giành độc lập dân tộc lên hàng đầu."
            },
            {
                "name": "Tập hợp lực lượng rộng rãi",
                "desc": "Tập hợp lực lượng rộng rãi"
            },
            {
                "name": "Chấm dứt khủng hoảng đường lối",
                "desc": "Sự ra đời của Đảng thống nhất tổ chức lãnh đạo và xác lập đường lối cứu nước."
            }
        ],
        "bullets": [
            "Thống nhất tổ chức",
            "Độc lập là nhiệm vụ hàng đầu",
            "Tập hợp lực lượng rộng rãi",
            "Chấm dứt khủng hoảng đường lối"
        ],
        "imageCaption": "Hội nghị thành lập Đảng — tranh Phi Hoanh.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/2001/68276/ho-chi-minh-voi-cach-mang-giai-phong-dan-toc-va-khoi-nghia.html"
    },
    {
        "id": 2,
        "contentId": "vnr-p03",
        "revision": 2,
        "mergedFrom": [
            "vnr-p05"
        ],
        "code": "03",
        "shortLabel": "03 Xô viết Nghệ–Tĩnh",
        "chapter": "II · 1930–1935",
        "date": "1930–1931",
        "title": "Xô viết Nghệ–Tĩnh",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/xo-viet-nghe-tinh-tranh.webp",
        "imageAspect": 1.9867549668874172,
        "imageTypeLabel": "Tranh lịch sử tái hiện",
        "imageCredit": "BT Mỹ thuật Việt Nam · Báo Nhân Dân",
        "hotspots": [
            {
                "name": "Từ đấu tranh đến cao trào",
                "desc": "Từ đấu tranh đến cao trào"
            },
            {
                "name": "Sức mạnh công–nông",
                "desc": "Ở một số thôn, xã, tổ chức cách mạng và nông hội đứng ra quản lý đời sống."
            },
            {
                "name": "Kinh nghiệm trong thử thách",
                "desc": "Kinh nghiệm trong thử thách"
            }
        ],
        "bullets": [
            "Từ đấu tranh đến cao trào",
            "Sức mạnh công–nông",
            "Kinh nghiệm trong thử thách"
        ],
        "imageCaption": "Xô viết Nghệ Tĩnh — tranh sơn mài tái hiện.",
        "imageSource": "https://nhandan.vn/special/nhung-mua-xuan-co-dang-qua-tranh-cua-cac-danh-hoa-vi-t/"
    },
    {
        "id": 3,
        "contentId": "vnr-p04",
        "revision": 2,
        "mergedFrom": [
            "vnr-p06",
            "vnr-p07",
            "vnr-p08"
        ],
        "code": "04",
        "shortLabel": "04 Luận cương và khôi phục",
        "chapter": "II · 1930–1935",
        "date": "1930–1935",
        "title": "Luận cương và khôi phục",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/tran-phu-chan-dung.webp",
        "imageAspect": 0.8104166666666667,
        "imageTypeLabel": "Chân dung lịch sử",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Luận cương tháng 10",
                "desc": "Luận cương tháng 10"
            },
            {
                "name": "Khác biệt trong cách tập hợp",
                "desc": "Khác biệt trong cách tập hợp"
            },
            {
                "name": "Giữ lực lượng trong nhà tù",
                "desc": "Bị khủng bố, các chiến sĩ vẫn duy trì tổ chức, học tập lý luận và báo chí trong tù."
            },
            {
                "name": "Phục hồi hệ thống tổ chức",
                "desc": "Phục hồi hệ thống tổ chức"
            }
        ],
        "bullets": [
            "Luận cương tháng 10",
            "Khác biệt trong cách tập hợp",
            "Giữ lực lượng trong nhà tù",
            "Phục hồi hệ thống tổ chức"
        ],
        "imageCaption": "Trần Phú (1904–1931), Tổng Bí thư đầu tiên.",
        "imageSource": "https://baotanglichsu.vn/vi/Album/47/ky-niem-90-nam-ngay-thanh-lap-djang-cong-san-viet-nam-3-2-1930-3-2-2020"
    },
    {
        "id": 4,
        "contentId": "vnr-p05",
        "revision": 2,
        "mergedFrom": [
            "vnr-p09",
            "vnr-p10"
        ],
        "code": "05",
        "shortLabel": "05 Dân chủ, cơm áo, hòa bình",
        "chapter": "III · 1936–1939",
        "date": "1936–1939",
        "title": "Dân chủ, cơm áo, hòa bình",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/dau-xao-1938.webp",
        "imageAspect": 1.446875,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Nhiệm vụ trước mắt thay đổi",
                "desc": "Trước nguy cơ phát xít và chiến tranh, Đảng tập trung đòi tự do, dân chủ, cơm áo, hòa bình."
            },
            {
                "name": "Bước đột phá về nhận thức",
                "desc": "Chung quanh vấn đề chiến sách mới tháng 10/1936 nhìn lại quan hệ giữa giải phóng dân tộc và nhiệm vụ ruộng đất."
            },
            {
                "name": "Mở rộng hình thức đấu tranh",
                "desc": "Mở rộng hình thức đấu tranh"
            },
            {
                "name": "Tích lũy lực lượng chính trị",
                "desc": "Tích lũy lực lượng chính trị"
            }
        ],
        "bullets": [
            "Nhiệm vụ trước mắt thay đổi",
            "Bước đột phá về nhận thức",
            "Mở rộng hình thức đấu tranh",
            "Tích lũy lực lượng chính trị"
        ],
        "imageCaption": "Mít tinh Đấu Xảo, Hà Nội, 1/5/1938.",
        "imageSource": "https://baotanglichsuquocgia.vn/vi/Articles/3097/14191/ngay-1-5-trong-qua-trinh-djau-tranh-cach-mang-viet-nam.html"
    },
    {
        "id": 5,
        "contentId": "vnr-p06",
        "revision": 2,
        "mergedFrom": [
            "vnr-p11",
            "vnr-p12"
        ],
        "code": "06",
        "shortLabel": "06 Chuyển hướng chiến lược",
        "chapter": "IV · CHUYỂN HƯỚNG VÀ CHUẨN BỊ",
        "date": "1939–1941",
        "title": "Chuyển hướng chiến lược",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/pac-bo-suoi-le-nin-hien-nay.webp",
        "imageAspect": 1.566615620214395,
        "imageTypeLabel": "Di tích · ảnh hiện đại",
        "imageCredit": "Bảo tàng Hồ Chí Minh",
        "hotspots": [
            {
                "name": "Chiến tranh đổi tình thế",
                "desc": "Chiến tranh đổi tình thế"
            },
            {
                "name": "Dân tộc là ưu tiên cấp bách",
                "desc": "Dân tộc là ưu tiên cấp bách"
            },
            {
                "name": "Quyền tự quyết và Việt Minh",
                "desc": "Quyền tự quyết và Việt Minh"
            },
            {
                "name": "Nhà nước và con đường giành quyền",
                "desc": "Nhà nước và con đường giành quyền"
            }
        ],
        "bullets": [
            "Chiến tranh đổi tình thế",
            "Dân tộc là ưu tiên cấp bách",
            "Quyền tự quyết và Việt Minh",
            "Nhà nước và con đường giành quyền"
        ],
        "imageCaption": "Suối Lê-nin, Pác Bó — ảnh hiện đại.",
        "imageSource": "https://baotanghochiminh.vn/phat-trien-du-lich-pac-bo-trong-tinh-hinh-moi.htm"
    },
    {
        "id": 6,
        "contentId": "vnr-p07",
        "revision": 2,
        "mergedFrom": [
            "vnr-p13"
        ],
        "code": "07",
        "shortLabel": "07 Chuẩn bị cho khởi nghĩa",
        "chapter": "IV · CHUYỂN HƯỚNG VÀ CHUẨN BỊ",
        "date": "1941–1944",
        "title": "Chuẩn bị cho khởi nghĩa",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/doi-tuyen-truyen-giai-phong-quan-1944.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Lực lượng chính trị và văn hóa",
                "desc": "Lực lượng chính trị và văn hóa"
            },
            {
                "name": "Nối các vùng căn cứ",
                "desc": "Cao Bằng, Bắc Sơn–Võ Nhai và hướng Nam tiến tạo liên hệ giữa cơ sở, lực lượng và địa bàn."
            },
            {
                "name": "Đội quân cách mạng ra đời",
                "desc": "Đội quân cách mạng ra đời"
            }
        ],
        "bullets": [
            "Lực lượng chính trị và văn hóa",
            "Nối các vùng căn cứ",
            "Đội quân cách mạng ra đời"
        ],
        "imageCaption": "Đội Việt Nam Tuyên truyền Giải phóng quân, 22/12/1944.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/2002/68108/lung-bo-noi-lanh-tu-ho-chi-minh-quyet-djinh-thanh-lap-djoi-viet-nam-tuyen-truyen-giai-phong-quan.html"
    },
    {
        "id": 7,
        "contentId": "vnr-p08",
        "revision": 2,
        "mergedFrom": [
            "vnr-p14"
        ],
        "code": "08",
        "shortLabel": "08 Kháng Nhật cứu nước",
        "chapter": "V · 1945 VÀ ĐỘC LẬP",
        "date": "03–08/1945",
        "title": "Kháng Nhật cứu nước",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/chi-thi-nhat-phap-ban-nhau-1945.webp",
        "imageAspect": 1.4492753623188406,
        "imageTypeLabel": "Ảnh tư liệu hiện vật",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Tình thế sau ngày 9 tháng 3",
                "desc": "Tình thế sau ngày 9 tháng 3"
            },
            {
                "name": "Xác định kẻ thù trực tiếp",
                "desc": "Chỉ thị tập trung mũi nhọn vào phát xít Nhật, phát động cao trào kháng Nhật cứu nước."
            },
            {
                "name": "Khởi nghĩa gắn với dân sinh",
                "desc": "Khởi nghĩa gắn với dân sinh"
            },
            {
                "name": "Thống nhất và mở rộng căn cứ",
                "desc": "Thống nhất và mở rộng căn cứ"
            }
        ],
        "bullets": [
            "Tình thế sau ngày 9 tháng 3",
            "Xác định kẻ thù trực tiếp",
            "Khởi nghĩa gắn với dân sinh",
            "Thống nhất và mở rộng căn cứ"
        ],
        "imageCaption": "Sách in Chỉ thị ngày 12/3/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/1002/73335/suu-tap-hien-vat-ve-cach-mang-thang-tam-nam-1945-tai-bao-tang-lich-su-quoc-gia.html"
    },
    {
        "id": 8,
        "contentId": "vnr-p09",
        "revision": 2,
        "mergedFrom": [
            "vnr-p14",
            "vnr-p15"
        ],
        "code": "09",
        "shortLabel": "09 Tổng khởi nghĩa Tháng Tám",
        "chapter": "V · 1945 VÀ ĐỘC LẬP",
        "date": "08/1945",
        "title": "Tổng khởi nghĩa Tháng Tám",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/ha-noi-phu-kham-sai-19-8-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Thời cơ và sự chủ động",
                "desc": "Thời cơ và sự chủ động"
            },
            {
                "name": "Quyết định tại Tân Trào",
                "desc": "Quyết định tại Tân Trào"
            },
            {
                "name": "Giành chính quyền ở các đô thị",
                "desc": "Giành chính quyền ở các đô thị"
            },
            {
                "name": "Xác lập chính quyền mới",
                "desc": "Chính phủ lâm thời được hình thành; ngày 30/8, Bảo Đại thoái vị."
            }
        ],
        "bullets": [
            "Thời cơ và sự chủ động",
            "Quyết định tại Tân Trào",
            "Giành chính quyền ở các đô thị",
            "Xác lập chính quyền mới"
        ],
        "imageCaption": "Nhân dân Hà Nội chiếm Phủ Khâm sai, 19/8/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu"
    },
    {
        "id": 9,
        "contentId": "vnr-p10",
        "revision": 2,
        "mergedFrom": [
            "vnr-p15"
        ],
        "code": "10",
        "shortLabel": "10 Độc lập và bài học",
        "chapter": "V · 1945 VÀ ĐỘC LẬP",
        "date": "02/09/1945",
        "title": "Độc lập và bài học",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/le-doc-lap-ba-dinh-2-9-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Tuyên ngôn Độc lập",
                "desc": "Ngày 2/9/1945 tại Ba Đình, Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa."
            },
            {
                "name": "Tính chất và ý nghĩa",
                "desc": "Tính chất và ý nghĩa"
            },
            {
                "name": "Bốn bài học",
                "desc": "Bốn bài học"
            },
            {
                "name": "Mạch đường lối 1930–1945",
                "desc": "Mạch đường lối 1930–1945"
            }
        ],
        "bullets": [
            "Tuyên ngôn Độc lập",
            "Tính chất và ý nghĩa",
            "Bốn bài học",
            "Mạch đường lối 1930–1945"
        ],
        "imageCaption": "Lễ Độc lập tại Ba Đình, 2/9/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu"
    }
];

function museumImageSrc(src) {
    return location.protocol === "file:" && typeof MUSEUM_LOCAL_IMAGES !== "undefined" && MUSEUM_LOCAL_IMAGES[src] ? MUSEUM_LOCAL_IMAGES[src] : src;
}
