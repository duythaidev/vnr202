// Nội dung 15 tranh MLN131. Xem planning/ để đối chiếu bài nhóm và nguồn.
const MUSEUM_PIECES = [
    {
        "id": 0,
        "contentId": "mln-p01",
        "code": "TRANH 01",
        "shortLabel": "01. Từ yêu sách đến độc lập",
        "chapter": "I · NỀN MÓNG",
        "date": "1919–1945",
        "title": "Từ yêu sách đến độc lập",
        "subtitle": "Tư tưởng đề cao pháp luật và sự ra đời của nhà nước độc lập.",
        "imageUrl": "assets/images/l1p2.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Đòi quyền bằng pháp luật",
                "desc": "Năm 1919, yêu sách về quyền tự do và các bảo đảm pháp lý được đặt ra trong cuộc đấu tranh của dân tộc."
            },
            {
                "name": "Tư tưởng hiến pháp",
                "desc": "Năm 1922, Việt Nam yêu cầu ca diễn đạt tư tưởng đề cao hiến pháp và pháp luật."
            },
            {
                "name": "Một nhà nước độc lập",
                "desc": "Ngày 2/9/1945, nước Việt Nam Dân chủ Cộng hòa ra đời."
            }
        ],
        "bullets": [
            "Đòi quyền bằng pháp luật",
            "Tư tưởng hiến pháp",
            "Một nhà nước độc lập"
        ]
    },
    {
        "id": 1,
        "contentId": "mln-p02",
        "code": "TRANH 02",
        "shortLabel": "02. Mỗi công dân, một lá phiếu",
        "chapter": "I · NỀN MÓNG",
        "date": "06/01/1946",
        "title": "Mỗi công dân, một lá phiếu",
        "subtitle": "Từ quyền bầu cử đến sự hình thành cơ quan đại diện của nhân dân.",
        "imageUrl": "assets/images/l1p3.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Chọn người đại diện",
                "desc": "Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên bầu Quốc hội diễn ra."
            },
            {
                "name": "Quyền làm chủ chính trị",
                "desc": "Dân chủ trên lĩnh vực chính trị thể hiện ở quyền tham gia vào công việc của nhà nước."
            },
            {
                "name": "Từ lá phiếu đến Hiến pháp",
                "desc": "Quốc hội thực hiện nhiệm vụ lập hiến, đặt nền tảng tổ chức nhà nước."
            }
        ],
        "bullets": [
            "Chọn người đại diện",
            "Quyền làm chủ chính trị",
            "Từ lá phiếu đến Hiến pháp"
        ]
    },
    {
        "id": 2,
        "contentId": "mln-p03",
        "code": "TRANH 03",
        "shortLabel": "03. Hiến pháp đầu tiên",
        "chapter": "I · NỀN MÓNG",
        "date": "09/11/1946",
        "title": "Hiến pháp đầu tiên",
        "subtitle": "Nền tảng tổ chức nhà nước dân chủ và bảo đảm quyền của công dân.",
        "imageUrl": "assets/images/l1p5.jpg",
        "imageCaption": "Bìa tài liệu",
        "hotspots": [
            {
                "name": "Nền tảng nhà nước",
                "desc": "Ngày 9/11/1946, Quốc hội thông qua bản Hiến pháp đầu tiên."
            },
            {
                "name": "Quyền lực có khuôn khổ",
                "desc": "Hiến pháp nối quyền làm chủ với thiết chế nhà nước và các nguyên tắc hoạt động."
            },
            {
                "name": "Đọc đúng từng thời kỳ",
                "desc": "Hiến pháp 1946 chưa có điều khoản quy định trực tiếp vai trò lãnh đạo của Đảng."
            }
        ],
        "bullets": [
            "Nền tảng nhà nước",
            "Quyền lực có khuôn khổ",
            "Đọc đúng từng thời kỳ"
        ]
    },
    {
        "id": 3,
        "contentId": "mln-p04",
        "code": "TRANH 04",
        "shortLabel": "04. Dân chủ và yêu cầu đổi mới",
        "chapter": "II · ĐỔI MỚI TƯ DUY",
        "date": "1976–1986",
        "title": "Dân chủ và yêu cầu đổi mới",
        "subtitle": "Những vấn đề đặt ra trong nhận thức và thực hiện quyền làm chủ.",
        "imageUrl": "assets/images/l2p2.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Bối cảnh sau thống nhất",
                "desc": "Sau năm 1976, xây dựng đất nước đặt ra yêu cầu phát triển kinh tế và hoàn thiện quản lý xã hội."
            },
            {
                "name": "Những vấn đề đặt ra",
                "desc": "Theo giáo trình, quan hệ giữa dân chủ và nhà nước pháp quyền chưa được nhận thức đầy đủ trong giai đoạn này."
            },
            {
                "name": "Đổi mới từ thực tiễn",
                "desc": "Những hạn chế đặt ra nhu cầu phát huy quyền làm chủ, tăng hiệu quả quản lý và tôn trọng pháp luật."
            }
        ],
        "bullets": [
            "Bối cảnh sau thống nhất",
            "Những vấn đề đặt ra",
            "Đổi mới từ thực tiễn"
        ]
    },
    {
        "id": 4,
        "contentId": "mln-p05",
        "code": "TRANH 05",
        "shortLabel": "05. Đổi mới: lấy dân làm gốc",
        "chapter": "II · ĐỔI MỚI TƯ DUY",
        "date": "12/1986",
        "title": "Đổi mới: lấy dân làm gốc",
        "subtitle": "Phát huy dân chủ, tăng cường pháp chế và quyền làm chủ của nhân dân.",
        "imageUrl": "assets/images/l2p4.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Bước ngoặt Đổi mới",
                "desc": "Đại hội VI năm 1986 mở ra công cuộc Đổi mới toàn diện."
            },
            {
                "name": "Lấy dân làm gốc",
                "desc": "Quyền làm chủ và sự tham gia của nhân dân là điểm tựa của quá trình đổi mới."
            },
            {
                "name": "Dân chủ và kỷ cương",
                "desc": "Phát huy dân chủ phải đi đôi với kỷ luật, kỷ cương; quyền cần cơ chế thực hiện và bảo vệ."
            }
        ],
        "bullets": [
            "Bước ngoặt Đổi mới",
            "Lấy dân làm gốc",
            "Dân chủ và kỷ cương"
        ]
    },
    {
        "id": 5,
        "contentId": "mln-p06",
        "code": "TRANH 06",
        "shortLabel": "06. Bản chất, mục tiêu, động lực",
        "chapter": "II · ĐỔI MỚI TƯ DUY",
        "date": "Thời kỳ Đổi mới",
        "title": "Bản chất, mục tiêu, động lực",
        "subtitle": "Ba phương diện gắn liền với nhau của dân chủ xã hội chủ nghĩa.",
        "imageUrl": "assets/images/l2p5.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Bản chất và mục tiêu",
                "desc": "Giáo trình CNXH khoa học · Chương 4 · III.1.a"
            },
            {
                "name": "Động lực phát triển",
                "desc": "Sự tham gia, sáng kiến và trách nhiệm của nhân dân góp phần tạo động lực phát triển."
            },
            {
                "name": "Quyền và trách nhiệm",
                "desc": "Giáo trình CNXH khoa học · Chương 4 · III.1.a"
            }
        ],
        "bullets": [
            "Bản chất và mục tiêu",
            "Động lực phát triển",
            "Quyền và trách nhiệm"
        ]
    },
    {
        "id": 6,
        "contentId": "mln-p07",
        "code": "TRANH 07",
        "shortLabel": "07. Quản lý xã hội bằng pháp luật",
        "chapter": "III · HÌNH THÀNH MÔ HÌNH",
        "date": "1991",
        "title": "Quản lý xã hội bằng pháp luật",
        "subtitle": "Một bước phát triển trong nhận thức về nhà nước pháp quyền.",
        "imageUrl": "assets/images/l3p2.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Cương lĩnh năm 1991",
                "desc": "Cương lĩnh năm 1991 xác định định hướng Nhà nước quản lý xã hội bằng pháp luật."
            },
            {
                "name": "Bước phát triển nhận thức",
                "desc": "Tại Hội nghị Trung ương 2 khóa VII, vấn đề xây dựng nhà nước pháp quyền được đề cập trong tiến trình đổi mới nhận thức."
            },
            {
                "name": "Từ định hướng đến thể chế",
                "desc": "Để đi vào thực tiễn, định hướng phải được thể hiện trong tổ chức, pháp luật và cách thực thi."
            }
        ],
        "bullets": [
            "Cương lĩnh năm 1991",
            "Bước phát triển nhận thức",
            "Từ định hướng đến thể chế"
        ]
    },
    {
        "id": 7,
        "contentId": "mln-p08",
        "code": "TRANH 08",
        "shortLabel": "08. Quyền lãnh đạo và pháp luật",
        "chapter": "III · HÌNH THÀNH MÔ HÌNH",
        "date": "1992",
        "title": "Quyền lãnh đạo và pháp luật",
        "subtitle": "Đọc cùng nhau Điều 4 và Điều 12 của Hiến pháp năm 1992.",
        "imageUrl": "assets/images/l3p3.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Vai trò lãnh đạo",
                "desc": "Điều 4 Hiến pháp 1992 ghi nhận Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội."
            },
            {
                "name": "Nghĩa vụ tuân thủ",
                "desc": "Điều 4 đồng thời quy định các tổ chức của Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật."
            },
            {
                "name": "Quản lý bằng pháp luật",
                "desc": "Điều 12 quy định Nhà nước quản lý xã hội bằng pháp luật và không ngừng tăng cường pháp chế xã hội chủ nghĩa."
            }
        ],
        "bullets": [
            "Vai trò lãnh đạo",
            "Nghĩa vụ tuân thủ",
            "Quản lý bằng pháp luật"
        ]
    },
    {
        "id": 8,
        "contentId": "mln-p09",
        "code": "TRANH 09",
        "shortLabel": "09. Của dân, do dân, vì dân",
        "chapter": "III · HÌNH THÀNH MÔ HÌNH",
        "date": "1994–1995",
        "title": "Của dân, do dân, vì dân",
        "subtitle": "Từ khẳng định quyền làm chủ đến trách nhiệm phục vụ nhân dân.",
        "imageUrl": "assets/images/l3p4.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Quan điểm được phát triển",
                "desc": "Hội nghị giữa nhiệm kỳ VII, 1994; TW 8, 1995"
            },
            {
                "name": "Ba mặt gắn liền",
                "desc": "Giáo trình CNXH khoa học · Chương 4 · III.2.b"
            },
            {
                "name": "Biến nguyên tắc thành việc làm",
                "desc": "Quyền làm chủ cần được thể hiện bằng bầu cử, tham gia ý kiến, giám sát và trách nhiệm phục vụ."
            }
        ],
        "bullets": [
            "Quan điểm được phát triển",
            "Ba mặt gắn liền",
            "Biến nguyên tắc thành việc làm"
        ]
    },
    {
        "id": 9,
        "contentId": "mln-p10",
        "code": "TRANH 10",
        "shortLabel": "10. Thống nhất và kiểm soát quyền lực",
        "chapter": "IV · HIẾN ĐỊNH VÀ HOÀN THIỆN",
        "date": "2001–2011",
        "title": "Thống nhất và kiểm soát quyền lực",
        "subtitle": "Hiến định mô hình và phát triển nguyên tắc tổ chức quyền lực.",
        "imageUrl": "assets/images/l4p2.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Hiến định thuật ngữ",
                "desc": "Sửa đổi Hiến pháp năm 2001 đưa thuật ngữ nhà nước pháp quyền xã hội chủ nghĩa vào Điều 2."
            },
            {
                "name": "Ba quyền, một nguyên tắc",
                "desc": "Cương lĩnh bổ sung, phát triển 2011"
            },
            {
                "name": "Không chỉ là chia việc",
                "desc": "Phân công rõ chức năng cần đi cùng cơ chế phối hợp và ngăn ngừa lạm quyền."
            }
        ],
        "bullets": [
            "Hiến định thuật ngữ",
            "Ba quyền, một nguyên tắc",
            "Không chỉ là chia việc"
        ]
    },
    {
        "id": 10,
        "contentId": "mln-p11",
        "code": "TRANH 11",
        "shortLabel": "11. Điều 4: lãnh đạo và trách nhiệm",
        "chapter": "IV · HIẾN ĐỊNH VÀ HOÀN THIỆN",
        "date": "2013",
        "title": "Điều 4: lãnh đạo và trách nhiệm",
        "subtitle": "Đọc ba khoản cùng nhau: vai trò, trách nhiệm và khuôn khổ hoạt động.",
        "imageUrl": "assets/images/l4p3.jpg",
        "imageCaption": "Bìa tài liệu",
        "hotspots": [
            {
                "name": "Vai trò được ghi nhận",
                "desc": "Khoản 1 Điều 4 xác định Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội."
            },
            {
                "name": "Giám sát và trách nhiệm",
                "desc": "Hiến pháp 2013 · Điều 4, khoản 2"
            },
            {
                "name": "Khuôn khổ áp dụng cho ai",
                "desc": "Các tổ chức của Đảng và đảng viên hoạt động trong khuôn khổ Hiến pháp và pháp luật."
            }
        ],
        "bullets": [
            "Vai trò được ghi nhận",
            "Giám sát và trách nhiệm",
            "Khuôn khổ áp dụng cho ai"
        ]
    },
    {
        "id": 11,
        "contentId": "mln-p12",
        "code": "TRANH 12",
        "shortLabel": "12. Tiếp tục hoàn thiện",
        "chapter": "IV · HIẾN ĐỊNH VÀ HOÀN THIỆN",
        "date": "2021–2022",
        "title": "Tiếp tục hoàn thiện",
        "subtitle": "Từ định hướng Đại hội XIII đến Nghị quyết 27 về nhà nước pháp quyền.",
        "imageUrl": "assets/images/l4p5.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Một tiến trình tiếp tục",
                "desc": "Đại hội XIII; Nghị quyết 27-NQ/TW, 2022"
            },
            {
                "name": "Những hướng cần làm",
                "desc": "Nghị quyết 27-NQ/TW · nhiệm vụ, giải pháp"
            },
            {
                "name": "Kết quả và những hạn chế",
                "desc": "Nghị quyết vừa ghi nhận kết quả, vừa chỉ ra hạn chế và các nhiệm vụ phải tiếp tục thực hiện."
            }
        ],
        "bullets": [
            "Một tiến trình tiếp tục",
            "Những hướng cần làm",
            "Kết quả và những hạn chế"
        ]
    },
    {
        "id": 12,
        "contentId": "mln-p13",
        "code": "TRANH 13",
        "shortLabel": "13. Bốn lý do của lập luận",
        "chapter": "V · LẬP LUẬN VÀ KẾT LUẬN",
        "date": "Theo quan điểm chính thức",
        "title": "Bốn lý do của lập luận",
        "subtitle": "Từ mục tiêu chung đến hiến định, phương thức lãnh đạo và kiểm soát quyền lực.",
        "imageUrl": "assets/images/l5p1.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Thống nhất về mục tiêu",
                "desc": "Theo quan điểm chính thức trong bài nhóm, sự lãnh đạo của Đảng và pháp quyền cùng hướng tới lợi ích của nhân dân."
            },
            {
                "name": "Hiến định và phương thức",
                "desc": "Bài thuyết trình của nhóm · II.2–3"
            },
            {
                "name": "Kiểm soát và đối chiếu",
                "desc": "Bài thuyết trình của nhóm · II.4, IV"
            }
        ],
        "bullets": [
            "Thống nhất về mục tiêu",
            "Hiến định và phương thức",
            "Kiểm soát và đối chiếu"
        ]
    },
    {
        "id": 13,
        "contentId": "mln-p14",
        "code": "TRANH 14",
        "shortLabel": "14. Từ khuôn khổ đến đời sống",
        "chapter": "V · LẬP LUẬN VÀ KẾT LUẬN",
        "date": "Cải cách và thực thi",
        "title": "Từ khuôn khổ đến đời sống",
        "subtitle": "Pháp quyền được thể hiện qua chất lượng phục vụ và hiệu quả kiểm soát.",
        "imageUrl": "assets/images/l5p3.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Phục vụ người dân",
                "desc": "Hoàn thiện nhà nước pháp quyền gắn với cải cách thể chế và phương thức hoạt động."
            },
            {
                "name": "Kiểm soát lạm quyền",
                "desc": "Bài thuyết trình của nhóm · II.4; Giáo trình CNXH khoa học · Chương 4"
            },
            {
                "name": "Những vấn đề còn đặt ra",
                "desc": "Bài nhóm ghi nhận tranh luận về kiểm soát độc lập, tính độc lập của tư pháp và hiệu quả thực thi pháp quyền."
            }
        ],
        "bullets": [
            "Phục vụ người dân",
            "Kiểm soát lạm quyền",
            "Những vấn đề còn đặt ra"
        ]
    },
    {
        "id": 14,
        "contentId": "mln-p15",
        "code": "TRANH 15",
        "shortLabel": "15. Lãnh đạo trong khuôn khổ pháp luật",
        "chapter": "V · LẬP LUẬN VÀ KẾT LUẬN",
        "date": "Kết luận",
        "title": "Lãnh đạo trong khuôn khổ pháp luật",
        "subtitle": "Trả lời câu hỏi xuyên suốt và liên hệ trách nhiệm công dân.",
        "imageUrl": "assets/images/l5p5.webp",
        "imageCaption": "Minh họa chủ đề",
        "hotspots": [
            {
                "name": "Trở lại câu hỏi đầu bài",
                "desc": "Theo quan điểm chính thức trong bài nhóm, vai trò lãnh đạo của Đảng và nguyên tắc pháp quyền không loại trừ nhau."
            },
            {
                "name": "Ba ý cần nhớ",
                "desc": "Bài thuyết trình của nhóm · VI; Nghị quyết 27-NQ/TW"
            },
            {
                "name": "Trách nhiệm của mỗi người",
                "desc": "Giáo trình CNXH khoa học · Chương 4 · Chương 4: vận dụng"
            }
        ],
        "bullets": [
            "Trở lại câu hỏi đầu bài",
            "Ba ý cần nhớ",
            "Trách nhiệm của mỗi người"
        ]
    }
];

// HTMLẢnh local được đóng gói thành data URL để canvas không bị taint trên file://.
function museumImageSrc(src) {
    if (location.protocol === 'file:' && typeof MUSEUM_LOCAL_IMAGES !== 'undefined') return MUSEUM_LOCAL_IMAGES[src] || src;
    return src;
}
