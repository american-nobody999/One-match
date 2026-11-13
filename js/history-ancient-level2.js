//Author: Leslie Brockman
//date modified: 2026-11-11
// Chapter 1 Level 2: independent, in-memory investigation. Level 1 is never rebuilt. DO NOT TOUCH ME!
'use strict';
(() => {
    const root = document.getElementById('history-ancient-level2');
    if (!root) return;
    const find = key => root.querySelector(`[data-detective-${key}]`);
    const stations = [
        { id: 'spring', title: ['The Spring', 'النبع'],
            kind: ['Documented site evidence · UNESCO', 'دليل موثّق من الموقع · اليونسكو'],
            description: ['‘Ain es-Sultan is a spring beside the site. It provided water for inhabitants.', 'عين السلطان نبع بجوار الموقع. وفّر الماء للسكان.'],
            question: ['Which note stays close to this evidence?', 'أي ملاحظة تلتزم بهذا الدليل؟'],
            answers: [['There was access to a nearby water source.', 'كان هناك مصدر ماء قريب يمكن الوصول إليه.'], ['The spring tells us the name of every family.', 'يخبرنا النبع باسم كل عائلة.']], correct: 0,
            note: ['The spring supports access to water, not people’s names.', 'يدعم النبع وجود مصدر ماء، ولا يكشف أسماء الناس.'] },
        { id: 'settlement', title: ['The Settlement', 'المستوطنة'],
            kind: ['Documented Neolithic evidence · UNESCO', 'دليل موثّق من العصر الحجري الحديث · اليونسكو'],
            description: ['UNESCO describes a permanent Neolithic settlement here.', 'تصف اليونسكو مستوطنة دائمة من العصر الحجري الحديث هنا.'],
            question: ['What does permanent settlement support?', 'ماذا تدعم المستوطنة الدائمة؟'],
            answers: [['Every family stayed for exactly the same number of years.', 'بقيت كل عائلة العدد نفسه من السنوات تمامًا.'], ['People lived at the site rather than only visiting once.', 'عاش الناس في الموقع، ولم يزوروه مرة واحدة فقط.']], correct: 1,
            note: ['Settlement remains support people living here, not exact stays for each family.', 'تدعم بقايا المستوطنة سكن الناس هنا، لا مدة إقامة كل عائلة بدقة.'] },
        { id: 'structures', title: ['The Stone Structures', 'المنشآت الحجرية'],
            kind: ['Documented Neolithic evidence · UNESCO', 'دليل موثّق من العصر الحجري الحديث · اليونسكو'],
            description: ['A stone tower and wall survive from the Neolithic settlement.', 'يبقى برج وسور حجريان من مستوطنة العصر الحجري الحديث.'],
            question: ['Which is an observation rather than a claim about purpose?', 'أي عبارة ملاحظة وليست ادعاءً عن الغرض؟'],
            answers: [['Stone structures survive.', 'تبقى منشآت حجرية.'], ['The tower was certainly used only as a watchtower.', 'استُخدم البرج بالتأكيد للمراقبة فقط.']], correct: 0,
            note: ['Surviving structures show construction. Their exact purposes need further evidence.', 'تدل المنشآت الباقية على البناء. تحتاج أغراضها الدقيقة إلى أدلة إضافية.'] },
        { id: 'layers', title: ['The Archaeological Layers', 'الطبقات الأثرية'],
            kind: ['Site periods: UNESCO · Context method: SAA', 'فترات الموقع: اليونسكو · منهج السياق: جمعية علم الآثار الأمريكية'],
            description: ['The site includes Neolithic and Bronze Age remains. Archaeologists study where remains lie and how they relate; they do not assume everything is the same age.', 'يضم الموقع بقايا من العصر الحجري الحديث والعصر البرونزي. يدرس علماء الآثار مواضع البقايا وعلاقاتها؛ ولا يفترضون أن كل شيء من العمر نفسه.'],
            question: ['How should we compare remains from different layers?', 'كيف نقارن بقايا من طبقات مختلفة؟'],
            answers: [['Give them all the same date because they share one site.', 'نعطيها التاريخ نفسه لأنها في موقع واحد.'], ['Study their recorded context before comparing periods.', 'ندرس سياقها المسجّل قبل مقارنة الفترات.']], correct: 1,
            note: ['Context helps distinguish periods. Neolithic and Bronze Age remains must not be mixed.', 'يساعد السياق على تمييز الفترات. يجب عدم خلط بقايا العصر الحجري الحديث ببقايا العصر البرونزي.'] },
        { id: 'mystery', title: ['The Mystery Object', 'القطعة الغامضة'],
            kind: ['Hypothetical practice object · Not a Tell es-Sultan find', 'قطعة تدريب افتراضية · ليست لقية من تل السلطان'],
            description: ['Imagine a small clay pot with no find record. This is an invented classroom example, not an excavated Jericho object.', 'تخيّل إناءً طينيًا صغيرًا بلا سجل اكتشاف. هذا مثال صفي خيالي، وليس قطعة مكتشفة في أريحا.'],
            question: ['Can its shape alone prove that it held grain?', 'هل يثبت شكله وحده أنه احتوى على حبوب؟'],
            answers: [['No. We need context and further evidence to test that idea.', 'لا. نحتاج إلى السياق وأدلة إضافية لاختبار هذه الفكرة.'], ['Yes. A pot shape proves its exact contents.', 'نعم. يثبت شكل الإناء محتوياته الدقيقة.']], correct: 0,
            note: ['The imaginary pot’s contents are unknown. Shape alone does not establish use.', 'محتويات الإناء الخيالي مجهولة. لا يثبت الشكل وحده الاستخدام.'] }
    ];
    const observations = [
        ['Nearby spring', 'نبع قريب'], ['Settlement remains', 'بقايا مستوطنة'],
        ['Surviving stone structures', 'منشآت حجرية باقية'], ['Different archaeological layers', 'طبقات أثرية مختلفة']
    ];
    const conclusions = [
        ['Access to a water source', 'إمكانية الوصول إلى مصدر ماء'], ['Evidence of people living at the site', 'دليل على سكن الناس في الموقع'],
        ['Evidence of past construction', 'دليل على بناء في الماضي'], ['Context is needed to interpret periods', 'السياق ضروري لتفسير الفترات']
    ];
    const reasoning = [
        { text: ['Stone architectural remains support past construction.', 'تدعم البقايا المعمارية الحجرية حدوث بناء في الماضي.'], correct: true,
            explanation: ['The structures are physical evidence; this does not fix their exact use.', 'المنشآت أدلة مادية؛ وهذا لا يحدّد استخدامها الدقيق.'] },
        { text: ['The documented spring supports a nearby water source.', 'يدعم النبع الموثّق وجود مصدر ماء قريب.'], correct: true,
            explanation: ['The spring is documented. It does not tell us every detail of daily life.', 'النبع موثّق. لكنه لا يخبرنا بكل تفاصيل الحياة اليومية.'] },
        { text: ['The Neolithic tower was certainly used only to watch for enemies.', 'استُخدم برج العصر الحجري الحديث بالتأكيد لمراقبة الأعداء فقط.'], correct: false,
            explanation: ['A surviving tower does not establish one exclusive purpose. This claim needs more evidence.', 'لا يثبت بقاء برج غرضًا وحيدًا له. يحتاج هذا الادعاء إلى أدلة إضافية.'] },
        { text: ['Our imaginary pot proves that Jericho families stored grain in it.', 'يثبت إناؤنا الخيالي أن عائلات أريحا خزّنت الحبوب فيه.'], correct: false,
            explanation: ['It is hypothetical, with no find record or contents evidence. It cannot prove a Jericho practice.', 'إنه افتراضي بلا سجل اكتشاف أو دليل على محتوياته. لا يمكنه إثبات ممارسة في أريحا.'] }
    ];
    const finalEvidence = [
        ['UNESCO’s permanent-settlement description', 'وصف اليونسكو للمستوطنة الدائمة'],
        ['The documented nearby spring', 'النبع القريب الموثّق'],
        ['Surviving Neolithic stone architecture', 'العمارة الحجرية الباقية من العصر الحجري الحديث'],
        ['Different site periods, interpreted using context', 'فترات مختلفة في الموقع تُفسّر باستخدام السياق'],
        ['The tower’s height proves that guarding was its only purpose', 'يثبت ارتفاع البرج أن الحراسة كانت غرضه الوحيد'],
        ['The imaginary pot proves exactly what families ate', 'يثبت الإناء الخيالي ما أكلته العائلات بدقة']
    ];
    const finalConclusion = ['People settled and built near water. Different periods need context; exact uses remain questions to investigate.', 'استقر الناس وبنوا قرب الماء. تحتاج الفترات المختلفة إلى السياق؛ وتبقى الاستخدامات الدقيقة أسئلة للتحقيق.'];
    const stageTitles = [['Five clues recorded', 'تسجيل الأدلة الخمسة'], ['Four evidence pairs connected', 'ربط أربعة أزواج من الأدلة'], ['Four claims examined', 'فحص أربعة ادعاءات'], ['Conclusion supported', 'دعم الاستنتاج']];
    let recorded, investigated, matched, reasoned, selectedEvidence, mistakes, complete, selectedObservation, currentStation;
    function pair(element, english, arabic) {
        element.replaceChildren();
        [english, arabic].forEach((text, i) => {
            const span = document.createElement('span'); span.className = i ? 'history-ar' : 'history-en';
            span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; element.append(span);
        });
    }
    function button(text, handler) {
        const element = document.createElement('button'); element.type = 'button'; pair(element, ...text);
        element.addEventListener('click', handler); return element;
    }
    function stageState() { return [recorded.size === 5, matched.size === 4, reasoned.size === 4, complete]; }
    function stars() { return stageState().filter(Boolean).length + (complete && mistakes === 0 ? 1 : 0); }
    function updateNotebook() {
        const count = stars();
        root.querySelectorAll('[data-detective-star]').forEach((star, i) => { star.dataset.earned = String(i < count); });
        pair(find('score'), `${count} of 5 stars earned`, `تم الحصول على ${count} من أصل 5 نجوم`);
        find('stages').replaceChildren();
        stageTitles.forEach((title, i) => {
            const li = document.createElement('li'); const done = stageState()[i];
            pair(li, `${done ? '✓ Complete' : '○ In progress'} — ${title[0]}`, `${done ? '✓ مكتمل' : '○ قيد العمل'} — ${title[1]}`);
            find('stages').append(li);
        });
        find('notes').replaceChildren();
        if (!recorded.size) { const li = document.createElement('li'); pair(li, 'Your discoveries will appear here.', 'ستظهر اكتشافاتك هنا.'); find('notes').append(li); }
        stations.filter(station => recorded.has(station.id)).forEach(station => {
            const li = document.createElement('li'); pair(li, `${station.title[0]}: ${station.note[0]}`, `${station.title[1]}: ${station.note[1]}`); find('notes').append(li);
        });
        pair(find('notebook-conclusion'), ...(complete ? finalConclusion : ['Keep investigating before drawing your conclusion.', 'واصل التحقيق قبل صياغة استنتاجك.']));
        ['matching', 'reasoning', 'final'].forEach((key, i) => {
            const unlocked = stageState()[i]; find(`${key}-body`).hidden = !unlocked; find(`${key}-locked`).hidden = unlocked;
        });
        find('solve').disabled = !stageState().slice(0, 3).every(Boolean) || complete;
    }
    function syncName() {
        ['en', 'ar'].forEach(language => {
            find(`name-${language}`).textContent = document.querySelector(`[data-history-name-${language}]`).textContent;
        });
    }
    function openStation(id) {
        const station = stations.find(item => item.id === id); if (!station) return;
        currentStation = station;
        document.getElementById('detective-station-panel').hidden = false;
        root.querySelectorAll('[data-detective-station]').forEach(control => control.setAttribute('aria-expanded', String(control.dataset.detectiveStation === id)));
        pair(document.getElementById('detective-station-title'), ...station.title);
        pair(find('kind'), ...station.kind); pair(find('description'), ...station.description); pair(find('station-question'), ...station.question);
        find('station-answers').replaceChildren(); find('station-feedback').textContent = '';
        const solved = investigated.has(id); find('record').disabled = !solved || recorded.has(id);
        station.answers.forEach((answer, choice) => {
            const control = button(answer, () => {
                if (investigated.has(id)) return;
                if (choice !== station.correct) {
                    mistakes++;
                    pair(find('station-feedback'), 'That goes beyond the clue. Check what was observed and what still needs testing. Try again.', 'هذا يتجاوز الدليل. راجع ما لوحظ وما يحتاج إلى اختبار. حاول مرة أخرى.');
                    return;
                }
                investigated.add(id); find('record').disabled = false;
                pair(find('station-feedback'), `Careful reasoning! ${station.note[0]} Now record your discovery.`, `تفكير متأنٍ! ${station.note[1]} سجّل اكتشافك الآن.`);
                [...find('station-answers').children].forEach(item => { item.disabled = true; });
            });
            control.disabled = solved; find('station-answers').append(control);
        });
        if (solved) pair(find('station-feedback'), ...station.note);
        document.getElementById('detective-station-title').focus();
    }
    function renderMatching() {
        find('observations').replaceChildren(); find('conclusions').replaceChildren();
        observations.forEach((text, index) => {
            const control = button(matched.has(index) ? [`✓ Connected: ${text[0]}`, `✓ مرتبط: ${text[1]}`] : text, () => {
                if (matched.has(index)) return;
                selectedObservation = index;
                [...find('observations').children].forEach((item, i) => item.setAttribute('aria-pressed', String(i === index)));
                pair(find('matching-feedback'), `Selected: ${text[0]}. Choose its conclusion.`, `اخترت: ${text[1]}. اختر الاستنتاج المناسب.`);
            });
            control.setAttribute('aria-pressed', 'false'); control.disabled = matched.has(index); find('observations').append(control);
        });
        [2, 0, 3, 1].forEach(index => {
            const text = conclusions[index];
            const control = button(matched.has(index) ? [`✓ ${text[0]}`, `✓ ${text[1]}`] : text, () => {
                if (recorded.size !== 5 || matched.has(index)) return;
                if (selectedObservation === null) { pair(find('matching-feedback'), 'Select an observation first.', 'اختر ملاحظة أولًا.'); return; }
                if (selectedObservation !== index) {
                    mistakes++;
                    pair(find('matching-feedback'), 'This conclusion belongs with different evidence. Ask what the selected observation actually shows, then try again.', 'يرتبط هذا الاستنتاج بدليل آخر. اسأل عمّا تُظهره الملاحظة المختارة فعلًا، ثم حاول مرة أخرى.'); return;
                }
                matched.add(index); selectedObservation = null;
                pair(find('matching-feedback'), `Connected: ${observations[index][0]} → ${text[0]}.`, `تم الربط: ${observations[index][1]} ← ${text[1]}.`);
                renderMatching(); updateNotebook();
                if (matched.size === 4) document.getElementById('detective-reasoning-title').focus();
                else [...find('observations').children].find(item => !item.disabled).focus();
            });
            control.disabled = matched.has(index); find('conclusions').append(control);
        });
    }
    function renderReasoning() {
        find('reasoning-challenges').replaceChildren();
        reasoning.forEach((challenge, index) => {
            const section = document.createElement('section'); section.className = 'detective-reasoning-card';
            const heading = document.createElement('h6'); pair(heading, `${index + 1}. ${challenge.text[0]}`, `${index + 1}. ${challenge.text[1]}`); section.append(heading);
            const options = document.createElement('div'); options.className = 'detective-options'; section.append(options);
            const explanation = document.createElement('p'); explanation.setAttribute('role', 'status'); explanation.setAttribute('aria-live', 'polite'); explanation.setAttribute('aria-atomic', 'true');
            [true, false].forEach(value => {
                const control = button(value ? ['Supported by Evidence', 'تدعمه الأدلة'] : ['Needs More Evidence', 'يحتاج إلى مزيد من الأدلة'], () => {
                    if (matched.size !== 4 || reasoned.has(index)) return;
                    if (value !== challenge.correct) {
                        mistakes++; pair(explanation, `Look again. ${challenge.explanation[0]} Try the other category.`, `راجع العبارة. ${challenge.explanation[1]} جرّب التصنيف الآخر.`); return;
                    }
                    reasoned.add(index);
                    pair(explanation, `✓ Recorded. ${challenge.explanation[0]}`, `✓ سُجّل. ${challenge.explanation[1]}`);
                    [...options.children].forEach(item => { item.disabled = true; }); updateNotebook();
                    if (reasoned.size === 4) document.getElementById('detective-final-title').focus();
                    else { const next = [...find('reasoning-challenges').children].find((_, i) => !reasoned.has(i)); next.querySelector('button').focus(); }
                });
                options.append(control);
            });
            section.append(explanation); find('reasoning-challenges').append(section);
        });
    }
    function renderFinal() {
        find('final-evidence').replaceChildren();
        finalEvidence.forEach((text, index) => {
            const control = button(text, () => {
                if (reasoned.size !== 4 || complete) return;
                if (selectedEvidence.has(index)) selectedEvidence.delete(index); else selectedEvidence.add(index);
                const selected = selectedEvidence.has(index);
                control.setAttribute('aria-pressed', String(selected));
                pair(control, ...(selected ? [`✓ Selected — ${text[0]}`, `✓ مختار — ${text[1]}`] : text));
            });
            control.setAttribute('aria-pressed', 'false'); find('final-evidence').append(control);
        });
    }
    find('record').addEventListener('click', () => {
        const id = currentStation?.id;
        if (!investigated.has(id) || recorded.has(id)) return;
        recorded.add(id); find('record').disabled = true;
        pair(root.querySelector(`[data-detective-station-status="${id}"]`), '✓ Recorded', '✓ سُجّل');
        pair(find('station-feedback'), 'Discovery recorded in your notebook. Choose another object, or continue to matching when all five are recorded.', 'سُجّل الاكتشاف في دفترك. اختر شيئًا آخر، أو انتقل إلى الربط بعد تسجيل الأدلة الخمسة.');
        updateNotebook();
        if (recorded.size === 5) document.getElementById('detective-matching-title').focus();
        else root.querySelector(`[data-detective-station="${stations.find(station => !recorded.has(station.id)).id}"]`).focus();
    });
    find('close').addEventListener('click', () => {
        document.getElementById('detective-station-panel').hidden = true;
        root.querySelectorAll('[data-detective-station]').forEach(control => control.setAttribute('aria-expanded', 'false'));
        root.querySelector(`[data-detective-station="${currentStation.id}"]`).focus();
    });
    find('solve').addEventListener('click', () => {
        if (!stageState().slice(0, 3).every(Boolean) || complete) return;
        const correct = selectedEvidence.size === 4 && [0, 1, 2, 3].every(index => selectedEvidence.has(index));
        if (!correct) {
            mistakes++;
            pair(find('final-feedback'), 'Review your case. Include the documented evidence and context notes; leave out claims about exact uses or the imaginary pot. You can change selections and retry.', 'راجع تحقيقك. أدرج الأدلة الموثّقة وملاحظات السياق؛ واترك ادعاءات الاستخدامات الدقيقة أو الإناء الخيالي. يمكنك تغيير الاختيارات والمحاولة مجددًا.'); return;
        }
        complete = true; updateNotebook();
        [...find('final-evidence').children].forEach(control => { control.disabled = true; });
        pair(find('final-feedback'), '✓ Your conclusion is supported by the selected evidence.', '✓ تدعم الأدلة المختارة استنتاجك.');
        find('completion').hidden = false;
        pair(find('total'), `You earned ${stars()} of 5 gold stars. ${mistakes === 0 ? 'Bonus star for careful first answers!' : 'You kept testing your ideas and completed every stage!'}`, `حصلت على ${stars()} من أصل 5 نجوم ذهبية. ${mistakes === 0 ? 'نجمة إضافية للإجابات الأولى المتأنية!' : 'واصلت اختبار أفكارك وأكملت كل المراحل!'}`);
        document.getElementById('detective-complete-title').focus();
    });
    function reset() {
        recorded = new Set(); investigated = new Set(); matched = new Set(); reasoned = new Set(); selectedEvidence = new Set();
        mistakes = 0; complete = false; selectedObservation = null; currentStation = null;
        document.getElementById('detective-station-panel').hidden = true; find('completion').hidden = true;
        root.querySelectorAll('[data-detective-station]').forEach(control => control.setAttribute('aria-expanded', 'false'));
        root.querySelectorAll('[data-detective-station-status]').forEach(status => pair(status, 'Not recorded', 'لم يُسجّل بعد'));
        ['matching-feedback', 'reasoning-feedback', 'final-feedback', 'station-feedback'].forEach(key => { find(key).textContent = ''; });
        renderMatching(); renderReasoning(); renderFinal(); updateNotebook(); syncName();
    }
    root.querySelectorAll('[data-detective-station]').forEach(control => control.addEventListener('click', () => openStation(control.dataset.detectiveStation)));
    find('replay').addEventListener('click', () => { reset(); document.getElementById('detective-title').focus(); });
    const level1 = document.getElementById('history-ancient-activity');
    const selector = document.querySelector('[data-ancient-level-selector]');
    selector.querySelectorAll('[data-ancient-level]').forEach(control => control.addEventListener('click', () => {
        const second = control.dataset.ancientLevel === '2'; level1.hidden = second; root.hidden = !second;
        selector.querySelectorAll('[data-ancient-level]').forEach(item => item.setAttribute('aria-pressed', String(item === control)));
        syncName();
        const title = document.getElementById(second ? 'detective-title' : 'ancient-activity-title'); title.tabIndex = -1; title.focus();
    }));
    // Add only verified supplied photographs here, keyed by station ID. Leave slots empty until supplied.
    // Schema: { src, description: [English, Arabic], attribution: [English, Arabic], sourceUrl,
    //           license: [English, Arabic] | null, prompt: [English, Arabic] }.
    // Preserve the supplied three-match-image/main/edu/ filename and verified attribution verbatim.
    const photos = {};
    const photoDialog = find('photo-dialog'); let photoOpener = null;
    function photoCaption(figure, photo) {
        const caption = document.createElement('figcaption');
        [photo.description, photo.attribution, photo.license, photo.prompt].filter(Boolean).forEach(text => {
            const p = document.createElement('p'); pair(p, ...text); caption.append(p);
        });
        const source = document.createElement('a'); source.href = photo.sourceUrl; source.target = '_blank'; source.rel = 'noopener noreferrer';
        pair(source, 'Photograph source', 'مصدر الصورة'); caption.append(source); figure.append(caption);
    }
    stations.forEach(station => {
        const photo = photos[station.id], slot = root.querySelector(`[data-detective-photo="${station.id}"]`);
        const bilingual = value => Array.isArray(value) && value.length === 2 && value.every(text => typeof text === 'string' && text.trim());
        if (!photo || !photo.src || !photo.sourceUrl || !bilingual(photo.description) || !bilingual(photo.attribution) || !bilingual(photo.prompt) || (photo.license != null && !bilingual(photo.license))) return;
        const original = [...slot.children];
        const thumbnail = document.createElement('img'); thumbnail.src = photo.src;
        thumbnail.alt = `${photo.description[0]} / ${photo.description[1]}`; thumbnail.loading = 'lazy'; thumbnail.decoding = 'async';
        const open = button(['Enlarge Photograph', 'كبّر الصورة'], () => {
            photoOpener = open; const figure = document.createElement('figure');
            const image = document.createElement('img'); image.src = photo.src; image.alt = thumbnail.alt;
            figure.append(image); photoCaption(figure, photo); find('photo-large').replaceChildren(figure);
            photoDialog.showModal(); find('photo-close').focus();
        });
        open.prepend(thumbnail); slot.replaceChildren(open); photoCaption(slot, photo);
        thumbnail.addEventListener('error', () => { slot.replaceChildren(...original); });
    });
    find('photo-close').addEventListener('click', () => photoDialog.close());
    photoDialog.addEventListener('close', () => photoOpener?.focus());
    reset(); selector.hidden = false;
})();
