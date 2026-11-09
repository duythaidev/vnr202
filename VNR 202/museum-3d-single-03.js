// 15 tranh, 60 thẻ hoàn chỉnh. Không sinh story mock.
const STORY_CONFIG = { writeSpeed: 1, flightSpeed: 1, motionBlur: 1, decorCards: 5, autoAdvance: false };
const STORY_DATA = {
    "0": {
        "id": "vnr-p01",
        "seed": 117,
        "steps": [
            {
                "title": "Thế giới thay đổi",
                "source": "Bài VNR202 · đoạn 022–026",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "Cuối XIX",
                                "text": "Đế quốc mở rộng thuộc địa."
                            },
                            {
                                "date": "1917",
                                "text": "Cách mạng Tháng Mười Nga."
                            },
                            {
                                "date": "1919",
                                "text": "Quốc tế Cộng sản ra đời."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Những biến đổi quốc tế tác động tới phong trào giải phóng dân tộc."
                    }
                ],
                "id": "vnr-p01-s01",
                "label": "01 / Trước 1930"
            },
            {
                "title": "Xã hội thuộc địa",
                "source": "Bài VNR202 · đoạn 027–039",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Hai cuộc khai thác thuộc địa làm biến đổi kinh tế và cơ cấu xã hội Việt Nam.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Pháp duy trì bộ máy cai trị và khai thác thuộc địa.",
                            "Các giai cấp, tầng lớp phân hóa; mâu thuẫn dân tộc trở nên gay gắt."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Độc lập dân tộc là yêu cầu nổi bật của xã hội thuộc địa."
                    }
                ],
                "id": "vnr-p01-s02",
                "label": "02 / Trước 1930"
            },
            {
                "title": "Những ngả đường yêu nước",
                "source": "Bài VNR202 · đoạn 040–045",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cần Vương, Yên Thế: đấu tranh vũ trang kéo dài.",
                            "Đông Du, Duy Tân: tìm những cách cứu nước khác nhau.",
                            "Việt Nam Quốc dân Đảng: khuynh hướng dân chủ tư sản."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Các phong trào khác nhau về tổ chức và phương pháp, không chỉ về thời điểm."
                    }
                ],
                "id": "vnr-p01-s03",
                "label": "03 / Trước 1930"
            },
            {
                "title": "Vấn đề đặt ra",
                "source": "Bài VNR202 · đoạn 046",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Khát vọng",
                        "to": "Con đường",
                        "caption": "Cần đường lối, tổ chức và phương pháp phù hợp"
                    },
                    {
                        "type": "text",
                        "text": "Theo bài nhóm, những giới hạn của các phong trào đặt ra yêu cầu tìm một hướng đi mới.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Từ đây, câu chuyện chuyển sang hành trình của Nguyễn Ái Quốc."
                    }
                ],
                "id": "vnr-p01-s04",
                "label": "04 / Trước 1930"
            }
        ]
    },
    "1": {
        "id": "vnr-p02",
        "seed": 148,
        "steps": [
            {
                "title": "Tìm đường cứu nước",
                "source": "Bài VNR202 · đoạn 047–048",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1911",
                                "text": "Ra đi tìm đường cứu nước."
                            },
                            {
                                "date": "1919",
                                "text": "Gửi Yêu sách của nhân dân An Nam."
                            },
                            {
                                "date": "1920",
                                "text": "Đọc Luận cương; tham gia Đại hội Tours."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Năm 1920 đánh dấu một bước chuyển quan trọng trong lựa chọn con đường."
                    }
                ],
                "id": "vnr-p02-s01",
                "label": "01 / 1911–1929"
            },
            {
                "title": "Tư tưởng và chính trị",
                "source": "Bài VNR202 · đoạn 049–051; ảnh: BTLSQG",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Tố cáo chủ nghĩa thực dân qua báo chí và hoạt động quốc tế.",
                            "Truyền bá chủ nghĩa Mác–Lênin vào phong trào yêu nước.",
                            "Phát triển nhận thức về cách mạng giải phóng dân tộc."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/bao-thanh-nien-1926.webp",
                        "caption": "Báo Thanh Niên · số 3/10/1926",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Lý luận được tiếp nhận trong quá trình tìm lời giải cho thực tiễn Việt Nam."
                    }
                ],
                "id": "vnr-p02-s02",
                "label": "02 / 1911–1929",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            },
            {
                "title": "Xây dựng tổ chức",
                "source": "Bài VNR202 · đoạn 052; ảnh: BTLSQG",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1925",
                                "text": "Hội Việt Nam Cách mạng Thanh niên; báo Thanh Niên."
                            },
                            {
                                "date": "1927",
                                "text": "Đường Kách mệnh tập hợp các bài giảng."
                            }
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/duong-kach-menh-1927.webp",
                        "caption": "Trang sách Đường Kách mệnh · 1927",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "text",
                        "text": "Các lớp huấn luyện ở Quảng Châu góp phần chuẩn bị cán bộ và tổ chức.",
                        "size": "lg"
                    }
                ],
                "id": "vnr-p02-s03",
                "label": "03 / 1911–1929",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            },
            {
                "title": "Lý luận gặp phong trào",
                "source": "Bài VNR202 · đoạn 052; ảnh: BTLSQG",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Cán bộ",
                        "to": "Công nhân",
                        "caption": "Vô sản hóa · 1928"
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/nha-huan-luyen-quang-chau.webp",
                        "caption": "Di tích nhà huấn luyện ở Quảng Châu",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "text",
                        "text": "Cán bộ vào nhà máy, hầm mỏ, đồn điền để rèn luyện và vận động quần chúng.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Chuẩn bị tư tưởng, chính trị và tổ chức gắn liền với nhau."
                    }
                ],
                "id": "vnr-p02-s04",
                "label": "04 / 1911–1929",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            }
        ]
    },
    "2": {
        "id": "vnr-p03",
        "seed": 179,
        "steps": [
            {
                "title": "Ba tổ chức năm 1929",
                "source": "Bài VNR202 · đoạn 053–058",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Đông Dương Cộng sản Đảng.",
                            "An Nam Cộng sản Đảng.",
                            "Đông Dương Cộng sản Liên đoàn."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Sự phát triển của phong trào đặt ra yêu cầu thống nhất tổ chức."
                    }
                ],
                "id": "vnr-p03-s01",
                "label": "01 / 1929–02/1930"
            },
            {
                "title": "Hội nghị hợp nhất",
                "source": "Lịch sử biên niên Đảng · Tập 2; bài nhóm đoạn 059",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Nguyễn Ái Quốc chủ trì Hội nghị đầu năm 1930 tại Hương Cảng.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đại biểu Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng tham dự.",
                            "Thống nhất thành lập Đảng Cộng sản Việt Nam và thông qua các văn kiện cơ bản."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không đồng nhất quá trình thống nhất ba tổ chức với thành phần dự Hội nghị."
                    }
                ],
                "id": "vnr-p03-s02",
                "label": "02 / 1929–02/1930"
            },
            {
                "title": "Hoàn thành thống nhất",
                "source": "Văn kiện Đảng toàn tập · Tập 2, tr.26",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "03/02",
                                "text": "Ngày kỷ niệm thành lập Đảng."
                            },
                            {
                                "date": "24/02/1930",
                                "text": "Đông Dương Cộng sản Liên đoàn gia nhập."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Sự thống nhất tổ chức tạo điều kiện tập trung lãnh đạo phong trào."
                    }
                ],
                "id": "vnr-p03-s03",
                "label": "03 / 1929–02/1930"
            }
        ]
    },
    "3": {
        "id": "vnr-p04",
        "seed": 210,
        "steps": [
            {
                "title": "Mục tiêu chiến lược",
                "source": "Bài VNR202 · đoạn 060–061",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Cương lĩnh chính trị đầu tiên xác định phương hướng cách mạng dân quyền và thổ địa, tiến tới xã hội cộng sản.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Phân biệt mục tiêu lâu dài với nhiệm vụ cần giải quyết trước mắt."
                    }
                ],
                "id": "vnr-p04-s01",
                "label": "01 / 02/1930"
            },
            {
                "title": "Độc lập ở hàng đầu",
                "source": "Bài VNR202 · đoạn 062",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Đánh đổ đế quốc Pháp và phong kiến, làm cho Việt Nam độc lập.",
                            "Đề ra nhiệm vụ về kinh tế, xã hội và quyền tự do của nhân dân."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đặt nhiệm vụ chống đế quốc ở vị trí hàng đầu không có nghĩa bỏ mọi nhiệm vụ dân chủ."
                    }
                ],
                "id": "vnr-p04-s02",
                "label": "02 / 02/1930"
            },
            {
                "title": "Tập hợp lực lượng",
                "source": "Bài VNR202 · đoạn 063–064",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Công nhân và nông dân là lực lượng cơ bản; đồng thời tranh thủ các lực lượng yêu nước rộng rãi.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Nền tảng",
                        "to": "Đoàn kết",
                        "caption": "Tập hợp lực lượng theo điều kiện cụ thể"
                    },
                    {
                        "type": "note",
                        "text": "Chính sách lực lượng là một điểm quan trọng để so sánh các văn kiện."
                    }
                ],
                "id": "vnr-p04-s03",
                "label": "03 / 02/1930"
            },
            {
                "title": "Ý nghĩa của khởi đầu",
                "source": "Bài VNR202 · đoạn 065",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Giải quyết cuộc khủng hoảng về đường lối và tổ chức lãnh đạo.",
                            "Kết hợp chủ nghĩa Mác–Lênin với phong trào công nhân và yêu nước.",
                            "Xác lập con đường cách mạng và lực lượng lãnh đạo."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Mốc đường lối thứ nhất của hành trình."
                    }
                ],
                "id": "vnr-p04-s04",
                "label": "04 / 02/1930"
            }
        ]
    },
    "4": {
        "id": "vnr-p05",
        "seed": 241,
        "steps": [
            {
                "title": "Từ đấu tranh đến cao trào",
                "source": "Bài VNR202 · đoạn 067–071",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "Đầu 1930",
                                "text": "Đấu tranh của công nhân và nông dân."
                            },
                            {
                                "date": "05–08/1930",
                                "text": "Phong trào phát triển mạnh."
                            },
                            {
                                "date": "09/1930",
                                "text": "Đỉnh cao tại Nghệ An, Hà Tĩnh."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Khủng hoảng kinh tế và sự đàn áp làm tình hình xã hội thêm gay gắt."
                    }
                ],
                "id": "vnr-p05-s01",
                "label": "01 / 1930–1931"
            },
            {
                "title": "Chính quyền ở cơ sở",
                "source": "Bài VNR202 · đoạn 072",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Ở một số địa phương Nghệ An, Hà Tĩnh, tổ chức cách mạng và nông hội thực hiện chức năng quản lý đời sống.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Tổ chức hoạt động xã hội ở thôn, xã.",
                            "Thể hiện năng lực tổ chức và sức mạnh quần chúng."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không phải toàn bộ hai tỉnh đều đã nằm dưới một chính quyền thống nhất."
                    }
                ],
                "id": "vnr-p05-s02",
                "label": "02 / 1930–1931"
            },
            {
                "title": "Kinh nghiệm và tổn thất",
                "source": "Bài VNR202 · đoạn 072–073",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Củng cố liên minh công–nông và kinh nghiệm vận động quần chúng.",
                            "Để lại bài học về lãnh đạo, tổ chức và kết hợp hình thức đấu tranh.",
                            "Phong trào chịu đàn áp và tổn thất nặng nề."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Hưng Nguyên 12/9/1930 bị đàn áp đẫm máu; không dùng số thương vong chưa chốt."
                    }
                ],
                "id": "vnr-p05-s03",
                "label": "03 / 1930–1931"
            }
        ]
    },
    "5": {
        "id": "vnr-p06",
        "seed": 272,
        "steps": [
            {
                "title": "Hội nghị Trung ương đầu tiên",
                "source": "Bài VNR202 · đoạn 074–075",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Hội nghị Ban Chấp hành Trung ương lần thứ nhất họp tháng 10/1930.",
                            "Đổi tên thành Đảng Cộng sản Đông Dương.",
                            "Bầu Trần Phú làm Tổng Bí thư và thông qua Luận cương."
                        ]
                    }
                ],
                "id": "vnr-p06-s01",
                "label": "01 / 10/1930"
            },
            {
                "title": "Nội dung cơ bản",
                "source": "Bài VNR202 · đoạn 076–081; ảnh: BTLSQG",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nêu nhiệm vụ phản đế và cách mạng thổ địa.",
                            "Xác định động lực công–nông, vai trò của Đảng.",
                            "Bàn phương pháp cách mạng và quan hệ quốc tế."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/luan-cuong-1930.webp",
                        "caption": "Ảnh văn kiện Luận cương · 10/1930",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Đọc nội dung và đóng góp trước khi phân tích giới hạn."
                    }
                ],
                "id": "vnr-p06-s02",
                "label": "02 / 10/1930",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            },
            {
                "title": "So sánh cùng tiêu chí",
                "source": "Bài VNR202 · đoạn 082–084",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cương lĩnh tháng 2: ưu tiên độc lập dân tộc, tập hợp lực lượng rộng rãi.",
                            "Luận cương tháng 10: nhấn mạnh đấu tranh giai cấp và vấn đề thổ địa."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "So sánh nhiệm vụ ưu tiên và chính sách lực lượng, không chỉ so hai tên văn kiện."
                    }
                ],
                "id": "vnr-p06-s03",
                "label": "03 / 10/1930"
            },
            {
                "title": "Giới hạn trong nhận thức",
                "source": "Bài VNR202 · đoạn 083–085",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Theo bài nhóm, Luận cương chưa làm rõ đầy đủ mâu thuẫn dân tộc và khả năng tập hợp các lực lượng yêu nước.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Nặng về đấu tranh giai cấp và cách mạng ruộng đất.",
                            "Đặt ra bài học nhận thức đúng thực tiễn thuộc địa."
                        ]
                    }
                ],
                "id": "vnr-p06-s04",
                "label": "04 / 10/1930"
            }
        ]
    },
    "6": {
        "id": "vnr-p07",
        "seed": 303,
        "steps": [
            {
                "title": "Tổn thất sau cao trào",
                "source": "Bài VNR202 · đoạn 086–091",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sự khủng bố làm nhiều cán bộ bị bắt, hệ thống tổ chức bị tổn thất.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Giữ liên lạc và bảo vệ lực lượng.",
                            "Duy trì ý chí hoạt động trong hoàn cảnh khó khăn."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Khôi phục không chỉ là tăng số lượng, mà còn giữ được tổ chức và phương hướng."
                    }
                ],
                "id": "vnr-p07-s01",
                "label": "01 / 1931–1934"
            },
            {
                "title": "Học tập trong nhà tù",
                "source": "Bài VNR202 · đoạn 092",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Lập các tổ chức bí mật và tổ chức học lý luận.",
                            "Biên soạn, dịch tài liệu; duy trì báo chí trong tù.",
                            "Bồi dưỡng cán bộ, củng cố niềm tin và khả năng tổ chức."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Nhà tù trở thành một môi trường đấu tranh và học tập đặc biệt."
                    }
                ],
                "id": "vnr-p07-s02",
                "label": "02 / 1931–1934"
            },
            {
                "title": "Giữ lực lượng, sửa sai",
                "source": "Bài VNR202 · đoạn 088–090",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Trung ương phê phán những chủ trương sai lầm trong công tác tổ chức, đồng thời chống khủng bố và bảo vệ phong trào.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Bảo vệ lực lượng đi cùng điều chỉnh phương pháp và cách tập hợp quần chúng."
                    }
                ],
                "id": "vnr-p07-s03",
                "label": "03 / 1931–1934"
            }
        ]
    },
    "7": {
        "id": "vnr-p08",
        "seed": 334,
        "steps": [
            {
                "title": "Chương trình hành động",
                "source": "Bài VNR202 · đoạn 093–095",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Chương trình hành động năm 1932 đặt nhiệm vụ khôi phục tổ chức và phong trào quần chúng.",
                        "size": "lg"
                    },
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1932",
                                "text": "Chương trình hành động."
                            },
                            {
                                "date": "1933",
                                "text": "Tiếp tục củng cố lý luận và tổ chức."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không nhầm văn kiện này với Cương lĩnh tháng 2/1930."
                    }
                ],
                "id": "vnr-p08-s01",
                "label": "01 / 1932–1935"
            },
            {
                "title": "Ban Chỉ huy ở ngoài",
                "source": "Bài VNR202 · đoạn 096",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Đầu năm 1934, Ban Chỉ huy ở ngoài được thành lập để chỉ đạo và nối lại hoạt động.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Liên lạc",
                        "to": "Khôi phục",
                        "caption": "Gắn cơ quan chỉ đạo với phong trào trong nước"
                    }
                ],
                "id": "vnr-p08-s02",
                "label": "02 / 1932–1935"
            },
            {
                "title": "Đại hội I và giới hạn",
                "source": "Bài VNR202 · đoạn 097–098",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "03/1935",
                                "text": "Đại hội I tại Ma Cao."
                            },
                            {
                                "date": "Nhiệm vụ",
                                "text": "Củng cố Đảng, vận động quần chúng, tuyên truyền."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Phục hồi tổ chức là kết quả quan trọng; bài nhóm cũng chỉ ra hạn chế đường lối còn tồn tại."
                    }
                ],
                "id": "vnr-p08-s03",
                "label": "03 / 1932–1935"
            }
        ]
    },
    "8": {
        "id": "vnr-p09",
        "seed": 365,
        "steps": [
            {
                "title": "Điều kiện thay đổi",
                "source": "Bài VNR202 · đoạn 099–105",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nguy cơ phát xít và chiến tranh gia tăng.",
                            "Đại hội VII Quốc tế Cộng sản đề cao mặt trận rộng rãi.",
                            "Mặt trận Nhân dân Pháp thắng cử năm 1936."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Điều kiện mới mở ra khả năng hoạt động, không tự động bảo đảm mọi quyền ở thuộc địa."
                    }
                ],
                "id": "vnr-p09-s01",
                "label": "01 / 1935–1937"
            },
            {
                "title": "Nhiệm vụ trước mắt",
                "source": "Bài VNR202 · đoạn 106–113",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Chống phát xít, chống chiến tranh, chống phản động thuộc địa; đòi tự do, dân chủ, cơm áo và hòa bình.",
                        "size": "lg"
                    },
                    {
                        "type": "flow",
                        "from": "Mục tiêu",
                        "to": "Sách lược",
                        "caption": "Nhiệm vụ trước mắt phù hợp hoàn cảnh"
                    },
                    {
                        "type": "note",
                        "text": "Kết hợp công khai, hợp pháp với bí mật; không thay thế hoàn toàn một hình thức bằng hình thức khác."
                    }
                ],
                "id": "vnr-p09-s02",
                "label": "02 / 1935–1937"
            },
            {
                "title": "Chiến sách mới",
                "source": "Bài VNR202 · đoạn 114–117",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Văn kiện Chung quanh vấn đề chiến sách mới tháng 10/1936 thể hiện nhận thức linh hoạt hơn về nhiệm vụ dân tộc và ruộng đất.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Không ràng buộc cứng nhắc hai nhiệm vụ trong mọi hoàn cảnh.",
                            "Tập trung lực lượng vào đối tượng nguy hiểm cần giải quyết trước."
                        ]
                    }
                ],
                "id": "vnr-p09-s03",
                "label": "03 / 1935–1937"
            },
            {
                "title": "Vận động dân nguyện",
                "source": "Bài VNR202 · đoạn 118–121",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Phong trào Đông Dương Đại hội thu thập yêu cầu của nhân dân.",
                            "Tổ chức các ủy ban hành động và vận động quần chúng.",
                            "Biểu dương lực lượng, bãi công và các hình thức đấu tranh dân sinh."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Điểm nhấn là khả năng tập hợp rộng rãi, không phải một con số riêng lẻ."
                    }
                ],
                "id": "vnr-p09-s04",
                "label": "04 / 1935–1937"
            }
        ]
    },
    "9": {
        "id": "vnr-p10",
        "seed": 396,
        "steps": [
            {
                "title": "Mở rộng mặt trận",
                "source": "Bài VNR202 · đoạn 112;118–123",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1936",
                                "text": "Chủ trương mặt trận rộng rãi."
                            },
                            {
                                "date": "1938",
                                "text": "Mặt trận Dân chủ Đông Dương."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tên gọi và hình thức tổ chức phát triển theo từng giai đoạn."
                    }
                ],
                "id": "vnr-p10-s01",
                "label": "01 / 1937–1939"
            },
            {
                "title": "Nhiều hình thức đấu tranh",
                "source": "Bài VNR202 · đoạn 119–123; ảnh: BTLSQG",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Mít tinh, bãi công và biểu tình quần chúng.",
                            "Báo chí công khai, vận động nghị trường.",
                            "Hoạt động tương tế, ái hữu và các tổ chức xã hội."
                        ]
                    },
                    {
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/dau-xao-1938.webp",
                        "caption": "Mít tinh Đấu Xảo · 1/5/1938",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Mít tinh Đấu Xảo 1/5/1938 là một sự kiện tiêu biểu."
                    }
                ],
                "id": "vnr-p10-s02",
                "label": "02 / 1937–1939",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            },
            {
                "title": "Văn hóa và tự phê bình",
                "source": "Hội Truyền bá Quốc ngữ, 1938; Tự chỉ trích, 1939",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "1938",
                                "text": "Hội Truyền bá Quốc ngữ."
                            },
                            {
                                "date": "1939",
                                "text": "Nguyễn Văn Cừ viết Tự chỉ trích."
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "text": "Vận động văn hóa và tự phê bình bổ sung cho hoạt động chính trị, tổ chức.",
                        "size": "lg"
                    }
                ],
                "id": "vnr-p10-s03",
                "label": "03 / 1937–1939"
            },
            {
                "title": "Lực lượng và kinh nghiệm",
                "source": "Văn kiện Đảng toàn tập · Tập 6, tr.375–376",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Báo cáo thời kỳ 1938 ghi 35.009 hội viên trong các tổ chức quần chúng.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Đây không phải số đảng viên hoặc số người tại một mít tinh.",
                            "Tích lũy kinh nghiệm mặt trận, tổ chức và kết hợp hình thức đấu tranh."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tháng 9/1939, chiến tranh làm thay đổi điều kiện hoạt động."
                    }
                ],
                "id": "vnr-p10-s04",
                "label": "04 / 1937–1939"
            }
        ]
    },
    "10": {
        "id": "vnr-p11",
        "seed": 427,
        "steps": [
            {
                "title": "Chiến tranh và hai tầng áp bức",
                "source": "Bài VNR202 · đoạn 128–131",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "09/1939",
                                "text": "Chiến tranh thế giới thứ hai bùng nổ."
                            },
                            {
                                "date": "09/1940",
                                "text": "Nhật vào Đông Dương; Pháp tiếp tục bộ máy cai trị."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Nhân dân chịu ách áp bức Pháp–Nhật trong điều kiện thời chiến."
                    }
                ],
                "id": "vnr-p11-s01",
                "label": "01 / 1939–1941"
            },
            {
                "title": "Bước đầu tháng 11/1939",
                "source": "Bài VNR202 · đoạn 132–138",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Đề cao nhiệm vụ giải phóng dân tộc và chống ngoại xâm.",
                            "Điều chỉnh khẩu hiệu ruộng đất cho phù hợp.",
                            "Chủ trương mặt trận dân tộc thống nhất phản đế."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Đây là bước mở đầu chuyển hướng, chưa phải toàn bộ nội dung hoàn chỉnh năm 1941."
                    }
                ],
                "id": "vnr-p11-s02",
                "label": "02 / 1939–1941"
            },
            {
                "title": "Bước tiếp tháng 11/1940",
                "source": "Bài VNR202 · đoạn 139–141",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Hội nghị tháng 11/1940 tiếp tục điều chỉnh tổ chức và chủ trương trong hoàn cảnh mới.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Theo bài nhóm, quan hệ giữa phản đế và thổ địa vẫn còn những điểm chưa dứt khoát."
                    }
                ],
                "id": "vnr-p11-s03",
                "label": "03 / 1939–1941"
            },
            {
                "title": "Ba tiếng súng báo hiệu",
                "source": "Bài VNR202 · đoạn 154–158",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "27/9/1940",
                                "text": "Bắc Sơn."
                            },
                            {
                                "date": "23/11/1940",
                                "text": "Nam Kỳ."
                            },
                            {
                                "date": "13/1/1941",
                                "text": "Binh biến Đô Lương."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tinh thần đấu tranh đi cùng bài học về điều kiện và thời điểm khởi nghĩa."
                    }
                ],
                "id": "vnr-p11-s04",
                "label": "04 / 1939–1941"
            }
        ]
    },
    "11": {
        "id": "vnr-p12",
        "seed": 458,
        "steps": [
            {
                "title": "Mâu thuẫn cấp bách",
                "source": "Bài VNR202 · đoạn 142–144",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Hội nghị Trung ương 8 đặt vấn đề sinh tồn của dân tộc trong hoàn cảnh Pháp–Nhật thống trị.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Quyền lợi và vận mệnh toàn dân tộc trở thành điểm xuất phát để xác định nhiệm vụ."
                    }
                ],
                "id": "vnr-p12-s01",
                "label": "01 / 05/1941"
            },
            {
                "title": "Giải phóng dân tộc hàng đầu",
                "source": "Bài VNR202 · đoạn 145",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Tập trung giải quyết nhiệm vụ dân tộc giải phóng.",
                            "Điều chỉnh khẩu hiệu ruộng đất để phục vụ nhiệm vụ trước mắt."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Tạm gác một nhiệm vụ không có nghĩa xóa bỏ nhiệm vụ đó vĩnh viễn."
                    }
                ],
                "id": "vnr-p12-s02",
                "label": "02 / 05/1941"
            },
            {
                "title": "Quyền dân tộc tự quyết",
                "source": "Bài VNR202 · đoạn 146",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Giải quyết vấn đề dân tộc trong khuôn khổ từng nước Đông Dương, tôn trọng quyền tự quyết.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Chủ trương liên minh không đồng nghĩa áp một mô hình quốc gia duy nhất cho mọi dân tộc."
                    }
                ],
                "id": "vnr-p12-s03",
                "label": "03 / 05/1941"
            },
            {
                "title": "Mặt trận Việt Minh",
                "source": "Bài VNR202 · đoạn 147",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Thành lập Việt Minh, tập hợp rộng rãi những người yêu nước và các đoàn thể cứu quốc.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Lấy mục tiêu cứu nước để đoàn kết lực lượng.",
                            "Mở rộng mặt trận trên nền tảng công–nông."
                        ]
                    }
                ],
                "id": "vnr-p12-s04",
                "label": "04 / 05/1941"
            },
            {
                "title": "Nhà nước của toàn dân tộc",
                "source": "Bài VNR202 · đoạn 148",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Sau khi giành độc lập, chủ trương xây dựng nước Việt Nam Dân chủ Cộng hòa của toàn dân tộc.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Phân biệt hình thức nhà nước dự kiến này với chính quyền Xô viết ở giai đoạn trước."
                    }
                ],
                "id": "vnr-p12-s05",
                "label": "05 / 05/1941"
            },
            {
                "title": "Chuẩn bị khởi nghĩa",
                "source": "Bài VNR202 · đoạn 149–153",
                "blocks": [
                    {
                        "type": "flow",
                        "from": "Từng phần",
                        "to": "Toàn quốc",
                        "caption": "Chuẩn bị và hành động khi đủ điều kiện"
                    },
                    {
                        "type": "text",
                        "text": "Chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm; phát triển lực lượng để đón thời cơ.",
                        "size": "lg"
                    },
                    {
                        "type": "note",
                        "text": "Chốt quan hệ nhiệm vụ, lực lượng và phương pháp."
                    }
                ],
                "id": "vnr-p12-s06",
                "label": "06 / 05/1941"
            }
        ]
    },
    "12": {
        "id": "vnr-p13",
        "seed": 489,
        "steps": [
            {
                "title": "Lực lượng chính trị",
                "source": "Bài VNR202 · đoạn 159–163;165",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Phát triển Việt Minh và các đoàn thể cứu quốc.",
                            "Đẩy mạnh báo chí, tuyên truyền và tổ chức quần chúng.",
                            "Vận động trí thức, thanh niên và các tầng lớp yêu nước."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Lực lượng chính trị là nền tảng quần chúng, không chỉ các cơ quan lãnh đạo."
                    }
                ],
                "id": "vnr-p13-s01",
                "label": "01 / 1941–1944"
            },
            {
                "title": "Văn hóa và trí thức",
                "source": "Bài VNR202 · đoạn 164–165",
                "blocks": [
                    {
                        "type": "text",
                        "text": "Đề cương về văn hóa Việt Nam năm 1943 nêu ba nguyên tắc: dân tộc, khoa học, đại chúng.",
                        "size": "lg"
                    },
                    {
                        "type": "bullets",
                        "items": [
                            "Vận động văn hóa gắn với mục tiêu giải phóng dân tộc.",
                            "Tập hợp trí thức và lực lượng văn hóa cứu quốc."
                        ]
                    }
                ],
                "id": "vnr-p13-s02",
                "label": "02 / 1941–1944"
            },
            {
                "title": "Căn cứ và hành lang liên lạc",
                "source": "Bài VNR202 · đoạn 166–169",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Duy trì, phát triển lực lượng ở Bắc Sơn–Võ Nhai và Cao Bằng.",
                            "Mở rộng cơ sở, nối các vùng căn cứ bằng hướng Nam tiến.",
                            "Chuẩn bị địa bàn, liên lạc và tổ chức cho khởi nghĩa."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Căn cứ địa gắn con người, tổ chức và không gian hoạt động."
                    }
                ],
                "id": "vnr-p13-s03",
                "label": "03 / 1941–1944"
            },
            {
                "title": "Đội quân ra đời",
                "source": "Bài VNR202 · đoạn 170–171; ảnh: BTLSQG",
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
                        "type": "image",
                        "col": "right",
                        "src": "assets/images/verified/doi-tuyen-truyen-giai-phong-quan-1944.webp",
                        "caption": "Ngày thành lập Đội · 22/12/1944",
                        "h": 330,
                        "keepColor": true,
                        "fit": "contain"
                    },
                    {
                        "type": "note",
                        "text": "Chính trị và quân sự gắn với nhau trong quá trình chuẩn bị lực lượng."
                    }
                ],
                "id": "vnr-p13-s04",
                "label": "04 / 1941–1944",
                "imageSource": "Bảo tàng Lịch sử Quốc gia"
            }
        ]
    },
    "13": {
        "id": "vnr-p14",
        "seed": 520,
        "steps": [
            {
                "title": "Đảo chính và chỉ thị",
                "source": "Bài VNR202 · đoạn 172–179",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "09/3/1945",
                                "text": "Nhật đảo chính Pháp."
                            },
                            {
                                "date": "12/3/1945",
                                "text": "Chỉ thị Nhật–Pháp bắn nhau và hành động của chúng ta."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Xác định phát xít Nhật là kẻ thù trực tiếp trước mắt; phát động cao trào kháng Nhật cứu nước."
                    }
                ],
                "id": "vnr-p14-s01",
                "label": "01 / 03–08/1945"
            },
            {
                "title": "Khởi nghĩa và dân sinh",
                "source": "Bài VNR202 · đoạn 180–186",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Khởi nghĩa từng phần, chiến tranh du kích cục bộ.",
                            "Phá kho thóc giải quyết nạn đói.",
                            "Phát triển lực lượng và các hình thức chính quyền cách mạng."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Gắn nhiệm vụ cứu nước với yêu cầu cấp bách của đời sống nhân dân."
                    }
                ],
                "id": "vnr-p14-s02",
                "label": "02 / 03–08/1945"
            },
            {
                "title": "Thống nhất lực lượng",
                "source": "Nghị quyết Hội nghị quân sự Bắc Kỳ, 4/1945; bài nhóm đoạn 182–185",
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
                    },
                    {
                        "type": "note",
                        "text": "Quyết định tại hội nghị và ngày thực hiện hợp nhất là hai mốc khác nhau."
                    }
                ],
                "id": "vnr-p14-s03",
                "label": "03 / 03–08/1945"
            },
            {
                "title": "Nhận định thời cơ",
                "source": "Bài VNR202 · đoạn 187–191",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Nhật tuyên bố đầu hàng Đồng minh ngày 15/8/1945.",
                            "Lực lượng cách mạng đã được chuẩn bị qua nhiều năm.",
                            "Cần hành động trước khi quân Đồng minh vào Đông Dương."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Thời cơ khách quan chỉ trở thành thắng lợi khi có sự chuẩn bị và hành động kịp thời."
                    }
                ],
                "id": "vnr-p14-s04",
                "label": "04 / 03–08/1945"
            },
            {
                "title": "Quyết định tại Tân Trào",
                "source": "Bài VNR202 · đoạn 192–195",
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
                        "text": "Tập trung, thống nhất, kịp thời: quyết định đi cùng tổ chức thực hiện."
                    }
                ],
                "id": "vnr-p14-s05",
                "label": "05 / 03–08/1945"
            }
        ]
    },
    "14": {
        "id": "vnr-p15",
        "seed": 551,
        "steps": [
            {
                "title": "Làn sóng giành chính quyền",
                "source": "Bài VNR202 · đoạn 196–199",
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
                        "text": "Ba mốc tiêu biểu nằm trong phong trào khởi nghĩa rộng khắp nhiều địa phương."
                    }
                ],
                "id": "vnr-p15-s01",
                "label": "01 / 08–09/1945"
            },
            {
                "title": "Nhà nước độc lập ra đời",
                "source": "Bài VNR202 · đoạn 200",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "08/1945",
                                "text": "Chính phủ lâm thời được hình thành."
                            },
                            {
                                "date": "30/8",
                                "text": "Bảo Đại thoái vị."
                            },
                            {
                                "date": "02/9",
                                "text": "Tuyên ngôn Độc lập tại Ba Đình."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Giành chính quyền nối với xác lập một nhà nước độc lập."
                    }
                ],
                "id": "vnr-p15-s02",
                "label": "02 / 08–09/1945"
            },
            {
                "title": "Tính chất và ý nghĩa",
                "source": "Bài VNR202 · đoạn 201–208",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Cách mạng giải phóng dân tộc mang tính chất dân chủ mới.",
                            "Chấm dứt ách thống trị thuộc địa, chế độ quân chủ; mở kỷ nguyên độc lập.",
                            "Nhân dân trở thành người làm chủ đất nước."
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Không đồng nhất thắng lợi này với hoàn tất mọi nhiệm vụ ruộng đất và xã hội."
                    }
                ],
                "id": "vnr-p15-s03",
                "label": "03 / 08–09/1945"
            },
            {
                "title": "Bốn bài học",
                "source": "Bài VNR202 · đoạn 209–213",
                "blocks": [
                    {
                        "type": "bullets",
                        "items": [
                            "Chỉ đạo chiến lược: đề cao giải phóng dân tộc.",
                            "Lực lượng: phát huy đoàn kết toàn dân trên nền tảng công–nông.",
                            "Phương pháp: kết hợp chính trị, vũ trang và chớp thời cơ.",
                            "Xây dựng Đảng: vững mạnh, gắn bó với quần chúng."
                        ]
                    }
                ],
                "id": "vnr-p15-s04",
                "label": "04 / 08–09/1945"
            },
            {
                "title": "Năm mốc đường lối",
                "source": "Bài VNR202 · đoạn 214–219",
                "blocks": [
                    {
                        "type": "timeline",
                        "items": [
                            {
                                "date": "02/1930",
                                "text": "Cương lĩnh đầu tiên."
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
                                "text": "Chuyển hướng chiến lược."
                            },
                            {
                                "date": "1945",
                                "text": "Chớp thời cơ."
                            }
                        ]
                    },
                    {
                        "type": "note",
                        "text": "Nhìn lại quan hệ mục tiêu, lực lượng, phương pháp và thời điểm hành động."
                    }
                ],
                "id": "vnr-p15-s05",
                "label": "05 / 08–09/1945"
            }
        ]
    }
};
function getStory(pieceIndex) {
    const story = STORY_DATA[pieceIndex];
    if (!story) throw new Error('Không có nội dung VNR202 cho tranh ' + pieceIndex);
    return story;
}
