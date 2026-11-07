
//Author: Leslie Brockman
//Date:11-07-2026
// Standalone bilingual science quiz. State stays inside this activity.
'use strict';
(() => {
    const root = document.getElementById('science-explorers');
    if (!root) return;
    const bank = [
        {"id": "fish", "topic": "animals", "question": ["Where does a goldfish normally live?", "أين تعيش السمكة الذهبية عادة؟"], "answers": [["Fresh water", "المياه العذبة"], ["Dry sand", "الرمال الجافة"], ["Inside clouds", "داخل السحب"]], "correct": 0, "explanation": ["Goldfish are freshwater fish; water is their habitat.", "الأسماك الذهبية من أسماك المياه العذبة؛ فالماء موطنها."], "hint": ["", ""]},
        {"id": "camel", "topic": "animals", "question": ["In a hot desert, which animal has a hump that stores fat?", "في الصحراء الحارة، أي حيوان له سنام يخزّن الدهون؟"], "answers": [["Camel", "الجمل"], ["Goldfish", "السمكة الذهبية"], ["Penguin", "البطريق"]], "correct": 0, "explanation": ["A camel’s hump stores fat, which provides energy when food is scarce.", "يخزّن سنام الجمل الدهون، وهي مصدر للطاقة عندما يقلّ الغذاء."], "hint": ["", ""]},
        {"id": "duck", "topic": "animals", "question": ["What do a duck’s webbed feet help it do?", "بماذا تساعد الأقدام المكففة البطة؟"], "answers": [["Swim", "السباحة"], ["Make sunlight", "صنع ضوء الشمس"], ["Grow leaves", "إنبات الأوراق"]], "correct": 0, "explanation": ["Webbed feet push against water and help ducks swim.", "تدفع الأقدام المكففة الماء وتساعد البط على السباحة."], "hint": ["", ""]},
        {"id": "roots", "topic": "plants", "question": ["Which part of a typical plant takes up water from soil?", "أي جزء من النبات يمتص الماء من التربة عادة؟"], "answers": [["Roots", "الجذور"], ["Petals", "البتلات"], ["Fruit skin", "قشرة الثمرة"]], "correct": 0, "explanation": ["Roots take up water from the soil.", "تمتص الجذور الماء من التربة."], "hint": ["", ""]},
        {"id": "leaves", "topic": "plants", "question": ["Which plant part usually captures sunlight to make food?", "أي جزء من النبات يلتقط ضوء الشمس لصنع الغذاء عادة؟"], "answers": [["Leaves", "الأوراق"], ["Dry bark only", "اللحاء الجاف فقط"], ["Fallen petals", "البتلات المتساقطة"]], "correct": 0, "explanation": ["Green leaves use light in photosynthesis to help make food.", "تستخدم الأوراق الخضراء الضوء في البناء الضوئي للمساعدة على صنع الغذاء."], "hint": ["", ""]},
        {"id": "seed", "topic": "plants", "question": ["What can a healthy bean seed grow into under suitable conditions?", "إلى ماذا يمكن أن تنمو بذرة فاصولياء سليمة في ظروف مناسبة؟"], "answers": [["A bean plant", "نبات فاصولياء"], ["A rock", "صخرة"], ["A star", "نجم"]], "correct": 0, "explanation": ["A seed contains a young plant that can grow when its needs are met.", "تحتوي البذرة على نبات صغير يمكنه النمو عندما تتوفر احتياجاته."], "hint": ["", ""]},
        {"id": "rain", "topic": "weather", "question": ["What falls from clouds as rain?", "ماذا يسقط من السحب على هيئة مطر؟"], "answers": [["Liquid water drops", "قطرات ماء سائل"], ["Small stones", "حجارة صغيرة"], ["Dry leaves", "أوراق جافة"]], "correct": 0, "explanation": ["Rain consists of liquid water droplets falling from clouds.", "يتكوّن المطر من قطرات ماء سائل تسقط من السحب."], "hint": ["", ""]},
        {"id": "snow", "topic": "weather", "question": ["Snowflakes are made mainly of what?", "ممّ تتكوّن رقاقات الثلج أساسًا؟"], "answers": [["Ice crystals", "بلورات الجليد"], ["Sand grains", "حبيبات الرمل"], ["Smoke", "الدخان"]], "correct": 0, "explanation": ["Snowflakes are crystals of frozen water.", "رقاقات الثلج بلورات من الماء المتجمد."], "hint": ["", ""]},
        {"id": "thermometer", "topic": "weather", "question": ["Which instrument measures temperature?", "أي أداة تقيس درجة الحرارة؟"], "answers": [["Thermometer", "مقياس الحرارة"], ["Ruler", "المسطرة"], ["Compass", "البوصلة"]], "correct": 0, "explanation": ["A thermometer measures how hot or cold something is.", "يقيس مقياس الحرارة مدى سخونة الشيء أو برودته."], "hint": ["", ""]},
        {"id": "earth", "topic": "space", "question": ["Which of these is the planet we live on?", "أيّ هذه هو الكوكب الذي نعيش عليه؟"], "answers": [["Earth", "الأرض"], ["The Sun", "الشمس"], ["The Moon", "القمر"]], "correct": 0, "explanation": ["Earth is our home planet; the Sun is a star and the Moon is Earth’s natural satellite.", "الأرض كوكبنا؛ والشمس نجم، والقمر تابع طبيعي للأرض."], "hint": ["", ""]},
        {"id": "sun", "topic": "space", "question": ["What kind of object is the Sun?", "ما نوع الجرم الذي تُعدّه الشمس؟"], "answers": [["A star", "نجم"], ["A planet", "كوكب"], ["A cloud", "سحابة"]], "correct": 0, "explanation": ["The Sun is the star at the center of our solar system.", "الشمس هي النجم الموجود في مركز مجموعتنا الشمسية."], "hint": ["", ""]},
        {"id": "daynight", "topic": "space", "question": ["What mainly causes day and night on Earth?", "ما السبب الرئيسي لتعاقب الليل والنهار على الأرض؟"], "answers": [["Earth rotating", "دوران الأرض حول نفسها"], ["The Sun switching off", "انطفاء الشمس"], ["The Moon covering Earth every night", "تغطية القمر للأرض كل ليلة"]], "correct": 0, "explanation": ["Earth’s rotation turns different places toward and away from the Sun.", "يجعل دوران الأرض أماكن مختلفة تواجه الشمس ثم تبتعد عن مواجهتها."], "hint": ["", ""]},
        {"id": "hearing", "topic": "everyday", "question": ["Which sense helps you hear a bird singing?", "أي حاسة تساعدك على سماع تغريد الطيور؟"], "answers": [["Hearing", "السمع"], ["Taste", "التذوق"], ["Smell", "الشم"]], "correct": 0, "explanation": ["Our ears help us detect sounds.", "تساعدنا آذاننا على إدراك الأصوات."], "hint": ["", ""]},
        {"id": "see", "topic": "everyday", "question": ["Which sense helps you notice the color of a flower?", "أي حاسة تساعدك على ملاحظة لون زهرة؟"], "answers": [["Sight", "البصر"], ["Hearing", "السمع"], ["Taste", "التذوق"]], "correct": 0, "explanation": ["Our eyes detect light, helping us see colors.", "تستقبل أعيننا الضوء، مما يساعدنا على رؤية الألوان."], "hint": ["", ""]},
        {"id": "melt", "topic": "everyday", "question": ["What usually happens to an ice cube in a warm room?", "ماذا يحدث عادة لمكعب جليد في غرفة دافئة؟"], "answers": [["It melts into liquid water", "ينصهر إلى ماء سائل"], ["It becomes a stone", "يصبح حجرًا"], ["It grows leaves", "تنمو له أوراق"]], "correct": 0, "explanation": ["Heat from the warmer surroundings can melt ice into water.", "يمكن للحرارة من الوسط الأدفأ أن تصهر الجليد إلى ماء."], "hint": ["", ""]}
    ];
    const perTopic = 2;
    const find = key => root.querySelector(`[data-quiz-${key}]`);
    const starIcons = [...root.querySelectorAll('[data-quiz-star]')];
    const illustrations = new Map([...root.querySelectorAll('[data-explorer-art]')].map(template => [template.dataset.explorerArt, template]));
    const shuffle = items => {
        const result = [...items];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    };
    function makeSession() {
        const topics = [...new Set(bank.map(item => item.topic))];
        const chosen = topics.flatMap(topic => shuffle(bank.filter(item => item.topic === topic)).slice(0, perTopic));
        const remaining = shuffle(bank.filter(item => !chosen.includes(item)));
        return shuffle([...chosen, ...remaining.slice(0, 10 - chosen.length)]);
    }
    function bilingual(key, en, ar) {
        find(`${key}-en`).textContent = en;
        find(`${key}-ar`).textContent = ar;
    }
    function label(button, text) {
        text.forEach((value, i) => {
            const span = document.createElement('span');
            span.className = i ? 'lang-ar' : 'lang-en'; span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr';
            span.textContent = value; button.append(span);
        });
    }
    let questions = [], index = 0, stars = 0, firstTry = true, solved = false, active = false;
    let options = [];
    function progress() {
        bilingual('progress', `Question ${index + 1} of 10`, `السؤال ${index + 1} من 10`);
        bilingual('stars', `${stars} out of 10 stars earned`, `جمعت ${stars} من أصل 10 نجوم`);
        starIcons.forEach((icon, i) => { icon.dataset.earned = String(i < stars); });
    }
    function render() {
        const question = questions[index]; firstTry = true; solved = false;
        find('art').replaceChildren(illustrations.get(question.id).content.cloneNode(true));
        find('success').hidden = true;
        bilingual('question', ...question.question); bilingual('feedback', '', ''); progress();
        find('explanation').hidden = true; find('next').disabled = true;
        if (find('hint-text')) find('hint-text').hidden = true;
        options = shuffle(question.answers.map((text, i) => ({ text, correct: i === question.correct })));
        find('answers').replaceChildren();
        options.forEach((option, i) => {
            const button = document.createElement('button'); button.type = 'button'; button.className = 'science-answer';
            label(button, option.text); button.addEventListener('click', () => choose(i)); find('answers').append(button);
        });
        find('question').focus();
    }
    function start() {
        questions = makeSession(); index = stars = 0; active = true;
        find('start').hidden = true; find('results').hidden = true; find('round').hidden = false; render();
    }
    function choose(option) {
        if (!active || solved || !options[option]) return;
        if (!options[option].correct) { firstTry = false; bilingual('feedback', 'Good thinking! Try another answer. You can do it!', 'محاولة جيدة! جرّب إجابة أخرى. أنت تستطيع!'); return; }
        solved = true; if (firstTry) stars++;
        find('success').hidden = false;
        bilingual('feedback', 'Great job!', 'أحسنت!');
        bilingual('explanation', ...questions[index].explanation); find('explanation').hidden = false; progress();
        [...find('answers').children].forEach(button => { button.disabled = true; });
        find('next').disabled = false; find('next').focus();
    }
    function next() {
        if (!active || !solved) return;
        index++;
        if (index < 10) return render();
        active = false; find('round').hidden = true; find('results').hidden = false;
        bilingual('total', `You earned ${stars} out of 10 stars!`, `جمعت ${stars} من أصل 10 نجوم!`); find('results-title').focus();
    }
    find('start').addEventListener('click', start); find('again').addEventListener('click', start); find('next').addEventListener('click', next);
    if (find('hint')) find('hint').addEventListener('click', () => {
        if (!active) return;
        bilingual('hint', ...questions[index].hint); find('hint-text').hidden = false;
    });
})();
