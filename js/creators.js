//Author:Leslie Brockman
//Date last modified: 2026-10-24
"use strict";

const creators = [
  {
    "id": "creator-1",
    "name": "Pending Doctor Kareem",
    "nameHTML": "\n        <span class=\"lang-en\">Pending Doctor Kareem</span>\n        <span class=\"lang-ar hidden arabic-text\">الدكتور كريم</span>\n      ",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/link18.jpg\" alt=\"Kareem Al-Khodary\" loading=\"lazy\">",
    "biographyHTML": "<p>\n        <span class=\"lang-en\">Kareem Al-Khodary is a young Palestinian digital creator who shares everyday life, personal experiences, and moments of hope with his online audience. His content gives viewers a personal window into life in Gaza while he works toward continuing his education and supporting his family.</span>\n        <span class=\"lang-ar hidden arabic-text\">كريم الخضري هو منشئ فلسطيني شاب في العالم الرقمي يشارك الحياة اليومية والتجارب الشخصية ولحظات الأمل مع جمهوره عبر الإنترنت. يمنح محتواه المشاهدين نافذة شخصية على الحياة في غزة بينما يعمل على مواصلة تعليمه ودعم أسرته.</span>\n      </p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://chuffed.org/project/help-kareem-in-gaza\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"PayPal / باي بال\" href=\"https://www.paypal.me/cbourgeois95\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61581233649121\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/kareem_vo_dr/\" class=\"social-link\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "featured",
    "sectionHTML": ""
  },
  {
    "id": "creator-2",
    "name": "Mera from Gaza",
    "nameHTML": "Mera from Gaza",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/mera.jpg\" alt=\"Mera from Gaza\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mera is a young Palestinian girl from Gaza whose family shares glimpses of her everyday life through cooking videos, school adventures, and precious family moments. With the help of her parents, she brings smiles, warmth, and a little childhood joy to people around the world, even amid the hardships of life in Gaza. Her family's page offers a personal glimpse into the resilience and humanity of Palestinian children.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ميرا طفلة فلسطينية صغيرة من غزة، تشارك عائلتها لمحات من حياتها اليومية من خلال مقاطع فيديو للطهي، ومغامراتها المدرسية، ولحظاتها العائلية الجميلة. وبمساعدة والديها، تنشر الابتسامات والدفء وشيئًا من بهجة الطفولة بين الناس حول العالم، رغم صعوبات الحياة في غزة. وتقدم صفحة عائلتها نافذة إنسانية على صمود الأطفال الفلسطينيين وإنسانيتهم.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://gogetfunding.com/donate-to-mira-daughter-of-gaza-and-her-family/\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a>\n          <a class=\"site-button\" href=\"https://ko-fi.com/mirafamily\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a>\n        </div>\n        <div class=\"social-links\"><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61580305417215\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-3",
    "name": "Mahmoud Abo Swilem",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Abo Swilem</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود أبو سويلم</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/801.jpg\" alt=\"Card 2\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Abo Swilem is a Palestinian digital creator from Gaza who uses social media to share his experiences and give people a personal connection to life in Palestine. Through his online presence, he highlights the challenges facing families in Gaza while reminding the world of the humanity behind the headlines.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود أبو سويلم صانع محتوى رقمي فلسطيني من غزة، يستخدم وسائل التواصل الاجتماعي لمشاركة تجاربه وإتاحة الفرصة للناس للتعرف عن قرب على الحياة في فلسطين. ومن خلال حضوره على الإنترنت، يسلط الضوء على التحديات التي تواجه العائلات في غزة، ويذكّر العالم بإنسانية الأشخاص الذين يقفون وراء العناوين الإخبارية.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://chuffed.org/project/157037-urgent-relief-for-bisho-sanad-and-tim\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n          <a class=\"site-button\" href=\"https://gofund.me/47d5d914\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n        </div>\n        <div class=\"social-links\"><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mooda199044\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a><a aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mahmoud_199044/\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-4",
    "name": "Inas Qaddih",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Inas Qaddih</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إيناس قديح</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/802.jpg\" alt=\"Card 3\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Inas Qaddih is a Palestinian mother and digital creator from Khan Yunis, Gaza, who shares her family's experiences and the challenges of raising five children amid difficult living conditions. Through her online presence, she gives the world a personal glimpse into her family's daily life, resilience, and determination to build a safer future for their children.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إيناس قديح أم فلسطينية وصانعة محتوى رقمي من خان يونس في غزة، تشارك تجارب عائلتها والتحديات التي تواجهها في تربية أطفالها الخمسة وسط ظروف معيشية صعبة. ومن خلال حضورها على وسائل التواصل الاجتماعي، تمنح العالم لمحة إنسانية عن الحياة اليومية لعائلتها وصمودها وإصرارها على بناء مستقبل أكثر أمانًا لأطفالها.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://www.freefunder.com/campaign/inas-family-gaza-survive\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ayanas.ana.2025\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-5",
    "name": "Save Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Save Gaza</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أنقذوا غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/803.jpg\" alt=\"Card 4\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Save Gaza is a Palestinian-focused photography page sharing images of people, families, and everyday life in Palestine. Through its visual storytelling, the page helps audiences connect with the human experiences behind the headlines and offers a Facebook subscription for visitors who wish to support its work.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">صفحة «أنقذوا غزة» هي صفحة تصوير فوتوغرافي تهتم بفلسطين، وتنشر صورًا للأشخاص والعائلات والحياة اليومية فيها. ومن خلال سرد القصص بالصور، تساعد الصفحة الجمهور على التواصل مع التجارب الإنسانية التي تقف وراء العناوين الإخبارية، وتتيح اشتراكًا عبر فيسبوك للراغبين في دعم عملها.</span></p>",
    "linksHTML": "<div class=\"save-gaza-subscription\">\n          <a class=\"site-button save-gaza-subscription-button\" href=\"https://www.facebook.com/Savegaza.07/subscribenow\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Subscribe on Facebook — $9.99/month</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">اشترك عبر فيسبوك — 9.99 دولار شهريًا</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/Savegaza.07/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-6",
    "name": "Yousef & Yazan from Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Yousef &amp; Yazan from Gaza</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يوسف ويزن من غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/yousef_Yazan.jpg\" alt=\"Yousef &amp; Yazan from Gaza\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Yousef and Yazan are two young Palestinian brothers from Gaza whose mother, Doaa, shares their family's experiences through social media. Through everyday moments and personal stories, their family offers a glimpse into the challenges of raising children in Gaza and their hopes for a safer, more stable future.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يوسف ويزن شقيقان فلسطينيان صغيران من غزة، تشارك والدتهما دعاء تجارب عائلتهما عبر وسائل التواصل الاجتماعي. ومن خلال اللحظات اليومية والقصص الشخصية، تقدم العائلة لمحة عن تحديات تربية الأطفال في غزة وآمالها في مستقبل أكثر أمانًا واستقرارًا.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://www.gofundme.com/f/help-a-family-to-celebrate-ramadan-and-plan-for-the-future\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/translation.skyline\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/kids.from.ga.za/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-7",
    "name": "Myuz Ahmed",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Myuz Ahmed</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ميوز أحمد</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/805.jpg\" alt=\"Card 6\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Myuz Ahmed is a Palestinian content creator from Gaza who uses his platform to bring smiles to children and share moments of joy amid difficult circumstances. Through his videos and community-focused content, he highlights the resilience, creativity, and humanity of Palestinian families.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ميوز أحمد صانع محتوى فلسطيني من غزة، يستخدم منصاته لرسم الابتسامة على وجوه الأطفال ومشاركة لحظات الفرح رغم الظروف الصعبة. ومن خلال مقاطع الفيديو والمحتوى الذي يقدمه للمجتمع، يسلط الضوء على صمود العائلات الفلسطينية وإبداعها وإنسانيتها.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://gofund.me/ba9b9245\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"PayPal / باي بال\" href=\"https://paypal.me/dalalchamma\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ahmed.myuz\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a><a aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/myuz_gaza/\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@myuz_gaza\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    "
  },
  {
    "id": "creator-8",
    "name": "Mohmmaud Mk",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohmmaud Mk</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود إم كيه</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/mk.jpg\" alt=\"Mohmmaud Mk\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohmmaud Mk is a Palestinian digital creator who uses his platform to raise awareness and express solidarity with Palestine. Through his online presence, he shares messages of resilience, hope, and support for the Palestinian people.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود إم كيه صانع محتوى رقمي فلسطيني يستخدم منصته لنشر الوعي والتعبير عن التضامن مع فلسطين. ومن خلال حضوره على الإنترنت، يشارك رسائل الصمود والأمل والدعم للشعب الفلسطيني.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://www.gofundme.com/f/hope-from-under-the-rubble\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mohmmaud.mk\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "محمود إم كيه"
  },
  {
    "id": "creator-9",
    "name": "A. S.",
    "nameHTML": "A. S.",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/807.jpg\" alt=\"Card 8\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Anas Shamlakh is a Palestinian content creator from Gaza who shares his experiences and raises awareness about the lives of Palestinian families. Through his platform, he brings attention to the challenges of displacement, survival, and rebuilding, while sharing messages of resilience and hope.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أنس شملخ صانع محتوى فلسطيني من غزة، يشارك تجاربه ويسلط الضوء على حياة العائلات الفلسطينية. ومن خلال منصته، يلفت الانتباه إلى تحديات النزوح والبقاء وإعادة بناء الحياة، وينشر رسائل الصمود والأمل.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://chuffed.org/project/147625-support-anas-and-his-family-rebuild-their-home-in-gaza\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n          <a class=\"site-button\" href=\"https://chuffed.org/project/195672-help-anas-and-his-family-in-gaza-stand-with-us-and-help-us-rebuild-our-lives\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a>\n        </div>\n        <div class=\"social-links\"><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100022487434446\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a><a aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/anas.sham0\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "frontNameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Anas Shamlakh</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أنس شملخ</span>"
  },
  {
    "id": "creator-10",
    "name": "Diva Girl",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Diva Girl</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ديفا غيرل</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/diva.jpg\" alt=\"Diva Girl\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Diva Girl is a Palestinian family account from Gaza, where the mother is a talented fashion designer. Through their platform, the family shares glimpses of everyday life, creativity, love, and resilience. Their story celebrates Palestinian family bonds, the beauty of creative expression, and the hope of raising children in peace, safety, and dignity.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ديفا غيرل حساب لعائلة فلسطينية من غزة، حيث تعمل الأم مصممة أزياء موهوبة. ومن خلال منصتهم، تشارك العائلة لمحات من حياتها اليومية وإبداعها وحبها وصمودها. وتحتفي قصتهم بالروابط العائلية الفلسطينية، وجمال التعبير الإبداعي، والأمل في تربية الأطفال بسلام وأمان وكرامة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\">\n          <a class=\"site-button\" href=\"https://www.gofundme.com/f/support-maysars-journey-towards-safety-and-stability\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a>\n        </div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/diva.girl.m/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/374664319601160\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Threads / ثريدز\" href=\"https://www.threads.net/@diva.girl.m\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:threads}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@myassar.habboush\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a><a class=\"social-link\" aria-label=\"PayPal / باي بال\" href=\"https://paypal.me/MyassarHaboush594\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "ديفا غيرل"
  },
  {
    "id": "creator-11",
    "name": "Abu Al-Ghalaba Al-Ghazawi",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Abu Al-Ghalaba Al-Ghazawi</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أبو الغلابة الغزاوي</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/abu.jpg\" alt=\"Abu Al-Ghalaba Al-Ghazawi\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Abu Al-Ghalaba Al-Ghazawi is a Palestinian community advocate from Gaza who uses his platform to highlight the needs of families facing hardship. His videos showcase community relief efforts and encourage people to support those in need through compassion, generosity, and solidarity.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أبو الغلابة الغزاوي ناشط مجتمعي فلسطيني من غزة، يستخدم منصته لتسليط الضوء على احتياجات العائلات التي تواجه ظروفاً صعبة. وتُظهر مقاطع الفيديو التي يشاركها جهود الإغاثة المجتمعية، وتشجع الناس على مساعدة المحتاجين بروح الرحمة والكرم والتضامن.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://alghlabagaza.com/\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/drug00972\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/abu_alghlaba/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "أبو الغلابة الغزاوي"
  },
  {
    "id": "creator-12",
    "name": "Ezz Nashwan",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ezz Nashwan</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عز نشوان</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/810.jpg\" alt=\"Card 11\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ezz Nashwan is a young Palestinian content creator from Gaza who shares glimpses of his life, family, and experiences through social media. Through his videos, he brings attention to the challenges facing Palestinian families while sharing his hopes for rebuilding, peace, and a better future.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عز نشوان صانع محتوى فلسطيني شاب من غزة، يشارك عبر وسائل التواصل الاجتماعي لمحات من حياته وعائلته وتجاربه. ومن خلال مقاطع الفيديو التي ينشرها، يسلط الضوء على التحديات التي تواجه العائلات الفلسطينية، ويشارك آماله في إعادة البناء والسلام ومستقبل أفضل.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/157510-bring-peace-to-the-nashwan-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ezz.nashwan\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/ezz__foreigner/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@EzzNashwan5\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "عز نشوان"
  },
  {
    "id": "creator-13",
    "name": "Ahmed Ibun Abaas",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Ibun Abaas</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد ابن عباس</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/811.jpg\" alt=\"Card 12\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Ibun Abaas is a Palestinian father of three from Gaza who shares his family's experiences and the challenges of daily life. Through his Facebook platform, he raises awareness about the struggles families face in finding food, clean water, and safe shelter, while expressing hope for a more secure future for his children.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد ابن عباس أب فلسطيني لثلاثة أطفال من غزة، يشارك تجارب عائلته والتحديات التي تواجههم في حياتهم اليومية. ومن خلال صفحته على فيسبوك، يسلط الضوء على الصعوبات التي تواجه العائلات في الحصول على الغذاء والمياه النظيفة والمأوى الآمن، معبّراً عن أمله في مستقبل أكثر أمناً لأطفاله.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.gofundme.com/f/donate-to-help-ahmed-and-fatuma-and-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ahmedibunabaas\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "أحمد ابن عباس"
  },
  {
    "id": "creator-14",
    "name": "Mahmoud Salma",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Salma</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود سلمى</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/football.jpg\" alt=\"Mahmoud Salma\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Salma is a Palestinian football player from Gaza who shares his passion for sports and his experiences through social media. Through his platform, he highlights the resilience of Palestinian athletes and the importance of family, community, and hope in the face of adversity.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود سلمى لاعب كرة قدم فلسطيني من غزة، يشارك شغفه بالرياضة وتجاربه عبر وسائل التواصل الاجتماعي. ومن خلال منصته، يسلط الضوء على صمود الرياضيين الفلسطينيين وأهمية العائلة والمجتمع والأمل في مواجهة التحديات.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button salma-support-button\" href=\"https://chuffed.org/project/the-salma-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span><small>Chuffed</small></a><a class=\"site-button salma-support-button\" href=\"https://www.gofundme.com/f/Sila-Celine\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span><small>GoFundMe</small></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100003075323245\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mahmoudselme/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "محمود سلمى"
  },
  {
    "id": "creator-15",
    "name": "YA Yaseen",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">YA Yaseen</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يا ياسين</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/814.jpg\" alt=\"Card 14\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">YA Yaseen is a Palestinian digital creator from Gaza who is working toward continuing his education and pursuing university opportunities. Through his online presence, he shares his story and his determination to build a future through learning, despite the challenges facing young Palestinians in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يا ياسين صانع محتوى رقمي فلسطيني من غزة، يسعى إلى مواصلة تعليمه والحصول على فرصة للدراسة الجامعية. ومن خلال حضوره على وسائل التواصل الاجتماعي، يشارك قصته وإصراره على بناء مستقبل من خلال العلم، رغم التحديات التي تواجه الشباب الفلسطيني في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/175809-help-yaseen-complete-his-studies-and-travel-for-university\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a></div>\n        \n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ya.yaseen.721920\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n      ",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "يا ياسين"
  },
  {
    "id": "creator-16",
    "name": "Leena Ahmad (Sandy)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Leena Ahmad (Sandy)</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">لينا أحمد (ساندي)</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/sandy.jpg\" alt=\"Leena Ahmad (Sandy)\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Leena Ahmad, also known as Sandy, is a Palestinian humanitarian worker and Project Coordinator for UMMA Foundation in Gaza. Through her work and social media presence, she highlights humanitarian relief efforts, supports communities facing difficult circumstances, and shares the resilience of Palestinian families. Her work reflects the importance of compassion, community, and helping people in need.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">لينا أحمد، المعروفة أيضاً باسم ساندي، عاملة في المجال الإنساني ومنسقة مشاريع لدى مؤسسة UMMA في غزة. ومن خلال عملها وحضورها على وسائل التواصل الاجتماعي، تسلط الضوء على جهود الإغاثة الإنسانية ودعم المجتمعات التي تواجه ظروفاً صعبة، وتنقل قصص صمود العائلات الفلسطينية. ويعكس عملها أهمية التعاطف والتكافل المجتمعي ومساعدة المحتاجين.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://ummafoundation.org/\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Visit UMMA Foundation</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">زيارة مؤسسة UMMA</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/leena.ahmad.793168\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Creators and Daily Voices",
    "sectionHTML": "\n      <span class=\"lang-en\">Creators and Daily Voices</span>\n      <span class=\"lang-ar\">صنّاع المحتوى وأصوات الحياة اليومية</span>\n    ",
    "nameAr": "لينا أحمد (ساندي)"
  },
  {
    "id": "creator-17",
    "name": "Mahmoud ArchGaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud ArchGaza</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود آرك غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/816.jpg\" alt=\"Card 1\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud ArchGaza is a Palestinian father living in Gaza City who shares his family's experiences and his determination to rebuild a home for his daughter. Through his social media presence, he documents his efforts to create a safer and more stable future for her while navigating the challenges of life in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود آرك غزة أب فلسطيني يعيش في مدينة غزة، يشارك تجارب عائلته وإصراره على إعادة بناء منزل لابنته. ومن خلال حضوره على وسائل التواصل الاجتماعي، يوثّق جهوده لتوفير مستقبل أكثر أماناً واستقراراً لها، رغم التحديات التي تواجه الحياة في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/187989-father-with-his-dauther-needs-help-in-gaza\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61583852189555\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "محمود آرك غزة"
  },
  {
    "id": "creator-18",
    "name": "Mohammed Al-Akkad",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Al-Akkad</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد العكاد</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/817.jpg\" alt=\"Card 2\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Al-Akkad is a Palestinian content creator living in Gaza who shares his daily experiences and his family's efforts to survive difficult conditions. Through his social media presence, he documents life in a tent and uses his platform to keep his family's story and the voices of people in Gaza visible.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد العكاد صانع محتوى فلسطيني يعيش في غزة، يشارك تفاصيل حياته اليومية وجهود عائلته للصمود في ظل الظروف الصعبة. ومن خلال حضوره على وسائل التواصل الاجتماعي، يوثّق الحياة داخل خيمة ويستخدم منصاته لإيصال قصة عائلته وأصوات الناس في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button salma-support-button\" href=\"https://www.gofundme.com/f/e0c4bfc79\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span><small>GoFundMe 1</small></a><a class=\"site-button salma-support-button\" href=\"https://www.gofundme.com/f/help-muhammad-alaqqad-and-his-family-survive-and-rebuild-th\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span><small>GoFundMe 2</small></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mohammed_alakkad1/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"Upscrolled / أبسكرولد\" href=\"https://upscrolled.com/@Mohammed_25\" target=\"_blank\" rel=\"noopener noreferrer\"><img class=\"creator-social-icon\" src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/social/upscrolled.png\" alt=\"\" loading=\"lazy\"></a><a class=\"social-link\" aria-label=\"Threads / ثريدز\" href=\"https://www.threads.com/@mohammed_alakkad1\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:threads}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@mohammed_alakkad25\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "محمد العكاد"
  },
  {
    "id": "creator-19",
    "name": "Nidaa Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Nidaa Gaza</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">نداء غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/nidaa.jpg\" alt=\"Nidaa Gaza\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Nidaa Gaza is a humanitarian initiative dedicated to supporting children in Gaza and helping families facing difficult circumstances. Through community outreach and relief efforts, the initiative seeks to ease hardship, provide assistance to those in need, and bring care and compassion to children and families.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">نداء غزة مبادرة إنسانية تهدف إلى دعم أطفال غزة ومساندة العائلات التي تواجه ظروفاً صعبة. ومن خلال العمل المجتمعي وجهود الإغاثة، تسعى المبادرة إلى تخفيف المعاناة وتقديم المساعدة للمحتاجين، ونشر روح الرحمة والتكافل بين الأطفال والعائلات.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61569448212028\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"PayPal payment / الدفع عبر باي بال\" href=\"https://www.paypal.com/ncp/payment/HPW7NZZ8QYUMU\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "نداء غزة"
  },
  {
    "id": "creator-20",
    "name": "Ahmed Ys (Al-Rock)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Ys (Al-Rock)</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد يس (الروك)</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/819.jpg\" alt=\"Card 4\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Ys, also known as Al-Rock, is a Palestinian filmmaker, content creator, and video editor from Gaza. Through photography, filmmaking, and digital storytelling, he shares his perspective on life in Palestine and documents the experiences of his community. His creative work uses visual media to tell stories and connect with audiences beyond Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد يس، المعروف باسم الروك، صانع أفلام ومحتوى ومونتير فيديو فلسطيني من غزة. من خلال التصوير وصناعة الأفلام والسرد الرقمي، يشارك رؤيته للحياة في فلسطين ويوثّق تجارب مجتمعه. ويستخدم أعماله الإبداعية والوسائط البصرية لرواية القصص والتواصل مع الجمهور خارج غزة.</span></p>",
    "linksHTML": "\n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ahmaeg.hoseen\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n         <div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/ahmed-ys3\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Creator</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صانع المحتوى</span></a></div>\n      ",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "أحمد يس (الروك)"
  },
  {
    "id": "creator-21",
    "name": "Jaber Thabet",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Jaber Thabet</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">جابر ثابت</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/820.jpg\" alt=\"Card 5\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Jaber Thabet is a Palestinian digital creator and freelance photographer from Gaza who uses photography, music, and storytelling to share his experiences and the life of his community. Through his creative work and social media presence, he highlights family, resilience, and the importance of preserving Palestinian stories while navigating the challenges of life in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">جابر ثابت صانع محتوى رقمي ومصور مستقل فلسطيني من غزة، يستخدم التصوير والموسيقى والسرد القصصي لمشاركة تجاربه وحياة مجتمعه. ومن خلال أعماله الإبداعية وحضوره على وسائل التواصل الاجتماعي، يسلط الضوء على العائلة والصمود وأهمية الحفاظ على القصص الفلسطينية في ظل تحديات الحياة في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/164629-thabet-family-in-gaza\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support the Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم العائلة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/abu.jooj.7\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/jaber.thabet/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@superhamod\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "جابر ثابت"
  },
  {
    "id": "creator-22",
    "name": "Khames Al-Arian Mahmoud",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Khames Al-Arian Mahmoud</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">خامس العريان محمود</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/ka.jpg\" alt=\"Khames Al-Arian Mahmoud\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Khames Al-Arian Mahmoud is a Palestinian from Beit Lahia in northern Gaza. He shares glimpses of his daily life and the challenges of caring for his family of five. Through his Facebook presence, he seeks to keep his family's experiences visible and asks for support as they work toward safety and stability.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">خامس العريان محمود فلسطيني من بيت لاهيا شمال قطاع غزة. يشارك جوانب من حياته اليومية والتحديات التي يواجهها في رعاية أسرته المكوّنة من خمسة أفراد. ومن خلال حسابه على فيسبوك، يسعى إلى إيصال قصة عائلته وطلب الدعم في سعيهم نحو الأمان والاستقرار.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100088974826860\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"PayPal campaign / حملة باي بال\" href=\"https://www.paypal.com/donate?campaign_id=FCW7JB47L9Y9E\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "خامس العريان محمود"
  },
  {
    "id": "creator-23",
    "name": "Renad Attallah",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Renad Attallah</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">رناد عطا الله</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/822.jpg\" alt=\"Card 7\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Renad Attallah is a young Palestinian content creator from Gaza who uses cooking to share Palestinian culture, traditions, and everyday life with the world. Through her videos, she combines food and storytelling to raise awareness about Palestine and amplify the voices of children in Gaza. She also advocates for children's education and shares her efforts to help build a school for orphans in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">رناد عطا الله صانعة محتوى فلسطينية شابة من غزة، تستخدم الطبخ للتعريف بالثقافة الفلسطينية وتقاليدها وحياة الناس اليومية. ومن خلال مقاطع الفيديو التي تنشرها، تجمع بين الطعام وسرد القصص لزيادة الوعي بفلسطين وإيصال أصوات الأطفال في غزة إلى العالم. كما تدافع عن حق الأطفال في التعليم وتشارك جهودها للمساعدة في بناء مدرسة للأيتام في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://wearthepeace.com/collections/renad-x-wtp\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Renad's Collection</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مجموعة رناد</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/renadfromgaza/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>\n        <div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.launchgood.com/v4/campaign/build_a_school_for_orphans_in_gaza__fulfill_your_qurbani_w_renad\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Renad's School</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم مدرسة رناد</span></a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "رناد عطا الله"
  },
  {
    "id": "creator-24",
    "name": "Youssef Al-Bahtini",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Youssef Al-Bahtini</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يوسف البهتيني</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/yousef.jpg\" alt=\"Youssef Al-Bahtini\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Youssef Al-Bahtini is a Palestinian content creator and performer from northern Gaza who uses his creativity, athletic abilities, and social media presence to bring joy to others. Known for his acrobatic performances and his efforts to make children smile, he shares moments of hope and resilience while documenting life in Gaza. Through his work, Youssef highlights the importance of childhood, community, and finding reasons to smile even during difficult times.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">يوسف البهتيني صانع محتوى ومؤدٍ فلسطيني من شمال قطاع غزة، يستخدم إبداعه ومهاراته الرياضية وحضوره على وسائل التواصل الاجتماعي لنشر الفرح بين الناس. يُعرف بعروضه البهلوانية وجهوده في رسم الابتسامة على وجوه الأطفال، ويشارك لحظات من الأمل والصمود أثناء توثيق الحياة في غزة. ومن خلال أعماله، يسلط يوسف الضوء على أهمية الطفولة والمجتمع وإيجاد أسباب للابتسام حتى في أصعب الظروف.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/201662-help-youssef-and-his-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Youssef's Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة يوسف</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/youssefalbhettiny\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/youssefalbahtini/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "يوسف البهتيني"
  },
  {
    "id": "creator-25",
    "name": "Mohammed Shamallakh",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Shamallakh</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد شملخ</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/ms.jpg\" alt=\"Mohammed Shamallakh\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Shamallakh is a Palestinian digital creator from Gaza who shares his daily experiences through videos, photography, and personal storytelling. His content offers a firsthand look at everyday life, family, and the challenges facing his community. Through his social media platforms, Mohammed works to keep Palestinian stories visible and connect audiences around the world with the realities of life in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد شملخ صانع محتوى رقمي فلسطيني من غزة، يشارك تجاربه اليومية من خلال مقاطع الفيديو والتصوير والسرد الشخصي. يقدم محتواه نظرة مباشرة على الحياة اليومية والعائلة والتحديات التي يواجهها مجتمعه. ومن خلال منصاته على وسائل التواصل الاجتماعي، يسعى محمد إلى إبقاء القصص الفلسطينية حاضرة والتواصل مع الجمهور حول العالم لنقل واقع الحياة في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.gofundme.com/f/help-mohammed-and-his-family-build-their-future\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mohammed's Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة محمد</span></a><a class=\"site-button\" href=\"https://gofund.me/3d4c50539\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Additional Family Fundraiser</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حملة إضافية لدعم العائلة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mohammed.Shamallakh09\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mohamed_free09/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@mohammedshamallakh\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@mohammed._03\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "محمد شملخ"
  },
  {
    "id": "creator-26",
    "name": "El-Hayek Mohammed",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">El-Hayek Mohammed</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد الحايك</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/ed.jpg\" alt=\"El-Hayek Mohammed\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">El-Hayek Mohammed is a Palestinian digital creator who shares his experiences and personal perspective through social media. His Facebook profile reflects his interest in creativity and pursuing his dreams. Through his online presence, he connects with others and shares his story.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد الحايك صانع محتوى رقمي فلسطيني يشارك تجاربه ووجهة نظره الشخصية عبر وسائل التواصل الاجتماعي. يعكس ملفه الشخصي على فيسبوك اهتمامه بالإبداع والسعي لتحقيق أحلامه. ومن خلال حضوره الرقمي، يتواصل مع الآخرين ويشارك قصته.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/189622-lets-mo-grow-on-this-war\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mohammed</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم محمد</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/elhayek.mohammed\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "محمد الحايك"
  },
  {
    "id": "creator-27",
    "name": "Firas Mikdad (Uncle Firas)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Firas Mikdad (Uncle Firas)</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عمّو فراس</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/clown1.jpg\" alt=\"Firas Mikdad (Uncle Firas)\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Firas Mikdad, known as Uncle Firas, is a Palestinian artist and children's entertainer who uses clown performances, humor, and playful activities to bring smiles to children's faces. Through his performances, he creates moments of laughter and happiness, reminding children that childhood deserves joy, imagination, and beautiful memories.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">فراس مقداد، المعروف باسم عمّو فراس، فنان فلسطيني ومقدّم عروض ترفيهية للأطفال، يستخدم فن المهرج والمرح والأنشطة الترفيهية لرسم الابتسامة على وجوه الأطفال. ومن خلال عروضه، يصنع لحظات من الضحك والسعادة، ويذكّر الأطفال بأن الطفولة تستحق الفرح والخيال والذكريات الجميلة.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/firas.mikdad\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "عمّو فراس"
  },
  {
    "id": "creator-28",
    "name": "Mohanned M. El-Madhoun",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohanned M. El-Madhoun</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مهند المدهون</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/m2.jpg\" alt=\"Mohanned M. El-Madhoun\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohanned M. El-Madhoun is a Palestinian digital creator and personal blogger from Gaza who shares his experiences and the realities of everyday life through social media. His posts document the challenges facing his community and the impact of difficult circumstances on families and children. Through his online presence, Mohanned shares his family's story and seeks to connect with people who want to understand and support those living in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مهند المدهون صانع محتوى رقمي ومدوّن شخصي فلسطيني من غزة، يشارك تجاربه وواقع الحياة اليومية عبر وسائل التواصل الاجتماعي. توثّق منشوراته التحديات التي يواجهها مجتمعه وتأثير الظروف الصعبة على العائلات والأطفال. ومن خلال حضوره الرقمي، يشارك مهند قصة عائلته ويسعى إلى التواصل مع الأشخاص الذين يرغبون في فهم واقع الحياة في غزة وتقديم الدعم لأهلها.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/195305-stand-with-mohannads-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mohanned's Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة مهند</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mohanned.almadhoun\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mohanned_mahmoud/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "مهند المدهون"
  },
  {
    "id": "creator-29",
    "name": "Mohammed Qomssan",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Qomssan</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد أبو القمصان</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/m3.jpg\" alt=\"Mohammed Qomssan\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Qomssan (Mohammed Abu Al-Qomssan) is a Palestinian digital creator from Gaza City who is affiliated with Palestinian Civil Defense. He shares his experiences and personal journey through social media while pursuing his goal of continuing his university education. Through his online presence and fundraising campaign, Mohammed hopes to secure the support needed to continue his studies and build his future.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد أبو القمصان صانع محتوى رقمي فلسطيني من مدينة غزة، وله ارتباط بالدفاع المدني الفلسطيني. يشارك تجاربه ورحلته الشخصية عبر وسائل التواصل الاجتماعي، ويسعى إلى تحقيق حلمه بمواصلة تعليمه الجامعي. ومن خلال حضوره الرقمي وحملته لجمع التبرعات، يأمل محمد في الحصول على الدعم اللازم لمتابعة دراسته وبناء مستقبله.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/208774-together-we-can-make-mohammeds-university-dream-possible\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mohammed's Education</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم تعليم محمد</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mohammed.qomssan\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "محمد أبو القمصان"
  },
  {
    "id": "creator-30",
    "name": "Ghaith Gaze",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ghaith Gaze</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">غيث غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/829.jpg\" alt=\"Card 14\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ghaith Gaze is a Palestinian digital creator from Gaza who uses his online presence to share stories and experiences from his community. His profile lists an affiliation with Alghad TV, connecting his work with media and public communication. Through his social media activity, he shares perspectives on life in Gaza and helps bring attention to the experiences of Palestinians.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">غيث غزة صانع محتوى رقمي فلسطيني من غزة، يستخدم حضوره على الإنترنت لمشاركة القصص والتجارب من مجتمعه. يرتبط عمله بقناة الغد التلفزيونية، مما يعكس صلته بمجال الإعلام والتواصل مع الجمهور. ومن خلال نشاطه على وسائل التواصل الاجتماعي، يشارك جوانب من الحياة في غزة ويساهم في تسليط الضوء على تجارب الفلسطينيين.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.spotfund.com/story/ae2c2211-ae77-496c-b57a-8600ad982991\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Ghaith's Campaign</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم حملة غيث</span></a><a class=\"site-button\" href=\"https://www.alghad.tv/\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Alghad TV</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">قناة الغد</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ghaith.gaze\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "غيث غزة"
  },
  {
    "id": "creator-31",
    "name": "Malak Saleh",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Malak Saleh</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ملاك صالح</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s1.jpg\" alt=\"Malak Saleh\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Malak Saleh is a Palestinian content creator and blogger from Gaza who shares lifestyle, beauty, and fashion content through her social media platforms. Through her videos and posts, she expresses her creativity, personal style, and everyday experiences while maintaining a connection with her Palestinian identity and community.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ملاك صالح صانعة محتوى ومدوّنة فلسطينية من غزة، تشارك محتوى يتعلق بأسلوب الحياة والجمال والأزياء عبر منصات التواصل الاجتماعي. ومن خلال مقاطع الفيديو والمنشورات التي تقدمها، تعبّر عن إبداعها وأسلوبها الشخصي وتجاربها اليومية، مع الحفاظ على ارتباطها بهويتها الفلسطينية ومجتمعها.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mlak.salh.621791\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/malak.saleh.official/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@malak.saleh.official\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a></div>",
    "section": "Family Appeals and Mutual Aid",
    "sectionHTML": "\n      <span class=\"lang-en\">Family Appeals and Mutual Aid</span>\n      <span class=\"lang-ar\">نداءات العائلات والتكافل المتبادل</span>\n    ",
    "nameAr": "ملاك صالح"
  },
  {
    "id": "creator-32",
    "name": "Anas Kreshan",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Anas Kreshan</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أنس كريشان</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/a2.jpg\" alt=\"Anas Kreshan / أنس كريشان\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Anas Kreshan is a Palestinian digital creator from Gaza who shares his personal experiences and perspectives through social media. Through his online presence, he connects with audiences and helps keep attention on the experiences and everyday lives of people in Gaza.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أنس كريشان صانع محتوى رقمي فلسطيني من غزة، يشارك تجاربه الشخصية ووجهات نظره عبر وسائل التواصل الاجتماعي. ومن خلال حضوره الرقمي، يتواصل مع الجمهور ويساهم في إبقاء الاهتمام موجّهًا نحو تجارب الناس وحياتهم اليومية في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.spotfund.com/story/fb0c0f1c-9b50-4c34-94c5-2ab35fd304c4\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Anas's Campaign</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم حملة أنس</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/bkwty.bkwty\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "أنس كريشان"
  },
  {
    "id": "creator-33",
    "name": "Hamza Daher",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hamza Daher</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حمزة ظاهر</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/skate.jpg\" alt=\"Hamza Daher / حمزة ظاهر\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hamza Daher is a Palestinian digital creator from Gaza with a passion for skateboarding and basketball. Through his social media presence, he shares his interests in sports and his support for Palestine. He has also shared a fundraising campaign associated with a proposed skatepark in Gaza, highlighting the importance of recreational spaces and opportunities for young people.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حمزة ظاهر صانع محتوى رقمي فلسطيني من غزة، شغوف برياضتي التزلج على اللوح وكرة السلة. ومن خلال حضوره على وسائل التواصل الاجتماعي، يشارك اهتماماته الرياضية ودعمه لفلسطين. كما شارك حملة لجمع التبرعات مرتبطة بمشروع لإنشاء حديقة للتزلج في غزة، مما يسلط الضوء على أهمية المساحات الترفيهية والفرص المتاحة للشباب.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/203655-help-us-build-a-skatepark-in-gaza\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Hamza's Campaign</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم حملة حمزة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/hamza.daher.570653\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "حمزة ظاهر"
  },
  {
    "id": "creator-34",
    "name": "Aaed",
    "nameHTML": "Aaed",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/833.jpg\" alt=\"Card 3\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Aaed Abusweilem is a young Palestinian content creator from Gaza with a love for gardening and animals. He tends to his little garden and has a special place in his heart for rescuing cats. Through his videos, Aaed shares moments of kindness, compassion, and everyday life, reminding us that even in difficult times, there is still room to nurture life and care for others.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عائد أبو سويلم صانع محتوى فلسطيني صغير السن من غزة، يحب الزراعة والحيوانات. يعتني بحديقته الصغيرة، وله شغف خاص بإنقاذ القطط ورعايتها. ومن خلال مقاطع الفيديو التي يشاركها، ينشر عائد لحظات من اللطف والرحمة والحياة اليومية، ويذكّرنا بأنه حتى في أصعب الظروف، يبقى هناك متسع لرعاية الحياة والاهتمام بالآخرين.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.gofundme.com/f/rebuilding-lives-together-hkth5\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Aaed's Campaign</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم حملة عائد</span></a></div>\n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/AhmedLittleFarmer\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n        <a href=\"https://www.gofundme.com/f/nq2v9-all-eyes-on-palestine\" target=\"_blank\" \n          rel=\"noopener noreferrer\">\n          <span class=\"learn-en\">Learn More</span>\n          <span class=\"learn-ar hidden arabic-text\">اعرف المزيد</span>\n        </a>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "frontNameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Aaed Abusweilem</span>"
  },
  {
    "id": "creator-35",
    "name": "Hosam Alkhaldy",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hosam Alkhaldy</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حسام الخالدي</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/834.jpg\" alt=\"Card 4\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hosam Alkhaldy is a Palestinian digital creator from Gaza who shares videos about his personal experiences and everyday life. Describing himself as a survivor from under the rubble, he uses his social media platforms to tell his story and share moments of resilience, creativity, and connection with audiences around the world.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حسام الخالدي صانع محتوى رقمي فلسطيني من غزة، يشارك مقاطع فيديو عن تجاربه الشخصية وحياته اليومية. ويصف نفسه بأنه ناجٍ من تحت الركام، ويستخدم منصات التواصل الاجتماعي لسرد قصته ومشاركة لحظات من الصمود والإبداع والتواصل مع الجمهور حول العالم.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/hosam.alkhaldy.3\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/hosam.gaza/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@hosamkhaldy\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a><a class=\"social-link\" aria-label=\"Support Hosam via PayPal / ادعم حسام عبر باي بال\" href=\"https://www.paypal.com/donate/?hosted_button_id=DE8YH6J7TCTVE\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "حسام الخالدي"
  },
  {
    "id": "creator-36",
    "name": "Mahmoud Shamalk",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Shamalk</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود شملخ</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/835.jpg\" alt=\"Card 5\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Shamalk is a Palestinian digital creator from Gaza who shares videos about everyday life, personal experiences, and moments of humor. Through his social media platforms, he connects with audiences using creativity and storytelling, bringing attention to life in Gaza while sharing moments of laughter and resilience.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود شملخ صانع محتوى رقمي فلسطيني من غزة، يشارك مقاطع فيديو عن الحياة اليومية والتجارب الشخصية والمواقف الطريفة. ومن خلال منصات التواصل الاجتماعي، يتواصل مع الجمهور بأسلوب إبداعي يعتمد على سرد القصص، ويسلط الضوء على الحياة في غزة مع مشاركة لحظات من الضحك والصمود.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/195391-help-mahmoud-shamalk\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mahmoud's Campaign</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم حملة محمود</span></a></div>\n        \n        \n         <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100087371853545\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        <a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@abo_tim\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>\n        <a href=\"https://www.gofundme.com/f/rebuild-hope-and-home-for-mahmouds-family\" target=\"_blank\" \n          rel=\"noopener noreferrer\">\n          <span class=\"learn-en\">Learn More</span>\n          <span class=\"learn-ar hidden arabic-text\">اعرف المزيد</span>\n        </a>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "محمود شملخ"
  },
  {
    "id": "creator-37",
    "name": "Mahmoud Budair",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Budair</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود بدير</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/836.jpg\" alt=\"Card 6\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Budair is a Palestinian photographer and digital creator from Gaza who uses photography to capture people, places, and moments from everyday life. Through his camera and online presence, he shares his perspective and helps bring attention to the stories and experiences of his community.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود بدير مصور فوتوغرافي وصانع محتوى رقمي فلسطيني من غزة، يستخدم التصوير لالتقاط صور الناس والأماكن ولحظات من الحياة اليومية. ومن خلال عدسته وحضوره على وسائل التواصل الاجتماعي، يشارك رؤيته ويساهم في تسليط الضوء على قصص وتجارب مجتمعه.</span></p>",
    "linksHTML": "\n        \n        \n         <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61568299375723\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "محمود بدير"
  },
  {
    "id": "creator-38",
    "name": "I. N.",
    "nameHTML": "I. N.",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/in.jpg\" alt=\"Card 7\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ibrahim Nazmii is a Palestinian digital creator from Gaza who shares moments from his personal life and experiences through social media. His profile also reflects his involvement in commerce and perfume-related business activities. Through his online presence, he connects with his community and shares glimpses of everyday life in Gaza.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إبراهيم نظمي صانع محتوى رقمي فلسطيني من غزة، يشارك لحظات من حياته الشخصية وتجاربه عبر وسائل التواصل الاجتماعي. ويعكس ملفه الشخصي أيضًا اهتمامه بالتجارة والأعمال المتعلقة بالعطور. ومن خلال حضوره الرقمي، يتواصل مع مجتمعه ويشارك جوانب من الحياة اليومية في غزة.</span></p>",
    "linksHTML": "\n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ibrahim.nazmii\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "frontNameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ibrahim Nazmii</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إبراهيم نظمي</span>"
  },
  {
    "id": "creator-39",
    "name": "Majd Al-Nayrab",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Majd Al-Nayrab</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مجد النيرب</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/majd.jpg\" alt=\"Majd Al-Nayrab / مجد النيرب\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Majd Al-Nayrab is a Palestinian digital creator from Gaza who shares everyday experiences, personal stories, and moments of life in his community. Through his videos and social media, he documents daily life and the challenges facing families in Gaza. He also shares fundraising campaigns seeking support for his family's basic needs and safety.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مجد النيرب صانع محتوى رقمي فلسطيني من غزة، يشارك تجاربه اليومية وقصصه الشخصية ولحظات من الحياة في مجتمعه. ومن خلال مقاطع الفيديو ووسائل التواصل الاجتماعي، يوثّق الحياة اليومية والتحديات التي تواجه العائلات في غزة. كما يشارك حملات لجمع التبرعات بهدف توفير الاحتياجات الأساسية والأمان لعائلته.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/171812-help-majids-family-survive-hunger-and-homelessness\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Majd's Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة مجد</span></a><a class=\"site-button\" href=\"https://www.gofundme.com/f/help-majids-family-survive-hunger-and-homelessness\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Majd's Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة مجد</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mjd.alnyrb.2025\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/majd_fared_1/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"PayPal — Mohammad Qaddura / باي بال — محمد قدورة\" href=\"https://www.paypal.com/paypalme/MohammadQaddura141\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "مجد النيرب"
  },
  {
    "id": "creator-40",
    "name": "Salman",
    "nameHTML": "Salman",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/839.jpg\" alt=\"Card 9\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Salman Abu Elreesh is a young Palestinian boxer and digital creator from Gaza who shares his passion for boxing, training, and sports through social media. At just 14 years old, he uses his platform to share his experiences and determination while encouraging others to support his journey. Through his story, Salman highlights the dreams and resilience of young Palestinians growing up in difficult circumstances.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">سلمان أبو الريش ملاكم فلسطيني شاب وصانع محتوى رقمي من غزة، يشارك شغفه بالملاكمة والتدريب والرياضة عبر وسائل التواصل الاجتماعي. في عمر الرابعة عشرة، يستخدم منصاته لمشاركة تجاربه وإصراره، ويشجّع الآخرين على دعم مسيرته. ومن خلال قصته، يسلّط سلمان الضوء على أحلام الشباب الفلسطيني وصمودهم في ظل الظروف الصعبة.</span></p>",
    "linksHTML": "\n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61586914149981\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        <a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/salman_the_kking/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"PayPal — HousamAbouelreish198 / باي بال — HousamAbouelreish198\" href=\"https://www.paypal.com/paypalme/HousamAbouelreish198\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    "
  },
  {
    "id": "creator-41",
    "name": "Amjad Sallah (Skate Amjad)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Amjad Sallah (Skate Amjad)</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أمجد صلاح</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/twin.jpg\" alt=\"Amjad Sallah (Skate Amjad) / أمجد صلاح\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Amjad Sallah, known as Skate Amjad, is a Palestinian digital creator and skating enthusiast. Alongside Adham, he shares skating videos, creative performances, and moments from their adventures through the Adham &amp; Amjad Twins YouTube channel. Their content celebrates movement, creativity, and a shared passion for skating.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أمجد صلاح، المعروف باسم «سكيت أمجد»، صانع محتوى رقمي فلسطيني وشغوف برياضة التزلج. يشارك مع أدهم مقاطع فيديو للتزلج وعروضاً إبداعية ولحظات من مغامراتهما عبر قناة «توأم أدهم وأمجد» على يوتيوب. ويعكس محتواهما حب الحركة والإبداع والشغف المشترك بالتزلج.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook — Amjad / فيسبوك — أمجد\" href=\"https://www.facebook.com/profile.php?id=100003999612387\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"YouTube — Adham &amp; Amjad Twins / يوتيوب — توأم أدهم وأمجد\" href=\"https://www.youtube.com/@adhamandamjad\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "أمجد صلاح"
  },
  {
    "id": "creator-42",
    "name": "Mohammed Nayef Salem (Uncle Tito)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Nayef Salem (Uncle Tito)</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد نايف سالم (عمّو تيتو)</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/tito.jpg\" alt=\"Mohammed Nayef Salem (Uncle Tito) / محمد نايف سالم (عمّو تيتو)\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mohammed Nayef Salem, known as Uncle Tito, is a Palestinian circus performer and children's entertainer from northern Gaza. A member of the Gaza Circus School team, he uses clown performances, games, and laughter to bring moments of happiness and emotional support to children affected by war and displacement.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمد نايف سالم، المعروف باسم «عمّو تيتو»، فنان سيرك ومقدّم عروض ترفيهية للأطفال من شمال غزة. وهو أحد أعضاء فريق مدرسة سيرك غزة، ويستخدم عروض المهرج والألعاب والضحك لإدخال لحظات من الفرح وتقديم الدعم النفسي للأطفال المتأثرين بالحرب والنزوح.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/200626-shhs\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Children's Activities</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم أنشطة الأطفال</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mhmd.nayf.salm\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/uncle_tito_6/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"PayPal for Kids / باي بال لدعم الأطفال\" href=\"https://www.paypal.com/paypalme/jonasnelson415\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a><a class=\"social-link\" aria-label=\"Uncle Tito website / موقع عمّو تيتو\" href=\"https://www.uncle-tito.com/\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"9\"/><path d=\"M3 12h18\"/></svg></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "محمد نايف سالم (عمّو تيتو)"
  },
  {
    "id": "creator-43",
    "name": "Mahmoud Shamalakh",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Shamalakh</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود شملخ</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/m4.jpg\" alt=\"Mahmoud Shamalakh / محمود شملخ\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mahmoud Shamalakh is a Palestinian digital creator from Gaza who shares videos and personal experiences through social media. His content offers a glimpse into everyday life and the challenges facing families in Gaza.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">محمود شملخ صانع محتوى رقمي فلسطيني من غزة، يشارك مقاطع فيديو وتجاربه الشخصية عبر وسائل التواصل الاجتماعي. يقدّم محتواه لمحات من الحياة اليومية والتحديات التي تواجه العائلات في غزة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/145783-support-mahmoud-and-his-family-in-gaza-shelter-food-and-hope\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mahmoud and His Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم محمود وعائلته</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100057195790805\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "محمود شملخ"
  },
  {
    "id": "creator-44",
    "name": "Gaza Sunbirds",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Gaza Sunbirds</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">طيور شمس غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/843.jpg\" alt=\"Gaza Sunbirds / طيور شمس غزة\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Gaza Sunbirds is a Palestinian para-cycling team that combines athletic determination with humanitarian action. Founded by Palestinian cyclists, including athletes with disabilities, the team promotes inclusion, resilience, and the power of sport. Through their community initiatives, the Gaza Sunbirds also help deliver essential humanitarian aid to families across Gaza, demonstrating that their mission extends far beyond cycling.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">طيور شمس غزة هو فريق فلسطيني لرياضة الدراجات البارالمبية، يجمع بين العزيمة الرياضية والعمل الإنساني. تأسس الفريق على يد دراجين فلسطينيين، من بينهم رياضيون من ذوي الإعاقة، ويعمل على تعزيز الشمول والصمود وقوة الرياضة. ومن خلال مبادراته المجتمعية، يساهم الفريق أيضاً في إيصال المساعدات الإنسانية الأساسية إلى العائلات في أنحاء غزة، ليؤكد أن رسالته تتجاوز حدود رياضة الدراجات.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61569175810031\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Gaza Sunbirds Official Website / الموقع الرسمي لطيور شمس غزة\" href=\"https://gazasunbirds.org/\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"9\"/><path d=\"M3 12h18\"/></svg></a><a class=\"social-link\" aria-label=\"Gaza Sunbirds Linktree / روابط طيور شمس غزة\" href=\"https://linktr.ee/thegazasunbirds\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"m10 13 4-4m-5 8-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m0 8a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-1 1\"/></svg></a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/gazasunbirds\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@gazasunbirds\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a><a class=\"social-link\" aria-label=\"X (Twitter) / إكس (تويتر)\" href=\"https://x.com/gazasunbirds\" target=\"_blank\" rel=\"noopener noreferrer\"><span aria-hidden=\"true\">X</span></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "طيور شمس غزة"
  },
  {
    "id": "creator-45",
    "name": "Massa From Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Massa From Gaza</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ماسا من غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/m5.jpg\" alt=\"Massa From Gaza / ماسا من غزة\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Massa From Gaza shares the everyday lives, smiles, and dreams of four Palestinian children growing up in Gaza. Through family moments, photographs, and videos, their page offers a personal glimpse into childhood, family life, and resilience during extraordinarily difficult circumstances.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">تشارك صفحة «ماسا من غزة» تفاصيل الحياة اليومية والابتسامات والأحلام لأربعة أطفال فلسطينيين يكبرون في غزة. ومن خلال اللحظات العائلية والصور ومقاطع الفيديو، تقدّم الصفحة لمحة إنسانية عن الطفولة والحياة الأسرية والصمود في ظل ظروف بالغة الصعوبة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.gofundme.com/f/help-mohammed-and-his-family-survive-in-gaza-mtchn\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Mohammed and His Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم محمد وعائلته</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=61594659487220\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/mohammad.masoud.gaza1\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "ماسا من غزة"
  },
  {
    "id": "creator-46",
    "name": "Hussam – Voice Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hussam – Voice Gaza</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حسام – صوت غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/845.jpg\" alt=\"Card 15\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hussam Al Shurafa, known online as Hussam – Voice Gaza, is a Palestinian father of four, writer, and digital creator from Gaza. Through his social media, he shares his family's daily experiences, the challenges of raising children during war, and their hopes for a safer future. He is also the author of <em>The Last Normal Day</em>, a book that shares his story and experiences.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حسام الشرفا، المعروف عبر وسائل التواصل الاجتماعي باسم «حسام – صوت غزة»، أب فلسطيني لأربعة أطفال وكاتب وصانع محتوى رقمي من غزة. يشارك عبر منصاته تفاصيل الحياة اليومية لعائلته، وتحديات تربية الأطفال في ظل الحرب، وآمالهم في مستقبل أكثر أماناً. وهو أيضاً مؤلف كتاب «آخر يوم عادي» (The Last Normal Day)، الذي يروي فيه قصته وتجاربه.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/hussam.family/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Read The Last Normal Day / اقرأ كتاب آخر يوم عادي\" title=\"Read The Last Normal Day / اقرأ كتاب آخر يوم عادي\" href=\"https://the-last-normal-day.hussamalshurafa5.chatgpt.site/\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"9\"/><path d=\"M3 12h18\"/></svg></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "حسام – صوت غزة"
  },
  {
    "id": "creator-47",
    "name": "Hani Almadhoun",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hani Almadhoun</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">هاني المدهون</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/hani.jpg\" alt=\"Hani Almadhoun / هاني المدهون\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Hani Almadhoun is a Palestinian humanitarian advocate and digital creator who helps raise awareness of the humanitarian crisis in Gaza. Through his work with Gaza Soup Kitchen, he supports efforts to provide meals and essential assistance to Palestinian families facing hunger and displacement. He uses his platform to share their stories and encourage solidarity and humanitarian action.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">هاني المدهون ناشط إنساني فلسطيني وصانع محتوى رقمي يعمل على نشر الوعي بالأزمة الإنسانية في غزة. ومن خلال عمله مع «مطبخ غزة الخيري»، يساهم في دعم الجهود الرامية إلى توفير الوجبات والمساعدات الأساسية للعائلات الفلسطينية التي تواجه الجوع والنزوح. ويستخدم منصاته لنقل قصصهم وتشجيع التضامن والعمل الإنساني.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.unrwausa.org/donate\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support UNRWA USA</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم الأونروا في الولايات المتحدة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/alkabeer.alhani\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/myhanitizer\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"Gaza Soup Kitchen Official Website / الموقع الرسمي لمطبخ غزة الخيري\" href=\"https://gazasoupkitchen.org/\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"9\"/><path d=\"M3 12h18\"/></svg></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "هاني المدهون"
  },
  {
    "id": "creator-48",
    "name": "Ahmed From Gaza",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed From Gaza</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد من غزة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/847.jpg\" alt=\"Card 1\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed is a young Palestinian from Gaza whose family shares their daily experiences, challenges, and hopes through social media. With help from his father, Ahmed's story offers a personal glimpse into childhood in Gaza and the determination of families working to build a safer future for their children.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد طفل فلسطيني من غزة، تشارك عائلته تفاصيل حياتها اليومية وتحدياتها وآمالها عبر وسائل التواصل الاجتماعي. وبمساعدة والده، تقدّم قصة أحمد لمحة إنسانية عن الطفولة في غزة وإصرار العائلات على بناء مستقبل أكثر أماناً لأطفالها.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/188366-refuge-for-shadi-ahmed\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Ahmed and His Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم أحمد وعائلته</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook — family account / فيسبوك — حساب العائلة\" href=\"https://www.facebook.com/ShadiAhmed17/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram — family account / إنستغرام — حساب العائلة\" href=\"https://www.instagram.com/shadi__ahmed17\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "أحمد من غزة"
  },
  {
    "id": "creator-49",
    "name": "Qusi Fantastic",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Qusi Fantastic</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">قصي فانتاستيك</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/848.jpg\" alt=\"Card 1\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Qusi Jarad, known online as Qusi Fantastic, is a Palestinian digital creator and artist from Gaza. Through his videos, photography, and social media, he shares moments from daily life, personal experiences, and stories from his community. His content combines creativity, humor, and a personal perspective on life in Gaza.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">قصي جراد، المعروف عبر وسائل التواصل الاجتماعي باسم «قصي فانتاستيك»، صانع محتوى رقمي وفنان فلسطيني من غزة. يشارك من خلال مقاطع الفيديو والتصوير ومنصاته الاجتماعية لحظات من الحياة اليومية وتجاربه الشخصية وقصصاً من مجتمعه. ويجمع محتواه بين الإبداع والفكاهة ونظرته الشخصية للحياة في غزة.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/qusi.jarad.2025\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/qusi.fantastic\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@qusi.fantastic\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a><a class=\"social-link\" aria-label=\"Telegram / تيليغرام\" title=\"Telegram / تيليغرام\" href=\"https://t.me/TradeFantastic\" target=\"_blank\" rel=\"noopener noreferrer\"><span aria-hidden=\"true\">TG</span></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "قصي فانتاستيك"
  },
  {
    "id": "creator-50",
    "name": "Mashjar Juthour",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mashjar Juthour</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مشجر جذور</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/849.jpg\" alt=\"Card 1\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Mashjar Juthour is a Palestinian environmental and educational initiative near Ramallah dedicated to protecting native trees, preserving biodiversity, and reconnecting communities with their natural heritage. Through conservation, tree planting, and educational activities, the project helps protect Palestine's land and environment for future generations.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">مشجر جذور مبادرة فلسطينية بيئية وتعليمية قرب رام الله، تهدف إلى حماية الأشجار المحلية والحفاظ على التنوع الحيوي وتعزيز ارتباط المجتمع بتراثه الطبيعي. ومن خلال حماية الطبيعة وزراعة الأشجار والأنشطة التعليمية، يساهم المشروع في الحفاظ على أرض فلسطين وبيئتها للأجيال القادمة.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/mashjarjuthour\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Mashjar Juthour Official Website / الموقع الرسمي لمشجر جذور\" href=\"https://juthour.org/\" target=\"_blank\" rel=\"noopener noreferrer\"><svg class=\"creator-social-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" aria-hidden=\"true\" focusable=\"false\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"9\"/><path d=\"M3 12h18\"/></svg></a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "مشجر جذور"
  },
  {
    "id": "creator-51",
    "name": "Fares Abu Amra",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Fares Abu Amra</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">العداء فارس أبو عمرة</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/run.jpg\" alt=\"Fares Abu Amra / العداء فارس أبو عمرة\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Fares Abu Amra is a Palestinian runner, athlete, and digital creator from Gaza. Known for his passion for sprinting, he shares videos and personal experiences that reflect daily life, perseverance, and community spirit. Through his social media, Fares brings attention to the experiences of Palestinians in Gaza while continuing to celebrate his love of sports.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">فارس أبو عمرة عدّاء ورياضي وصانع محتوى رقمي فلسطيني من غزة، يُعرف بشغفه بسباقات السرعة. يشارك عبر وسائل التواصل الاجتماعي مقاطع فيديو وتجاربه الشخصية التي تعكس الحياة اليومية والإصرار وروح المجتمع. ومن خلال محتواه، يسلّط فارس الضوء على تجارب الفلسطينيين في غزة، مع مواصلة التعبير عن حبه للرياضة.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/fares.abuamra\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@fares__abo__amra\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "العداء فارس أبو عمرة"
  },
  {
    "id": "creator-52",
    "name": "Ahmed Elhalabi",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Elhalabi</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد الحلبي</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/ea.jpg\" alt=\"Ahmed Elhalabi / أحمد الحلبي\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Elhalabi is a young Palestinian from Gaza who shares moments from his life and personal experiences through social media. His page offers a glimpse into the everyday experiences of Palestinian youth and the hopes they carry for their future.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد الحلبي شاب فلسطيني من غزة، يشارك لحظات من حياته وتجاربه الشخصية عبر وسائل التواصل الاجتماعي. وتقدّم صفحته لمحة عن الحياة اليومية للشباب الفلسطيني وآمالهم وتطلعاتهم نحو المستقبل.</span></p>",
    "linksHTML": "\n        \n        \n        <div class=\"social-links\">\n          <a aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ahmed.elhalabi.2025\" class=\"social-link\" target=\"_blank\" \n          rel=\"noopener noreferrer\">{{social:facebook}}</a>\n        </div>\n      ",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "أحمد الحلبي"
  },
  {
    "id": "creator-53",
    "name": "Saber Kullab",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Saber Kullab</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">صابر كلاب</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s2.jpg\" alt=\"Saber Kullab / صابر كلاب\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Saber Kullab is a Palestinian musician, digital creator, and video editor from Gaza. Through his creative work, he produces music, videos, and visual stories that reflect his artistic talents and experiences. He also shares his family's challenges and hopes for a safer future through social media.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">صابر كلاب موسيقي وصانع محتوى رقمي ومونتير فيديو فلسطيني من غزة. يقدّم من خلال أعماله الإبداعية الموسيقى ومقاطع الفيديو والقصص البصرية التي تعكس موهبته الفنية وتجاربه الشخصية. كما يشارك عبر وسائل التواصل الاجتماعي التحديات التي تواجه عائلته وآمالهم في مستقبل أكثر أماناً.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://www.gofundme.com/f/help-saber-and-his-family-escape-famine\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Saber and His Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم صابر وعائلته</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/saber.kullab\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/s.b.kullab\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@saber-k1o\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "صابر كلاب"
  },
  {
    "id": "creator-54",
    "name": "Bilal Anwar",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Bilal Anwar</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">بلال أنور</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s3.jpg\" alt=\"Bilal Anwar / بلال أنور\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Bilal Anwar is a Palestinian digital creator who shares videos, personal experiences, and moments from everyday life through social media. His content offers viewers a personal perspective on his experiences and the stories he chooses to share with his community.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">بلال أنور صانع محتوى رقمي فلسطيني يشارك مقاطع فيديو وتجاربه الشخصية ولحظات من الحياة اليومية عبر وسائل التواصل الاجتماعي. ويقدّم محتواه للمتابعين نظرة شخصية على تجاربه والقصص التي يختار مشاركتها مع مجتمعه.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/profile.php?id=100072657316624\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/bilal.anwar1\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"TikTok / تيك توك\" href=\"https://www.tiktok.com/@bilal.anwar_1\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:tiktok}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/@bilal_xb2\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "بلال أنور"
  },
  {
    "id": "creator-55",
    "name": "Moaad Lubbad",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Moaad Lubbad</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">معاذ لبد</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s4.jpg\" alt=\"Moaad Lubbad / معاذ لبد\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Moaad Lubbad is a Palestinian digital creator from Gaza who shares his personal experiences and moments from everyday life through social media. His content offers a glimpse into the challenges facing families in Gaza and their determination to build a safer, more hopeful future.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">معاذ لبد صانع محتوى رقمي فلسطيني من غزة، يشارك تجاربه الشخصية ولحظات من الحياة اليومية عبر وسائل التواصل الاجتماعي. ويقدّم محتواه لمحة عن التحديات التي تواجه العائلات في غزة وإصرارها على بناء مستقبل أكثر أماناً وأملاً.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/144630-support-mooad-and-his-family\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Moaad and His Family</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم معاذ وعائلته</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/moaad.lubbad\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/moaad.lubbad\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "معاذ لبد"
  },
  {
    "id": "creator-56",
    "name": "Belal Matar (Uncle Bibo)",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Belal Matar (Uncle Bibo)</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">بلال مطر (عمو بيبو)</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s5.jpg\" alt=\"Belal Matar (Uncle Bibo) / بلال مطر (عمو بيبو)\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Belal Matar, also known as Uncle Bibo, is a Palestinian circus performer from Gaza who uses creativity, movement, and entertainment to bring moments of happiness to his community. As part of Gaza's circus community, he helps celebrate the power of performance, laughter, and human connection, especially for children growing up in difficult circumstances.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">بلال مطر، المعروف أيضاً باسم «عمو بيبو»، فنان سيرك فلسطيني من غزة، يستخدم الإبداع والحركة والعروض الترفيهية لإدخال لحظات من الفرح إلى مجتمعه. ومن خلال مشاركته في مجتمع السيرك في غزة، يساهم في إبراز قوة الفن والضحك والتواصل الإنساني، وخاصة للأطفال الذين يعيشون في ظروف صعبة.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://gofund.me/a4f08e5b\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Uncle Bibo</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عمو بيبو</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/belal.matar.7796\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "بلال مطر (عمو بيبو)"
  },
  {
    "id": "creator-57",
    "name": "Clown Aloosh",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Clown Aloosh</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عمو علوش</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/s6.jpg\" alt=\"Clown Aloosh / عمو علوش\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Alaa Miqdad, known as Clown Aloosh or Uncle Aloosh, is a Palestinian circus performer and children's entertainer from Gaza. Through his work with Gaza Circus School, he uses clown performances, games, and laughter to bring moments of happiness to children facing difficult circumstances. His years of performances reflect a commitment to creativity, compassion, and protecting the joy of childhood.</span> <span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">علاء مقداد، المعروف باسم «عمو علوش»، فنان سيرك ومهرج فلسطيني من غزة. من خلال عمله مع مدرسة سيرك غزة، يستخدم عروض المهرج والألعاب والضحك لإدخال لحظات من الفرح إلى حياة الأطفال الذين يواجهون ظروفاً صعبة. وتعكس سنوات عمله في تقديم العروض التزامه بالإبداع والرحمة والحفاظ على فرحة الطفولة.</span></p>",
    "linksHTML": "<div class=\"social-links\"><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/aloo300\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"YouTube / يوتيوب\" href=\"https://www.youtube.com/channel/UC4aCgyuIRaUbbhbqoY0nFvg\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:youtube}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    ",
    "nameAr": "عمو علوش"
  },
  {
    "id": "creator-58",
    "name": "Ahmed Fawaz Mushtaha",
    "nameAr": "أحمد فواز مشتهى",
    "nameHTML": "<span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Fawaz Mushtaha</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد فواز مشتهى</span>",
    "portraitHTML": "<img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/link/ahmed.jpg\" alt=\"Ahmed Fawaz Mushtaha\" loading=\"lazy\">",
    "biographyHTML": "<p><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Ahmed Fawaz Mushtaha is a Palestinian artist and children's entertainment organizer from Gaza who is involved with the Gaza Circus School. Through circus activities, performances, and recreational programs, he works to bring moments of happiness and emotional support to children facing difficult circumstances. His work highlights the importance of creativity, play, and community in helping children experience joy and connection.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أحمد فواز مشتهى فنان فلسطيني ومنظم أنشطة ترفيهية للأطفال من غزة، يشارك في أعمال مدرسة سيرك غزة. ومن خلال أنشطة السيرك والعروض والبرامج الترفيهية، يعمل على إدخال الفرح وتقديم الدعم النفسي للأطفال الذين يواجهون ظروفًا صعبة. ويسلط عمله الضوء على أهمية الإبداع واللعب وروح المجتمع في مساعدة الأطفال على الشعور بالسعادة والتواصل.</span></p>",
    "linksHTML": "<div class=\"creator-support-buttons\"><a class=\"site-button\" href=\"https://chuffed.org/project/190283-ahmeds-family-survival-fund\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Ahmed's Family</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم عائلة أحمد</span></a><a class=\"site-button\" href=\"https://chuffed.org/project/182714-creating-a-new-home-for-the-gaza-circus-school\" target=\"_blank\" rel=\"noopener noreferrer\"><span class=\"lang-en\" lang=\"en\" dir=\"ltr\">Support Gaza Circus School</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ادعم مدرسة سيرك غزة</span></a></div>\n        <div class=\"social-links\"><a class=\"social-link\" aria-label=\"Instagram / إنستغرام\" href=\"https://www.instagram.com/gaza_circus_school/\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:instagram}}</a><a class=\"social-link\" aria-label=\"Facebook / فيسبوك\" href=\"https://www.facebook.com/ahmd.fwaz.mshthy\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:facebook}}</a><a class=\"social-link\" aria-label=\"PayPal payment / الدفع عبر باي بال\" href=\"https://www.paypal.me/AMushtaha764\" target=\"_blank\" rel=\"noopener noreferrer\">{{social:paypal}}</a></div>",
    "section": "Relief, Rebuilding, and Hope",
    "sectionHTML": "\n      <span class=\"lang-en\">Relief, Rebuilding, and Hope</span>\n      <span class=\"lang-ar\">الإغاثة وإعادة البناء والأمل</span>\n    "
  }
];

// Social tokens keep platform symbols centralized while preserving original link HTML.
// Future links can use {{social:facebook}}, {{social:instagram}}, or {{social:tiktok}} inside an
// accessible anchor; account URLs never pass through icon substitution.
const socialIcons = Object.freeze({
    facebook: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z"/></svg>',
    instagram: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.6 1h-3.5v14.4a3 3 0 1 1-2.6-3V8.8a6.6 6.6 0 1 0 6.1 6.6V8.1a9 9 0 0 0 5.4 1.8V6.4A5.5 5.5 0 0 1 16.6 1z"/></svg>',
    threads: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M19 7c-1-3-3-4-7-4-5 0-8 3-8 9s3 9 8 9c4 0 7-2 7-5 0-4-4-6-7-6-3 0-5 1-5 3s2 3 4 3c3 0 5-2 5-5 0-3-2-5-5-5-2 0-3 1-4 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    youtube: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="m10 9 6 3-6 3z" fill="#303c22"/></svg>',
    paypal: '<svg class="creator-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 2h8c4 0 5 2 4 6-1 4-3 6-7 6h-2l-1 6H5zm3 4-1 5h3c2 0 3-1 3-3s-1-2-3-2z"/><path fill="currentColor" opacity=".65" d="m10 10-2 12h4l1-5h2c4 0 6-2 6-6 0-1 0-2-1-3-1 4-3 6-7 6h-2l1-4z"/></svg>'
});

function renderSocialIcons(linksHTML) {
    return linksHTML.replace(/\{\{social:(facebook|instagram|tiktok|threads|youtube|paypal)\}\}/g, (_, platform) => socialIcons[platform]);
}

// Cards are rendered once so the shared controller attaches exactly one set of
// listeners. Filtering and pagination only change which cards are hidden.
(() => {
    const pageSize = 3;
    const search = document.getElementById('creator-search');
    const select = document.getElementById('creator-select');
    const results = document.getElementById('creator-results');
    const previous = document.getElementById('creator-previous');
    const next = document.getElementById('creator-next');
    const indicator = document.getElementById('creator-page');
    const empty = document.getElementById('creator-empty');
    let page = 0;
    const normalize = value => value.trim().toLocaleLowerCase();
    const arabic = () => document.documentElement.lang === 'ar';
    const bilingual = (en, ar) => `<span class="lang-en">${en}</span><span class="lang-ar hidden" lang="ar" dir="rtl">${ar}</span>`;
    const escapeText = value => value.replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));

    const cards = creators.map((creator, index) => {
        const id = creator.id;
        const card = document.createElement('article');
        card.className = 'featured-card';
        card.id = id;
        card.dataset.featuredCard = '';
        card.dataset.section = creator.section;
        card.hidden = true;
        if (creator.name) card.setAttribute('aria-labelledby', `${id}-name`);
        else card.setAttribute('aria-label', `Entry ${index + 1} / الحساب ${index + 1}`);
        // These fragments are preserved local editorial content, never user input.
        card.innerHTML = `
          <div class="featured-card-inner">
            <div class="featured-card-face featured-card-front" data-featured-face="front" id="${id}-front">
              ${creator.portraitHTML}
              <h3 id="${id}-name">${creator.frontNameHTML || creator.nameHTML}</h3>
              <button type="button" class="featured-flip-button" data-featured-flip="back" aria-controls="${id}-back" aria-expanded="false">${bilingual('More', 'المزيد')}</button>
            </div>
            <div class="featured-card-face featured-card-back" data-featured-face="back" id="${id}-back" inert aria-hidden="true">
              <div class="featured-card-details" tabindex="0" role="region" aria-label="${escapeText(creator.name || `Entry ${index + 1}`)}">
                <h3>${creator.nameHTML}</h3>
                ${creator.sectionHTML ? `<p class="creator-classification">${creator.sectionHTML}</p>` : ''}
                ${creator.biographyHTML}
                ${renderSocialIcons(creator.linksHTML)}
              </div>
              <button type="button" class="featured-flip-button" data-featured-flip="front" aria-controls="${id}-front">${bilingual('Back', 'رجوع')}</button>
            </div>
          </div>`;
        // Keep each portrait's original attributes while adopting card sizing.
        card.querySelector('.featured-card-front > img').classList.add('featured-card-photo');
        results.append(card);
        return card;
    });

    const all = document.createElement('option');
    all.value = '';
    select.append(all);
    const sorted = creators.map((creator, index) => ({creator, index})).sort((a, b) =>
        a.creator.name.localeCompare(b.creator.name, 'en', {sensitivity: 'base'}) || a.index - b.index);
    sorted.forEach(({creator, index}) => {
        const option = document.createElement('option');
        option.value = creator.id;
        // Distinct IDs keep repeated names separate. Empty names stay unassigned.
        option.textContent = creator.name || `Entry ${index + 1} / الحساب ${index + 1}`;
        select.append(option);
    });

    function filteredCreators() {
        const query = normalize(search.value);
        return creators.filter(creator => (!select.value || creator.id === select.value) &&
            (!query || [creator.name, creator.nameAr].filter(Boolean).some(name => normalize(name).includes(query))));
    }

    function update() {
        const matches = filteredCreators();
        const pages = Math.ceil(matches.length / pageSize);
        page = Math.max(0, Math.min(page, Math.max(0, pages - 1)));
        const visible = new Set(matches.slice(page * pageSize, (page + 1) * pageSize).map(creator => creator.id));
        cards.forEach(card => { card.hidden = !visible.has(card.id); });
        empty.hidden = matches.length !== 0;
        previous.disabled = page === 0;
        next.disabled = page + 1 >= pages;
        indicator.textContent = arabic()
            ? `الصفحة ${pages ? page + 1 : 0} من ${pages}`
            : `Page ${pages ? page + 1 : 0} of ${pages}`;
        all.textContent = arabic() ? 'جميع صنّاع المحتوى' : 'All Creators';
        search.placeholder = arabic() ? 'الاسم أو الأحرف الأولى' : 'Name or initials';
    }

    search.addEventListener('input', () => {
        select.value = '';
        page = 0;
        update();
    });
    select.addEventListener('change', () => {
        // A selection is an exact record filter; the text query is cleared so
        // switching back to All Creators restores normal browsing immediately.
        search.value = '';
        page = 0;
        update();
    });
    previous.addEventListener('click', () => { if (page > 0) { page--; update(); } });
    next.addEventListener('click', () => {
        if ((page + 1) * pageSize < filteredCreators().length) { page++; update(); }
    });

    // main.js owns language switching. Observe its root-language change to update
    // generated status/options and any spans created after its initial pass.
    function syncLanguage() {
        results.querySelectorAll('.lang-en, .learn-en').forEach(el => el.classList.toggle('hidden', arabic()));
        results.querySelectorAll('.lang-ar, .learn-ar').forEach(el => el.classList.toggle('hidden', !arabic()));
        update();
    }
    new MutationObserver(syncLanguage).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
    syncLanguage();
    import('./featured.js');
})();
