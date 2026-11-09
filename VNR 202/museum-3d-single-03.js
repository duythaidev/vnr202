// Bản (2): mỗi thẻ giữ một luận điểm chính; nguồn là đoạn tài liệu đã trích xuất.
const STORY_CONFIG = { writeSpeed: 1, flightSpeed: 1, motionBlur: 1, decorCards: 4, autoAdvance: false };
const STORY_DATA = {
    "0": {
        "id": "vnr-p01",
        "seed": 313,
        "steps": [
            {
                "title": "Bài toán độc lập",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Khai thác thuộc địa làm mâu thuẫn dân tộc ngày càng gay gắt.",
                            "Các phong trào yêu nước nối tiếp nhưng chưa tìm được đường lối và tổ chức đủ sức giành thắng lợi."
                        ]
                    }
                ],
                "id": "vnr-p01-s01",
                "label": "01 / Trước 1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 022–052"
            },
            {
                "title": "Bước ngoặt năm 1920",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1911",
                                "text": "Nguyễn Tất Thành ra đi."
                            },
                            {
                                "date": "1919",
                                "text": "Yêu sách của nhân dân An Nam."
                            },
                            {
                                "date": "1920",
                                "text": "Luận cương Lênin và Đại hội Tours."
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/nguyen-ai-quoc-tours-1920.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Nguyễn Ái Quốc tại Đại hội Tours, 1920."
                    }
                ],
                "id": "vnr-p01-s02",
                "label": "02 / Trước 1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 022–052"
            },
            {
                "title": "Chuẩn bị một lực lượng mới",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Hội Việt Nam Cách mạng Thanh niên (1925): tổ chức, báo chí và huấn luyện cán bộ.",
                            "Đường Kách mệnh 1927: hệ thống những vấn đề cơ bản của cách mạng.",
                            "Vô sản hóa 1928: đưa cán bộ gắn với phong trào công nhân."
                        ]
                    }
                ],
                "id": "vnr-p01-s03",
                "label": "03 / Trước 1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 022–052"
            },
            {
                "title": "Gắn lý luận với phong trào",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Lý luận",
                        "to": "Phong trào",
                        "caption": "Tư tưởng · Chính trị · Tổ chức"
                    },
                    {
                        "type": "text",
                        "text": "Sự chuẩn bị của Nguyễn Ái Quốc gắn con đường giải phóng dân tộc với một tổ chức lãnh đạo mới.",
                        "size": "lg"
                    }
                ],
                "id": "vnr-p01-s04",
                "label": "04 / Trước 1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 022–052"
            }
        ]
    },
    "1": {
        "id": "vnr-p02",
        "seed": 350,
        "steps": [
            {
                "title": "Thống nhất tổ chức",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nguyễn Ái Quốc chủ trì hội nghị hợp nhất đầu năm 1930 tại Hương Cảng.",
                            "Đại biểu Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng tham dự.",
                            "Ngày 24/2, Đông Dương Cộng sản Liên đoàn gia nhập."
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/hoi-nghi-thanh-lap-dang-phi-hoanh.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Hội nghị thành lập Đảng — tranh Phi Hoanh."
                    }
                ],
                "id": "vnr-p02-s01",
                "label": "01 / 02/1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 053–065"
            },
            {
                "title": "Độc lập là nhiệm vụ hàng đầu",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Cương lĩnh đầu tiên đặt nhiệm vụ chống đế quốc, giành độc lập dân tộc lên hàng đầu.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Mục tiêu trước mắt được đặt trong phương hướng cách mạng lâu dài."
                    }
                ],
                "id": "vnr-p02-s02",
                "label": "02 / 02/1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 053–065"
            },
            {
                "title": "Tập hợp lực lượng rộng rãi",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Công–nông là lực lượng cơ bản.",
                            "Tranh thủ tiểu tư sản, trí thức và những lực lượng có thể tham gia chống đế quốc.",
                            "Đoàn kết dân tộc gắn với vai trò lãnh đạo của Đảng."
                        ]
                    }
                ],
                "id": "vnr-p02-s03",
                "label": "03 / 02/1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 053–065"
            },
            {
                "title": "Chấm dứt khủng hoảng đường lối",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sự ra đời của Đảng thống nhất tổ chức lãnh đạo và xác lập đường lối cứu nước.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Tổ chức",
                        "to": "Đường lối",
                        "caption": "Một bước ngoặt của phong trào cách mạng"
                    }
                ],
                "id": "vnr-p02-s04",
                "label": "04 / 02/1930",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 053–065"
            }
        ]
    },
    "2": {
        "id": "vnr-p03",
        "seed": 387,
        "steps": [
            {
                "title": "Từ đấu tranh đến cao trào",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "Đầu 1930",
                                "text": "Công nhân và nông dân đấu tranh."
                            },
                            {
                                "date": "05–08",
                                "text": "Phong trào phát triển mạnh."
                            },
                            {
                                "date": "09/1930",
                                "text": "Đỉnh cao ở Nghệ An, Hà Tĩnh."
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/xo-viet-nghe-tinh-tranh.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Xô viết Nghệ Tĩnh — tranh sơn mài tái hiện."
                    }
                ],
                "id": "vnr-p03-s01",
                "label": "01 / 1930–1931",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 067–073"
            },
            {
                "title": "Sức mạnh công–nông",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ở một số thôn, xã, tổ chức cách mạng và nông hội đứng ra quản lý đời sống.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Liên minh công–nông được rèn luyện qua đấu tranh.",
                            "Quần chúng thể hiện khả năng tổ chức và xây dựng chính quyền."
                        ]
                    }
                ],
                "id": "vnr-p03-s02",
                "label": "02 / 1930–1931",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 067–073"
            },
            {
                "title": "Kinh nghiệm trong thử thách",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cao trào khẳng định vai trò lãnh đạo và sức mạnh quần chúng.",
                            "Đàn áp gây tổn thất nặng nề, đặt ra yêu cầu bảo vệ lực lượng.",
                            "Bài học: kết hợp mục tiêu, tổ chức và điều kiện hành động."
                        ]
                    }
                ],
                "id": "vnr-p03-s03",
                "label": "03 / 1930–1931",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 067–073"
            }
        ]
    },
    "3": {
        "id": "vnr-p04",
        "seed": 424,
        "steps": [
            {
                "title": "Luận cương tháng 10",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nhấn mạnh nhiệm vụ phản đế và cách mạng thổ địa.",
                            "Xác định động lực công–nông, vai trò của Đảng và phương pháp đấu tranh."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Vấn đề thổ địa được coi là cái cốt của cách mạng tư sản dân quyền."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/tran-phu-chan-dung.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Trần Phú (1904–1931), Tổng Bí thư đầu tiên."
                    }
                ],
                "id": "vnr-p04-s01",
                "label": "01 / 1930–1935",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 074–088"
            },
            {
                "title": "Khác biệt trong cách tập hợp",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cương lĩnh tháng 2: đề cao độc lập dân tộc và lực lượng rộng rãi.",
                            "Luận cương tháng 10: nặng về đấu tranh giai cấp, chưa đánh giá đầy đủ khả năng yêu nước của các tầng lớp khác."
                        ]
                    }
                ],
                "id": "vnr-p04-s02",
                "label": "02 / 1930–1935",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 074–088"
            },
            {
                "title": "Giữ lực lượng trong nhà tù",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Bị khủng bố, các chiến sĩ vẫn duy trì tổ chức, học tập lý luận và báo chí trong tù.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Bảo vệ con người và tổ chức trở thành điều kiện để phục hồi phong trào."
                    }
                ],
                "id": "vnr-p04-s03",
                "label": "03 / 1930–1935",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 074–088"
            },
            {
                "title": "Phục hồi hệ thống tổ chức",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1932",
                                "text": "Chương trình hành động."
                            },
                            {
                                "date": "1934",
                                "text": "Ban Chỉ huy ở ngoài."
                            },
                            {
                                "date": "03/1935",
                                "text": "Đại hội I tại Ma Cao."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tổ chức được phục hồi, nhưng những hạn chế đường lối chưa được khắc phục đầy đủ."
                    }
                ],
                "id": "vnr-p04-s04",
                "label": "04 / 1930–1935",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 074–088"
            }
        ]
    },
    "4": {
        "id": "vnr-p05",
        "seed": 461,
        "steps": [
            {
                "title": "Nhiệm vụ trước mắt thay đổi",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Trước nguy cơ phát xít và chiến tranh, Đảng tập trung đòi tự do, dân chủ, cơm áo, hòa bình.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Điều chỉnh sách lược để phù hợp tình hình, không từ bỏ mục tiêu lâu dài."
                    }
                ],
                "id": "vnr-p05-s01",
                "label": "01 / 1936–1939",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 089–117"
            },
            {
                "title": "Bước đột phá về nhận thức",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Chung quanh vấn đề chiến sách mới tháng 10/1936 nhìn lại quan hệ giữa giải phóng dân tộc và nhiệm vụ ruộng đất.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Không buộc hai nhiệm vụ vào một trình tự cứng nhắc.",
                            "Tập trung vào đối tượng nguy hiểm cần giải quyết trước."
                        ]
                    }
                ],
                "id": "vnr-p05-s02",
                "label": "02 / 1936–1939",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 089–117"
            },
            {
                "title": "Mở rộng hình thức đấu tranh",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Mặt trận rộng rãi; kết hợp công khai với bí mật.",
                            "Dân nguyện, báo chí, nghị trường, mít tinh và bãi công.",
                            "Đấu Xảo 1/5/1938: một cuộc biểu dương lực lượng tiêu biểu."
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/dau-xao-1938.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Mít tinh Đấu Xảo, Hà Nội, 1/5/1938."
                    }
                ],
                "id": "vnr-p05-s03",
                "label": "03 / 1936–1939",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 089–117"
            },
            {
                "title": "Tích lũy lực lượng chính trị",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Vận động quần chúng qua yêu cầu dân sinh, dân chủ.",
                            "Hội Truyền bá Quốc ngữ 1938; Tự chỉ trích 1939.",
                            "Tích lũy kinh nghiệm mặt trận và tổ chức cho chặng sau."
                        ]
                    }
                ],
                "id": "vnr-p05-s04",
                "label": "04 / 1936–1939",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 089–117"
            }
        ]
    },
    "5": {
        "id": "vnr-p06",
        "seed": 498,
        "steps": [
            {
                "title": "Chiến tranh đổi tình thế",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "11/1939",
                                "text": "Mở đầu chuyển hướng."
                            },
                            {
                                "date": "11/1940",
                                "text": "Tiếp tục điều chỉnh."
                            },
                            {
                                "date": "05/1941",
                                "text": "Trung ương 8 hoàn chỉnh chủ trương."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Pháp–Nhật thống trị; các cuộc nổi dậy Bắc Sơn, Nam Kỳ, Đô Lương báo hiệu tinh thần đấu tranh."
                    }
                ],
                "id": "vnr-p06-s01",
                "label": "01 / 1939–1941",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 118–148"
            },
            {
                "title": "Dân tộc là ưu tiên cấp bách",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Xác định mâu thuẫn dân tộc là vấn đề cấp bách.",
                            "Đặt giải phóng dân tộc lên hàng đầu; điều chỉnh nhiệm vụ ruộng đất để phục vụ cứu nước."
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/pac-bo-suoi-le-nin-hien-nay.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Suối Lê-nin, Pác Bó — ảnh hiện đại."
                    }
                ],
                "id": "vnr-p06-s02",
                "label": "02 / 1939–1941",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 118–148"
            },
            {
                "title": "Quyền tự quyết và Việt Minh",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương.",
                            "Thành lập Việt Minh, tập hợp rộng rãi các lực lượng yêu nước."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Mục tiêu cứu nước là cơ sở đoàn kết toàn dân tộc."
                    }
                ],
                "id": "vnr-p06-s03",
                "label": "03 / 1939–1941",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 118–148"
            },
            {
                "title": "Nhà nước và con đường giành quyền",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Hướng tới nhà nước Việt Nam Dân chủ Cộng hòa của toàn dân tộc.",
                            "Chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm.",
                            "Đi từ khởi nghĩa từng phần đến tổng khởi nghĩa khi đủ điều kiện."
                        ]
                    }
                ],
                "id": "vnr-p06-s04",
                "label": "04 / 1939–1941",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 118–148"
            }
        ]
    },
    "6": {
        "id": "vnr-p07",
        "seed": 535,
        "steps": [
            {
                "title": "Lực lượng chính trị và văn hóa",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Việt Minh và các đoàn thể cứu quốc mở rộng tổ chức quần chúng.",
                            "Báo chí, vận động trí thức và Đề cương văn hóa 1943 góp phần chuẩn bị tư tưởng."
                        ]
                    }
                ],
                "id": "vnr-p07-s01",
                "label": "01 / 1941–1944",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 149–161"
            },
            {
                "title": "Nối các vùng căn cứ",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Cao Bằng, Bắc Sơn–Võ Nhai và hướng Nam tiến tạo liên hệ giữa cơ sở, lực lượng và địa bàn.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Chuẩn bị khởi nghĩa bao gồm tổ chức, con người, liên lạc và căn cứ."
                    }
                ],
                "id": "vnr-p07-s02",
                "label": "02 / 1941–1944",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 149–161"
            },
            {
                "title": "Đội quân cách mạng ra đời",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "22/12/1944",
                                "text": "Đội Việt Nam tuyên truyền giải phóng quân."
                            },
                            {
                                "date": "25–26/12",
                                "text": "Phai Khắt và Nà Ngần."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Lực lượng chính trị và vũ trang được xây dựng trong cùng một quá trình."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/doi-tuyen-truyen-giai-phong-quan-1944.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Đội Việt Nam Tuyên truyền Giải phóng quân, 22/12/1944."
                    }
                ],
                "id": "vnr-p07-s03",
                "label": "03 / 1941–1944",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 149–161"
            }
        ]
    },
    "7": {
        "id": "vnr-p08",
        "seed": 572,
        "steps": [
            {
                "title": "Tình thế sau ngày 9 tháng 3",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "09/3",
                                "text": "Nhật đảo chính Pháp."
                            },
                            {
                                "date": "12/3",
                                "text": "Chỉ thị Nhật–Pháp bắn nhau và hành động của chúng ta."
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/chi-thi-nhat-phap-ban-nhau-1945.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Sách in Chỉ thị ngày 12/3/1945."
                    }
                ],
                "id": "vnr-p08-s01",
                "label": "01 / 03–08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 162–176"
            },
            {
                "title": "Xác định kẻ thù trực tiếp",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Chỉ thị tập trung mũi nhọn vào phát xít Nhật, phát động cao trào kháng Nhật cứu nước.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Cao trào là tiền đề cho tổng khởi nghĩa, chưa phải lệnh tổng khởi nghĩa ngay lập tức."
                    }
                ],
                "id": "vnr-p08-s02",
                "label": "02 / 03–08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 162–176"
            },
            {
                "title": "Khởi nghĩa gắn với dân sinh",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Khởi nghĩa từng phần, du kích cục bộ phát triển.",
                            "Phá kho thóc giải quyết nạn đói gắn yêu cầu cứu nước với nhu cầu sống còn.",
                            "Quần chúng tham gia và chính quyền cách mạng được hình thành ở nhiều nơi."
                        ]
                    }
                ],
                "id": "vnr-p08-s03",
                "label": "03 / 03–08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 162–176"
            },
            {
                "title": "Thống nhất và mở rộng căn cứ",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "15–20/4",
                                "text": "Hội nghị quân sự cách mạng Bắc Kỳ."
                            },
                            {
                                "date": "15/5",
                                "text": "Thống nhất thành Việt Nam Giải phóng quân."
                            },
                            {
                                "date": "04/6",
                                "text": "Khu giải phóng Việt Bắc."
                            }
                        ]
                    }
                ],
                "id": "vnr-p08-s04",
                "label": "04 / 03–08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 162–176"
            }
        ]
    },
    "8": {
        "id": "vnr-p09",
        "seed": 609,
        "steps": [
            {
                "title": "Thời cơ và sự chủ động",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nhật đầu hàng Đồng minh; bộ máy thống trị hoang mang.",
                            "Lực lượng cách mạng đã được chuẩn bị qua nhiều năm.",
                            "Cần hành động kịp thời trước khi quân Đồng minh vào Đông Dương."
                        ]
                    }
                ],
                "id": "vnr-p09-s01",
                "label": "01 / 08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 177–190"
            },
            {
                "title": "Quyết định tại Tân Trào",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "13/8",
                                "text": "Quân lệnh số 1."
                            },
                            {
                                "date": "14–15/8",
                                "text": "Hội nghị toàn quốc của Đảng."
                            },
                            {
                                "date": "16/8",
                                "text": "Quốc dân Đại hội."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tập trung · Thống nhất · Kịp thời"
                    }
                ],
                "id": "vnr-p09-s02",
                "label": "02 / 08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 177–190"
            },
            {
                "title": "Giành chính quyền ở các đô thị",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "19/8",
                                "text": "Hà Nội."
                            },
                            {
                                "date": "23/8",
                                "text": "Huế."
                            },
                            {
                                "date": "25/8",
                                "text": "Sài Gòn."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Thắng lợi ở các trung tâm lớn nằm trong làn sóng khởi nghĩa rộng khắp."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/ha-noi-phu-kham-sai-19-8-1945.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Nhân dân Hà Nội chiếm Phủ Khâm sai, 19/8/1945."
                    }
                ],
                "id": "vnr-p09-s03",
                "label": "03 / 08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 177–190"
            },
            {
                "title": "Xác lập chính quyền mới",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Chính phủ lâm thời được hình thành; ngày 30/8, Bảo Đại thoái vị.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Giành chính quyền được nối tiếp bằng việc tổ chức nhà nước độc lập."
                    }
                ],
                "id": "vnr-p09-s04",
                "label": "04 / 08/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 177–190"
            }
        ]
    },
    "9": {
        "id": "vnr-p10",
        "seed": 646,
        "steps": [
            {
                "title": "Tuyên ngôn Độc lập",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ngày 2/9/1945 tại Ba Đình, Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Mở ra kỷ nguyên độc lập, tự do của dân tộc."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-10/le-doc-lap-ba-dinh-2-9-1945.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Lễ Độc lập tại Ba Đình, 2/9/1945."
                    }
                ],
                "id": "vnr-p10-s01",
                "label": "01 / 02/09/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 190–209"
            },
            {
                "title": "Tính chất và ý nghĩa",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cách mạng giải phóng dân tộc mang tính chất dân chủ mới.",
                            "Chấm dứt ách thống trị thuộc địa và chế độ quân chủ; nhân dân làm chủ đất nước.",
                            "Những nhiệm vụ kinh tế, xã hội còn được tiếp tục giải quyết."
                        ]
                    }
                ],
                "id": "vnr-p10-s02",
                "label": "02 / 02/09/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 190–209"
            },
            {
                "title": "Bốn bài học",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Chiến lược: đề cao giải phóng dân tộc.",
                            "Lực lượng: đoàn kết toàn dân trên nền tảng công–nông.",
                            "Phương pháp: kết hợp chính trị, vũ trang và thời cơ.",
                            "Lãnh đạo: xây dựng Đảng vững mạnh, gắn với quần chúng."
                        ]
                    }
                ],
                "id": "vnr-p10-s03",
                "label": "03 / 02/09/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 190–209"
            },
            {
                "title": "Mạch đường lối 1930–1945",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "02/1930",
                                "text": "Cương lĩnh."
                            },
                            {
                                "date": "10/1930",
                                "text": "Luận cương."
                            },
                            {
                                "date": "1936",
                                "text": "Sách lược mới."
                            }
                        ]
                    },
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1939–1941",
                                "text": "Chuyển hướng."
                            },
                            {
                                "date": "1945",
                                "text": "Chớp thời cơ."
                            }
                        ]
                    }
                ],
                "id": "vnr-p10-s04",
                "label": "04 / 02/09/1945",
                "source": "Tài liệu VNR202 nhóm 1 · bản (2), đoạn 190–209"
            }
        ]
    }
};
function getStory(pieceIndex) {
    const story = STORY_DATA[pieceIndex];
    if (!story) throw new Error("Không có nội dung VNR202 cho tranh " + pieceIndex);
    return story;
}
