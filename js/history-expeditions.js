
//Author: Leslie Brockman
//date modified: 2026-11-11
// Chapter 1 higher expeditions reuse the original UI, journal and first-attempt scoring.
'use strict';
(() => {
    const root = document.getElementById('history-ancient-activity');
    if (!root?.historyReviewQuestions || typeof root.setExcavationLevel !== 'function') return;
    const level2New = [
    {
        "id": "explorer-water-evidence",
        "clue": "water",
        "question": [
            "What can the nearby spring reasonably tell us about the settlement?",
            "ماذا يمكن أن يخبرنا النبع القريب عن المستوطنة بصورة معقولة؟"
        ],
        "answers": [
            [
                "People had access to a water source.",
                "كان لدى الناس مصدر ماء يمكن الوصول إليه."
            ],
            [
                "We know every meal that each family ate.",
                "نعرف كل وجبة أكلتها كل عائلة."
            ],
            [
                "All buildings must belong to the same period.",
                "لا بد أن جميع المباني تعود إلى الفترة نفسها."
            ]
        ],
        "correct": 0,
        "explanation": [
            "The spring supports access to water; it does not reveal every household detail.",
            "يدعم النبع إمكانية الوصول إلى الماء؛ ولا يكشف كل تفاصيل حياة الأسر."
        ],
        "source": "https://whc.unesco.org/en/list/1687",
        "answerArt": [
            "water-1",
            "clues-2",
            "tower-wall-0"
        ],
        "illustration": "explorer-water-evidence"
    },
    {
        "id": "explorer-settlement-evidence",
        "clue": "settlement",
        "question": [
            "Which evidence best supports people living here in a permanent settlement?",
            "أي دليل يدعم بصورة أفضل سكن الناس هنا في مستوطنة دائمة؟"
        ],
        "answers": [
            [
                "An imagined overnight visit.",
                "زيارة ليلية متخيّلة."
            ],
            [
                "The documented settlement remains.",
                "بقايا المستوطنة الموثّقة."
            ],
            [
                "A story about a traveler with no physical evidence.",
                "قصة عن مسافر بلا دليل مادي."
            ]
        ],
        "correct": 1,
        "explanation": [
            "UNESCO describes permanent settlement. An imagined visit or story alone does not establish that.",
            "تصف اليونسكو استيطانًا دائمًا. لا تثبت زيارة متخيّلة أو قصة وحدها ذلك."
        ],
        "source": "https://whc.unesco.org/en/list/1687",
        "answerArt": [
            "settlement-0",
            "settlement-2",
            "clues-2"
        ],
        "illustration": "explorer-settlement-evidence"
    },
    {
        "id": "explorer-structure-evidence",
        "clue": "tower-wall",
        "question": [
            "Which statement keeps observation separate from an untested purpose?",
            "أي عبارة تفصل الملاحظة عن غرض لم يُختبر بالأدلة؟"
        ],
        "answers": [
            [
                "The wall proves that every structure had only a defensive use.",
                "يثبت السور أن كل منشأة كانت للدفاع فقط."
            ],
            [
                "All remains at the site must be Neolithic.",
                "لا بد أن كل البقايا في الموقع من العصر الحجري الحديث."
            ],
            [
                "A tower and wall survive; their exact uses need further evidence.",
                "يبقى برج وسور؛ وتحتاج استخداماتهما الدقيقة إلى أدلة إضافية."
            ]
        ],
        "correct": 2,
        "explanation": [
            "Surviving architecture is evidence of construction. An exclusive purpose needs testing.",
            "العمارة الباقية دليل على البناء. يحتاج الغرض الحصري إلى اختبار."
        ],
        "source": "https://whc.unesco.org/en/list/1687",
        "answerArt": [
            "evidence-0",
            "tower-wall-0",
            "evidence-1"
        ],
        "illustration": "explorer-structure-evidence"
    },
    {
        "id": "explorer-context",
        "clue": "evidence",
        "question": [
            "Why record where a find lies and what surrounds it?",
            "لماذا نسجّل موضع اللقية وما يحيط بها؟"
        ],
        "answers": [
            [
                "Context helps us interpret the evidence.",
                "يساعدنا السياق على تفسير الأدلة."
            ],
            [
                "Appearance alone always gives an exact date.",
                "يعطي المظهر وحده دائمًا تاريخًا دقيقًا."
            ],
            [
                "All objects from one site must be the same age.",
                "لا بد أن كل قطع الموقع الواحد من العمر نفسه."
            ]
        ],
        "correct": 0,
        "explanation": [
            "Relationships and context affect what remains can tell us. Shape alone is not enough.",
            "تؤثر العلاقات والسياق في المعلومات التي تقدمها البقايا. لا يكفي الشكل وحده."
        ],
        "source": "https://www.uwlax.edu/mvac/process-of-archaeology/interpretation/interpretation-introduction/",
        "answerArt": [
            "evidence-1",
            "clues-0",
            "clues-2"
        ],
        "illustration": "explorer-context"
    }
];
    const level3New = [
    {
        "id": "master-layers-context",
        "clue": "evidence",
        "question": [
            "The site has remains from different periods. How should researchers compare its layers?",
            "يضم الموقع بقايا من فترات مختلفة. كيف ينبغي للباحثين مقارنة طبقاته؟"
        ],
        "answers": [
            [
                "Assign every layer the date of the best-known tower.",
                "نعطي كل طبقة تاريخ البرج الأشهر."
            ],
            [
                "Study recorded contexts and evidence for each period.",
                "ندرس السياقات المسجّلة وأدلة كل فترة."
            ],
            [
                "Date each layer by the color of a modern photograph.",
                "نؤرّخ كل طبقة حسب لون صورة حديثة."
            ],
            [
                "Treat similar-looking objects as proof of one period.",
                "نعدّ تشابه القطع دليلًا على فترة واحدة."
            ]
        ],
        "correct": 1,
        "explanation": [
            "Recorded context helps distinguish periods. Similar appearance or one structure does not date every layer.",
            "يساعد السياق المسجّل على تمييز الفترات. لا يؤرّخ تشابه المظهر أو وجود منشأة واحدة كل الطبقات."
        ],
        "source": "https://saa.org/Member/SAAMember/About-Archaeology/What-is-Archaeology.aspx",
        "answerArt": [
            "tower-wall-0",
            "evidence-1",
            "clues-2",
            "clues-0"
        ],
        "illustration": "master-layers-context"
    },
    {
        "id": "master-evidence-interpretation",
        "clue": "tower-wall",
        "question": [
            "Which is documented physical evidence rather than a proposed explanation of purpose?",
            "أي عبارة دليل مادي موثّق، وليست تفسيرًا مقترحًا للغرض؟"
        ],
        "answers": [
            [
                "The tower could only have been a lookout.",
                "لا يمكن أن يكون البرج إلا للمراقبة."
            ],
            [
                "The builders certainly shared one reason for building.",
                "بالتأكيد اشترك البنّاؤون في سبب واحد للبناء."
            ],
            [
                "Every wall at the site had exactly the same use.",
                "كان لكل سور في الموقع الاستخدام نفسه تمامًا."
            ],
            [
                "A Neolithic tower and wall survive at Tell es-Sultan.",
                "يبقى برج وسور من العصر الحجري الحديث في تل السلطان."
            ]
        ],
        "correct": 3,
        "explanation": [
            "UNESCO documents these remains. Their existence does not establish one exact or exclusive use.",
            "توثّق اليونسكو هذه البقايا. ولا يثبت وجودها استخدامًا دقيقًا أو حصريًا واحدًا."
        ],
        "source": "https://whc.unesco.org/en/list/1687",
        "answerArt": [
            "evidence-0",
            "evidence-2",
            "tower-wall-0",
            "evidence-1"
        ],
        "illustration": "master-evidence-interpretation"
    },
    {
        "id": "master-supported-conclusion",
        "clue": "settlement",
        "question": [
            "Which conclusion best combines the spring, settlement remains and surviving architecture?",
            "أي استنتاج يجمع بصورة أفضل بين النبع وبقايا المستوطنة والعمارة الباقية؟"
        ],
        "answers": [
            [
                "People lived and built near water; exact uses still need investigation.",
                "عاش الناس وبنوا قرب الماء؛ وما زالت الاستخدامات الدقيقة تحتاج إلى بحث."
            ],
            [
                "Every structure was built only for defense.",
                "بُنيت كل منشأة للدفاع فقط."
            ],
            [
                "All families ate exactly the same foods.",
                "أكلت كل العائلات الأطعمة نفسها تمامًا."
            ],
            [
                "All archaeological layers belong to a single period.",
                "تعود كل الطبقات الأثرية إلى فترة واحدة."
            ]
        ],
        "correct": 0,
        "explanation": [
            "The evidence supports settlement, water access and construction, while leaving some interpretations open.",
            "تدعم الأدلة الاستيطان والوصول إلى الماء والبناء، مع بقاء بعض التفسيرات مفتوحة."
        ],
        "source": "https://whc.unesco.org/en/list/1687",
        "answerArt": [
            "settlement-2",
            "evidence-0",
            "clues-2",
            "tower-wall-0"
        ],
        "illustration": "master-supported-conclusion"
    }
];
    // Additional discoveries link to existing questions without changing their wording or scoring.
    const extraClues = {
        'explorer-water-evidence': 'water-context',
        'explorer-structure-evidence': 'stone-construction',
        'master-layers-context': 'settlement-layers',
        'master-evidence-interpretation': 'testing-interpretations'
    };
    [...level2New, ...level3New].forEach(question => { if (extraClues[question.id]) question.clue = extraClues[question.id]; });
    const originalView = root.querySelector('[data-expedition-level="1"]');
    const chapter = document.getElementById('history-ancient-palestine');
    const illustrations = new Map([...chapter.querySelectorAll('[data-ancient-illustration], [data-expedition-illustration]')].map(node => [node.dataset.ancientIllustration || node.dataset.expeditionIllustration, node]));
    const objects = new Map([...chapter.querySelectorAll('[data-ancient-object]')].map(node => [node.dataset.ancientObject, node]));
    const sources = {clues: 'https://saa.org/Member/SAAMember/About-Archaeology/What-is-Archaeology.aspx', evidence: 'https://www.uwlax.edu/mvac/process-of-archaeology/interpretation/interpretation-introduction/'};
    const reviews = root.historyReviewQuestions.map(question => ({...question, origin: 1, clue: question.id, illustration: question.id, source: sources[question.id] || 'https://whc.unesco.org/en/list/1687', answerArt: question.answers.map((_, i) => `${question.id}-${i}`)}));
    level2New.forEach(question => { question.origin = 2; }); level3New.forEach(question => { question.origin = 3; });
    function pair(node, english, arabic) {
        node.replaceChildren(); [english, arabic].forEach((text, i) => { const span = document.createElement('span'); span.className = i ? 'history-ar' : 'history-en'; span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; node.append(span); });
    }
    let cloneSequence = 0;
    function uniqueClone(source, prefix) {
        const clone = source.cloneNode(true), ids = new Map();
        if (clone.id) { ids.set(clone.id, `${prefix}-${clone.id}`); clone.id = ids.get(clone.id); }
        clone.querySelectorAll('[id]').forEach(node => { const old = node.id; node.id = `${prefix}-${old}`; ids.set(old, node.id); });
        [clone, ...clone.querySelectorAll('*')].filter(node => node.attributes).forEach(node => [...node.attributes].forEach(attribute => {
            let value = attribute.value;
            ids.forEach((replacement, original) => {
                value = value.split(`url(#${original})`).join(`url(#${replacement})`);
                if (value === `#${original}`) value = `#${replacement}`;
                if (['aria-labelledby', 'aria-describedby', 'aria-controls'].includes(attribute.name)) value = value.split(' ').map(id => id === original ? replacement : id).join(' ');
            });
            if (value !== attribute.value) node.setAttribute(attribute.name, value);
        })); return clone;
    }
    function shuffle(list) {
        const result = [...list]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result;
    }
    const sample = (list, count) => shuffle(list).slice(0, count);
    const arabicNumber = number => String(number).replace(/\d/g, digit => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]);
    const controllers = new Map();
    [2, 3].forEach(level => {
        const view = document.getElementById(`history-ancient-level${level}`);
        const content = uniqueClone(originalView, `expedition-${level}`); view.append(...content.children);
        view.dataset.expeditionLevel = String(level); view.classList.add('expedition-view'); view.hidden = true;
        const find = key => view.querySelector(`[data-ancient-${key}]`); const count = level === 2 ? 7 : 9;
        const starSource = originalView.querySelector('[data-ancient-star]'); const starRow = view.querySelector('.ancient-stars'); starRow.replaceChildren();
        for (let i = 0; i < count; i++) { const star = uniqueClone(starSource, `expedition-${level}-star-${i}`); star.dataset.earned = 'false'; starRow.append(star); }
        const citation = document.createElement('p'); citation.className = 'expedition-question-source';
        const citationLink = document.createElement('a'); citationLink.target = '_blank'; citationLink.rel = 'noopener noreferrer'; pair(citationLink, 'Research source', 'مصدر البحث'); citation.append(citationLink); find('round').append(citation);
        pair(find('results').querySelector('h5'), level === 2 ? 'Congratulations, Archaeological Explorer!' : 'Congratulations, Master Archaeologist!', level === 2 ? 'تهانينا أيها المستكشف الأثري!' : 'تهانينا يا عالم الآثار الخبير!');
        let round = [], previousOrder = '', index = 0, stars = 0, firstAttempt = true, solved = false, active = false;
        function progress() {
            view.querySelectorAll('[data-ancient-star]').forEach((star, i) => { star.dataset.earned = String(i < stars); });
            pair(find('progress'), `Question ${index + 1} of ${count}`, `السؤال ${arabicNumber(index + 1)} من ${arabicNumber(count)}`);
            pair(find('score'), `${stars} of ${count} stars earned`, `تم الحصول على ${arabicNumber(stars)} من أصل ${arabicNumber(count)} نجوم`);
        }
        function render() {
            const question = round[index]; firstAttempt = true; solved = false;
            view.dataset.questionId = question.id; view.dataset.questionSource = String(question.origin); view.dataset.notebookClue = question.clue;
            pair(find('mission'), 'Observe, investigate, and explain', 'لاحظ وابحث وفسّر'); pair(find('question'), ...question.question);
            const template = illustrations.get(question.illustration); find('art').replaceChildren(uniqueClone(template.content, `expedition-art-${++cloneSequence}`));
            find('feedback').textContent = ''; find('explanation').textContent = ''; find('explanation').hidden = true; find('next').disabled = true;
            find('answers').replaceChildren(); find('answers').dataset.choiceCount = String(question.answers.length);
            question.answers.forEach((answer, choice) => {
                const button = document.createElement('button'); button.type = 'button'; button.className = 'ancient-answer'; button.setAttribute('aria-pressed', 'false');
                button.append(uniqueClone(objects.get(question.answerArt[choice]).content, `expedition-answer-${++cloneSequence}`));
                const label = document.createElement('span'); pair(label, ...answer); button.append(label); button.addEventListener('click', () => choose(choice)); find('answers').append(button);
            });
            citationLink.href = question.source; progress(); find('mission').focus();
        }
        function start() {
            const picked = level === 2 ? [...sample(reviews, 3), ...level2New] : [...sample(reviews, 3), ...sample(level2New, 3), ...level3New];
            round = shuffle(picked); if (round.map(q => q.id).join('|') === previousOrder) round.push(round.shift()); previousOrder = round.map(q => q.id).join('|');
            index = stars = 0; active = true; find('start').hidden = true; find('results').hidden = true; find('round').hidden = false; render();
        }
        function choose(choice) {
            if (!active || solved || !Number.isInteger(choice) || !round[index].answers[choice]) return;
            [...find('answers').children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === choice)));
            find('answers').children[choice].dataset.selection = choice === round[index].correct ? 'found' : 'revisit';
            if (choice !== round[index].correct) { firstAttempt = false; pair(find('feedback'), 'Keep exploring! Try another answer. You can try as often as you like.', 'واصل الاستكشاف! جرّب إجابة أخرى. يمكنك المحاولة كما تشاء.'); return; }
            solved = true; if (firstAttempt) stars++;
            pair(find('feedback'), firstAttempt ? 'Great discovery! You earned one gold star! ★' : 'Great discovery! You found the evidence!', firstAttempt ? 'اكتشاف رائع! حصلت على نجمة ذهبية! ★' : 'اكتشاف رائع! وجدت الدليل!');
            pair(find('explanation'), ...round[index].explanation); find('explanation').hidden = false;
            [...find('answers').children].forEach(button => { button.disabled = true; }); find('next').disabled = false; progress();
        }
        function next() {
            if (!active || !solved) return; index++; if (index < count) { render(); return; }
            active = false; find('round').hidden = true; find('results').hidden = false;
            pair(find('total'), `You earned ${stars} out of ${count} gold stars! ★`, `حصلت على ${arabicNumber(stars)} من أصل ${arabicNumber(count)} نجوم ذهبية! ★`); find('results').querySelector('h5').focus();
        }
        find('start').hidden = false; find('start').addEventListener('click', start); find('again').addEventListener('click', start); find('next').addEventListener('click', next);
        progress(); controllers.set(level, {view});
    });
    const titles = [['Junior Archaeologist!', 'عالم الآثار الصغير'], ['Archaeological Explorer!', 'المستكشف الأثري'], ['Master Archaeologist!', 'عالم الآثار الخبير']];
    const labels = [['Level 1', 'المستوى الأول'], ['Level 2', 'المستوى الثاني'], ['Level 3', 'المستوى الثالث']];
    const selector = chapter.querySelector('[data-ancient-level-selector]');
    const heading = document.getElementById('ancient-activity-title');
    function select(level) {
        originalView.hidden = level !== 1; controllers.forEach((controller, number) => { controller.view.hidden = level !== number; });
        chapter.querySelectorAll('[data-expedition-intro]').forEach(intro => { intro.hidden = Number(intro.dataset.expeditionIntro) !== level; });
        selector.querySelectorAll('[data-ancient-level]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.ancientLevel) === level)));
        pair(heading.querySelector('.ancient-level-label'), ...labels[level - 1]);
        heading.querySelector(':scope > .history-en').textContent = titles[level - 1][0]; heading.querySelector(':scope > .history-ar').textContent = titles[level - 1][1];
        root.setExcavationLevel(level); root.setNotebookLevel(level); heading.tabIndex = -1; heading.focus();
    }
    selector.querySelectorAll('[data-ancient-level]').forEach(button => { button.disabled = false; button.addEventListener('click', () => select(Number(button.dataset.ancientLevel))); });
    selector.hidden = false;
})();
