// Mỗi tranh có 3 thẻ hoàn chỉnh; không sinh nội dung mock.
const STORY_CONFIG = { writeSpeed: 1, flightSpeed: 1, motionBlur: 1, decorCards: 5, autoAdvance: false };
const STORY_DATA = {
    "0": {
        "id": "mln-p01",
        "seed": 71,
        "steps": [
            {
                "title": "Đòi quyền bằng pháp luật",
                "source": "Yêu sách của nhân dân An Nam · 1919",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Năm 1919, yêu sách về quyền tự do và các bảo đảm pháp lý được đặt ra trong cuộc đấu tranh của dân tộc.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Yêu cầu thay chế độ sắc lệnh bằng chế độ đạo luật.",
                            "Đòi những bảo đảm pháp luật cho người dân bản xứ."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đây là tiền đề tư tưởng, chưa phải tên gọi của mô hình nhà nước sau này."
                    }
                ],
                "id": "mln-p01-s01",
                "label": "01 / 1919–1945"
            },
            {
                "title": "Tư tưởng hiến pháp",
                "source": "Hồ Chí Minh · Việt Nam yêu cầu ca, 1922",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Năm 1922, Việt Nam yêu cầu ca diễn đạt tư tưởng đề cao hiến pháp và pháp luật.",
                        "size": "lg"
                    },
                    {
                        "type": "quote",
                        "text": "Bảy xin Hiến pháp ban hành,\nTrăm điều phải có thần linh pháp quyền",
                        "by": "Việt Nam yêu cầu ca · 1922"
                    },
                    {
                        "type": "note",
                        "text": "Phân biệt Yêu sách năm 1919 với bản diễn ca năm 1922."
                    }
                ],
                "id": "mln-p01-s02",
                "label": "02 / 1919–1945"
            },
            {
                "title": "Một nhà nước độc lập",
                "source": "Tuyên ngôn Độc lập · 02/9/1945",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ngày 2/9/1945, nước Việt Nam Dân chủ Cộng hòa ra đời.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l1p2.webp",
                        "caption": "Minh họa chủ đề độc lập",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Từ khát vọng độc lập đến xây dựng nhà nước của nhân dân.",
                            "Vấn đề tiếp theo: tổ chức và thực hiện quyền lực bằng cách nào?"
                        ]
                    }
                ],
                "id": "mln-p01-s03",
                "label": "03 / 1919–1945"
            }
        ]
    },
    "1": {
        "id": "mln-p02",
        "seed": 108,
        "steps": [
            {
                "title": "Chọn người đại diện",
                "source": "Tổng tuyển cử đầu tiên · 06/01/1946",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ngày 6/1/1946, cuộc Tổng tuyển cử đầu tiên bầu Quốc hội diễn ra.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l1p4.webp",
                        "caption": "Minh họa quyền bầu cử",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Người dân tham gia lựa chọn người đại diện.",
                            "Lá phiếu gắn quyền làm chủ với một cơ chế cụ thể."
                        ]
                    }
                ],
                "id": "mln-p02-s01",
                "label": "01 / 06/01/1946"
            },
            {
                "title": "Quyền làm chủ chính trị",
                "source": "Giáo trình CNXH khoa học · Chương 4 · I.2.b",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Dân chủ trên lĩnh vực chính trị thể hiện ở quyền tham gia vào công việc của nhà nước.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Bầu người đại diện là một hình thức tham gia.",
                            "Giám sát và đóng góp ý kiến giúp quyền làm chủ được tiếp tục thực hiện."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Dân chủ rộng hơn một lần bỏ phiếu."
                    }
                ],
                "id": "mln-p02-s02",
                "label": "02 / 06/01/1946"
            },
            {
                "title": "Từ lá phiếu đến Hiến pháp",
                "source": "Tổng tuyển cử 1946; Hiến pháp 1946",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Nhân dân",
                        "to": "Quốc hội",
                        "caption": "Bầu cơ quan đại diện",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Quốc hội thực hiện nhiệm vụ lập hiến, đặt nền tảng tổ chức nhà nước.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Quyền lực cần được tổ chức trong một khuôn khổ chung."
                    }
                ],
                "id": "mln-p02-s03",
                "label": "03 / 06/01/1946"
            }
        ]
    },
    "2": {
        "id": "mln-p03",
        "seed": 145,
        "steps": [
            {
                "title": "Nền tảng nhà nước",
                "source": "Hiến pháp 1946 · thông qua 09/11/1946",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ngày 9/11/1946, Quốc hội thông qua bản Hiến pháp đầu tiên.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l1p5.jpg",
                        "caption": "Bìa tài liệu Hiến pháp 1946",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Xác lập nền tảng tổ chức quyền lực nhà nước.",
                            "Ghi nhận những quyền và nghĩa vụ cơ bản của công dân."
                        ]
                    }
                ],
                "id": "mln-p03-s01",
                "label": "01 / 09/11/1946"
            },
            {
                "title": "Quyền lực có khuôn khổ",
                "source": "Hiến pháp 1946 · Chương I–III",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Quyền lực",
                        "to": "Hiến pháp",
                        "caption": "Tổ chức và giới hạn cách thực hiện",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Hiến pháp nối quyền làm chủ với thiết chế nhà nước và các nguyên tắc hoạt động.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Độc lập, dân chủ và pháp luật cần được nhìn trong mối liên hệ."
                    }
                ],
                "id": "mln-p03-s02",
                "label": "02 / 09/11/1946"
            },
            {
                "title": "Đọc đúng từng thời kỳ",
                "source": "Hiến pháp 1946; bài nhóm · III.1",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Hiến pháp 1946 chưa có điều khoản quy định trực tiếp vai trò lãnh đạo của Đảng.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Không áp nội dung Điều 4 năm 2013 ngược về năm 1946.",
                            "Các quy định hiến định tiếp tục phát triển qua những giai đoạn sau."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Mỗi văn bản phải được đặt trong hoàn cảnh lịch sử của nó."
                    }
                ],
                "id": "mln-p03-s03",
                "label": "03 / 09/11/1946"
            }
        ]
    },
    "3": {
        "id": "mln-p04",
        "seed": 182,
        "steps": [
            {
                "title": "Bối cảnh sau thống nhất",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sau năm 1976, xây dựng đất nước đặt ra yêu cầu phát triển kinh tế và hoàn thiện quản lý xã hội.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l2p2.jpg",
                        "caption": "Phiếu mua lương thực · tư liệu đời sống",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Hình ảnh gợi bối cảnh một thời kỳ, không đại diện cho toàn bộ lịch sử."
                    }
                ],
                "id": "mln-p04-s01",
                "label": "01 / 1976–1986"
            },
            {
                "title": "Những vấn đề đặt ra",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Theo giáo trình, quan hệ giữa dân chủ và nhà nước pháp quyền chưa được nhận thức đầy đủ trong giai đoạn này.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Dân sinh: điều kiện sống của người dân.",
                            "Dân trí: hiểu biết và khả năng tham gia.",
                            "Dân quyền: quyền và cơ chế thực hiện quyền."
                        ]
                    }
                ],
                "id": "mln-p04-s02",
                "label": "02 / 1976–1986"
            },
            {
                "title": "Đổi mới từ thực tiễn",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Thực tiễn",
                        "to": "Đổi mới",
                        "caption": "Điều chỉnh nhận thức và cách quản lý",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Những hạn chế đặt ra nhu cầu phát huy quyền làm chủ, tăng hiệu quả quản lý và tôn trọng pháp luật.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Không quy mọi khó khăn về một nguyên nhân duy nhất."
                    }
                ],
                "id": "mln-p04-s03",
                "label": "03 / 1976–1986"
            }
        ]
    },
    "4": {
        "id": "mln-p05",
        "seed": 219,
        "steps": [
            {
                "title": "Bước ngoặt Đổi mới",
                "source": "Đại hội VI · 12/1986; Giáo trình CNXH khoa học · Chương 4",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Đại hội VI năm 1986 mở ra công cuộc Đổi mới toàn diện.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l2p4.webp",
                        "caption": "Minh họa chủ đề Đổi mới",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đổi mới tư duy về phát triển và quản lý.",
                            "Phát huy dân chủ, tăng cường pháp chế."
                        ]
                    }
                ],
                "id": "mln-p05-s01",
                "label": "01 / 12/1986"
            },
            {
                "title": "Lấy dân làm gốc",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Quyền làm chủ và sự tham gia của nhân dân là điểm tựa của quá trình đổi mới.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Tôn trọng, lắng nghe ý kiến và nguyện vọng.",
                            "Phát huy sáng kiến, sức mạnh và trách nhiệm của nhân dân."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Người dân là chủ thể, không chỉ là đối tượng quản lý."
                    }
                ],
                "id": "mln-p05-s02",
                "label": "02 / 12/1986"
            },
            {
                "title": "Dân chủ và kỷ cương",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Dân chủ",
                        "to": "Pháp luật",
                        "caption": "Thể chế hóa quyền làm chủ",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Phát huy dân chủ phải đi đôi với kỷ luật, kỷ cương; quyền cần cơ chế thực hiện và bảo vệ.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Pháp luật tạo khuôn khổ để quyền không chỉ dừng ở lời nói."
                    }
                ],
                "id": "mln-p05-s03",
                "label": "03 / 12/1986"
            }
        ]
    },
    "5": {
        "id": "mln-p06",
        "seed": 256,
        "steps": [
            {
                "title": "Bản chất và mục tiêu",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Bản chất: quyền làm chủ của nhân dân thể hiện trong tổ chức và hoạt động của chế độ.",
                            "Mục tiêu: mở rộng điều kiện để nhân dân thực sự làm chủ."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Hai phương diện liên hệ với nhau, nhưng không đồng nghĩa."
                    }
                ],
                "id": "mln-p06-s01",
                "label": "01 / Thời kỳ Đổi mới"
            },
            {
                "title": "Động lực phát triển",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sự tham gia, sáng kiến và trách nhiệm của nhân dân góp phần tạo động lực phát triển.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l2p5.webp",
                        "caption": "Minh họa lao động và phát triển",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Phát huy dân chủ gắn với huy động sức mạnh xã hội."
                    }
                ],
                "id": "mln-p06-s02",
                "label": "02 / Thời kỳ Đổi mới"
            },
            {
                "title": "Quyền và trách nhiệm",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.1.a",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Quyền",
                        "to": "Trách nhiệm",
                        "caption": "Thực hiện trong khuôn khổ pháp luật",
                        "sub": ""
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Quyền cần được bảo đảm bằng cơ chế và thiết chế.",
                            "Tham gia dân chủ đi cùng kỷ luật, kỷ cương và tôn trọng quyền của người khác."
                        ]
                    }
                ],
                "id": "mln-p06-s03",
                "label": "03 / Thời kỳ Đổi mới"
            }
        ]
    },
    "6": {
        "id": "mln-p07",
        "seed": 293,
        "steps": [
            {
                "title": "Cương lĩnh năm 1991",
                "source": "Cương lĩnh 1991; bài nhóm · III.3",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Cương lĩnh năm 1991 xác định định hướng Nhà nước quản lý xã hội bằng pháp luật.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đề cao vai trò của pháp luật trong quản lý.",
                            "Gắn phát triển dân chủ với xây dựng nhà nước."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Phân biệt nội dung định hướng với thời điểm sử dụng một thuật ngữ."
                    }
                ],
                "id": "mln-p07-s01",
                "label": "01 / 1991"
            },
            {
                "title": "Bước phát triển nhận thức",
                "source": "Hội nghị Trung ương 2 khóa VII · 11/1991",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Tại Hội nghị Trung ương 2 khóa VII, vấn đề xây dựng nhà nước pháp quyền được đề cập trong tiến trình đổi mới nhận thức.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l3p2.webp",
                        "caption": "Minh họa chủ đề thể chế",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Không đồng nhất Hội nghị Trung ương với Đại hội VII."
                    }
                ],
                "id": "mln-p07-s02",
                "label": "02 / 1991"
            },
            {
                "title": "Từ định hướng đến thể chế",
                "source": "Bài nhóm · III.3–4",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Chủ trương",
                        "to": "Thể chế",
                        "caption": "Cụ thể hóa bằng thiết chế và pháp luật",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Để đi vào thực tiễn, định hướng phải được thể hiện trong tổ chức, pháp luật và cách thực thi.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Chặng tiếp theo: đọc các quy định của Hiến pháp 1992."
                    }
                ],
                "id": "mln-p07-s03",
                "label": "03 / 1991"
            }
        ]
    },
    "7": {
        "id": "mln-p08",
        "seed": 330,
        "steps": [
            {
                "title": "Vai trò lãnh đạo",
                "source": "Hiến pháp 1992 · Điều 4",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Điều 4 Hiến pháp 1992 ghi nhận Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l3p3.webp",
                        "caption": "Minh họa vai trò của pháp luật",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Đây không phải lần đầu tiên vai trò lãnh đạo được hiến định."
                    }
                ],
                "id": "mln-p08-s01",
                "label": "01 / 1992"
            },
            {
                "title": "Nghĩa vụ tuân thủ",
                "source": "Hiến pháp 1992 · Điều 4",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Điều 4 đồng thời quy định các tổ chức của Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Lãnh đạo",
                        "to": "Tuân thủ",
                        "caption": "Quyền đi cùng khuôn khổ hoạt động",
                        "sub": ""
                    },
                    {
                        "type": "note",
                        "text": "Phải đọc đầy đủ điều khoản, không chỉ riêng phần ghi nhận quyền."
                    }
                ],
                "id": "mln-p08-s02",
                "label": "02 / 1992"
            },
            {
                "title": "Quản lý bằng pháp luật",
                "source": "Hiến pháp 1992 · Điều 12; sửa đổi 2001",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Điều 12 quy định Nhà nước quản lý xã hội bằng pháp luật và không ngừng tăng cường pháp chế xã hội chủ nghĩa.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Phân biệt bản Hiến pháp gốc năm 1992 với sửa đổi năm 2001.",
                            "Thuật ngữ nhà nước pháp quyền được hiến định qua lần sửa đổi sau đó."
                        ]
                    }
                ],
                "id": "mln-p08-s03",
                "label": "03 / 1992"
            }
        ]
    },
    "8": {
        "id": "mln-p09",
        "seed": 367,
        "steps": [
            {
                "title": "Quan điểm được phát triển",
                "source": "Hội nghị giữa nhiệm kỳ VII, 1994; TW 8, 1995",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1994",
                                "text": "Phát triển quan điểm về nhà nước của dân, do dân, vì dân."
                            },
                            {
                                "date": "1995",
                                "text": "Tiếp tục làm rõ việc xây dựng và hoàn thiện nhà nước."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Các mốc thuộc một tiến trình nhận thức, không phải hai mô hình tách biệt."
                    }
                ],
                "id": "mln-p09-s01",
                "label": "01 / 1994–1995"
            },
            {
                "title": "Ba mặt gắn liền",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.2.b",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Của dân: quyền lực thuộc về nhân dân.",
                            "Do dân: nhân dân tham gia xây dựng và giám sát.",
                            "Vì dân: hoạt động nhà nước hướng tới phục vụ nhân dân."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l3p4.webp",
                        "caption": "Minh họa ba phương diện của quyền làm chủ",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    }
                ],
                "id": "mln-p09-s02",
                "label": "02 / 1994–1995"
            },
            {
                "title": "Biến nguyên tắc thành việc làm",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.2.b",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Quyền làm chủ cần được thể hiện bằng bầu cử, tham gia ý kiến, giám sát và trách nhiệm phục vụ.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Nguyên tắc",
                        "to": "Cơ chế",
                        "caption": "Có điều kiện để thực hiện trong đời sống",
                        "sub": ""
                    },
                    {
                        "type": "note",
                        "text": "Không đánh giá hiệu quả chỉ từ một khẩu hiệu."
                    }
                ],
                "id": "mln-p09-s03",
                "label": "03 / 1994–1995"
            }
        ]
    },
    "9": {
        "id": "mln-p10",
        "seed": 404,
        "steps": [
            {
                "title": "Hiến định thuật ngữ",
                "source": "Nghị quyết 51/2001/QH10 · sửa Điều 2",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sửa đổi Hiến pháp năm 2001 đưa thuật ngữ nhà nước pháp quyền xã hội chủ nghĩa vào Điều 2.",
                        "size": "lg"
                    },
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1992",
                                "text": "Bản Hiến pháp gốc."
                            },
                            {
                                "date": "2001",
                                "text": "Sửa đổi, bổ sung Hiến pháp 1992."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không gán nội dung bổ sung năm 2001 cho nguyên bản năm 1992."
                    }
                ],
                "id": "mln-p10-s01",
                "label": "01 / 2001–2011"
            },
            {
                "title": "Ba quyền, một nguyên tắc",
                "source": "Cương lĩnh bổ sung, phát triển 2011",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Lập pháp: xây dựng pháp luật.",
                            "Hành pháp: tổ chức thi hành pháp luật.",
                            "Tư pháp: thực hiện chức năng xét xử và bảo vệ công lý."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Quyền lực nhà nước thống nhất; có phân công, phối hợp và kiểm soát."
                    }
                ],
                "id": "mln-p10-s02",
                "label": "02 / 2001–2011"
            },
            {
                "title": "Không chỉ là chia việc",
                "source": "Cương lĩnh 2011; Hiến pháp 2013 · Điều 2",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Phân công",
                        "to": "Kiểm soát",
                        "caption": "Phối hợp để thực hiện và kiểm soát quyền lực",
                        "sub": ""
                    },
                    {
                        "type": "text",
                        "text": "Phân công rõ chức năng cần đi cùng cơ chế phối hợp và ngăn ngừa lạm quyền.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Mô hình được trình bày khác với tam quyền phân lập."
                    }
                ],
                "id": "mln-p10-s03",
                "label": "03 / 2001–2011"
            }
        ]
    },
    "10": {
        "id": "mln-p11",
        "seed": 441,
        "steps": [
            {
                "title": "Vai trò được ghi nhận",
                "source": "Hiến pháp 2013 · Điều 4, khoản 1",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Khoản 1 Điều 4 xác định Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l4p3.jpg",
                        "caption": "Bìa tài liệu Hiến pháp 2013",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Vai trò lãnh đạo là một phần của điều khoản, không phải toàn bộ Điều 4."
                    }
                ],
                "id": "mln-p11-s01",
                "label": "01 / 2013"
            },
            {
                "title": "Giám sát và trách nhiệm",
                "source": "Hiến pháp 2013 · Điều 4, khoản 2",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Gắn bó mật thiết với nhân dân và phục vụ nhân dân.",
                            "Chịu sự giám sát của nhân dân.",
                            "Chịu trách nhiệm trước nhân dân về những quyết định của mình."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Lãnh đạo gắn với trách nhiệm giải trình."
                    }
                ],
                "id": "mln-p11-s02",
                "label": "02 / 2013"
            },
            {
                "title": "Khuôn khổ áp dụng cho ai",
                "source": "Hiến pháp 2013 · Điều 4, khoản 3",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Các tổ chức của Đảng và đảng viên hoạt động trong khuôn khổ Hiến pháp và pháp luật.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "So với năm 1992, quy định nêu rõ cả đảng viên.",
                            "Quyền lãnh đạo không được hiểu là đứng ngoài khuôn khổ pháp luật."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tuân thủ là nghĩa vụ đi cùng vai trò được ghi nhận."
                    }
                ],
                "id": "mln-p11-s03",
                "label": "03 / 2013"
            }
        ]
    },
    "11": {
        "id": "mln-p12",
        "seed": 478,
        "steps": [
            {
                "title": "Một tiến trình tiếp tục",
                "source": "Đại hội XIII; Nghị quyết 27-NQ/TW, 2022",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "2021",
                                "text": "Đại hội XIII đặt nhiệm vụ xây dựng, hoàn thiện nhà nước pháp quyền."
                            },
                            {
                                "date": "09/11/2022",
                                "text": "Ban hành Nghị quyết 27-NQ/TW."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Ngày văn bản khác với ngày một trang tin đăng giới thiệu."
                    }
                ],
                "id": "mln-p12-s01",
                "label": "01 / 2021–2022"
            },
            {
                "title": "Những hướng cần làm",
                "source": "Nghị quyết 27-NQ/TW · nhiệm vụ, giải pháp",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Hoàn thiện hệ thống pháp luật và tổ chức thực thi.",
                            "Tăng cường kiểm soát quyền lực, trách nhiệm giải trình.",
                            "Xây dựng bộ máy phục vụ nhân dân hiệu lực, hiệu quả."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l4p5.webp",
                        "caption": "Minh họa chủ đề hoàn thiện thể chế",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    }
                ],
                "id": "mln-p12-s02",
                "label": "02 / 2021–2022"
            },
            {
                "title": "Kết quả và những hạn chế",
                "source": "Nghị quyết 27-NQ/TW · đánh giá tình hình",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Nghị quyết vừa ghi nhận kết quả, vừa chỉ ra hạn chế và các nhiệm vụ phải tiếp tục thực hiện.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Có khuôn khổ pháp luật chưa đồng nghĩa mọi cơ chế đã vận hành hoàn thiện."
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đọc cả nguyên tắc và thực tiễn thực hiện."
                        ]
                    }
                ],
                "id": "mln-p12-s03",
                "label": "03 / 2021–2022"
            }
        ]
    },
    "12": {
        "id": "mln-p13",
        "seed": 515,
        "steps": [
            {
                "title": "Thống nhất về mục tiêu",
                "source": "Bài thuyết trình của nhóm · II.1",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Theo quan điểm chính thức trong bài nhóm, sự lãnh đạo của Đảng và pháp quyền cùng hướng tới lợi ích của nhân dân.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Phục vụ lợi ích của nhân dân và dân tộc.",
                            "Bảo vệ quyền con người, quyền công dân và phát triển đất nước."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đây là cách giải thích của quan điểm được trình bày trong bài."
                    }
                ],
                "id": "mln-p13-s01",
                "label": "01 / Theo quan điểm chính thức"
            },
            {
                "title": "Hiến định và phương thức",
                "source": "Bài thuyết trình của nhóm · II.2–3",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cơ sở hiến định: quyền lãnh đạo gắn nghĩa vụ tuân thủ.",
                            "Phương thức: đường lối, công tác cán bộ, kiểm tra và nêu gương."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đảng lãnh đạo không đồng nghĩa làm thay chức năng của Nhà nước."
                    },
                    {
                        "type": "flow",
                        "from": "Định hướng",
                        "to": "Thể chế hóa",
                        "caption": "Thực hiện qua cơ chế và pháp luật",
                        "sub": ""
                    }
                ],
                "id": "mln-p13-s02",
                "label": "02 / Theo quan điểm chính thức"
            },
            {
                "title": "Kiểm soát và đối chiếu",
                "source": "Bài thuyết trình của nhóm · II.4, IV",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nguồn gốc quyền lực: gắn với quyền làm chủ của nhân dân.",
                            "Cơ sở hoạt động: chủ trương phải được thể chế hóa.",
                            "Ranh giới: hoạt động trong khuôn khổ pháp luật.",
                            "Trách nhiệm: giám sát và giải trình."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Lý do thứ tư nhấn mạnh kiểm soát quyền lực để ngăn lạm quyền."
                    }
                ],
                "id": "mln-p13-s03",
                "label": "03 / Theo quan điểm chính thức"
            }
        ]
    },
    "13": {
        "id": "mln-p14",
        "seed": 552,
        "steps": [
            {
                "title": "Phục vụ người dân",
                "source": "Giáo trình CNXH khoa học · Chương 4 · III.3.b",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Hoàn thiện nhà nước pháp quyền gắn với cải cách thể chế và phương thức hoạt động.",
                        "size": "lg"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l5p3.webp",
                        "caption": "Minh họa cắt giảm giấy tờ",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đơn giản hóa, bãi bỏ thủ tục gây phiền hà.",
                            "Nâng chất lượng cán bộ và hoạt động phục vụ."
                        ]
                    }
                ],
                "id": "mln-p14-s01",
                "label": "01 / Cải cách và thực thi"
            },
            {
                "title": "Kiểm soát lạm quyền",
                "source": "Bài thuyết trình của nhóm · II.4; Giáo trình CNXH khoa học · Chương 4",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Tăng trách nhiệm công vụ và giám sát quyền lực.",
                            "Kiểm tra, xử lý vi phạm theo thẩm quyền.",
                            "Phân biệt kỷ luật Đảng với trách nhiệm theo pháp luật."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Hai cơ chế không thay thế hoặc đồng nhất với nhau."
                    }
                ],
                "id": "mln-p14-s02",
                "label": "02 / Cải cách và thực thi"
            },
            {
                "title": "Những vấn đề còn đặt ra",
                "source": "Bài thuyết trình của nhóm · V: các ý kiến phản biện",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Bài nhóm ghi nhận tranh luận về kiểm soát độc lập, tính độc lập của tư pháp và hiệu quả thực thi pháp quyền.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Quan điểm chính thức nhấn mạnh mô hình phù hợp điều kiện Việt Nam.",
                            "Đánh giá thực tiễn cần xem hiệu quả kiểm soát và bảo vệ quyền."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Phân biệt nguyên tắc được tuyên bố với cách chúng vận hành."
                    }
                ],
                "id": "mln-p14-s03",
                "label": "03 / Cải cách và thực thi"
            }
        ]
    },
    "14": {
        "id": "mln-p15",
        "seed": 589,
        "steps": [
            {
                "title": "Trở lại câu hỏi đầu bài",
                "source": "Bài thuyết trình của nhóm · VI: kết luận",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Theo quan điểm chính thức trong bài nhóm, vai trò lãnh đạo của Đảng và nguyên tắc pháp quyền không loại trừ nhau.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Quyền lãnh đạo được Hiến pháp ghi nhận.",
                            "Quyền ấy đi cùng nghĩa vụ tuân thủ và trách nhiệm trước nhân dân."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Kết luận cần được đọc cùng điều kiện kiểm soát và thực thi."
                    }
                ],
                "id": "mln-p15-s01",
                "label": "01 / Kết luận"
            },
            {
                "title": "Ba ý cần nhớ",
                "source": "Bài thuyết trình của nhóm · VI; Nghị quyết 27-NQ/TW",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Lãnh đạo gắn với khuôn khổ Hiến pháp và pháp luật.",
                            "Pháp quyền đặt yêu cầu kiểm soát, ngăn ngừa lạm quyền.",
                            "Cơ chế kiểm soát và chất lượng thực thi còn phải tiếp tục hoàn thiện."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không dừng ở việc khẳng định một khẩu hiệu."
                    }
                ],
                "id": "mln-p15-s02",
                "label": "02 / Kết luận"
            },
            {
                "title": "Trách nhiệm của mỗi người",
                "source": "Giáo trình CNXH khoa học · Chương 4 · Chương 4: vận dụng",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Hiểu và tôn trọng pháp luật, quyền của người khác.",
                            "Tham gia góp ý, giám sát qua các cơ chế phù hợp.",
                            "Thực hiện quyền đi cùng trách nhiệm công dân."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/l5p4.webp",
                        "caption": "Minh họa cộng đồng và trách nhiệm",
                        "h": 340,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Nhà nước phục vụ nhân dân; nhân dân tham gia xây dựng nhà nước."
                    }
                ],
                "id": "mln-p15-s03",
                "label": "03 / Kết luận"
            }
        ]
    }
};
function getStory(pieceIndex) {
    const story = STORY_DATA[pieceIndex];
    if (!story) throw new Error('Không có nội dung MLN131 cho tranh ' + pieceIndex);
    return story;
}
