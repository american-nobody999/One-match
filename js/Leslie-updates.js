"use strict";
// Author: Leslie Brockman
// Date: 10/30/2026
const missionDefinitions = [
  {
    "page": "index.html",
    "title": [
      "Homepage",
      "الرئيسية"
    ],
    "description": [
      "Homepage discovery and navigation.",
      "استكشاف الموقع والتنقل من الصفحة الرئيسية."
    ],
    "tasks": [
      {
        "id": "index:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "index:featured",
        "label": [
          "Review featured homepage content.",
          "مراجعة المحتوى المميز في الرئيسية."
        ]
      },
      {
        "id": "index:destinations",
        "label": [
          "Check card destinations.",
          "فحص وجهات البطاقات."
        ]
      },
      {
        "id": "index:images",
        "label": [
          "Update images where required.",
          "تحديث الصور عند الحاجة."
        ]
      },
      {
        "id": "index:titles",
        "label": [
          "Verify English and Arabic titles.",
          "التحقق من العناوين الإنجليزية والعربية."
        ]
      },
      {
        "id": "index:responsive",
        "label": [
          "Check desktop, tablet, and mobile layout.",
          "فحص التخطيط على الحاسوب والجهاز اللوحي والهاتف."
        ]
      },
      {
        "id": "index:navigation",
        "label": [
          "Confirm navigation and shared components.",
          "التحقق من التنقل والمكونات المشتركة."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "ok-palestine.html",
    "title": [
      "OK Palestine",
      "فلسطين بخير"
    ],
    "description": [
      "Weekly bilingual communications.",
      "رسائل أسبوعية باللغتين."
    ],
    "tasks": [
      {
        "id": "ok-palestine:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "ok-palestine:date",
        "label": [
          "Update publication date.",
          "تحديث تاريخ النشر."
        ]
      },
      {
        "id": "ok-palestine:english",
        "label": [
          "Review and update weekly English content.",
          "مراجعة المحتوى الإنجليزي الأسبوعي وتحديثه."
        ]
      },
      {
        "id": "ok-palestine:arabic",
        "label": [
          "Review and update Arabic translations.",
          "مراجعة الترجمات العربية وتحديثها."
        ]
      },
      {
        "id": "ok-palestine:media",
        "label": [
          "Update weekly media where applicable.",
          "تحديث الوسائط الأسبوعية عند الحاجة."
        ]
      },
      {
        "id": "ok-palestine:links",
        "label": [
          "Verify links and media.",
          "التحقق من الروابط والوسائط."
        ]
      },
      {
        "id": "ok-palestine:archive",
        "label": [
          "Archive previous content where required.",
          "أرشفة المحتوى السابق عند الحاجة."
        ]
      },
      {
        "id": "ok-palestine:responsive",
        "label": [
          "Check desktop and mobile presentation.",
          "فحص العرض على الحاسوب والهاتف."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "ok-america.html",
    "title": [
      "OK America",
      "أمريكا"
    ],
    "description": [
      "Weekly bilingual communications.",
      "رسائل أسبوعية باللغتين."
    ],
    "tasks": [
      {
        "id": "ok-america:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "ok-america:date",
        "label": [
          "Update publication date.",
          "تحديث تاريخ النشر."
        ]
      },
      {
        "id": "ok-america:english",
        "label": [
          "Review and update weekly English content.",
          "مراجعة المحتوى الإنجليزي الأسبوعي وتحديثه."
        ]
      },
      {
        "id": "ok-america:arabic",
        "label": [
          "Review and update Arabic translations.",
          "مراجعة الترجمات العربية وتحديثها."
        ]
      },
      {
        "id": "ok-america:media",
        "label": [
          "Update weekly media where applicable.",
          "تحديث الوسائط الأسبوعية عند الحاجة."
        ]
      },
      {
        "id": "ok-america:links",
        "label": [
          "Verify links and media.",
          "التحقق من الروابط والوسائط."
        ]
      },
      {
        "id": "ok-america:archive",
        "label": [
          "Archive previous content where required.",
          "أرشفة المحتوى السابق عند الحاجة."
        ]
      },
      {
        "id": "ok-america:responsive",
        "label": [
          "Check desktop and mobile presentation.",
          "فحص العرض على الحاسوب والهاتف."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "ok-humanity.html",
    "title": [
      "OK Humanity",
      "الإنسانية"
    ],
    "description": [
      "Weekly bilingual communications.",
      "رسائل أسبوعية باللغتين."
    ],
    "tasks": [
      {
        "id": "ok-humanity:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "ok-humanity:date",
        "label": [
          "Update publication date.",
          "تحديث تاريخ النشر."
        ]
      },
      {
        "id": "ok-humanity:english",
        "label": [
          "Review and update weekly English content.",
          "مراجعة المحتوى الإنجليزي الأسبوعي وتحديثه."
        ]
      },
      {
        "id": "ok-humanity:arabic",
        "label": [
          "Review and update Arabic translations.",
          "مراجعة الترجمات العربية وتحديثها."
        ]
      },
      {
        "id": "ok-humanity:media",
        "label": [
          "Update weekly media where applicable.",
          "تحديث الوسائط الأسبوعية عند الحاجة."
        ]
      },
      {
        "id": "ok-humanity:links",
        "label": [
          "Verify links and media.",
          "التحقق من الروابط والوسائط."
        ]
      },
      {
        "id": "ok-humanity:archive",
        "label": [
          "Archive previous content where required.",
          "أرشفة المحتوى السابق عند الحاجة."
        ]
      },
      {
        "id": "ok-humanity:responsive",
        "label": [
          "Check desktop and mobile presentation.",
          "فحص العرض على الحاسوب والهاتف."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "ok-israelis.html",
    "title": [
      "OK Israelis",
      "الإسرائيليون"
    ],
    "description": [
      "Weekly bilingual communications.",
      "رسائل أسبوعية باللغتين."
    ],
    "tasks": [
      {
        "id": "ok-israelis:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "ok-israelis:date",
        "label": [
          "Update publication date.",
          "تحديث تاريخ النشر."
        ]
      },
      {
        "id": "ok-israelis:english",
        "label": [
          "Review and update weekly English content.",
          "مراجعة المحتوى الإنجليزي الأسبوعي وتحديثه."
        ]
      },
      {
        "id": "ok-israelis:arabic",
        "label": [
          "Review and update Arabic translations.",
          "مراجعة الترجمات العربية وتحديثها."
        ]
      },
      {
        "id": "ok-israelis:media",
        "label": [
          "Update weekly media where applicable.",
          "تحديث الوسائط الأسبوعية عند الحاجة."
        ]
      },
      {
        "id": "ok-israelis:links",
        "label": [
          "Verify links and media.",
          "التحقق من الروابط والوسائط."
        ]
      },
      {
        "id": "ok-israelis:archive",
        "label": [
          "Archive previous content where required.",
          "أرشفة المحتوى السابق عند الحاجة."
        ]
      },
      {
        "id": "ok-israelis:responsive",
        "label": [
          "Check desktop and mobile presentation.",
          "فحص العرض على الحاسوب والهاتف."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "world_leader.html",
    "title": [
      "World Leaders",
      "قادة العالم"
    ],
    "description": [
      "Communications for Trump, Iran, and Pope Leo.",
      "رسائل ترامب وإيران والبابا لاوون."
    ],
    "tasks": [
      {
        "id": "world_leader:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "world_leader:date",
        "label": [
          "Update global publication date.",
          "تحديث تاريخ النشر العام."
        ]
      },
      {
        "id": "world_leader:trump",
        "label": [
          "Review Trump section.",
          "مراجعة قسم ترامب."
        ]
      },
      {
        "id": "world_leader:iran",
        "label": [
          "Review Iran section.",
          "مراجعة قسم إيران."
        ]
      },
      {
        "id": "world_leader:pope",
        "label": [
          "Review Pope Leo section.",
          "مراجعة قسم البابا لاوون."
        ]
      },
      {
        "id": "world_leader:media",
        "label": [
          "Update media and communications as needed.",
          "تحديث الوسائط والرسائل عند الحاجة."
        ]
      },
      {
        "id": "world_leader:archive",
        "label": [
          "Archive previous communications.",
          "أرشفة الرسائل السابقة."
        ]
      },
      {
        "id": "world_leader:languages",
        "label": [
          "Verify bilingual content.",
          "التحقق من المحتوى باللغتين."
        ]
      },
      {
        "id": "world_leader:responsive",
        "label": [
          "Check responsive presentation.",
          "فحص العرض المتجاوب."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "faith.html",
    "title": [
      "Faith",
      "الإيمان"
    ],
    "description": [
      "Friday prayers and their archives.",
      "أدعية الجمعة وأرشيفها."
    ],
    "tasks": [
      {
        "id": "faith:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "faith:date",
        "label": [
          "Update Friday Prayer publication date.",
          "تحديث تاريخ نشر دعاء الجمعة."
        ]
      },
      {
        "id": "faith:first",
        "label": [
          "Update the first prayer.",
          "تحديث الدعاء الأول."
        ]
      },
      {
        "id": "faith:second",
        "label": [
          "Update the second prayer where applicable.",
          "تحديث الدعاء الثاني عند الحاجة."
        ]
      },
      {
        "id": "faith:arabic",
        "label": [
          "Review Arabic translations.",
          "مراجعة الترجمات العربية."
        ]
      },
      {
        "id": "faith:archive",
        "label": [
          "Archive previous prayers.",
          "أرشفة الأدعية السابقة."
        ]
      },
      {
        "id": "faith:links",
        "label": [
          "Verify presentation and links.",
          "التحقق من العرض والروابط."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "featured.html",
    "title": [
      "Featured collection",
      "المجموعة المميزة"
    ],
    "description": [
      "Featured individuals and their stories.",
      "الشخصيات المميزة وقصصها."
    ],
    "tasks": [
      {
        "id": "featured:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "featured:individual",
        "label": [
          "Select or review featured individual.",
          "اختيار الشخصية المميزة أو مراجعتها."
        ]
      },
      {
        "id": "featured:identity",
        "label": [
          "Verify identity and source information.",
          "التحقق من الهوية ومعلومات المصادر."
        ]
      },
      {
        "id": "featured:biography",
        "label": [
          "Update biography.",
          "تحديث السيرة."
        ]
      },
      {
        "id": "featured:image",
        "label": [
          "Update image.",
          "تحديث الصورة."
        ]
      },
      {
        "id": "featured:links",
        "label": [
          "Update social and external links.",
          "تحديث الروابط الاجتماعية والخارجية."
        ]
      },
      {
        "id": "featured:languages",
        "label": [
          "Review English and Arabic content.",
          "مراجعة المحتوى الإنجليزي والعربي."
        ]
      },
      {
        "id": "featured:flip",
        "label": [
          "Test flip-card functionality.",
          "اختبار تقليب البطاقات."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "hero.html",
    "title": [
      "Heroes",
      "الأبطال"
    ],
    "description": [
      "Journalists, sources, and memorial information.",
      "الصحفيون والمصادر ومعلومات التأبين."
    ],
    "tasks": [
      {
        "id": "hero:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "hero:directory",
        "label": [
          "Review journalist directory.",
          "مراجعة دليل الصحفيين."
        ]
      },
      {
        "id": "hero:add",
        "label": [
          "Add verified journalists where needed.",
          "إضافة صحفيين موثّقين عند الحاجة."
        ]
      },
      {
        "id": "hero:sources",
        "label": [
          "Update source links.",
          "تحديث روابط المصادر."
        ]
      },
      {
        "id": "hero:memorial",
        "label": [
          "Check memorial information.",
          "فحص معلومات التأبين."
        ]
      },
      {
        "id": "hero:accounts",
        "label": [
          "Verify images and social accounts.",
          "التحقق من الصور والحسابات الاجتماعية."
        ]
      },
      {
        "id": "hero:languages",
        "label": [
          "Review bilingual content.",
          "مراجعة المحتوى باللغتين."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "creators.html",
    "title": [
      "Creators",
      "صنّاع المحتوى"
    ],
    "description": [
      "Creator profiles and public accounts.",
      "ملفات صنّاع المحتوى وحساباتهم العامة."
    ],
    "tasks": [
      {
        "id": "creators:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "creators:submissions",
        "label": [
          "Review new creator submissions.",
          "مراجعة طلبات صنّاع المحتوى الجديدة."
        ]
      },
      {
        "id": "creators:ownership",
        "label": [
          "Verify account ownership and recent activity.",
          "التحقق من ملكية الحسابات ونشاطها الأخير."
        ]
      },
      {
        "id": "creators:cards",
        "label": [
          "Add or update creator cards.",
          "إضافة بطاقات صنّاع المحتوى أو تحديثها."
        ]
      },
      {
        "id": "creators:images",
        "label": [
          "Check image paths.",
          "فحص مسارات الصور."
        ]
      },
      {
        "id": "creators:links",
        "label": [
          "Verify social and support links.",
          "التحقق من روابط التواصل والدعم."
        ]
      },
      {
        "id": "creators:biographies",
        "label": [
          "Review English and Arabic biographies.",
          "مراجعة السير بالإنجليزية والعربية."
        ]
      },
      {
        "id": "creators:interactions",
        "label": [
          "Test search, pagination, and flip cards.",
          "اختبار البحث وترقيم الصفحات وتقليب البطاقات."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "united.html",
    "title": [
      "United",
      "متحدون"
    ],
    "description": [
      "Humanitarian organizations and their work.",
      "المنظمات الإنسانية وأعمالها."
    ],
    "tasks": [
      {
        "id": "united:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "united:organizations",
        "label": [
          "Review organizations.",
          "مراجعة المنظمات."
        ]
      },
      {
        "id": "united:links",
        "label": [
          "Verify social and website links.",
          "التحقق من روابط التواصل والمواقع."
        ]
      },
      {
        "id": "united:permissions",
        "label": [
          "Review support destinations and permissions.",
          "مراجعة وجهات الدعم والأذونات."
        ]
      },
      {
        "id": "united:add",
        "label": [
          "Add organizations where needed.",
          "إضافة منظمات عند الحاجة."
        ]
      },
      {
        "id": "united:introductions",
        "label": [
          "Update bilingual introductions.",
          "تحديث المقدمات باللغتين."
        ]
      },
      {
        "id": "united:stories",
        "label": [
          "Update full stories.",
          "تحديث القصص الكاملة."
        ]
      },
      {
        "id": "united:images",
        "label": [
          "Verify organization images.",
          "التحقق من صور المنظمات."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "drinking-games.html",
    "title": [
      "Drinking Games",
      "ألعاب الشرب"
    ],
    "description": [
      "Entertainment and interactive activities.",
      "الترفيه والأنشطة التفاعلية."
    ],
    "tasks": [
      {
        "id": "drinking-games:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "drinking-games:games",
        "label": [
          "Review current games and activities.",
          "مراجعة الألعاب والأنشطة الحالية."
        ]
      },
      {
        "id": "drinking-games:entertainment",
        "label": [
          "Update entertainment content when needed.",
          "تحديث المحتوى الترفيهي عند الحاجة."
        ]
      },
      {
        "id": "drinking-games:media",
        "label": [
          "Verify media and links.",
          "التحقق من الوسائط والروابط."
        ]
      },
      {
        "id": "drinking-games:interactions",
        "label": [
          "Test interactive elements.",
          "اختبار العناصر التفاعلية."
        ]
      },
      {
        "id": "drinking-games:languages",
        "label": [
          "Check bilingual content.",
          "فحص المحتوى باللغتين."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "ticket.html",
    "title": [
      "Golden Ticket",
      "التذكرة الذهبية"
    ],
    "description": [
      "Periodic review of page content and destinations.",
      "مراجعة دورية لمحتوى الصفحة ووجهاتها."
    ],
    "tasks": [
      {
        "id": "ticket:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "leslie.html",
    "title": [
      "Leslie",
      "ليزلي"
    ],
    "description": [
      "Periodic review of page content and destinations.",
      "مراجعة دورية لمحتوى الصفحة ووجهاتها."
    ],
    "tasks": [
      {
        "id": "leslie:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "circus.html",
    "title": [
      "Circus",
      "السيرك"
    ],
    "description": [
      "Circus teaser and collaboration updates.",
      "إعلان السيرك وتحديثات التعاون."
    ],
    "tasks": [
      {
        "id": "circus:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "circus:teaser",
        "label": [
          "Review the Coming Soon teaser.",
          "مراجعة إعلان قريبًا."
        ]
      },
      {
        "id": "circus:animation",
        "label": [
          "Check tent and curtain animation.",
          "فحص حركة الخيمة والستارة."
        ]
      },
      {
        "id": "circus:collaboration",
        "label": [
          "Review collaboration updates.",
          "مراجعة تحديثات التعاون."
        ]
      },
      {
        "id": "circus:languages",
        "label": [
          "Verify bilingual content.",
          "التحقق من المحتوى باللغتين."
        ]
      },
      {
        "id": "circus:responsive",
        "label": [
          "Test mobile and reduced-motion behavior.",
          "اختبار الهاتف ووضع تقليل الحركة."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "edu.html",
    "title": [
      "Schoolhouse",
      "المدرسة"
    ],
    "description": [
      "Weekly schoolhouse lesson and classroom links.",
      "درس المدرسة الأسبوعي وروابط الصفوف."
    ],
    "tasks": [
      {
        "id": "edu:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "edu:lesson",
        "label": [
          "Review the weekly lesson in both languages.",
          "مراجعة درس الأسبوع باللغتين."
        ]
      },
      {
        "id": "edu:classrooms",
        "label": [
          "Verify classroom links and presentation.",
          "التحقق من روابط الصفوف والعرض."
        ]
      }
    ],
    "category": "weekly",
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "letter.html",
    "title": [
      "Letters to Palestine",
      "رسائل إلى فلسطين"
    ],
    "description": [
      "Dated communications to Palestine.",
      "رسائل مؤرخة إلى فلسطين."
    ],
    "tasks": [
      {
        "id": "letter:review",
        "label": [
          "Review and update page.",
          "مراجعة الصفحة وتحديثها."
        ]
      },
      {
        "id": "letter:date",
        "label": [
          "Update letter publication date.",
          "تحديث تاريخ نشر الرسالة."
        ]
      },
      {
        "id": "letter:languages",
        "label": [
          "Review the letter in English and Arabic.",
          "مراجعة الرسالة بالإنجليزية والعربية."
        ]
      },
      {
        "id": "letter:archive",
        "label": [
          "Archive the previous letter where required.",
          "أرشفة الرسالة السابقة عند الحاجة."
        ]
      }
    ],
    "category": "periodic",
    "weekly": false,
    "group": [
      "main"
    ]
  },
  {
    "page": "leslie-updates.html",
    "title": [
      "Leslie’s Updates",
      "تحديثات ليزلي"
    ],
    "description": [
      "Weekly transmissions and mission coordination.",
      "الرسائل الأسبوعية وتنسيق المهام."
    ],
    "category": "weekly",
    "tasks": [
      {
        "id": "leslie-updates:this-week",
        "label": [
          "Write This Week’s Transmission.",
          "كتابة رسالة هذا الأسبوع."
        ]
      },
      {
        "id": "leslie-updates:next-week",
        "label": [
          "Write Next Week’s Mission.",
          "كتابة مهمة الأسبوع القادم."
        ]
      },
      {
        "id": "leslie-updates:announcements",
        "label": [
          "Review announcements.",
          "مراجعة الإعلانات."
        ]
      },
      {
        "id": "leslie-updates:community",
        "label": [
          "Update community communications.",
          "تحديث رسائل المجتمع."
        ]
      },
      {
        "id": "leslie-updates:challenges",
        "label": [
          "Review developer challenges and MEGA contests.",
          "مراجعة تحديات المطورين ومسابقات ميغا."
        ]
      },
      {
        "id": "leslie-updates:links",
        "label": [
          "Verify links.",
          "التحقق من الروابط."
        ]
      },
      {
        "id": "leslie-updates:board",
        "label": [
          "Review the Mission Board and dependency map.",
          "مراجعة لوحة المهام وخريطة الاعتماديات."
        ]
      }
    ],
    "weekly": true,
    "group": [
      "main"
    ]
  },
  {
    "page": "archives/ok-series/index.html",
    "title": [
      "OK Series Archives",
      "أرشيف سلسلة حسنًا"
    ],
    "description": [
      "Maintain archived OK communications.",
      "صيانة رسائل سلسلة حسنًا المؤرشفة."
    ],
    "category": "weekly",
    "tasks": [
      {
        "id": "archives/ok-series/index:entries",
        "label": [
          "Review archived entries and dates.",
          "مراجعة المواد المؤرشفة وتواريخها."
        ]
      },
      {
        "id": "archives/ok-series/index:links",
        "label": [
          "Verify archive navigation and links.",
          "التحقق من تنقل الأرشيف وروابطه."
        ]
      },
      {
        "id": "archives/ok-series/index:languages",
        "label": [
          "Review bilingual presentation.",
          "مراجعة العرض باللغتين."
        ]
      }
    ],
    "weekly": true,
    "group": [
      "archives",
      "ok-series"
    ]
  },
  {
    "page": "archives/world-leaders/index.html",
    "title": [
      "World Leader Archives",
      "أرشيف قادة العالم"
    ],
    "description": [
      "Maintain archived leader communications.",
      "صيانة رسائل القادة المؤرشفة."
    ],
    "category": "weekly",
    "tasks": [
      {
        "id": "archives/world-leaders/index:entries",
        "label": [
          "Review archived entries and dates.",
          "مراجعة المواد المؤرشفة وتواريخها."
        ]
      },
      {
        "id": "archives/world-leaders/index:links",
        "label": [
          "Verify archive navigation and links.",
          "التحقق من تنقل الأرشيف وروابطه."
        ]
      },
      {
        "id": "archives/world-leaders/index:languages",
        "label": [
          "Review bilingual presentation.",
          "مراجعة العرض باللغتين."
        ]
      }
    ],
    "weekly": true,
    "group": [
      "archives",
      "world-leaders"
    ]
  },
  {
    "page": "archives/friday-prayers/index.html",
    "title": [
      "Friday Prayer Archives",
      "أرشيف أدعية الجمعة"
    ],
    "description": [
      "Maintain archived prayers.",
      "صيانة الأدعية المؤرشفة."
    ],
    "category": "weekly",
    "tasks": [
      {
        "id": "archives/friday-prayers/index:entries",
        "label": [
          "Review archived entries and dates.",
          "مراجعة المواد المؤرشفة وتواريخها."
        ]
      },
      {
        "id": "archives/friday-prayers/index:links",
        "label": [
          "Verify archive navigation and links.",
          "التحقق من تنقل الأرشيف وروابطه."
        ]
      },
      {
        "id": "archives/friday-prayers/index:languages",
        "label": [
          "Review bilingual presentation.",
          "مراجعة العرض باللغتين."
        ]
      }
    ],
    "weekly": true,
    "group": [
      "archives",
      "friday-prayers"
    ]
  },
  {
    "page": "archives/love-letters-palestine/index.html",
    "title": [
      "Letter Archives",
      "أرشيف الرسائل"
    ],
    "description": [
      "Maintain archived letters to Palestine.",
      "صيانة الرسائل المؤرشفة إلى فلسطين."
    ],
    "category": "weekly",
    "tasks": [
      {
        "id": "archives/love-letters-palestine/index:entries",
        "label": [
          "Review archived entries and dates.",
          "مراجعة المواد المؤرشفة وتواريخها."
        ]
      },
      {
        "id": "archives/love-letters-palestine/index:links",
        "label": [
          "Verify archive navigation and links.",
          "التحقق من تنقل الأرشيف وروابطه."
        ]
      },
      {
        "id": "archives/love-letters-palestine/index:languages",
        "label": [
          "Review bilingual presentation.",
          "مراجعة العرض باللغتين."
        ]
      }
    ],
    "weekly": true,
    "group": [
      "archives",
      "love-letters-palestine"
    ]
  },
  {
    "page": null,
    "id": "planned-west-bank",
    "title": [
      "West Bank",
      "الضفة الغربية"
    ],
    "description": [
      "Planned page; no destination exists yet. Andrey, You’re Famous, and Loser of the Week remain in drinking-games.html.",
      "صفحة مخططة بلا وجهة حتى الآن. ما زالت أقسام أندريه وأنت مشهور وخاسر الأسبوع في صفحة ألعاب الشرب."
    ],
    "category": "planned",
    "tasks": [],
    "plannedTasks": [
      [
        "Review Andrey content.",
        "مراجعة محتوى أندريه."
      ],
      [
        "Update You’re Famous.",
        "تحديث قسم أنت مشهور."
      ],
      [
        "Update Loser of the Week.",
        "تحديث قسم خاسر الأسبوع."
      ],
      [
        "Verify media.",
        "التحقق من الوسائط."
      ],
      [
        "Review bilingual content.",
        "مراجعة المحتوى باللغتين."
      ],
      [
        "Check links and responsive behavior.",
        "فحص الروابط والعرض المتجاوب."
      ]
    ],
    "weekly": false,
    "group": [
      "planned"
    ]
  },
  {
    "page": "about.html",
    "title": [
      "about.html",
      "about.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "about:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "arcade.html",
    "title": [
      "arcade.html",
      "arcade.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "arcade:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "archive.html",
    "title": [
      "archive.html",
      "archive.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "archive:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "archives/friday-prayers/2026-10.html",
    "title": [
      "archives/friday-prayers/2026-10.html",
      "archives/friday-prayers/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/friday-prayers/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "friday-prayers"
    ]
  },
  {
    "page": "archives/index.html",
    "title": [
      "archives/index.html",
      "archives/index.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/index:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives"
    ]
  },
  {
    "page": "archives/love-letters-palestine/2026-10.html",
    "title": [
      "archives/love-letters-palestine/2026-10.html",
      "archives/love-letters-palestine/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/love-letters-palestine/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "love-letters-palestine"
    ]
  },
  {
    "page": "archives/ok-america/2026-10.html",
    "title": [
      "archives/ok-america/2026-10.html",
      "archives/ok-america/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-america/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-america"
    ]
  },
  {
    "page": "archives/ok-humanity/2026-10.html",
    "title": [
      "archives/ok-humanity/2026-10.html",
      "archives/ok-humanity/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-humanity/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-humanity"
    ]
  },
  {
    "page": "archives/ok-israelis/2026-10.html",
    "title": [
      "archives/ok-israelis/2026-10.html",
      "archives/ok-israelis/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-israelis/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-israelis"
    ]
  },
  {
    "page": "archives/ok-palestine/2026-10.html",
    "title": [
      "archives/ok-palestine/2026-10.html",
      "archives/ok-palestine/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-palestine/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-palestine"
    ]
  },
  {
    "page": "archives/ok-series/ok-america/2026-10.html",
    "title": [
      "archives/ok-series/ok-america/2026-10.html",
      "archives/ok-series/ok-america/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-series/ok-america/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-series",
      "ok-america"
    ]
  },
  {
    "page": "archives/ok-series/ok-humanity/2026-10.html",
    "title": [
      "archives/ok-series/ok-humanity/2026-10.html",
      "archives/ok-series/ok-humanity/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-series/ok-humanity/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-series",
      "ok-humanity"
    ]
  },
  {
    "page": "archives/ok-series/ok-israelis/2026-10.html",
    "title": [
      "archives/ok-series/ok-israelis/2026-10.html",
      "archives/ok-series/ok-israelis/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-series/ok-israelis/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-series",
      "ok-israelis"
    ]
  },
  {
    "page": "archives/ok-series/ok-palestine/2026-10.html",
    "title": [
      "archives/ok-series/ok-palestine/2026-10.html",
      "archives/ok-series/ok-palestine/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/ok-series/ok-palestine/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "ok-series",
      "ok-palestine"
    ]
  },
  {
    "page": "archives/other-communications/index.html",
    "title": [
      "archives/other-communications/index.html",
      "archives/other-communications/index.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/other-communications/index:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "other-communications"
    ]
  },
  {
    "page": "archives/world-leaders/iran/2026-10.html",
    "title": [
      "archives/world-leaders/iran/2026-10.html",
      "archives/world-leaders/iran/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/world-leaders/iran/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "world-leaders",
      "iran"
    ]
  },
  {
    "page": "archives/world-leaders/pope-leo/2026-10.html",
    "title": [
      "archives/world-leaders/pope-leo/2026-10.html",
      "archives/world-leaders/pope-leo/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/world-leaders/pope-leo/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "world-leaders",
      "pope-leo"
    ]
  },
  {
    "page": "archives/world-leaders/trump/2026-10.html",
    "title": [
      "archives/world-leaders/trump/2026-10.html",
      "archives/world-leaders/trump/2026-10.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "archives/world-leaders/trump/2026-10:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "archives",
      "world-leaders",
      "trump"
    ]
  },
  {
    "page": "art.html",
    "title": [
      "art.html",
      "art.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "art:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "biosite/about.html",
    "title": [
      "biosite/about.html",
      "biosite/about.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "biosite/about:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "biosite"
    ]
  },
  {
    "page": "biosite/hobby.html",
    "title": [
      "biosite/hobby.html",
      "biosite/hobby.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "biosite/hobby:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "biosite"
    ]
  },
  {
    "page": "biosite/index.html",
    "title": [
      "biosite/index.html",
      "biosite/index.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "biosite/index:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "biosite"
    ]
  },
  {
    "page": "bopcrap.html",
    "title": [
      "bopcrap.html",
      "bopcrap.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "bopcrap:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "boptest.html",
    "title": [
      "boptest.html",
      "boptest.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "boptest:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "contact.html",
    "title": [
      "contact.html",
      "contact.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "contact:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "crimes.html",
    "title": [
      "crimes.html",
      "crimes.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "crimes:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "docs.html",
    "title": [
      "docs.html",
      "docs.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "docs:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "education/abc123.html",
    "title": [
      "education/abc123.html",
      "education/abc123.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "education/abc123:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "education/history.html",
    "title": [
      "education/history.html",
      "education/history.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "education/history:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "education/homework.html",
    "title": [
      "education/homework.html",
      "education/homework.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "weekly",
    "weekly": true,
    "tasks": [
      {
        "id": "education/homework:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "education/math.html",
    "title": [
      "education/math.html",
      "education/math.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "education/math:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "education/recess.html",
    "title": [
      "education/recess.html",
      "education/recess.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "education/recess:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "education/science.html",
    "title": [
      "education/science.html",
      "education/science.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "education/science:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "education"
    ]
  },
  {
    "page": "eighth-front.html",
    "title": [
      "eighth-front.html",
      "eighth-front.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "eighth-front:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "face.html",
    "title": [
      "face.html",
      "face.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "face:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "faithc.html",
    "title": [
      "faithc.html",
      "faithc.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "faithc:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "faithi.html",
    "title": [
      "faithi.html",
      "faithi.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "faithi:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "faithj.html",
    "title": [
      "faithj.html",
      "faithj.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "faithj:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "featured-hero.html",
    "title": [
      "featured-hero.html",
      "featured-hero.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "featured-hero:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "flip.html",
    "title": [
      "flip.html",
      "flip.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "flip:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "legal.html",
    "title": [
      "legal.html",
      "legal.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "legal:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "link.html",
    "title": [
      "link.html",
      "link.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "link:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "mpga.html",
    "title": [
      "mpga.html",
      "mpga.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "mpga:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "progress.html",
    "title": [
      "progress.html",
      "progress.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "progress:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "quests.html",
    "title": [
      "quests.html",
      "quests.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "quests:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "reddoor.html",
    "title": [
      "reddoor.html",
      "reddoor.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "reddoor:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "rocks.html",
    "title": [
      "rocks.html",
      "rocks.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "rocks:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "rose.html",
    "title": [
      "rose.html",
      "rose.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "rose:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "template.html",
    "title": [
      "template.html",
      "template.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "template:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "test-quests.html",
    "title": [
      "test-quests.html",
      "test-quests.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "test-quests:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "test.html",
    "title": [
      "test.html",
      "test.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "test:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "ticket3.html",
    "title": [
      "ticket3.html",
      "ticket3.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "ticket3:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": "worldleader.html",
    "title": [
      "worldleader.html",
      "worldleader.html"
    ],
    "description": [
      "Local project page; review when needed.",
      "ملف ضمن المشروع؛ يُراجع عند الحاجة."
    ],
    "category": "periodic",
    "weekly": false,
    "tasks": [
      {
        "id": "worldleader:maintenance",
        "label": [
          "Review page when needed.",
          "مراجعة الصفحة عند الحاجة."
        ]
      }
    ],
    "group": [
      "main"
    ]
  },
  {
    "page": null,
    "id": "planned-big-top",
    "title": [
      "🎪 The Big Top",
      "🎪 الخيمة الكبرى"
    ],
    "description": [
      "Personal planning reference for future circus-related development.",
      "مرجع تخطيط شخصي لتطوير مشاريع السيرك مستقبلًا."
    ],
    "category": "planned",
    "weekly": false,
    "group": [
      "planned"
    ],
    "referencePage": "circus.html",
    "tasks": []
  }
];
// Verified direct local references; mapped:false means unaudited resolution.
const dependencyDefinitions = [
  {
    "page": "about.html",
    "mapped": true,
    "css": [
      "styles/about.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "images/001.jpg"
    ]
  },
  {
    "page": "arcade.html",
    "mapped": true,
    "css": [
      "styles/arcade.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "flip.html",
      "index.html",
      "legal.html",
      "mpga.html",
      "rocks.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/flip.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/rock.jpg"
    ]
  },
  {
    "page": "archive.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archive.html",
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/friday-prayers/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/friday-prayers/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "archives/friday-prayers/index.html",
      "archives/love-letters-palestine/index.html",
      "archives/ok-series/index.html",
      "archives/other-communications/index.html",
      "archives/world-leaders/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/love-letters-palestine/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/love-letters-palestine/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/ok-america/2026-10.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive-compat.js"
    ],
    "links": [
      "archives/ok-series/index.html"
    ],
    "assets": []
  },
  {
    "page": "archives/ok-humanity/2026-10.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive-compat.js"
    ],
    "links": [
      "archives/ok-series/index.html"
    ],
    "assets": []
  },
  {
    "page": "archives/ok-israelis/2026-10.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive-compat.js"
    ],
    "links": [
      "archives/ok-series/index.html"
    ],
    "assets": []
  },
  {
    "page": "archives/ok-palestine/2026-10.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive-compat.js"
    ],
    "links": [
      "archives/ok-series/index.html"
    ],
    "assets": []
  },
  {
    "page": "archives/ok-series/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/ok-series/ok-america/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/ok-series/ok-humanity/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/ok-series/ok-israelis/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/ok-series/ok-palestine/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/other-communications/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/world-leaders/index.html",
    "mapped": true,
    "css": [
      "styles/archive.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/archive.js",
      "js/main.js"
    ],
    "links": [
      "archives/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "archives/world-leaders/iran/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/world-leaders/pope-leo/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "archives/world-leaders/trump/2026-10.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "art.html",
    "mapped": true,
    "css": [
      "styles/art.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0001.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/900.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/901.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/902.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/903.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/904.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/905.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/906.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/907.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/908.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/909.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/910.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/911.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/915.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/916.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/917.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/919.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/920.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/921.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/922.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/923.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/924.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/925.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/926.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/927.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/928.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/929.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/930.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/931.jpg",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272026_25.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_49.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02062026_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_10.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_12.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_22.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_50.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_52.mp4"
    ]
  },
  {
    "page": "biosite/about.html",
    "mapped": true,
    "css": [
      "styles/biosite.css"
    ],
    "scripts": [
      "js/biosite.js"
    ],
    "links": [
      "biosite/about.html",
      "biosite/hobby.html",
      "biosite/index.html",
      "index.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Merriweather:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/22.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/24.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/25.jpg"
    ]
  },
  {
    "page": "biosite/hobby.html",
    "mapped": true,
    "css": [
      "styles/biosite.css"
    ],
    "scripts": [
      "js/biosite.js"
    ],
    "links": [
      "biosite/about.html",
      "biosite/hobby.html",
      "biosite/index.html",
      "index.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Merriweather:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/14.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/15.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/16.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/17.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/18.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/19.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/20.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/21.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/24.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/25.jpg"
    ]
  },
  {
    "page": "biosite/index.html",
    "mapped": true,
    "css": [
      "styles/biosite.css"
    ],
    "scripts": [
      "js/biosite.js"
    ],
    "links": [
      "biosite/about.html",
      "biosite/hobby.html",
      "biosite/index.html",
      "index.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Merriweather:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/01.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/02.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/03.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/04.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/05.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/06.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/07.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/08.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/09.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/11.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/13.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/24.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/25.jpg"
    ]
  },
  {
    "page": "bopcrap.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": [
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0023.jpg"
    ]
  },
  {
    "page": "boptest.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [
      "Leslie.html",
      "index.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/000.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0006.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0007.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/001.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/002.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/003.webp",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/004.avif",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/004.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/005.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/006.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/007.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/008.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/010.avif",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/01011.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/023.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/024.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/025.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/026.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/027.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/028.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/029.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/030.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/031.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/032.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/033.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/034.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/035.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/036.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/037.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/038.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/039.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/040.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/041.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/042.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/043.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/044.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/045.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/046.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/047.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/050.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/052.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/052.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/053.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/054.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/055.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/056.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/057.jpg",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_28.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_29.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_30.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_32.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_51.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_41.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_7.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_26.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_29.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_34.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_51.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_56.mp4",
      "https://www.youtube-nocookie.com/embed/5A4xBp2rizQ?si=YUmljbg2wEQ41jcYrel=0&modestbranding=1&enablejsapi=1",
      "images/40.jpg"
    ]
  },
  {
    "page": "circus.html",
    "mapped": true,
    "css": [
      "styles/circus.css",
      "styles/styles2.css",
      "styles/virus.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "education/recess.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/Abood.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/gazacircus.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/tito.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/instagram.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/paypal.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/tiktok.png"
    ]
  },
  {
    "page": "contact.html",
    "mapped": true,
    "css": [
      "styles/contact.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "creators.html",
    "mapped": true,
    "css": [
      "styles/creators.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/creators.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link11.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link13.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link14.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link15.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link16.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link17.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link9.jpg"
    ]
  },
  {
    "page": "crimes.html",
    "mapped": true,
    "css": [
      "styles/styles.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "leslie.html",
      "mpga.html",
      "united.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_28.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_29.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_30.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_32.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_51.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_41.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_7.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_26.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_29.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_34.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_51.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_56.mp4",
      "images/001.jpg",
      "images/40.jpg"
    ]
  },
  {
    "page": "docs.html",
    "mapped": true,
    "css": [
      "styles/docs.css",
      "styles/featured.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/docs.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "biosite/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1408.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1800.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1801.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1802.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1803.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1804.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/01.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/doc3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/doc2.jpg"
    ]
  },
  {
    "page": "drinking-games.html",
    "mapped": true,
    "css": [
      "styles/drinking-games.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/drinking-games.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "hero.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Cormorant+Garamond:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/fy4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty78.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/yf1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/yf2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/yf3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/1030.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/1031.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/1032.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/291310.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/297920.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/30006.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/617.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A11.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A13.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A14.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A15.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A16.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A17.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A18.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A19.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A20.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A21.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A22.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A23.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A24.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A25.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A26.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A27.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A28.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A29.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A30.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A31.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A32.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A33.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A34.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A35.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A36.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A37.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A38.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A39.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A40.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A41.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A42.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A43.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A44.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A45.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A46.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A47.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A48.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A49.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A50.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A51.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A52.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A53.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A54.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A55.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A56.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A57.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A58.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A59.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A60.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A61.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A62.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/A9.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-5.jpg",
      "https://www.youtube-nocookie.com/embed/GhcyQ9fETuk",
      "https://www.youtube-nocookie.com/embed/fdrIMp5NKck",
      "https://www.youtube-nocookie.com/embed/uAvqJn1D1jM"
    ]
  },
  {
    "page": "edu.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "education/abc123.html",
      "education/history.html",
      "education/homework.html",
      "education/math.html",
      "education/recess.html",
      "education/science.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "education/abc123.html",
    "mapped": true,
    "css": [
      "styles/abc123.css",
      "styles/color-garden.css",
      "styles/edu.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/color-garden.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "edu.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "education/history.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/history.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "edu.html",
      "flip.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/flip.jpg"
    ]
  },
  {
    "page": "education/homework.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/homework.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "edu.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "education/math.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/math.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js",
      "js/math-addition.js",
      "js/math-division.js",
      "js/math-multiplication.js",
      "js/math-subtraction.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "edu.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "education/recess.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/recess.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "circus.html",
      "contact.html",
      "edu.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/Abood.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/gazacircus.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/circus/tito.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/edu1.png",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_1.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_35.mp4"
    ]
  },
  {
    "page": "education/science.html",
    "mapped": true,
    "css": [
      "styles/edu.css",
      "styles/science.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "edu.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "eighth-front.html",
    "mapped": true,
    "css": [
      "styles/eighth-front.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://cdn.simpleicons.org/tiktok",
      "https://cdn.simpleicons.org/youtube",
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen11.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen13.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen14.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/cen9.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/instagram.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/x.jpg"
    ]
  },
  {
    "page": "face.html",
    "mapped": true,
    "css": [
      "styles/face.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0010.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0011.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1000.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1001.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1002.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1003.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1004.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1005.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1006.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1007.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1008.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1010.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1011.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1012.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1013.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1014.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1015.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1017.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1200.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1201.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1202.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1203.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1204.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1205.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1206.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1207.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1208.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1209.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1210.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1211.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1212.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1213.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1214.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1215.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1216.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1217.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1218.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1220.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1221.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1222.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1223.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1224.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1225.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1226.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1227.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1228.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1229.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1230.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1231.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1232.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1233.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1234.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1235.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1236.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1237.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1238.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1239.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1240.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1241.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1242.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1243.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1244.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/200.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/201.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/203.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/204.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/205.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/206.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/207.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/208.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/209.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/210.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/211.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/212.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/213.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/214.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/215.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/216.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/217.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/218.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/219.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/220.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/221.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/222.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/223.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/224.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/225.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/226.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/227.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/228.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/229.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/230.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/231.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/232.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/233.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/234.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/235.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/236.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/237.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/238.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/240.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/241.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/242.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/243.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/244.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/245.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/246.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/247.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/248.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/249.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/250.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/251.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/252.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/253.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/254.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/255.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/256.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/257.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/258.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/259.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/260.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/261.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/262.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/263.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/264.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/265.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/266.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/267.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/268.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/269.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/270.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/301.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/302.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/303.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/304.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/305.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/306.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/307.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/308.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/309.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/310.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/311.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/312.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/314.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/315.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/316.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/318.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/319.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/320.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/321.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/322.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/323.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/324.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/325.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/326.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/327.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/328.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/329.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/330.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/331.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/332.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/333.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/334.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/335.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/336.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/337.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/338.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/339.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/340.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/341.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/342.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/343.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/344.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/345.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/346.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/347.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/348.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/349.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/350.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/351.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/352.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/353.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/354.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/355.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/356.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/357.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/358.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/359.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/360.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/361.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/400.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/401.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/402.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/403.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/404.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/405.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/407.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/409.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/410.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/411.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/412.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/413.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/414.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/415.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/416.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/418.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/419.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/420.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/421.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/422.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/423.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/424.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/425.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/426.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/427.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/428.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/429.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/430.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/431.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/432.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/433.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/434.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/435.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/436.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/437.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/438.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/439.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/440.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/441.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/442.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/443.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/444.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/445.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/446.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/447.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/448.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/449.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/450.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/451.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/452.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/453.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/454.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/455.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/456.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/457.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/458.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/459.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/460.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/461.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/462.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/463.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/464.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/500.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/501.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/502.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/504.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/505.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/506.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/507.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/508.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/509.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/510.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/511.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/512.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/513.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/514.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/515.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/516.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/517.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/518.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/519.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/520.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/521.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/522.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/523.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/524.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/525.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/526.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/527.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/528.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/529.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/530.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/531.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/532.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/533.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/534.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/535.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/536.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/537.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/538.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/539.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/540.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/541.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/542.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/543.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/544.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/545.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/546.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/547.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/548.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/549.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/550.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/551.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/552.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/553.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/554.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/555.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/556.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/557.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/558.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/559.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/560.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/561.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/600.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/601.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/603.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/604.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/605.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/606.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/607.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/608.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/609.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/610.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/611.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/613.webp",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/614.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/615.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/616.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/617.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/618.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/619.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/620.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/621.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/622.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/623.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/624.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/625.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/626.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/627.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/628.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/629.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/630.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/face/day8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2118.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2119.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2120.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2121.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2122.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2123.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2124.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2125.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2126.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2127.jpg",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_1.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_4.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_5.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01132025_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_1.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_10.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_11.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_12.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_13.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_14.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_16.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_19.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_20.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_21.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_22.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_23.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_24.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_25.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_26.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_28.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_4.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_5.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_7.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_8.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/0118_9.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_1.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_10.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_11.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_12.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_13.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_14.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_16.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_20.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_28.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_31.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_32.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_4.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_8.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/01272025_9.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_09.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_1.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_10.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_11.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_13.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_14.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_16.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_17.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_19.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_22.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_23.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_24.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_3.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_34.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_36.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_37.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_38.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_39.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_4.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_40.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_44.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_45.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_5.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video/02012026_8.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02012026_20.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_14.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_15.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_16.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_18.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_19.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_2.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_21.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_23.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_25.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_27.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_32.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_34.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_35.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_37.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_38.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_39.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_40.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_42.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/02062026_9.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_11.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_14.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_20.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_22.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_23.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_24.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_25.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_28.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_32.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_33.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_37.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_39.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_4.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_40.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_41.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_42.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_43.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_44.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_45.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_46.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_47.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_5.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_53.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_54.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_6.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_7.mp4",
      "https://raw.githubusercontent.com/american-nobody999/two-match-video/main/video2/20260216_8.mp4"
    ]
  },
  {
    "page": "faith.html",
    "mapped": true,
    "css": [
      "styles/faith.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "faithc.html",
      "faithi.html",
      "faithj.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0027.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0028.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0029.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/718.jpg"
    ]
  },
  {
    "page": "faithc.html",
    "mapped": true,
    "css": [
      "styles/faithc.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/715.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/716.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/717.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/729.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/753.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/785.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/787.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/791.jpg"
    ]
  },
  {
    "page": "faithi.html",
    "mapped": true,
    "css": [
      "styles/faithi.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/700.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/701.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/702.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/704.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/705.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/706.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/707.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/708.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/709.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/710.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/711.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/712.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/713.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/714.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/719.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/720.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/722.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/723.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/724.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/725.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/726.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/727.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/728.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/730.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/731.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/733.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/734.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/736.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/737.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/738.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/739.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/740.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/741.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/742.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/743.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/744.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/745.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/746.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/747.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/748.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/749.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/750.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/751.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/752.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/754.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/755.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/756.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/757.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/758.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/759.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/760.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/761.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/762.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/764.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/765.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/766.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/767.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/768.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/769.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/770.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/771.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/772.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/773.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/774.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/775.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/776.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/777.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/778.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/779.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/780.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/781.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/782.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/783.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/788.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/790.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/792.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/faithi/tribute.jpg"
    ]
  },
  {
    "page": "faithj.html",
    "mapped": true,
    "css": [
      "styles/faithj.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "leslie.html",
      "mpga.html",
      "united.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0001.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/721.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/729.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/738.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/784.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/786.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/789.jpg",
      "images/001.jpg",
      "images/40.jpg"
    ]
  },
  {
    "page": "featured-hero.html",
    "mapped": true,
    "css": [
      "styles/feature-hero.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/featured/m-a.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg"
    ]
  },
  {
    "page": "featured.html",
    "mapped": true,
    "css": [
      "styles/featured.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/featured.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/Aboys.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/featured/hussem.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/x.jpg",
      "https://www.youtube-nocookie.com/embed/LoQHL09L724"
    ]
  },
  {
    "page": "flip.html",
    "mapped": true,
    "css": [
      "styles/flag-game.css",
      "styles/styles.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/flag-game.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/Moscow.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/Turkish_flag.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/al_jassasiya.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/al_naslaa.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/cedar.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/china_flag.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/gobekli_tepe.avif",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/iran_flag.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/lebanon.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/myuz.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/pakistan.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/pakistan_flag.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/persepolis.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/qatar_flag.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/russia_flag.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/saudi_arabia.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/spain_aos.avif",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/spain_flag.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/edu/flip/wall_china.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/tiktok.png"
    ]
  },
  {
    "page": "hero.html",
    "mapped": true,
    "css": [
      "styles/hero.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/hero.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/821.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/831.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/832.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/617.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/Mohammed_Abo_Soltan.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/aboud_battah.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/adele.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/ali.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/am.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/amer_sultan.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/anas_saleh.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/asad_alsharq.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/bisan.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/gaza.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/jaz.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/marwa_hashem.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/mohammed_asad.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/motasem_a_dalloul.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/musab_alsharif.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/nahed_hajjaj.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/new1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/saleh.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/sam.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/top.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/hero/yusif_faris.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/facebook.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/instagram.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/linkedin.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/telegram.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/tiktok.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/upscrolled.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/x.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/x.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/youtube.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/AJplus.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/alj.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/andoula.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/bbc.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/guardian.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/kuwait.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/mee.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/mem.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/pal_live.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/pib.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/roya.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/ruiters.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/sahat.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/tmj.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/yeni.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/sources/young_turks.jpg"
    ]
  },
  {
    "page": "index.html",
    "mapped": true,
    "css": [
      "styles/index.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "arcade.html",
      "art.html",
      "contact.html",
      "docs.html",
      "drinking-games.html",
      "edu.html",
      "face.html",
      "faith.html",
      "featured-hero.html",
      "hero.html",
      "index.html",
      "legal.html",
      "leslie-updates.html",
      "leslie.html",
      "letter.html",
      "link.html",
      "mpga.html",
      "ok-america.html",
      "ok-humanity.html",
      "ok-israelis.html",
      "ok-palestine.html",
      "quests.html",
      "reddoor.html",
      "rose.html",
      "ticket.html",
      "united.html",
      "world_leader.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/One-match/main/images/rose3.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/I001.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/fhero.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/humanity.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/mindyourown.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/okp.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/quest.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/united.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1019/leslie.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/14.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/5647.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/aracade.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/mission.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/shots.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/thisway.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2128.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10003.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10004.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10005.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10006.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10008.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10009.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/maint/10010.jpg",
      "images/001.jpg"
    ]
  },
  {
    "page": "legal.html",
    "mapped": true,
    "css": [
      "styles/legal.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html",
      "reddoor.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2128.jpg"
    ]
  },
  {
    "page": "leslie-updates.html",
    "mapped": true,
    "css": [
      "styles/leslie-updates.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/leslie-updates.js",
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "leslie.html",
    "mapped": true,
    "css": [
      "styles/leslie.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/2312.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/3674.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/5467.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/7389.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/aj7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/eagleagents.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty234.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty32.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty45.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty67.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty673.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty78.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf16.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf17.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf18.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf43.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf45.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1400.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1401.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1402.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1403.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1404.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1405.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1406.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1407.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1408.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1409.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1410.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1500.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1501.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1502.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1503.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1504.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1505.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1506.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1507.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1508.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1509.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1510.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1511.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1512.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1513.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1514.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1702.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1703.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1704.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1708.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1800.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1801.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1802.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1803.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1804.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0-1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0-2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0925_1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0925_2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/1375.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/291230.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/29475.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/29588.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/3262.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/4252.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/flamingo.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/kite.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/leslie1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/logo2.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/not.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/pending.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/sanctions.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/soft_eagle.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/inex-1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/ticket-1.jpg",
      "https://www.youtube-nocookie.com/embed/2_YbS5pMzSg",
      "https://www.youtube-nocookie.com/embed/ClUtHRfeq4M",
      "https://www.youtube-nocookie.com/embed/DaaS6625NYo",
      "https://www.youtube-nocookie.com/embed/EdFlJFXPNZU",
      "https://www.youtube-nocookie.com/embed/FGB_c5SY_OE",
      "https://www.youtube-nocookie.com/embed/coJwCyToOCw",
      "https://www.youtube-nocookie.com/embed/sFyWrOY2uD0",
      "https://www.youtube.com/embed/11dGxhtK-pA",
      "https://www.youtube.com/embed/2zNSgSzhBfM",
      "https://www.youtube.com/embed/5VCeepBWs2A",
      "https://www.youtube.com/embed/IgJl0QriSqc",
      "https://www.youtube.com/embed/OQhbt2c8JqU",
      "https://www.youtube.com/embed/Pcm2yDp8XxI",
      "https://www.youtube.com/embed/SNWb-imHIZw",
      "https://www.youtube.com/embed/VJKHlkKrsSY",
      "https://www.youtube.com/embed/Z38oFa6BPh4",
      "https://www.youtube.com/embed/Zcps2fJKuAI",
      "https://www.youtube.com/embed/adjBTKTwctQ",
      "https://www.youtube.com/embed/bRVOl8NcFfs",
      "https://www.youtube.com/embed/dan6yIJX7JY",
      "https://www.youtube.com/embed/eRI7UyyVaR4",
      "https://www.youtube.com/embed/gYR0xP1j4PY",
      "https://www.youtube.com/embed/lHytjEj7B9g",
      "https://www.youtube.com/embed/rU7aVhTQ6BQ",
      "https://www.youtube.com/embed/sENM2wA_FTg",
      "https://www.youtube.com/embed/tSQ6CyyPatM",
      "https://www.youtube.com/embed/wSEsMpMxkg4"
    ]
  },
  {
    "page": "letter.html",
    "mapped": true,
    "css": [
      "styles/letter.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "link.html",
    "mapped": true,
    "css": [
      "styles/link.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "creators.html",
      "featured.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "mpga.html",
    "mapped": true,
    "css": [
      "styles/mpga.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "leslie.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/054.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/055.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/056.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/057.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/MPGA/con.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/MPGA/con.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/MPGA/dec.jpeg",
      "https://www.youtube.com/embed/joJ3qqpX2AI"
    ]
  },
  {
    "page": "ok-america.html",
    "mapped": true,
    "css": [
      "styles/ok-america.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "archives/ok-series/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Lora:wght@400;700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf19.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf20.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf21.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf22.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf23.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf24.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf25.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/wtf26.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wtf9.jpg",
      "https://www.youtube-nocookie.com/embed/Z5ogiTHOx5E"
    ]
  },
  {
    "page": "ok-humanity.html",
    "mapped": true,
    "css": [
      "styles/ok-humanity.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "archives/ok-series/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Lora:wght@400;700&display=swap",
      "https://www.youtube-nocookie.com/embed/g2ieSf8fEVw"
    ]
  },
  {
    "page": "ok-israelis.html",
    "mapped": true,
    "css": [
      "styles/ok-israelis.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "archives/ok-series/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Lora:wght@400;700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/3237.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/4357.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/54322.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/6542.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/6543.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/7659.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/8756.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/8790.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/9086.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/ty789.jpg",
      "https://www.youtube-nocookie.com/embed/sFyWrOY2uD0"
    ]
  },
  {
    "page": "ok-palestine.html",
    "mapped": true,
    "css": [
      "styles/ok-palestine.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "archives/ok-series/index.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cormorant+Garamond:wght@400;600;700&family=Lora:wght@400;700&display=swap",
      "https://www.youtube-nocookie.com/embed/Elj6ZTEtko4"
    ]
  },
  {
    "page": "progress.html",
    "mapped": true,
    "css": [
      "styles/styles.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "index.html",
      "leslie.html",
      "mpga.html",
      "progress.html",
      "united.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "images/001.jpg",
      "images/40.jpg"
    ]
  },
  {
    "page": "quests.html",
    "mapped": true,
    "css": [
      "styles/quests.css",
      "styles/styles.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js",
      "js/quests.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "eighth-front.html",
      "index.html",
      "legal.html",
      "mpga.html",
      "ticket.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/leslie1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/bop.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/mb.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/palestine.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/red-ribbon.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/waterislife.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/0021.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/ele1.jpg"
    ]
  },
  {
    "page": "reddoor.html",
    "mapped": true,
    "css": [
      "styles/reddoor.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/2128.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/all_aboard.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/flag.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/loui.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/mpga2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/pop1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r10.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r11.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r12.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r13.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r14.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r15.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/r16.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd0.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/rd9.jpg",
      "https://www.youtube-nocookie.com/embed/FqSWu4kGaxw"
    ]
  },
  {
    "page": "rocks.html",
    "mapped": true,
    "css": [
      "styles/rocks.css",
      "styles/styles2.css"
    ],
    "scripts": [
      "js/main.js",
      "js/rocks.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap"
    ]
  },
  {
    "page": "rose.html",
    "mapped": true,
    "css": [
      "styles/rose.css"
    ],
    "scripts": [
      "js/rose.js"
    ],
    "links": [],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/letter.jpeg"
    ]
  },
  {
    "page": "template.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "test-quests.html",
    "mapped": true,
    "css": [
      "styles/quests.css",
      "styles/styles.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "eighth-front.html",
      "index.html",
      "legal.html",
      "leslie.html",
      "mpga.html",
      "ticket.html",
      "united.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/leslie1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/bop.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/mb.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/palestine.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/red-ribbon.jpeg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/waterislife.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/legal/0021.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/ele1.jpg",
      "images/001.jpg"
    ]
  },
  {
    "page": "test.html",
    "mapped": true,
    "css": [],
    "scripts": [],
    "links": [],
    "assets": []
  },
  {
    "page": "ticket.html",
    "mapped": true,
    "css": [
      "styles/styles2.css",
      "styles/ticket.css"
    ],
    "scripts": [
      "js/main.js",
      "js/ticket-missions.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/0-1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Leslie/driving.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/1000.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/30-1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/30-2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/30-3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/30-4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/ffc2.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gfs-logo.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf4.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf5.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf6.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf7.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf8.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/gsf9.jpg",
      "https://www.youtube-nocookie.com/embed/A4hF5rA-v-Q",
      "https://www.youtube-nocookie.com/embed/g3kzEqI2kDQ",
      "https://www.youtube-nocookie.com/embed/rQHhNs8UqzM",
      "https://www.youtube.com/embed/mSI-5ocLb9I",
      "https://www.youtube.com/embed/x4mRkm8wnEI",
      "images/001.jpg"
    ]
  },
  {
    "page": "ticket3.html",
    "mapped": true,
    "css": [
      "styles/styles.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "index.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/0020.jpg",
      "https://www.youtube-nocookie.com/embed/FIImHq2VoA4&t=5256s?rel=0&modestbranding=1&enablejsapi=1",
      "https://www.youtube-nocookie.com/embed/UKQem63IS6w?rel=0&modestbranding=1&enablejsapi=1",
      "https://www.youtube-nocookie.com/embed/mDhOVSMUDaE?rel=0&modestbranding=1&enablejsapi=1",
      "images/40.jpg"
    ]
  },
  {
    "page": "united.html",
    "mapped": true,
    "css": [
      "styles/styles2.css",
      "styles/united.css"
    ],
    "scripts": [
      "js/main.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/upscrolled.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/bilal.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/ele1.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/gar.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/gct.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/gfk.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/hdf.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/oliveyou.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/toni.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/umma.jpg"
    ]
  },
  {
    "page": "world_leader.html",
    "mapped": true,
    "css": [
      "styles/styles2.css",
      "styles/world-leaders.css"
    ],
    "scripts": [
      "js/main.js",
      "js/world-leaders.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "mpga.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Cormorant+Garamond:wght@600&display=swap",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/popeleo.png",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/2387.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/tpop.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/tpop2.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/tpop3.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/redoor/flag.jpg",
      "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/ticket/oneyear.jpg"
    ]
  },
  {
    "page": "worldleader.html",
    "mapped": true,
    "css": [
      "styles/styles.css"
    ],
    "scripts": [
      "js/main.js",
      "js/world-leaders.js"
    ],
    "links": [
      "about.html",
      "contact.html",
      "index.html",
      "legal.html",
      "leslie.html",
      "mpga.html",
      "united.html"
    ],
    "assets": [
      "https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap",
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap",
      "images/001.jpg",
      "images/40.jpg",
      "images/world-leader-placeholder.svg"
    ]
  }
];

(() => {
    const key = 'american-nobody:leslie-missions:v1';
    const board = document.getElementById('mission-board');
    const status = document.getElementById('storage-status');
    const restart = document.getElementById('restart-mission');
    const selector = document.getElementById('dependency-page');
    const map = document.getElementById('dependency-map');
    const details = document.getElementById('dependency-details');
    const isArabic = () => document.documentElement.lang === 'ar';
    let completed = {};
    let storageFailed = false;
    try {
        const saved = JSON.parse(localStorage.getItem(key) || '{}');
        if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
            completed = Object.fromEntries(Object.entries(saved).filter(([, value]) => value === true));
        }
    } catch (_) { storageFailed = true; }

    function bilingual(parent, tag, labels) {
        const el = document.createElement(tag);
        labels.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = index ? 'lang-ar' : 'lang-en';
            span.lang = index ? 'ar' : 'en';
            span.dir = index ? 'rtl' : 'ltr';
            span.classList.toggle('hidden', index ? !isArabic() : isArabic());
            span.textContent = text;
            el.append(span);
        });
        parent.append(el);
        return el;
    }
    function save() {
        try { localStorage.setItem(key, JSON.stringify(completed)); storageFailed = false; }
        catch (_) { storageFailed = true; }
        updateStatus();
    }
    function updateStatus() {
        status.replaceChildren();
        bilingual(status, 'span', storageFailed
            ? ['Browser storage is unavailable or unreadable. Changes may last only for this visit.', 'تخزين المتصفح غير متاح أو غير قابل للقراءة. قد تستمر التغييرات خلال هذه الزيارة فقط.']
            : ['Progress is saved in this browser only.', 'يُحفظ التقدم في هذا المتصفح فقط.']);
    }
    const counters = [];
    const renderedCards = [];
    const inventoryGroups = [];
    const groupByPath = new Map();
    const groupedBoard = document.createElement('div');
    const weeklyGrid = document.createElement('div');
    weeklyGrid.className = 'mission-grid';
    weeklyGrid.hidden = true;
    board.append(groupedBoard, weeklyGrid);
    let currentView = 'all';
    const allButton = document.getElementById('view-all');
    const weeklyButton = document.getElementById('view-weekly');
    const groupTitles = {
        main: ['Main Website', 'الموقع الرئيسي'],
        archives: ['Archives', 'الأرشيف'],
        education: ['Education', 'التعليم'],
        biosite: ['bioSite', 'الموقع الشخصي'],
        planned: ['Planned Pages', 'صفحات مخططة']
    };
    function getGroup(path) {
        let parent = groupedBoard;
        path.forEach((part, index) => {
            const key = path.slice(0, index + 1).join('/');
            if (!groupByPath.has(key)) {
                const disclosure = document.createElement('details');
                disclosure.className = 'inventory-group';
                disclosure.open = index === 0;
                bilingual(disclosure, 'summary', groupTitles[part] || [part, part]);
                const content = document.createElement('div');
                content.className = 'mission-grid';
                disclosure.append(content);
                parent.append(disclosure);
                const group = {key, disclosure, content};
                groupByPath.set(key, group);
                inventoryGroups.push(group);
            }
            parent = groupByPath.get(key).content;
        });
        return parent;
    }
    function applyView() {
        const weekly = currentView === 'weekly';
        groupedBoard.hidden = weekly;
        weeklyGrid.hidden = !weekly;
        renderedCards.forEach(({mission, card, container}) => {
            // Move the same nodes: checkmarks, listeners, and open disclosures survive.
            const activeWeekly = Boolean(mission.page && mission.weekly);
            (weekly && activeWeekly ? weeklyGrid : container).append(card);
            card.hidden = weekly && !activeWeekly;
        });
        allButton.setAttribute('aria-pressed', String(currentView === 'all'));
        weeklyButton.setAttribute('aria-pressed', String(currentView === 'weekly'));
        updateSummary();
    }
    allButton.addEventListener('click', () => { currentView = 'all'; applyView(); });
    weeklyButton.addEventListener('click', () => { currentView = 'weekly'; applyView(); });
    let missionInitialized = false;
    const summary = document.getElementById('mission-summary');
    const message = document.getElementById('mission-message');
    const categories = {
        weekly: ['Weekly recurring', 'مهام أسبوعية'],
        periodic: ['Periodically maintained', 'صيانة دورية'],
        planned: ['Planned / under development', 'مخطط / قيد التطوير']
    };
    function updateSummary() {
        const active = missionDefinitions.filter(m => m.page && (currentView === 'all' || m.weekly));
        const tasks = active.flatMap(m => m.tasks);
        const count = tasks.filter(t => completed[t.id] === true).length;
        const percent = tasks.length ? Math.round(count / tasks.length * 100) : 0;
        summary.replaceChildren();
        bilingual(summary, 'p', [
            `${currentView === 'all' ? 'All Pages' : 'Weekly Updates'}: ${active.length} pages · ${tasks.length} tasks · ${count} completed · ${percent}% complete`,
            `${currentView === 'all' ? 'جميع الصفحات' : 'التحديثات الأسبوعية'}: ${active.length} صفحة · ${tasks.length} مهمة · ${count} مكتملة · ${percent}% إنجاز`
        ]);
        const label = bilingual(summary, 'label', ['Overall completion', 'الإنجاز العام']);
        label.htmlFor = 'overall-progress';
        const progress = document.createElement('progress');
        progress.id = 'overall-progress';
        progress.max = tasks.length || 1;
        progress.value = count;
        summary.append(progress);
        message.replaceChildren();
        if (tasks.length && count === tasks.length) {
            bilingual(message, 'p', ['MISSION COMPLETE — All systems green. See you next mission! ✌️', 'اكتملت المهمة — جميع الأنظمة جاهزة. نراكم في المهمة القادمة! ✌️']);
        } else if (missionInitialized) {
            bilingual(message, 'p', ["New mission initialized. Let’s get to work!", 'بدأت مهمة جديدة. لنبدأ العمل!']);
        }
    }
    function updateCounters() {
        counters.forEach(({mission, output, progress}) => {
            const count = mission.tasks.filter(task => completed[task.id] === true).length;
            output.replaceChildren();
            bilingual(output, 'span', [`${count} / ${mission.tasks.length} complete`, `${count} / ${mission.tasks.length} مكتملة`]);
            progress.value = count;
        });
        updateSummary();
    }
    missionDefinitions.forEach(mission => {
        const card = document.createElement('article');
        card.className = 'mission-card';
        const container = getGroup(mission.group);
        renderedCards.push({mission, card, container});
        const missionId = mission.page || mission.id;
        card.id = `mission-${missionId.replace(/[^a-z0-9-]/gi, '-')}`;
        bilingual(card, 'h3', mission.title);
        const badge = bilingual(card, 'p', categories[mission.category]);
        badge.className = 'mission-category';
        if (!mission.page) {
            bilingual(card, 'p', mission.description);
            if (mission.referencePage) {
                const reference = document.createElement('a');
                reference.href = mission.referencePage;
                reference.textContent = mission.referencePage;
                reference.dir = 'ltr';
                const actions = document.createElement('div');
                actions.className = 'planned-reference-actions';
                actions.append(reference);
                card.append(actions);
                const inspect = bilingual(actions, 'button', ['View Dependencies', 'عرض الاعتماديات']);
                inspect.type = 'button';
                inspect.addEventListener('click', () => {
                    selector.value = mission.referencePage;
                    showDependencies();
                    selector.focus({preventScroll: true});
                    document.getElementById('dependencies-title').scrollIntoView({behavior: 'instant', block: 'start'});
                });
                const planning = document.createElement('details');
                planning.className = 'mission-checklist';
                bilingual(planning, 'summary', ['Future planning', 'التخطيط المستقبلي']);
                bilingual(planning, 'p', ['No planning tasks added yet.', 'لم تُضف مهام تخطيط بعد.']);
                card.append(planning);
            } else {
                bilingual(card, 'p', ['Awaiting a real page before tasks and dependencies are activated.', 'بانتظار صفحة فعلية لتفعيل المهام والاعتماديات.']);
            }
            const plannedList = document.createElement('ul');
            (mission.plannedTasks || []).forEach(labels => bilingual(plannedList, 'li', labels));
            card.append(plannedList);
            container.append(card);
            return;
        }
        const pageLink = document.createElement('a');
        pageLink.href = mission.page;
        pageLink.textContent = mission.page;
        pageLink.dir = 'ltr';
        card.append(pageLink);
        const purpose = bilingual(card, 'p', mission.description);
        const inspect = bilingual(card, 'button', ['View Dependencies', 'عرض الاعتماديات']);
        inspect.type = 'button';
        inspect.addEventListener('click', () => {
            selector.value = mission.page;
            showDependencies();
            selector.focus();
        });
        const taskDisclosure = document.createElement('details');
        taskDisclosure.className = 'mission-checklist';
        bilingual(taskDisclosure, 'summary', ['Expand / collapse tasks', 'توسيع / طي المهام']);
        const taskList = document.createElement('div');
        // Keep secondary card details and actions inside the existing disclosure.
        taskList.append(pageLink, purpose, inspect);
        taskDisclosure.append(taskList);
        card.append(taskDisclosure);
        mission.tasks.forEach(task => {
            const label = document.createElement('label');
            label.className = 'mission-task';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `task-${task.id}`;
            checkbox.checked = completed[task.id] === true;
            label.htmlFor = checkbox.id;
            label.append(checkbox);
            bilingual(label, 'span', task.label);
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) completed[task.id] = true;
                else delete completed[task.id];
                missionInitialized = false;
                save();
                updateCounters();
            });
            taskList.append(label);
        });
        const progress = document.createElement('progress');
        progress.max = mission.tasks.length;
        // Label remains bilingual without depending on a changing aria-label.
        const progressLabel = bilingual(card, 'label', ['Mission completion', 'إنجاز المهمة']);
        progress.id = `progress-${mission.page.replace('.html', '')}`;
        progressLabel.htmlFor = progress.id;
        card.append(progress);
        const output = document.createElement('p');
        output.setAttribute('role', 'status');
        card.append(output);
        counters.push({mission, output, progress});
        container.append(card);
    });
    applyView();
    restart.disabled = false;
    restart.addEventListener('click', () => {
        if (!window.confirm(isArabic() ? 'إعادة بدء المهمة الأسبوعية؟ ستُمسح علامات الإنجاز وتبقى بطاقات المهام وتعريفاتها.' : 'Restart the weekly mission? This will clear your checkmarks, but your mission cards and tasks will remain.')) return;
        completed = {};
        missionInitialized = true;
        save();
        board.querySelectorAll('input[type="checkbox"]').forEach(input => { input.checked = false; });
        updateCounters();
    });
    dependencyDefinitions.forEach(record => {
        const option = document.createElement('option');
        option.value = record.page;
        option.textContent = record.page;
        selector.append(option);
    });
    function showDependencies() {
        const record = dependencyDefinitions.find(item => item.page === selector.value);
        map.replaceChildren();
        details.replaceChildren();
        if (!record || record.mapped === false) {
            bilingual(details, 'p', ['Dependency information not yet mapped.', 'لم تُرسم معلومات الاعتماديات بعد.']);
            return;
        }
        const center = document.createElement('a');
        center.className = 'dependency-node dependency-root';
        center.href = record.page;
        center.textContent = record.page;
        center.dir = 'ltr';
        map.append(center);
        const branches = document.createElement('div');
        branches.className = 'dependency-branches';
        const groups = [
            ['css', ['CSS files', 'ملفات التنسيق']],
            ['scripts', ['JavaScript files', 'ملفات جافاسكريبت']],
            ['links', ['Direct page links', 'روابط الصفحات المباشرة']]
        ];
        groups.forEach(([field, title]) => {
            const branch = document.createElement('div');
            branch.className = 'dependency-branch';
            bilingual(branch, 'h3', title);
            const count = document.createElement('span');
            count.className = 'dependency-node';
            count.textContent = String(record[field].length);
            branch.append(count);
            branches.append(branch);
            bilingual(details, 'h3', title);
            const list = document.createElement('ul');
            record[field].forEach(file => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = file;
                link.textContent = file;
                link.dir = 'ltr';
                li.append(link);
                if (file === 'styles/styles2.css' || file === 'js/main.js') {
                    bilingual(li, 'span', [' — shared', ' — مشترك']);
                }
                list.append(li);
            });
            if (!record[field].length) bilingual(list, 'li', ['No direct local references found.', 'لم يُعثر على مراجع محلية مباشرة.']);
            details.append(list);
        });
        if (record.assets?.length) {
            bilingual(details, 'h3', ['Direct image, media and font references', 'مراجع الصور والوسائط والخطوط المباشرة']);
            const assets = document.createElement('ul');
            record.assets.forEach(file => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = file;
                link.textContent = file;
                link.dir = 'ltr';
                li.append(link);
                assets.append(li);
            });
            details.append(assets);
        }
        map.append(branches);
    }
    selector.addEventListener('change', showDependencies);
    function syncLanguage() {
        document.getElementById('command-center').querySelectorAll('.lang-en, .lang-ar').forEach(el => {
            el.classList.toggle('hidden', el.classList.contains('lang-ar') ? !isArabic() : isArabic());
        });
        updateCounters();
        updateStatus();
        showDependencies();
    }
    new MutationObserver(syncLanguage).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
    syncLanguage();
})();
