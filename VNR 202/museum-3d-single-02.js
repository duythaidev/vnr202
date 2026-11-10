// VNR202: 8 tác phẩm / 26 thẻ. Ảnh chính không chứa UI hoặc sơ đồ.
const MUSEUM_PIECES = [
    {
        "id": 0,
        "contentId": "vnr-p01",
        "revision": 3,
        "mergedFrom": [
            "vnr-p01",
            "vnr-p02"
        ],
        "code": "01",
        "shortLabel": "01 Trước 1930 và Đảng ra đời",
        "chapter": "MỞ ĐẦU",
        "date": "Trước 1930",
        "title": "Trước 1930 và Đảng ra đời",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/nguyen-ai-quoc-tours-1920.webp",
        "imageAspect": 1.3953488372093024,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Nguyễn Ái Quốc tại Đại hội Tours, 1920.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/2002/68220/djang-cong-san-viet-nam-ra-djoi-buoc-ngoat-lich-su-cua-cach-mang-viet-nam.html",
        "hotspots": [
            {
                "name": "Phong trào cũ thất bại",
                "desc": "Thiếu đường lối và tổ chức đúng"
            },
            {
                "name": "Nguyễn Ái Quốc tìm đường",
                "desc": "Từ ra đi đến Hội Thanh niên"
            },
            {
                "name": "Ba tổ chức hợp nhất",
                "desc": "Hội nghị hợp nhất ở Hồng Kông"
            },
            {
                "name": "Cương lĩnh đầu tiên",
                "desc": "Độc lập dân tộc lên hàng đầu"
            }
        ],
        "bullets": [
            "Phong trào cũ thất bại",
            "Nguyễn Ái Quốc tìm đường",
            "Ba tổ chức hợp nhất",
            "Cương lĩnh đầu tiên"
        ]
    },
    {
        "id": 1,
        "contentId": "vnr-p02",
        "revision": 3,
        "mergedFrom": [
            "vnr-p03"
        ],
        "code": "02",
        "shortLabel": "02 Xô viết Nghệ–Tĩnh",
        "chapter": "Ý CHÍNH 1",
        "date": "1930–1931",
        "title": "Xô viết Nghệ–Tĩnh",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/xo-viet-nghe-tinh-tranh.webp",
        "imageAspect": 1.9867549668874172,
        "imageTypeLabel": "Tranh lịch sử tái hiện",
        "imageCredit": "BT Mỹ thuật Việt Nam – Báo Nhân Dân",
        "imageCaption": "Xô viết Nghệ Tĩnh — tranh sơn mài tái hiện.",
        "imageSource": "https://nhandan.vn/special/nhung-mua-xuan-co-dang-qua-tranh-cua-cac-danh-hoa-vi-t/",
        "hotspots": [
            {
                "name": "Cao trào cách mạng",
                "desc": "Bãi công và biểu tình lan rộng"
            },
            {
                "name": "Xô viết Nghệ–Tĩnh",
                "desc": "Chính quyền công nông thu nhỏ"
            },
            {
                "name": "Đàn áp và ý nghĩa",
                "desc": "Tổn thất nặng, ý nghĩa lớn"
            }
        ],
        "bullets": [
            "Cao trào cách mạng",
            "Xô viết Nghệ–Tĩnh",
            "Đàn áp và ý nghĩa"
        ]
    },
    {
        "id": 2,
        "contentId": "vnr-p03",
        "revision": 3,
        "mergedFrom": [
            "vnr-p04"
        ],
        "code": "03",
        "shortLabel": "03 Luận cương và khôi phục",
        "chapter": "Ý CHÍNH 1",
        "date": "1930–1935",
        "title": "Luận cương và khôi phục",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/tran-phu-chan-dung.webp",
        "imageAspect": 0.8104166666666667,
        "imageTypeLabel": "Chân dung lịch sử",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Trần Phú (1904–1931), Tổng Bí thư đầu tiên.",
        "imageSource": "https://baotanglichsu.vn/vi/Album/47/ky-niem-90-nam-ngay-thanh-lap-djang-cong-san-viet-nam-3-2-1930-3-2-2020",
        "hotspots": [
            {
                "name": "Luận cương và hạn chế",
                "desc": "Chưa đặt độc lập lên hàng đầu"
            },
            {
                "name": "Giữ vững khí tiết",
                "desc": "Nhà tù thành trường học"
            },
            {
                "name": "Khôi phục và Đại hội I",
                "desc": "Đại hội I ở Ma Cao"
            }
        ],
        "bullets": [
            "Luận cương và hạn chế",
            "Giữ vững khí tiết",
            "Khôi phục và Đại hội I"
        ]
    },
    {
        "id": 3,
        "contentId": "vnr-p04",
        "revision": 3,
        "mergedFrom": [
            "vnr-p05"
        ],
        "code": "04",
        "shortLabel": "04 Dân chủ, cơm áo, hòa bình",
        "chapter": "Ý CHÍNH 2",
        "date": "1936–1939",
        "title": "Dân chủ, cơm áo, hòa bình",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/dau-xao-1938.webp",
        "imageAspect": 1.446875,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Mít tinh Đấu Xảo, Hà Nội, 1/5/1938.",
        "imageSource": "https://baotanglichsuquocgia.vn/vi/Articles/3097/14191/ngay-1-5-trong-qua-trinh-djau-tranh-cach-mang-viet-nam.html",
        "hotspots": [
            {
                "name": "Nguy cơ phát xít",
                "desc": "Mặt trận nhân dân thế giới"
            },
            {
                "name": "Chủ trương mới và đột phá",
                "desc": "Đổi kẻ thù, nhiệm vụ, mặt trận"
            },
            {
                "name": "Đấu tranh và kết quả",
                "desc": "Đội quân chính trị hàng triệu người"
            }
        ],
        "bullets": [
            "Nguy cơ phát xít",
            "Chủ trương mới và đột phá",
            "Đấu tranh và kết quả"
        ]
    },
    {
        "id": 4,
        "contentId": "vnr-p05",
        "revision": 3,
        "mergedFrom": [
            "vnr-p06"
        ],
        "code": "05",
        "shortLabel": "05 Chuyển hướng chiến lược",
        "chapter": "Ý CHÍNH 3",
        "date": "1939–1941",
        "title": "Chuyển hướng chiến lược",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/pac-bo-suoi-le-nin-hien-nay.webp",
        "imageAspect": 1.566615620214395,
        "imageTypeLabel": "Di tích – ảnh hiện đại",
        "imageCredit": "Bảo tàng Hồ Chí Minh",
        "imageCaption": "Suối Lê-nin, Pác Bó — ảnh hiện đại.",
        "imageSource": "https://baotanghochiminh.vn/phat-trien-du-lich-pac-bo-trong-tinh-hinh-moi.htm",
        "hotspots": [
            {
                "name": "Ba bước chuyển hướng",
                "desc": "TW6, TW7, TW8 hoàn chỉnh"
            },
            {
                "name": "Bốn nội dung cốt lõi",
                "desc": "Giải phóng dân tộc lên tối cao"
            },
            {
                "name": "Việt Minh và nhà nước mới",
                "desc": "Ngọn cờ quy tụ toàn dân"
            }
        ],
        "bullets": [
            "Ba bước chuyển hướng",
            "Bốn nội dung cốt lõi",
            "Việt Minh và nhà nước mới"
        ]
    },
    {
        "id": 5,
        "contentId": "vnr-p06",
        "revision": 3,
        "mergedFrom": [
            "vnr-p07"
        ],
        "code": "06",
        "shortLabel": "06 Chuẩn bị khởi nghĩa",
        "chapter": "Ý CHÍNH 3",
        "date": "1940–1944",
        "title": "Chuẩn bị khởi nghĩa",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/doi-tuyen-truyen-giai-phong-quan-1944.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Đội Việt Nam Tuyên truyền Giải phóng quân, 22/12/1944.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/2002/68108/lung-bo-noi-lanh-tu-ho-chi-minh-quyet-djinh-thanh-lap-djoi-viet-nam-tuyen-truyen-giai-phong-quan.html",
        "hotspots": [
            {
                "name": "Ba tiếng súng báo hiệu",
                "desc": "Bắc Sơn, Nam Kỳ, Đô Lương"
            },
            {
                "name": "Lực lượng chính trị, văn hóa",
                "desc": "Việt Minh lan rộng"
            },
            {
                "name": "Lực lượng vũ trang",
                "desc": "Đội Việt Nam tuyên truyền giải phóng quân"
            }
        ],
        "bullets": [
            "Ba tiếng súng báo hiệu",
            "Lực lượng chính trị, văn hóa",
            "Lực lượng vũ trang"
        ]
    },
    {
        "id": 6,
        "contentId": "vnr-p07",
        "revision": 3,
        "mergedFrom": [
            "vnr-p08",
            "vnr-p09"
        ],
        "code": "07",
        "shortLabel": "07 Kháng Nhật và Tổng khởi nghĩa",
        "chapter": "Ý CHÍNH 3",
        "date": "1945",
        "title": "Kháng Nhật và Tổng khởi nghĩa",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/ha-noi-phu-kham-sai-19-8-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Nhân dân Hà Nội chiếm Phủ Khâm sai, 19/8/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu",
        "hotspots": [
            {
                "name": "Đảo chính và Chỉ thị 12/3",
                "desc": "Kẻ thù duy nhất là phát xít Nhật"
            },
            {
                "name": "Cao trào kháng Nhật",
                "desc": "Khu giải phóng, phá kho thóc"
            },
            {
                "name": "Thời cơ và quyết sách Tân Trào",
                "desc": "Quân lệnh số 1, Đại hội quốc dân"
            },
            {
                "name": "Tổng khởi nghĩa thắng lợi",
                "desc": "Chính quyền về tay nhân dân"
            }
        ],
        "bullets": [
            "Đảo chính và Chỉ thị 12/3",
            "Cao trào kháng Nhật",
            "Thời cơ và quyết sách Tân Trào",
            "Tổng khởi nghĩa thắng lợi"
        ]
    },
    {
        "id": 7,
        "contentId": "vnr-p08",
        "revision": 3,
        "mergedFrom": [
            "vnr-p10"
        ],
        "code": "08",
        "shortLabel": "08 Độc lập và bài học",
        "chapter": "KẾT",
        "date": "2/9/1945",
        "title": "Độc lập và bài học",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-8/le-doc-lap-ba-dinh-2-9-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "imageCaption": "Lễ Độc lập tại Ba Đình, 2/9/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu",
        "hotspots": [
            {
                "name": "Tuyên ngôn Độc lập",
                "desc": "Nước Việt Nam Dân chủ Cộng hòa ra đời"
            },
            {
                "name": "Bốn bài học kinh nghiệm",
                "desc": "Bốn bài học quý báu"
            },
            {
                "name": "Năm cột mốc đường lối",
                "desc": "Mạch chuyển dịch đường lối"
            }
        ],
        "bullets": [
            "Tuyên ngôn Độc lập",
            "Bốn bài học kinh nghiệm",
            "Năm cột mốc đường lối"
        ]
    }
];

function museumImageSrc(src) {
    return location.protocol === "file:" && typeof MUSEUM_LOCAL_IMAGES !== "undefined" && MUSEUM_LOCAL_IMAGES[src] ? MUSEUM_LOCAL_IMAGES[src] : src;
}
