
//Author: Leslie Brockman
//date modified: 2026-11-11
// Original Chapter 1 Level 1 questions and scoring. Learning state stays in memory. We do not rebuild this level. Its fine. Don't touch it.
'use strict';
(() => {
    const root = document.getElementById('history-ancient-activity');
    if (!root) return;
    const view = root.querySelector('[data-expedition-level="1"]');
    const find = key => view.querySelector(`[data-ancient-${key}]`);
    // Q2–Q4: UNESCO Tell es-Sultan. Q1/Q5: archaeology and interpretation sources linked in HTML.
    const questions = [
    {
        "id": "clues",
        "question": [
            "What do archaeologists study to learn about people long ago?",
            "ماذا يدرس علماء الآثار ليتعلّموا عن الناس قديمًا؟"
        ],
        "answers": [
            [
                "Physical remains people left behind",
                "البقايا المادية التي تركها الناس"
            ],
            [
                "Only tomorrow’s weather",
                "طقس الغد فقط"
            ],
            [
                "Only imaginary stories",
                "القصص الخيالية فقط"
            ]
        ],
        "correct": 0,
        "explanation": [
            "Physical remains are clues to the human past.",
            "البقايا المادية أدلة على ماضي البشر."
        ]
    },
    {
        "id": "water",
        "question": [
            "What nearby natural feature supplied water at ancient Jericho?",
            "ما المعلم الطبيعي القريب الذي وفّر الماء في أريحا القديمة؟"
        ],
        "answers": [
            [
                "A sand dune",
                "كثيب رملي"
            ],
            [
                "The spring of ‘Ain es-Sultan",
                "نبع عين السلطان"
            ],
            [
                "A snow mountain",
                "جبل ثلجي"
            ]
        ],
        "correct": 1,
        "explanation": [
            "The nearby spring provided water for people living here.",
            "وفّر النبع القريب الماء للسكان هنا."
        ]
    },
    {
        "id": "settlement",
        "question": [
            "What does a permanent settlement mean?",
            "ماذا تعني مستوطنة دائمة؟"
        ],
        "answers": [
            [
                "A place visited for only one night",
                "مكان يُزار لليلة واحدة فقط"
            ],
            [
                "A place with no people",
                "مكان بلا سكان"
            ],
            [
                "A place where people stayed to live",
                "مكان استقر فيه الناس للعيش"
            ]
        ],
        "correct": 2,
        "explanation": [
            "UNESCO describes a permanent Neolithic settlement at Tell es-Sultan.",
            "تصف اليونسكو مستوطنة دائمة من العصر الحجري الحديث في تل السلطان."
        ]
    },
    {
        "id": "tower-wall",
        "question": [
            "Which structures survive from Neolithic Tell es-Sultan?",
            "ما المنشآت الباقية من العصر الحجري الحديث في تل السلطان؟"
        ],
        "answers": [
            [
                "A tower and a wall",
                "برج وسور"
            ],
            [
                "A railway station",
                "محطة قطارات"
            ],
            [
                "An airport runway",
                "مدرج مطار"
            ]
        ],
        "correct": 0,
        "explanation": [
            "The tower and wall are physical archaeological evidence.",
            "البرج والسور أدلة أثرية مادية."
        ]
    },
    {
        "id": "evidence",
        "question": [
            "Which statement describes physical evidence, rather than an interpretation?",
            "أي عبارة تصف دليلًا ماديًا، لا تفسيرًا؟"
        ],
        "answers": [
            [
                "The wall may have had several uses",
                "ربما كانت للسور استخدامات متعددة"
            ],
            [
                "A stone wall survives at the site",
                "يبقى سور حجري في الموقع"
            ],
            [
                "Its builders may have worked in teams",
                "ربما عمل بنّاؤه ضمن فرق"
            ]
        ],
        "correct": 1,
        "explanation": [
            "We can examine the wall. Ideas about its purpose are interpretations to test against evidence.",
            "يمكننا فحص السور. أما الأفكار عن غرضه فهي تفسيرات نختبرها بالأدلة."
        ]
    }
];
    root.historyReviewQuestions = questions;
    const illustrations = new Map([...root.querySelectorAll('[data-ancient-illustration]')]
        .map(template => [template.dataset.ancientIllustration, template]));
    const objects = new Map([...document.getElementById('history-ancient-palestine').querySelectorAll('[data-ancient-object]')]
        .map(template => [template.dataset.ancientObject, template]));
    const missions = [
        ['Find a clue to the past', 'اعثر على دليل من الماضي'],
        ['Follow the water', 'تتبّع الماء'],
        ['Discover a place to live', 'اكتشف مكانًا للعيش'],
        ['Investigate the stone structures', 'استكشف المنشآت الحجرية'],
        ['Observe, then interpret', 'لاحظ ثم فسّر']
    ];
    let index = 0, stars = 0, firstAttempt = true, solved = false, active = false;
    function pair(element, en, ar) {
        element.replaceChildren();
        [en, ar].forEach((text, i) => {
            const span = document.createElement('span');
            span.className = i ? 'history-ar' : 'history-en';
            span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr';
            span.textContent = text; element.append(span);
        });
    }
    function progress() {
        view.querySelectorAll('[data-ancient-star]').forEach((star, i) => {
            star.dataset.earned = String(i < stars);
        });
        pair(find('progress'), `Discovery ${index + 1} of 5`, `الاكتشاف ${index + 1} من 5`);
        pair(find('score'), `${stars} of 5 stars earned`, `تم الحصول على ${stars} من أصل 5 نجوم`);
    }
    function render() {
        const question = questions[index]; firstAttempt = true; solved = false;
        pair(find('mission'), ...missions[index]);
        pair(find('question'), ...question.question);
        find('art').replaceChildren(illustrations.get(question.id).content.cloneNode(true));
        find('feedback').textContent = ''; find('explanation').textContent = '';
        find('explanation').hidden = true; find('next').disabled = true;
        find('answers').replaceChildren();
        question.answers.forEach((answer, choice) => {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'ancient-answer';
            button.setAttribute('aria-pressed', 'false');
            button.append(objects.get(`${question.id}-${choice}`).content.cloneNode(true));
            const label = document.createElement('span'); pair(label, ...answer); button.append(label);
            button.addEventListener('click', () => choose(choice));
            find('answers').append(button);
        });
        progress(); find('mission').focus();
    }
    function start() {
        index = stars = 0; active = true;
        find('start').hidden = true; find('results').hidden = true;
        find('round').hidden = false; render();
    }
    function choose(choice) {
        if (!active || solved || !Number.isInteger(choice) || !questions[index].answers[choice]) return;
        [...find('answers').children].forEach((button, i) => {
            button.setAttribute('aria-pressed', String(i === choice));
        });
        find('answers').children[choice].dataset.selection = choice === questions[index].correct ? 'found' : 'revisit';
        if (choice !== questions[index].correct) {
            firstAttempt = false;
            pair(find('feedback'), 'Keep exploring! Try another answer. You can try as often as you like.',
                'واصل الاستكشاف! جرّب إجابة أخرى. يمكنك المحاولة كما تشاء.');
            return;
        }
        solved = true;
        if (firstAttempt) stars++;
        pair(find('feedback'), firstAttempt ? 'Great discovery! You earned one gold star! ★' : 'Great discovery! You found the evidence!',
            firstAttempt ? 'اكتشاف رائع! حصلت على نجمة ذهبية! ★' : 'اكتشاف رائع! وجدت الدليل!');
        pair(find('explanation'), ...questions[index].explanation);
        find('explanation').hidden = false;
        [...find('answers').children].forEach(button => { button.disabled = true; });
        find('next').disabled = false; progress();
    }
    function next() {
        if (!active || !solved) return;
        index++;
        if (index < questions.length) { render(); return; }
        active = false; find('round').hidden = true; find('results').hidden = false;
        pair(find('total'), `You earned ${stars} out of 5 gold stars! ★`, `حصلت على ${stars} من أصل 5 نجوم ذهبية! ★`);
        document.getElementById('ancient-results-title').focus();
    }
    find('start').addEventListener('click', start);
    find('again').addEventListener('click', start);
    find('next').addEventListener('click', next);
    find('start').hidden = false;
})();
