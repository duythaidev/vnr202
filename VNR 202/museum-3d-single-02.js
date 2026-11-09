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
        "chapter": "MỞ ĐẦU",
        "date": "Trước 1930",
        "title": "Tìm đường cứu nước",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/nguyen-ai-quoc-tours-1920.webp",
        "imageAspect": 1.3953488372093024,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Ách thống trị và mâu thuẫn dân tộc",
                "desc": "Pháp thống trị, mâu thuẫn dân tộc gay gắt"
            },
            {
                "name": "Giai cấp mới, con đường cũ bế tắc",
                "desc": "Các phong trào yêu nước thất bại"
            },
            {
                "name": "Nguyễn Ái Quốc tìm đường cứu nước",
                "desc": "Từ 1911 đến Đại hội Tours 1920"
            },
            {
                "name": "Chuẩn bị tư tưởng, chính trị, tổ chức",
                "desc": "Chuẩn bị ba mặt để lập Đảng"
            }
        ],
        "bullets": [
            "Ách thống trị và mâu thuẫn dân tộc",
            "Giai cấp mới, con đường cũ bế tắc",
            "Nguyễn Ái Quốc tìm đường cứu nước",
            "Chuẩn bị tư tưởng, chính trị, tổ chức"
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
        "chapter": "MỞ ĐẦU",
        "date": "02/1930",
        "title": "Đảng ra đời",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/hoi-nghi-thanh-lap-dang-phi-hoanh.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Tranh lịch sử tái hiện",
        "imageCredit": "Phi Hoanh · BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Ba tổ chức cộng sản năm 1929",
                "desc": "Ba tổ chức cộng sản cần hợp nhất"
            },
            {
                "name": "Hội nghị thành lập Đảng",
                "desc": "Hội nghị hợp nhất ở Cửu Long"
            },
            {
                "name": "Cương lĩnh chính trị đầu tiên",
                "desc": "Độc lập dân tộc lên hàng đầu"
            },
            {
                "name": "Chấm dứt khủng hoảng đường lối",
                "desc": "Chấm dứt khủng hoảng đường lối"
            }
        ],
        "bullets": [
            "Ba tổ chức cộng sản năm 1929",
            "Hội nghị thành lập Đảng",
            "Cương lĩnh chính trị đầu tiên",
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
        "chapter": "Ý CHÍNH 1 · 1930–1935",
        "date": "1930–1931",
        "title": "Xô viết Nghệ–Tĩnh",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/xo-viet-nghe-tinh-tranh.webp",
        "imageAspect": 1.9867549668874172,
        "imageTypeLabel": "Tranh lịch sử tái hiện",
        "imageCredit": "BT Mỹ thuật Việt Nam · Báo Nhân Dân",
        "hotspots": [
            {
                "name": "Cao trào cách mạng 1930–1931",
                "desc": "Bãi công và biểu tình lan rộng"
            },
            {
                "name": "Xô viết Nghệ–Tĩnh",
                "desc": "Chính quyền công nông thu nhỏ"
            },
            {
                "name": "Đàn áp và ý nghĩa lịch sử",
                "desc": "Tổn thất nặng, ý nghĩa lớn"
            }
        ],
        "bullets": [
            "Cao trào cách mạng 1930–1931",
            "Xô viết Nghệ–Tĩnh",
            "Đàn áp và ý nghĩa lịch sử"
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
        "chapter": "Ý CHÍNH 1 · 1930–1935",
        "date": "1930–1935",
        "title": "Luận cương và khôi phục",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/tran-phu-chan-dung.webp",
        "imageAspect": 0.8104166666666667,
        "imageTypeLabel": "Chân dung lịch sử",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Luận cương chính trị 10/1930",
                "desc": "Luận cương do Trần Phú soạn thảo"
            },
            {
                "name": "Hạn chế: chưa đặt độc lập lên hàng đầu",
                "desc": "Bước chuyển “tả” khuynh"
            },
            {
                "name": "Giữ vững khí tiết 1931–1933",
                "desc": "Biến nhà tù thành trường học"
            },
            {
                "name": "Khôi phục tổ chức và Đại hội I",
                "desc": "Đại hội I (3/1935) ở Ma Cao"
            }
        ],
        "bullets": [
            "Luận cương chính trị 10/1930",
            "Hạn chế: chưa đặt độc lập lên hàng đầu",
            "Giữ vững khí tiết 1931–1933",
            "Khôi phục tổ chức và Đại hội I"
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
        "chapter": "Ý CHÍNH 2 · 1936–1939",
        "date": "1936–1939",
        "title": "Dân chủ, cơm áo, hòa bình",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/dau-xao-1938.webp",
        "imageAspect": 1.446875,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Bối cảnh: nguy cơ phát xít",
                "desc": "Phát xít, Quốc tế Cộng sản VII"
            },
            {
                "name": "Chủ trương mới của Đảng",
                "desc": "Chống phát xít, đòi dân chủ"
            },
            {
                "name": "Bước đột phá nhận thức lý luận",
                "desc": "Tách giải phóng dân tộc khỏi điền địa"
            },
            {
                "name": "Đấu tranh phong phú, lực lượng lớn mạnh",
                "desc": "Đội quân chính trị hàng triệu người"
            }
        ],
        "bullets": [
            "Bối cảnh: nguy cơ phát xít",
            "Chủ trương mới của Đảng",
            "Bước đột phá nhận thức lý luận",
            "Đấu tranh phong phú, lực lượng lớn mạnh"
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
        "chapter": "Ý CHÍNH 3 · 1939–1945",
        "date": "1939–1941",
        "title": "Chuyển hướng chiến lược",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/pac-bo-suoi-le-nin-hien-nay.webp",
        "imageAspect": 1.566615620214395,
        "imageTypeLabel": "Di tích · ảnh hiện đại",
        "imageCredit": "Bảo tàng Hồ Chí Minh",
        "hotspots": [
            {
                "name": "Chiến tranh và “một cổ hai tròng”",
                "desc": "Nhân dân chịu ách Pháp – Nhật"
            },
            {
                "name": "Ba bước chuyển hướng chiến lược",
                "desc": "TW6, TW7, TW8 hoàn chỉnh"
            },
            {
                "name": "Bốn nội dung chuyển hướng cốt lõi",
                "desc": "Giải phóng dân tộc lên tối cao"
            },
            {
                "name": "Việt Minh và nhà nước của toàn dân",
                "desc": "Ngọn cờ quy tụ toàn dân tộc"
            }
        ],
        "bullets": [
            "Chiến tranh và “một cổ hai tròng”",
            "Ba bước chuyển hướng chiến lược",
            "Bốn nội dung chuyển hướng cốt lõi",
            "Việt Minh và nhà nước của toàn dân"
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
        "chapter": "Ý CHÍNH 3 · 1939–1945",
        "date": "1941–1944",
        "title": "Chuẩn bị cho khởi nghĩa",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/doi-tuyen-truyen-giai-phong-quan-1944.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Ba tiếng súng báo hiệu",
                "desc": "Bắc Sơn, Nam Kỳ, Đô Lương"
            },
            {
                "name": "Xây dựng lực lượng chính trị, văn hóa",
                "desc": "Việt Minh lan rộng, văn hóa cứu quốc"
            },
            {
                "name": "Lực lượng vũ trang và căn cứ địa",
                "desc": "Đội Việt Nam tuyên truyền giải phóng quân"
            }
        ],
        "bullets": [
            "Ba tiếng súng báo hiệu",
            "Xây dựng lực lượng chính trị, văn hóa",
            "Lực lượng vũ trang và căn cứ địa"
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
        "chapter": "Ý CHÍNH 3 · 1939–1945",
        "date": "03–08/1945",
        "title": "Kháng Nhật cứu nước",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/chi-thi-nhat-phap-ban-nhau-1945.webp",
        "imageAspect": 1.4492753623188406,
        "imageTypeLabel": "Ảnh tư liệu hiện vật",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Nhật đảo chính Pháp ngày 9/3/1945",
                "desc": "Nhật độc chiếm Đông Dương"
            },
            {
                "name": "Chỉ thị ngày 12/3/1945",
                "desc": "Kẻ thù duy nhất là phát xít Nhật"
            },
            {
                "name": "Cao trào lan rộng, căn cứ địa mở rộng",
                "desc": "Khu giải phóng Việt Bắc ra đời"
            },
            {
                "name": "Đô thị và đồng bằng cùng vùng dậy",
                "desc": "Phá kho thóc, giải quyết nạn đói"
            }
        ],
        "bullets": [
            "Nhật đảo chính Pháp ngày 9/3/1945",
            "Chỉ thị ngày 12/3/1945",
            "Cao trào lan rộng, căn cứ địa mở rộng",
            "Đô thị và đồng bằng cùng vùng dậy"
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
        "chapter": "Ý CHÍNH 3 · 1939–1945",
        "date": "08/1945",
        "title": "Tổng khởi nghĩa Tháng Tám",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/ha-noi-phu-kham-sai-19-8-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Thời cơ và nguy cơ",
                "desc": "Thời cơ chỉ trong nửa cuối tháng 8"
            },
            {
                "name": "Quyết sách lịch sử tại Tân Trào",
                "desc": "Quân lệnh số 1, Đại hội quốc dân"
            },
            {
                "name": "Thắng lợi thần tốc ở các đô thị",
                "desc": "Hà Nội, Huế, Sài Gòn giành chính quyền"
            },
            {
                "name": "Chính quyền cách mạng ra đời",
                "desc": "Chính phủ lâm thời, Bảo Đại thoái vị"
            }
        ],
        "bullets": [
            "Thời cơ và nguy cơ",
            "Quyết sách lịch sử tại Tân Trào",
            "Thắng lợi thần tốc ở các đô thị",
            "Chính quyền cách mạng ra đời"
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
        "chapter": "KẾT",
        "date": "02/09/1945",
        "title": "Độc lập và bài học",
        "subtitle": "",
        "imageUrl": "assets/images/exhibition-10/le-doc-lap-ba-dinh-2-9-1945.webp",
        "imageAspect": 1.3333333333333333,
        "imageTypeLabel": "Ảnh tư liệu",
        "imageCredit": "BT Lịch sử Quốc gia",
        "hotspots": [
            {
                "name": "Tuyên ngôn Độc lập 2/9/1945",
                "desc": "Ba Đình, khai sinh nước VNDCCH"
            },
            {
                "name": "Tính chất và ý nghĩa",
                "desc": "Giải phóng dân tộc điển hình"
            },
            {
                "name": "Bốn bài học kinh nghiệm",
                "desc": "Bốn bài học quý báu"
            },
            {
                "name": "Mạch chuyển dịch đường lối 1930–1945",
                "desc": "Năm cột mốc chuyển dịch đường lối"
            }
        ],
        "bullets": [
            "Tuyên ngôn Độc lập 2/9/1945",
            "Tính chất và ý nghĩa",
            "Bốn bài học kinh nghiệm",
            "Mạch chuyển dịch đường lối 1930–1945"
        ],
        "imageCaption": "Lễ Độc lập tại Ba Đình, 2/9/1945.",
        "imageSource": "https://baotanglichsu.vn/vi/Articles/4092/anh-tu-lieu"
    }
];

function museumImageSrc(src) {
    return location.protocol === "file:" && typeof MUSEUM_LOCAL_IMAGES !== "undefined" && MUSEUM_LOCAL_IMAGES[src] ? MUSEUM_LOCAL_IMAGES[src] : src;
}
