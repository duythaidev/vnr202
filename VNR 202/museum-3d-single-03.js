// Bản 8 tranh: mỗi thẻ có một ý chính (thesis) và vài ý phụ ngắn; bố cục khác nhau theo thẻ.
const STORY_CONFIG = { writeSpeed: 1.3, flightSpeed: 1, motionBlur: 1, decorCards: 4, autoAdvance: false };
const STORY_DATA = {
    "0": {
        "id": "vnr-p01",
        "seed": 313,
        "intro": "Gần một thế kỷ bị thực dân đô hộ, nhiều thế hệ đã đứng lên đấu tranh nhưng vẫn chưa giành được độc lập. Vì sao vậy? Để trả lời, ta quay lại bối cảnh trước năm 1930, rồi xem Đảng ra đời như thế nào.",
        "steps": [
            {
                "title": "Phong trào cũ thất bại",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Mâu thuẫn dân tộc gay gắt, nhưng các phong trào yêu nước đều thất bại."
                    },
                    {
                        "type": "checklist",
                        "mark": "cross",
                        "size": 38,
                        "items": [
                            "Cần Vương, Yên Thế: còn mang cốt cách phong kiến",
                            "Đông Du, cải cách Phan Châu Trinh: chưa nhìn rõ bản chất thực dân",
                            "Yên Bái 1930: manh động, thất bại nhanh"
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Thiếu đường lối đúng và tổ chức tiên phong."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/khoi-nghia-yen-bai-13-liet-si.webp",
                        "col": "right",
                        "h": 330,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Những người bị xử tử sau khởi nghĩa Yên Bái, 1930."
                    }
                ],
                "narration": "Dưới ách thực dân Pháp, mâu thuẫn giữa toàn dân tộc với thực dân và phong kiến trở nên gay gắt nhất. Các phong trào Cần Vương, Đông Du, Yên Bái đều thất bại vì thiếu đường lối đúng và tổ chức tiên phong.",
                "id": "vnr-p01-s01",
                "label": "01 / 1858-1930"
            },
            {
                "title": "Nguyễn Ái Quốc tìm đường",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Nguyễn Ái Quốc gắn giải phóng dân tộc với cách mạng vô sản."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 150,
                        "ts": 34,
                        "items": [
                            {
                                "date": "1911",
                                "text": "Ra đi tìm đường cứu nước"
                            },
                            {
                                "date": "1920",
                                "text": "Đọc Luận cương Lênin, dự Đại hội Tours"
                            },
                            {
                                "date": "1925",
                                "text": "Lập Hội Thanh niên ở Quảng Châu"
                            },
                            {
                                "date": "1927",
                                "text": "In sách Đường Kách mệnh"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/nha-huan-luyen-quang-chau.webp",
                        "col": "right",
                        "h": 330,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Nhà ở Quảng Châu từng mở lớp huấn luyện chính trị."
                    }
                ],
                "narration": "Năm 1911, Nguyễn Tất Thành ra đi tìm đường cứu nước. Đọc Luận cương của Lênin, dự Đại hội Tours, rồi lập Hội Thanh niên ở Quảng Châu, Người gắn giải phóng dân tộc với cách mạng vô sản.",
                "id": "vnr-p01-s02",
                "label": "02 / 1911-1927"
            },
            {
                "title": "Ba tổ chức hợp nhất",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đầu năm 1930, ba tổ chức cộng sản hợp nhất thành một Đảng."
                    },
                    {
                        "type": "chain",
                        "ts": 34,
                        "items": [
                            {
                                "head": "1929",
                                "text": "Ba tổ chức cộng sản ra đời"
                            },
                            {
                                "head": "Đầu 1930",
                                "text": "Hội nghị hợp nhất ở Hồng Kông"
                            },
                            {
                                "head": "Kết quả",
                                "text": "Đảng Cộng sản Việt Nam"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/hoi-nghi-thanh-lap-dang-phi-hoanh.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Hội nghị thành lập Đảng, tranh Phi Hoanh."
                    }
                ],
                "narration": "Năm 1929 xuất hiện ba tổ chức cộng sản. Đầu năm 1930, Nguyễn Ái Quốc triệu tập hội nghị ở Hồng Kông, hợp nhất thành Đảng Cộng sản Việt Nam.",
                "id": "vnr-p01-s03",
                "label": "03 / 1929-1930"
            },
            {
                "title": "Cương lĩnh đầu tiên",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Cương lĩnh đặt độc lập dân tộc lên hàng đầu và đoàn kết toàn dân tộc."
                    },
                    {
                        "type": "table",
                        "cols": [
                            "Nội dung",
                            "Cương lĩnh"
                        ],
                        "widths": [
                            0.26,
                            0.74
                        ],
                        "ts": 36,
                        "rows": [
                            [
                                "Nhiệm vụ",
                                "Đánh đổ đế quốc và phong kiến, giành độc lập"
                            ],
                            [
                                "Lực lượng",
                                "Công nông là gốc, đoàn kết mọi người yêu nước"
                            ],
                            [
                                "Phương pháp",
                                "Bạo lực cách mạng của quần chúng"
                            ]
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Chấm dứt khủng hoảng đường lối của cuối thế kỷ XIX."
                    }
                ],
                "narration": "Cương lĩnh đầu tiên đặt nhiệm vụ đánh đổ đế quốc và phong kiến, giành độc lập dân tộc lên hàng đầu, đoàn kết mọi tầng lớp yêu nước. Nó chấm dứt khủng hoảng đường lối kéo dài từ cuối thế kỷ 19.",
                "id": "vnr-p01-s04",
                "label": "04 / 2/1930"
            }
        ]
    },
    "1": {
        "id": "vnr-p02",
        "seed": 350,
        "intro": "Đảng vừa ra đời đã phải đối mặt với khủng hoảng kinh tế và khủng bố trắng. Câu chuyện bắt đầu từ cao trào cách mạng 1930-1931 và đỉnh cao Xô viết Nghệ Tĩnh.",
        "steps": [
            {
                "title": "Cao trào cách mạng",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Khủng hoảng và khủng bố trắng, nhưng Đảng vừa ra đời đã kịp phát động quần chúng."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 190,
                        "ts": 36,
                        "items": [
                            {
                                "date": "1-4/1930",
                                "text": "Bãi công nổ ra khắp nơi"
                            },
                            {
                                "date": "1/5/1930",
                                "text": "Lần đầu kỷ niệm Quốc tế Lao động"
                            },
                            {
                                "date": "8/1930",
                                "text": "Tổng bãi công Bến Thủy, Vinh"
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
                                "label": "Tháng 6-8",
                                "value": 121
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "col": "right",
                        "size": "sm",
                        "text": "Số cuộc đấu tranh năm 1930."
                    }
                ],
                "narration": "Khủng hoảng kinh tế và khủng bố trắng đẩy mâu thuẫn lên cao. Đảng vừa ra đời đã phát động quần chúng: bãi công khắp nơi, ngày Quốc tế Lao động mùng 1 tháng 5, tổng bãi công Bến Thủy Vinh tháng 8.",
                "id": "vnr-p02-s01",
                "label": "01 / 1930"
            },
            {
                "title": "Xô viết Nghệ-Tĩnh",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Chi bộ và nông hội làm chức năng chính quyền công nông thu nhỏ."
                    },
                    {
                        "type": "stat",
                        "value": "171",
                        "text": "người hy sinh ở Hưng Nguyên, 12/9/1930."
                    },
                    {
                        "type": "checklist",
                        "size": 36,
                        "items": [
                            "Chính quyền tay sai ở nhiều làng tan rã",
                            "Nông hội quản lý đời sống nông thôn"
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/xo-viet-nghe-tinh-tranh.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Xô viết Nghệ Tĩnh, tranh sơn mài."
                    }
                ],
                "narration": "Đỉnh cao là Xô viết Nghệ Tĩnh, tháng 9 năm 1930. Chi bộ và nông hội đứng ra làm chính quyền công nông thu nhỏ. Ở Hưng Nguyên, 171 người hy sinh dưới bom Pháp.",
                "id": "vnr-p02-s02",
                "label": "02 / 9/1930"
            },
            {
                "title": "Đàn áp và ý nghĩa",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Dù tổn thất nặng, cao trào khẳng định quyền lãnh đạo của giai cấp công nhân."
                    },
                    {
                        "type": "versus",
                        "left": "Tổn thất",
                        "right": "Ý nghĩa",
                        "ts": 34,
                        "rows": [
                            {
                                "l": "Pháp khủng bố, ép dân đầu thú",
                                "r": "Khẳng định vai trò lãnh đạo của công nhân"
                            },
                            {
                                "l": "4/1931: Ban Chấp hành Trung ương bị bắt",
                                "r": "Củng cố liên minh công nông"
                            }
                        ]
                    }
                ],
                "narration": "Pháp khủng bố, tháng 4 năm 1931 toàn bộ Ban Chấp hành Trung ương bị bắt. Nhưng cao trào đã khẳng định quyền lãnh đạo của giai cấp công nhân và củng cố liên minh công nông.",
                "id": "vnr-p02-s03",
                "label": "03 / 1931"
            }
        ]
    },
    "2": {
        "id": "vnr-p03",
        "seed": 427,
        "intro": "Sau cao trào, Đảng gặp nhiều thử thách. Luận cương tháng 10 năm 1930 khác Cương lĩnh ở đâu, và Đảng khôi phục tổ chức thế nào để tới Đại hội thứ nhất năm 1935?",
        "steps": [
            {
                "title": "Luận cương và hạn chế",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Luận cương do Trần Phú soạn thảo, nhưng chưa đặt độc lập dân tộc lên hàng đầu."
                    },
                    {
                        "type": "versus",
                        "arrow": true,
                        "ts": 32,
                        "left": "Cương lĩnh 2/1930",
                        "right": "Luận cương 10/1930",
                        "rows": [
                            {
                                "l": "Độc lập dân tộc hàng đầu",
                                "r": "Nặng đấu tranh giai cấp, ruộng đất"
                            },
                            {
                                "l": "Đoàn kết rộng rãi các tầng lớp",
                                "r": "Chủ yếu công nhân, nông dân"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/luan-cuong-1930.webp",
                        "col": "right",
                        "h": 320,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Văn kiện Luận cương chính trị, 10/1930."
                    }
                ],
                "narration": "Luận cương tháng 10 do Trần Phú soạn thảo, lấy thổ địa làm cái cốt. Nhưng nó chưa đặt độc lập dân tộc lên hàng đầu, nặng đấu tranh giai cấp, nên là bước chuyển tả khuynh so với Cương lĩnh tháng 2.",
                "id": "vnr-p03-s01",
                "label": "01 / 10/1930"
            },
            {
                "title": "Giữ vững khí tiết",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Dưới khủng bố trắng, đảng viên biến nhà tù thành trường học cộng sản."
                    },
                    {
                        "type": "checklist",
                        "size": 36,
                        "items": [
                            "Trần Phú: “Hãy giữ vững chí khí chiến đấu!”",
                            "Lý Tự Trọng: con đường của thanh niên là cách mạng",
                            "Trong tù lập chi bộ, dịch kinh điển Mác - Lênin"
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/nha-tu-con-dao.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Nhà tù Côn Đảo, ảnh hiện nay."
                    }
                ],
                "narration": "Dưới khủng bố trắng, nhiều đồng chí giữ vững khí tiết. Trần Phú dặn hãy giữ vững chí khí chiến đấu. Trong các nhà tù, đảng viên lập chi bộ, dịch kinh điển và biến nhà tù thành trường học cộng sản.",
                "id": "vnr-p03-s02",
                "label": "02 / 1931-1933"
            },
            {
                "title": "Khôi phục và Đại hội I",
                "head": "underline",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Năm 1935, Đại hội I ở Ma Cao đánh dấu Đảng khôi phục xong tổ chức."
                    },
                    {
                        "type": "ladder",
                        "rise": 50,
                        "items": [
                            {
                                "tag": "6/1932",
                                "text": "Chương trình hành động"
                            },
                            {
                                "tag": "1934",
                                "text": "Ban Chỉ huy ở ngoài"
                            },
                            {
                                "tag": "3/1935",
                                "text": "Đại hội I, Lê Hồng Phong làm Tổng Bí thư"
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Hạn chế: vẫn chưa đặt độc lập lên hàng đầu."
                    }
                ],
                "narration": "Từ Chương trình hành động năm 1932 đến Ban Chỉ huy ở ngoài, Đảng khôi phục tổ chức. Đại hội thứ nhất ở Ma Cao, tháng 3 năm 1935, bầu Lê Hồng Phong làm Tổng Bí thư, nhưng vẫn chưa đặt độc lập lên hàng đầu.",
                "id": "vnr-p03-s03",
                "label": "03 / 1932-1935"
            }
        ]
    },
    "3": {
        "id": "vnr-p04",
        "seed": 463,
        "intro": "Từ năm 1936 đến năm 1939, trước nguy cơ phát xít, Đảng thay đổi cách đấu tranh: đòi dân chủ, cơm áo và hòa bình.",
        "steps": [
            {
                "title": "Nguy cơ phát xít",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Nguy cơ phát xít buộc Đảng xác định lại kẻ thù và cách đấu tranh."
                    },
                    {
                        "type": "chain",
                        "ts": 34,
                        "items": [
                            {
                                "head": "1929-1933",
                                "text": "Phát xít thắng thế ở châu Âu"
                            },
                            {
                                "head": "7/1935",
                                "text": "Quốc tế Cộng sản lập Mặt trận nhân dân"
                            },
                            {
                                "head": "1936",
                                "text": "Mặt trận nhân dân Pháp cầm quyền"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/mat-tran-nhan-dan-phap-1936.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Mít tinh Mặt trận nhân dân Pháp, 14/7/1936."
                    }
                ],
                "narration": "Phát xít thắng thế ở châu Âu. Đại hội 7 Quốc tế Cộng sản năm 1935 chủ trương lập Mặt trận nhân dân, và Mặt trận nhân dân Pháp lên cầm quyền. Đảng cũng phải xác định lại kẻ thù và cách đấu tranh.",
                "id": "vnr-p04-s01",
                "label": "01 / 1935-1936"
            },
            {
                "title": "Chủ trương mới và đột phá",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đảng đổi kẻ thù, nhiệm vụ, mặt trận và nhận thức về điền địa."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "hs": 36,
                        "ts": 33,
                        "items": [
                            {
                                "head": "Kẻ thù",
                                "text": "Phát xít, phản động thuộc địa"
                            },
                            {
                                "head": "Nhiệm vụ",
                                "text": "Tự do, dân chủ, cơm áo, hòa bình"
                            },
                            {
                                "head": "Mặt trận",
                                "text": "Mặt trận Dân chủ Đông Dương, 1938"
                            },
                            {
                                "head": "Đột phá 10/1936",
                                "text": "Giải phóng dân tộc không nhất thiết gắn chặt điền địa"
                            }
                        ]
                    }
                ],
                "narration": "Các hội nghị Trung ương xác định kẻ thù trước mắt là phát xít và phản động thuộc địa, đòi tự do, dân chủ, cơm áo, hòa bình. Tháng mười năm 1936, Đảng nêu rõ giải phóng dân tộc không nhất định phải kết chặt với cách mạng điền địa.",
                "id": "vnr-p04-s02",
                "label": "02 / 1936-1938"
            },
            {
                "title": "Đấu tranh và kết quả",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Phong trào dân chủ rèn luyện đội quân chính trị hàng triệu người."
                    },
                    {
                        "type": "checklist",
                        "size": 34,
                        "items": [
                            "Đông Dương đại hội, 600 ủy ban hành động ở Nam Kỳ",
                            "Bãi công, báo chí, tranh cử",
                            "Hội truyền bá quốc ngữ"
                        ]
                    },
                    {
                        "type": "stats",
                        "vs": 80,
                        "items": [
                            {
                                "value": "1.597",
                                "text": "đảng viên bí mật, 4/1938"
                            },
                            {
                                "value": "35.009",
                                "text": "hội viên quần chúng"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/dau-xao-1938.webp",
                        "col": "right",
                        "h": 280,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Mít tinh Đấu Xảo, Hà Nội, 1/5/1938."
                    }
                ],
                "narration": "Đông Dương đại hội, bãi công, báo chí, tranh cử: phong trào dân chủ rất sôi nổi. Đảng có hơn 1500 đảng viên bí mật, hơn 35 nghìn hội viên, thành đội quân chính trị chuẩn bị cho Cách mạng Tháng Tám.",
                "id": "vnr-p04-s03",
                "label": "03 / 1936-1939"
            }
        ]
    },
    "4": {
        "id": "vnr-p05",
        "seed": 503,
        "intro": "Chiến tranh thế giới bùng nổ, Pháp và Nhật cùng thống trị. Đảng phải chọn hướng đi mới, đặt giải phóng dân tộc lên trên hết.",
        "steps": [
            {
                "title": "Ba bước chuyển hướng",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Chiến tranh và ách Pháp, Nhật buộc Đảng đặt giải phóng dân tộc lên trên hết."
                    },
                    {
                        "type": "ladder",
                        "rise": 56,
                        "items": [
                            {
                                "tag": "Trung ương 6",
                                "date": "11/1939",
                                "text": "Giải phóng dân tộc là tối cao"
                            },
                            {
                                "tag": "Trung ương 7",
                                "date": "11/1940",
                                "text": "Hội nghị cán bộ, còn chưa dứt khoát"
                            },
                            {
                                "tag": "Trung ương 8",
                                "date": "5/1941",
                                "text": "Nguyễn Ái Quốc chủ trì, hoàn chỉnh"
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "“Một cổ hai tròng”: Pháp và Nhật."
                    }
                ],
                "narration": "Chiến tranh thế giới và ách Pháp Nhật buộc Đảng chuyển hướng qua ba hội nghị. Trung ương 6 đặt giải phóng dân tộc lên tối cao. Trung ương 7 còn chưa dứt khoát. Trung ương 8, tháng 5 năm 1941, do Nguyễn Ái Quốc chủ trì, hoàn chỉnh triệt để.",
                "id": "vnr-p05-s01",
                "label": "01 / 1939-1941"
            },
            {
                "title": "Bốn nội dung cốt lõi",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Hội nghị Trung ương 8 hoàn chỉnh chuyển hướng với bốn nội dung."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "hs": 34,
                        "ts": 32,
                        "items": [
                            {
                                "head": "Dân tộc lên hàng đầu",
                                "text": "Chống Pháp và Nhật"
                            },
                            {
                                "head": "Tạm gác ruộng đất",
                                "text": "Giảm tô, giảm tức"
                            },
                            {
                                "head": "Mặt trận Việt Minh",
                                "text": "Tập hợp mọi lực lượng"
                            },
                            {
                                "head": "Khởi nghĩa vũ trang",
                                "text": "Nhiệm vụ trung tâm"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/pac-bo-suoi-le-nin-hien-nay.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Suối Lê-nin, Pác Bó, ảnh hiện nay."
                    }
                ],
                "narration": "Hội nghị Trung ương 8 chốt bốn nội dung: giải phóng dân tộc lên hàng đầu, tạm gác cách mạng ruộng đất, lập Mặt trận Việt Minh, và coi khởi nghĩa vũ trang là nhiệm vụ trung tâm.",
                "id": "vnr-p05-s02",
                "label": "02 / 5/1941"
            },
            {
                "title": "Việt Minh và nhà nước mới",
                "head": "numeral",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Việt Minh tập hợp mọi người yêu nước, hướng tới nhà nước của toàn dân tộc."
                    },
                    {
                        "type": "hub",
                        "center": "Việt Minh",
                        "r": 100,
                        "items": [
                            {
                                "head": "Mọi lực lượng",
                                "text": "Ai yêu nước đều tham gia"
                            },
                            {
                                "head": "Nhà nước mới",
                                "text": "Việt Nam Dân chủ Cộng hòa, không phải Xôviết"
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Khắc phục “tả” khuynh của Luận cương 1930."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/viet-minh-poster.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Áp phích kêu gọi gia nhập Việt Minh."
                    }
                ],
                "narration": "Việt Minh tập hợp mọi người yêu nước, từ thợ thuyền đến địa chủ. Nhà nước tương lai là Việt Nam Dân chủ Cộng hòa của toàn dân tộc, không phải chính quyền Xôviết. Chuyển hướng này khắc phục tả khuynh của Luận cương.",
                "id": "vnr-p05-s03",
                "label": "03 / 1941"
            }
        ]
    },
    "5": {
        "id": "vnr-p06",
        "seed": 541,
        "intro": "Chuyển hướng rồi thì phải chuẩn bị lực lượng, từ những tiếng súng đầu tiên năm 1940 đến đội quân giải phóng cuối năm 1944.",
        "steps": [
            {
                "title": "Ba tiếng súng báo hiệu",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Ba cuộc nổi dậy bị đàn áp nhưng báo hiệu khởi nghĩa toàn quốc."
                    },
                    {
                        "type": "grid",
                        "cols": 3,
                        "hs": 34,
                        "ts": 32,
                        "items": [
                            {
                                "head": "Bắc Sơn",
                                "text": "27/9/1940, lập Đội du kích"
                            },
                            {
                                "head": "Nam Kỳ",
                                "text": "23/11/1940, lập chính quyền"
                            },
                            {
                                "head": "Đô Lương",
                                "text": "13/1/1941, binh biến"
                            }
                        ]
                    }
                ],
                "narration": "Năm 1940 có ba cuộc nổi dậy: Bắc Sơn, Nam Kỳ và Đô Lương. Đều bị đàn áp, nhưng là những tiếng súng báo hiệu khởi nghĩa toàn quốc. Đảng mất nhiều lãnh tụ mà ý chí vẫn vững.",
                "id": "vnr-p06-s01",
                "label": "01 / 1940-1941"
            },
            {
                "title": "Lực lượng chính trị, văn hóa",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Việt Minh lan rộng, kết hợp lực lượng chính trị với văn hóa."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "10/1941",
                                "head": "Tuyên ngôn Việt Minh",
                                "text": "Chương trình cứu nước"
                            },
                            {
                                "date": "1943",
                                "head": "Đề cương văn hóa",
                                "text": "Dân tộc, khoa học, đại chúng"
                            },
                            {
                                "date": "1944",
                                "head": "Đảng Dân chủ",
                                "text": "Hội Văn hóa cứu quốc"
                            }
                        ]
                    }
                ],
                "narration": "Việt Minh công bố Tuyên ngôn và Chương trình cứu nước. Đảng ra Đề cương về văn hóa với ba nguyên tắc dân tộc, khoa học, đại chúng, lập Đảng Dân chủ và Hội Văn hóa cứu quốc.",
                "id": "vnr-p06-s02",
                "label": "02 / 1941-1944"
            },
            {
                "title": "Lực lượng vũ trang",
                "head": "band",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Căn cứ địa mở rộng, 22/12/1944 ra đời Đội Việt Nam tuyên truyền giải phóng quân."
                    },
                    {
                        "type": "stat",
                        "value": "2 trận",
                        "text": "thắng liên tiếp: Phai Khắt và Nà Ngần."
                    },
                    {
                        "type": "checklist",
                        "size": 34,
                        "items": [
                            "Bắc Sơn, Võ Nhai và Cao Bằng",
                            "Cuối 1943: “Nam tiến” nối hai căn cứ"
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/doi-tuyen-truyen-giai-phong-quan-1944.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Đội Việt Nam tuyên truyền giải phóng quân, 22/12/1944."
                    }
                ],
                "narration": "Căn cứ địa mở rộng ở Bắc Sơn Võ Nhai và Cao Bằng. Ngày 22 tháng 12 năm 1944, Đội Việt Nam tuyên truyền giải phóng quân ra đời và thắng liền hai trận Phai Khắt, Nà Ngần.",
                "id": "vnr-p06-s03",
                "label": "03 / 1941-1944"
            }
        ]
    },
    "6": {
        "id": "vnr-p07",
        "seed": 577,
        "intro": "Năm 1945, Nhật đảo chính Pháp và thời cuộc đổi thay rất nhanh. Đảng phát động cao trào kháng Nhật và chớp thời cơ Tổng khởi nghĩa Tháng Tám.",
        "steps": [
            {
                "title": "Đảo chính và Chỉ thị 12/3",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đảng kịp thời xác định kẻ thù duy nhất là phát xít Nhật."
                    },
                    {
                        "type": "versus",
                        "arrow": true,
                        "ts": 32,
                        "left": "Trước 9/3",
                        "right": "Chỉ thị 12/3",
                        "rows": [
                            {
                                "l": "Kẻ thù: Nhật và Pháp",
                                "r": "Kẻ thù duy nhất: Nhật"
                            },
                            {
                                "l": "Đánh đuổi Nhật, Pháp",
                                "r": "Đánh đuổi phát xít Nhật"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/chi-thi-nhat-phap-ban-nhau-1945.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Sách in Chỉ thị ngày 12/3/1945."
                    }
                ],
                "narration": "Đêm 9 tháng 3 năm 1945, Nhật đảo chính Pháp. Chỉ thị ngày 12 tháng 3 xác định kẻ thù duy nhất là phát xít Nhật và phát động cao trào kháng Nhật cứu nước.",
                "id": "vnr-p07-s01",
                "label": "01 / 3/1945"
            },
            {
                "title": "Cao trào kháng Nhật",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Khởi nghĩa từng phần, căn cứ địa mở rộng, hàng triệu người đứng lên."
                    },
                    {
                        "type": "vtimeline",
                        "dw": 170,
                        "ts": 34,
                        "items": [
                            {
                                "date": "3/1945",
                                "text": "Khởi nghĩa Ba Tơ, giải phóng nhiều châu huyện"
                            },
                            {
                                "date": "4/6/1945",
                                "text": "Khu giải phóng Việt Bắc ra đời"
                            },
                            {
                                "date": "Cả nước",
                                "text": "“Phá kho thóc, giải quyết nạn đói”"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/pha-kho-thoc-1945.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Phá kho thóc, 1945. Ảnh Võ An Ninh."
                    }
                ],
                "narration": "Khởi nghĩa từng phần nổ ra khắp nơi, như Ba Tơ. Ngày 4 tháng 6, Khu giải phóng Việt Bắc thành lập. Khẩu hiệu phá kho thóc, giải quyết nạn đói đưa hàng triệu người đứng lên.",
                "id": "vnr-p07-s02",
                "label": "02 / 3-6/1945"
            },
            {
                "title": "Thời cơ và quyết sách Tân Trào",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Nhật đầu hàng, thời cơ chỉ kéo dài nửa cuối tháng 8/1945."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "13/8",
                                "head": "Quân lệnh số 1",
                                "text": "Lệnh tổng khởi nghĩa"
                            },
                            {
                                "date": "14-15/8",
                                "head": "Hội nghị toàn quốc",
                                "text": "Tập trung, thống nhất, kịp thời"
                            },
                            {
                                "date": "16/8",
                                "head": "Đại hội quốc dân",
                                "text": "Lập Ủy ban giải phóng"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/quan-lenh-so-1.webp",
                        "col": "right",
                        "h": 300,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Quân lệnh số 1, 13/8/1945."
                    }
                ],
                "narration": "Nhật đầu hàng ngày 15 tháng 8, thời cơ chỉ kéo dài nửa tháng vì Đồng minh sắp vào. Tại Tân Trào, Quân lệnh số 1, Hội nghị toàn quốc và Đại hội quốc dân quyết định tổng khởi nghĩa.",
                "id": "vnr-p07-s03",
                "label": "03 / 8/1945"
            },
            {
                "title": "Tổng khởi nghĩa thắng lợi",
                "head": "box",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Chỉ trong vài ngày, chính quyền về tay nhân dân trong cả nước."
                    },
                    {
                        "type": "stats",
                        "vs": 84,
                        "items": [
                            {
                                "value": "19/8",
                                "text": "Hà Nội"
                            },
                            {
                                "value": "23/8",
                                "text": "Huế"
                            },
                            {
                                "value": "25/8",
                                "text": "Sài Gòn"
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "30/8: vua Bảo Đại thoái vị."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/ha-noi-phu-kham-sai-19-8-1945.webp",
                        "col": "right",
                        "h": 230,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Nhân dân Hà Nội chiếm Phủ Khâm sai, 19/8/1945."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/mit-tinh-nha-hat-lon.webp",
                        "col": "right",
                        "h": 230,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Mít tinh ở Nhà hát Lớn, Hà Nội, 8/1945."
                    }
                ],
                "narration": "Hà Nội giành chính quyền ngày 19, Huế ngày 23, Sài Gòn ngày 25 tháng 8. Ngày 30, vua Bảo Đại thoái vị. Chính quyền cách mạng được xác lập trong cả nước.",
                "id": "vnr-p07-s04",
                "label": "04 / 19-30/8/1945"
            }
        ]
    },
    "7": {
        "id": "vnr-p08",
        "seed": 653,
        "intro": "Cuối cùng là Tuyên ngôn Độc lập, ý nghĩa của Cách mạng Tháng Tám, bốn bài học và năm cột mốc của đường lối.",
        "steps": [
            {
                "title": "Tuyên ngôn Độc lập",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Ngày 2/9/1945 tại Ba Đình, nước Việt Nam Dân chủ Cộng hòa ra đời."
                    },
                    {
                        "type": "checklist",
                        "size": 36,
                        "items": [
                            "Cách mạng giải phóng dân tộc điển hình, mang tính dân chủ mới",
                            "Chấm dứt chế độ quân chủ, lập nhà nước nhân dân",
                            "Đảng mới 15 tuổi lãnh đạo thành công"
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/le-doc-lap-ba-dinh-2-9-1945.webp",
                        "col": "right",
                        "h": 230,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Lễ Độc lập ở Ba Đình, 2/9/1945."
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/tuyen-ngon-doc-lap-ban-goc.webp",
                        "col": "right",
                        "h": 200,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Bản Tuyên ngôn độc lập, Trung tâm Lưu trữ quốc gia III."
                    }
                ],
                "narration": "Ngày 2 tháng 9 năm 1945, Hồ Chí Minh đọc Tuyên ngôn độc lập tại Ba Đình. Cách mạng Tháng Tám là cách mạng giải phóng dân tộc điển hình, chấm dứt chế độ quân chủ, và một đảng mới 15 tuổi đã lãnh đạo thành công.",
                "id": "vnr-p08-s01",
                "label": "01 / 2/9/1945"
            },
            {
                "title": "Bốn bài học kinh nghiệm",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Thắng lợi 1930-1945 để lại bốn bài học kinh nghiệm quý báu."
                    },
                    {
                        "type": "grid",
                        "cols": 2,
                        "hs": 34,
                        "ts": 31,
                        "items": [
                            {
                                "head": "Chỉ đạo chiến lược",
                                "text": "Giương cao ngọn cờ giải phóng dân tộc"
                            },
                            {
                                "head": "Xây dựng lực lượng",
                                "text": "Mặt trận dân tộc thống nhất rộng rãi"
                            },
                            {
                                "head": "Phương pháp",
                                "text": "Kết hợp chính trị với vũ trang, chớp thời cơ"
                            },
                            {
                                "head": "Xây dựng Đảng",
                                "text": "Gắn bó máu thịt với quần chúng"
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "src": "assets/images/exhibition-8/viet-minh-thang-tam.webp",
                        "col": "right",
                        "h": 280,
                        "fit": "contain",
                        "keepColor": true,
                        "caption": "Lực lượng Việt Minh trong Cách mạng Tháng Tám."
                    }
                ],
                "narration": "Có bốn bài học. Giương cao ngọn cờ giải phóng dân tộc. Tập hợp mọi lực lượng yêu nước trong mặt trận rộng rãi. Kết hợp chính trị với vũ trang và chớp thời cơ. Xây dựng Đảng gắn bó máu thịt với quần chúng.",
                "id": "vnr-p08-s02",
                "label": "02 / 1930-1945"
            },
            {
                "title": "Năm cột mốc đường lối",
                "head": "plain",
                "blocks": [
                    {
                        "type": "thesis",
                        "text": "Đường lối chuyển dịch qua năm cột mốc, từ đúng đắn đến đỉnh cao chỉ đạo."
                    },
                    {
                        "type": "rail",
                        "items": [
                            {
                                "date": "2/1930",
                                "head": "Cương lĩnh",
                                "text": "Độc lập hàng đầu"
                            },
                            {
                                "date": "10/1930",
                                "head": "Luận cương",
                                "text": "“Tả” khuynh"
                            },
                            {
                                "date": "1936",
                                "head": "Đột phá",
                                "text": "Tách khỏi điền địa"
                            },
                            {
                                "date": "1941",
                                "head": "Chuyển hướng",
                                "text": "Việt Minh"
                            },
                            {
                                "date": "1945",
                                "head": "Chớp thời cơ",
                                "text": "Giành chính quyền"
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đặt giải phóng dân tộc lên hàng đầu thì cách mạng thắng lợi."
                    }
                ],
                "narration": "Đường lối đi qua năm cột mốc: Cương lĩnh đúng đắn, Luận cương tả khuynh, bước đột phá năm 1936, chuyển hướng năm 1941, và chớp thời cơ năm 1945.",
                "id": "vnr-p08-s03",
                "label": "03 / 1930-1945"
            }
        ]
    }
};
function getStory(pieceIndex) {
    const story = STORY_DATA[pieceIndex];
    if (!story) throw new Error("Không có nội dung VNR202 cho tranh " + pieceIndex);
    return story;
}
