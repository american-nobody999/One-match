"use strict";
//Author: Leslie Brockman
//Date:11-01-2026
//Date modified: 11-26-2026
// regionId is navigation grouping; original IDs/governorates remain stable.
// Sources support only their listed fields. Dates are ISO; verification means source review, not field investigation.
// Legacy sourceUrl/sourcePublicationDate mirror the first source; unsupported fields remain null.
// weeklyRecap: null or { date: "YYYY-MM-DD", textEn, textAr, sources: [{ labelEn, labelAr, url }] }.
// Recaps are manually approved, dated summaries; never derive them from historical concerns.
window.WEST_BANK_COMMUNITIES = [
    {
        "id": "umm-al-khair",
        "nameEn": "Umm al-Khair",
        "nameAr": "أم الخير",
        "governorateId": "hebron",
        "governorateEn": "Hebron",
        "governorateAr": "الخليل",
        "descriptionEn": "Community overview: Umm al-Khair, Hebron. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: أم الخير، الخليل. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/50Stories/Salem_Umm_al_Khair.html",
        "sourcePublicationDate": null,
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "hebron",
        "backgroundEn": "Umm al-Khair is a Palestinian village in the South Hebron Hills. Amnesty International’s 2022 account describes residents from the Hathaleen tribe whose families were displaced from Tel Arad in the Naqab in 1948 and subsequently bought the land of Umm al-Khair from residents of Yatta.",
        "backgroundAr": "أم الخير قرية فلسطينية في تلال جنوب الخليل. ويصف تقرير منظمة العفو الدولية لعام 2022 سكانًا من عشيرة الهذالين هُجّرت أسرهم من تل عراد في النقب عام 1948، ثم اشتروا أرض أم الخير من سكان يطا.",
        "concernsEn": "OCHA’s historical account documents Israeli authorities demolishing six homes in Umm al-Khair on 6 April 2016, displacing residents.",
        "concernsAr": "يوثّق سرد أوتشا التاريخي هدم السلطات الإسرائيلية ستة منازل في أم الخير في 6 أبريل 2016، مما أدّى إلى نزوح سكان.",
        "sources": [
            {
                "labelEn": "UN OCHA — Salem, Umm al-Khair (historical account; undated page)",
                "labelAr": "أوتشا — سالم، أم الخير (سرد تاريخي؛ صفحة دون تاريخ نشر)",
                "url": "https://www.ochaopt.org/50Stories/Salem_Umm_al_Khair.html",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "6 April 2016 home demolitions",
                "supportAr": "هدم المنازل في 6 أبريل 2016"
            },
            {
                "labelEn": "Amnesty International — MDE 15/5141/2022, p. 159",
                "labelAr": "منظمة العفو الدولية — الوثيقة MDE 15/5141/2022، ص 159",
                "url": "https://www.amnesty.org/en/wp-content/uploads/2022/02/MDE1551412022ENGLISH.pdf",
                "reportDate": null,
                "publicationDate": "2022-02-01",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Village location and family displacement history",
                "supportAr": "موقع القرية وتاريخ تهجير الأسر"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "New reporting published on November 22 documents continued settlement expansion immediately east of Umm al-Khair. The Israeli-Palestinian activist organization Ta'ayush reported that heavy construction equipment arrived on November 17 to establish a new settlement outpost beside a critical access road used by Palestinian communities.\n\nTa'ayush identified Israeli settlers Yinon Levi and Yehoyariv Shevo as leading the construction convoy. The road provides access to employment, schools, shops and medical facilities for thousands of Palestinian residents across the surrounding area.\n\nIn separate interviews published by Socialist Worker on November 22, Eid and Mahmoud Hathaleen described Levi's return to the area and continued settlement expansion on village land. Levi was charged in August 2026 with reckless manslaughter, armed trespassing and property damage following the July 2025 killing of Palestinian activist Awdah Hathaleen.\n\nThe new construction raises further concerns about Umm al-Khair's territorial isolation, residents' freedom of movement and the community's ability to remain on its land.",
            "textAr": "وثّقت تقارير جديدة نُشرت في 22 نوفمبر استمرار التوسع الاستيطاني شرق قرية أم الخير مباشرة. وأفادت مجموعة تعايش، وهي مجموعة ناشطين فلسطينيين وإسرائيليين، بوصول آليات بناء ثقيلة في 17 نوفمبر لإقامة بؤرة استيطانية جديدة بجوار طريق حيوي تستخدمه المجتمعات الفلسطينية.\n\nوحددت مجموعة تعايش المستوطنين الإسرائيليين ينون ليفي ويهويريف شيفو باعتبارهما يقودان قافلة آليات البناء. ويتيح هذا الطريق لآلاف السكان الفلسطينيين في المنطقة المحيطة الوصول إلى أماكن العمل والمدارس والمتاجر والمرافق الطبية.\n\nوفي مقابلات منفصلة نشرتها صحيفة سوشاليست ووركر في 22 نوفمبر، تحدث عيد ومحمود الهذالين عن عودة ليفي إلى المنطقة واستمرار التوسع الاستيطاني على أراضي القرية. وفي أغسطس 2026، وُجهت إلى ليفي تهم القتل نتيجة التهور، والتعدي المسلح، والإضرار بالممتلكات، على خلفية مقتل الناشط الفلسطيني عودة الهذالين في يوليو 2025.\n\nوتثير أعمال البناء الجديدة المزيد من المخاوف بشأن عزل أم الخير جغرافياً، وحرية حركة السكان، وقدرة المجتمع على البقاء على أرضه.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Ta'ayush — Weekly Field Report — November 22, 2026",
                    "labelAr": "تعايش — التقرير الميداني الأسبوعي — ٢٢ نوفمبر ٢٠٢٦",
                    "url": "https://taayush.org/?p=6746"
                },
                {
                    "labelEn": "Socialist Worker — Hathaleen Family Interviews — November 22, 2026",
                    "labelAr": "سوشاليست ووركر — مقابلات مع عائلة الهذالين — ٢٢ نوفمبر ٢٠٢٦",
                    "url": "https://socialistworker.co.uk/tag/view/537/"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.170164%2C31.422089%2C35.200164%2C31.442089&layer=mapnik&marker=31.432089%2C35.185164",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.432089&mlon=35.185164#map=15/31.432089/35.185164"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "textEn": "On November 16, Israeli forces declared Umm al-Khair a closed military zone, forcing Hebron Governor Khaled Dudin and a visiting European delegation to leave. The delegation had arrived to assess conditions following repeated settler attacks and mounting displacement pressure.\n\nVillage council head Khalil al-Hathalin reported continued settler violence, property destruction, and restrictions on residents' movement. Israeli forces have blocked access roads with gates, earth mounds, and concrete barriers, disrupting access to healthcare, education, and essential supplies.\n\nOn November 18, reports indicated that settlers established another outpost between Umm al-Khair and Khashm al-Daraj, erecting tents and temporary structures on grazing land under Israeli military protection.\n\nThe community continues to face settlement expansion, restricted movement, and threats to its homes and agricultural land.\n\nThe immediate concern remains the safety of residents, access to essential services, and the growing threat of forced displacement.",
                "textAr": "في 16 نوفمبر، أعلنت القوات الإسرائيلية منطقة أم الخير منطقة عسكرية مغلقة، وأجبرت محافظ الخليل خالد دودين ووفدًا أوروبيًا زائرًا على المغادرة. وكان الوفد قد وصل لتقييم الأوضاع بعد اعتداءات متكررة من المستوطنين وتصاعد الضغوط التي تهدد بتهجير السكان.\n\nوأفاد رئيس مجلس القرية خليل الهذالين باستمرار اعتداءات المستوطنين وتدمير الممتلكات وفرض قيود على حركة السكان. كما أغلقت القوات الإسرائيلية طرق الوصول بالبوابات والسواتر الترابية والحواجز الخرسانية، مما أعاق الوصول إلى الرعاية الصحية والتعليم والإمدادات الأساسية.\n\nوفي 18 نوفمبر، أشارت تقارير إلى إقامة بؤرة استيطانية جديدة بين أم الخير وخشم الدرج، حيث نصب مستوطنون خيامًا ومنشآت مؤقتة على أراضي الرعي، وسط تقارير عن حماية من الجيش الإسرائيلي.\n\nولا يزال المجتمع المحلي يواجه التوسع الاستيطاني والقيود على الحركة والتهديدات التي تطال المنازل والأراضي الزراعية.\n\nوتبقى الأولوية العاجلة حماية السكان وضمان وصولهم إلى الخدمات الأساسية ومواجهة خطر التهجير القسري المتزايد.",
                "emphasizeFinalParagraph": true,
                "sources": [
                    {
                        "labelEn": "WAFA — November 16, 2026",
                        "labelAr": "وفا — ١٦ نوفمبر ٢٠٢٦",
                        "url": "https://english.wafa.ps/Pages/Details/176989"
                    },
                    {
                        "labelEn": "Anadolu coverage — November 16, 2026",
                        "labelAr": "تغطية الأناضول — ١٦ نوفمبر ٢٠٢٦",
                        "url": "https://www.anews.com.tr/world/2026/11/16/israel-declares-west-bank-village-closed-military-zone-forcing-european-delegation-to-leave"
                    },
                    {
                        "labelEn": "Saba — November 18, 2026 (reported outpost account)",
                        "labelAr": "سبأ — ١٨ نوفمبر ٢٠٢٦ (تقرير عن البؤرة الاستيطانية)",
                        "url": "https://saba.ye/en/news3837822.htm"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "Umm al-Khair continued facing concerns over settler violence and restrictions on movement during the first days of November. Reporting published on November 3 highlighted the assault on journalists and solidarity activists in the village in late October, alongside continuing restrictions affecting communities across Masafer Yatta. The attack raised further concerns about the safety of residents and people documenting conditions in the area. No separately verified new attack within Umm al-Khair between November 1 and 11 was established in the sources reviewed.",
            "textAr": "استمرت المخاوف بشأن اعتداءات المستوطنين والقيود المفروضة على الحركة في قرية أم الخير خلال الأيام الأولى من تشرين الثاني/نوفمبر. وسلّط تقرير نُشر في 3 تشرين الثاني/نوفمبر الضوء على الاعتداء الذي وقع أواخر تشرين الأول/أكتوبر على صحفيين ومتضامنين في القرية، إلى جانب استمرار القيود التي تؤثر على التجمعات الفلسطينية في مسافر يطا. وأثار الاعتداء مخاوف إضافية بشأن سلامة السكان والأشخاص الذين يوثّقون الأوضاع في المنطقة. ولم يتسنَّ التحقق من وقوع اعتداء جديد منفصل داخل أم الخير بين 1 و11 تشرين الثاني/نوفمبر من خلال المصادر التي جرت مراجعتها.",
            "sources": [
                {
                    "labelEn": "Al Jazeera — Palestine Weekly, November 3, 2026",
                    "labelAr": "الجزيرة — فلسطين الأسبوعي، 3 نوفمبر 2026",
                    "url": "https://www.aljazeera.com/news/2026/11/3/palestine-weekly-election-deadlock-meets-west-bank-sieges-gaza-killings"
                },
                {
                    "labelEn": "European Palestinian Council — November 1, 2026",
                    "labelAr": "المجلس الأوروبي الفلسطيني — 1 نوفمبر 2026",
                    "url": "https://www.eupac.org/2026/11/01/"
                }
            ]
        },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "Residents of Umm al-Khair and nearby Palestinian communities faced restrictions on movement and access to essential supplies following the closure of a road gate in late October. On October 28, journalists documenting the closure near Umm al-Khair were reportedly assaulted by Israeli settlers, and two were subsequently detained by Israeli police.",
                "textAr": "واجه سكان أم الخير والمجتمعات الفلسطينية المجاورة قيودًا على التنقل والوصول إلى الإمدادات الأساسية عقب إغلاق بوابة على أحد الطرق في أواخر أكتوبر. وفي 28 أكتوبر، أفادت تقارير بأن مستوطنين إسرائيليين اعتدوا على صحفيين كانوا يوثقون إغلاق البوابة بالقرب من أم الخير، واحتجزت الشرطة الإسرائيلية اثنين منهم لاحقًا.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "Committee to Protect Journalists — October 29, 2026",
                        "labelAr": "لجنة حماية الصحفيين — 29 أكتوبر 2026",
                        "url": "https://cpj.org/2026/10/journalists-attacked-by-settlers-detained-by-police-after-incident/"
                    },
                    {
                        "labelEn": "Gutzy Asia — October 30, 2026",
                        "labelAr": "غوتزي آسيا — 30 أكتوبر 2026",
                        "url": "https://gutzy.asia/2026/10/30/journalists-arrested-after-settler-assault-near-closed-gate-in-west-bank-s-masafer-yatta"
                    }
                ]
            }
        ]
    },

    {
        "id": "masafer-yatta",
        "nameEn": "Masafer Yatta",
        "nameAr": "مسافر يطا",
        "governorateId": "hebron",
        "governorateEn": "Hebron",
        "governorateAr": "الخليل",
        "descriptionEn": "Community overview: Masafer Yatta, Hebron. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: مسافر يطا، الخليل. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-15-october-2026",
        "sourcePublicationDate": "2026-10-19",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "hebron",
        "backgroundEn": "Masafer Yatta is an area in Hebron governorate. It includes Palestinian communities within the Israeli-designated Firing Zone 918, including Jinba.",
        "backgroundAr": "مسافر يطا منطقة في محافظة الخليل. وتضم مجتمعات فلسطينية داخل المنطقة التي تصنّفها إسرائيل «منطقة إطلاق النار 918»، ومنها جنبا.",
        "concernsEn": "OCHA reported that vehicle confiscations by Israeli forces and settler attacks disrupted school transport in October 2026; no injuries were reported in the attacks on 12–13 October.",
        "concernsAr": "أفادت أوتشا بأن مصادرة القوات الإسرائيلية مركبات واعتداءات المستوطنين عطّلت النقل المدرسي في أكتوبر 2026؛ ولم تُسجَّل إصابات في اعتداءات 12–13 أكتوبر.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 15 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 15 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-15-october-2026",
                "reportDate": "2026-10-15",
                "publicationDate": "2026-10-19",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "School transport",
                "supportAr": "النقل المدرسي"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 2 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 2 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-2-october-2026",
                "reportDate": "2026-10-02",
                "publicationDate": "2026-10-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and constituent communities",
                "supportAr": "الموقع والمجتمعات المكوّنة"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 24, Khillet al-Daba experienced another round of demolitions, according to the Palestinian Wall and Settlement Resistance Commission. The commission had previously recorded eight separate demolition dates in the community since February 2025.\n\nOn November 25, another demolition operation was reported in Mughayir al-Abid. The commission was still assessing the extent of the destruction when its statement was published.\n\nUN OCHA reported on November 26 that water deliveries serving more than 1,500 Palestinians across ten communities within Firing Zone 918 remain severely constrained. Between October 1 and November 23, Israeli forces confiscated at least 18 Palestinian-owned vehicles, including agricultural tractors.\n\nOCHA documented the demolition of 97 Palestinian-owned structures within the designated firing zone during 2026, displacing 118 residents, including 58 children. Settler violence and related access restrictions displaced another 50 Palestinians, including 29 children, during the year.\n\nThe immediate concerns remain access to drinking water, protection of residential and agricultural structures, and the ability of families to remain in their communities.",
            "textAr": "في 24 نوفمبر، شهدت خلة الضبع موجة جديدة من عمليات الهدم، وفقاً لهيئة مقاومة الجدار والاستيطان الفلسطينية. وكانت الهيئة قد وثّقت سابقاً عمليات هدم في ثمانية تواريخ منفصلة في التجمع منذ فبراير 2025.\n\nوفي 25 نوفمبر، أُبلغ عن عملية هدم أخرى في مغير العبيد. وكانت الهيئة لا تزال تتابع حجم الأضرار عند نشر بيانها.\n\nوأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في 26 نوفمبر بأن عمليات إيصال المياه التي تخدم أكثر من 1500 فلسطيني في عشرة تجمعات داخل منطقة إطلاق النار 918 لا تزال تواجه قيوداً شديدة. وبين 1 أكتوبر و23 نوفمبر، صادرت القوات الإسرائيلية ما لا يقل عن 18 مركبة فلسطينية، من بينها جرارات زراعية.\n\nووثّق المكتب هدم 97 منشأة فلسطينية داخل منطقة إطلاق النار المحددة خلال عام 2026، مما أدى إلى تهجير 118 شخصاً، بينهم 58 طفلاً. كما أدى عنف المستوطنين والقيود المرتبطة به إلى تهجير 50 فلسطينياً آخرين، بينهم 29 طفلاً، خلال العام.\n\nوتظل المخاوف العاجلة تتمثل في ضمان الوصول إلى مياه الشرب، وحماية المنشآت السكنية والزراعية، وقدرة العائلات على البقاء في تجمعاتها.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "WAFA — Wall and Settlement Resistance Commission — November 25, 2026",
                    "labelAr": "وفا — هيئة مقاومة الجدار والاستيطان — ٢٥ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177311"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Masafer Yatta — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: مسافر يطا — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.120833%2C31.34%2C35.240833%2C31.42&layer=mapnik",
            "largerMapUrl": "https://www.openstreetmap.org/#map=12/31.38/35.180833",
            "captionEn": "Approximate Masafer Yatta area, not an exact community location.",
            "captionAr": "منطقة مسافر يطا التقريبية، وليست موقعًا دقيقًا لتجمع سكاني محدد.",
            "titleEn": "Approximate Masafer Yatta area",
            "titleAr": "منطقة مسافر يطا التقريبية",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.38,
            "longitude": 35.180833,
            "geographicReferenceUrl": "https://www.wikidata.org/wiki/Q6782301"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 16, Israeli forces detained seven Palestinians and seized a vehicle during a raid on Khirbet Khushm al-Karm in Masafer Yatta, according to WAFA. Anti-settlement activist Osama Makhamreh reported that five members of one family and two brothers staying at a guesthouse were detained.\n\nMakhamreh also reported that Israeli settlers assaulted international activists in Shaab al-Butum, stole a mobile phone, and seized Palestinian-owned water tanks and other property.\n\nThese incidents followed additional restrictions documented by UN OCHA. On November 5 and 7, Israeli forces confiscated four Palestinian vehicles, including two agricultural tractors, and detained nine residents in Halaweh and Khirbet al-Majaz. OCHA reported that all nine were released that day, while one vehicle remained confiscated as of November 13.\n\nResidents continue to face restrictions on movement, transportation, agricultural livelihoods, and access to essential services.",
                "textAr": "في 16 نوفمبر، احتجزت القوات الإسرائيلية سبعة فلسطينيين وصادرت مركبة خلال اقتحام خربة خشم الكرم في مسافر يطا، وفقًا لوكالة وفا. وأفاد الناشط المناهض للاستيطان أسامة مخامرة بأن المحتجزين شملوا خمسة أفراد من عائلة واحدة وشقيقين كانا في مضافة.\n\nوأفاد مخامرة أيضًا بأن مستوطنين اعتدوا على ناشطين دوليين في شعب البطم، وسرقوا هاتفًا محمولًا، واستولوا على خزانات مياه وممتلكات أخرى تعود لفلسطينيين.\n\nوجاءت هذه الحوادث بعد قيود إضافية وثقها مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية. ففي 5 و7 نوفمبر، صادرت القوات الإسرائيلية أربع مركبات فلسطينية، بينها جراران زراعيان، واحتجزت تسعة سكان في الحلاوة وخربة المجاز. وأفاد المكتب بالإفراج عن التسعة في اليوم نفسه، بينما ظلت إحدى المركبات مصادرة حتى 13 نوفمبر.\n\nولا يزال السكان يواجهون قيودًا على الحركة والنقل وسبل العيش الزراعية والوصول إلى الخدمات الأساسية.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 16, 2026",
                        "labelAr": "وفا — ١٦ نوفمبر ٢٠٢٦",
                        "url": "https://english.wafa.ps/Pages/Details/177003"
                    },
                    {
                        "labelEn": "UN OCHA — November 13, 2026",
                        "labelAr": "أوتشا — ١٣ نوفمبر ٢٠٢٦",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "Palestinian communities in Masafer Yatta continued facing restrictions on education, movement, and agricultural access. On November 1, Israeli forces detained ten teachers from Jinba Basic School for approximately five hours, according to UN OCHA. WAFA reported the detention of another teacher during a raid on Al-Fakhit School on November 8. On November 9, military exercises restricted access to Khirbet al-Fakhit, while settlers reportedly stole harvested olives near Yatta. On November 10, WAFA also reported that settlers forced a family from its olive groves in Wadi Ma'in and took harvested olives and farming equipment.",
            "textAr": "واصلت التجمعات الفلسطينية في مسافر يطا مواجهة القيود على التعليم والتنقل والوصول إلى الأراضي الزراعية. ففي 1 تشرين الثاني/نوفمبر، احتجزت القوات الإسرائيلية عشرة معلمين من مدرسة جنبا الأساسية لنحو خمس ساعات، وفقًا لمكتب الأمم المتحدة لتنسيق الشؤون الإنسانية. وأفادت وكالة وفا باحتجاز معلم آخر خلال اقتحام مدرسة الفخيت في 8 تشرين الثاني/نوفمبر. وفي 9 تشرين الثاني/نوفمبر، قيّدت تدريبات عسكرية الوصول إلى خربة الفخيت، فيما أفادت تقارير بسرقة مستوطنين لمحصول الزيتون قرب يطا. وفي 10 تشرين الثاني/نوفمبر، ذكرت وفا أيضًا أن مستوطنين أجبروا عائلة على مغادرة بساتين الزيتون التابعة لها في وادي معين واستولوا على محصول الزيتون ومعدات زراعية.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, November 5, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 5 نوفمبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-5-november-2026"
                },
                {
                    "labelEn": "WAFA — Al-Fakhit School, November 8, 2026",
                    "labelAr": "وفا — مدرسة الفخيت، 8 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176735"
                },
                {
                    "labelEn": "WAFA — Yatta olive harvest and military exercises, November 9, 2026",
                    "labelAr": "وفا — قطاف الزيتون والتدريبات العسكرية في يطا، 9 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176788"
                },
                {
                    "labelEn": "WAFA — Olive harvest attacks, November 10, 2026",
                    "labelAr": "وفا — اعتداءات قطاف الزيتون، 10 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176840"
                }
            ]
        },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 23, Israeli forces closed a road gate near the Carmel settlement, restricting access to Masafer Yatta and affecting at least 5,800 Palestinians. UN humanitarian partners also reported that emergency water deliveries remained suspended in four Masafer Yatta communities, affecting 975 people, while deliveries to six others continued at reduced frequency.",
                "textAr": "في 23 أكتوبر، أغلقت القوات الإسرائيلية بوابة طريق بالقرب من مستوطنة كرمل، مما قيّد الوصول إلى مسافر يطا وأثّر على ما لا يقل عن 5,800 فلسطيني. وأفاد شركاء الأمم المتحدة في المجال الإنساني أيضًا بأن توصيلات المياه الطارئة ظلت متوقفة في أربعة تجمعات سكانية في مسافر يطا، مما أثّر على 975 شخصًا، بينما استمرت التوصيلات إلى ستة تجمعات أخرى بوتيرة أقل.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "hebron-city",
        "nameEn": "Hebron City",
        "nameAr": "الخليل",
        "governorateId": "hebron",
        "governorateEn": "Hebron",
        "governorateAr": "الخليل",
        "descriptionEn": "Community overview: Hebron City, Hebron. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: الخليل، الخليل. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "hebron",
        "backgroundEn": "Hebron includes an Israeli-controlled area known as H2. OCHA’s 2020 account describes Palestinian neighbourhoods such as Tel Rumeida alongside settlement compounds in this part of the city.",
        "backgroundAr": "تضمّ الخليل منطقة خاضعة للسيطرة الإسرائيلية تُعرف باسم H2. ويصف تقرير أوتشا لعام 2020 أحياء فلسطينية مثل تل الرميدة إلى جانب تجمّعات استيطانية في هذا الجزء من المدينة.",
        "concernsEn": "OCHA reported evacuation orders and disrupted essential services during the Israeli operation that began in Hebron on 23 October 2026.",
        "concernsAr": "أفادت أوتشا بأوامر إخلاء وتعطّل خدمات أساسية خلال العملية الإسرائيلية التي بدأت في الخليل في 23 أكتوبر 2026.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Hebron operation",
                "supportAr": "العملية في الخليل"
            },
            {
                "labelEn": "UN OCHA — Dignity denied: Hebron H2 (2020 bulletin)",
                "labelAr": "أوتشا — الكرامة المسلوبة: منطقة H2 في الخليل (نشرة 2020)",
                "url": "https://www.ochaopt.org/content/dignity-denied-life-settlement-area-hebron-city",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "H2 neighbourhood and settlement context",
                "supportAr": "سياق الأحياء والتجمّعات الاستيطانية في H2",
                "publicationPeriod": "2020-01/2020-02"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 22, Sawa News Agency published photographs and resident accounts documenting movement restrictions during a weekly Israeli settler tour through Hebron's Old City. Palestinian residents reported that Israeli forces escorted the groups while imposing restrictions that obstructed their movement through the narrow streets of the historic district.\n\nThe restrictions continue to affect everyday life for Palestinian residents living within the Old City.\n\nChildren affected by earlier displacement in Hebron City also continue to require humanitarian assistance. In its November 26 humanitarian report, UN OCHA documented that humanitarian partners provided psychological first aid to approximately 5,000 students in displacement-affected communities within the city between November 15 and 22.\n\nThese developments highlight the continuing humanitarian consequences of military operations and movement restrictions for Hebron's Palestinian residents.\n\nImmediate concerns include children's psychological well-being, reliable access to education, freedom of movement and the protection of families remaining in the Old City.",
            "textAr": "في 22 نوفمبر، نشرت وكالة سوا الإخبارية صوراً وشهادات لسكان توثق القيود المفروضة على الحركة خلال جولة أسبوعية للمستوطنين الإسرائيليين في البلدة القديمة بمدينة الخليل. وأفاد سكان فلسطينيون بأن القوات الإسرائيلية رافقت مجموعات المستوطنين وفرضت قيوداً أعاقت حركة السكان عبر الأزقة الضيقة في المنطقة التاريخية.\n\nوتواصل هذه القيود التأثير على الحياة اليومية للسكان الفلسطينيين المقيمين في البلدة القديمة.\n\nكما لا يزال الأطفال المتضررون من عمليات التهجير السابقة في مدينة الخليل بحاجة إلى المساعدة الإنسانية. وفي تقريره الإنساني الصادر في 26 نوفمبر، وثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية تقديم الشركاء الإنسانيين الإسعافات النفسية الأولية لنحو 5000 طالب في المجتمعات المتضررة من التهجير داخل المدينة، خلال الفترة من 15 إلى 22 نوفمبر.\n\nوتسلط هذه التطورات الضوء على استمرار الآثار الإنسانية للعمليات العسكرية والقيود المفروضة على حركة السكان الفلسطينيين في الخليل.\n\nوتشمل المخاوف العاجلة الصحة النفسية للأطفال، وضمان الوصول إلى التعليم، وحرية الحركة، وحماية العائلات التي لا تزال تقيم في البلدة القديمة.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Sawa News Agency — Weekly Settler Tour Restricts Palestinian Movement in Hebron — November 22, 2026",
                    "labelAr": "وكالة سوا الإخبارية — جولة أسبوعية للمستوطنين تعيق حركة الفلسطينيين في الخليل — ٢٢ نوفمبر ٢٠٢٦",
                    "url": "https://palsawa.com/en/gallery/2026/11/22/weekly-settler-tour-restricts-palestinian-movement-in-hebron"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Child Protection in Hebron City — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: حماية الأطفال في مدينة الخليل — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.0638%2C31.50935%2C35.1238%2C31.54935&layer=mapnik&marker=31.52935%2C35.0938",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.52935&mlon=35.0938#map=13/31.52935/35.0938",
            "captionEn": "Approximate Hebron City location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لمدينة الخليل، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Hebron City location",
            "titleAr": "الموقع التقريبي لمدينة الخليل",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.52935,
            "longitude": 35.0938,
            "geographicReferenceUrl": "https://www.geonames.org/285066/hebron.html"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 16, a European Union delegation visited Hebron's Old City to review conditions facing Palestinian residents. The Hebron Rehabilitation Committee briefed the delegation on local challenges and accompanied representatives through the area.\n\nThe visit followed a ten-day Israeli military operation that ended November 2. UN OCHA reported that approximately 3,000 Palestinians had been displaced from the Jildah and Ein Deir Bahah neighborhoods, although the figure remained under verification.\n\nFamilies returning home reported damaged belongings and homes used as military positions. Humanitarian organizations continued assessing damage and arranging shelter repairs. OCHA reported that approximately 500 food parcels had been mobilized for distribution through municipal teams.\n\nIn the city's H2 area, residents also face longstanding checkpoint restrictions affecting access to homes, schools, healthcare, markets, and the Ibrahimi Mosque.\n\nThe immediate priorities remain safe movement, adequate shelter, and assistance for families recovering from the operation.",
                "textAr": "في 16 نوفمبر، زار وفد من الاتحاد الأوروبي البلدة القديمة في الخليل للاطلاع على الظروف التي يواجهها السكان الفلسطينيون. وقد أطلعت لجنة إعمار الخليل الوفد على التحديات المحلية، ورافقت ممثليه في جولة ميدانية بالمنطقة.\n\nوجاءت الزيارة عقب عملية عسكرية إسرائيلية استمرت عشرة أيام وانتهت في 2 نوفمبر. وأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن نحو 3,000 فلسطيني نزحوا من حيي جلدة وعين دير بحّة، مع الإشارة إلى أن أعداد النازحين لا تزال قيد التحقق.\n\nوأبلغت عائلات عادت إلى منازلها عن أضرار في ممتلكاتها ومنازل استُخدمت مواقع عسكرية. وواصلت المنظمات الإنسانية تقييم الأضرار وترتيب إصلاحات للمساكن. كما أفاد المكتب بتجهيز نحو 500 طرد غذائي لتوزيعها عبر فرق البلدية.\n\nوفي منطقة H2 من المدينة، يواجه السكان أيضًا قيودًا طويلة الأمد عند الحواجز، تؤثر في الوصول إلى المنازل والمدارس والرعاية الصحية والأسواق والمسجد الإبراهيمي.\n\nوتبقى الأولويات العاجلة ضمان حرية الحركة بأمان، وتوفير المأوى الملائم، ومساعدة العائلات المتضررة من العملية العسكرية.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 16, 2026",
                        "labelAr": "وفا — ١٦ نوفمبر ٢٠٢٦",
                        "url": "https://english.wafa.ps/Pages/Details/176995"
                    },
                    {
                        "labelEn": "UN OCHA — November 13, 2026",
                        "labelAr": "أوتشا — ١٣ نوفمبر ٢٠٢٦",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                    },
                    {
                        "labelEn": "UN OCHA — November 5, 2026",
                        "labelAr": "أوتشا — ٥ نوفمبر ٢٠٢٦",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-5-november-2026"
                    },
                    {
                        "labelEn": "UN OCHA — July 10, 2026 (historical H2 context)",
                        "labelAr": "أوتشا — ١٠ يوليو ٢٠٢٦ (السياق التاريخي لمنطقة H2)",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-10-july-2026"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "Following the end of a ten-day Israeli military operation on November 2, displaced Palestinian families began returning to their homes in Hebron's Jildah and Ein Deir Bahah neighborhoods. UN OCHA reported that more than 3,000 residents had reportedly been displaced, although the figure remained under verification. Families returned to damaged homes and belongings, while 11 schools serving approximately 4,450 students remained inaccessible on November 1–2. Humanitarian organizations continued assessing damage and providing emergency assistance to affected families.",
            "textAr": "بعد انتهاء عملية عسكرية إسرائيلية استمرت عشرة أيام في 2 تشرين الثاني/نوفمبر، بدأت العائلات الفلسطينية المهجّرة بالعودة إلى منازلها في حيَّي الجَلَدة وعين دير بَحَّة بمدينة الخليل. وذكر مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية أن التقارير أشارت إلى تهجير أكثر من 3,000 شخص، مع بقاء هذا العدد قيد التحقق. وعادت العائلات لتجد أضرارًا في المنازل والممتلكات، بينما تعذّر الوصول إلى 11 مدرسة تضم نحو 4,450 طالبًا يومي 1 و2 تشرين الثاني/نوفمبر. وواصلت المنظمات الإنسانية تقييم الأضرار وتقديم المساعدات الطارئة للأسر المتضررة.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, November 5, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 5 نوفمبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-5-november-2026"
                },
                {
                    "labelEn": "WAFA — Hebron military withdrawal, November 2, 2026",
                    "labelAr": "وفا — الانسحاب العسكري من الخليل، 2 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176537"
                }
            ]
        },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "Following an October 23 shooting attack that killed two Israeli soldiers, Israeli forces launched a large-scale operation in Hebron City, imposing movement restrictions, conducting raids, and ordering residents to evacuate parts of the city. According to Hebron Municipality, approximately 3,000 Palestinians were displaced, although the UN reported that this figure was still being verified; the restrictions also disrupted access to schools, healthcare, and essential services.",
                "textAr": "عقب هجوم بإطلاق نار في 23 أكتوبر أسفر عن مقتل جنديين إسرائيليين، شنت القوات الإسرائيلية عملية واسعة النطاق في مدينة الخليل، وفرضت قيودًا على الحركة، ونفذت مداهمات، وأمرت السكان بإخلاء أجزاء من المدينة. ووفقًا لبلدية الخليل، نزح نحو 3,000 فلسطيني، إلا أن الأمم المتحدة أفادت بأن هذا الرقم لا يزال قيد التحقق؛ كما عطلت القيود الوصول إلى المدارس والرعاية الصحية والخدمات الأساسية.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — October 30, 2026",
                        "labelAr": "وفا — 30 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176455"
                    },
                    {
                        "labelEn": "Anadolu Agency — October 31, 2026",
                        "labelAr": "وكالة الأناضول — 31 أكتوبر 2026",
                        "url": "https://mobile.aa.com.tr/en/middle-east/israeli-army-tightens-restrictions-in-occupied-west-banks-hebron-as-offensive-enters-9th-day/4107145"
                    }
                ]
            }
        ]
    },
    {
        "id": "jenin-refugee-camp",
        "nameEn": "Jenin Refugee Camp",
        "nameAr": "مخيم جنين",
        "governorateId": "jenin",
        "governorateEn": "Jenin",
        "governorateAr": "جنين",
        "descriptionEn": "Community overview: Jenin Refugee Camp, Jenin. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: مخيم جنين، جنين. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.hrw.org/report/2025/11/20/all-my-dreams-have-been-erased/israels-forced-displacement-of-palestinians-in-the",
        "sourcePublicationDate": "2025-11-20",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "jenin",
        "backgroundEn": "Jenin refugee camp was established in 1953 within Jenin city’s municipal boundaries. UNRWA España traces many residents’ origins to the Haifa and Carmel region.",
        "backgroundAr": "أُنشئ مخيم جنين عام 1953 داخل الحدود البلدية لمدينة جنين. وتربط الأونروا إسبانيا أصول كثير من سكانه بمنطقة حيفا والكرمل.",
        "concernsEn": "Human Rights Watch documented extensive building destruction in Jenin camp using satellite imagery from July 2025, following Israeli operations.",
        "concernsAr": "وثّقت هيومن رايتس ووتش دمارًا واسعًا للمباني في مخيم جنين باستخدام صور أقمار صناعية من يوليو 2025، عقب عمليات إسرائيلية.",
        "sources": [
            {
                "labelEn": "Human Rights Watch — All My Dreams Have Been Erased, 20 November 2025",
                "labelAr": "هيومن رايتس ووتش — مُحيت كل أحلامي، 20 نوفمبر 2025",
                "url": "https://www.hrw.org/report/2025/11/20/all-my-dreams-have-been-erased/israels-forced-displacement-of-palestinians-in-the",
                "reportDate": null,
                "publicationDate": "2025-11-20",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Jenin camp satellite assessment",
                "supportAr": "تقييم صور الأقمار الصناعية لمخيم جنين"
            },
            {
                "labelEn": "UNRWA España — Jenin camp background (undated)",
                "labelAr": "الأونروا إسبانيا — خلفية مخيم جنين (دون تاريخ نشر)",
                "url": "https://unrwa.es/campamento/jenin/",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Camp establishment and location",
                "supportAr": "تأسيس المخيم وموقعه"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "The ongoing Israeli military operation in Jenin refugee camp continues to affect Palestinian families living in surrounding residential neighborhoods.\n\nOn November 23, Israeli forces displaced eleven residents from three households in a residential building in Al Hadaf, citing the building's location within the military operation area associated with Jenin refugee camp.\n\nAccording to an affected resident interviewed by UN OCHA, the families received approximately ten minutes to leave their homes. They are temporarily sheltering with relatives.\n\nThis latest displacement follows extensive destruction inside the refugee camp itself. A UN Human Rights report published on September 4, 2026, documented that 52 percent of the camp's structures had been damaged or destroyed by October 2025. The report also documented restrictions preventing displaced residents from returning.\n\nThe immediate humanitarian concerns remain secure accommodation for displaced families, access to personal property and essential services, and the ability of refugee camp residents to return safely to their homes.",
            "textAr": "تواصل العملية العسكرية الإسرائيلية المستمرة في مخيم جنين للاجئين التأثير على العائلات الفلسطينية المقيمة في الأحياء السكنية المحيطة بالمخيم.\n\nوفي 23 نوفمبر، هجّرت القوات الإسرائيلية أحد عشر شخصاً من ثلاث أسر من مبنى سكني في حي الهدف، بحجة وقوع المبنى ضمن نطاق العملية العسكرية المرتبطة بمخيم جنين.\n\nووفقاً لأحد السكان المتضررين الذين قابلهم مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، مُنحت العائلات نحو عشر دقائق لمغادرة منازلها. وتقيم هذه العائلات مؤقتاً لدى أقاربها.\n\nويأتي هذا التهجير الجديد في أعقاب الدمار الواسع داخل المخيم نفسه. وقد وثّق تقرير صادر عن مكتب الأمم المتحدة لحقوق الإنسان في 4 سبتمبر 2026 تضرر أو تدمير 52 بالمئة من منشآت المخيم بحلول أكتوبر 2025. كما وثّق التقرير القيود التي تمنع السكان المهجرين من العودة.\n\nوتظل المخاوف الإنسانية العاجلة تتمثل في توفير مأوى آمن للعائلات المهجرة، وضمان الوصول إلى الممتلكات الشخصية والخدمات الأساسية، وتمكين سكان المخيم من العودة الآمنة إلى منازلهم.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Jenin Displacement — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: التهجير في جنين — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                },
                {
                    "labelEn": "UN Human Rights — Destruction and Displacement in West Bank Refugee Camps — September 4, 2026",
                    "labelAr": "الأمم المتحدة لحقوق الإنسان — الدمار والتهجير في مخيمات اللاجئين بالضفة الغربية — ٤ سبتمبر ٢٠٢٦",
                    "url": "https://palestine.un.org/en/322146-israeli-forces-expelled-palestinian-refugees-three-west-bank-camps-violation-international"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.27778%2C32.45033%2C35.29778%2C32.47033&layer=mapnik&marker=32.46033%2C35.28778",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.46033&mlon=35.28778#map=15/32.46033/35.28778",
            "captionEn": "Approximate Jenin Refugee Camp location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لمخيم جنين للاجئين، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Jenin Refugee Camp location",
            "titleAr": "الموقع التقريبي لمخيم جنين للاجئين",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.46033,
            "longitude": 35.28778
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "Jenin Refugee Camp remains at the center of a prolonged displacement crisis following the Israeli military operation launched on January 21, 2025.\n\nUNRWA reports that the camp was emptied of its residents and that its four schools and health centre remain inaccessible. Education and healthcare services are being provided to displaced families at alternative locations.\n\nHuman Rights Watch documented widespread destruction and forced displacement in Jenin, Tulkarm, and Nur Shams refugee camps, finding that Israeli authorities had prevented displaced residents from returning to their homes.\n\nThe humanitarian consequences extend beyond damaged buildings. Families have lost access to their neighborhoods, schools, healthcare facilities, and established community networks.\n\nAs of this November 19 reporting update, no new camp-specific incident during November 12–18 has been independently confirmed from the sources reviewed.\n\nThe immediate priorities remain safe return, protection of displaced families, access to essential services, and reconstruction of damaged homes and infrastructure.",
                "textAr": "لا يزال مخيم جنين للاجئين يواجه أزمة نزوح طويلة الأمد منذ بدء العملية العسكرية الإسرائيلية في 21 يناير 2025.\n\nوتفيد وكالة الأونروا بأن المخيم أُفرغ من سكانه، وأن مدارسه الأربع ومركزه الصحي لا تزال غير متاحة. وتُقدَّم خدمات التعليم والرعاية الصحية للأسر النازحة في مواقع بديلة.\n\nووثقت منظمة هيومن رايتس ووتش دمارًا واسع النطاق وتهجيرًا قسريًا في مخيمات جنين وطولكرم ونور شمس، وخلصت إلى أن السلطات الإسرائيلية منعت السكان النازحين من العودة إلى منازلهم.\n\nولا تقتصر الآثار الإنسانية على المباني المتضررة، إذ فقدت العائلات إمكانية الوصول إلى أحيائها ومدارسها ومرافقها الصحية وشبكاتها المجتمعية.\n\nوحتى إعداد هذا التقرير بتاريخ 19 نوفمبر، لم يتأكد بشكل مستقل وقوع حادث جديد داخل المخيم تحديدًا خلال الفترة من 12 إلى 18 نوفمبر، استنادًا إلى المصادر التي جرت مراجعتها.\n\nوتبقى الأولويات العاجلة ضمان العودة الآمنة وحماية الأسر النازحة والوصول إلى الخدمات الأساسية وإعادة إعمار المنازل والبنية التحتية المتضررة.",
                "sources": [
                    {
                        "labelEn": "UNRWA — Jenin Camp, January 7, 2026 (historical and ongoing conditions)",
                        "labelAr": "الأونروا — مخيم جنين، ٧ يناير ٢٠٢٦ (الظروف التاريخية والمستمرة)",
                        "url": "https://www.unrwa.org/where-we-work/our-locations/occupied-west-bank-including-east-jerusalem/jenin-camp"
                    },
                    {
                        "labelEn": "Human Rights Watch — All My Dreams Have Been Erased, November 20, 2025 (historical and ongoing conditions)",
                        "labelAr": "هيومن رايتس ووتش — مُحيت كل أحلامي، ٢٠ نوفمبر ٢٠٢٥ (الظروف التاريخية والمستمرة)",
                        "url": "https://www.hrw.org/report/2025/11/20/all-my-dreams-have-been-erased/israels-forced-displacement-of-palestinians-in-the"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "Displacement and restrictions affecting Palestinian residents of Jenin Refugee Camp remain serious humanitarian concerns. During the November 1–11 reporting period, Israeli military operations continued in the wider Jenin area. On November 4, WAFA reported a six-hour Israeli raid in eastern Jenin involving detentions and field interrogations. This incident was reported in Jenin city, not specifically inside the refugee camp. Available reporting does not establish a separate new attack inside Jenin Refugee Camp during this reporting period.",
            "textAr": "لا يزال النزوح والقيود التي تؤثر على السكان الفلسطينيين في مخيم جنين للاجئين من القضايا الإنسانية الخطيرة. وخلال الفترة من 1 إلى 11 نوفمبر، استمرت العمليات العسكرية الإسرائيلية في منطقة جنين الأوسع. وفي 4 نوفمبر، أفادت وكالة وفا بتنفيذ اقتحام إسرائيلي استمر ست ساعات في شرق مدينة جنين، وشمل احتجاز أشخاص وإجراء تحقيقات ميدانية. وقد وقع الحادث المبلغ عنه في مدينة جنين، وليس داخل مخيم اللاجئين تحديدًا. ولا تثبت التقارير المتاحة وقوع هجوم جديد منفصل داخل مخيم جنين للاجئين خلال فترة التقرير.",
            "sources": [
                {
                    "labelEn": "WAFA — Eastern Jenin city six-hour raid, November 4, 2026",
                    "labelAr": "وفا — اقتحام شرق مدينة جنين لمدة ست ساعات، 4 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176641"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, August 7, 2026 (historical displacement and access context)",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 7 أغسطس 2026 (سياق تاريخي للنزوح وقيود الوصول)",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-7-august-2026"
                }
            ]
        },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "As of late October, Palestinian refugees displaced from Jenin, Tulkarm, and Nur Shams camps remained unable to return to their homes following prolonged Israeli military operations and access restrictions. On October 28, UNRWA's West Bank director reiterated that more than 34,000 refugees from these three camps remained displaced, highlighting the continuing humanitarian consequences of the operations that began in 2025.",
                "textAr": "حتى أواخر أكتوبر، ظل اللاجئون الفلسطينيون النازحون من مخيمات جنين وطولكرم ونور شمس غير قادرين على العودة إلى منازلهم، في أعقاب العمليات العسكرية الإسرائيلية المطولة والقيود المفروضة على الوصول. وفي 28 أكتوبر، أكد مدير شؤون الأونروا في الضفة الغربية مجددًا أن أكثر من 34,000 لاجئ من هذه المخيمات الثلاثة ما زالوا نازحين، مسلطًا الضوء على استمرار التداعيات الإنسانية للعمليات التي بدأت في عام 2025.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 27, 2026",
                        "labelAr": "وفا — 27 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176396"
                    },
                    {
                        "labelEn": "Arab News — October 28, 2026",
                        "labelAr": "عرب نيوز — 28 أكتوبر 2026",
                        "url": "https://www.arabnews.com/middle-east/unrwa-warns-of-worsening-humanitarian-situation-as-3000-displaced-in-hebron-3008671"
                    },
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, August 7, 2026 (historical context)",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 7 أغسطس 2026 (سياق تاريخي)",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-7-august-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "yabad",
        "nameEn": "Ya'bad",
        "nameAr": "يعبد",
        "governorateId": "jenin",
        "governorateEn": "Jenin",
        "governorateAr": "جنين",
        "descriptionEn": "Community overview: Ya'bad, Jenin. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: يعبد، جنين. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "jenin",
        "backgroundEn": "Ya'bad is a Palestinian town southwest of Jenin. A July 2026 Ministry of Agriculture account describes a local project to reclaim and build agricultural roads, illustrating the town’s farming infrastructure.",
        "backgroundAr": "يعبد بلدة فلسطينية جنوب غرب جنين. ويصف بيان لوزارة الزراعة في يوليو 2026 مشروعًا محليًا لاستصلاح طرق زراعية وإنشائها، بما يوضح جانبًا من بنيتها الزراعية.",
        "concernsEn": "OCHA reported that farmers in Ya'bad were denied access to land despite prior coordination during 20–26 October 2026.",
        "concernsAr": "أفادت أوتشا بمنع مزارعين في يعبد من الوصول إلى أراضيهم رغم التنسيق المسبق خلال 20–26 أكتوبر 2026.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Coordinated farmland access",
                "supportAr": "الوصول المنسّق إلى الأراضي الزراعية"
            },
            {
                "labelEn": "WAFA — Ya’bad road gates, 12 October 2026",
                "labelAr": "وفا — بوابات طرق يعبد، 12 أكتوبر 2026",
                "url": "https://english.wafa.ps/Pages/Details/175763",
                "reportDate": null,
                "publicationDate": "2026-10-12",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Town identity and location southwest of Jenin",
                "supportAr": "هوية البلدة وموقعها جنوب غرب جنين"
            },
            {
                "labelEn": "Palestinian Ministry of Agriculture — Jenin projects, 13 July 2026",
                "labelAr": "وزارة الزراعة الفلسطينية — مشاريع جنين، 13 يوليو 2026",
                "url": "https://www.moa.pna.ps/en/ozyr-alzraaa-yftth-oytfkd-msharyaa-tnmoy-oantagy-oyokaa-atfakytyn",
                "reportDate": null,
                "publicationDate": "2026-07-13",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Ya’bad agricultural roads project",
                "supportAr": "مشروع الطرق الزراعية في يعبد"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 22, Israeli forces entered Ya'bad and conducted searches of several Palestinian residential properties. According to local sources cited by WAFA and Safa Press Agency, soldiers restrained a Palestinian resident inside his home and subjected him to a severe beating before withdrawing from the town. The reports did not identify the resident or provide further medical information.\n\nThe incident follows earlier attacks affecting Ya'bad's agricultural community. On November 13, local sources reported that Israeli settlers attacked olive harvesters near Khirbet Srouj, west of Ya'bad, including members of the Houshiya family. Harvested olives and agricultural equipment were reportedly stolen.\n\nWAFA also reported that a settlement outpost had been established in Khirbet Srouj following the displacement of its Palestinian residents in preceding months.\n\nThese incidents illustrate the pressures facing Ya'bad's residents both within their homes and on surrounding agricultural land. Residential safety, access to farmland and the protection of agricultural livelihoods remain significant humanitarian concerns.",
            "textAr": "في 22 نوفمبر، اقتحمت القوات الإسرائيلية بلدة يعبد وفتشت عدداً من المنازل الفلسطينية. ووفقاً لمصادر محلية نقلت عنها وكالة وفا ووكالة صفا للأنباء، قيّد الجنود أحد المواطنين الفلسطينيين داخل منزله واعتدوا عليه بالضرب المبرح قبل انسحابهم من البلدة. ولم تحدد التقارير هوية المواطن أو تقدم معلومات طبية إضافية عن حالته.\n\nوتأتي هذه الحادثة في أعقاب اعتداءات سابقة طالت المجتمع الزراعي في يعبد. ففي 13 نوفمبر، أفادت مصادر محلية بأن مستوطنين إسرائيليين اعتدوا على قاطفي الزيتون بالقرب من خربة سروج، غرب يعبد، ومن بينهم أفراد من عائلة حوشية. كما أفادت المصادر بسرقة كميات من الزيتون الذي تم قطفه ومعدات زراعية.\n\nوأفادت وكالة وفا أيضاً بإقامة بؤرة استيطانية في خربة سروج عقب تهجير سكانها الفلسطينيين خلال الأشهر السابقة.\n\nوتوضح هذه الحوادث الضغوط التي يواجهها سكان يعبد داخل منازلهم وفي الأراضي الزراعية المحيطة بها. ولا تزال سلامة السكان والوصول إلى الأراضي الزراعية وحماية سبل العيش الزراعية من أبرز المخاوف الإنسانية.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "WAFA — Military Raids and Assault on Palestinian Resident in Ya'bad — November 22, 2026",
                    "labelAr": "وفا — اقتحام يعبد والاعتداء على مواطن فلسطيني — ٢٢ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177199"
                },
                {
                    "labelEn": "Safa Press Agency — Military Incursions and Assault in Ya'bad — November 22, 2026",
                    "labelAr": "صفا — قوات الاحتلال تقتحم مناطق جنوب جنين وتعتدي على مواطن — ٢٢ نوفمبر ٢٠٢٦",
                    "url": "https://safa.ps/post/424395/قوات-الاحتلال-تقتحم-مناطق-جنوب-جنين-وتعتدي-على-مواطن"
                },
                {
                    "labelEn": "WAFA — Settler Attacks Against Olive Harvesters in Ya'bad — November 13, 2026",
                    "labelAr": "وفا — اعتداء المستوطنين على قاطفي الزيتون في يعبد — ١٣ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/176897"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.15935%2C32.43634%2C35.17935%2C32.45634&layer=mapnik&marker=32.44634%2C35.16935",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.44634&mlon=35.16935#map=15/32.44634/35.16935",
            "captionEn": "Approximate Ya'bad town location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لبلدة يعبد، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Ya'bad town location",
            "titleAr": "الموقع التقريبي لبلدة يعبد",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.44634,
            "longitude": 35.16935,
            "geographicReferenceUrl": "https://mapcarta.com/28086798"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 13, Israeli settlers reportedly attacked Palestinian families harvesting olives near Khirbet Srouj, west of Ya'bad, according to local sources cited by Arab News. The families included relatives of brothers Wafiq and Muwafaq Houshiya. Settlers reportedly took harvested olives, agricultural tools, and equipment.\n\nOn November 14, Palestinian news outlets reported another Israeli military entry into Ya'bad. Available reports did not establish whether anyone was detained or injured during that entry.\n\nThe incidents followed earlier restrictions on movement. In October, WAFA reported that Israeli forces installed iron gates at entrances to Ya'bad and roads connecting neighboring villages. The municipality warned that these barriers obstruct travel to schools, workplaces, healthcare facilities, and emergency services.\n\nThe immediate concerns are residents' safety, protection of agricultural livelihoods, and reliable access to roads and essential services.",
                "textAr": "في 13 نوفمبر، أفادت مصادر محلية نقلت عنها صحيفة عرب نيوز بأن مستوطنين إسرائيليين اعتدوا على عائلات فلسطينية كانت تقطف الزيتون قرب خربة صروج غرب يعبد. وشملت العائلات أقارب الشقيقين وفيق وموفق حوشية. وبحسب التقارير، استولى المستوطنون على الزيتون المقطوف وأدوات ومعدات زراعية.\n\nوفي 14 نوفمبر، أفادت وسائل إعلام فلسطينية بدخول قوات إسرائيلية إلى يعبد مرة أخرى. ولم تؤكد التقارير المتاحة وقوع اعتقالات أو إصابات خلال هذا الدخول.\n\nوجاءت هذه الحوادث بعد قيود سابقة على الحركة. ففي أكتوبر، ذكرت وكالة وفا أن القوات الإسرائيلية نصبت بوابات حديدية عند مداخل يعبد وعلى الطرق التي تربط القرى المجاورة. وحذرت البلدية من أن هذه الحواجز تعيق الوصول إلى المدارس وأماكن العمل والمرافق الصحية وخدمات الطوارئ.\n\nوتتمثل المخاوف العاجلة في سلامة السكان وحماية سبل العيش الزراعية وضمان الوصول المنتظم إلى الطرق والخدمات الأساسية.",
                "sources": [
                    {
                        "labelEn": "Arab News — November 13, 2026",
                        "labelAr": "عرب نيوز — 13 نوفمبر 2026",
                        "url": "https://arabnews.maestronewsroom.com/middle-east/settlers-attack-palestinian-olive-harvesters-in-jenin-3011740"
                    },
                    {
                        "labelEn": "Palestine Post / Nabd — November 14, 2026",
                        "labelAr": "فلسطين بوست / نبض — 14 نوفمبر 2026",
                        "url": "https://nabd.com/s/180821407-ed3d25/"
                    },
                    {
                        "labelEn": "WAFA — October 12, 2026 (historical context)",
                        "labelAr": "وفا — 12 أكتوبر 2026 (سياق تاريخي)",
                        "url": "https://english.wafa.ps/Pages/Details/175763"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 11, reports described Israeli forces entering Ya'bad, southwest of Jenin, raiding a Palestinian home and arresting a resident. The incident adds to concerns about military raids, arrests, and restrictions affecting Palestinian communities in the Jenin governorate.",
            "textAr": "في 11 نوفمبر، أفادت تقارير بدخول القوات الإسرائيلية إلى بلدة يعبد جنوب غرب جنين، ومداهمة منزل فلسطيني واعتقال أحد السكان. ويضاف هذا الحادث إلى المخاوف المتعلقة بالاقتحامات العسكرية والاعتقالات والقيود التي تؤثر على التجمعات الفلسطينية في محافظة جنين.",
            "sources": [
                {
                    "labelEn": "WAFA — Jenin governorate arrests, including Ya'bad, November 11, 2026 (Arabic)",
                    "labelAr": "وفا — الاحتلال يعتقل 5 مواطنين من جنين، بما يشمل يعبد، 11 نوفمبر 2026",
                    "url": "https://www.wafa.ps/news/2026/11/11/الاحتلال-يعتقل-5-مواطنين-من-جنين"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 20, Israeli forces prevented Palestinian farmers in Ya'bad from accessing their agricultural land for the olive harvest, despite prior coordination, and reportedly detained several residents. On October 25, Israeli forces closed iron gates at the entrances to Ya'bad and neighboring towns, restricting residents' movement and access to surrounding agricultural land.",
                "textAr": "في 20 أكتوبر، منعت القوات الإسرائيلية المزارعين الفلسطينيين في يعبد من الوصول إلى أراضيهم الزراعية لقطف الزيتون، رغم التنسيق المسبق، وأفادت تقارير بأنها احتجزت عددًا من السكان. وفي 25 أكتوبر، أغلقت القوات الإسرائيلية بوابات حديدية عند مداخل يعبد وبلدات مجاورة، مما قيّد حركة السكان ووصولهم إلى الأراضي الزراعية المحيطة.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 20, 2026",
                        "labelAr": "وفا — 20 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176103"
                    },
                    {
                        "labelEn": "WAFA — October 25, 2026",
                        "labelAr": "وفا — 25 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176261"
                    },
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "tulkarm-refugee-camp",
        "nameEn": "Tulkarm Refugee Camp",
        "nameAr": "مخيم طولكرم",
        "governorateId": "tulkarm",
        "governorateEn": "Tulkarm",
        "governorateAr": "طولكرم",
        "descriptionEn": "Community overview: Tulkarm Refugee Camp, Tulkarm. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: مخيم طولكرم، طولكرم. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
        "sourcePublicationDate": "2025-06-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "tulkarm",
        "backgroundEn": "Tulkarm refugee camp was established in 1950 within Tulkarm’s municipal boundaries in the West Bank. It is distinct from nearby Nur Shams refugee camp.",
        "backgroundAr": "أُنشئ مخيم طولكرم عام 1950 داخل الحدود البلدية لطولكرم في الضفة الغربية. وهو مخيم مختلف عن مخيم نور شمس المجاور.",
        "concernsEn": "OCHA reported that Tulkarm camp residents received a three-hour window on 29 May 2025 to retrieve belongings before planned demolitions.",
        "concernsAr": "أفادت أوتشا بأن سكان مخيم طولكرم مُنحوا مهلة ثلاث ساعات في 29 مايو 2025 لاستعادة متعلّقاتهم قبل أعمال هدم مقرّرة.",
        "sources": [
            {
                "labelEn": "UN OCHA — West Bank Update #295, 5 June 2025",
                "labelAr": "أوتشا — تحديث الضفة الغربية رقم 295، 5 يونيو 2025",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
                "reportDate": "2025-06-05",
                "publicationDate": "2025-06-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Tulkarm belongings-retrieval window",
                "supportAr": "مهلة استعادة المتعلّقات في مخيم طولكرم"
            },
            {
                "labelEn": "UNRWA España — Tulkarm camp background (undated)",
                "labelAr": "الأونروا إسبانيا — خلفية مخيم طولكرم (دون تاريخ نشر)",
                "url": "https://unrwa.es/campamento/tulkarm/",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Camp establishment and location",
                "supportAr": "تأسيس المخيم وموقعه"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Concerns surrounding the return of displaced residents to Tulkarm refugee camp center on military land seizure order 123/26, which remains valid until December 31, 2028.\n\nIn its November 18 assessment, the Palestinian Wall and Settlement Resistance Commission explained that the designated routes intersect throughout densely populated sections of the camp. Military control of these corridors could obstruct rebuilding, infrastructure restoration and access to residential properties, including homes outside the designated seizure boundaries.\n\nThe Tulkarm Camp Popular Committee previously warned on November 17 that the order threatens displaced residents' ability to recover their property and reconstruct their homes.\n\nThe prospects for reconstruction are already complicated by extensive physical destruction. UN Human Rights reported in September 2026 that 36 percent of the camp's structures had sustained damage or been destroyed by October 2025.\n\nNo additional camp-specific incident was independently verified for this week's reporting period. The longer-term concerns remain housing restoration, civilian access and the safe return of displaced refugee families.",
            "textAr": "تتركز المخاوف المتعلقة بعودة السكان المهجرين إلى مخيم طولكرم للاجئين حول أمر الاستيلاء العسكري رقم 123/26، الذي يستمر سريانه حتى 31 ديسمبر 2028.\n\nوفي تقييمها الصادر في 18 نوفمبر، أوضحت هيئة مقاومة الجدار والاستيطان الفلسطينية أن المسارات المحددة تتقاطع في أجزاء مكتظة بالسكان داخل المخيم. وقد تعيق السيطرة العسكرية على هذه المسارات إعادة الإعمار وترميم البنية التحتية والوصول إلى الممتلكات السكنية، بما في ذلك المنازل الواقعة خارج حدود الأراضي المحددة للاستيلاء.\n\nوكانت اللجنة الشعبية لخدمات مخيم طولكرم قد حذرت في 17 نوفمبر من أن الأمر يهدد قدرة السكان المهجرين على استعادة ممتلكاتهم وإعادة بناء منازلهم.\n\nوتواجه جهود إعادة الإعمار بالفعل صعوبات نتيجة الدمار المادي الواسع. فقد أفاد مكتب الأمم المتحدة لحقوق الإنسان في سبتمبر 2026 بأن 36 بالمئة من منشآت المخيم قد تضررت أو دُمرت بحلول أكتوبر 2025.\n\nولم يتم التحقق بشكل مستقل من وقوع حادثة إضافية خاصة بالمخيم خلال فترة التقرير الأسبوعي الحالي. وتظل إعادة تأهيل المساكن وضمان وصول المدنيين والعودة الآمنة لعائلات اللاجئين المهجرة من أبرز المخاوف طويلة الأمد.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "WAFA — Wall and Settlement Resistance Commission: Tulkarm Land Seizure Order — November 18, 2026",
                    "labelAr": "وفا — هيئة مقاومة الجدار والاستيطان: أمر الاستيلاء على الأراضي في طولكرم — ١٨ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177112"
                },
                {
                    "labelEn": "WAFA — Tulkarm Camp Popular Committee Warns Against Military Land Seizure — November 17, 2026",
                    "labelAr": "وفا — اللجنة الشعبية لخدمات مخيم طولكرم تحذر من الاستيلاء العسكري على الأراضي — ١٧ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177089"
                },
                {
                    "labelEn": "UN Human Rights — Destruction and Displacement in Northern West Bank Refugee Camps — September 4, 2026",
                    "labelAr": "الأمم المتحدة لحقوق الإنسان — الدمار والتهجير في مخيمات اللاجئين شمال الضفة الغربية — ٤ سبتمبر ٢٠٢٦",
                    "url": "https://palestine.un.org/en/322146-israeli-forces-expelled-palestinian-refugees-three-west-bank-camps-violation-international"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.02532%2C32.30378%2C35.04532%2C32.32378&layer=mapnik&marker=32.31378%2C35.03532",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.31378&mlon=35.03532#map=15/32.31378/35.03532",
            "captionEn": "Approximate Tulkarm Refugee Camp location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لمخيم طولكرم للاجئين، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Tulkarm Refugee Camp location",
            "titleAr": "الموقع التقريبي لمخيم طولكرم للاجئين",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.31378,
            "longitude": 35.03532,
            "geographicReferenceUrl": "https://mapcarta.com/N920077429"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 17, Tulkarm Refugee Camp's Popular Committee warned that an Israeli military order would seize land in Tulkarm and Nur Shams camps for military purposes. The order covers roads cut through demolished homes, potentially preventing displaced residents from rebuilding on those sites.\n\nOn November 18, Israeli forces sealed the northern entrance to Tulkarm Refugee Camp with earth mounds, according to eyewitnesses cited by WAFA. Explosions were heard inside the camp, with smoke rising above the area. The cause and extent of the blasts were not immediately established.\n\nResidents remain barred from returning following the military operation that began in January 2025. UNRWA reports that the camp was emptied and its schools and health centre remain inaccessible, with services provided at alternative locations.\n\nThe immediate concerns are continued displacement, blocked access, property rights, and the growing obstacles to returning home and rebuilding.",
                "textAr": "في 17 نوفمبر، حذرت اللجنة الشعبية لخدمات مخيم طولكرم من أن أمرًا عسكريًا إسرائيليًا يقضي بالاستيلاء على أراضٍ داخل مخيمي طولكرم ونور شمس لأغراض عسكرية. ويشمل الأمر طرقًا شُقت عبر أنقاض منازل مهدمة، مما قد يمنع السكان النازحين من إعادة البناء في تلك المواقع.\n\nوفي 18 نوفمبر، أغلقت القوات الإسرائيلية المدخل الشمالي لمخيم طولكرم بسواتر ترابية، وفقًا لشهود عيان نقلت عنهم وكالة وفا. وسُمعت انفجارات داخل المخيم، وشوهد الدخان يتصاعد من المنطقة. ولم تتضح على الفور أسباب الانفجارات أو حجم آثارها.\n\nولا يزال السكان ممنوعين من العودة منذ العملية العسكرية التي بدأت في يناير 2025. وتفيد الأونروا بأن المخيم أُفرغ من سكانه، وأن مدارسه ومركزه الصحي لا تزال غير متاحة، بينما تُقدَّم الخدمات في مواقع بديلة.\n\nوتبقى المخاوف العاجلة استمرار النزوح وإغلاق طرق الوصول وحقوق الملكية وتزايد العقبات أمام العودة وإعادة الإعمار.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 17, 2026",
                        "labelAr": "وفا — 17 نوفمبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/177089"
                    },
                    {
                        "labelEn": "WAFA — November 18, 2026",
                        "labelAr": "وفا — 18 نوفمبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/177106"
                    },
                    {
                        "labelEn": "UNRWA — Tulkarm Camp, January 3, 2026 (historical and ongoing conditions)",
                        "labelAr": "الأونروا — مخيم طولكرم، 3 يناير 2026 (الظروف التاريخية والمستمرة)",
                        "url": "https://www.unrwa.org/where-we-work/our-locations/occupied-west-bank-including-east-jerusalem/tulkarm-camp"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 4, WAFA reported that Israeli forces ordered 25 families from homes in the western area near Tulkarm Refugee Camp and converted several houses into military positions. Forces also posted a warning at the entrance to the camp's al-Balawneh neighborhood, declaring the camp a closed military zone. The reported measures further restricted access to the camp and affected nearby residents.",
            "textAr": "في 4 نوفمبر، أفادت وكالة وفا بأن القوات الإسرائيلية أجبرت 25 عائلة على مغادرة منازلها في المنطقة الغربية القريبة من مخيم طولكرم للاجئين، وحوّلت عدة منازل إلى مواقع عسكرية. كما وضعت القوات لافتة تحذيرية عند مدخل حي البلاونة في المخيم، تعلن المخيم منطقة عسكرية مغلقة. وأدت الإجراءات المبلغ عنها إلى فرض مزيد من القيود على الوصول إلى المخيم والتأثير على السكان المجاورين.",
            "sources": [
                {
                    "labelEn": "WAFA — Tulkarm camp access restrictions and nearby displacement, November 4, 2026",
                    "labelAr": "وفا — قيود الوصول إلى مخيم طولكرم ونزوح السكان المجاورين، 4 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176659"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "As of late October, Palestinian refugees displaced from Tulkarm, Jenin, and Nur Shams camps remained unable to return to their homes following Israeli military operations that began in early 2025. On October 27, UNRWA's West Bank director, Roland Friedrich, stated that more than 34,000 refugees from the three camps combined remained displaced, underscoring the continuing humanitarian impact on these communities.",
                "textAr": "حتى أواخر أكتوبر، ظل اللاجئون الفلسطينيون النازحون من مخيمات طولكرم وجنين ونور شمس غير قادرين على العودة إلى منازلهم، في أعقاب العمليات العسكرية الإسرائيلية التي بدأت مطلع عام 2025. وفي 27 أكتوبر، صرّح مدير شؤون الأونروا في الضفة الغربية، رولاند فريدريش، بأن أكثر من 34,000 لاجئ من المخيمات الثلاثة مجتمعة ما زالوا نازحين، مما يسلط الضوء على استمرار التداعيات الإنسانية على هذه المجتمعات.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 27, 2026",
                        "labelAr": "وفا — 27 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176396"
                    },
                    {
                        "labelEn": "WAFA — September 4, 2026, UN human-rights report (historical context)",
                        "labelAr": "وفا — 4 سبتمبر 2026، تقرير الأمم المتحدة لحقوق الإنسان (سياق تاريخي)",
                        "url": "https://english.wafa.ps/Pages/Details/174369"
                    }
                ]
            }
        ]
    },
    {
        "id": "nur-shams-refugee-camp",
        "nameEn": "Nur Shams Refugee Camp",
        "nameAr": "مخيم نور شمس",
        "governorateId": "tulkarm",
        "governorateEn": "Tulkarm",
        "governorateAr": "طولكرم",
        "descriptionEn": "Community overview: Nur Shams Refugee Camp, Tulkarm. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: مخيم نور شمس، طولكرم. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
        "sourcePublicationDate": "2025-06-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "tulkarm",
        "backgroundEn": "Nur Shams refugee camp was established in 1952 east of Tulkarm. UNRWA España records that its original refugees came from villages around Haifa.",
        "backgroundAr": "أُنشئ مخيم نور شمس عام 1952 شرق طولكرم. وتذكر الأونروا إسبانيا أن لاجئيه الأصليين جاؤوا من قرى حول حيفا.",
        "concernsEn": "In June 2025, OCHA reported demolitions in Nur Shams camp and Israeli access restrictions preventing humanitarian assessments inside it.",
        "concernsAr": "في يونيو 2025، أفادت أوتشا بعمليات هدم في مخيم نور شمس وبقيود وصول إسرائيلية حالت دون إجراء تقييمات إنسانية داخله.",
        "sources": [
            {
                "labelEn": "UN OCHA — West Bank Update #295, 5 June 2025",
                "labelAr": "أوتشا — تحديث الضفة الغربية رقم 295، 5 يونيو 2025",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
                "reportDate": "2025-06-05",
                "publicationDate": "2025-06-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Nur Shams demolition and assessment access",
                "supportAr": "الهدم وإمكانية التقييم في مخيم نور شمس"
            },
            {
                "labelEn": "UNRWA España — Nur Shams camp background (undated)",
                "labelAr": "الأونروا إسبانيا — خلفية مخيم نور شمس (دون تاريخ نشر)",
                "url": "https://unrwa.es/campamento/nur-shams/",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Camp establishment and location",
                "supportAr": "تأسيس المخيم وموقعه"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Updated displacement statistics published by UN OCHA in November record 9,207 Palestinians displaced from Nur Shams refugee camp during Israeli military operations in 2025, based on UNRWA data available in September 2026.\n\nOn November 24, the Palestinian Cabinet reported that residents of Nur Shams and Tulkarm refugee camps had endured 666 consecutive days of displacement. The Cabinet reaffirmed UNRWA's mandate and called for sustained funding for essential refugee services.\n\nThe prospects for returning home remain complicated by the military land seizure order reported on November 17. The order covers roads created through areas where residential buildings were demolished, raising concerns about future reconstruction.\n\nA September 2026 UN Human Rights assessment found that 48 percent of structures in Nur Shams had been damaged or destroyed by October 2025. OCHA also reported in September that both UNRWA school buildings inside the camp remained inaccessible.\n\nThe immediate humanitarian priorities remain secure accommodation, continuity of education and healthcare, restoration of infrastructure and safe return for displaced families.",
            "textAr": "تشير إحصاءات النزوح المحدثة التي نشرها مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في نوفمبر إلى تهجير 9207 فلسطينيين من مخيم نور شمس للاجئين خلال العمليات العسكرية الإسرائيلية في عام 2025، استناداً إلى بيانات الأونروا المتاحة في سبتمبر 2026.\n\nوفي 24 نوفمبر، أفاد مجلس الوزراء الفلسطيني بأن سكان مخيمي نور شمس وطولكرم للاجئين أمضوا 666 يوماً متتالياً من التهجير. وأكد المجلس مجدداً ولاية الأونروا ودعا إلى توفير تمويل مستدام لخدمات اللاجئين الأساسية.\n\nولا تزال احتمالات العودة إلى المنازل تواجه صعوبات بسبب أمر الاستيلاء العسكري الذي أُعلن عنه في 17 نوفمبر. ويشمل الأمر طرقاً أُنشئت في مناطق هُدمت فيها مبانٍ سكنية، مما يثير مخاوف بشأن إعادة الإعمار مستقبلاً.\n\nوأظهر تقييم صادر عن مكتب الأمم المتحدة لحقوق الإنسان في سبتمبر 2026 أن 48 بالمئة من منشآت مخيم نور شمس قد تضررت أو دُمرت بحلول أكتوبر 2025. كما أفاد مكتب تنسيق الشؤون الإنسانية في سبتمبر باستمرار تعذر الوصول إلى مبنيي مدرستي الأونروا داخل المخيم.\n\nوتظل الأولويات الإنسانية العاجلة تتمثل في توفير مأوى آمن، واستمرار التعليم والرعاية الصحية، وإعادة تأهيل البنية التحتية، والعودة الآمنة للعائلات المهجرة.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "UN OCHA — West Bank Displacement Infographic — November 21, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — إحصاءات النزوح في الضفة الغربية — ٢١ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/sites/default/files/West%20Bank_info-graphic_21_November_2026_version_3_Forreview.pdf"
                },
                {
                    "labelEn": "WAFA — Palestinian Cabinet Reaffirms UNRWA Mandate — November 24, 2026",
                    "labelAr": "وفا — مجلس الوزراء يؤكد مجدداً الولاية القانونية للأونروا — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177291"
                },
                {
                    "labelEn": "WAFA — Military Land Seizure Order in Tulkarm and Nur Shams — November 17, 2026",
                    "labelAr": "وفا — أمر الاستيلاء العسكري على الأراضي في مخيمي طولكرم ونور شمس — ١٧ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177089"
                },
                {
                    "labelEn": "UN Human Rights — Destruction and Displacement in Northern West Bank Refugee Camps — September 4, 2026",
                    "labelAr": "الأمم المتحدة لحقوق الإنسان — الدمار والتهجير في مخيمات اللاجئين شمال الضفة الغربية — ٤ سبتمبر ٢٠٢٦",
                    "url": "https://palestine.un.org/en/322146-israeli-forces-expelled-palestinian-refugees-three-west-bank-camps-violation-international"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Educational Access — September 11, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: الوصول إلى التعليم — ١١ سبتمبر ٢٠٢٦",
                    "url": "https://container.ochaopt.org/content/humanitarian-situation-report-11-september-2026"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.04981%2C32.30804%2C35.06981%2C32.32804&layer=mapnik&marker=32.31804%2C35.05981",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.31804&mlon=35.05981#map=15/32.31804/35.05981",
            "captionEn": "Approximate Nur Shams Refugee Camp location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لمخيم نور شمس للاجئين، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Nur Shams Refugee Camp location",
            "titleAr": "الموقع التقريبي لمخيم نور شمس للاجئين",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.31804,
            "longitude": 35.05981
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 17, Tulkarm Refugee Camp's Popular Committee warned that an Israeli military order targeted land and roads inside both Tulkarm and Nur Shams refugee camps. The roads were carved through areas where homes had been demolished. The committee warned that military control over these sites could prevent displaced families from rebuilding.\n\nOn November 18, WAFA reported explosions inside Nur Shams Refugee Camp, east of Tulkarm. Witnesses heard successive blasts and saw smoke rising from the camp. The full extent of the damage was not immediately established.\n\nThe developments follow prolonged military restrictions and displacement. A September United Nations human rights report documented the forced displacement of Nur Shams residents and extensive damage to homes and infrastructure.\n\nResidents continue to face barriers to returning, recovering property, and rebuilding their community.\n\nThe immediate concerns are civilian safety, the right of return, and protection of residents' homes and land.",
                "textAr": "في 17 نوفمبر، حذرت اللجنة الشعبية لخدمات مخيم طولكرم من أمر عسكري إسرائيلي يستهدف أراضي وطرقًا داخل مخيمي طولكرم ونور شمس. وقد شُقت هذه الطرق في مناطق هُدمت فيها منازل. وحذرت اللجنة من أن فرض السيطرة العسكرية على هذه المواقع قد يمنع العائلات النازحة من إعادة البناء.\n\nوفي 18 نوفمبر، أفادت وكالة وفا بوقوع تفجيرات داخل مخيم نور شمس للاجئين شرق طولكرم. وسمع شهود عيان انفجارات متتالية وشاهدوا الدخان يتصاعد من المخيم. ولم يتضح على الفور الحجم الكامل للأضرار.\n\nوتأتي هذه التطورات في ظل قيود عسكرية ونزوح مستمرين منذ فترة طويلة. وقد وثق تقرير للأمم المتحدة بشأن حقوق الإنسان، صدر في سبتمبر، التهجير القسري لسكان مخيم نور شمس والأضرار الواسعة التي لحقت بالمنازل والبنية التحتية.\n\nولا يزال السكان يواجهون عقبات أمام العودة واستعادة ممتلكاتهم وإعادة بناء مجتمعهم.\n\nوتبقى المخاوف العاجلة سلامة المدنيين والحق في العودة وحماية منازل السكان وأراضيهم.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 17, 2026",
                        "labelAr": "وفا — 17 نوفمبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/177089"
                    },
                    {
                        "labelEn": "WAFA — November 18, 2026",
                        "labelAr": "وفا — 18 نوفمبر 2026",
                        "url": "https://french.wafa.ps/Pages/Details/248427"
                    },
                    {
                        "labelEn": "United Nations Human Rights — September 4, 2026 (historical context)",
                        "labelAr": "الأمم المتحدة لحقوق الإنسان — 4 سبتمبر 2026 (سياق تاريخي)",
                        "url": "https://palestine.un.org/en/322146-israeli-forces-expelled-palestinian-refugees-three-west-bank-camps-violation-international"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 3, WAFA reported explosions near the western entrance of Nur Shams Refugee Camp, east of Tulkarm. Local sources described thick smoke rising from the area, but the precise nature of the explosions remained unclear because of restrictions on access. WAFA also reported continuing military restrictions, infrastructure destruction, and residents being prevented from returning to the camp.",
            "textAr": "في 3 نوفمبر، أفادت وكالة وفا بوقوع انفجارات قرب المدخل الغربي لمخيم نور شمس للاجئين، شرق طولكرم. ووصفت مصادر محلية تصاعد دخان كثيف من المنطقة، لكن طبيعة الانفجارات الدقيقة ظلت غير واضحة بسبب القيود المفروضة على الوصول. كما أفادت وفا باستمرار القيود العسكرية وتدمير البنية التحتية ومنع السكان من العودة إلى المخيم.",
            "sources": [
                {
                    "labelEn": "WAFA — Nur Shams camp explosions and access restrictions, November 3, 2026",
                    "labelAr": "وفا — انفجارات مخيم نور شمس وقيود الوصول، 3 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176631"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "As of late October, displacement from Nur Shams Refugee Camp continued following Israeli military operations that began in 2025. UNRWA reported that more than 34,000 refugees from Nur Shams, Tulkarm, and Jenin camps combined remained displaced. The disruption has also affected education: UN OCHA reported in September that two UNRWA school buildings in Nur Shams remained inaccessible, forcing students to continue their education through alternative arrangements.",
                "textAr": "حتى أواخر أكتوبر، استمر نزوح السكان من مخيم نور شمس للاجئين في أعقاب العمليات العسكرية الإسرائيلية التي بدأت عام 2025. وأفادت الأونروا بأن أكثر من 34,000 لاجئ من مخيمات نور شمس وطولكرم وجنين مجتمعة ما زالوا نازحين. كما أثرت هذه الأوضاع على التعليم؛ إذ أفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في سبتمبر بأن مبنيين مدرسيين تابعين للأونروا في مخيم نور شمس ظلا غير متاحين، مما اضطر الطلاب إلى مواصلة تعليمهم من خلال ترتيبات بديلة.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 27, 2026",
                        "labelAr": "وفا — 27 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176396"
                    },
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, September 11, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 11 سبتمبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-11-september-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "khirbet-ras-al-ahmar",
        "nameEn": "Khirbet Ras al-Ahmar",
        "nameAr": "خربة الرأس الأحمر",
        "governorateId": "tubas",
        "governorateEn": "Tubas",
        "governorateAr": "طوباس",
        "descriptionEn": "Community overview: Khirbet Ras al-Ahmar, Tubas. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: خربة الرأس الأحمر، طوباس. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-2-october-2026",
        "sourcePublicationDate": "2026-10-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "tubas",
        "backgroundEn": "Khirbet Ras al-Ahmar is in Tubas governorate. OCHA describes a family temporarily relocating children to Khirbet Atuf for schooling in September 2026.",
        "backgroundAr": "تقع خربة الرأس الأحمر في محافظة طوباس. ويصف تقرير أوتشا نقل أسرة أطفالها مؤقتًا إلى خربة عاطوف لتمكينهم من الدراسة في سبتمبر 2026.",
        "concernsEn": "OCHA reported pipeline damage and blocked school access on 25 September 2026. Its late-October 2026 report documented displacement amid settler attacks and access restrictions.",
        "concernsAr": "أفادت أوتشا بتضرّر خط مياه وتعذّر الوصول إلى المدرسة في 25 سبتمبر 2026. ووثّق تقريرها أواخر أكتوبر نزوحًا وسط اعتداءات المستوطنين وقيود الوصول.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 2 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 2 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-2-october-2026",
                "reportDate": "2026-10-02",
                "publicationDate": "2026-10-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background",
                    "concerns"
                ],
                "supportEn": "Location, schooling and water access",
                "supportAr": "الموقع والتعليم والوصول إلى المياه"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Displacement",
                "supportAr": "النزوح"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 21, WAFA reported that Israeli settlers had vandalized livestock enclosures belonging to Thaer Abdullah Basharat the previous night. His family had already relocated following repeated settler attacks.\n\nOn November 23, local sources reported another attack on the vacant home of Izzat Saqr Bani Odeh, despite his efforts to repair damage from an earlier incident.\n\nReporting published by The Times of Israel on November 24 indicated that approximately 25 of the community's former 60 families remained. Resident Abdullah Basharat described women and children relocating to Tammun and Atuf, while residents and activists reported that vehicle access through one gate was limited to thirty minutes daily.\n\nThe Israeli military says its barrier project is intended to prevent weapons smuggling and attacks, and maintains that additional vehicle access can be coordinated. Residents dispute the practical availability of such access.\n\nRestricted water and livestock feed deliveries, property attacks and agricultural disruption continue to threaten the community's livelihoods and long-term survival.",
            "textAr": "في 21 نوفمبر، أفادت وكالة وفا بأن مستوطنين إسرائيليين خرّبوا في الليلة السابقة حظائر مواشٍ تعود للمواطن ثائر عبد الله بشارات. وكانت عائلته قد اضطرت إلى مغادرة التجمع عقب اعتداءات متكررة من المستوطنين.\n\nوفي 23 نوفمبر، أفادت مصادر محلية بوقوع اعتداء آخر على منزل المواطن عزت صقر بني عودة غير المأهول، رغم محاولاته إصلاح الأضرار الناجمة عن اعتداء سابق.\n\nوأشار تقرير نشرته صحيفة تايمز أوف إسرائيل في 24 نوفمبر إلى بقاء نحو 25 عائلة من أصل 60 عائلة كانت تقيم في التجمع. وأوضح المواطن عبد الله بشارات أن نساء وأطفالاً انتقلوا إلى طمون وعاطوف، فيما أفاد سكان وناشطون بأن مرور المركبات عبر إحدى البوابات يقتصر على ثلاثين دقيقة يومياً.\n\nويقول الجيش الإسرائيلي إن مشروع الحاجز يهدف إلى منع تهريب الأسلحة والهجمات، وإنه يمكن تنسيق مرور إضافي للمركبات. غير أن السكان يشككون في إمكانية الاستفادة من هذا التنسيق عملياً.\n\nولا تزال القيود المفروضة على إيصال المياه والأعلاف، والاعتداءات على الممتلكات، وتعطيل النشاط الزراعي تهدد سبل عيش السكان واستمرار وجود التجمع على المدى الطويل.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "WAFA — Settlers Vandalize Sheep Pens in Ras al-Ahmar — November 21, 2026",
                    "labelAr": "وفا — مستوطنون يخربون حظائر الأغنام في الرأس الأحمر — ٢١ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177166"
                },
                {
                    "labelEn": "WAFA — Second Attack on Uninhabited Home in Ras al-Ahmar — November 23, 2026",
                    "labelAr": "وفا — اعتداء للمرة الثانية على منزل غير مأهول في الرأس الأحمر — ٢٣ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177236"
                },
                {
                    "labelEn": "The Times of Israel — Ras al-Ahmar Displacement and Security Barrier — November 24, 2026",
                    "labelAr": "تايمز أوف إسرائيل — التهجير والحاجز الأمني في الرأس الأحمر — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://www.timesofisrael.com/squeezed-by-idf-security-barrier-a-jordan-valley-hamlet-turns-into-a-ghost-town/"
                }
            ]
        },
        "pendingReport": null,
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.44369%2C32.25600%2C35.46369%2C32.27600&layer=mapnik&marker=32.26600%2C35.45369",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.26600&mlon=35.45369#map=15/32.26600/35.45369",
            "captionEn": "Approximate Khirbet Ras al-Ahmar community location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لتجمع خربة الرأس الأحمر، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Khirbet Ras al-Ahmar community location",
            "titleAr": "الموقع التقريبي لتجمع خربة الرأس الأحمر",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.266,
            "longitude": 35.45369,
            "geographicReferenceUrl": "https://mapcarta.com/N8259280608"
        },
        "previousReports": [
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 5, WAFA reported that Israeli forces had maintained a blockade of the Ras al-Ahmar Bedouin community for 44 consecutive days. According to the local village council, 24 Palestinian families had been forced to leave, while 24 remained. Limited drinking water and animal fodder were permitted into the community. On November 9, WAFA reported that Israeli settlers attacked several uninhabited tents belonging to previously displaced residents.",
            "textAr": "في 5 نوفمبر، أفادت وكالة وفا بأن القوات الإسرائيلية واصلت حصار تجمع الرأس الأحمر البدوي لليوم الرابع والأربعين على التوالي. ووفقًا للمجلس القروي المحلي، اضطرت 24 عائلة فلسطينية إلى مغادرة التجمع، بينما بقيت 24 عائلة أخرى. وسُمح بإدخال كميات محدودة من مياه الشرب وأعلاف المواشي. وفي 9 نوفمبر، أفادت وفا بأن مستوطنين إسرائيليين اعتدوا على عدة خيام غير مأهولة تعود لسكان سبق أن نزحوا من التجمع.",
            "sources": [
                {
                    "labelEn": "WAFA — Ras al-Ahmar blockade, November 5, 2026",
                    "labelAr": "وفا — حصار الرأس الأحمر، 5 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176682"
                },
                {
                    "labelEn": "WAFA — Ras al-Ahmar tents attacked, November 9, 2026",
                    "labelAr": "وفا — الاعتداء على خيام الرأس الأحمر، 9 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176799"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "During October 20–26, 24 Palestinian herding families—approximately 94 people, including 40 children—were displaced from Khirbet Ras al-Ahmar amid settler attacks and increasing access restrictions. According to UN OCHA, a newly constructed military road and gate restricted access to water, livestock feed, and essential services. On October 24, settlers also damaged water infrastructure supplying families in the community.",
                "textAr": "خلال الفترة من 20 إلى 26 أكتوبر، نزحت 24 أسرة فلسطينية تعمل في الرعي، تضم نحو 94 شخصًا من بينهم 40 طفلًا، من خربة الرأس الأحمر، وسط اعتداءات المستوطنين وتزايد القيود المفروضة على الوصول. ووفقًا لمكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، أدى إنشاء طريق عسكري جديد وبوابة إلى تقييد الوصول إلى المياه وأعلاف الماشية والخدمات الأساسية. وفي 24 أكتوبر، ألحق مستوطنون أضرارًا بالبنية التحتية للمياه التي تزود العائلات في التجمع.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — October 20, 2026",
                        "labelAr": "وفا — 20 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176115"
                    }
                ]
            }
        ]
    },
    {
        "id": "tammun",
        "nameEn": "Tammun",
        "nameAr": "طمون",
        "governorateId": "tubas",
        "governorateEn": "Tubas",
        "governorateAr": "طوباس",
        "descriptionEn": "Community overview: Tammun, Tubas. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: طمون، طوباس. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
        "sourcePublicationDate": "2025-06-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "tubas",
        "backgroundEn": "Tammun is a Palestinian community south of Tubas city in the northeastern West Bank. ARIJ’s February 2006 profile describes neighbouring Khirbet Atuf to the east and Wadi al-Far’a to the west.",
        "backgroundAr": "طمون تجمع فلسطيني جنوب مدينة طوباس في شمال شرق الضفة الغربية. ويصف ملف أريج الصادر في فبراير 2006 خربة عاطوف إلى الشرق ووادي الفارعة إلى الغرب.",
        "concernsEn": "OCHA documented road destruction and disrupted water, electricity and internet access during an Israeli operation in Tammun on 4 June 2025.",
        "concernsAr": "وثّقت أوتشا تدمير طرق وتعطّل الوصول إلى المياه والكهرباء والإنترنت خلال عملية إسرائيلية في طمون في 4 يونيو 2025.",
        "sources": [
            {
                "labelEn": "UN OCHA — West Bank Update #295, 5 June 2025",
                "labelAr": "أوتشا — تحديث الضفة الغربية رقم 295، 5 يونيو 2025",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
                "reportDate": "2025-06-05",
                "publicationDate": "2025-06-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Tammun infrastructure and services",
                "supportAr": "البنية التحتية والخدمات في طمون"
            },
            {
                "labelEn": "ARIJ — Tammun Village Profile (2006-02; archived copy)",
                "labelAr": "أريج — ملف قرية طمون (2006-02؛ نسخة مؤرشفة)",
                "url": "https://www.palestineremembered.com/images/V2/Books/Arij/Nablus/Tammun/en/Tammun-vp-en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and geographic context",
                "supportAr": "الموقع والسياق الجغرافي",
                "publicationPeriod": "2006-02"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 20, Israeli forces detained 20 Palestinians across Tammun and Tubas following residential raids. According to Kamal Bani Odeh, director of the Palestinian Prisoner's Society in Tubas, those detained in Tammun included Musab Najeh Taleb Qutaishat, 28, and Naji Ibrahim Basharat, 50. Most detainees were subsequently released.\n\nA further military operation affected Tammun on November 23 and 24. Bani Odeh reported that soldiers searched residential properties and repurposed some homes as temporary military facilities and interrogation centers.\n\nThe operation also disrupted education. Tubas Education Director Azmi Balawneh announced changes to school attendance affecting approximately 3,000 students across 12 schools. The directorate subsequently suspended classroom attendance and implemented remote learning to protect students and educational staff.\n\nWAFA confirmed the withdrawal of Israeli forces on November 24.\n\nRepeated residential incursions, temporary detention and interruptions to children's education remain significant concerns for Tammun's residents, particularly families attempting to maintain stable daily routines.",
            "textAr": "في 20 نوفمبر، احتجزت القوات الإسرائيلية 20 فلسطينياً من بلدة طمون ومدينة طوباس عقب مداهمة منازلهم. ووفقاً لكمال بني عودة، مدير نادي الأسير الفلسطيني في طوباس، كان من بين المحتجزين في طمون مصعب ناجح طالب قطيشات، البالغ من العمر 28 عاماً، وناجي إبراهيم بشارات، البالغ من العمر 50 عاماً. وأُفرج لاحقاً عن معظم المحتجزين.\n\nوشهدت طمون عملية عسكرية أخرى يومي 23 و24 نوفمبر. وأفاد بني عودة بأن الجنود فتشوا منازل المواطنين وحوّلوا بعضها إلى ثكنات عسكرية ومراكز تحقيق مؤقتة.\n\nكما تسببت العملية في تعطيل التعليم. وأعلن مدير التربية والتعليم في طوباس، عزمي بلاونة، عن تعديلات في الدوام المدرسي شملت نحو 3000 طالب وطالبة في 12 مدرسة. وقررت المديرية لاحقاً تعليق التعليم الوجاهي والتحول إلى التعليم الإلكتروني حفاظاً على سلامة الطلبة والكوادر التعليمية.\n\nوأكدت وكالة وفا انسحاب القوات الإسرائيلية في 24 نوفمبر.\n\nوتظل الاقتحامات المتكررة للمنازل والاحتجاز المؤقت وتعطيل تعليم الأطفال من أبرز المخاوف التي تواجه سكان طمون، ولا سيما العائلات التي تسعى إلى الحفاظ على استقرار حياتها اليومية.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "WAFA — Twenty Palestinians Detained Across Tammun and Tubas — November 20, 2026",
                    "labelAr": "وفا — الاحتلال يحتجز 20 مواطناً من طمون وطوباس — ٢٠ نوفمبر ٢٠٢٦",
                    "url": "https://www.wafa.ps/news/2026/11/20/%D9%85%D8%AD%D8%AF%D8%AB-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%84%D8%A7%D9%84-%D9%8A%D8%AD%D8%AA%D8%AC%D8%B2-20-%D9%85%D9%88%D8%A7%D8%B7%D9%86%D8%A7-%D9%85%D9%86-%D8%B7%D9%85%D9%88%D9%86-%D9%88%D8%B7%D9%88%D8%A8%D8%A7%D8%B3"
                },
                {
                    "labelEn": "WAFA — Military Incursion and School Disruption in Tammun — November 24, 2026",
                    "labelAr": "وفا — الاحتلال يواصل اقتحام طمون ويحوّل منازل إلى ثكنات عسكرية ومراكز تحقيق — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://wafa.ps/news/2026/11/24/%D9%85%D8%AD%D8%AF%D8%AB-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%84%D8%A7%D9%84-%D9%8A%D9%88%D8%A7%D8%B5%D9%84-%D8%A7%D9%82%D8%AA%D8%AD%D8%A7%D9%85-%D8%B7%D9%85%D9%88%D9%86-%D9%88%D9%8A%D8%AD%D9%88%D9%91%D9%84-%D9%85%D9%86%D8%A7%D8%B2%D9%84"
                },
                {
                    "labelEn": "WAFA — Military Withdrawal from Tammun and Transition to Remote Learning — November 24, 2026",
                    "labelAr": "وفا — الاحتلال ينسحب من بلدة طمون بعد الاقتحام — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://wafa.ps/news/2026/11/24/%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%84%D8%A7%D9%84-%D9%8A%D9%86%D8%B3%D8%AD%D8%A8-%D9%85%D9%86-%D8%A8%D9%84%D8%AF%D8%A9-%D8%B7%D9%85%D9%88%D9%86-%D8%A8%D8%B9%D8%AF-%D8%A7%D9%82%D8%AA%D8%AD%D8%A7%D9%85-%D8%A7%D8%B3%D8%AA%D9%85%D8%B1"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.37478%2C32.27275%2C35.39478%2C32.29275&layer=mapnik&marker=32.28275%2C35.38478",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.28275&mlon=35.38478#map=15/32.28275/35.38478",
            "captionEn": "Approximate Tammun town location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لبلدة طمون، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Tammun town location",
            "titleAr": "الموقع التقريبي لبلدة طمون",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.28275,
            "longitude": 35.38478,
            "geographicReferenceUrl": "https://mapcarta.com/12908992"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "Israeli forces carried out repeated incursions into Tammun, south of Tubas, during November 13–17.\n\nWAFA reported that military patrols entered the town overnight on November 13–14, searched a Palestinian home, and ransacked its contents. Another incursion was reported on November 16, with no arrests reported in Tammun during that operation.\n\nLate on November 17, Israeli soldiers raided the home of former prisoner Nitham Basharat and severely beat him, according to local sources cited by WAFA on November 18. The report did not establish his subsequent medical condition.\n\nThe raids followed an Israeli military decision on November 8 to install an iron gate near Atuf, east of Tammun, adding to movement restrictions affecting surrounding communities.\n\nThe immediate concerns are residents' safety during home raids, protection from assault, and access to roads and essential services.",
                "textAr": "نفذت القوات الإسرائيلية اقتحامات متكررة لبلدة طمون جنوب طوباس خلال الفترة من 13 إلى 17 نوفمبر.\n\nوأفادت وكالة وفا بأن دوريات عسكرية دخلت البلدة خلال ليلة 13 إلى 14 نوفمبر، وفتشت منزلًا فلسطينيًا وعبثت بمحتوياته. كما أُبلغ عن اقتحام آخر في 16 نوفمبر، دون تسجيل اعتقالات في طمون خلال تلك العملية.\n\nوفي وقت متأخر من 17 نوفمبر، اقتحم جنود إسرائيليون منزل الأسير السابق نظام بشارات واعتدوا عليه بالضرب المبرح، وفقًا لمصادر محلية نقلت عنها وفا في 18 نوفمبر. ولم يوضح التقرير حالته الصحية بعد الاعتداء.\n\nوجاءت هذه الاقتحامات بعد إقامة بوابة حديدية إسرائيلية قرب قرية عاطوف شرق طمون في 8 نوفمبر، مما أضاف قيودًا على حركة السكان في التجمعات المحيطة.\n\nوتبقى المخاوف العاجلة سلامة السكان خلال اقتحام المنازل، وحمايتهم من الاعتداءات، وضمان الوصول إلى الطرق والخدمات الأساسية.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 18, 2026: Assault during Tammun home raid",
                        "labelAr": "وفا — 18 نوفمبر 2026: اعتداء خلال مداهمة منزل في طمون",
                        "url": "https://english.wafa.ps/Pages/Details/177093"
                    },
                    {
                        "labelEn": "WAFA — November 14, 2026: Tammun home search",
                        "labelAr": "وفا — 14 نوفمبر 2026: تفتيش منزل في طمون",
                        "url": "https://english.wafa.ps/Pages/Details/176909"
                    },
                    {
                        "labelEn": "WAFA — November 16, 2026: Tammun incursion",
                        "labelAr": "وفا — 16 نوفمبر 2026: اقتحام طمون",
                        "url": "https://french.wafa.ps/Pages/Details/248389"
                    },
                    {
                        "labelEn": "WAFA — November 8, 2026: Gate near Atuf",
                        "labelAr": "وفا — 8 نوفمبر 2026: بوابة قرب عاطوف",
                        "url": "https://english.wafa.ps/Pages/Details/176734"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 3, WAFA reported that Israeli forces entered Tammun, south of Tubas, patrolled its streets and searched several Palestinian homes. A separate November 7 report also identified Tammun among communities subjected to military raids, without reporting arrests there. On November 8, WAFA reported that Israeli forces installed an iron gate near Atuf, east of Tammun, adding to movement restrictions affecting the surrounding area.",
            "textAr": "في 3 نوفمبر، أفادت وكالة وفا بأن القوات الإسرائيلية اقتحمت بلدة طمون جنوب طوباس، وجابت شوارعها وفتشت عدة منازل فلسطينية. كما أشار تقرير منفصل بتاريخ 7 نوفمبر إلى أن طمون كانت من بين التجمعات التي تعرضت لاقتحامات عسكرية، دون الإبلاغ عن اعتقالات فيها. وفي 8 نوفمبر، أفادت وفا بأن القوات الإسرائيلية نصبت بوابة حديدية قرب قرية عاطوف شرق طمون، مما أضاف قيودًا على حركة السكان في المنطقة المحيطة.",
            "sources": [
                {
                    "labelEn": "WAFA — Tammun raid, November 3, 2026",
                    "labelAr": "وفا — اقتحام طمون، 3 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176580"
                },
                {
                    "labelEn": "Middle East Monitor / Anadolu — West Bank raids, November 7, 2026",
                    "labelAr": "ميدل إيست مونيتور / الأناضول — اقتحامات الضفة الغربية، 7 نوفمبر 2026",
                    "url": "https://www.middleeastmonitor.com/20261107-israeli-army-arrests-6-palestinians-in-renewed-raids-across-occupied-west-bank/"
                },
                {
                    "labelEn": "WAFA — Iron gate near Atuf, November 8, 2026",
                    "labelAr": "وفا — بوابة حديدية قرب عاطوف، 8 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176734"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 20, Palestinian farmers and community representatives held an olive-harvesting event in Umm al-Kubaysh, east of Tammun, helping residents access farmland they said had been inaccessible for months. WAFA reported that settlers had cut down approximately 250 fruit-bearing olive trees in the area earlier that morning. Separately, UN OCHA's October 29 report documented local accounts of approximately 130 olive trees cut down by settlers in Tammun. These are separately reported figures and should not be added together.",
                "textAr": "في 20 أكتوبر، شارك مزارعون فلسطينيون وممثلون عن المجتمع المحلي في فعالية لقطف الزيتون في منطقة أم الكبيش شرق طمون، مما ساعد السكان على الوصول إلى أراضٍ زراعية قالوا إنهم لم يتمكنوا من الوصول إليها منذ أشهر. وأفادت وكالة وفا بأن مستوطنين قطعوا نحو 250 شجرة زيتون مثمرة في المنطقة صباح ذلك اليوم. وبشكل منفصل، وثّق تقرير مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية الصادر في 29 أكتوبر إفادات محلية عن قطع نحو 130 شجرة زيتون على أيدي مستوطنين في طمون. وهذان رقمان وردا في تقريرين منفصلين ولا ينبغي جمعهما.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 20, 2026",
                        "labelAr": "وفا — 20 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176124"
                    },
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "burin",
        "nameEn": "Burin",
        "nameAr": "بورين",
        "governorateId": "nablus",
        "governorateEn": "Nablus",
        "governorateAr": "نابلس",
        "descriptionEn": "Community overview: Burin, Nablus. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: بورين، نابلس. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "nablus",
        "backgroundEn": "Burin is a Palestinian village south of Nablus city. ARIJ’s 2014 profile places it between Kafr Qallil and Awarta to the east, Madama and Iraq Burin to the west, and Huwwara to the south.",
        "backgroundAr": "بورين قرية فلسطينية جنوب مدينة نابلس. ويحدّد ملف أريج لعام 2014 موقعها بين كفر قليل وعورتا شرقًا، ومادما وعراق بورين غربًا، وحوارة جنوبًا.",
        "concernsEn": "OCHA reported settler attacks injuring olive harvesters in Burin during 20–26 October 2026.",
        "concernsAr": "أفادت أوتشا باعتداءات مستوطنين أصابت قاطفي زيتون في بورين خلال 20–26 أكتوبر 2026.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Olive harvesting",
                "supportAr": "قطاف الزيتون"
            },
            {
                "labelEn": "ARIJ — Burin Village Profile (2014; archived copy)",
                "labelAr": "أريج — ملف قرية بورين (2014؛ نسخة مؤرشفة)",
                "url": "https://www.palestineremembered.com/images/V2/Books/Arij/Nablus/Burin/en/Burin-vp-en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and geographic context",
                "supportAr": "الموقع والسياق الجغرافي",
                "publicationPeriod": "2014"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 23, Human Rights Watch published an investigation examining the detention of Palestinian activists supporting olive harvesters, including Burin farmer and human rights defender Ghassan Najjar, co-founder of the Sumood Network.\n\nAccording to the network, Israeli forces detained approximately 60 people during an October 27 raid in Burin. All were subsequently released except Najjar.\n\nThe network reported that Israeli intelligence officials had previously warned Najjar against continuing his work coordinating protection for olive harvesters. On November 17, an Israeli judge approved a four-month administrative detention order.\n\nThe Israeli military stated that Najjar was suspected of throwing stones at Israeli civilians, an allegation disputed by the Sumood Network.\n\nThe case comes amid wider concerns about agricultural access. On November 20, the UN Humanitarian Country Team called for urgent protection of Palestinian olive harvesters.\n\nFor Burin, protecting agricultural livelihoods and ensuring that residents can safely access their olive groves remain central humanitarian concerns.",
            "textAr": "في 23 نوفمبر، نشرت منظمة هيومن رايتس ووتش تحقيقاً تناول احتجاز ناشطين فلسطينيين يدعمون قاطفي الزيتون، ومن بينهم المزارع والمدافع عن حقوق الإنسان غسان النجار من قرية بورين، وهو أحد مؤسسي شبكة صمود.\n\nووفقاً للشبكة، احتجزت القوات الإسرائيلية نحو 60 شخصاً خلال اقتحام بورين في 27 أكتوبر. وأُفرج لاحقاً عن جميع المحتجزين باستثناء النجار.\n\nوأفادت الشبكة بأن مسؤولين في المخابرات الإسرائيلية كانوا قد حذروا النجار سابقاً من مواصلة عمله في تنسيق الحماية لقاطفي الزيتون. وفي 17 نوفمبر، وافق قاضٍ إسرائيلي على أمر باعتقاله إدارياً لمدة أربعة أشهر.\n\nوقال الجيش الإسرائيلي إن النجار مشتبه به في إلقاء الحجارة على مدنيين إسرائيليين، وهو ادعاء تنفيه شبكة صمود.\n\nوتأتي هذه القضية في ظل مخاوف أوسع بشأن الوصول إلى الأراضي الزراعية. ففي 20 نوفمبر، دعا الفريق القطري الإنساني التابع للأمم المتحدة إلى توفير الحماية العاجلة لقاطفي الزيتون الفلسطينيين.\n\nوتظل حماية سبل العيش الزراعية وضمان وصول سكان بورين بأمان إلى بساتين الزيتون من أبرز المخاوف الإنسانية في القرية.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Human Rights Watch — Detention of Activists Protecting Palestinian Farmers — November 23, 2026",
                    "labelAr": "هيومن رايتس ووتش — احتجاز ناشطين يعملون على حماية المزارعين الفلسطينيين — ٢٣ نوفمبر ٢٠٢٦",
                    "url": "https://www.hrw.org/news/2026/11/23/west-bank-israeli-authorities-harass-arrest-activists-protecting-palestinian"
                },
                {
                    "labelEn": "UN Humanitarian Country Team — Protection of Palestinian Olive Harvesters — November 20, 2026",
                    "labelAr": "الفريق القطري الإنساني للأمم المتحدة — حماية قاطفي الزيتون الفلسطينيين — ٢٠ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/israeli-authorities-must-urgently-act-repeated-calls-protect-palestinian-olive-harvesters-amid-unprecedented"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.24006%2C32.17322%2C35.26006%2C32.19322&layer=mapnik&marker=32.18322%2C35.25006",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.18322&mlon=35.25006#map=15/32.18322/35.25006",
            "captionEn": "Approximate Burin village location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية بورين، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Burin village location",
            "titleAr": "الموقع التقريبي لقرية بورين",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.18322,
            "longitude": 35.25006,
            "geographicReferenceUrl": "https://mapcarta.com/12914106"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "Burin, south of Nablus, continues to face attacks on essential infrastructure and restrictions affecting residents' daily lives.\n\nIn its November 13 humanitarian report, UN OCHA documented damage to water pipelines in Burin and nearby Beit Imrin during November 3–9. The damage disrupted water supplies to six households across the two villages. In Burin, Israeli forces and a settlement guard reportedly obstructed repairs, leaving at least two households without running water.\n\nOn November 6, WAFA reported that settlers cut electricity poles supplying the Soufan family's home near the Yitzhar settlement. Local sources described repeated attacks against the property and surrounding agricultural land.\n\nThese documented incidents occurred earlier in November. No additional Burin-specific incident during November 12–18 was confirmed in the sources reviewed.\n\nThe immediate concerns are reliable water and electricity, residents' safety, and protection of homes and agricultural livelihoods.",
                "textAr": "تواصل قرية بورين جنوب نابلس مواجهة اعتداءات تستهدف البنية التحتية الأساسية وقيودًا تؤثر في الحياة اليومية للسكان.\n\nوثق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في تقريره الصادر يوم 13 نوفمبر أضرارًا لحقت بخطوط المياه في بورين وبيت إمرين المجاورة خلال الفترة من 3 إلى 9 نوفمبر. وأدت الأضرار إلى انقطاع المياه عن ست أسر في القريتين. وفي بورين، أفادت التقارير بأن القوات الإسرائيلية وحارسًا لإحدى المستوطنات عرقلوا أعمال الإصلاح، مما ترك أسرتين على الأقل دون مياه جارية.\n\nوفي 6 نوفمبر، أفادت وكالة وفا بأن مستوطنين قطعوا أعمدة الكهرباء التي تغذي منزل عائلة صوفان قرب مستوطنة يتسهار. ووصفت مصادر محلية اعتداءات متكررة تستهدف المنزل والأراضي الزراعية المحيطة به.\n\nوقعت هذه الحوادث الموثقة في وقت سابق من نوفمبر. ولم تؤكد المصادر التي جرت مراجعتها وقوع حادث إضافي يخص بورين تحديدًا خلال الفترة من 12 إلى 18 نوفمبر.\n\nوتبقى المخاوف العاجلة ضمان إمدادات المياه والكهرباء وسلامة السكان وحماية المنازل وسبل العيش الزراعية.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — November 13, 2026",
                        "labelAr": "أوتشا — 13 نوفمبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                    },
                    {
                        "labelEn": "WAFA — November 6, 2026",
                        "labelAr": "وفا — 6 نوفمبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176687"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 1, WAFA reported that Israeli forces raided Burin, south of Nablus, searched several homes, and detained four Palestinian residents. On November 6, reporting described Israeli settlers cutting electricity poles supplying the Soufan family home near the Yitzhar settlement. The property houses three families, and local sources described repeated attacks on its electricity supply.",
            "textAr": "في 1 نوفمبر، أفادت وكالة وفا بأن القوات الإسرائيلية اقتحمت قرية بورين جنوب نابلس، وفتشت عدة منازل واعتقلت أربعة من السكان الفلسطينيين. وفي 6 نوفمبر، أفادت تقارير بأن مستوطنين إسرائيليين قطعوا أعمدة الكهرباء التي تغذي منزل عائلة صوفان بالقرب من مستوطنة يتسهار. ويضم المنزل ثلاث عائلات، ووصفت مصادر محلية اعتداءات متكررة على شبكة الكهرباء الخاصة به.",
            "sources": [
                {
                    "labelEn": "WAFA — Burin raid, November 1, 2026",
                    "labelAr": "وفا — اقتحام بورين، 1 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176476"
                },
                {
                    "labelEn": "Al Shorouk — Burin electricity supply attack, November 6, 2026",
                    "labelAr": "الشروق — الاعتداء على إمدادات الكهرباء في بورين، 6 نوفمبر 2026",
                    "url": "https://alshorouk.ps/en/post?id=13062&slug=settlers-burn-tents-in-duma-and-cut-electricity-to-a-home-in-burin"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "Between October 20 and 26, three Palestinians were injured when Israeli settlers attacked families harvesting olives in Burin, south of Nablus. UN OCHA documented the attack in Area B as part of a wider pattern of violence and obstruction affecting Palestinian farmers during the 2026 olive harvest.",
                "textAr": "بين 20 و26 أكتوبر، أُصيب ثلاثة فلسطينيين عندما هاجم مستوطنون إسرائيليون عائلات كانت تقطف الزيتون في قرية بورين جنوب نابلس. ووثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية الاعتداء في المنطقة المصنفة (ب)، ضمن نمط أوسع من العنف والعرقلة التي يتعرض لها المزارعون الفلسطينيون خلال موسم قطف الزيتون لعام 2026.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "madama",
        "nameEn": "Madama",
        "nameAr": "مادما",
        "governorateId": "nablus",
        "governorateEn": "Nablus",
        "governorateAr": "نابلس",
        "descriptionEn": "Community overview: Madama, Nablus. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: مادما، نابلس. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
        "sourcePublicationDate": "2025-06-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "nablus",
        "backgroundEn": "Madama is a Palestinian village south of Nablus city. ARIJ’s 2014 profile places Burin to its east, Asira al-Qibliya to its west and south, and Tell and Iraq Burin to its north.",
        "backgroundAr": "مادما قرية فلسطينية جنوب مدينة نابلس. ويضع ملف أريج لعام 2014 بورين شرقها، وعصيرة القبلية غربها وجنوبها، وتل وعراق بورين شمالها.",
        "concernsEn": "OCHA reported a 24-hour curfew in Madama on 27 May 2025, with six families displaced from a building taken over by Israeli forces.",
        "concernsAr": "أفادت أوتشا بفرض حظر تجوّل لمدة 24 ساعة في مادما في 27 مايو 2025، ونزوح ست أسر من مبنى سيطرت عليه القوات الإسرائيلية.",
        "sources": [
            {
                "labelEn": "UN OCHA — West Bank Update #295, 5 June 2025",
                "labelAr": "أوتشا — تحديث الضفة الغربية رقم 295، 5 يونيو 2025",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
                "reportDate": "2025-06-05",
                "publicationDate": "2025-06-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Madama curfew and temporary displacement",
                "supportAr": "حظر التجوّل والنزوح المؤقت في مادما"
            },
            {
                "labelEn": "ARIJ — Madama Village Profile (2014; archived copy)",
                "labelAr": "أريج — ملف قرية مادما (2014؛ نسخة مؤرشفة)",
                "url": "https://www.palestineremembered.com/images/V2/Books/Arij/Nablus/Madama/en/Madama-vp-en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and geographic context",
                "supportAr": "الموقع والسياق الجغرافي",
                "publicationPeriod": "2014"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 25, Israeli settlers installed additional residential structures at an existing settlement outpost on Madama's land, according to Al Shorouk and Shehab News Agency.\n\nAl Shorouk identified established outposts in Shakara, northeast of the village, and Ras al-Amara, northwest of it. Earlier construction work in January 2026 improved the road connecting these locations, while additional tents appeared northwest of Madama in April.\n\nThe village encompasses approximately 3,361 dunums, with agriculture and livestock raising forming important sources of household income. According to Land Research Centre figures cited by Al Shorouk, 118 dunums of Madama's land were seized for the establishment of the neighboring Yitzhar settlement.\n\nAgricultural access has also deteriorated. On October 29, UN OCHA documented reports of settlers forcing Madama farmers from their fields and taking harvested olives and agricultural equipment.\n\nFurther outpost expansion raises concerns about agricultural land fragmentation, access to natural resources, household incomes and residents' ability to maintain their livelihoods.",
            "textAr": "في 25 نوفمبر، أضاف مستوطنون إسرائيليون مباني سكنية جديدة إلى بؤرة استيطانية قائمة على أراضي قرية مادما، وفقاً لما أوردته صحيفة الشروق ووكالة شهاب للأنباء.\n\nوحددت الشروق بؤراً استيطانية قائمة في منطقة الشكارة شمال شرق القرية ومنطقة رأس العمارة شمال غربها. وكانت أعمال سابقة في يناير 2026 قد هدفت إلى تطوير الطريق الذي يربط بين هاتين المنطقتين، فيما نُصبت خيام إضافية شمال غرب مادما في أبريل.\n\nوتبلغ مساحة أراضي القرية نحو 3361 دونماً، وتشكل الزراعة وتربية المواشي مصادر مهمة لدخل العائلات. ووفقاً لبيانات مركز أبحاث الأراضي التي نقلتها الشروق، تمت مصادرة 118 دونماً من أراضي مادما لإقامة مستوطنة يتسهار المجاورة.\n\nكما تدهورت إمكانية الوصول إلى الأراضي الزراعية. ففي 29 أكتوبر، وثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية تقارير عن إجبار مستوطنين مزارعي مادما على مغادرة أراضيهم والاستيلاء على الزيتون الذي تم قطفه ومعدات زراعية.\n\nويثير استمرار توسع البؤر الاستيطانية مخاوف بشأن تجزئة الأراضي الزراعية، والوصول إلى الموارد الطبيعية، ودخل العائلات، وقدرة السكان على الحفاظ على سبل عيشهم.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Al Shorouk — Madama Stands Against Settlement Expansion — November 25–26, 2026",
                    "labelAr": "الشروق — مادما تواجه التوسع الاستيطاني — ٢٥–٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://alshorouk.ps/en/post?id=14266&slug=madama-stands-against-settlement-expansion"
                },
                {
                    "labelEn": "Shehab News Agency — Settlement Outpost Expansion in Madama — November 25, 2026",
                    "labelAr": "وكالة شهاب للأنباء — توسعة بؤرة استيطانية على أراضي مادما — ٢٥ نوفمبر ٢٠٢٦",
                    "url": "https://shehabnews.net/en/post?id=170534&slug=israeli-settlers-expand-settlement-outpost-and-lay-siege-to-home-south-of-nablus"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Olive Harvest and Agricultural Access — October 29, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: موسم الزيتون والوصول إلى الأراضي الزراعية — ٢٩ أكتوبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.22125%2C32.17557%2C35.24125%2C32.19557&layer=mapnik&marker=32.18557%2C35.23125",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.18557&mlon=35.23125#map=15/32.18557/35.23125",
            "captionEn": "Approximate Madama village location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية مادما، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Madama village location",
            "titleAr": "الموقع التقريبي لقرية مادما",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.18557,
            "longitude": 35.23125,
            "geographicReferenceUrl": "https://mapcarta.com/N432068943"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "Madama, south of Nablus, has faced severe restrictions on movement following the closure of its main access roads by Israeli forces in October.\n\nVillage council head Rami Nassar told WAFA that the northern entrance, the road toward Burin, and the western route toward Asira al-Qibliya were blocked. Residents reported difficulty reaching workplaces, schools, medical care, and agricultural land.\n\nOn October 20, WAFA described a medical emergency in which residents had to carry a man suffering a heart attack on foot through mountainous terrain because an ambulance could not reach the village. Nassar also warned of shortages of medicine and essential supplies affecting a population of more than 2,500.\n\nAl Jazeera subsequently documented how the restrictions disrupted schooling, healthcare, and the olive harvest.\n\nNo new Madama-specific incident from November 12–18 was confirmed in the sources reviewed.\n\nThe immediate concerns remain emergency medical access, freedom of movement, and residents' ability to sustain their livelihoods.",
                "textAr": "واجهت قرية مادما جنوب نابلس قيودًا شديدة على الحركة عقب إغلاق القوات الإسرائيلية طرق الوصول الرئيسية إليها في أكتوبر.\n\nوأبلغ رئيس مجلس القرية رامي نصار وكالة وفا بإغلاق المدخل الشمالي والطريق المؤدي إلى بورين والطريق الغربي باتجاه عصيرة القبلية. وأفاد السكان بصعوبات في الوصول إلى أماكن العمل والمدارس والرعاية الطبية والأراضي الزراعية.\n\nوفي 20 أكتوبر، وثقت وفا حالة طبية طارئة اضطر خلالها السكان إلى حمل رجل أصيب بنوبة قلبية سيرًا عبر منطقة جبلية، بسبب تعذر وصول سيارة الإسعاف إلى القرية. وحذر نصار أيضًا من نقص الأدوية والإمدادات الأساسية، في قرية يزيد عدد سكانها على 2,500 شخص.\n\nووثقت الجزيرة لاحقًا تأثير القيود على التعليم والرعاية الصحية وقطاف الزيتون.\n\nولم تؤكد المصادر التي جرت مراجعتها وقوع حادث جديد يخص مادما تحديدًا خلال الفترة من 12 إلى 18 نوفمبر.\n\nوتبقى المخاوف العاجلة ضمان وصول خدمات الإسعاف والرعاية الطبية، وحرية الحركة، وقدرة السكان على الحفاظ على سبل عيشهم.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 18, 2026 (earlier reporting)",
                        "labelAr": "وفا — 18 أكتوبر 2026 (تغطية سابقة)",
                        "url": "https://english.wafa.ps/Pages/Details/176003"
                    },
                    {
                        "labelEn": "WAFA — October 20, 2026 (earlier reporting)",
                        "labelAr": "وفا — 20 أكتوبر 2026 (تغطية سابقة)",
                        "url": "https://english.wafa.ps/Pages/Details/176097"
                    },
                    {
                        "labelEn": "Al Jazeera — October 23, 2026 (earlier reporting)",
                        "labelAr": "الجزيرة — 23 أكتوبر 2026 (تغطية سابقة)",
                        "url": "https://www.aljazeera.com/news/2026/10/23/israeli-roadblocks-disrupt-schools-and-medical-care-in-west-bank-village"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "The most recent community-specific reporting verified for Madama concerns restrictions imposed during October. WAFA reported that Israeli forces closed the village's entrances, severely restricting residents' movement and access to medical care and essential supplies. An October 21 Al Jazeera investigation also documented the village's isolation and difficulties accessing neighboring communities. No separate new attack specifically inside Madama has been verified for November 1–11 in the sources reviewed.",
            "textAr": "تتعلق أحدث التقارير التي أمكن التحقق منها بشأن قرية مادما بالقيود المفروضة خلال شهر أكتوبر. وأفادت وكالة وفا بأن القوات الإسرائيلية أغلقت مداخل القرية، مما فرض قيودًا شديدة على حركة السكان ووصولهم إلى الرعاية الطبية والإمدادات الأساسية. كما وثق تحقيق نشرته الجزيرة في 21 أكتوبر عزلة القرية والصعوبات التي يواجهها السكان في الوصول إلى التجمعات المجاورة. ولم يتم التحقق من وقوع اعتداء جديد منفصل داخل مادما خلال الفترة من 1 إلى 11 نوفمبر في المصادر التي تمت مراجعتها.",
            "sources": [
                {
                    "labelEn": "WAFA — Madama closures, published October 20, 2026 (events of October 19)",
                    "labelAr": "وفا — إغلاق مداخل مادما، نُشر في 20 أكتوبر 2026 (أحداث 19 أكتوبر)",
                    "url": "https://english.wafa.ps/Pages/Details/176097"
                },
                {
                    "labelEn": "Al Jazeera — Madama isolation investigation, October 21, 2026",
                    "labelAr": "الجزيرة — تحقيق حول عزلة مادما، 21 أكتوبر 2026",
                    "url": "https://www.aljazeera.com/features/2026/10/21/from-one-house-to-whole-villages-settlers-have-palestinians-surrounded"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "According to UN OCHA’s report covering October 20–26, Israeli settlers reportedly forced farmers in Madama, Nablus governorate, to leave their land in Area B and stole harvested olives and agricultural equipment.",
                "textAr": "بحسب تقرير مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية الذي يغطي الفترة من 20 إلى 26 أكتوبر، ورد أن مستوطنين إسرائيليين أجبروا مزارعين في مادما بمحافظة نابلس على مغادرة أراضيهم في المنطقة المصنفة (ب)، وسرقوا زيتونًا مقطوفًا ومعدات زراعية.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "yabrud",
        "nameEn": "Yabrud",
        "nameAr": "يبرود",
        "governorateId": "ramallah",
        "governorateEn": "Ramallah",
        "governorateAr": "رام الله",
        "descriptionEn": "Community overview: Yabrud, Ramallah. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: يبرود، رام الله. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "ramallah",
        "backgroundEn": "Yabrud is a Palestinian village northeast of Ramallah city, distinct from nearby Ein Yabrud. ARIJ’s 2012 profile places Silwad to its north and east and Ein Siniya to its west.",
        "backgroundAr": "يبرود قرية فلسطينية شمال شرق مدينة رام الله، وهي مختلفة عن قرية عين يبرود المجاورة. ويحدّد ملف أريج لعام 2012 سلواد شمالها وشرقها، وعين سينيا غربها.",
        "concernsEn": "OCHA reported settlers damaging Yabrud’s water network on 22 October 2026; supply was restored two days later.",
        "concernsAr": "أفادت أوتشا بإتلاف مستوطنين شبكة مياه يبرود في 22 أكتوبر 2026؛ وأُعيد الإمداد بعد يومين.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Water access",
                "supportAr": "الوصول إلى المياه"
            },
            {
                "labelEn": "ARIJ — Yabrud Village Profile (2012; archived copy)",
                "labelAr": "أريج — ملف قرية يبرود (2012؛ نسخة مؤرشفة)",
                "url": "https://www.palestineremembered.com/images/V2/Books/Arij/Ramallah/Yabrud/en/Yabrud-vp-en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and geographic context",
                "supportAr": "الموقع والسياق الجغرافي",
                "publicationPeriod": "2012"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Protection of essential water infrastructure remains an important concern for Yabrud following damage documented by UN OCHA in its October 29 humanitarian report.\n\nOn October 22, Israeli settlers damaged the village's principal water distribution network and diverted two pipelines toward neighboring settlement outposts. Maintenance workers attempting repairs were reportedly attacked and forced to leave. Approximately 700 residents experienced interruptions to their water supply before service was restored two days later.\n\nThis week, further movement restrictions were documented in neighboring communities. On November 21, WAFA reported that Israeli forces closed entrances and searched vehicles in Ein Yabrud, Silwad and Ein Sinya, causing traffic congestion.\n\nThese restrictions occurred in communities surrounding Yabrud, rather than inside the village itself.\n\nNo new incident specifically within Yabrud was independently verified during the November 19–26 reporting period. Protection of water infrastructure, reliable regional transport and safe access to essential services remain important humanitarian concerns for the community.",
            "textAr": "تظل حماية البنية التحتية الأساسية للمياه من المخاوف المهمة في قرية يبرود، عقب الأضرار التي وثّقها مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في تقريره الصادر في 29 أكتوبر.\n\nوفي 22 أكتوبر، ألحق مستوطنون إسرائيليون أضراراً بشبكة المياه الرئيسية في القرية وحوّلوا خطين للمياه باتجاه بؤر استيطانية مجاورة. وأفادت التقارير بتعرض طواقم الصيانة للاعتداء وإجبارها على المغادرة أثناء محاولتها إصلاح الأضرار. وتأثر نحو 700 من سكان القرية بانقطاع المياه قبل استعادة الخدمة بعد يومين.\n\nوخلال هذا الأسبوع، تم توثيق قيود إضافية على الحركة في التجمعات المجاورة. ففي 21 نوفمبر، أفادت وكالة وفا بأن القوات الإسرائيلية أغلقت مداخل وفتشت مركبات في عين يبرود وسلواد وعين سينيا، مما تسبب في ازدحام مروري.\n\nوقد وقعت هذه الإجراءات في التجمعات المحيطة بيبرود وليس داخل القرية نفسها.\n\nولم يتم التحقق بشكل مستقل من وقوع حادثة جديدة داخل قرية يبرود تحديداً خلال الفترة من 19 إلى 26 نوفمبر. وتظل حماية البنية التحتية للمياه وضمان انتظام التنقل في المنطقة والوصول الآمن إلى الخدمات الأساسية من المخاوف الإنسانية المهمة للسكان.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report: Damage to Yabrud Water Infrastructure — October 29, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: الأضرار التي لحقت بشبكة المياه في يبرود — ٢٩ أكتوبر ٢٠٢٦",
                    "url": "https://container.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                },
                {
                    "labelEn": "WAFA — Military Restrictions Around Ramallah — November 21, 2026",
                    "labelAr": "وفا — تشديد الإجراءات العسكرية في محيط رام الله — ٢١ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177174"
                },
                {
                    "labelEn": "Shehab News Agency — Village Entrance Closures North of Ramallah — November 21, 2026",
                    "labelAr": "وكالة شهاب للأنباء — إغلاق مداخل قرى شمال رام الله — ٢١ نوفمبر ٢٠٢٦",
                    "url": "https://shehabnews.net/en/post?id=169997&slug=israeli-forces-seal-off-village-entrances-north-of-ramallah-and-set-up-military-checkpoints"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.23405%2C31.96616%2C35.25405%2C31.98616&layer=mapnik&marker=31.97616%2C35.24405",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.97616&mlon=35.24405#map=15/31.97616/35.24405",
            "captionEn": "Approximate Yabrud village location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية يبرود، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Yabrud village location",
            "titleAr": "الموقع التقريبي لقرية يبرود",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.97616,
            "longitude": 35.24405,
            "geographicReferenceUrl": "https://mapcarta.com/12908312"
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "On November 14, Israeli forces closed the entrance gates to Yabrud and neighboring Deir Jarir, east of Ramallah, according to WAFA. The closures followed an incident in which settlers shot and wounded a Palestinian driver at the entrance to Deir Jarir. The shooting occurred in Deir Jarir, not Yabrud.\n\nYabrud has also experienced repeated attacks on residents and infrastructure. On October 22, settlers damaged the village's main water network and diverted two pipelines toward nearby settlement outposts. UN OCHA reported that approximately 700 residents lost water access for two days. The supply was subsequently restored.\n\nEarlier in October, WAFA documented assaults on residents and damage to homes and property.\n\nThe November 14 gate closures are the latest Yabrud-specific development confirmed in the sources reviewed. The October incidents provide historical context.\n\nThe immediate concerns are freedom of movement, residents' safety, and protection of essential infrastructure.",
                "textAr": "في 14 نوفمبر، أغلقت القوات الإسرائيلية بوابات مداخل قريتي يبرود ودير جرير المجاورة شرق رام الله، وفقًا لوكالة وفا. وجاء الإغلاق عقب إطلاق مستوطنين النار على سائق فلسطيني وإصابته عند مدخل دير جرير. ووقع إطلاق النار في دير جرير، وليس في يبرود.\n\nوشهدت يبرود أيضًا اعتداءات متكررة استهدفت السكان والبنية التحتية. ففي 22 أكتوبر، ألحق مستوطنون أضرارًا بشبكة المياه الرئيسية للقرية وحوّلوا خطي مياه باتجاه بؤر استيطانية مجاورة. وأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن نحو 700 من السكان فقدوا الوصول إلى المياه لمدة يومين، قبل استعادة الإمدادات لاحقًا.\n\nوفي وقت سابق من أكتوبر، وثقت وكالة وفا اعتداءات على السكان وأضرارًا لحقت بالمنازل والممتلكات.\n\nويُعد إغلاق البوابات في 14 نوفمبر أحدث تطور يخص يبرود أمكن تأكيده في المصادر التي جرت مراجعتها. أما حوادث أكتوبر فتُذكر بوصفها سياقًا تاريخيًا.\n\nوتبقى المخاوف العاجلة حرية التنقل وسلامة السكان وحماية البنية التحتية الأساسية.",
                "sources": [
                    {
                        "labelEn": "WAFA — November 14, 2026: Yabrud and Deir Jarir gate closures",
                        "labelAr": "وفا — 14 نوفمبر 2026: إغلاق بوابات يبرود ودير جرير",
                        "url": "https://english.wafa.ps/Pages/Details/176922"
                    },
                    {
                        "labelEn": "UN OCHA — October 29, 2026: Yabrud water network damage",
                        "labelAr": "أوتشا — 29 أكتوبر 2026: أضرار شبكة المياه في يبرود",
                        "url": "https://container.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — October 9, 2026: Assault in Yabrud",
                        "labelAr": "وفا — 9 أكتوبر 2026: اعتداء في يبرود",
                        "url": "https://english.wafa.ps/Pages/Details/175666"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "The latest verified community-specific incidents reviewed for Yabrud occurred in October. According to UN OCHA, Israeli settlers attempted to steal a Palestinian family's vehicle on October 20 and assaulted three family members who intervened, leaving one with a skull fracture and an eye injury. On October 22, settlers damaged the village's main water network and diverted two water lines toward nearby settlement outposts, interrupting water supplies to approximately 700 residents for two days. The UN reported that service was subsequently restored. No separate November 1–11 incident in Yabrud was confirmed in the sources reviewed.",
            "textAr": "وقعت أحدث الحوادث التي أمكن التحقق منها في قرية يبرود خلال شهر أكتوبر. ووفقًا لمكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، حاول مستوطنون إسرائيليون سرقة مركبة تابعة لعائلة فلسطينية في 20 أكتوبر، واعتدوا على ثلاثة من أفراد العائلة الذين حاولوا منع السرقة، مما أدى إلى إصابة أحدهم بكسر في الجمجمة وإصابة في العين. وفي 22 أكتوبر، ألحق مستوطنون أضرارًا بشبكة المياه الرئيسية للقرية وحوّلوا خطي مياه باتجاه بؤر استيطانية قريبة، مما أدى إلى انقطاع المياه عن نحو 700 من السكان لمدة يومين. وأفادت الأمم المتحدة بإعادة الخدمة لاحقًا. ولم يتم تأكيد وقوع حادث منفصل في يبرود خلال الفترة من 1 إلى 11 نوفمبر في المصادر التي تمت مراجعتها.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 20, Israeli settlers reportedly attempted to steal a Palestinian family's vehicle in Yabrud and assaulted three family members who intervened, seriously injuring one. On October 22, settlers damaged the village's main water network and diverted two water lines toward nearby settlement outposts, interrupting water access for approximately 700 residents for two days. UN OCHA reported that maintenance crews were also attacked and forced away before water service was restored.",
                "textAr": "في 20 أكتوبر، أفادت تقارير بأن مستوطنين إسرائيليين حاولوا سرقة مركبة تابعة لعائلة فلسطينية في قرية يبرود، واعتدوا على ثلاثة من أفراد العائلة الذين تدخلوا، مما أسفر عن إصابة أحدهم بجروح خطيرة. وفي 22 أكتوبر، ألحق مستوطنون أضرارًا بشبكة المياه الرئيسية للقرية، وحوّلوا خطّي مياه باتجاه بؤر استيطانية مجاورة، مما أدى إلى انقطاع المياه عن نحو 700 من السكان لمدة يومين. وأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن فرق الصيانة تعرضت أيضًا للاعتداء وأُجبرت على المغادرة قبل استعادة إمدادات المياه.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — October 24, 2026 (additional grazing and agricultural-damage context)",
                        "labelAr": "وفا — 24 أكتوبر 2026 (سياق إضافي عن الرعي والأضرار الزراعية)",
                        "url": "https://english.wafa.ps/Pages/Details/176223"
                    }
                ]
            }
        ]
    },
    {
        "id": "rammun",
        "nameEn": "Rammun",
        "nameAr": "رمّون",
        "governorateId": "ramallah",
        "governorateEn": "Ramallah",
        "governorateAr": "رام الله",
        "descriptionEn": "Community overview: Rammun, Ramallah. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: رمّون، رام الله. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "ramallah",
        "backgroundEn": "Rammun is a Palestinian village east of Ramallah city. ARIJ’s 2012 profile places it south of Taybeh and north of Deir Dibwan, on high ground.",
        "backgroundAr": "رمّون قرية فلسطينية شرق مدينة رام الله. ويضعها ملف أريج لعام 2012 جنوب الطيبة وشمال دير دبوان، على مرتفعات.",
        "concernsEn": "OCHA reported settlers attacking Bedouin families and stealing sheep east of Rammun on 20 October 2026.",
        "concernsAr": "أفادت أوتشا باعتداء مستوطنين على أسر بدوية وسرقة أغنام شرق رمّون في 20 أكتوبر 2026.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Families east of Rammun",
                "supportAr": "الأسر شرق رمّون"
            },
            {
                "labelEn": "ARIJ — Rammun Village Profile (2012; archived copy)",
                "labelAr": "أريج — ملف قرية رمّون (2012؛ نسخة مؤرشفة)",
                "url": "https://www.palestineremembered.com/images/V2/Books/Arij/Ramallah/Rammun/en/Rammun-vp-en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Location and geographic context",
                "supportAr": "الموقع والسياق الجغرافي",
                "publicationPeriod": "2012"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "On November 25, Israeli settlement-monitoring organization Peace Now published an assessment of new grazing land allocations in the Mu'arrajat area, involving lands belonging to Rammun, Taybeh and Deir Dibwan.\n\nTwo allocations, published on November 17 and 24, cover a combined 2,494 dunams. Peace Now reported that Palestinian herding communities previously used these lands and linked their displacement to settler harassment and attacks.\n\nSeparately, Yafa News Network reported a settler attack on Rammun on November 24. Further details about injuries or property damage have not been independently confirmed.\n\nThese developments follow earlier settlement expansion on Rammun's agricultural land. In May 2026, Palestine News Network reported the establishment of an outpost involving tents and mobile homes in the Jisr al-Khalla area.\n\nAccess to agricultural and grazing land, protection of private property and the continued viability of Palestinian farming and herding livelihoods remain important concerns for Rammun's residents.",
            "textAr": "في 25 نوفمبر، نشرت حركة السلام الآن الإسرائيلية، التي تراقب النشاط الاستيطاني، تقييماً لتخصيص أراضٍ جديدة للرعي في منطقة المعرجات، تشمل أراضي تابعة لبلدات رمون والطيبة ودير دبوان.\n\nويبلغ مجموع مساحة الأراضي المشمولة بقرارَي التخصيص المنشورين في 17 و24 نوفمبر نحو 2494 دونماً. وأفادت الحركة بأن تجمعات رعوية فلسطينية كانت تستخدم هذه الأراضي سابقاً، وربطت تهجيرها بمضايقات المستوطنين واعتداءاتهم.\n\nوفي سياق منفصل، أفادت شبكة يافا الإخبارية بوقوع اعتداء للمستوطنين على قرية رمون في 24 نوفمبر. ولم يتم التحقق بشكل مستقل من تفاصيل إضافية بشأن الإصابات أو الأضرار التي لحقت بالممتلكات.\n\nوتأتي هذه التطورات بعد توسع استيطاني سابق على الأراضي الزراعية التابعة لرمون. ففي مايو 2026، أفادت شبكة فلسطين الإخبارية بإقامة بؤرة استيطانية تضم خياماً وبيوتاً متنقلة في منطقة جسر الخلة.\n\nويظل الوصول إلى الأراضي الزراعية والمراعي، وحماية الممتلكات الخاصة، واستمرار سبل عيش المزارعين ومربي المواشي الفلسطينيين من أبرز المخاوف التي تواجه سكان رمون.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Peace Now — Grazing Land Allocations in the Mu'arrajat Area — November 25, 2026",
                    "labelAr": "السلام الآن — تخصيص أراضٍ للرعي في منطقة المعرجات — ٢٥ نوفمبر ٢٠٢٦",
                    "url": "https://peacenow.org.il/en/following-elections-israel-allocates-over-28000-dunams-of-west-bank-land-to-settlers-for-grazing"
                },
                {
                    "labelEn": "Yafa News Network via Nabd — Reported Settler Attack on Rammun — November 24, 2026",
                    "labelAr": "شبكة يافا الإخبارية عبر نبض — اعتداء مستوطنين على قرية رمون — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://nabd.com/s/181294432-ff1d06/%D9%85%D8%B3%D8%AA%D9%88%D8%B7%D9%86%D9%88%D9%86-%D9%8A%D9%87%D8%A7%D8%AC%D9%85%D9%88%D9%86-%D9%82%D8%B1%D9%8A%D8%A9-%D8%B1%D9%85%D9%88%D9%86%D8%8C-%D8%B4%D8%B1%D9%82-%D8%B1%D8%A7%D9%85-%D8%A7%D9%84%D9%84%D9%87"
                },
                {
                    "labelEn": "Palestine News Network — New Settlement Outpost on Rammun Land — May 11, 2026",
                    "labelAr": "شبكة فلسطين الإخبارية — إقامة بؤرة استيطانية جديدة على أراضي رمون — ١١ مايو ٢٠٢٦",
                    "url": "https://pnn.ps/news/722886"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.28946%2C31.92116%2C35.30946%2C31.94116&layer=mapnik&marker=31.93116%2C35.29946",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.93116&mlon=35.29946#map=15/31.93116/35.29946",
            "captionEn": "Approximate Rammun village location, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية رمون، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Rammun village location",
            "titleAr": "الموقع التقريبي لقرية رمون",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.93116,
            "longitude": 35.29946
        },
        "previousReports": [
            {
                "date": "2026-11-19",
                "dateLabelEn": "November 19, 2026",
                "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
                "paragraphs": true,
                "textEn": "Rammun, east of Ramallah, remains exposed to settler violence affecting nearby Palestinian Bedouin families, grazing land, and access roads.\n\nUN OCHA reported that on October 20, Israeli settlers accompanied by Israeli forces attacked Bedouin families east of Rammun. According to the report, family members were detained and approximately 100 sheep were taken from a livestock shelter and driven toward a nearby settlement outpost.\n\nEarlier, on February 7, WAFA reported that armed settlers blocked the road between Rammun and Deir Dibwan and assaulted two Palestinians. One suffered a head injury requiring hospital treatment; the other sustained bruises. Israeli forces also entered Rammun and fired tear gas and stun grenades.\n\nThese are documented earlier incidents, not new November attacks. No additional Rammun-specific incident during November 12–18 was confirmed in the sources reviewed.\n\nThe continuing concerns are residents' safety, livestock and grazing access, and freedom of movement.",
                "textAr": "تواجه قرية رمّون شرق رام الله مخاطر عنف المستوطنين الذي يؤثر في العائلات البدوية الفلسطينية القريبة وأراضي الرعي وطرق الوصول.\n\nأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن مستوطنين إسرائيليين، برفقة قوات إسرائيلية، هاجموا عائلات بدوية شرق رمّون في 20 أكتوبر. ووفقًا للتقرير، احتُجز أفراد من العائلات، واستولى المستوطنون على نحو 100 رأس من الأغنام من حظيرة للمواشي وساقوها باتجاه بؤرة استيطانية مجاورة.\n\nوفي وقت سابق، أفادت وكالة وفا في 7 فبراير بأن مستوطنين مسلحين أغلقوا الطريق بين رمّون ودير دبوان واعتدوا على فلسطينيين اثنين. وأصيب أحدهما في رأسه ونُقل إلى المستشفى لتلقي العلاج، بينما أصيب الآخر بكدمات. كما دخلت القوات الإسرائيلية رمّون وأطلقت قنابل الغاز المسيل للدموع والقنابل الصوتية.\n\nهذه حوادث سابقة موثقة، وليست اعتداءات جديدة وقعت في نوفمبر. ولم تؤكد المصادر التي جرت مراجعتها وقوع حادث إضافي يخص رمّون تحديدًا خلال الفترة من 12 إلى 18 نوفمبر.\n\nوتبقى المخاوف المستمرة سلامة السكان وحماية المواشي والوصول إلى أراضي الرعي وحرية التنقل.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — October 29, 2026: Attack east of Rammun",
                        "labelAr": "أوتشا — 29 أكتوبر 2026: اعتداء شرق رمّون",
                        "url": "https://container.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — February 7, 2026: Assault between Rammun and Deir Dibwan",
                        "labelAr": "وفا — 7 فبراير 2026: اعتداء بين رمّون ودير دبوان",
                        "url": "https://english.wafa.ps/Pages/Details/167181"
                    }
                ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "The most recent verified incident reviewed near Rammun occurred on October 20. UN OCHA reported that Israeli settlers accompanied by Israeli forces attacked Palestinian Bedouin families east of Rammun, detained family members, and stole approximately 100 sheep, moving them toward a nearby settlement outpost. No additional attack specifically in Rammun was independently confirmed for November 1–11 in the sources reviewed.",
            "textAr": "وقعت أحدث حادثة أمكن التحقق منها بالقرب من رمّون في 20 أكتوبر. وأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن مستوطنين إسرائيليين برفقة قوات إسرائيلية اعتدوا على عائلات بدوية فلسطينية شرق رمّون، واحتجزوا أفرادًا من العائلات، وسرقوا نحو 100 رأس من الأغنام، واقتادوها باتجاه بؤرة استيطانية قريبة. ولم يتم تأكيد وقوع اعتداء إضافي داخل رمّون خلال الفترة من 1 إلى 11 نوفمبر بصورة مستقلة في المصادر التي تمت مراجعتها.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 20, Israeli settlers accompanied by Israeli forces reportedly attacked Palestinian Bedouin families east of Rammun. Family members were detained, and approximately 100 sheep were taken from a livestock shelter and driven toward a nearby settlement outpost, according to UN OCHA's October 29 humanitarian report.",
                "textAr": "في 20 أكتوبر، أفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن مستوطنين إسرائيليين، برفقة قوات إسرائيلية، اعتدوا على عائلات بدوية فلسطينية شرق قرية رمون. واحتُجز أفراد من العائلات، وسِيق نحو 100 رأس من الأغنام من حظيرة للمواشي باتجاه بؤرة استيطانية قريبة، وفقًا للتقرير الإنساني الصادر في 29 أكتوبر.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    }
                ]
            }
        ]
    },
    {
        "id": "immatin",
        "nameEn": "Immatin",
        "nameAr": "إماتين",
        "governorateId": "qalqiliya",
        "governorateEn": "Qalqiliya",
        "governorateAr": "قلقيلية",
        "descriptionEn": "Community overview: Immatin, Qalqiliya. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: إماتين، قلقيلية. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://english.wafa.ps/Pages/Details/175523",
        "sourcePublicationDate": "2026-10-05",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "other-areas",
        "backgroundEn": "Immatin (إماتين) is a Palestinian village east of Qalqilya in the northern West Bank. Olive cultivation, farming, and livestock are important to the local community.\n\nThe village has experienced longstanding restrictions affecting agricultural land and construction. Parts of its surrounding farmland lie in Area C, where Israeli planning restrictions and nearby settlements have affected residents' access to land.\n\nIn July 2026, WAFA reported that Israeli authorities demolished residential and agricultural structures south of Immatin that had served 22 families.",
        "backgroundAr": "إماتين قرية فلسطينية تقع شرق قلقيلية في شمال الضفة الغربية. وتُعد زراعة الزيتون والزراعة وتربية المواشي من مصادر الرزق المهمة لسكانها.\n\nتواجه القرية منذ سنوات قيودًا تؤثر على الأراضي الزراعية والبناء. وتقع أجزاء من الأراضي المحيطة بها ضمن المنطقة «ج»، حيث أثرت قيود التخطيط الإسرائيلية والمستوطنات المجاورة على وصول السكان إلى أراضيهم.\n\nوفي يوليو 2026، أفادت وكالة وفا بأن السلطات الإسرائيلية هدمت منشآت سكنية وزراعية جنوب إماتين كانت تخدم 22 عائلة.",
        "concernsEn": "WAFA, citing local sources, reported injuries in a settler assault on Palestinians on their land in Immatin on 5 October 2026.",
        "concernsAr": "أفادت وفا، نقلًا عن مصادر محلية، بوقوع إصابات في اعتداء مستوطنين على فلسطينيين في أراضيهم بإماتين في 5 أكتوبر 2026.",
        "sources": [
            {
                "labelEn": "WAFA — July 14, 2026: demolitions in Immatin",
                "labelAr": "وفا — 14 يوليو 2026: عمليات هدم في إماتين",
                "url": "https://english.wafa.ps/Pages/Details/172644"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Update #295",
                "labelAr": "أوتشا — تحديث الحالة الإنسانية رقم 295",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank"
            },
            {
                "labelEn": "Land Research Center — Agricultural construction restrictions in Immatin",
                "labelAr": "مركز أبحاث الأراضي — قيود البناء الزراعي في إماتين",
                "url": "https://poica.org/2022/03/halt-of-work-notice-for-an-agricultural-room-in-immatin-village-east-qalqilya/"
            },
            {
                "labelEn": "WAFA — Assault in Immatin, 5 October 2026",
                "labelAr": "وفا — اعتداء في إماتين، 5 أكتوبر 2026",
                "url": "https://english.wafa.ps/Pages/Details/175523",
                "reportDate": null,
                "publicationDate": "2026-10-05",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Dated, locally attributed assault report",
                "supportAr": "تقرير اعتداء مؤرّخ ومنسوب إلى مصادر محلية"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Freedom of movement and access to agricultural land remain important humanitarian concerns for Immatin.\n\nOn November 5, the Union of OIC News Agencies reported that Israeli forces established a military checkpoint at the village entrance, stopping vehicles, conducting searches and inspecting passengers' identification documents.\n\nEarlier humanitarian reporting from UN OCHA documented the demolition of 37 structures in the nearby Arab al-Jahalin/Wadi Ma'anes Bedouin community, displacing 64 residents, including 34 children.\n\nRegional security concerns continued this week. On November 23, WAFA reported settler intimidation in neighboring Far'ata. Military operations and entrance restrictions subsequently disrupted daily life in Qalqilya City on November 24.\n\nOCHA's November 26 humanitarian report also highlighted unprecedented levels of settler violence associated with the West Bank olive harvest.\n\nNo new incident specifically inside Immatin was verified in the sources reviewed this week. Safe agricultural access, reliable transportation and protection of civilian livelihoods remain important priorities for the village.",
            "textAr": "تظل حرية التنقل والوصول إلى الأراضي الزراعية من المخاوف الإنسانية المهمة في قرية إماتين.\n\nوفي 5 نوفمبر، أفاد اتحاد وكالات أنباء دول منظمة التعاون الإسلامي بأن القوات الإسرائيلية أقامت حاجزاً عسكرياً عند مدخل القرية، حيث أوقفت المركبات وفتشتها ودققت في هويات الركاب.\n\nكما وثّقت تقارير إنسانية سابقة صادرة عن مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية هدم 37 منشأة في تجمع عرب الجهالين/وادي معنس البدوي المجاور، مما أدى إلى تهجير 64 شخصاً، من بينهم 34 طفلاً.\n\nواستمرت المخاوف الأمنية في المنطقة خلال هذا الأسبوع. ففي 23 نوفمبر، أفادت وكالة وفا بقيام مستوطنين بترهيب السكان في قرية فرعتا المجاورة. كما أدت العمليات العسكرية والقيود المفروضة على مداخل مدينة قلقيلية في 24 نوفمبر إلى تعطيل الحياة اليومية.\n\nوسلط التقرير الإنساني الصادر عن مكتب الأمم المتحدة في 26 نوفمبر الضوء على مستويات غير مسبوقة من عنف المستوطنين المرتبط بموسم قطف الزيتون في الضفة الغربية.\n\nولم يتم التحقق من وقوع حادثة جديدة داخل إماتين تحديداً في المصادر التي تمت مراجعتها هذا الأسبوع. ويظل الوصول الآمن إلى الأراضي الزراعية وضمان التنقل وحماية سبل عيش المدنيين من الأولويات المهمة للقرية.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "Union of OIC News Agencies — Military Checkpoint at Immatin — November 5, 2026",
                    "labelAr": "اتحاد وكالات أنباء دول منظمة التعاون الإسلامي — حاجز عسكري عند مدخل إماتين — ٥ نوفمبر ٢٠٢٦",
                    "url": "https://www.una-oic.org/en/palestinians/2026/11/05/Arrests--raids--and-widespread-attacks/"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report — July 23, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٣ يوليو ٢٠٢٦",
                    "url": "https://www.ochaopt.org/ar/content/humanitarian-situation-report-23-july-2026"
                },
                {
                    "labelEn": "WAFA — Raids and Settler Intimidation in Qalqilya Governorate — November 23, 2026",
                    "labelAr": "وفا — اقتحامات وترهيب المستوطنين في محافظة قلقيلية — ٢٣ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177204"
                },
                {
                    "labelEn": "WAFA — Continuing Military Incursion into Qalqilya — November 24, 2026",
                    "labelAr": "وفا — استمرار الاقتحام العسكري لمدينة قلقيلية — ٢٤ نوفمبر ٢٠٢٦",
                    "url": "https://english.wafa.ps/Pages/Details/177278"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.14836%2C32.18164%2C35.16836%2C32.20164&layer=mapnik&marker=32.19164%2C35.15836",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.19164&mlon=35.15836#map=14/32.19164/35.15836",
            "captionEn": "Approximate Immatin village location in Qalqilya Governorate, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية إماتين في محافظة قلقيلية، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Immatin village location in Qalqilya Governorate",
            "titleAr": "الموقع التقريبي لقرية إماتين في محافظة قلقيلية",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 32.19164,
            "longitude": 35.15836
        },
        "previousReports": [
            {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Residents of Immatin, east of Qalqilya, faced repeated movement restrictions and reported settler harassment during November.\n\nAccording to the Palestinian monitoring platform Mo3ta, Israeli forces established checkpoints at the village entrance on November 12, 13, 14, 15, and 16, obstructing traffic. The same source reported that settlers threw stones at Palestinian vehicles traveling between Immatin and Asira al-Qibliya on November 12.\n\nEarlier, on November 8, the monitoring platform recorded an Israeli military raid and the arrest of four residents. Palestinian Information Center also reported four arrests in Immatin in its November 10 coverage.\n\nThese incidents follow longstanding pressure on the community's homes and farmland. In July, WAFA documented the demolition of residential and agricultural structures serving 22 families in an area south of the village.\n\nThe immediate concerns are freedom of movement, residents' safety, and access to agricultural livelihoods.",
            "textAr": "واجه سكان قرية إماتين شرق قلقيلية قيودًا متكررة على الحركة ومضايقات من المستوطنين خلال نوفمبر، وفقًا للتقارير.\n\nبحسب منصة معطى الفلسطينية للرصد، أقامت القوات الإسرائيلية حواجز عند مدخل القرية أيام 12 و13 و14 و15 و16 نوفمبر، مما أعاق حركة المرور. وأفادت المنصة نفسها بأن مستوطنين رشقوا مركبات فلسطينية بالحجارة على الطريق بين إماتين وعصيرة القبلية في 12 نوفمبر.\n\nوفي وقت سابق، بتاريخ 8 نوفمبر، وثقت المنصة اقتحامًا عسكريًا إسرائيليًا واعتقال أربعة من سكان القرية. كما أفاد المركز الفلسطيني للإعلام باعتقال أربعة فلسطينيين في إماتين ضمن تغطيته المنشورة في 10 نوفمبر.\n\nوتأتي هذه الأحداث في سياق ضغوط طويلة الأمد على منازل السكان وأراضيهم الزراعية. ففي يوليو، وثقت وكالة وفا هدم منشآت سكنية وزراعية كانت تخدم 22 عائلة في منطقة جنوب القرية.\n\nوتبقى المخاوف العاجلة حرية التنقل وسلامة السكان والوصول إلى مصادر الرزق الزراعية.",
            "sources": [
                {
                    "labelEn": "Mo3ta — Immatin locality incident records",
                    "labelAr": "معطى — سجلات الحوادث في إماتين",
                    "url": "https://mo3ta.ps/localities/01kyspwtzwfprrr0vej16qs5nc"
                },
                {
                    "labelEn": "Palestinian Information Center — November 10, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — 10 نوفمبر 2026",
                    "url": "https://english.palinfo.com/news/2026/11/10/373455/"
                }
            ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "During November 1–11, Israeli military operations affected Immatin, east of Qalqilya. Reporting published November 5 described Israeli forces establishing a checkpoint at the village entrance, stopping vehicles, searching them, and checking passengers' identification. A November 10 report described further raids on homes in Immatin, searches of their contents, and the detention of four Palestinians. These reports document both movement restrictions and house raids during the reporting period.",
            "textAr": "خلال الفترة من 1 إلى 11 نوفمبر، تأثرت قرية إماتين، شرق قلقيلية، بعمليات عسكرية إسرائيلية. ووصفت تقارير نُشرت في 5 نوفمبر إقامة قوات إسرائيلية حاجزًا عسكريًا عند مدخل القرية، حيث أوقفت المركبات وفتشتها ودققت في هويات ركابها. كما أفاد تقرير بتاريخ 10 نوفمبر بمداهمة منازل في إماتين وتفتيش محتوياتها واعتقال أربعة فلسطينيين. وتوثق هذه التقارير قيودًا على الحركة ومداهمات للمنازل خلال فترة التغطية.",
            "sources": [
                {
                    "labelEn": "UNA / WAFA — Immatin checkpoint, November 5, 2026",
                    "labelAr": "اتحاد وكالات أنباء التعاون الإسلامي / وفا — حاجز إماتين، 5 نوفمبر 2026",
                    "url": "https://www.una-oic.org/en/palestinians/2026/11/05/Arrests--raids--and-widespread-attacks/"
                },
                {
                    "labelEn": "Palestinian Information Center — Immatin raids, November 10, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — مداهمات إماتين، 10 نوفمبر 2026",
                    "url": "https://english.palinfo.com/news/2026/11/10/373455/"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "During October 20–26, Israeli settlers reportedly attacked Palestinian olive harvesters in Immatin, damaging three agricultural tractors and approximately 20 bags of harvested olives and injuring one Palestinian, according to UN OCHA. On October 22, WAFA also reported that settlers set olive trees on fire near the village while Israeli forces forced farmers from their land and detained a farmer and several workers.",
                "textAr": "خلال الفترة من 20 إلى 26 أكتوبر، أفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن مستوطنين إسرائيليين اعتدوا على مزارعين فلسطينيين خلال موسم قطف الزيتون في إماتين، وألحقوا أضرارًا بثلاثة جرارات زراعية ونحو 20 كيسًا من الزيتون المحصود، مما أسفر عن إصابة فلسطيني واحد. وفي 22 أكتوبر، أفادت وكالة وفا بأن مستوطنين أشعلوا النار في أشجار زيتون قرب القرية، بينما أجبرت القوات الإسرائيلية المزارعين على مغادرة أراضيهم واحتجزت مزارعًا وعددًا من العمال.",
                "sources": [
                    {
                        "labelEn": "UN OCHA — Humanitarian Situation Report, October 29, 2026",
                        "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                        "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026"
                    },
                    {
                        "labelEn": "WAFA — October 22, 2026",
                        "labelAr": "وفا — 22 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176178"
                    },
                    {
                        "labelEn": "WAFA — October 25, 2026",
                        "labelAr": "وفا — 25 أكتوبر 2026",
                        "url": "https://english.wafa.ps/Pages/Details/176252"
                    }
                ]
            }
        ]
    },
    {
        "id": "silwan",
        "nameEn": "Silwan",
        "nameAr": "سلوان",
        "governorateId": "east-jerusalem",
        "governorateEn": "East Jerusalem",
        "governorateAr": "القدس الشرقية",
        "descriptionEn": "Community overview: Silwan, East Jerusalem. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: سلوان، القدس الشرقية. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "other-areas",
        "backgroundEn": "Silwan is a Palestinian neighborhood area of occupied East Jerusalem, immediately south of the Old City and Al-Aqsa Mosque compound. It includes distinct neighborhoods such as Al-Bustan, Batn al-Hawa, Wadi Hilweh, and Wadi Qaddum.\n\nPalestinian families in Silwan have faced longstanding housing insecurity, including demolition orders, restrictions on building permits, and eviction proceedings involving Israeli settler organizations.\n\nUN OCHA documented the forced eviction of Palestinian families in Batn al-Hawa during 2026 and continuing risks of displacement across East Jerusalem.",
        "backgroundAr": "سلوان منطقة فلسطينية في القدس الشرقية المحتلة، تقع مباشرة جنوب البلدة القديمة والمسجد الأقصى. وتضم أحياء متميزة، منها البستان وبطن الهوى ووادي حلوة ووادي قدوم.\n\nتواجه العائلات الفلسطينية في سلوان منذ سنوات انعدام الأمن السكني، بما في ذلك أوامر الهدم والقيود على تراخيص البناء وإجراءات الإخلاء المرتبطة بمنظمات استيطانية إسرائيلية.\n\nووثق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية إخلاء عائلات فلسطينية قسرًا من بطن الهوى خلال عام 2026، إلى جانب استمرار مخاطر التهجير في أنحاء القدس الشرقية.",
        "concernsEn": "OCHA’s late-October 2026 report described a road gate restricting vehicle access in Wadi ar Rababa, Silwan.",
        "concernsAr": "وصف تقرير أوتشا أواخر أكتوبر 2026 بوابة طريق تقيّد وصول المركبات في وادي الربابة بسلوان.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, August 28, 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 28 أغسطس 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-28-august-2026",
                "supportEn": "East Jerusalem evictions and displacement",
                "supportAr": "الإخلاء والتهجير في القدس الشرقية"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Vehicle access",
                "supportAr": "وصول المركبات"
            },
            {
                "labelEn": "UN OCHA — East Jerusalem: the coercive environment, 10 July 2018",
                "labelAr": "أوتشا — القدس الشرقية: البيئة القسرية، 10 يوليو 2018",
                "url": "https://www.ochaopt.org/content/humanitarian-impact-settlements-palestinian-neighbourhoods-east-jerusalem-coercive",
                "reportDate": null,
                "publicationDate": "2018-07-10",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "Silwan and Batan al-Hawa context",
                "supportAr": "السياق الجغرافي لسلوان وبطن الهوى"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Residential demolitions and displacement continued to affect Palestinian families in Silwan this week.\n\nOn November 20, demolition records compiled from UN OCHA data by the Good Shepherd Collective documented the destruction of two structures in Silwan, displacing five residents, including three children.\n\nOCHA's November 26 humanitarian report separately confirmed residential displacement in Al-Bustan during its November 17–23 reporting period. Israeli authorities cited the absence of Israeli-issued construction permits in the demolition cases covered by the report.\n\nEarlier, OCHA documented the displacement of a six-member family in Al-Bustan, including a person with a physical disability.\n\nThese developments follow longstanding housing insecurity. In an April 2026 update, Israeli human rights organization B'Tselem documented 48 home demolitions in Al-Bustan since October 2023 and ongoing eviction proceedings affecting Palestinian families in Batn al-Hawa.\n\nSecure housing, protection from displacement, access to legal assistance and continuity of children's education remain significant humanitarian concerns for Silwan's residents.",
            "textAr": "استمرت عمليات هدم المباني السكنية والنزوح في التأثير على العائلات الفلسطينية في سلوان خلال هذا الأسبوع.\n\nوفي 20 نوفمبر، وثّقت سجلات الهدم التي جمعتها مؤسسة الراعي الصالح من بيانات مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية هدم منشأتين في سلوان، مما أدى إلى تهجير خمسة أشخاص، من بينهم ثلاثة أطفال.\n\nكما أكد التقرير الإنساني الصادر عن المكتب في 26 نوفمبر وقوع حالات نزوح سكني في حي البستان خلال الفترة من 17 إلى 23 نوفمبر. واستندت السلطات الإسرائيلية في حالات الهدم الواردة في التقرير إلى عدم الحصول على تراخيص بناء إسرائيلية.\n\nوفي وقت سابق، وثّق المكتب تهجير عائلة مكونة من ستة أفراد في حي البستان، من بينهم شخص ذو إعاقة جسدية.\n\nوتأتي هذه التطورات في ظل انعدام الأمن السكني المستمر منذ سنوات. ففي تحديث نشرته منظمة بتسيلم الإسرائيلية لحقوق الإنسان في أبريل 2026، وثّقت المنظمة هدم 48 منزلاً في حي البستان منذ أكتوبر 2023، واستمرار إجراءات الإخلاء التي تؤثر على العائلات الفلسطينية في حي بطن الهوى.\n\nويظل توفير السكن الآمن والحماية من التهجير والوصول إلى المساعدة القانونية وضمان استمرار تعليم الأطفال من أبرز المخاوف الإنسانية لسكان سلوان.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                },
                {
                    "labelEn": "Good Shepherd Collective — OCHA-Derived Demolition Database",
                    "labelAr": "مؤسسة الراعي الصالح — قاعدة بيانات الهدم المستندة إلى بيانات الأمم المتحدة",
                    "url": "https://goodshepherdcollective.org/"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report — November 13, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ١٣ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                },
                {
                    "labelEn": "B'Tselem — Home Demolitions, Evictions and Dispossession in Silwan — Updated April 27, 2026",
                    "labelAr": "بتسيلم — هدم المنازل والإخلاء ومصادرة الممتلكات في سلوان — تحديث ٢٧ أبريل ٢٠٢٦",
                    "url": "https://www.btselem.org/jerusalem/202603_judaizing_jerusalem_11_palestinian_families_to_be_evicted_this_month_from_baten_al_hawa"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.22696%2C31.76060%2C35.24696%2C31.78060&layer=mapnik&marker=31.77060%2C35.23696",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.77060&mlon=35.23696#map=15/31.77060/35.23696",
            "captionEn": "Approximate Silwan neighborhood location in East Jerusalem, not an exact residential address.",
            "captionAr": "الموقع التقريبي لحي سلوان في القدس الشرقية، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Silwan neighborhood location in East Jerusalem",
            "titleAr": "الموقع التقريبي لحي سلوان في القدس الشرقية",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.7706,
            "longitude": 35.23696
        },
        "previousReports": [
            {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Palestinian families in Silwan, occupied East Jerusalem, faced further home demolitions during November.\n\nOn November 17, Israeli authorities compelled two residents of Al-Bustan to demolish property, according to a November 18 report by the Palestinian Information Center citing the Jerusalem Governorate. Mohammed Abu Diyab demolished his 60-square-meter home, where he lived with his wife and three children. Shahada Qara'ein was compelled to demolish approximately 50 square meters of storage and parking structures.\n\nEarlier, on November 4, Israeli authorities demolished Suleiman Abu Subaih's home in Al-Bustan. UN OCHA separately documented the displacement of six people in the neighborhood during its November 3–9 reporting period.\n\nThese incidents reflect continuing pressure on Palestinian housing in Silwan. Demolition orders and eviction proceedings affect different neighborhoods and must not be treated as identical cases.\n\nThe immediate concerns are housing security, family displacement, and access to legal protection.",
            "textAr": "واجهت العائلات الفلسطينية في سلوان بالقدس الشرقية المحتلة عمليات هدم إضافية للمنازل خلال نوفمبر.\n\nفي 17 نوفمبر، أجبرت السلطات الإسرائيلية اثنين من سكان حي البستان على هدم ممتلكاتهما، وفقًا لتقرير نشره المركز الفلسطيني للإعلام في 18 نوفمبر نقلًا عن محافظة القدس. وهدم محمد أبو دياب منزله البالغ مساحته 60 مترًا مربعًا، والذي كان يعيش فيه مع زوجته وأطفالهما الثلاثة. كما أُجبر شحادة قرعين على هدم منشآت للتخزين وموقف للمركبات تبلغ مساحتها نحو 50 مترًا مربعًا.\n\nوفي وقت سابق، في 4 نوفمبر، هدمت السلطات الإسرائيلية منزل سليمان أبو صبيح في حي البستان. ووثق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بشكل منفصل تهجير ستة أشخاص من الحي خلال فترة التقرير الممتدة من 3 إلى 9 نوفمبر.\n\nتعكس هذه الأحداث استمرار الضغوط على السكن الفلسطيني في سلوان. وتؤثر أوامر الهدم وإجراءات الإخلاء على أحياء مختلفة، ولا ينبغي التعامل معها بوصفها قضايا متطابقة.\n\nوتبقى المخاوف العاجلة أمن السكن وتهجير العائلات والوصول إلى الحماية القانونية.",
            "sources": [
                {
                    "labelEn": "Palestinian Information Center — November 18, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — 18 نوفمبر 2026",
                    "url": "https://english.palinfo.com/news/2026/11/18/373905/"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, November 13, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 13 نوفمبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                },
                {
                    "labelEn": "WAFA — November 4, 2026",
                    "labelAr": "وفا — 4 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176654"
                }
            ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "On November 4, Israeli forces demolished a Palestinian home in the al-Bustan neighborhood of Silwan, in occupied East Jerusalem. According to WAFA, the 80-square-metre home belonged to Suleiman Abu Subaih and housed him and his wife. Jerusalem Governorate reported that the house had stood for 25 years and that bulldozers damaged roads and uprooted trees while clearing access to the property. The demolition is a documented incident within the November 1–11 reporting period.",
            "textAr": "في 4 نوفمبر، هدمت القوات الإسرائيلية منزلًا فلسطينيًا في حي البستان ببلدة سلوان في القدس الشرقية المحتلة. ووفقًا لوكالة وفا، تبلغ مساحة المنزل 80 مترًا مربعًا، ويعود لسليمان أبو صبيح، وكان يسكنه مع زوجته. وأفادت محافظة القدس بأن المنزل قائم منذ 25 عامًا، وأن الجرافات ألحقت أضرارًا بالطرق واقتلعت أشجارًا أثناء فتح الطريق للوصول إليه. ويُعد الهدم حادثة موثقة خلال فترة التغطية من 1 إلى 11 نوفمبر.",
            "sources": [
                {
                    "labelEn": "WAFA — Silwan home demolition, November 4, 2026",
                    "labelAr": "وفا — هدم منزل في سلوان، 4 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/176654"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 13, Israeli authorities demolished two Palestinian homes in the Wadi Qaddoum neighborhood of Silwan, south of Jerusalem's Old City, according to WAFA. The homes belonged to members of the al-Salaymeh family. The demolitions occurred amid continuing pressure on Palestinian residents through demolition orders and eviction proceedings. Human Rights Watch has documented the wider threat of displacement in Silwan, particularly in al-Bustan and Batn al-Hawa.",
                "textAr": "في 13 أكتوبر، هدمت السلطات الإسرائيلية منزلين فلسطينيين في حي وادي قدوم بسلوان، جنوب البلدة القديمة في القدس، وفقًا لوكالة وفا. ويعود المنزلان إلى أفراد من عائلة السلايمة. وجاءت عمليتا الهدم في ظل استمرار الضغوط على السكان الفلسطينيين من خلال أوامر الهدم وإجراءات الإخلاء. وقد وثّقت منظمة هيومن رايتس ووتش التهديد الأوسع بالتهجير في سلوان، ولا سيما في حيّي البستان وبطن الهوى.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 13, 2026 — Occupation forces demolish homes of resident and his son in Silwan, Jerusalem",
                        "labelAr": "وفا — 13 أكتوبر 2026 — قوات الاحتلال تهدم منزلي مواطن ونجله في سلوان بالقدس",
                        "url": "https://english.wafa.ps/Pages/Details/175844"
                    },
                    {
                        "labelEn": "Human Rights Watch — June 17, 2026 — East Jerusalem: Israel Escalating Home Demolitions, Evictions",
                        "labelAr": "هيومن رايتس ووتش — 17 يونيو 2026 — القدس الشرقية: إسرائيل تصعّد هدم المنازل وعمليات الإخلاء",
                        "url": "https://www.hrw.org/news/2026/06/17/east-jerusalem-israel-escalating-home-demolitions-evictions"
                    }
                ]
            }
        ]
    },
    {
        "id": "al-walaja",
        "nameEn": "Al-Walaja",
        "nameAr": "الولجة",
        "governorateId": "bethlehem-jerusalem",
        "governorateEn": "Bethlehem/Jerusalem area",
        "governorateAr": "منطقة بيت لحم/القدس",
        "descriptionEn": "Community overview: Al-Walaja, Bethlehem/Jerusalem area. Community-specific reporting is being researched.",
        "descriptionAr": "نبذة عن المجتمع: الولجة، منطقة بيت لحم/القدس. يجري البحث عن تغطية خاصة بهذا المجتمع.",
        "sourceUrl": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
        "sourcePublicationDate": "2026-10-31",
        "lastVerifiedDate": "2026-11-01",
        "featureAnchor": null,
        "imagePath": null,
        "regionId": "other-areas",
        "backgroundEn": "Al-Walaja (الولجة) is a Palestinian village northwest of Bethlehem, near Jerusalem. Its residents have historically depended on agriculture, olive groves, and surrounding farmland.\n\nThe village extends across Area C and East Jerusalem, with only a small portion of its built-up area in Area B. Israeli planning restrictions, the separation barrier, and demolition orders have placed longstanding pressure on residents' housing and agricultural livelihoods.\n\nAccording to UN OCHA, Israeli authorities demolished 141 Palestinian-owned structures in Al-Walaja between 2014 and August 2026. The village's UNRWA-operated primary school has also faced demolition proceedings.",
        "backgroundAr": "الولجة قرية فلسطينية تقع شمال غرب بيت لحم بالقرب من القدس. وقد اعتمد سكانها تاريخيًا على الزراعة وبساتين الزيتون والأراضي الزراعية المحيطة.\n\nتمتد القرية عبر المنطقة «ج» والقدس الشرقية، بينما يقع جزء صغير فقط من مساحتها العمرانية ضمن المنطقة «ب». وقد فرضت قيود التخطيط الإسرائيلية والجدار الفاصل وأوامر الهدم ضغوطًا طويلة الأمد على مساكن السكان ومصادر رزقهم الزراعية.\n\nووفقًا لمكتب الأمم المتحدة لتنسيق الشؤون الإنسانية، هدمت السلطات الإسرائيلية 141 منشأة فلسطينية في الولجة بين عام 2014 وأغسطس 2026. كما واجهت المدرسة الأساسية التابعة للأونروا في القرية إجراءات هدم.",
        "concernsEn": "OCHA’s 20–26 October 2026 account includes residential demolitions in Al-Walaja for lacking Israeli-issued building permits.",
        "concernsAr": "يتضمّن تقرير أوتشا عن 20–26 أكتوبر 2026 هدم مبانٍ سكنية في الولجة لعدم وجود تراخيص بناء إسرائيلية.",
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, August 7, 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 7 أغسطس 2026",
                "url": "https://container.ochaopt.org/content/humanitarian-situation-report-7-august-2026",
                "supportEn": "Demolitions and community background",
                "supportAr": "عمليات الهدم وخلفية المجتمع"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report, 29 October 2026",
                "labelAr": "أوتشا — تقرير الحالة الإنسانية، 29 أكتوبر 2026",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
                "reportDate": "2026-10-29",
                "publicationDate": "2026-10-31",
                "reviewedOn": "2026-11-01",
                "supports": [
                    "concerns"
                ],
                "supportEn": "Residential demolitions",
                "supportAr": "هدم مبانٍ سكنية"
            },
            {
                "labelEn": "UNRWA — Al-Walaja Mini Profile, January 2012 (European Parliament copy)",
                "labelAr": "الأونروا — ملف الولجة الموجز، يناير 2012 (نسخة البرلمان الأوروبي)",
                "url": "https://www.europarl.europa.eu/meetdocs/2009_2014/documents/droi/dv/910_aiwalaja_/910_aiwalaja_en.pdf",
                "reportDate": null,
                "publicationDate": null,
                "reviewedOn": "2026-11-01",
                "supports": [
                    "background"
                ],
                "supportEn": "1948 displacement and village geography",
                "supportAr": "التهجير عام 1948 وجغرافية القرية",
                "publicationPeriod": "2012-01"
            }
        ],
        "weeklyRecap": {
            "date": "2026-11-26",
            "dateLabelEn": "November 26, 2026",
            "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Residential displacement and destruction of agricultural infrastructure remain pressing humanitarian concerns in Al-Walaja.\n\nIn its November 26 humanitarian report, UN OCHA documented displacement associated with demolitions in Al-Walaja's Ein Jweizeh area during the November 17–23 reporting period.\n\nDemolition records compiled from OCHA data identify four structures demolished in Al-Walaja on November 17, displacing four residents, including two children.\n\nOn the same date, WAFA reported that Israeli forces demolished an occupied 50-square-meter house and a staircase attached to another residence in Ein Huwaiza, citing the absence of construction permits. The village council chairman also reported movement restrictions and the arrest of a resident during the operation.\n\nThese developments follow the October 28 demolition of a residential building accommodating five families. Agricultural damage reported that day included the destruction of water tanks and the uprooting of more than 50 fruit-bearing trees.\n\nHousing security, agricultural livelihoods, water infrastructure and access to legal assistance remain important priorities for Al-Walaja's residents.",
            "textAr": "يظل النزوح السكني وتدمير البنية التحتية الزراعية من أبرز المخاوف الإنسانية الملحة في قرية الولجة.\n\nوفي تقريره الإنساني الصادر في 26 نوفمبر، وثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية حالات نزوح مرتبطة بعمليات الهدم في منطقة عين جويزة بالولجة خلال الفترة من 17 إلى 23 نوفمبر.\n\nوتشير سجلات الهدم المستندة إلى بيانات المكتب إلى هدم أربع منشآت في الولجة بتاريخ 17 نوفمبر، مما أدى إلى تهجير أربعة أشخاص، من بينهم طفلان.\n\nوفي اليوم نفسه، أفادت وكالة وفا بأن القوات الإسرائيلية هدمت منزلاً مأهولاً تبلغ مساحته 50 متراً مربعاً وبيت درج تابعاً لمنزل آخر في منطقة عين حويزة، بحجة عدم الحصول على تراخيص البناء. كما أفاد رئيس المجلس القروي بفرض قيود على حركة السكان واعتقال أحد المواطنين خلال العملية.\n\nوتأتي هذه التطورات عقب هدم بناية سكنية كانت تؤوي خمس عائلات في 28 أكتوبر. وشملت الأضرار الزراعية التي أُبلغ عنها في ذلك اليوم تدمير خزانات مياه واقتلاع أكثر من 50 شجرة مثمرة.\n\nويظل الأمن السكني وحماية سبل العيش الزراعية والبنية التحتية للمياه والوصول إلى المساعدة القانونية من الأولويات المهمة لسكان الولجة.",
            "emphasizeFinalParagraph": true,
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report — November 26, 2026",
                    "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٦ نوفمبر ٢٠٢٦",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
                },
                {
                    "labelEn": "Good Shepherd Collective — OCHA-Derived Demolition Database",
                    "labelAr": "مؤسسة الراعي الصالح — قاعدة بيانات الهدم المستندة إلى بيانات الأمم المتحدة",
                    "url": "https://goodshepherdcollective.org/"
                },
                {
                    "labelEn": "Palestinian Information Center — Demolitions in Al-Walaja — November 17, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — عمليات الهدم في الولجة — ١٧ نوفمبر ٢٠٢٦",
                    "url": "https://english.palinfo.com/news/2026/11/17/373865/"
                },
                {
                    "labelEn": "WAFA — Residential Building Demolished and Agricultural Land Bulldozed in Al-Walaja — October 28, 2026",
                    "labelAr": "وفا — الاحتلال يهدم بناية سكنية ويجرف أرضا في الولجة — ٢٨ أكتوبر ٢٠٢٦",
                    "url": "https://azure.wafa.ps/news/2026/10/28/%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D9%84%D8%A7%D9%84-%D9%8A%D9%87%D8%AF%D9%85-%D8%A8%D9%86%D8%A7%D9%8A%D8%A9-%D8%B3%D9%83%D9%86%D9%8A%D8%A9-%D9%88%D9%8A%D8%AC%D8%B1%D9%81-%D8%A3%D8%B1%D8%B6%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D9%84%D8%AC%D8%A9-156918"
                }
            ]
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.15139%2C31.72067%2C35.17139%2C31.74067&layer=mapnik&marker=31.73067%2C35.16139",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.73067&mlon=35.16139#map=15/31.73067/35.16139",
            "captionEn": "Approximate Al-Walaja village location in Bethlehem Governorate, not an exact residential address.",
            "captionAr": "الموقع التقريبي لقرية الولجة في محافظة بيت لحم، وليس عنوانًا سكنيًا دقيقًا.",
            "titleEn": "Approximate Al-Walaja village location in Bethlehem Governorate",
            "titleAr": "الموقع التقريبي لقرية الولجة في محافظة بيت لحم",
            "buttonLabelEn": "Open Larger Map",
            "buttonLabelAr": "فتح خريطة أكبر",
            "latitude": 31.73067,
            "longitude": 35.16139
        },
        "previousReports": [
            {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Israeli forces demolished an inhabited Palestinian home in Al-Walaja, northwest of Bethlehem, on November 17.\n\nAccording to WAFA, citing village council head Khader Al-Araj, the 50-square-meter home belonged to Jamal Ismail Absiyeh. Israeli authorities had demolished it approximately a year earlier, and its owner had rebuilt it. Forces also demolished a staircase adjoining Adel Abu Srour's home, citing the absence of building permits.\n\nDuring the operation in Ein Huwayza, Israeli forces closed the area, restricted residents' movement, and fired tear gas and stun grenades. Several residents reportedly suffered from tear gas inhalation. Soldiers also detained 58-year-old Omar Hajjajleh near the demolished home.\n\nThe incident follows longstanding demolition pressure in Al-Walaja. UN OCHA reported in August that Israeli authorities had demolished 141 Palestinian-owned structures in the village since 2014.\n\nThe immediate concerns are housing security, detention, and protection of residents facing further demolition orders.",
            "textAr": "هدمت القوات الإسرائيلية منزلًا فلسطينيًا مأهولًا في قرية الولجة شمال غرب بيت لحم يوم 17 نوفمبر.\n\nووفقًا لوكالة وفا، نقلًا عن رئيس مجلس قروي الولجة خضر الأعرج، فإن المنزل البالغة مساحته 50 مترًا مربعًا يعود إلى جمال إسماعيل أبسيّة. وكانت السلطات الإسرائيلية قد هدمته قبل نحو عام، ثم أعاد صاحبه بناءه. كما هدمت القوات درجًا ملاصقًا لمنزل عادل أبو سرور، بحجة عدم وجود تراخيص بناء.\n\nوخلال العملية في منطقة عين الحويزة، أغلقت القوات الإسرائيلية المنطقة وقيّدت حركة السكان وأطلقت قنابل الغاز المسيل للدموع والقنابل الصوتية. وأصيب عدد من السكان بحالات اختناق جراء استنشاق الغاز، وفقًا للتقارير. كما اعتقل الجنود عمر حجاجلة، البالغ من العمر 58 عامًا، بالقرب من المنزل المهدوم.\n\nيأتي الحادث في سياق ضغوط طويلة الأمد بسبب عمليات الهدم في الولجة. وأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية في أغسطس بأن السلطات الإسرائيلية هدمت 141 منشأة فلسطينية في القرية منذ عام 2014.\n\nوتبقى المخاوف العاجلة أمن السكن والاعتقالات وحماية السكان الذين يواجهون أوامر هدم إضافية.",
            "sources": [
                {
                    "labelEn": "WAFA — November 17, 2026",
                    "labelAr": "وفا — 17 نوفمبر 2026",
                    "url": "https://english.wafa.ps/Pages/Details/177031"
                },
                {
                    "labelEn": "Palestinian Information Center — November 17, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — 17 نوفمبر 2026",
                    "url": "https://english.palinfo.com/news/2026/11/17/373865/"
                }
            ]
            },
            {
            "date": "2026-11-11",
            "dateLabelEn": "November 11, 2026",
            "dateLabelAr": "١١ نوفمبر ٢٠٢٦",
            "textEn": "No additional incident specifically in Al-Walaja was confirmed for November 1–11 in the sources reviewed. The latest detailed report identified was published October 28, when WAFA reported that Israeli forces demolished a three-story residential building housing five families, comprising 12 people, northwest of Bethlehem. The report also described the uprooting of more than 50 fruit trees, damage to agricultural land, and the destruction of water tanks and other structures. These are October events, retained as historical context rather than presented as new November incidents.",
            "textAr": "لم يتم تأكيد وقوع حادثة إضافية محددة في قرية الولجة خلال الفترة من 1 إلى 11 نوفمبر في المصادر التي تمت مراجعتها. ونُشر أحدث تقرير مفصل تم العثور عليه في 28 أكتوبر، حين أفادت وكالة وفا بأن القوات الإسرائيلية هدمت مبنى سكنيًا من ثلاثة طوابق كان يؤوي خمس عائلات تضم 12 شخصًا شمال غرب بيت لحم. كما وصف التقرير اقتلاع أكثر من 50 شجرة مثمرة، وإلحاق أضرار بأراضٍ زراعية، وتدمير خزانات مياه ومنشآت أخرى. وهذه أحداث وقعت في أكتوبر، وتُذكر بوصفها سياقًا تاريخيًا لا حوادث جديدة في نوفمبر.",
            "sources": [
                {
                    "labelEn": "WAFA — Al-Walaja demolition, October 28, 2026 (historical context)",
                    "labelAr": "وفا — الهدم في الولجة، 28 أكتوبر 2026 (سياق تاريخي)",
                    "url": "https://english.wafa.ps/Pages/Details/176410"
                }
            ]
            },
            {
                "date": "2026-11-01",
                "dateLabelEn": "November 1, 2026",
                "dateLabelAr": "١ نوفمبر ٢٠٢٦",
                "textEn": "On October 20, Israeli forces demolished an inhabited two-story home in the Ein al-Juwaiza area of Al-Walaja, northwest of Bethlehem. On October 28, another three-story residential building housing five families, comprising 12 people, was demolished. Local reporting also described the uprooting of more than 50 olive and almond trees, destruction of water tanks, and damage to agricultural infrastructure. Both incidents were reported by WAFA, citing a local community activist.",
                "textAr": "في 20 أكتوبر، هدمت القوات الإسرائيلية منزلًا مأهولًا من طابقين في منطقة عين الجويزة بقرية الولجة شمال غرب بيت لحم. وفي 28 أكتوبر، هُدم مبنى سكني آخر مكوّن من ثلاثة طوابق، كان يؤوي خمس عائلات تضم 12 شخصًا. كما أفادت تقارير محلية باقتلاع أكثر من 50 شجرة زيتون ولوز، وتدمير خزانات مياه وإلحاق أضرار بالبنية التحتية الزراعية. ونقلت وكالة وفا تفاصيل الحادثتين عن ناشط محلي في القرية.",
                "sources": [
                    {
                        "labelEn": "WAFA — October 20, 2026 — Israeli forces demolish inhabited home in al-Walaja northwest of Bethlehem",
                        "labelAr": "وفا — 20 أكتوبر 2026 — القوات الإسرائيلية تهدم منزلًا مأهولًا في الولجة شمال غرب بيت لحم",
                        "url": "https://english.wafa.ps/Pages/Details/176132"
                    },
                    {
                        "labelEn": "WAFA — October 28, 2026 — Israeli forces demolish residential building, uproot 50 fruit trees near Bethlehem",
                        "labelAr": "وفا — 28 أكتوبر 2026 — القوات الإسرائيلية تهدم مبنى سكنيًا وتقتلع 50 شجرة مثمرة قرب بيت لحم",
                        "url": "https://english.wafa.ps/Pages/Details/176410"
                    }
                ]
            }
        ]
    },
{
    "id": "jericho",
    "nameEn": "Jericho",
    "nameAr": "أريحا",
    "regionId": "jericho-jordan-valley",
    "governorateId": "jericho",
    "governorateEn": "Jericho & Jordan Valley",
    "governorateAr": "أريحا والأغوار",
    "descriptionEn": "Community overview: Jericho, Jericho & Jordan Valley.",
    "descriptionAr": "نبذة عن المجتمع: أريحا، أريحا والأغوار.",
    "sourceUrl": null,
    "sourcePublicationDate": null,
    "lastVerifiedDate": null,
    "featureAnchor": null,
    "imagePath": null,
    "backgroundEn": "Jericho (أريحا) is a Palestinian city in the Jordan Valley, east of Jerusalem and near the Jordan River. Its oasis, fertile agricultural land, and natural springs have supported human settlement for thousands of years.\n\nNorthwest of the modern city lies Ancient Jericho/Tell es-Sultan, an archaeological site with evidence of settlement dating back more than 10,000 years. UNESCO inscribed it on the World Heritage List in 2023.\n\nToday, Jericho is an important residential, agricultural, and cultural center. Its residents depend on access to roads, water, farmland, and services connecting the city with surrounding communities.",
    "backgroundAr": "أريحا مدينة فلسطينية تقع في غور الأردن، شرق القدس وبالقرب من نهر الأردن. وقد ساعدت واحتها وأراضيها الزراعية الخصبة وينابيعها الطبيعية على استمرار الاستيطان البشري فيها منذ آلاف السنين.\n\nتقع إلى الشمال الغربي من المدينة الحديثة أريحا القديمة/تل السلطان، وهو موقع أثري يحتوي على أدلة على الاستيطان البشري تعود إلى أكثر من عشرة آلاف عام. وأدرجته اليونسكو على قائمة التراث العالمي عام 2023.\n\nوتُعد أريحا اليوم مركزًا سكنيًا وزراعيًا وثقافيًا مهمًا. ويعتمد سكانها على الوصول إلى الطرق والمياه والأراضي الزراعية والخدمات التي تربط المدينة بالتجمعات المحيطة بها.",
    "concernsEn": null,
    "concernsAr": null,
    "sources": [
        {
            "labelEn": "UNESCO — Ancient Jericho/Tell es-Sultan",
            "labelAr": "اليونسكو — أريحا القديمة/تل السلطان",
            "url": "https://whc.unesco.org/en/list/1687",
            "supportEn": "Ancient Jericho and World Heritage designation",
            "supportAr": "أريحا القديمة وإدراجها ضمن التراث العالمي"
        },
        {
            "labelEn": "GeoNames — approximate location of Jericho",
            "labelAr": "GeoNames — الموقع التقريبي لـأريحا",
            "url": "https://www.geonames.org/284899/jericho.html",
            "supportEn": "Approximate geographic coordinates",
            "supportAr": "الإحداثيات الجغرافية التقريبية"
        }
    ],
    "reportingStart": {
        "date": "2026-11-20",
        "labelEn": "November 20, 2026",
        "labelAr": "٢٠ نوفمبر ٢٠٢٦"
    },
    "weeklyRecap": {
        "date": "2026-11-26",
        "dateLabelEn": "November 26, 2026",
        "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
        "paragraphs": true,
        "textEn": "On November 20, Israeli forces conducted a military incursion into Jericho's Al-Bayader neighborhood. According to local sources cited by WAFA, soldiers fired live ammunition, injuring a young Palestinian in the foot. He was transported to Jericho Governmental Hospital for treatment.\n\nThe incident comes amid heightened tensions surrounding settlement expansion on the city's outskirts.\n\nOn November 21, Associated Press published an investigation into developments in neighboring al-Duyuk al-Tahta, where Israeli settlers moved into eight Palestinian residential properties on November 4. The settlers maintain that they purchased the properties, while Palestinian residents and human rights organizations dispute the legitimacy of the transactions.\n\nResidents interviewed by Associated Press described restrictions on agricultural access and increasing intimidation. These developments follow the fatal shooting of 72-year-old Fadda Fheidat on November 16. The Israeli military acknowledged that she was likely struck by gunfire from an Israeli civilian.\n\nResidential safety, agricultural access and protection of civilian movement remain significant concerns for Jericho and its surrounding communities.",
        "textAr": "في 20 نوفمبر، نفذت القوات الإسرائيلية اقتحاماً عسكرياً في حي البيادر بمدينة أريحا. ووفقاً لمصادر محلية نقلت عنها وكالة وفا، أطلق الجنود الرصاص الحي، مما أدى إلى إصابة شاب فلسطيني في قدمه. ونُقل إلى مستشفى أريحا الحكومي لتلقي العلاج.\n\nوتأتي هذه الحادثة في ظل تصاعد التوترات المرتبطة بالتوسع الاستيطاني على أطراف المدينة.\n\nوفي 21 نوفمبر، نشرت وكالة أسوشيتد برس تحقيقاً حول التطورات في منطقة الديوك التحتا المجاورة، حيث انتقل مستوطنون إسرائيليون إلى ثمانية منازل فلسطينية في 4 نوفمبر. ويقول المستوطنون إنهم اشتروا هذه العقارات، بينما يشكك السكان الفلسطينيون ومنظمات حقوق الإنسان في شرعية عمليات البيع.\n\nووصف سكان قابلتهم الوكالة القيود المفروضة على الوصول إلى الأراضي الزراعية وتزايد أعمال الترهيب. وتأتي هذه التطورات عقب مقتل المواطنة فضة فهيدات، البالغة من العمر 72 عاماً، بالرصاص في 16 نوفمبر. وأقر الجيش الإسرائيلي بأنها أصيبت على الأرجح بنيران أطلقها مدني إسرائيلي.\n\nوتظل سلامة السكان والوصول إلى الأراضي الزراعية وحماية حرية حركة المدنيين من أبرز المخاوف التي تواجه أريحا والتجمعات المحيطة بها.",
        "emphasizeFinalParagraph": true,
        "sources": [
            {
                "labelEn": "WAFA — Palestinian Youth Shot and Injured in Jericho — November 20, 2026",
                "labelAr": "وفا — إصابة شاب فلسطيني برصاص القوات الإسرائيلية في أريحا — ٢٠ نوفمبر ٢٠٢٦",
                "url": "https://english.wafa.ps/Pages/Details/177148"
            },
            {
                "labelEn": "Associated Press — Settlement Expansion and Violence on Jericho's Outskirts — November 21, 2026",
                "labelAr": "أسوشيتد برس — التوسع الاستيطاني والعنف على أطراف أريحا — ٢١ نوفمبر ٢٠٢٦",
                "url": "https://apnews.com/article/02a33fcd79ed5eb4c29c1ed193e6f5a6"
            },
            {
                "labelEn": "The Times of Israel — Military Investigation into Fatal Shooting Near Jericho — November 18, 2026",
                "labelAr": "تايمز أوف إسرائيل — التحقيق العسكري في حادثة إطلاق النار المميتة قرب أريحا — ١٨ نوفمبر ٢٠٢٦",
                "url": "https://www.timesofisrael.com/idf-probe-suggests-gunfire-that-killed-palestinian-in-jericho-was-likely-aimed-at-stone-throwers/"
            }
        ]
    },
    "previousReports": [
        {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Jericho and its outskirts experienced escalating settler violence and land disputes during November.\n\nOn November 17, Palestinian woman Fada Fheidat was shot dead during a confrontation involving Israeli settlers in Ein al-Duyuk al-Tahta, on Jericho's outskirts. Palestinian residents said settlers entered the neighborhood and opened fire. The Israeli military gave a different account of how the confrontation began but subsequently said its preliminary investigation indicated that she was likely struck by settler gunfire. Other Palestinians and Israelis were injured.\n\nThe incident followed settlers' reported occupation of eight homes in the same area earlier in November. The circumstances surrounding the claimed property purchases remain disputed.\n\nThese incidents occurred on Jericho's outskirts, not in the city center. Reporting also documented increased fears among Palestinian families over displacement and further settlement expansion.\n\nThe immediate concerns are civilian safety, protection of homes, and accountability for the shooting.",
            "textAr": "شهدت أريحا ومحيطها تصاعدًا في عنف المستوطنين والنزاعات المتعلقة بالأراضي خلال نوفمبر.\n\nفي 17 نوفمبر، قُتلت الفلسطينية فدا فهيدات بالرصاص خلال مواجهة شارك فيها مستوطنون إسرائيليون في منطقة عين الديوك التحتا على أطراف أريحا. وقال سكان فلسطينيون إن مستوطنين دخلوا المنطقة وأطلقوا النار. وقدمت القوات الإسرائيلية رواية مختلفة عن بداية المواجهة، لكنها قالت لاحقًا إن تحقيقها الأولي يشير إلى أن المرأة قُتلت على الأرجح برصاص مستوطنين. وأصيب فلسطينيون وإسرائيليون آخرون خلال الحادث.\n\nوجاء الحادث بعد تقارير عن استيلاء مستوطنين على ثمانية منازل في المنطقة نفسها في وقت سابق من نوفمبر. ولا تزال ملابسات عمليات شراء العقارات المزعومة محل نزاع.\n\nوقعت هذه الأحداث على أطراف أريحا، وليس في وسط المدينة. كما وثقت تقارير تزايد مخاوف العائلات الفلسطينية من التهجير والتوسع الاستيطاني.\n\nوتبقى المخاوف العاجلة سلامة المدنيين وحماية المنازل والمساءلة عن حادث إطلاق النار.",
            "sources": [
                {
                    "labelEn": "Reuters — November 17, 2026",
                    "labelAr": "رويترز — 17 نوفمبر 2026",
                    "url": "https://www.reuters.com/world/middle-east/palestinian-woman-killed-10-wounded-settler-gunfire-official-tv-says-2026-11-17/"
                },
                {
                    "labelEn": "Times of Israel — November 18, 2026",
                    "labelAr": "تايمز أوف إسرائيل — 18 نوفمبر 2026",
                    "url": "https://www.timesofisrael.com/idf-probe-suggests-gunfire-that-killed-palestinian-in-jericho-was-likely-aimed-at-stone-throwers/"
                },
                {
                    "labelEn": "Al Jazeera — November 6, 2026",
                    "labelAr": "الجزيرة — 6 نوفمبر 2026",
                    "url": "https://www.aljazeera.com/news/2026/11/6/israeli-settlers-seize-8-palestinian-homes-in-jericho-displacing-dozens"
                }
            ]
        }
    ],
    "locationMap": {
        "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.435%2C31.85667%2C35.465%2C31.87667&layer=mapnik&marker=31.86667%2C35.45",
        "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.86667&mlon=35.45#map=15/31.86667/35.45",
        "latitude": 31.86667,
        "longitude": 35.45,
        "geographicReferenceUrl": "https://www.geonames.org/284899/jericho.html"
    }
},
{
    "id": "aqabat-jaber",
    "nameEn": "Aqabat Jaber Refugee Camp",
    "nameAr": "مخيم عقبة جبر",
    "regionId": "jericho-jordan-valley",
    "governorateId": "jericho",
    "governorateEn": "Jericho & Jordan Valley",
    "governorateAr": "أريحا والأغوار",
    "descriptionEn": "Community overview: Aqabat Jaber Refugee Camp, Jericho & Jordan Valley.",
    "descriptionAr": "نبذة عن المجتمع: مخيم عقبة جبر، أريحا والأغوار.",
    "sourceUrl": null,
    "sourcePublicationDate": null,
    "lastVerifiedDate": null,
    "featureAnchor": null,
    "imagePath": null,
    "backgroundEn": "Aqabat Jaber (عقبة جبر) is a Palestinian refugee camp southwest of Jericho in the Jordan Valley. Established in 1948, it is the largest refugee camp in the occupied West Bank by land area, covering approximately 1.67 square kilometers.\n\nBefore 1967, approximately 30,000 refugees lived in the camp. About 25,000 were displaced during the 1967 war. UNRWA's 2025 records list 11,190 registered refugees, a registration figure rather than a current resident count.\n\nThe camp has two UNRWA schools and a primary healthcare center. Residents face longstanding challenges involving unemployment, inadequate housing, wastewater management, and winter flooding. Agriculture and livestock remain important to some families.",
    "backgroundAr": "يقع مخيم عقبة جبر للاجئين الفلسطينيين جنوب غرب مدينة أريحا في غور الأردن. تأسس المخيم عام 1948، ويُعد أكبر مخيم للاجئين في الضفة الغربية المحتلة من حيث المساحة، إذ تبلغ مساحته نحو 1.67 كيلومتر مربع.\n\nقبل عام 1967، كان يعيش في المخيم نحو 30 ألف لاجئ. وقد نزح نحو 25 ألفًا منهم خلال حرب عام 1967. وتُظهر سجلات الأونروا لعام 2025 وجود 11,190 لاجئًا مسجلًا في المخيم، وهو عدد المسجلين وليس بالضرورة عدد المقيمين حاليًا.\n\nيضم المخيم مدرستين تابعتين للأونروا ومركزًا للرعاية الصحية الأولية. ويواجه السكان تحديات مزمنة تتعلق بالبطالة والسكن غير الملائم وإدارة مياه الصرف الصحي والفيضانات الشتوية. وتظل الزراعة وتربية المواشي مصدر رزق مهمًا لبعض العائلات.",
    "concernsEn": null,
    "concernsAr": null,
    "sources": [
        {
            "labelEn": "UNRWA — Aqbat Jabr Camp",
            "labelAr": "الأونروا — مخيم عقبة جبر",
            "url": "https://www.unrwa.org/where-we-work/west-bank/aqbat-jabr-camp",
            "supportEn": "Camp background and services",
            "supportAr": "خلفية المخيم وخدماته"
        },
        {
            "labelEn": "GeoNames — approximate location of Aqabat Jaber Refugee Camp",
            "labelAr": "GeoNames — الموقع التقريبي لـمخيم عقبة جبر",
            "url": "https://www.geonames.org/284929/aqbat-jabr-camp.html",
            "supportEn": "Approximate geographic coordinates",
            "supportAr": "الإحداثيات الجغرافية التقريبية"
        }
    ],
    "reportingStart": {
        "date": "2026-11-20",
        "labelEn": "November 20, 2026",
        "labelAr": "٢٠ نوفمبر ٢٠٢٦"
    },
    "weeklyRecap": {
        "date": "2026-11-26",
        "dateLabelEn": "November 26, 2026",
        "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
        "paragraphs": true,
        "textEn": "Winter preparedness and civilian safety remain important humanitarian concerns for Aqabat Jaber refugee camp.\n\nIn its November 5 humanitarian report, UN OCHA documented flooding impacts in the camp following heavy rainfall on October 27. Humanitarian partners were conducting technical assessments to identify longer-term water, sanitation and hygiene interventions.\n\nSecurity concerns also persist following military incursions earlier in November. Local sources reported that Israeli forces entered the camp on November 3 and fired live ammunition. Another military raid was reported on November 12.\n\nOn November 16, WAFA reported that Israeli settlers assaulted a Palestinian minor along the road connecting Aqabat Jaber junction with Wadi al-Qilt and Ein al-Duyuk al-Tahta. The extent of the child's injuries was not immediately available.\n\nNo new camp-specific incident was independently verified during the November 19–26 reporting period.\n\nProtection of civilians, reliable drainage and sanitation infrastructure, winter preparedness and safe access to essential services remain priorities for refugee families.",
        "textAr": "يظل الاستعداد لفصل الشتاء وسلامة المدنيين من أبرز المخاوف الإنسانية في مخيم عقبة جبر للاجئين.\n\nوفي تقريره الإنساني الصادر في 5 نوفمبر، وثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية آثار الفيضانات في المخيم عقب هطول أمطار غزيرة في 27 أكتوبر. وكان الشركاء الإنسانيون يجرون تقييمات فنية لتحديد التدخلات طويلة الأمد في مجالات المياه والصرف الصحي والنظافة الصحية.\n\nكما تستمر المخاوف الأمنية عقب الاقتحامات العسكرية التي شهدها المخيم في وقت سابق من نوفمبر. وأفادت مصادر محلية بأن القوات الإسرائيلية اقتحمت المخيم في 3 نوفمبر وأطلقت الرصاص الحي. كما أُبلغ عن اقتحام عسكري آخر في 12 نوفمبر.\n\nوفي 16 نوفمبر، أفادت وكالة وفا بأن مستوطنين إسرائيليين اعتدوا على طفل فلسطيني على الطريق الذي يربط مفرق عقبة جبر بوادي القلط وعين الديوك التحتا. ولم تتوفر معلومات فورية حول مدى إصابته.\n\nولم يتم التحقق بشكل مستقل من وقوع حادثة جديدة داخل المخيم تحديداً خلال الفترة من 19 إلى 26 نوفمبر.\n\nوتظل حماية المدنيين، وضمان كفاءة البنية التحتية لتصريف المياه والصرف الصحي، والاستعداد لفصل الشتاء، والوصول الآمن إلى الخدمات الأساسية من أولويات عائلات اللاجئين.",
        "emphasizeFinalParagraph": true,
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report: Flooding in Aqabat Jaber — November 5, 2026",
                "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية: الفيضانات في عقبة جبر — ٥ نوفمبر ٢٠٢٦",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-5-november-2026"
            },
            {
                "labelEn": "Saba News Agency — Military Incursion into Aqabat Jaber Refugee Camp — November 3, 2026",
                "labelAr": "وكالة سبأ للأنباء — اقتحام عسكري لمخيم عقبة جبر — ٣ نوفمبر ٢٠٢٦",
                "url": "https://saba.ye/en/news3826245.htm"
            },
            {
                "labelEn": "Palestinian Information Center — Military Raids Across the West Bank — November 12, 2026",
                "labelAr": "المركز الفلسطيني للإعلام — اقتحامات عسكرية في الضفة الغربية — ١٢ نوفمبر ٢٠٢٦",
                "url": "https://english.palinfo.com/news/2026/11/12/373575/"
            },
            {
                "labelEn": "WAFA — Settlers Assault Palestinian Minor West of Jericho — November 16, 2026",
                "labelAr": "وفا — مستوطنون يعتدون على طفل فلسطيني غرب أريحا — ١٦ نوفمبر ٢٠٢٦",
                "url": "https://english.wafa.ps/Pages/Details/176997"
            }
        ]
    },
    "previousReports": [
        {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Israeli military raids continued in Aqabat Jaber Refugee Camp, southwest of Jericho, during November.\n\nOn November 12, Palestinian Information Center reported that Israeli forces entered the camp during a series of operations across the West Bank. The report confirmed the incursion but did not establish camp-specific arrests or casualties.\n\nOn November 14, Sada News reported that Israeli forces arrested a young Palestinian man after entering Aqabat Jaber. The report did not identify the detainee or provide further details about his detention.\n\nEarlier, on November 3, local sources cited by Palestinian media reported that Israeli forces entered the camp, patrolled its streets, and fired live ammunition. Soldiers also reportedly established a checkpoint in the nearby Airport Land area, stopping and searching vehicles and pedestrians.\n\nThe November 3 incident is included as earlier context, not a new November 19 event.\n\nThe immediate concerns are civilian safety during raids, detention practices, and residents' freedom of movement.",
            "textAr": "استمرت الاقتحامات العسكرية الإسرائيلية لمخيم عقبة جبر للاجئين جنوب غرب أريحا خلال نوفمبر.\n\nفي 12 نوفمبر، أفاد المركز الفلسطيني للإعلام بأن القوات الإسرائيلية اقتحمت المخيم ضمن سلسلة عمليات في أنحاء الضفة الغربية. وأكد التقرير وقوع الاقتحام، لكنه لم يثبت حدوث اعتقالات أو إصابات محددة داخل المخيم.\n\nوفي 14 نوفمبر، أفادت وكالة صدى نيوز بأن القوات الإسرائيلية اعتقلت شابًا فلسطينيًا عقب اقتحام مخيم عقبة جبر. ولم يذكر التقرير هوية المعتقل أو يقدم تفاصيل إضافية عن احتجازه.\n\nوفي وقت سابق، في 3 نوفمبر، أفادت مصادر محلية نقلت عنها وسائل إعلام فلسطينية بأن القوات الإسرائيلية اقتحمت المخيم وجابت شوارعه وأطلقت الرصاص الحي. كما أفادت التقارير بأن الجنود أقاموا حاجزًا في منطقة أرض المطار المجاورة، حيث أوقفوا المركبات والمارة وفتشوهم.\n\nيُذكر حادث 3 نوفمبر بوصفه سياقًا سابقًا، وليس حدثًا جديدًا وقع في 19 نوفمبر.\n\nوتبقى المخاوف العاجلة سلامة المدنيين أثناء الاقتحامات وممارسات الاحتجاز وحرية تنقل السكان.",
            "sources": [
                {
                    "labelEn": "Palestinian Information Center — November 12, 2026",
                    "labelAr": "المركز الفلسطيني للإعلام — 12 نوفمبر 2026",
                    "url": "https://english.palinfo.com/news/2026/11/12/373575/"
                },
                {
                    "labelEn": "Sada News — November 14, 2026",
                    "labelAr": "صدى نيوز — 14 نوفمبر 2026",
                    "url": "https://www.sadanews.ps/en/news/352965.html"
                },
                {
                    "labelEn": "Saba, citing WAFA — November 3, 2026",
                    "labelAr": "سبأ، نقلًا عن وفا — 3 نوفمبر 2026",
                    "url": "https://saba.ye/en/news3826245.htm"
                }
            ]
        }
    ],
    "locationMap": {
        "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.42578%2C31.82987%2C35.45578%2C31.84987&layer=mapnik&marker=31.83987%2C35.44078",
        "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.83987&mlon=35.44078#map=15/31.83987/35.44078",
        "latitude": 31.83987,
        "longitude": 35.44078,
        "geographicReferenceUrl": "https://www.geonames.org/284929/aqbat-jabr-camp.html"
    }
},
{
    "id": "al-auja",
    "nameEn": "Al-Auja",
    "nameAr": "العوجا",
    "regionId": "jericho-jordan-valley",
    "governorateId": "jericho",
    "governorateEn": "Jericho & Jordan Valley",
    "governorateAr": "أريحا والأغوار",
    "descriptionEn": "Community overview: Al-Auja, Jericho & Jordan Valley.",
    "descriptionAr": "نبذة عن المجتمع: العوجا، أريحا والأغوار.",
    "sourceUrl": null,
    "sourcePublicationDate": null,
    "lastVerifiedDate": null,
    "featureAnchor": null,
    "imagePath": null,
    "backgroundEn": "Al-Auja (العوجا) is a Palestinian town north of Jericho in the Jordan Valley. Its agricultural and herding communities have historically depended on the nearby Al-Auja spring, grazing land, and access to water.\n\nThe surrounding area includes Ras Ein al-Auja, a distinct Bedouin community that experienced prolonged settler attacks and restrictions on water and grazing access. UN OCHA documented its complete displacement in January 2026.\n\nAl-Auja town and Ras Ein al-Auja must not be treated as geographically or administratively identical communities.",
    "backgroundAr": "العوجا بلدة فلسطينية تقع شمال أريحا في غور الأردن. وقد اعتمدت مجتمعاتها الزراعية والرعوية تاريخيًا على نبع العوجا القريب وأراضي الرعي والوصول إلى المياه.\n\nوتشمل المنطقة المحيطة تجمع رأس عين العوجا البدوي، وهو تجمع منفصل تعرض لاعتداءات متكررة من المستوطنين وقيود على الوصول إلى المياه والمراعي. ووثق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية تهجير سكانه بالكامل في يناير 2026.\n\nويجب التمييز بين بلدة العوجا وتجمع رأس عين العوجا البدوي وعدم التعامل معهما بوصفهما تجمعًا واحدًا.",
    "concernsEn": null,
    "concernsAr": null,
    "sources": [
        {
            "labelEn": "UN OCHA — Humanitarian Situation Update #295",
            "labelAr": "أوتشا — تحديث الحالة الإنسانية رقم 295",
            "url": "https://www.ochaopt.org/content/humanitarian-situation-update-295-west-bank",
            "supportEn": "Community background",
            "supportAr": "خلفية المجتمع"
        },
        {
            "labelEn": "GeoNames — approximate location of Al-Auja",
            "labelAr": "GeoNames — الموقع التقريبي لـالعوجا",
            "url": "https://www.geonames.org/285112/al-awja.html",
            "supportEn": "Approximate geographic coordinates",
            "supportAr": "الإحداثيات الجغرافية التقريبية"
        }
    ],
    "reportingStart": {
        "date": "2026-11-20",
        "labelEn": "November 20, 2026",
        "labelAr": "٢٠ نوفمبر ٢٠٢٦"
    },
    "weeklyRecap": {
        "date": "2026-11-26",
        "dateLabelEn": "November 26, 2026",
        "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
        "paragraphs": true,
        "textEn": "Recent attacks on agricultural property have intensified concerns about the protection of farming and herding livelihoods in Al-Auja.\n\nOn November 15, local sources reported that Israeli settlers stole and damaged beehives belonging to resident Nayef Abu Kharabish.\n\nThree days earlier, livestock owner Suleiman Mleihat told WAFA that 13 of his sheep had died and others suffered poisoning west of Al-Auja. He attributed the incident to settlers spraying harmful substances and reported that a veterinarian had examined the animals.\n\nWater security is another longstanding concern. A Global Echo investigation published in June 2026 documented testimony from Al-Auja farmers describing reduced water availability, increasing dependence on purchased water and difficulties sustaining agricultural livelihoods.\n\nEarlier reporting on April 14 also documented damage to pipelines near Al-Auja Spring.\n\nNo new incident specifically within Al-Auja was independently verified during November 19–26. Reliable water supplies, protection of livestock and agricultural property, and access to farmland remain significant humanitarian priorities.",
        "textAr": "أدت الاعتداءات الأخيرة على الممتلكات الزراعية إلى زيادة المخاوف بشأن حماية سبل عيش المزارعين ومربي المواشي في بلدة العوجا.\n\nوفي 15 نوفمبر، أفادت مصادر محلية بأن مستوطنين إسرائيليين سرقوا وأتلفوا خلايا نحل تعود للمواطن نايف أبو خربيش.\n\nوقبل ذلك بثلاثة أيام، أفاد مربي المواشي سليمان مليحات لوكالة وفا بنفوق 13 رأساً من أغنامه وتعرض أخرى للتسمم غرب العوجا. وعزا الحادثة إلى قيام مستوطنين برش مواد ضارة، مشيراً إلى أن طبيباً بيطرياً فحص الحيوانات.\n\nويشكل الأمن المائي أيضاً مصدر قلق مستمر منذ فترة طويلة. فقد وثّق تحقيق نشرته مؤسسة غلوبال إيكو في يونيو 2026 شهادات مزارعين من العوجا حول تراجع توفر المياه، وزيادة الاعتماد على شراء المياه، والصعوبات التي تواجه استمرار سبل عيشهم الزراعية.\n\nكما وثّقت تقارير سابقة في 14 أبريل إلحاق أضرار بخطوط المياه بالقرب من نبع العوجا.\n\nولم يتم التحقق بشكل مستقل من وقوع حادثة جديدة داخل العوجا تحديداً خلال الفترة من 19 إلى 26 نوفمبر. ويظل ضمان إمدادات المياه وحماية المواشي والممتلكات الزراعية والوصول إلى الأراضي الزراعية من الأولويات الإنسانية المهمة.",
        "emphasizeFinalParagraph": true,
        "sources": [
            {
                "labelEn": "Naba Palestine 24 — Theft and Destruction of Beehives in Al-Auja — November 15, 2026",
                "labelAr": "نبأ فلسطين 24 — سرقة وتخريب خلايا نحل في العوجا — ١٥ نوفمبر ٢٠٢٦",
                "url": "https://naba24.ps/en/post?id=24533&slug=settlers-steal-beehives-and-destroy-others-in-al-auja"
            },
            {
                "labelEn": "WAFA — Livestock Deaths and Poisoning West of Al-Auja — November 12, 2026",
                "labelAr": "وفا — نفوق وتسمم أغنام غرب العوجا — ١٢ نوفمبر ٢٠٢٦",
                "url": "https://english.wafa.ps/Pages/Details/176869"
            },
            {
                "labelEn": "Global Echo — Importing Occupation: Settlement Agriculture and Water Access — June 2026",
                "labelAr": "غلوبال إيكو — الزراعة الاستيطانية والوصول إلى المياه — يونيو ٢٠٢٦",
                "url": "https://www.globalecho.law/wp-content/uploads/2026/06/Global-Echo_Importing-Occupation_June-2026_ENG.pdf"
            },
            {
                "labelEn": "WAFA — Water Pipelines Cut Near Al-Auja Spring — April 14, 2026",
                "labelAr": "وفا — قطع خطوط المياه بالقرب من نبع العوجا — ١٤ أبريل ٢٠٢٦",
                "url": "https://english.wafa.ps/Pages/Details/169442"
            }
        ]
    },
    "previousReports": [
        {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Al-Auja and its surrounding communities continue to face serious concerns involving displacement, settler violence, and access to water and agricultural land.\n\nUN OCHA documented the complete displacement of approximately 600 residents of the nearby Ras Ein al-Auja Bedouin community by late January 2026, following repeated settler attacks, threats, and restrictions on access to grazing land and Al-Auja spring.\n\nOn April 9, five Palestinian Bedouin households comprising 35 people were displaced from parts of Al-Auja following reported settler intimidation and attacks. The families relocated to a safer part of the town.\n\nThese incidents are historical context, not newly documented events from November 19.\n\nNo separate, sufficiently verified Al-Auja-specific incident from November 12–18 has been established for this report.\n\nThe continuing concerns are the safety of remaining residents, protection from displacement, and access to water, homes, and livelihoods.",
            "textAr": "لا تزال العوجا والتجمعات المحيطة بها تواجه مخاوف خطيرة تتعلق بالتهجير وعنف المستوطنين والوصول إلى المياه والأراضي الزراعية.\n\nوثق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية تهجير نحو 600 شخص من تجمع رأس عين العوجا البدوي المجاور بالكامل بحلول أواخر يناير 2026، بعد اعتداءات وتهديدات متكررة من المستوطنين وقيود على الوصول إلى المراعي ونبع العوجا.\n\nوفي 9 أبريل، تهجرت خمس أسر بدوية فلسطينية تضم 35 شخصًا من مناطق في العوجا، عقب اعتداءات وترهيب من المستوطنين وفقًا للتقارير. وانتقلت الأسر إلى منطقة أكثر أمانًا داخل البلدة.\n\nتُذكر هذه الأحداث بوصفها سياقًا تاريخيًا، وليست أحداثًا جديدة موثقة بتاريخ 19 نوفمبر.\n\nولم يتوفر لهذا التقرير توثيق كافٍ لحادث منفصل ومحدد في العوجا خلال الفترة من 12 إلى 18 نوفمبر.\n\nوتظل المخاوف المستمرة سلامة السكان المتبقين وحمايتهم من التهجير وضمان وصولهم إلى المياه والمنازل ومصادر الرزق.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Update #356, February 2026 (historical context)",
                    "labelAr": "أوتشا — تحديث الحالة الإنسانية رقم 356، فبراير 2026 (سياق تاريخي)",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-update-356-west-bank"
                },
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, April 17, 2026 (historical context)",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 17 أبريل 2026 (سياق تاريخي)",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-17-april-2026"
                }
            ]
        }
    ],
    "locationMap": {
        "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.45256%2C31.94069%2C35.48256%2C31.96069&layer=mapnik&marker=31.95069%2C35.46756",
        "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.95069&mlon=35.46756#map=15/31.95069/35.46756",
        "latitude": 31.95069,
        "longitude": 35.46756,
        "geographicReferenceUrl": "https://www.geonames.org/285112/al-awja.html"
    }
},
{
    "id": "fasayil",
    "nameEn": "Fasayil",
    "nameAr": "فصايل",
    "regionId": "jericho-jordan-valley",
    "governorateId": "jericho",
    "governorateEn": "Jericho & Jordan Valley",
    "governorateAr": "أريحا والأغوار",
    "descriptionEn": "Community overview: Fasayil, Jericho & Jordan Valley.",
    "descriptionAr": "نبذة عن المجتمع: فصايل، أريحا والأغوار.",
    "sourceUrl": null,
    "sourcePublicationDate": null,
    "lastVerifiedDate": null,
    "featureAnchor": null,
    "imagePath": null,
    "backgroundEn": "Fasayil is a Palestinian agricultural and herding village north of Jericho in the Jordan Valley. The wider village includes Fasayil al-Tahta, Fasayil al-Wusta, and Fasayil al-Foqa.\n\nThe communities face different planning restrictions because parts of Fasayil fall within Area B and others within Area C. Residents have long reported difficulty expanding homes, accessing sufficient water, and maintaining agricultural livelihoods.\n\nThe Norwegian Refugee Council has documented demolitions and overcrowding in Fasayil, where restrictions on construction have placed pressure on families to leave.",
    "backgroundAr": "فصايل قرية فلسطينية زراعية ورعوية تقع شمال أريحا في غور الأردن. وتشمل القرية فصايل التحتا وفصايل الوسطى وفصايل الفوقا.\n\nوتواجه هذه التجمعات قيودًا مختلفة على التخطيط والبناء، إذ تقع أجزاء من فصايل في المنطقة «ب» وأجزاء أخرى في المنطقة «ج». ويواجه السكان منذ سنوات صعوبات في توسيع منازلهم والحصول على المياه الكافية والحفاظ على مصادر رزقهم الزراعية.\n\nوقد وثق المجلس النرويجي للاجئين عمليات هدم واكتظاظًا سكنيًا في فصايل، حيث تزيد قيود البناء الضغط على العائلات وتدفع بعضها إلى التفكير في الرحيل.",
    "concernsEn": null,
    "concernsAr": null,
    "sources": [
        {
            "labelEn": "Norwegian Refugee Council — Area C is Everything",
            "labelAr": "المجلس النرويجي للاجئين — المنطقة ج هي كل شيء",
            "url": "https://www.nrc.no/feature/2023/area-c-is-everything",
            "supportEn": "Housing and construction restrictions",
            "supportAr": "السكن وقيود البناء"
        },
        {
            "labelEn": "GeoNames — approximate location of Fasayil",
            "labelAr": "GeoNames — الموقع التقريبي لـفصايل",
            "url": "https://www.geonames.org/285102/al-fasayil.html",
            "supportEn": "Approximate geographic coordinates",
            "supportAr": "الإحداثيات الجغرافية التقريبية"
        }
    ],
    "reportingStart": {
        "date": "2026-11-20",
        "labelEn": "November 20, 2026",
        "labelAr": "٢٠ نوفمبر ٢٠٢٦"
    },
    "weeklyRecap": {
        "date": "2026-11-26",
        "dateLabelEn": "November 26, 2026",
        "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
        "paragraphs": true,
        "textEn": "Access to agricultural and grazing land remains a significant concern for Palestinian families in Fasayil.\n\nRecent reporting from the Wall and Settlement Resistance Commission identifies Fasayil among several communities affected by proposed settlement-related land-use allocations. The notices concern intended licensing of land classified by Israeli authorities as state land, including areas designated for grazing.\n\nThe commission warned that these measures could undermine Palestinian herding livelihoods and restrict opportunities for displaced families to return. The announcements provide a 30-day period for objections and do not constitute finalized allocations.\n\nOn November 26, UN OCHA reported that 1,567 Palestinians had been displaced across the Jordan Valley during 2026 through settler violence, associated access restrictions and permit-related demolitions. Approximately 87 percent of this regional displacement resulted from settler violence and related access restrictions.\n\nNo new physical incident inside Fasayil was independently verified this week. Protection of grazing access, residential security and agricultural livelihoods remains an important humanitarian concern.",
        "textAr": "يظل الوصول إلى الأراضي الزراعية والمراعي مصدر قلق كبير للعائلات الفلسطينية في فصايل.\n\nوتشير التقارير الأخيرة الصادرة عن هيئة مقاومة الجدار والاستيطان إلى أن فصايل من بين عدة تجمعات تتأثر بمقترحات تخصيص أراضٍ لاستخدامات مرتبطة بالاستيطان. وتتعلق الإعلانات بنية منح تراخيص لاستخدام أراضٍ تصنفها السلطات الإسرائيلية على أنها أراضي دولة، بما في ذلك مساحات مخصصة للرعي.\n\nوحذرت الهيئة من أن هذه الإجراءات قد تقوض سبل عيش مربي المواشي الفلسطينيين وتحد من فرص عودة العائلات المهجرة. وتتيح الإعلانات مهلة مدتها 30 يوماً لتقديم الاعتراضات، ولا تعني اكتمال إجراءات التخصيص.\n\nوفي 26 نوفمبر، أفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأن 1567 فلسطينياً نزحوا في منطقة الأغوار خلال عام 2026 نتيجة عنف المستوطنين والقيود المرتبطة بالوصول وعمليات الهدم بسبب عدم الحصول على تراخيص البناء. وارتبط نحو 87 بالمئة من حالات النزوح في المنطقة بعنف المستوطنين والقيود المرتبطة به.\n\nولم يتم التحقق بشكل مستقل من وقوع حادثة ميدانية جديدة داخل فصايل خلال هذا الأسبوع. وتظل حماية الوصول إلى المراعي، وأمن السكان، وسبل العيش الزراعية من المخاوف الإنسانية المهمة.",
        "emphasizeFinalParagraph": true,
        "sources": [
            {
                "labelEn": "Al Shorouk — Wall and Settlement Resistance Commission: Proposed Settlement Land Allocations",
                "labelAr": "الشروق — هيئة مقاومة الجدار والاستيطان: تخصيص أراضٍ لأغراض استيطانية",
                "url": "https://alshorouk.ps/en/post?id=13756&slug=wall-and-settlement-resistance-commission-occupation-announces-allocation-of-over-13000-dunums-for-settlement-purposes"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report — November 26, 2026",
                "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٦ نوفمبر ٢٠٢٦",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
            }
        ]
    },
    "previousReports": [
        {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "A newly documented land-allocation decision raises concerns for Palestinian residents of Fasayil in the Jordan Valley.\n\nAccording to Peace Now, a notice published on November 10 allocated 5,545 dunams of West Bank land for grazing across two sections near Fasayil and Kafr Malik. The eastern section lies on Fasayil land, close to Palestinian homes and a nearby Israeli settler outpost.\n\nPeace Now reported that most of the allocation falls within a military firing zone, with part encroaching on a nature reserve. The decision adds to longstanding concerns over Palestinian access to agricultural and grazing land.\n\nEarlier in February, Jordan Valley Solidarity documented settlers cutting water and electricity access to a family in Fasayil al-Wusta. That incident is historical context, not a new November attack.\n\nNo separately verified Fasayil-specific attack from November 12–18 was established for this report.\n\nThe immediate concerns are access to land, water, housing, and protection against displacement.",
            "textAr": "يثير قرار جديد موثق بشأن تخصيص أراضٍ للرعي مخاوف لدى السكان الفلسطينيين في فصايل بغور الأردن.\n\nوفقًا لحركة السلام الآن، نُشر في 10 نوفمبر إعلان عن تخصيص 5,545 دونمًا من أراضي الضفة الغربية للرعي، موزعة على منطقتين قرب فصايل وكفر مالك. ويقع القسم الشرقي على أراضي فصايل، بالقرب من منازل فلسطينية وبؤرة استيطانية إسرائيلية مجاورة.\n\nوأفادت الحركة بأن معظم الأراضي المخصصة تقع داخل منطقة عسكرية مخصصة للتدريب، بينما يمتد جزء منها إلى محمية طبيعية. ويضيف القرار إلى المخاوف المستمرة بشأن وصول الفلسطينيين إلى الأراضي الزراعية والمراعي.\n\nوفي فبراير الماضي، وثقت مؤسسة تضامن غور الأردن قيام مستوطنين بقطع المياه والكهرباء عن عائلة في فصايل الوسطى. ويُذكر هذا الحادث بوصفه سياقًا تاريخيًا، وليس اعتداءً جديدًا في نوفمبر.\n\nولم يتوفر لهذا التقرير توثيق مستقل كافٍ لاعتداء محدد في فصايل خلال الفترة من 12 إلى 18 نوفمبر.\n\nوتبقى المخاوف العاجلة الوصول إلى الأراضي والمياه والسكن والحماية من التهجير.",
            "sources": [
                {
                    "labelEn": "Peace Now — November 2026 grazing allocations",
                    "labelAr": "السلام الآن — تخصيص أراضٍ للرعي، نوفمبر 2026",
                    "url": "https://peacenow.org.il/en/following-elections-israel-allocates-over-28000-dunams-of-west-bank-land-to-settlers-for-grazing"
                },
                {
                    "labelEn": "Jordan Valley Solidarity — February 27, 2026 (historical context)",
                    "labelAr": "تضامن غور الأردن — 27 فبراير 2026 (سياق تاريخي)",
                    "url": "https://jordanvalleysolidarity.org/news/settlers-cut-water-and-electricity-supplies-to-fasayil-al-wusta-family/"
                }
            ]
        }
    ],
    "locationMap": {
        "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.42851%2C32.01509%2C35.45851%2C32.03509&layer=mapnik&marker=32.02509%2C35.44351",
        "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.02509&mlon=35.44351#map=15/32.02509/35.44351",
        "latitude": 32.02509,
        "longitude": 35.44351,
        "geographicReferenceUrl": "https://www.geonames.org/285102/al-fasayil.html"
    }
},
{
    "id": "al-jiftlik",
    "nameEn": "Al-Jiftlik",
    "nameAr": "الجفتلك",
    "regionId": "jericho-jordan-valley",
    "governorateId": "jericho",
    "governorateEn": "Jericho & Jordan Valley",
    "governorateAr": "أريحا والأغوار",
    "descriptionEn": "Community overview: Al-Jiftlik, Jericho & Jordan Valley.",
    "descriptionAr": "نبذة عن المجتمع: الجفتلك، أريحا والأغوار.",
    "sourceUrl": null,
    "sourcePublicationDate": null,
    "lastVerifiedDate": null,
    "featureAnchor": null,
    "imagePath": null,
    "backgroundEn": "Al-Jiftlik (الجفتلك) is a Palestinian agricultural and herding village in the Jordan Valley, north of Jericho. Residents depend on farming, livestock, water infrastructure, and access to surrounding grazing land.\n\nThe wider Al-Jiftlik area includes smaller communities such as Abu al-Ajaj and al-Musaffah. These communities are geographically related but should not be treated as identical locations.\n\nParts of the surrounding area fall within Area C, where Israeli planning restrictions and military-designated zones have affected housing, agricultural structures, and residents' ability to maintain their livelihoods.",
    "backgroundAr": "الجفتلك قرية فلسطينية زراعية ورعوية تقع في غور الأردن شمال أريحا. ويعتمد سكانها على الزراعة وتربية المواشي والبنية التحتية للمياه والوصول إلى المراعي المحيطة.\n\nوتضم منطقة الجفتلك الأوسع تجمعات أصغر، منها أبو العجاج والمصفح. وترتبط هذه التجمعات جغرافيًا، لكن لا ينبغي التعامل معها بوصفها مواقع متطابقة.\n\nتقع أجزاء من المنطقة المحيطة ضمن المنطقة «ج»، حيث أثرت قيود التخطيط الإسرائيلية والمناطق المصنفة عسكريًا على المساكن والمنشآت الزراعية وقدرة السكان على الحفاظ على مصادر رزقهم.",
    "concernsEn": null,
    "concernsAr": null,
    "sources": [
        {
            "labelEn": "B'Tselem — Demolitions and confiscations, including Al-Jiftlik",
            "labelAr": "بتسيلم — عمليات الهدم والمصادرة، بما يشمل الجفتلك",
            "url": "https://www.btselem.org/facing_expulsion_blog?nid=215097",
            "supportEn": "Demolitions and confiscations",
            "supportAr": "الهدم والمصادرة"
        },
        {
            "labelEn": "UN OCHA — Humanitarian Situation Report, May 15, 2026",
            "labelAr": "أوتشا — تقرير الحالة الإنسانية، 15 مايو 2026",
            "url": "https://www.ochaopt.org/content/humanitarian-situation-report-15-may-2026",
            "supportEn": "Community context",
            "supportAr": "سياق المجتمع"
        },
        {
            "labelEn": "Wikidata — approximate location of Al-Jiftlik",
            "labelAr": "Wikidata — الموقع التقريبي لـالجفتلك",
            "url": "https://www.wikidata.org/wiki/Q2895719",
            "supportEn": "Approximate geographic coordinates",
            "supportAr": "الإحداثيات الجغرافية التقريبية"
        }
    ],
    "reportingStart": {
        "date": "2026-11-20",
        "labelEn": "November 20, 2026",
        "labelAr": "٢٠ نوفمبر ٢٠٢٦"
    },
    "weeklyRecap": {
        "date": "2026-11-26",
        "dateLabelEn": "November 26, 2026",
        "dateLabelAr": "٢٦ نوفمبر ٢٠٢٦",
        "paragraphs": true,
        "textEn": "Residential displacement and the protection of agricultural livelihoods remain significant humanitarian concerns in Al-Jiftlik.\n\nIn its November 13 report, UN OCHA documented the demolition of six structures serving residential, sanitation and livestock needs in Al-Jiftlik–Abu al-Ajjaj, an area designated by Israeli authorities for military training. The demolitions occurred between November 3 and 9, displacing three Palestinian households comprising 15 residents, including six children.\n\nEarlier, on October 28, Medical Aid for Palestinians documented threats against families in neighboring Ash-Shuneh, alongside damage to a vehicle and theft of a water tank.\n\nOCHA's November 26 report identified continuing demolitions, settler violence and access restrictions as major factors contributing to displacement throughout the Jordan Valley.\n\nNo new incident specifically within Al-Jiftlik was verified in the sources reviewed for November 19–26.\n\nThe protection of residential shelter, livestock facilities, sanitation infrastructure and uninterrupted access to agricultural land remains essential to the community's long-term stability.",
        "textAr": "يظل النزوح السكني وحماية سبل العيش الزراعية من أبرز المخاوف الإنسانية في قرية الجفتلك.\n\nوفي تقريره الصادر في 13 نوفمبر، وثّق مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية هدم ست منشآت سكنية ومرافق للصرف الصحي وتربية المواشي في منطقة الجفتلك – أبو العجاج، التي تصنفها السلطات الإسرائيلية منطقة للتدريبات العسكرية. ووقعت عمليات الهدم بين 3 و9 نوفمبر، مما أدى إلى تهجير ثلاث عائلات فلسطينية تضم 15 شخصاً، من بينهم ستة أطفال.\n\nوفي وقت سابق، بتاريخ 28 أكتوبر، وثّقت مؤسسة العون الطبي للفلسطينيين تهديدات تعرضت لها عائلات في تجمع الشونة المجاور، إلى جانب إلحاق أضرار بمركبة وسرقة خزان مياه.\n\nوأشار تقرير مكتب الأمم المتحدة الصادر في 26 نوفمبر إلى استمرار عمليات الهدم وعنف المستوطنين والقيود المفروضة على الوصول باعتبارها عوامل رئيسية تسهم في النزوح في أنحاء منطقة الأغوار.\n\nولم يتم التحقق من وقوع حادثة جديدة داخل الجفتلك تحديداً في المصادر التي تمت مراجعتها للفترة من 19 إلى 26 نوفمبر.\n\nوتظل حماية المساكن ومنشآت تربية المواشي والبنية التحتية للصرف الصحي وضمان الوصول المستمر إلى الأراضي الزراعية أموراً أساسية لاستقرار المجتمع على المدى الطويل.",
        "emphasizeFinalParagraph": true,
        "sources": [
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report: Al-Jiftlik–Abu al-Ajjaj Demolitions — November 13, 2026",
                "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — عمليات الهدم في الجفتلك – أبو العجاج — ١٣ نوفمبر ٢٠٢٦",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
            },
            {
                "labelEn": "Medical Aid for Palestinians — Threats Against Palestinian Families Near Al-Jiftlik — October 28, 2026",
                "labelAr": "العون الطبي للفلسطينيين — تهديدات ضد العائلات الفلسطينية بالقرب من الجفتلك — ٢٨ أكتوبر ٢٠٢٦",
                "url": "https://www.map.org.uk/latest/news/settlers-threatened-to-force-palestinian-families-from-their-homes-overnight-as-israel-counts-election-votes/"
            },
            {
                "labelEn": "UN OCHA — Humanitarian Situation Report — November 26, 2026",
                "labelAr": "مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية — تقرير الحالة الإنسانية — ٢٦ نوفمبر ٢٠٢٦",
                "url": "https://www.ochaopt.org/content/humanitarian-situation-report-26-november-2026"
            }
        ]
    },
    "previousReports": [
        {
            "date": "2026-11-19",
            "dateLabelEn": "November 19, 2026",
            "dateLabelAr": "١٩ نوفمبر ٢٠٢٦",
            "paragraphs": true,
            "textEn": "Palestinian families in the Al-Jiftlik area face renewed displacement pressure following demolitions and expanding settler activity.\n\nUN OCHA reported that between November 3 and 9, Israeli authorities demolished six residential, sanitation, and livestock structures in Al-Jiftlik–Abu al-Ajaj, displacing three Palestinian households comprising 15 people, including six children.\n\nTwo additional families had reportedly already left their homes because of repeated settler harassment.\n\nOn November 12, reporting described growing fears among families near Al-Jiftlik after Israeli settlers established an outpost nearby. Residents expressed concern about further land seizures, intimidation, and displacement.\n\nThe demolitions occurred earlier in November; they are not presented as new November 19 incidents.\n\nThe immediate concerns are housing security, access to agricultural and grazing land, and protection of families facing displacement.",
            "textAr": "تواجه العائلات الفلسطينية في منطقة الجفتلك ضغوطًا متجددة للتهجير عقب عمليات هدم وتوسع أنشطة المستوطنين.\n\nأفاد مكتب الأمم المتحدة لتنسيق الشؤون الإنسانية بأنه خلال الفترة من 3 إلى 9 نوفمبر، هدمت السلطات الإسرائيلية ست منشآت سكنية وصحية ومخصصة لتربية المواشي في منطقة الجفتلك–أبو العجاج، مما أدى إلى تهجير ثلاث أسر فلسطينية تضم 15 شخصًا، بينهم ستة أطفال.\n\nوكانت عائلتان إضافيتان قد غادرتا منزليهما، وفقًا للتقارير، بسبب المضايقات المتكررة من المستوطنين.\n\nوفي 12 نوفمبر، وصفت تقارير تزايد مخاوف العائلات قرب الجفتلك بعد إقامة مستوطنين إسرائيليين بؤرة استيطانية مجاورة. وأعرب السكان عن قلقهم من مزيد من الاستيلاء على الأراضي والترهيب والتهجير.\n\nوقعت عمليات الهدم في وقت سابق من نوفمبر، ولا تُعرض بوصفها حوادث جديدة وقعت في 19 نوفمبر.\n\nوتبقى المخاوف العاجلة أمن السكن والوصول إلى الأراضي الزراعية والمراعي وحماية العائلات المهددة بالتهجير.",
            "sources": [
                {
                    "labelEn": "UN OCHA — Humanitarian Situation Report, November 13, 2026",
                    "labelAr": "أوتشا — تقرير الحالة الإنسانية، 13 نوفمبر 2026",
                    "url": "https://www.ochaopt.org/content/humanitarian-situation-report-13-november-2026"
                },
                {
                    "labelEn": "Times of Palestine — November 12, 2026",
                    "labelAr": "تايمز أوف فلسطين — 12 نوفمبر 2026",
                    "url": "https://www.timesofpalestine.com/en/story/settlers-erect-outpost-near-west-bank-village-threatening-ae5f625e51.html"
                }
            ]
        }
    ],
    "locationMap": {
        "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.4783333%2C32.1341667%2C35.5083333%2C32.1541667&layer=mapnik&marker=32.1441667%2C35.4933333",
        "largerMapUrl": "https://www.openstreetmap.org/?mlat=32.1441667&mlon=35.4933333#map=15/32.1441667/35.4933333",
        "latitude": 32.1441667,
        "longitude": 35.4933333,
        "geographicReferenceUrl": "https://www.wikidata.org/wiki/Q2895719"
    }
}
];
