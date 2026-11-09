// Bản (3): mỗi thẻ có một ý chính (thesis, theo bản 3) và các ý phụ lấy từ bản (2); bố cục khác nhau theo thẻ.
const STORY_CONFIG = { writeSpeed: 1.3, flightSpeed: 1, motionBlur: 1, decorCards: 4, autoAdvance: false };
const STORY_DATA = {
    "0": {
        "id": "vnr-p01",
        "seed": 313,
        "intro": "Trước năm một nghìn chín trăm ba mươi, dân tộc ta đã có lòng yêu nước nhưng chưa có đường lối đúng. Nguyễn Ái Quốc tìm con đường ấy như thế nào?",
        "steps": [
            {
                "title": "Ách thống trị và mâu thuẫn dân tộc",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Dưới ách thực dân Pháp, mâu thuẫn giữa toàn dân tộc với thực dân và phong kiến trở thành mâu thuẫn chủ yếu, gay gắt nhất."
                    },
                    {
                        "type": "chain",
                        "items": [
                            {
                                "head": "1858 – 1884",
                                "text": "Pháp nổ súng Đà Nẵng; triều Nguyễn thỏa hiệp rồi đầu hàng qua Hiệp ước Patơnốt."
                            },
                            {
                                "head": "1897 – 1929",
                                "text": "Hai cuộc khai thác thuộc địa lớn; Liên bang Đông Dương lập năm 1887."
                            },
                            {
                                "head": "Kết quả",
                                "text": "Xã hội thuộc địa nửa phong kiến."
                            }
                        ]
                    },
                    {
                        "type": "grid",
                        "cols": 3,
                        "items": [
                            {
                                "head": "Chính trị",
                                "text": "“Chia để trị”: chia ba kỳ; lập nhà tù Côn Đảo từ 1862."
                            },
                            {
                                "head": "Kinh tế",
                                "text": "Thị trường tiêu thụ của chính quốc; vơ vét tài nguyên, thuế nặng."
                            },
                            {
                                "head": "Văn hóa – xã hội",
                                "text": "“Ngu dân”: nhà tù nhiều hơn trường học; rượu cồn, thuốc phiện."
                            }
                        ]
                    }
                ],
                "narration": "Từ năm một nghìn tám trăm năm mươi tám, Pháp xâm lược rồi đặt ách thống trị lên đất nước. Chúng chia ba kỳ, vơ vét tài nguyên, thi hành chính sách ngu dân. Vì thế mâu thuẫn giữa toàn dân tộc với thực dân và phong kiến trở thành mâu thuẫn chủ yếu, gay gắt nhất.",
                "id": "vnr-p01-s01",
                "label": "01 / 1858–1929"
            },
            {
                "title": "Giai cấp mới, con đường cũ bế tắc",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Giai cấp công nhân ra đời sớm và kiên cường; các phong trào yêu nước trước đó đều thất bại vì thiếu đường lối và tổ chức đúng đắn."
                    },
                    {
                        "type": "stats",
                        "items": [
                            {
                                "value": "> 90%",
                                "text": "dân số là nông dân, bị bóc lột nặng nề nhất"
                            },
                            {
                                "value": "22 vạn",
                                "text": "công nhân cuối 1929 (10 vạn năm 1913), chiếm hơn 1,2% dân số"
                            }
                        ]
                    },
                    {
                        "type": "checklist",
                        "mark": "cross",
                        "size": 31,
                        "items": [
                            "Cần Vương (1885–1896), Yên Thế: còn nặng “cốt cách phong kiến”.",
                            "Đông Du, Quang phục Hội; cải cách của Phan Châu Trinh: chưa nhìn rõ bản chất thực dân.",
                            "Việt Nam Quốc dân Đảng, Yên Bái (2/1930): manh động, thất bại nhanh."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Chung nguyên nhân: thiếu đường lối đúng, thiếu tổ chức tiên phong, chưa có phương pháp thích hợp."
                    }
                ],
                "narration": "Công nhân ra đời sớm, đến cuối năm một nghìn chín trăm hai mươi chín đã hơn hai mươi hai vạn người, xuất thân từ nông dân và nhanh chóng trở nên tự giác. Trong khi đó Cần Vương, Yên Thế, Đông Du hay Yên Bái đều thất bại, vì thiếu đường lối đúng, tổ chức tiên phong và phương pháp thích hợp.",
                "id": "vnr-p01-s02",
                "label": "02 / 1885–1930"
            },
            {
                "title": "Nguyễn Ái Quốc tìm đường cứu nước",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Từ 1911 đến 1920, Nguyễn Ái Quốc tìm ra con đường cứu nước: giải phóng dân tộc gắn với cách mạng vô sản."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 160,
                        "ts": 29,
                        "items": [
                            {
                                "date": "1911",
                                "text": "Nguyễn Tất Thành ra đi tìm đường cứu nước."
                            },
                            {
                                "date": "18/6/1919",
                                "text": "Lấy tên Nguyễn Ái Quốc, gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles."
                            },
                            {
                                "date": "7/1920",
                                "text": "Đọc Luận cương của Lênin trên báo L’Humanité."
                            },
                            {
                                "date": "12/1920",
                                "text": "Đại hội Tours: tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp — người cộng sản đầu tiên của Việt Nam."
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
                "narration": "Năm một nghìn chín trăm mười một, Nguyễn Tất Thành ra đi tìm đường cứu nước. Năm một nghìn chín trăm hai mươi, Người đọc Luận cương của Lênin và tại Đại hội Tours trở thành người cộng sản đầu tiên của Việt Nam. Từ đó, giải phóng dân tộc gắn với cách mạng vô sản.",
                "id": "vnr-p01-s03",
                "label": "03 / 1911–1920"
            },
            {
                "title": "Chuẩn bị tư tưởng, chính trị, tổ chức",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Nguyễn Ái Quốc chuẩn bị đồng thời ba mặt để thành lập một đảng cách mạng chân chính."
                    },
                    {
                        "type": "hub",
                        "center": "Chuẩn bị lập Đảng",
                        "r": 118,
                        "items": [
                            {
                                "head": "Tư tưởng",
                                "text": "Lập Hội Liên hiệp thuộc địa (1921), báo Le Paria; viết báo, truyền bá chủ nghĩa Mác – Lênin."
                            },
                            {
                                "head": "Chính trị",
                                "text": "Đại hội V Quốc tế Cộng sản (1924): cách mạng thuộc địa có thể thành công trước chính quốc; “công nông là gốc cách mệnh”."
                            },
                            {
                                "head": "Tổ chức",
                                "text": "Hội Việt Nam Cách mạng Thanh niên (6/1925), báo Thanh niên, Đường Kách mệnh (1927), “vô sản hóa” (1928)."
                            }
                        ]
                    }
                ],
                "narration": "Từ năm một nghìn chín trăm hai mươi mốt đến hai mươi chín, Nguyễn Ái Quốc chuẩn bị ba mặt. Về tư tưởng là báo chí và truyền bá chủ nghĩa Mác Lênin. Về chính trị là những luận điểm sáng tạo. Về tổ chức là Hội Thanh niên, Đường Kách mệnh và phong trào vô sản hóa.",
                "id": "vnr-p01-s04",
                "label": "04 / 1921–1929"
            }
        ]
    },
    "1": {
        "id": "vnr-p02",
        "seed": 350,
        "intro": "Từ ba tổ chức cộng sản riêng rẽ năm một nghìn chín trăm hai mươi chín, Đảng Cộng sản Việt Nam ra đời với một cương lĩnh đặt độc lập dân tộc lên hàng đầu.",
        "steps": [
            {
                "title": "Ba tổ chức cộng sản năm 1929",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Phong trào công nhân đòi hỏi một đảng thống nhất: năm 1929 ba tổ chức cộng sản cùng xuất hiện."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "3/1929",
                                "head": "Chi bộ cộng sản đầu tiên",
                                "text": "Số 5D phố Hàm Long, Hà Nội."
                            },
                            {
                                "date": "6/1929",
                                "head": "Đông Dương Cộng sản Đảng",
                                "text": "Số 312 Khâm Thiên; báo Búa liềm."
                            },
                            {
                                "date": "9/1929",
                                "head": "Đông Dương Cộng sản Liên đoàn",
                                "text": "Thành lập ở Trung Kỳ, từ Tân Việt."
                            },
                            {
                                "date": "11/1929",
                                "head": "An Nam Cộng sản Đảng",
                                "text": "Khánh Hội, Sài Gòn; tạp chí Bônsơvích."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Nguyễn Ái Quốc, phái viên Quốc tế Cộng sản, triệu tập hội nghị hợp nhất."
                    }
                ],
                "narration": "Năm một nghìn chín trăm hai mươi chín, ba tổ chức cộng sản lần lượt ra đời: Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng và Đông Dương Cộng sản Liên đoàn. Phong trào rất cần một đảng thống nhất, nên Nguyễn Ái Quốc triệu tập hội nghị hợp nhất.",
                "id": "vnr-p02-s01",
                "label": "01 / 1929"
            },
            {
                "title": "Hội nghị thành lập Đảng",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Hội nghị hợp nhất ở Cửu Long (Hồng Kông) thống nhất các tổ chức thành Đảng Cộng sản Việt Nam."
                    },
                    {
                        "type": "checklist",
                        "size": 31,
                        "items": [
                            "Nguyễn Ái Quốc triệu tập với tư cách phái viên của Quốc tế Cộng sản.",
                            "Dự họp: 2 đại biểu Đông Dương Cộng sản Đảng, 2 đại biểu An Nam Cộng sản Đảng.",
                            "Thống nhất 5 điểm lớn, định tên Đảng; thông qua Chánh cương, Sách lược, Chương trình tóm tắt, Điều lệ vắn tắt.",
                            "24/2/1930: Đông Dương Cộng sản Liên đoàn gia nhập. Ngày 3/2 là ngày kỷ niệm thành lập Đảng."
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
                "narration": "Hội nghị họp ở Cửu Long, Hồng Kông, từ mồng sáu tháng một đến mồng bảy tháng hai năm một nghìn chín trăm ba mươi. Hội nghị thống nhất các tổ chức thành Đảng Cộng sản Việt Nam, thông qua Chánh cương, Sách lược, Chương trình tóm tắt và Điều lệ vắn tắt.",
                "id": "vnr-p02-s02",
                "label": "02 / 2/1930"
            },
            {
                "title": "Cương lĩnh chính trị đầu tiên",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cương lĩnh đặt nhiệm vụ chống đế quốc, giành độc lập dân tộc lên hàng đầu và đại đoàn kết toàn dân tộc."
                    },
                    {
                        "type": "table",
                        "cols": [
                            "Nội dung",
                            "Cương lĩnh xác định"
                        ],
                        "widths": [
                            0.2,
                            0.8
                        ],
                        "ts": 28,
                        "rows": [
                            [
                                "Mục tiêu",
                                "Tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản."
                            ],
                            [
                                "Nhiệm vụ",
                                "“Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam được hoàn toàn độc lập.”"
                            ],
                            [
                                "Lực lượng",
                                "Công nông là gốc, do giai cấp công nhân lãnh đạo; liên lạc tiểu tư sản, trí thức, trung nông; lợi dụng hoặc trung lập phú nông, tư bản chưa rõ mặt phản cách mạng."
                            ],
                            [
                                "Phương pháp",
                                "Bạo lực cách mạng của quần chúng; liên lạc với các dân tộc bị áp bức và vô sản thế giới."
                            ]
                        ]
                    }
                ],
                "narration": "Cương lĩnh đầu tiên đặt nhiệm vụ đánh đổ đế quốc Pháp và phong kiến, giành độc lập dân tộc lên hàng đầu. Lực lượng là đại đoàn kết toàn dân tộc, lấy công nông làm gốc, dưới sự lãnh đạo của giai cấp công nhân, và dùng bạo lực cách mạng của quần chúng.",
                "id": "vnr-p02-s03",
                "label": "03 / 2/1930"
            },
            {
                "title": "Chấm dứt khủng hoảng đường lối",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Thành lập Đảng chấm dứt cuộc khủng hoảng về đường lối và tổ chức lãnh đạo kéo dài từ cuối thế kỷ XIX."
                    },
                    {
                        "type": "flow",
                        "from": "Khủng hoảng",
                        "to": "Đảng",
                        "caption": "Kết hợp ba yếu tố",
                        "sub": "Chủ nghĩa Mác – Lênin · phong trào công nhân · phong trào yêu nước"
                    },
                    {
                        "type": "bullets",
                        "size": "sm",
                        "items": [
                            "Sản phẩm của sự kết hợp chủ nghĩa Mác – Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.",
                            "Khẳng định dứt khoát sự lựa chọn con đường cách mạng vô sản."
                        ]
                    }
                ],
                "narration": "Việc thành lập Đảng chấm dứt cuộc khủng hoảng về đường lối và tổ chức lãnh đạo kéo dài từ cuối thế kỷ mười chín. Đảng là sản phẩm của sự kết hợp chủ nghĩa Mác Lênin với phong trào công nhân và phong trào yêu nước, khẳng định con đường cách mạng vô sản.",
                "id": "vnr-p02-s04",
                "label": "04 / 2/1930"
            }
        ]
    },
    "2": {
        "id": "vnr-p03",
        "seed": 391,
        "intro": "Ý chính thứ nhất: cao trào cách mạng một nghìn chín trăm ba mươi, một nghìn chín trăm ba mươi mốt. Đảng vừa ra đời đã đối mặt với khủng hoảng và khủng bố, và Xô viết Nghệ Tĩnh là đỉnh cao.",
        "steps": [
            {
                "title": "Cao trào cách mạng 1930–1931",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Khủng hoảng kinh tế 1929–1933 và khủng bố trắng đẩy mâu thuẫn tới đỉnh điểm; Đảng vừa ra đời đã kịp phát động quần chúng."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 150,
                        "ts": 28,
                        "items": [
                            {
                                "date": "1–4/1930",
                                "text": "Bãi công liên tiếp: xi măng Hải Phòng, dầu Nhà Bè, Phú Riềng, Nam Định, Bến Thủy."
                            },
                            {
                                "date": "1/5/1930",
                                "text": "Lần đầu nhân dân Việt Nam kỷ niệm Ngày Quốc tế Lao động."
                            },
                            {
                                "date": "8/1930",
                                "text": "Tổng bãi công khu công nghiệp Bến Thủy – Vinh mở ra “thời kỳ đấu tranh kịch liệt”."
                            }
                        ]
                    },
                    {
                        "type": "chart",
                        "col": "right",
                        "h": 250,
                        "bars": [
                            {
                                "label": "Tháng 5",
                                "value": 54
                            },
                            {
                                "label": "Tháng 6–8",
                                "value": 121
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "col": "right",
                        "size": "sm",
                        "text": "Số cuộc đấu tranh trong năm 1930."
                    }
                ],
                "narration": "Khủng hoảng kinh tế và khủng bố trắng đẩy mâu thuẫn tới đỉnh điểm, nhưng Đảng vừa ra đời đã kịp phát động quần chúng. Từ bãi công đầu năm, ngày Quốc tế Lao động mồng một tháng năm, đến tổng bãi công Bến Thủy Vinh tháng tám, phong trào lên thành cao trào.",
                "id": "vnr-p03-s01",
                "label": "01 / 1930–31"
            },
            {
                "title": "Xô viết Nghệ–Tĩnh",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đỉnh cao là Xô viết Nghệ–Tĩnh: chi bộ và nông hội đứng ra làm chức năng chính quyền công nông thu nhỏ."
                    },
                    {
                        "type": "stat",
                        "value": "171",
                        "text": "người hy sinh khi máy bay Pháp ném bom cuộc biểu tình ở Hưng Nguyên (12/9/1930)."
                    },
                    {
                        "type": "checklist",
                        "size": 30,
                        "items": [
                            "Chính quyền đế quốc và tay sai ở nhiều thôn, xã tan rã.",
                            "Chi bộ và nông hội quản lý đời sống nông thôn theo kiểu ủy ban tự quản Xôviết.",
                            "9/1930: Thường vụ Trung ương nhắc bạo động riêng lẻ lúc đó là quá sớm."
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
                "narration": "Đỉnh cao là Xô viết Nghệ Tĩnh tháng chín năm một nghìn chín trăm ba mươi. Chi bộ và nông hội đứng ra làm chức năng chính quyền công nông thu nhỏ. Cuộc biểu tình ở Hưng Nguyên bị máy bay Pháp ném bom, một trăm bảy mươi mốt người hy sinh.",
                "id": "vnr-p03-s02",
                "label": "02 / 9/1930"
            },
            {
                "title": "Đàn áp và ý nghĩa lịch sử",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Dù tổn thất nặng nề, cao trào khẳng định trên thực tế quyền lãnh đạo của giai cấp công nhân và rèn luyện lực lượng cho các giai đoạn sau."
                    },
                    {
                        "type": "versus",
                        "left": "Tổn thất",
                        "right": "Ý nghĩa",
                        "rows": [
                            {
                                "l": "Cuối 1930 – đầu 1931: Pháp khủng bố, ép dân đầu thú, rước cờ vàng, nhận thẻ quy thuận.",
                                "r": "Khẳng định quyền và năng lực lãnh đạo của giai cấp vô sản."
                            },
                            {
                                "l": "4/1931: toàn bộ Ban Chấp hành Trung ương bị bắt, không còn một ủy viên.",
                                "r": "Nông dân tin vững chắc vào Đảng; xây dựng khối liên minh công – nông."
                            },
                            {
                                "l": "Hệ thống tổ chức Đảng tổn thất nặng nề.",
                                "r": "Kinh nghiệm kết hợp phản đế – phản phong, nông thôn – thành thị, chính trị – vũ trang."
                            }
                        ]
                    }
                ],
                "narration": "Pháp khủng bố khốc liệt, tháng tư năm một nghìn chín trăm ba mươi mốt toàn bộ Ban Chấp hành Trung ương bị bắt. Dù tổn thất nặng, cao trào khẳng định quyền lãnh đạo của giai cấp công nhân, củng cố liên minh công nông và để lại nhiều kinh nghiệm quý.",
                "id": "vnr-p03-s03",
                "label": "03 / 1931"
            }
        ]
    },
    "3": {
        "id": "vnr-p04",
        "seed": 427,
        "intro": "Luận cương tháng mười năm một nghìn chín trăm ba mươi khác Cương lĩnh ở đâu? Và Đảng khôi phục tổ chức thế nào để tới Đại hội thứ nhất năm một nghìn chín trăm ba mươi lăm?",
        "steps": [
            {
                "title": "Luận cương chính trị 10/1930",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Hội nghị Trung ương đầu tiên thông qua Luận cương chính trị do Trần Phú soạn thảo."
                    },
                    {
                        "type": "table",
                        "cols": [
                            "Mục",
                            "Nội dung"
                        ],
                        "widths": [
                            0.24,
                            0.76
                        ],
                        "ts": 27,
                        "rows": [
                            [
                                "Hoàn cảnh",
                                "14–31/10/1930, Hương Cảng; đổi tên Đảng Cộng sản Đông Dương; Trần Phú làm Tổng Bí thư."
                            ],
                            [
                                "Chiến lược",
                                "Cách mạng tư sản dân quyền có tính chất thổ địa và phản đế, rồi bỏ qua tư bản tiến thẳng lên xã hội chủ nghĩa."
                            ],
                            [
                                "Trọng tâm",
                                "“Vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền.”"
                            ],
                            [
                                "Lực lượng",
                                "Vô sản và nông dân; phương pháp “võ trang bạo động”."
                            ]
                        ]
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
                "narration": "Tháng mười năm một nghìn chín trăm ba mươi, Hội nghị Trung ương đầu tiên họp ở Hương Cảng, đổi tên Đảng thành Đảng Cộng sản Đông Dương và bầu Trần Phú làm Tổng Bí thư. Luận cương nêu cách mạng tư sản dân quyền, lấy thổ địa làm cái cốt, rồi tiến thẳng lên xã hội chủ nghĩa.",
                "id": "vnr-p04-s01",
                "label": "01 / 10/1930"
            },
            {
                "title": "Hạn chế: chưa đặt độc lập lên hàng đầu",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Luận cương chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu: một bước chuyển “tả” khuynh so với Cương lĩnh 2/1930."
                    },
                    {
                        "type": "versus",
                        "left": "Cương lĩnh 2/1930",
                        "right": "Luận cương 10/1930",
                        "rows": [
                            {
                                "l": "Chống đế quốc, giành độc lập dân tộc lên hàng đầu.",
                                "r": "Nặng đấu tranh giai cấp và cách mạng ruộng đất."
                            },
                            {
                                "l": "Mâu thuẫn dân tộc là chủ yếu của xã hội thuộc địa.",
                                "r": "Không vạch rõ mâu thuẫn dân tộc là chủ yếu."
                            },
                            {
                                "l": "Đại đoàn kết: kéo cả tiểu tư sản, trí thức, trung nông.",
                                "r": "Đánh giá chưa đúng tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Nguyên nhân: nhận thức chưa đầy đủ về thực tiễn thuộc địa, ảnh hưởng tư tưởng “tả” khuynh."
                    }
                ],
                "narration": "Hạn chế là Luận cương chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, nặng đấu tranh giai cấp và ruộng đất, đánh giá chưa đúng tiểu tư sản và tư sản dân tộc. Đó là bước chuyển tả khuynh so với Cương lĩnh tháng hai, do hiểu chưa đầy đủ thực tiễn thuộc địa.",
                "id": "vnr-p04-s02",
                "label": "02 / 10/1930"
            },
            {
                "title": "Giữ vững khí tiết 1931–1933",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Dưới khủng bố trắng, cán bộ, đảng viên giữ vững khí tiết và biến nhà tù thành trường học cộng sản."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 200,
                        "ts": 29,
                        "items": [
                            {
                                "date": "18/4/1931",
                                "text": "Tổng Bí thư Trần Phú bị bắt; hy sinh 6/9/1931: “Hãy giữ vững chí khí chiến đấu!”"
                            },
                            {
                                "date": "6/6/1931",
                                "text": "Nguyễn Ái Quốc bị chính quyền Anh bắt ở Hồng Kông; đầu 1934 ra tù, trở lại Liên Xô."
                            },
                            {
                                "date": "2–9/5/1933",
                                "text": "Tòa án Đại hình Sài Gòn xét xử 120 chiến sĩ cộng sản."
                            },
                            {
                                "date": "Trong tù",
                                "text": "Hỏa Lò, Côn Đảo, Kon Tum…: lập chi bộ bí mật, biên soạn tài liệu, dịch kinh điển Mác – Lênin, xuất bản báo."
                            }
                        ]
                    },
                    {
                        "type": "quote",
                        "text": "Con đường của thanh niên chỉ có thể là con đường cách mạng.",
                        "by": "Lý Tự Trọng"
                    }
                ],
                "narration": "Dưới khủng bố trắng, nhiều đồng chí giữ vững khí tiết. Trần Phú hy sinh với lời dặn hãy giữ vững chí khí chiến đấu, Lý Tự Trọng khẳng định con đường của thanh niên chỉ có thể là con đường cách mạng. Trong tù, đảng viên lập chi bộ và biến nhà tù thành trường học cộng sản.",
                "id": "vnr-p04-s03",
                "label": "03 / 1931–33"
            },
            {
                "title": "Khôi phục tổ chức và Đại hội I",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Từ 1932 đến 1935, Đảng khôi phục hệ thống tổ chức; đỉnh cao là Đại hội đại biểu lần thứ I (3/1935, Ma Cao)."
                    },
                    {
                        "type": "ladder",
                        "items": [
                            {
                                "tag": "6/1932",
                                "date": "Chương trình hành động",
                                "text": "Lê Hồng Phong và các đồng chí công bố, theo chỉ thị của Quốc tế Cộng sản."
                            },
                            {
                                "tag": "Đầu 1934",
                                "date": "Ban Chỉ huy ở ngoài",
                                "text": "Lãnh đạo khôi phục hệ thống tổ chức Đảng; 3/1933 Hà Huy Tập viết Sơ thảo lịch sử phong trào cộng sản Đông Dương."
                            },
                            {
                                "tag": "3/1935",
                                "date": "Đại hội I · Ma Cao",
                                "text": "3 nhiệm vụ trước mắt; Lê Hồng Phong làm Tổng Bí thư; Nguyễn Ái Quốc đại diện bên cạnh Quốc tế Cộng sản."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Hạn chế: vẫn chưa đặt giải phóng dân tộc lên hàng đầu, còn gắn chặt phản đế với điền địa."
                    }
                ],
                "narration": "Từ Chương trình hành động tháng sáu năm một nghìn chín trăm ba mươi hai đến Ban Chỉ huy ở ngoài, Đảng khôi phục dần tổ chức. Tháng ba năm một nghìn chín trăm ba mươi lăm, Đại hội thứ nhất ở Ma Cao bầu Lê Hồng Phong làm Tổng Bí thư, nhưng vẫn chưa đặt độc lập dân tộc lên hàng đầu.",
                "id": "vnr-p04-s04",
                "label": "04 / 1932–35"
            }
        ]
    },
    "4": {
        "id": "vnr-p05",
        "seed": 463,
        "intro": "Ý chính thứ hai: giai đoạn một nghìn chín trăm ba mươi sáu đến ba mươi chín. Trước nguy cơ phát xít, Đảng điều chỉnh chiến lược, đòi dân chủ, cơm áo, hòa bình.",
        "steps": [
            {
                "title": "Bối cảnh: nguy cơ phát xít",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Nguy cơ phát xít và chiến tranh thế giới buộc Đảng xác định lại kẻ thù và hình thức đấu tranh."
                    },
                    {
                        "type": "chain",
                        "items": [
                            {
                                "head": "1929 – 1933",
                                "text": "Khủng hoảng kinh tế; phát xít thắng thế ở Đức, Italia, Tây Ban Nha."
                            },
                            {
                                "head": "7/1935",
                                "text": "Đại hội VII Quốc tế Cộng sản: kẻ thù trước mắt là phát xít; lập Mặt trận nhân dân."
                            },
                            {
                                "head": "1936",
                                "text": "Mặt trận nhân dân Pháp thắng cử, ban bố một số quyền dân chủ cho cả thuộc địa."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Trong nước: mọi tầng lớp mong cải cách dân chủ; tổ chức Đảng đã phục hồi, thêm cán bộ ra tù."
                    }
                ],
                "narration": "Phát xít thắng thế ở Đức, Italia, Tây Ban Nha sau khủng hoảng kinh tế. Đại hội bảy Quốc tế Cộng sản năm một nghìn chín trăm ba mươi lăm xác định kẻ thù trước mắt là phát xít, còn Mặt trận nhân dân Pháp thắng cử mở ra khả năng đấu tranh dân chủ ở thuộc địa.",
                "id": "vnr-p05-s01",
                "label": "01 / 1936–39"
            },
            {
                "title": "Chủ trương mới của Đảng",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Các hội nghị Trung ương 7/1936, 1937, 1938 xác định kẻ thù, nhiệm vụ, mặt trận và hình thức đấu tranh mới."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "ts": 28,
                        "items": [
                            {
                                "head": "Kẻ thù trước mắt",
                                "text": "Phát xít, chiến tranh đế quốc, phản động thuộc địa và tay sai."
                            },
                            {
                                "head": "Nhiệm vụ trước mắt",
                                "text": "Đòi tự do, dân chủ, cơm áo, hòa bình."
                            },
                            {
                                "head": "Mặt trận",
                                "text": "Mặt trận Nhân dân phản đế (7/1936) → Mặt trận Dân chủ Đông Dương (3/1938), “nhiệm vụ trung tâm”."
                            },
                            {
                                "head": "Hình thức đấu tranh",
                                "text": "Kết hợp công khai, nửa công khai, hợp pháp, nửa hợp pháp với bí mật, bất hợp pháp."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "26/7/1936 Thượng Hải · 3 và 9/1937 · 3/1938: Nguyễn Văn Cừ làm Tổng Bí thư."
                    }
                ],
                "narration": "Các hội nghị Trung ương từ năm một nghìn chín trăm ba mươi sáu đến ba mươi tám xác định kẻ thù trước mắt là phát xít và phản động thuộc địa. Nhiệm vụ là đòi tự do, dân chủ, cơm áo, hòa bình. Đảng lập Mặt trận Dân chủ Đông Dương và kết hợp đấu tranh công khai với bí mật.",
                "id": "vnr-p05-s02",
                "label": "02 / 1936–38"
            },
            {
                "title": "Bước đột phá nhận thức lý luận",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Văn kiện “Chung quanh vấn đề chiến sách mới” (10/1936) tách giải phóng dân tộc khỏi sự ràng buộc cứng nhắc với cách mạng điền địa."
                    },
                    {
                        "type": "quote",
                        "text": "Cuộc dân tộc giải phóng không nhất định phải kết chặt với cuộc cách mạng điền địa… Lý thuyết ấy có chỗ không xác đáng.",
                        "by": "Chung quanh vấn đề chiến sách mới, 10/1936"
                    },
                    {
                        "type": "note",
                        "text": "Chọn địch nhân chính, nguy hiểm nhất, để tập trung lực lượng của cả dân tộc."
                    }
                ],
                "narration": "Tháng mười năm một nghìn chín trăm ba mươi sáu, văn kiện Chung quanh vấn đề chiến sách mới nêu rõ: dân tộc giải phóng không nhất định phải kết chặt với cách mạng điền địa. Phải chọn kẻ thù chính, nguy hiểm nhất để tập trung lực lượng, bước đầu khắc phục tả khuynh của Luận cương.",
                "id": "vnr-p05-s03",
                "label": "03 / 10/1936"
            },
            {
                "title": "Đấu tranh phong phú, lực lượng lớn mạnh",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Phong trào dân chủ rèn luyện đội quân chính trị hàng triệu người, chuẩn bị cho Cách mạng Tháng Tám."
                    },
                    {
                        "type": "checklist",
                        "size": 30,
                        "items": [
                            "Đông Dương đại hội (1936): 600 ủy ban hành động ở Nam Kỳ.",
                            "Bãi công vùng mỏ 12/11/1936; báo chí, lý luận; Hội truyền bá quốc ngữ.",
                            "Tranh cử các viện dân biểu, hội đồng 1937–1938."
                        ]
                    },
                    {
                        "type": "stats",
                        "items": [
                            {
                                "value": "1.597",
                                "text": "đảng viên bí mật (4/1938)"
                            },
                            {
                                "value": "35.009",
                                "text": "hội viên các tổ chức quần chúng"
                            }
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
                "narration": "Phong trào dân chủ rất sôi nổi: Đông Dương đại hội, bãi công vùng mỏ, báo chí, tranh cử nghị trường. Đến tháng tư năm một nghìn chín trăm ba mươi tám, Đảng có hơn một nghìn năm trăm đảng viên bí mật và hơn ba mươi lăm nghìn hội viên, thành đội quân chính trị chuẩn bị cho Cách mạng Tháng Tám.",
                "id": "vnr-p05-s04",
                "label": "04 / 1936–39"
            }
        ]
    },
    "5": {
        "id": "vnr-p06",
        "seed": 503,
        "intro": "Ý chính thứ ba: từ năm một nghìn chín trăm ba mươi chín, Đảng chuyển hướng chiến lược, đặt giải phóng dân tộc lên trên hết, qua ba hội nghị Trung ương.",
        "steps": [
            {
                "title": "Chiến tranh và “một cổ hai tròng”",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Chiến tranh thế giới thứ hai đặt nhân dân Đông Dương dưới hai tầng áp bức Pháp – Nhật."
                    },
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "9/1939",
                                "text": "Chiến tranh bùng nổ; 28/9 Pháp cấm tuyên truyền cộng sản."
                            },
                            {
                                "date": "6/1940",
                                "text": "Đức tấn công Pháp; chính phủ Pêtanh đầu hàng Đức."
                            },
                            {
                                "date": "9/1940",
                                "text": "Nhật vào Đông Dương; Pháp câu kết với Nhật cùng thống trị."
                            },
                            {
                                "date": "1941",
                                "text": "Đức đánh Liên Xô (6/1941); Chiến tranh Thái Bình Dương (12/1941)."
                            }
                        ]
                    },
                    {
                        "type": "quote",
                        "text": "Hoàn cảnh Đông Dương sẽ tiến bước đến vấn đề dân tộc giải phóng.",
                        "by": "Thông báo của Trung ương, 29/9/1939"
                    }
                ],
                "narration": "Chiến tranh thế giới thứ hai đặt nhân dân Đông Dương dưới hai tầng áp bức Pháp và Nhật. Tháng chín năm một nghìn chín trăm ba mươi chín, Pháp cấm tuyên truyền cộng sản; một năm sau, Nhật vào Đông Dương. Đảng rút vào bí mật và xác định: hoàn cảnh sẽ tiến đến vấn đề dân tộc giải phóng.",
                "id": "vnr-p06-s01",
                "label": "01 / 1939–40"
            },
            {
                "title": "Ba bước chuyển hướng chiến lược",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Sự chuyển hướng diễn ra qua ba hội nghị Trung ương và được hoàn chỉnh tại Hội nghị Trung ương 8 do Nguyễn Ái Quốc chủ trì."
                    },
                    {
                        "type": "ladder",
                        "rise": 50,
                        "items": [
                            {
                                "tag": "TW 6",
                                "date": "11/1939 · Bà Điểm",
                                "text": "Đặt giải phóng dân tộc lên tối cao; tạm gác “cách mạng ruộng đất”; lập Mặt trận dân tộc thống nhất phản đế."
                            },
                            {
                                "tag": "TW 7",
                                "date": "11/1940 · Đình Bảng",
                                "text": "Lập lại Ban Chấp hành sau khi Nguyễn Văn Cừ bị bắt; còn chưa dứt khoát: “phản đế và thổ địa phải đồng thời tiến”."
                            },
                            {
                                "tag": "TW 8",
                                "date": "5/1941 · Cao Bằng",
                                "text": "Nguyễn Ái Quốc về nước (28/1/1941) chủ trì; Trường Chinh làm Tổng Bí thư; hoàn chỉnh triệt để."
                            }
                        ]
                    }
                ],
                "narration": "Sự chuyển hướng đi qua ba hội nghị. Trung ương sáu, tháng mười một năm một nghìn chín trăm ba mươi chín, đặt giải phóng dân tộc lên tối cao. Trung ương bảy còn chưa dứt khoát. Trung ương tám, tháng năm một nghìn chín trăm bốn mươi mốt, do Nguyễn Ái Quốc chủ trì ở Cao Bằng, hoàn chỉnh triệt để.",
                "id": "vnr-p06-s02",
                "label": "02 / 1939–41"
            },
            {
                "title": "Bốn nội dung chuyển hướng cốt lõi",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Hội nghị Trung ương 8 đặt giải phóng dân tộc lên tối cao với bốn nội dung cốt lõi."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "hs": 30,
                        "ts": 27,
                        "items": [
                            {
                                "head": "Giải phóng dân tộc lên hàng đầu",
                                "text": "Mâu thuẫn chủ yếu: toàn dân tộc với đế quốc Pháp và phát xít Nhật."
                            },
                            {
                                "head": "Tạm gác cách mạng ruộng đất",
                                "text": "Thay bằng giảm tô, giảm tức, chia lại ruộng công, tịch thu ruộng của đế quốc và Việt gian."
                            },
                            {
                                "head": "Thành lập Mặt trận Việt Minh",
                                "text": "Tập hợp mọi lực lượng yêu nước, không phân biệt thợ thuyền hay địa chủ."
                            },
                            {
                                "head": "Khởi nghĩa vũ trang là trung tâm",
                                "text": "Đi từ khởi nghĩa từng phần tiến lên tổng khởi nghĩa."
                            }
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
                "narration": "Hội nghị Trung ương tám chốt bốn nội dung: đặt giải phóng dân tộc lên hàng đầu; tạm gác cách mạng ruộng đất; lập Mặt trận Việt Minh; và coi khởi nghĩa vũ trang là nhiệm vụ trung tâm, đi từ khởi nghĩa từng phần tiến lên tổng khởi nghĩa.",
                "id": "vnr-p06-s03",
                "label": "03 / 5/1941"
            },
            {
                "title": "Việt Minh và nhà nước của toàn dân",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Mặt trận Việt Minh tập hợp mọi người yêu nước; nhà nước tương lai là của toàn thể dân tộc, không phải chính quyền Xôviết."
                    },
                    {
                        "type": "hub",
                        "center": "Việt Minh 5/1941",
                        "r": 110,
                        "items": [
                            {
                                "head": "Mọi lực lượng",
                                "text": "Thợ thuyền, dân cày, phú nông, địa chủ, tư bản bản xứ — ai có lòng yêu nước thương nòi."
                            },
                            {
                                "head": "Dân tộc tự quyết",
                                "text": "Mỗi nước Đông Dương lập mặt trận riêng; sau khi đuổi Pháp – Nhật tự chọn liên bang hay độc lập."
                            },
                            {
                                "head": "Nhà nước mới",
                                "text": "Việt Nam Dân chủ Cộng hòa theo tinh thần tân dân chủ, “của chung toàn thể dân tộc”."
                            },
                            {
                                "head": "Ý nghĩa",
                                "text": "Khắc phục hạn chế “tả” khuynh của Luận cương 1930, phát triển Cương lĩnh 2/1930."
                            }
                        ]
                    }
                ],
                "narration": "Việt Minh tập hợp mọi người yêu nước, từ thợ thuyền đến địa chủ và tư bản bản xứ. Nhà nước tương lai là Việt Nam Dân chủ Cộng hòa, của toàn dân tộc, không phải chính quyền Xôviết. Chuyển hướng này khắc phục hạn chế của Luận cương và phát triển Cương lĩnh đầu tiên.",
                "id": "vnr-p06-s04",
                "label": "04 / 5/1941"
            }
        ]
    },
    "6": {
        "id": "vnr-p07",
        "seed": 541,
        "intro": "Chuyển hướng rồi thì phải chuẩn bị lực lượng: từ những tiếng súng đầu tiên năm một nghìn chín trăm bốn mươi đến đội quân giải phóng cuối năm một nghìn chín trăm bốn mươi bốn.",
        "steps": [
            {
                "title": "Ba tiếng súng báo hiệu",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Ba cuộc nổi dậy đầu tiên là “những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc”, dù đều bị đàn áp."
                    },
                    {
                        "type": "grid",
                        "cols": 3,
                        "items": [
                            {
                                "head": "Bắc Sơn · 27/9/1940",
                                "text": "Pháp thua Nhật chạy qua; nhân dân chiếm đồn Mỏ Nhài, lập Đội du kích Bắc Sơn."
                            },
                            {
                                "head": "Nam Kỳ · 23/11/1940",
                                "text": "Lệnh hoãn chưa kịp tới; khởi nghĩa nổ ra, lập chính quyền cách mạng, bị đàn áp khốc liệt."
                            },
                            {
                                "head": "Đô Lương · 13/1/1941",
                                "text": "Đội Cung chỉ huy binh biến ở đồn Chợ Rạng (Nghệ An); bị dập tắt nhanh."
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "size": "sm",
                        "text": "Giữ vững ý chí: 26/8/1941 Pháp xử bắn Nguyễn Văn Cừ, Hà Huy Tập, Nguyễn Thị Minh Khai…; 6/9/1942 Lê Hồng Phong hy sinh ở Côn Đảo."
                    }
                ],
                "narration": "Năm một nghìn chín trăm bốn mươi, bốn mươi mốt có ba cuộc nổi dậy: Bắc Sơn, Nam Kỳ và Đô Lương. Chúng đều bị đàn áp nhưng là những tiếng súng báo hiệu cho khởi nghĩa toàn quốc. Đảng mất nhiều lãnh tụ, song ý chí đấu tranh vẫn được giữ vững.",
                "id": "vnr-p07-s01",
                "label": "01 / 1940–41"
            },
            {
                "title": "Xây dựng lực lượng chính trị, văn hóa",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Mặt trận Việt Minh lan rộng, kết hợp lực lượng chính trị với báo chí, văn hóa và binh vận."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "25/10/1941",
                                "head": "Tuyên ngôn Việt Minh",
                                "text": "Công bố Tuyên ngôn và Chương trình cứu nước."
                            },
                            {
                                "date": "2/1943",
                                "head": "Hội nghị Võng La",
                                "text": "Phát triển phong trào ở đô thị và trung tâm địch."
                            },
                            {
                                "date": "1943",
                                "head": "Đề cương văn hóa",
                                "text": "3 nguyên tắc: dân tộc, khoa học, đại chúng."
                            },
                            {
                                "date": "6–12/1944",
                                "head": "Đảng Dân chủ, Hội Văn hóa cứu quốc",
                                "text": "Vận động trí thức, sinh viên; lập ban binh vận."
                            }
                        ]
                    },
                    {
                        "type": "checklist",
                        "size": 30,
                        "items": [
                            "Nhiều cán bộ vượt ngục Sơn La, Chợ Chu, Buôn Ma Thuột về lãnh đạo phong trào.",
                            "Báo Giải phóng, Cờ giải phóng, Cứu quốc…; báo trong tù: Suối reo, Thông reo…"
                        ]
                    }
                ],
                "narration": "Việt Minh công bố Tuyên ngôn và Chương trình cứu nước tháng mười năm một nghìn chín trăm bốn mươi mốt. Năm một nghìn chín trăm bốn mươi ba, Đảng ra Đề cương về văn hóa với ba nguyên tắc dân tộc, khoa học, đại chúng. Báo chí cách mạng và các tổ chức văn hóa, trí thức cũng lớn mạnh.",
                "id": "vnr-p07-s02",
                "label": "02 / 1941–44"
            },
            {
                "title": "Lực lượng vũ trang và căn cứ địa",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Lực lượng vũ trang và căn cứ địa mở rộng; 22/12/1944 ra đời Đội Việt Nam tuyên truyền giải phóng quân."
                    },
                    {
                        "type": "stat",
                        "value": "2 trận",
                        "text": "thắng liên tiếp: Phai Khắt (25/12/1944) và Nà Ngần (26/12/1944)."
                    },
                    {
                        "type": "checklist",
                        "size": 29,
                        "items": [
                            "Cứu quốc quân phát triển từ Đội du kích Bắc Sơn; căn cứ Bắc Sơn – Võ Nhai.",
                            "Cuối 1941 lập đội vũ trang ở Cao Bằng; cuối 1943 “Nam tiến” nối hai căn cứ.",
                            "10/1944: “Thời gian rất gấp. Ta phải làm nhanh!”"
                        ]
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
                "narration": "Cứu quốc quân ở Bắc Sơn Võ Nhai và đội vũ trang ở Cao Bằng mở rộng căn cứ địa. Ngày hai mươi hai tháng mười hai năm một nghìn chín trăm bốn mươi bốn, Đội Việt Nam tuyên truyền giải phóng quân ra đời, thắng liền hai trận Phai Khắt và Nà Ngần.",
                "id": "vnr-p07-s03",
                "label": "03 / 1941–44"
            }
        ]
    },
    "7": {
        "id": "vnr-p08",
        "seed": 577,
        "intro": "Đêm chín tháng ba năm một nghìn chín trăm bốn mươi lăm, Nhật đảo chính Pháp. Đảng phản ứng ngay bằng chỉ thị ngày mười hai tháng ba và phát động cao trào kháng Nhật cứu nước.",
        "steps": [
            {
                "title": "Nhật đảo chính Pháp ngày 9/3/1945",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đêm 9/3/1945 Nhật đảo chính Pháp, độc chiếm Đông Dương; Đảng lập tức họp để điều chỉnh sách lược."
                    },
                    {
                        "type": "chain",
                        "items": [
                            {
                                "head": "Đầu 1945",
                                "text": "Hồng quân Liên Xô tiến về Béclin; Anh – Mỹ đánh Nhật ở Thái Bình Dương."
                            },
                            {
                                "head": "9/3/1945",
                                "text": "Nhật nổ súng lật đổ Pháp để giữ hành lang đường bộ và trừ hậu họa."
                            },
                            {
                                "head": "Sau đảo chính",
                                "text": "Dựng chính phủ Bảo Đại – Trần Trọng Kim với “độc lập” bánh vẽ."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Ngay đêm 9/3, Ban Thường vụ Trung ương họp mở rộng ở Đình Bảng (Từ Sơn, Bắc Ninh)."
                    }
                ],
                "narration": "Đầu năm một nghìn chín trăm bốn mươi lăm, Hồng quân Liên Xô tiến về Béclin, Anh Mỹ đánh Nhật ở Thái Bình Dương. Đêm chín tháng ba, Nhật đảo chính lật đổ Pháp, độc chiếm Đông Dương và dựng chính phủ Trần Trọng Kim. Ngay đêm đó, Ban Thường vụ Trung ương họp ở Đình Bảng.",
                "id": "vnr-p08-s01",
                "label": "01 / 9/3/1945"
            },
            {
                "title": "Chỉ thị ngày 12/3/1945",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Chỉ thị “Nhật – Pháp bắn nhau và hành động của chúng ta” xác định kẻ thù duy nhất và phát động cao trào."
                    },
                    {
                        "type": "versus",
                        "arrow": true,
                        "ts": 27,
                        "left": "Trước 9/3",
                        "right": "Chỉ thị 12/3",
                        "rows": [
                            {
                                "l": "Kẻ thù: phát xít Nhật – Pháp.",
                                "r": "Kẻ thù trước mắt, duy nhất: phát xít Nhật."
                            },
                            {
                                "l": "Khẩu hiệu “Đánh đuổi phát xít Nhật – Pháp”.",
                                "r": "“Đánh đuổi phát xít Nhật”; lập chính quyền cách mạng của nhân dân Đông Dương."
                            },
                            {
                                "l": "Chuẩn bị khởi nghĩa.",
                                "r": "Phát động cao trào kháng Nhật cứu nước, sẵn sàng tổng khởi nghĩa."
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
                "narration": "Chỉ thị ngày mười hai tháng ba xác định đây là cuộc tranh giành giữa hai đế quốc, kẻ thù duy nhất, trước mắt là phát xít Nhật. Khẩu hiệu đổi thành đánh đuổi phát xít Nhật, đồng thời phát động cao trào kháng Nhật cứu nước, sẵn sàng chuyển lên tổng khởi nghĩa.",
                "id": "vnr-p08-s02",
                "label": "02 / 12/3/1945"
            },
            {
                "title": "Cao trào lan rộng, căn cứ địa mở rộng",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cao trào kháng Nhật cứu nước nổ ra khắp nơi: khởi nghĩa từng phần, thống nhất lực lượng và hình thành Khu giải phóng Việt Bắc."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 210,
                        "ts": 29,
                        "items": [
                            {
                                "date": "Từ giữa 3/1945",
                                "text": "Giải phóng hàng loạt xã, châu, huyện ở Cao Bằng, Bắc Kạn, Lạng Sơn…; khởi nghĩa Ba Tơ (Quảng Ngãi) lập Đội du kích Ba Tơ."
                            },
                            {
                                "date": "16/4/1945",
                                "text": "Tổng bộ Việt Minh chỉ thị tổ chức Ủy ban giải phóng Việt Nam."
                            },
                            {
                                "date": "15/5/1945",
                                "text": "Hội nghị quân sự Bắc Kỳ ở Hiệp Hòa: thống nhất lực lượng thành Việt Nam giải phóng quân, xây dựng 7 chiến khu."
                            },
                            {
                                "date": "4/6/1945",
                                "text": "Khu giải phóng Việt Bắc chính thức thành lập, căn cứ địa chính của cả nước."
                            }
                        ]
                    }
                ],
                "narration": "Từ giữa tháng ba, khởi nghĩa từng phần nổ ra khắp nơi, có khởi nghĩa Ba Tơ ở Quảng Ngãi. Tháng năm, hội nghị ở Hiệp Hòa thống nhất lực lượng vũ trang, và ngày bốn tháng sáu Khu giải phóng Việt Bắc thành lập, trở thành căn cứ địa chính của cả nước.",
                "id": "vnr-p08-s03",
                "label": "03 / 3–6/1945"
            },
            {
                "title": "Đô thị và đồng bằng cùng vùng dậy",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cao trào lan từ miền núi xuống đô thị và đồng bằng, huy động hàng triệu quần chúng làm tê liệt bộ máy tay sai."
                    },
                    {
                        "type": "table",
                        "cols": [
                            "Nơi",
                            "Hình thức đấu tranh"
                        ],
                        "widths": [
                            0.26,
                            0.74
                        ],
                        "ts": 29,
                        "rows": [
                            [
                                "Đô thị",
                                "Đội danh dự Việt Minh vũ trang tuyên truyền, diệt ác trừ gian."
                            ],
                            [
                                "Bắc Bộ, Bắc Trung Bộ",
                                "Khẩu hiệu “Phá kho thóc, giải quyết nạn đói” thổi bùng căm thù, xung đột với quân Nhật."
                            ],
                            [
                                "Bộ máy tay sai",
                                "Tê liệt từ lý trưởng, chánh tổng đến tri phủ, tri huyện, tỉnh trưởng."
                            ]
                        ]
                    },
                    {
                        "type": "stat",
                        "value": "Hàng triệu",
                        "text": "quần chúng vùng dậy trong cao trào kháng Nhật cứu nước."
                    }
                ],
                "narration": "Cao trào lan xuống đô thị và đồng bằng. Khẩu hiệu phá kho thóc, giải quyết nạn đói huy động hàng triệu người đứng lên, làm tê liệt bộ máy tay sai của Nhật từ lý trưởng đến tỉnh trưởng.",
                "id": "vnr-p08-s04",
                "label": "04 / 1945"
            }
        ]
    },
    "8": {
        "id": "vnr-p09",
        "seed": 619,
        "intro": "Tháng tám năm một nghìn chín trăm bốn mươi lăm, thời cơ chỉ kéo dài khoảng nửa tháng. Đảng đã nắm bắt thế nào để giành chính quyền trong cả nước?",
        "steps": [
            {
                "title": "Thời cơ và nguy cơ",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Thời cơ giành chính quyền chỉ tồn tại ở nửa cuối tháng 8/1945, từ khi Nhật đầu hàng đến trước khi Đồng minh vào Đông Dương."
                    },
                    {
                        "type": "versus",
                        "left": "Thời cơ",
                        "right": "Nguy cơ",
                        "ts": 27,
                        "rows": [
                            {
                                "l": "9/5: Đức đầu hàng; Liên Xô đánh tan quân Quan Đông của Nhật.",
                                "r": "Pốtxđam: quân Trung Hoa Dân quốc vào Bắc vĩ tuyến 16, quân Anh vào Nam."
                            },
                            {
                                "l": "6/8 và 9/8: Mỹ ném bom nguyên tử xuống Hirôsima, Nagasaki.",
                                "r": "Pháp cậy thế Anh toan quay lại xâm lược."
                            },
                            {
                                "l": "15/8: Nhật đầu hàng; quân Nhật rệu rã, chính quyền Trần Trọng Kim hoang mang.",
                                "r": "Mỹ cam kết không cản trở Pháp phục hồi chủ quyền ở Đông Dương."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "“Cuộc chạy đua nước rút” với quân Đồng minh."
                    }
                ],
                "narration": "Đức đầu hàng, Mỹ ném bom nguyên tử xuống Nhật, ngày mười lăm tháng tám Nhật tuyên bố đầu hàng. Nhưng quân Trung Hoa Dân quốc và quân Anh sắp vào giải giáp, Pháp toan quay lại. Vì vậy thời cơ chỉ tồn tại trong nửa cuối tháng tám.",
                "id": "vnr-p09-s01",
                "label": "01 / 8/1945"
            },
            {
                "title": "Quyết sách lịch sử tại Tân Trào",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đảng nắm đúng thời cơ: chỉ trong vài ngày ra lệnh khởi nghĩa, họp Hội nghị toàn quốc và Đại hội quốc dân."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "12/8",
                                "head": "Khu giải phóng",
                                "text": "Ủy ban lâm thời hạ lệnh khởi nghĩa trong khu."
                            },
                            {
                                "date": "13/8",
                                "head": "Quân lệnh số 1",
                                "text": "23 giờ: lệnh tổng khởi nghĩa trong cả nước."
                            },
                            {
                                "date": "14–15/8",
                                "head": "Hội nghị toàn quốc",
                                "text": "3 nguyên tắc: tập trung, thống nhất, kịp thời."
                            },
                            {
                                "date": "16/8",
                                "head": "Đại hội quốc dân",
                                "text": "Thông qua 10 chính sách Việt Minh; Hồ Chí Minh làm Chủ tịch."
                            }
                        ]
                    },
                    {
                        "type": "quote",
                        "text": "Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta.",
                        "by": "Hồ Chí Minh, 16/8/1945"
                    }
                ],
                "narration": "Tại Tân Trào, ngày mười ba tháng tám ban Quân lệnh số một phát lệnh tổng khởi nghĩa. Hội nghị toàn quốc nêu ba nguyên tắc: tập trung, thống nhất, kịp thời. Ngày mười sáu, Đại hội quốc dân thông qua mười chính sách Việt Minh và lập Ủy ban giải phóng dân tộc do Hồ Chí Minh làm Chủ tịch.",
                "id": "vnr-p09-s02",
                "label": "02 / 12–16/8/1945"
            },
            {
                "title": "Thắng lợi thần tốc ở các đô thị",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Từ 14 đến 25/8/1945, khởi nghĩa thắng lợi nhanh chóng từ các địa phương đến Hà Nội, Huế và Sài Gòn."
                    },
                    {
                        "type": "stats",
                        "vs": 86,
                        "items": [
                            {
                                "value": "19/8",
                                "text": "Hà Nội: hàng vạn người chiếm Phủ Khâm sai, Tòa Thị chính."
                            },
                            {
                                "value": "23/8",
                                "text": "Huế: nhân dân chiếm trọn các công sở."
                            },
                            {
                                "value": "25/8",
                                "text": "Sài Gòn: hơn 1 triệu người biểu tình."
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "size": "sm",
                        "text": "Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam giành chính quyền sớm nhất, theo tinh thần Chỉ thị 12/3."
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
                "narration": "Từ mười bốn đến hai mươi lăm tháng tám, khởi nghĩa thắng nhanh. Hà Nội giành chính quyền ngày mười chín, Huế ngày hai mươi ba, Sài Gòn ngày hai mươi lăm với hơn một triệu người xuống đường. Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam giành chính quyền sớm nhất.",
                "id": "vnr-p09-s03",
                "label": "03 / 14–25/8/1945"
            },
            {
                "title": "Chính quyền cách mạng ra đời",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cuối tháng 8/1945, chính quyền cách mạng được xác lập trong cả nước."
                    },
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "25/8",
                                "text": "Hồ Chí Minh và Trung ương Đảng về đến Hà Nội."
                            },
                            {
                                "date": "27–28/8",
                                "text": "Ủy ban dân tộc giải phóng cải tổ thành Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa."
                            },
                            {
                                "date": "30/8",
                                "text": "Vua Bảo Đại thoái vị tại Ngọ Môn (Huế), giao ấn kiếm."
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "size": "sm",
                        "text": "Tổng Bí thư Trường Chinh cùng một số thành viên Việt Minh tự nguyện rút khỏi Chính phủ để mời thêm nhân sĩ ngoài Việt Minh tham gia."
                    }
                ],
                "narration": "Ngày hai mươi lăm tháng tám, Hồ Chí Minh và Trung ương Đảng về Hà Nội. Ngày hai mươi bảy, hai mươi tám lập Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa; ngày ba mươi, vua Bảo Đại thoái vị. Chính quyền cách mạng được xác lập trong cả nước.",
                "id": "vnr-p09-s04",
                "label": "04 / 25–30/8/1945"
            }
        ]
    },
    "9": {
        "id": "vnr-p10",
        "seed": 653,
        "intro": "Độc lập, rồi bài học: cách mạng ấy mang tính chất gì, để lại bốn bài học nào, và đường lối đã chuyển dịch qua năm cột mốc ra sao?",
        "steps": [
            {
                "title": "Tuyên ngôn Độc lập 2/9/1945",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Ngày 2/9/1945 tại Quảng trường Ba Đình, Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 170,
                        "ts": 29,
                        "items": [
                            {
                                "date": "Hàng Ngang",
                                "text": "Căn gác Hà Nội, nơi Hồ Chí Minh soạn thảo Tuyên ngôn độc lập."
                            },
                            {
                                "date": "30/8/1945",
                                "text": "Lấy ý kiến tập thể bản thảo."
                            },
                            {
                                "date": "2/9/1945",
                                "text": "Quảng trường Ba Đình: Người trịnh trọng đọc Tuyên ngôn độc lập."
                            }
                        ]
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
                "narration": "Ngày hai tháng chín năm một nghìn chín trăm bốn mươi lăm, tại Quảng trường Ba Đình, Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa. Bản Tuyên ngôn được soạn ở nhà số bốn mươi tám phố Hàng Ngang và lấy ý kiến tập thể ngày ba mươi tháng tám.",
                "id": "vnr-p10-s01",
                "label": "01 / 2/9/1945"
            },
            {
                "title": "Tính chất và ý nghĩa",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cách mạng Tháng Tám là cuộc cách mạng giải phóng dân tộc điển hình, mang tính chất dân chủ mới."
                    },
                    {
                        "type": "table",
                        "cols": [
                            "Phương diện",
                            "Nội dung"
                        ],
                        "widths": [
                            0.24,
                            0.76
                        ],
                        "ts": 27,
                        "rows": [
                            [
                                "Tính dân tộc",
                                "Giải phóng dân tộc là nhiệm vụ hàng đầu; lực lượng là toàn dân trong Mặt trận Việt Minh."
                            ],
                            [
                                "Dân chủ mới",
                                "Xóa chế độ quân chủ, đem lại quyền tự do dân chủ, giảm tô 25%; chưa làm cách mạng ruộng đất."
                            ],
                            [
                                "Với dân tộc",
                                "Phá xiềng xích đế quốc gần một thế kỷ, chấm dứt quân chủ chuyên chế; nhà nước của nhân dân đầu tiên ở Đông Nam Á."
                            ],
                            [
                                "Với quốc tế",
                                "Đảng mới 15 tuổi lãnh đạo thành công ở thuộc địa, làm suy sụp hệ thống thuộc địa của chủ nghĩa thực dân cũ."
                            ]
                        ]
                    }
                ],
                "narration": "Cách mạng Tháng Tám là cách mạng giải phóng dân tộc điển hình, mang tính chất dân chủ mới. Nó đập tan xiềng xích đế quốc gần một thế kỷ, chấm dứt chế độ quân chủ, lập nhà nước nhân dân đầu tiên ở Đông Nam Á. Một đảng mới mười lăm tuổi đã lãnh đạo thành công.",
                "id": "vnr-p10-s02",
                "label": "02 / 1945"
            },
            {
                "title": "Bốn bài học kinh nghiệm",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Thắng lợi 1930–1945 để lại bốn bài học kinh nghiệm quý báu."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "ts": 28,
                        "items": [
                            {
                                "head": "Chỉ đạo chiến lược",
                                "text": "Giương cao ngọn cờ giải phóng dân tộc; tạm gác cách mạng ruộng đất, thực hiện từng bước phục vụ chống đế quốc."
                            },
                            {
                                "head": "Xây dựng lực lượng",
                                "text": "Trên nền liên minh công – nông, tập hợp mọi lực lượng yêu nước trong mặt trận rộng rãi, điển hình là Việt Minh."
                            },
                            {
                                "head": "Phương pháp cách mạng",
                                "text": "Bạo lực cách mạng của quần chúng; kết hợp chính trị với vũ trang, từ khởi nghĩa từng phần tiến lên chớp thời cơ tổng khởi nghĩa."
                            },
                            {
                                "head": "Xây dựng Đảng",
                                "text": "Đảng tiên phong vững mạnh, gắn bó máu thịt với quần chúng; kết hợp chỉ đạo của Trung ương với sáng tạo của địa phương."
                            }
                        ]
                    }
                ],
                "narration": "Có bốn bài học. Về chỉ đạo chiến lược, giương cao ngọn cờ giải phóng dân tộc. Về lực lượng, tập hợp mọi người yêu nước trong mặt trận rộng rãi. Về phương pháp, kết hợp chính trị với vũ trang và chớp thời cơ. Về xây dựng Đảng, gắn bó máu thịt với quần chúng.",
                "id": "vnr-p10-s03",
                "label": "03 / 1930–45"
            },
            {
                "title": "Mạch chuyển dịch đường lối 1930–1945",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đường lối của Đảng chuyển dịch qua năm cột mốc, từ đúng đắn ban đầu đến đỉnh cao nghệ thuật chỉ đạo."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "2/1930",
                                "head": "Cương lĩnh đầu tiên",
                                "text": "Độc lập dân tộc lên hàng đầu."
                            },
                            {
                                "date": "10/1930–35",
                                "head": "Luận cương",
                                "text": "“Tả” khuynh: nặng đấu tranh giai cấp."
                            },
                            {
                                "date": "1936–39",
                                "head": "Đột phá nhận thức",
                                "text": "Tách phản đế khỏi điền địa; Mặt trận Dân chủ."
                            },
                            {
                                "date": "1939–41",
                                "head": "Chuyển hướng",
                                "text": "TW8: giải phóng dân tộc tối cao; Việt Minh."
                            },
                            {
                                "date": "3–8/1945",
                                "head": "Chớp thời cơ",
                                "text": "Chỉ thị 12/3 và Tân Trào: giành chính quyền."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đặt giải phóng dân tộc lên hàng đầu thì cách mạng thắng lợi."
                    }
                ],
                "narration": "Đường lối đi qua năm cột mốc: Cương lĩnh đầu tiên đúng đắn; Luận cương tả khuynh; bước đột phá nhận thức năm một nghìn chín trăm ba mươi sáu; chuyển hướng triệt để năm một nghìn chín trăm bốn mươi mốt; và chớp thời cơ năm một nghìn chín trăm bốn mươi lăm. Quy luật là đặt giải phóng dân tộc lên hàng đầu.",
                "id": "vnr-p10-s04",
                "label": "04 / 1930–45"
            }
        ]
    }
};
function getStory(pieceIndex) {
    const story = STORY_DATA[pieceIndex];
    if (!story) throw new Error("Không có nội dung VNR202 cho tranh " + pieceIndex);
    return story;
}
