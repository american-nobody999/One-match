"use strict";
//Author: Leslie Brockman
//Date:11-01-2026
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
        "featureAnchor": "umm-al-khair",
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
        },
        "locationMap": {
            "embedUrl": "https://www.openstreetmap.org/export/embed.html?bbox=35.170164%2C31.422089%2C35.200164%2C31.442089&layer=mapnik&marker=31.432089%2C35.185164",
            "largerMapUrl": "https://www.openstreetmap.org/?mlat=31.432089&mlon=35.185164#map=15/31.432089/35.185164"
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        },
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        "backgroundEn": "Immatin is a Palestinian village in Qalqilya Governorate, in the northern West Bank.",
        "backgroundAr": "إماتين قرية فلسطينية تقع في محافظة قلقيلية شمال الضفة الغربية.",
        "concernsEn": "WAFA, citing local sources, reported injuries in a settler assault on Palestinians on their land in Immatin on 5 October 2026.",
        "concernsAr": "أفادت وفا، نقلًا عن مصادر محلية، بوقوع إصابات في اعتداء مستوطنين على فلسطينيين في أراضيهم بإماتين في 5 أكتوبر 2026.",
        "sources": [
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
        }
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
        "backgroundEn": "Silwan is a Palestinian neighborhood of occupied East Jerusalem, immediately south of Jerusalem's Old City. OCHA’s 2018 account identifies it within the area often called the Holy Basin and describes Batan al-Hawa as one of its densely populated neighbourhoods.",
        "backgroundAr": "سلوان حي فلسطيني في القدس الشرقية المحتلة، يقع مباشرة جنوب البلدة القديمة في القدس. ويضعها تقرير أوتشا لعام 2018 ضمن المنطقة التي تُسمّى غالبًا الحوض المقدس، ويصف بطن الهوى بأنه أحد أحيائها المكتظة بالسكان.",
        "concernsEn": "OCHA’s late-October 2026 report described a road gate restricting vehicle access in Wadi ar Rababa, Silwan.",
        "concernsAr": "وصف تقرير أوتشا أواخر أكتوبر 2026 بوابة طريق تقيّد وصول المركبات في وادي الربابة بسلوان.",
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
        }
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
        "backgroundEn": "Al-Walaja is a Palestinian village in Bethlehem Governorate, southwest of Jerusalem, near the boundary between Jerusalem and Bethlehem. Al-Walaja is a Palestinian community whose present village developed after displacement from the original village in 1948. UNRWA’s January 2012 profile describes village land divided between Jerusalem’s municipal boundaries and the West Bank’s Area C.",
        "backgroundAr": "الولجة قرية فلسطينية تقع في محافظة بيت لحم، جنوب غرب القدس، بالقرب من المنطقة الفاصلة بين القدس وبيت لحم. الولجة تجمع فلسطيني نشأت قريته الحالية بعد التهجير من القرية الأصلية عام 1948. ويصف ملف الأونروا الصادر في يناير 2012 أراضي القرية المقسّمة بين الحدود البلدية للقدس والمنطقة «ج» في الضفة الغربية.",
        "concernsEn": "OCHA’s 20–26 October 2026 account includes residential demolitions in Al-Walaja for lacking Israeli-issued building permits.",
        "concernsAr": "يتضمّن تقرير أوتشا عن 20–26 أكتوبر 2026 هدم مبانٍ سكنية في الولجة لعدم وجود تراخيص بناء إسرائيلية.",
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
        }
    }
];
