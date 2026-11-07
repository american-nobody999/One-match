//Author: Leslie Brockman
//Date:11-07-2026
// Standalone bilingual science quiz. State stays inside this activity.
'use strict';
(() => {
    const root = document.getElementById('science-lab');
    if (!root) return;
    const bank = [
        {"id": "ice", "topic": "matter", "question": ["An ice cube gains enough heat to melt. What changes?", "يكتسب مكعب جليد حرارة كافية لينصهر. ما الذي يتغيّر؟"], "answers": [["Its state: solid to liquid", "حالته: من صلب إلى سائل"], ["Water becomes a new element", "يتحوّل الماء إلى عنصر جديد"], ["Gravity disappears", "تختفي الجاذبية"]], "correct": 0, "explanation": ["Melting changes the state, but the substance is still water.", "يغيّر الانصهار الحالة، لكن المادة تبقى ماءً."], "hint": ["Think about solid ice and liquid water.", "فكّر في الجليد الصلب والماء السائل."]},
        {"id": "freeze", "topic": "matter", "question": ["Liquid water is cooled below its freezing point long enough. What is expected?", "يُبرّد ماء سائل إلى ما دون درجة تجمده مدة كافية. ماذا نتوقع؟"], "answers": [["It becomes solid ice", "يصبح جليدًا صلبًا"], ["It becomes iron", "يصبح حديدًا"], ["It loses all mass", "يفقد كتلته كلها"]], "correct": 0, "explanation": ["Cooling can turn liquid water into solid ice.", "يمكن للتبريد أن يحوّل الماء السائل إلى جليد صلب."], "hint": ["Think of the reverse of melting.", "فكّر في العملية العكسية للانصهار."]},
        {"id": "iron", "topic": "magnets", "question": ["A magnet approaches an ordinary iron paper clip. What is likely?", "يقترب مغناطيس من مشبك ورق حديدي عادي. ما المتوقع؟"], "answers": [["The clip is attracted", "ينجذب المشبك"], ["The clip turns to water", "يتحوّل المشبك إلى ماء"], ["The clip grows heavier forever", "يستمر ازدياد وزن المشبك إلى الأبد"]], "correct": 0, "explanation": ["Iron is attracted to magnets; many other materials are not.", "ينجذب الحديد إلى المغناطيس؛ بخلاف كثير من المواد الأخرى."], "hint": ["Consider which material the clip is made from.", "فكّر في المادة التي صُنع منها المشبك."]},
        {"id": "poles", "topic": "magnets", "question": ["Two north poles of magnets face each other. What happens?", "يتواجه قطبان شماليان لمغناطيسين. ماذا يحدث؟"], "answers": [["They repel", "يتنافران"], ["They always attract", "يتجاذبان دائمًا"], ["They melt", "ينصهران"]], "correct": 0, "explanation": ["Like magnetic poles repel; unlike poles attract.", "تتنافر الأقطاب المغناطيسية المتشابهة، وتتجاذب الأقطاب المختلفة."], "hint": ["Compare like poles with unlike poles.", "قارن الأقطاب المتشابهة بالأقطاب المختلفة."]},
        {"id": "shadow", "topic": "light", "question": ["Why does an opaque book cast a shadow when placed in a beam of light?", "لماذا يلقي كتاب معتم ظلًا عندما يوضع في حزمة ضوء؟"], "answers": [["It blocks the light", "يحجب الضوء"], ["It creates darkness as a substance", "يصنع الظلام كمادة"], ["It removes gravity", "يزيل الجاذبية"]], "correct": 0, "explanation": ["A shadow forms where an opaque object blocks light from reaching a surface.", "يتكوّن الظل حيث يمنع جسم معتم الضوء من الوصول إلى سطح."], "hint": ["Opaque means light does not pass through.", "المعتم هو ما لا يسمح بمرور الضوء عبره."]},
        {"id": "glass", "topic": "light", "question": ["Which material lets most visible light pass through it?", "أي مادة تسمح بمرور معظم الضوء المرئي عبرها؟"], "answers": [["Clean transparent glass", "زجاج شفاف نظيف"], ["A thick brick", "طوبة سميكة"], ["A wooden board", "لوح خشبي"]], "correct": 0, "explanation": ["Transparent glass lets much visible light pass through.", "يسمح الزجاج الشفاف بمرور قدر كبير من الضوء المرئي."], "hint": ["Think about a clear window.", "فكّر في نافذة شفافة."]},
        {"id": "fall", "topic": "gravity", "question": ["Why does a released ball near Earth’s surface fall toward the ground?", "لماذا تسقط كرة تُترك قرب سطح الأرض نحو الأرض؟"], "answers": [["Earth’s gravity pulls it", "تجذبها جاذبية الأرض"], ["Air always pushes it downward", "يدفعها الهواء إلى أسفل دائمًا"], ["Its color pulls it", "يجذبها لونها"]], "correct": 0, "explanation": ["Earth’s gravity attracts the ball toward Earth.", "تجذب جاذبية الأرض الكرة نحو الأرض."], "hint": ["The same force keeps us on the ground.", "إنها القوة نفسها التي تبقينا على الأرض."]},
        {"id": "up", "topic": "gravity", "question": ["A ball is thrown straight up. Ignoring air resistance, why does it slow as it rises?", "تُرمى كرة رأسيًا إلى أعلى. بإهمال مقاومة الهواء، لماذا تتباطأ أثناء صعودها؟"], "answers": [["Gravity acts downward", "تؤثر الجاذبية إلى أسفل"], ["Gravity stops acting", "تتوقف الجاذبية عن التأثير"], ["It runs out of color", "ينفد لونها"]], "correct": 0, "explanation": ["Gravity pulls downward even while the ball moves upward.", "تسحب الجاذبية الكرة إلى أسفل حتى وهي تتحرك إلى أعلى."], "hint": ["Compare the direction of motion with the direction of gravity.", "قارن اتجاه الحركة باتجاه الجاذبية."]},
        {"id": "rust", "topic": "changes", "question": ["Why is iron rusting described as a chemical change?", "لماذا يُعدّ صدأ الحديد تغيرًا كيميائيًا؟"], "answers": [["New substances form", "تتكوّن مواد جديدة"], ["Only its size changes", "يتغيّر حجمه فقط"], ["Iron becomes colder only", "يصبح الحديد أبرد فقط"]], "correct": 0, "explanation": ["Rusting involves reactions that form new substances, including iron oxides.", "يتضمن الصدأ تفاعلات تُنتج مواد جديدة، منها أكاسيد الحديد."], "hint": ["Ask whether the material is still only iron.", "اسأل نفسك: هل ما زالت المادة حديدًا فقط؟"]},
        {"id": "tear", "topic": "changes", "question": ["Why is tearing paper usually a physical change?", "لماذا يُعدّ تمزيق الورق عادة تغيرًا فيزيائيًا؟"], "answers": [["Its shape changes, but it remains paper", "يتغيّر شكله لكنه يبقى ورقًا"], ["It becomes a new element", "يصبح عنصرًا جديدًا"], ["It changes into a gas", "يتحوّل إلى غاز"]], "correct": 0, "explanation": ["Tearing changes size and shape without making a new substance.", "يغيّر التمزيق الحجم والشكل دون تكوين مادة جديدة."], "hint": ["Compare the pieces with the original material.", "قارن القطع بالمادة الأصلية."]},
        {"id": "dry", "topic": "cause", "question": ["A wet cloth dries as its water enters the air. Which process explains this?", "يجف قماش مبلل عندما ينتقل ماؤه إلى الهواء. أي عملية تفسّر ذلك؟"], "answers": [["Evaporation", "التبخر"], ["Freezing", "التجمد"], ["Magnetic attraction", "التجاذب المغناطيسي"]], "correct": 0, "explanation": ["Liquid water can evaporate into invisible water vapor.", "يمكن للماء السائل أن يتبخر إلى بخار ماء غير مرئي."], "hint": ["Think of liquid water becoming a gas.", "فكّر في تحوّل الماء السائل إلى غاز."]},
        {"id": "echo", "topic": "cause", "question": ["A sound returns after bouncing from a distant hard wall. What caused the echo?", "يعود صوت بعد ارتداده عن جدار صلب بعيد. ما الذي سبّب الصدى؟"], "answers": [["Reflection of sound", "انعكاس الصوت"], ["A change in gravity", "تغيّر الجاذبية"], ["The wall making sunlight", "إنتاج الجدار لضوء الشمس"]], "correct": 0, "explanation": ["An echo is reflected sound heard after a delay.", "الصدى صوت منعكس يُسمع بعد فترة قصيرة."], "hint": ["Waves can bounce from surfaces.", "يمكن للموجات أن ترتد عن الأسطح."]}
    ];
    const perTopic = 1;
    const find = key => root.querySelector(`[data-quiz-${key}]`);
    const lab = key => root.querySelector(`[data-lab-${key}]`);
    const experimentTemplates = new Map([...root.querySelectorAll('[data-lab-experiment]')].map(template => [template.dataset.labExperiment, template]));
    const experiments = {
        "tear": [["Before: one sheet of paper.", "قبل التجربة: ورقة واحدة."], ["After: two pieces with new shapes. Both pieces are still paper.", "بعد التجربة: قطعتان بأشكال جديدة. ما زالت القطعتان ورقًا."]],
        "ice": [["Before: solid ice in warm surroundings.", "قبل التجربة: جليد صلب في وسط دافئ."], ["After: the ice has melted into liquid water, not vapor.", "بعد التجربة: انصهر الجليد إلى ماء سائل، وليس بخارًا."]],
        "freeze": [["Before: liquid water is being cooled below its freezing point.", "قبل التجربة: يُبرّد ماء سائل إلى ما دون درجة تجمده."], ["After sufficient cooling: solid ice forms. This model compresses the cooling time.", "بعد تبريد كافٍ: يتكوّن جليد صلب. يختصر هذا النموذج زمن التبريد."]],
        "iron": [["Before: an ordinary iron clip is near a magnet.", "قبل التجربة: مشبك حديدي عادي قرب مغناطيس."], ["After: the iron clip moves toward the magnet.", "بعد التجربة: يتحرك المشبك الحديدي نحو المغناطيس."]],
        "poles": [["Before: the two north poles (N) face each other.", "قبل التجربة: يتواجه القطبان الشماليان (N)."], ["After: like poles repel, moving the magnets apart.", "بعد التجربة: تتنافر الأقطاب المتشابهة فيبتعد المغناطيسان."]],
        "shadow": [["Before: light reaches the pale screen.", "قبل التجربة: يصل الضوء إلى الشاشة الفاتحة."], ["After: an opaque book blocks some light, creating a shadow on the screen.", "بعد التجربة: يحجب كتاب معتم بعض الضوء، فيتكوّن ظل على الشاشة."]],
        "glass": [["Before: a clear glass panel is below the beam.", "قبل التجربة: لوح زجاج شفاف أسفل الحزمة الضوئية."], ["After: most visible light passes through the clear glass and still lights the screen.", "بعد التجربة: يمر معظم الضوء المرئي عبر الزجاج الشفاف ويستمر في إضاءة الشاشة."]],
        "fall": [["Before: a ball is released near Earth’s surface.", "قبل التجربة: تُترك كرة قرب سطح الأرض."], ["After: the ball falls toward the ground under gravity.", "بعد التجربة: تسقط الكرة نحو الأرض بفعل الجاذبية."]],
        "up": [["Before: a ball is moving upward; the gold arrow shows downward gravity.", "قبل التجربة: تتحرك كرة إلى أعلى؛ ويشير السهم الذهبي إلى الجاذبية نحو الأسفل."], ["The ball slows as it rises. This final snapshot shows it near the top; gravity still acts downward.", "تتباطأ الكرة أثناء صعودها. تُظهر اللقطة النهائية الكرة قرب أعلى نقطة؛ وتظل الجاذبية مؤثرة نحو الأسفل."]],
        "rust": [["Time-lapse model: iron is exposed to moist air over many days, not an instant reaction.", "نموذج بزمن مضغوط: يتعرض الحديد لهواء رطب خلال أيام عديدة، وليس تفاعلًا لحظيًا."], ["Over time: rust forms new substances on the iron. The short animation compresses many days.", "مع مرور الوقت: يُنتج الصدأ مواد جديدة على الحديد. يختصر التحريك القصير أيامًا عديدة."]],
        "dry": [["Before: liquid water makes the cloth wet. The dotted arrows are a diagram.", "قبل التجربة: يبلل الماء السائل القماش. الأسهم المنقطة رسم توضيحي."], ["After: less liquid water remains. Invisible water vapor enters the air; the arrows represent it.", "بعد التجربة: تقل كمية الماء السائل. ينتقل بخار ماء غير مرئي إلى الهواء؛ وتمثله الأسهم."]],
        "echo": [["Before: sound travels from its source toward a hard wall.", "قبل التجربة: ينتقل الصوت من مصدره نحو جدار صلب."], ["After: the sound reflects from the wall and returns toward its source.", "بعد التجربة: ينعكس الصوت عن الجدار ويعود نحو مصدره."]]
    };
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
    let prediction = null, experimentPhase = '', replayOnly = false;
    let completionNode = null;
    const isExperiment = () => active && Boolean(experiments[questions[index]?.id]);
    function labText(key, en, ar) { lab(`${key}-en`).textContent = en; lab(`${key}-ar`).textContent = ar; }
    function progress() { bilingual('progress', `Experiment ${index + 1} of 10 · Stars: ${stars} ★`, `التجربة ${index + 1} من 10 · النجوم: ${stars} ★`); }
    function render() {
        const question = questions[index]; firstTry = true; solved = false;
        prediction = null; experimentPhase = 'predict'; replayOnly = false; root.dataset.labPhase = 'predict';
        lab('scene').replaceChildren(experimentTemplates.get(question.id).content.cloneNode(true));
        completionNode = lab('scene').querySelector('[data-lab-completion]');
        lab('time-note').hidden = question.id !== 'rust';
        lab('stage').hidden = lab('workbench').hidden = lab('controls').hidden = !isExperiment();
        lab('success').hidden = true; lab('run').hidden = false; lab('run').disabled = true; lab('replay').hidden = true;
        lab('workbench').dataset.experimentState = 'before';
        labText('stage', '1 — PREDICT', '1 — توقّع');
        labText('observation', ...experiments[questions[index].id][0]);
        labText('next', 'Next Experiment', 'التجربة التالية');
        find('next').hidden = true;
        bilingual('question', ...question.question); bilingual('feedback', '', ''); progress();
        find('explanation').hidden = true; find('next').disabled = true;
        if (find('hint-text')) find('hint-text').hidden = true;
        options = shuffle(question.answers.map((text, i) => ({ text, correct: i === question.correct })));
        find('answers').replaceChildren();
        options.forEach((option, i) => {
            const button = document.createElement('button'); button.type = 'button'; button.className = 'science-answer';
            label(button, option.text); button.setAttribute('aria-pressed', 'false'); button.addEventListener('click', () => choose(i)); find('answers').append(button);
        });
        find('question').focus();
    }
    function start() {
        questions = makeSession(); index = stars = 0; active = true;
        find('start').hidden = true; find('results').hidden = true; find('round').hidden = false; render();
    }
    function choose(option) {
        if (!active || solved || !options[option] || experimentPhase === 'running') return;
        prediction = option; experimentPhase = 'predict'; root.dataset.labPhase = 'predict';
        [...find('answers').children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === option)));
        lab('workbench').dataset.experimentState = 'before'; lab('run').hidden = false; lab('run').disabled = false; lab('replay').hidden = true;
        find('explanation').hidden = true; lab('success').hidden = true;
        labText('stage', '1 — PREDICT', '1 — توقّع');
        labText('observation', ...experiments[questions[index].id][0]);
        bilingual('feedback', 'Prediction saved. Run the experiment to discover what happens!', 'حُفظ توقّعك. شغّل التجربة لتكتشف ما يحدث!');
    }
    function resolveAnswer(option) {
        if (!active || solved || !options[option]) return;
        if (!options[option].correct) { firstTry = false; bilingual('feedback', 'Good thinking! Try another answer. You can do it!', 'محاولة جيدة! جرّب إجابة أخرى. أنت تستطيع!'); return; }
        solved = true; if (firstTry) stars++;
        bilingual('feedback', firstTry ? 'You found it! One star! ★' : 'You found it! Keep discovering!', firstTry ? 'أحسنت! نجمة واحدة! ★' : 'أحسنت! واصل الاكتشاف!');
        bilingual('explanation', ...questions[index].explanation); find('explanation').hidden = false; progress();
        [...find('answers').children].forEach(button => { button.disabled = true; });
        find('next').disabled = false; find('next').focus();
    }
    function next() {
        if (!active || !solved || experimentPhase === 'running') return;
        index++;
        if (index < 10) return render();
        active = false; find('round').hidden = true; find('results').hidden = false;
        bilingual('total', `You earned ${stars} out of 10 stars!`, `جمعت ${stars} من أصل 10 نجوم!`); find('results-title').focus();
    }
    function animateExperiment(onlyReplay) {
        if (!isExperiment() || experimentPhase === 'running' || prediction === null) return;
        if (onlyReplay && experimentPhase !== 'discover') return;
        if (!onlyReplay && solved) return;
        replayOnly = onlyReplay; experimentPhase = 'running'; root.dataset.labPhase = 'running';
        find('next').hidden = true;
        lab('run').disabled = lab('replay').disabled = find('next').disabled = true;
        [...find('answers').children].forEach(button => { button.disabled = true; });
        find('explanation').hidden = true; lab('success').hidden = true;
        labText('stage', '2 — EXPERIMENT', '2 — جرّب');
        labText('observation', 'Observe the change in the model.', 'لاحظ التغيّر في النموذج.');
        lab('workbench').dataset.experimentState = 'before';
        void lab('workbench').offsetWidth; // Reset the decorative animation for replay.
        lab('workbench').dataset.experimentState = 'after';
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || window.getComputedStyle(completionNode).animationName === 'none') finishExperiment();
    }
    function finishExperiment() {
        if (!isExperiment() || experimentPhase !== 'running') return;
        experimentPhase = 'discover'; root.dataset.labPhase = 'discover';
        labText('stage', '3 — DISCOVER', '3 — اكتشف');
        labText('observation', ...experiments[questions[index].id][1]);
        if (!replayOnly) resolveAnswer(prediction);
        else bilingual('feedback', 'Observation replayed. Your score stays the same.', 'أُعيد عرض الملاحظة. تبقى نتيجتك كما هي.');
        bilingual('explanation', ...questions[index].explanation); find('explanation').hidden = false;
        lab('success').hidden = !solved;
        lab('run').hidden = true; lab('replay').hidden = false; lab('replay').disabled = false;
        [...find('answers').children].forEach(button => { button.disabled = solved; });
        find('next').disabled = !solved; find('next').hidden = !solved;
        if (!replayOnly) (solved ? find('next') : find('answers').children[0]).focus();
    }
    lab('run').addEventListener('click', () => animateExperiment(false));
    lab('replay').addEventListener('click', () => animateExperiment(true));
    lab('scene').addEventListener('animationend', event => { if (event.target === completionNode) finishExperiment(); });
    lab('scene').addEventListener('animationcancel', event => { if (event.target === completionNode) finishExperiment(); });
    find('start').addEventListener('click', start); find('again').addEventListener('click', start); find('next').addEventListener('click', next);
    if (find('hint')) find('hint').addEventListener('click', () => {
        if (!active) return;
        bilingual('hint', ...questions[index].hint); find('hint-text').hidden = false;
    });
})();
