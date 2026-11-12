"use strict";
//Author: Leslie Brockman
//Date: 11-11-2026
// The lounge owns its dialogs and wheel; main.js owns language and navigation.
(() => {
    const page = document.querySelector('.drinking-games-page');
    if (!page) return;
    const dialogs = [...page.querySelectorAll('.lounge-dialog')];
    const triggers = new WeakMap();
    let activeDialog = null;
    const jukebox = document.getElementById('jukebox-dialog');
    const jukeboxFrames = [...jukebox.querySelectorAll('iframe[data-src]')];
    const jukeboxOrigin = 'https://www.youtube-nocookie.com';
    // Subscribe once per loaded player; retain the existing native YouTube controls.
    jukeboxFrames.forEach((frame, index) => {
        frame.addEventListener('load', () => {
            if (!jukebox.open || !frame.hasAttribute('src')) return;
            frame.contentWindow.postMessage(JSON.stringify({ event: 'listening', id: `jukebox-${index}` }), jukeboxOrigin);
            frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'addEventListener', args: ['onStateChange'] }), jukeboxOrigin);
        });
    });
    window.addEventListener('message', event => {
        if (!jukebox.open || event.origin !== jukeboxOrigin) return;
        const playingFrame = jukeboxFrames.find(frame => frame.contentWindow === event.source);
        if (!playingFrame) return;
        let message;
        try { message = typeof event.data === 'string' ? JSON.parse(event.data) : event.data; }
        catch { return; }
        if (message?.event !== 'onStateChange' || message.info !== 1) return;
        jukeboxFrames.forEach(frame => {
            if (frame !== playingFrame) {
                frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), jukeboxOrigin);
            }
        });
    });

    function stopMedia(dialog) {
        dialog.querySelectorAll('iframe[data-src]').forEach(frame => frame.removeAttribute('src'));
    }

    page.querySelectorAll('[data-open-dialog]').forEach(button => {
        button.addEventListener('click', () => {
            const dialog = document.getElementById(button.dataset.openDialog);
            if (!dialog || dialog.open) return;
            activeDialog?.close();
            triggers.set(dialog, button);
            dialog.showModal();
            activeDialog = dialog;
            page.classList.add('lounge-modal-open');
            if (dialog === wheelDialog && selected !== null && !surpriseView.hidden) {
                loadSurpriseMedia(sectionsById.get(surprises[selected].sectionId));
                renderResult();
                title.focus({ preventScroll: true });
            }
            if (dialog === jukebox) {
                dialog.querySelectorAll('iframe[data-src]').forEach(frame => {
                    frame.src = `${frame.dataset.src}?enablejsapi=1`;
                });
            }
        });
    });
    dialogs.forEach(dialog => {
        dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
        // Native Escape cancellation closes the dialog and reaches this same cleanup.
        dialog.addEventListener('close', () => {
            stopMedia(dialog);
            if (dialog === wheelDialog) closeWheel();
            if (activeDialog === dialog) {
                activeDialog = null;
                page.classList.remove('lounge-modal-open');
                triggers.get(dialog)?.focus({ preventScroll: true });
            }
        });
    });

    // Weekly edits belong here. Null mediaUrl means a complete text-only surprise.
    // Supported content types: text, image, video, embed (approved URLs only).
    const surprises = [
        { sectionId: 1, id: 'bonus-song', titleEn: 'Bonus Song', titleAr: 'أغنية إضافية', type: 'embed', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://www.youtube-nocookie.com/embed/OiYjTb3opAA', mediaTitleEn: 'Bonus Song — YouTube video', mediaTitleAr: 'أغنية إضافية — فيديو يوتيوب' },
        { sectionId: 2, id: 'meme-madness', titleEn: 'Meme Madness', titleAr: 'جنون الميمات', type: 'image', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/printer.png', mediaTitleEn: 'Political satire featuring an eagle, David, world leaders and an exhausted condemnation printer, with its caption', mediaTitleAr: 'رسم ساخر سياسي يظهر نسرًا وديفيد وقادة عالميين وطابعة بيانات إدانة منهكة، مع التعليق المكتوب' },
        { sectionId: 3, id: 'surprise-video', titleEn: 'Surprise Video', titleAr: 'فيديو مفاجئ', type: 'text', descriptionEn: "Congratulations! You've unlocked the ability to ignore evidence in six different languages.", descriptionAr: 'تهانينا! لقد اكتسبت القدرة على تجاهل الأدلة بست لغات مختلفة.', mediaUrl: null },
        { sectionId: 4, id: 'mystery-box', titleEn: '', titleAr: '', type: 'embed', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://www.youtube.com/embed/2aJ3Vfpgh44', mediaTitleEn: 'Mystery Box — YouTube video', mediaTitleAr: 'الصندوق الغامض — فيديو يوتيوب', mediaLoading: 'lazy' },
        { sectionId: 5, id: 'ridiculous-challenge', titleEn: 'Ridiculous Challenge', titleAr: 'تحدٍّ طريف', type: 'image', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/219.png', mediaTitleEn: 'Political accountability satire artwork with its original text', mediaTitleAr: 'رسم ساخر عن المساءلة السياسية مع نصه الأصلي' },
        { sectionId: 6, id: 'wild-card', titleEn: 'Wild Card', titleAr: 'المفاجأة الحرة', type: 'text', descriptionEn: "This week's politician achievement: another strongly worded email. The printer is exhausted.", descriptionAr: 'إنجاز السياسيين هذا الأسبوع: رسالة إلكترونية أخرى شديدة اللهجة. الطابعة منهكة.', mediaUrl: null }
    ];
    const wheelDialog = document.getElementById('wheel-dialog');
    const wheel = page.querySelector('.challenge-wheel');
    const labels = page.querySelector('.wheel-labels');
    const spin = document.getElementById('spin-wheel');
    const result = document.getElementById('wheel-result');
    const playView = document.getElementById('wheel-play');
    const surpriseView = document.getElementById('wheel-surprise');
    const title = document.getElementById('surprise-title');
    const description = document.getElementById('surprise-description');
    const media = document.getElementById('surprise-media');
    const back = document.getElementById('surprise-back');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const colors = ['#b94e45', '#194f38', '#fff5df', '#742b30', '#151515', '#68733d'];
    const step = 360 / surprises.length;
    const sectionsById = new Map(surprises.map(surprise => [surprise.sectionId, surprise]));
    const visitedSections = new Set();
    let availableCards = [...sectionsById.keys()];
    const completedCards = new Set();
    const statusDots = new Map();
    let activeSectionId = null;
    const sectionPaths = new Map();
    const svgNS = 'http://www.w3.org/2000/svg';
    const wedges = document.createElementNS(svgNS, 'svg');
    wedges.setAttribute('viewBox', '0 0 200 200');
    wedges.setAttribute('aria-hidden', 'true');
    wedges.classList.add('wheel-sections');
    const shading = document.createElementNS(svgNS, 'defs');
    colors.forEach((color, i) => {
        const gradient = document.createElementNS(svgNS, 'radialGradient');
        gradient.id = `wheel-paint-${i + 1}`;
        gradient.setAttribute('cx', '40%');
        gradient.setAttribute('cy', '32%');
        gradient.setAttribute('r', '78%');
        [[0, color], [1, i === 2 ? '#d8cfb6' : '#0e100c']].forEach(([offset, shade]) => {
            const stop = document.createElementNS(svgNS, 'stop');
            stop.setAttribute('offset', String(offset));
            stop.setAttribute('stop-color', shade);
            gradient.append(stop);
        });
        shading.append(gradient);
    });
    wedges.append(shading);
    function pointAt(degrees) {
        const radians = degrees * Math.PI / 180;
        return `${100 + 97 * Math.sin(radians)} ${100 - 97 * Math.cos(radians)}`;
    }
    surprises.forEach((surprise, i) => {
        const path = document.createElementNS(svgNS, 'path');
        path.id = `wheel-section-${surprise.sectionId}`;
        path.dataset.sectionId = String(surprise.sectionId);
        path.setAttribute('d', `M100 100 L${pointAt(i * step)} A97 97 0 0 1 ${pointAt((i + 1) * step)} Z`);
        path.setAttribute('fill', `url(#wheel-paint-${surprise.sectionId})`);
        wedges.append(path);
        sectionPaths.set(surprise.sectionId, path);
        const label = document.createElement('span');
        label.textContent = String(surprise.sectionId);
        label.style.setProperty('--angle', `${(i + .5) * step}deg`);
        const labelAngle = (i + .5) * step * Math.PI / 180;
        label.style.left = `${50 + 32 * Math.sin(labelAngle)}%`;
        label.style.top = `${50 - 32 * Math.cos(labelAngle)}%`;
        labels.append(label);
        const dot = document.createElement('span');
        dot.className = 'wheel-status-dot';
        dot.textContent = '☮';
        dot.dataset.sectionId = String(surprise.sectionId);
        dot.style.left = label.style.left;
        dot.style.top = label.style.top;
        statusDots.set(surprise.sectionId, dot);
        wheel.append(dot);
    });
    wheel.prepend(wedges);
    const lights = wheelDialog.querySelector('.wheel-lights');
    for (let i = 0; i < 24; i++) {
        const bulb = document.createElement('span');
        const radians = i * Math.PI / 12;
        bulb.style.left = `${50 + 48 * Math.sin(radians)}%`;
        bulb.style.top = `${50 - 48 * Math.cos(radians)}%`;
        bulb.style.setProperty('--bulb-delay', `${-(i % 4) * .3}s`);
        lights.append(bulb);
    }
    function trackSection(sectionId) {
        if (!sectionsById.has(sectionId)) return;
        visitedSections.add(sectionId);
        activeSectionId = sectionId;
        renderSectionStates();
    }
    function renderSectionStates() {
        sectionPaths.forEach((path, id) => {
            path.classList.toggle('is-visited', visitedSections.has(id) && id !== activeSectionId);
            path.classList.toggle('is-current', id === activeSectionId);
            statusDots.get(id).classList.toggle('is-completed', completedCards.has(id));
        });
    }
    let selected = null;
    let spinning = false;
    let rotation = 0;
    let timer;
    function renderResult() {
        const ar = document.documentElement.lang === 'ar';
        result.lang = surpriseView.lang = ar ? 'ar' : 'en';
        result.dir = surpriseView.dir = ar ? 'rtl' : 'ltr';
        const tagline = result.querySelector('.wheel-carnival-tagline');
        tagline.hidden = spinning;
        tagline.querySelectorAll('.lang-en, .lang-ar').forEach(span => {
            span.classList.toggle('hidden', span.classList.contains('lang-ar') !== ar);
        });
        result.querySelector('.wheel-spin-status').textContent = spinning
            ? (ar ? 'العجلة تدور…' : 'Spinning…') : '';
        if (selected !== null && !surpriseView.hidden) {
            const surprise = sectionsById.get(surprises[selected].sectionId);
            title.textContent = surprise.sectionId === 3
                ? '3. 😂'
                : `${surprise.sectionId}. ${surprise[ar ? 'titleAr' : 'titleEn']}`;
            description.classList.toggle('wheel-result-statement', surprise.sectionId === 3 || surprise.sectionId === 6);
            description.textContent = surprise[ar ? 'descriptionAr' : 'descriptionEn'];
            description.hidden = surprise.type !== 'text';
            surpriseView.dataset.sectionId = String(surprise.sectionId);
            const image = media.querySelector('img');
            if (image) image.alt = surprise[ar ? 'mediaTitleAr' : 'mediaTitleEn'] || surprise[ar ? 'titleAr' : 'titleEn'];
            const frame = media.querySelector('iframe');
            if (frame) frame.title = surprise[ar ? 'mediaTitleAr' : 'mediaTitleEn'] || surprise[ar ? 'titleAr' : 'titleEn'];
        }
    }
    function clearSurpriseMedia() {
        media.querySelectorAll('video').forEach(video => video.pause());
        media.querySelectorAll('iframe').forEach(frame => frame.removeAttribute('src'));
        media.replaceChildren();
    }
    function loadSurpriseMedia(surprise) {
        clearSurpriseMedia();
        if (!surprise.mediaUrl || surprise.type === 'text') return;
        const tag = { image: 'img', video: 'video', embed: 'iframe' }[surprise.type];
        if (!tag) return;
        const element = document.createElement(tag);
        element.src = surprise.mediaUrl;
        element.className = 'wheel-result-media';
        const ar = document.documentElement.lang === 'ar';
        if (tag === 'img') {
            element.alt = surprise[ar ? 'mediaTitleAr' : 'mediaTitleEn'] || surprise[ar ? 'titleAr' : 'titleEn'];
        }
        if (tag === 'video') element.controls = true;
        if (tag === 'iframe') {
            element.title = surprise[ar ? 'mediaTitleAr' : 'mediaTitleEn'] || surprise[ar ? 'titleAr' : 'titleEn'];
            element.allowFullscreen = true;
            if (surprise.mediaLoading) element.loading = surprise.mediaLoading;
            element.allow = 'encrypted-media; picture-in-picture';
            element.referrerPolicy = 'strict-origin-when-cross-origin';
        }
        media.append(element);
    }
    function resetWheelView(moveFocus = false) {
        clearSurpriseMedia();
        surpriseView.hidden = true;
        playView.hidden = false;
        if (moveFocus) spin.focus({ preventScroll: true });
    }
    function finishSpin() {
        clearTimeout(timer);
        if (!spinning) return;
        spinning = false;
        spin.disabled = true;
        result.removeAttribute('aria-busy');
        if (!wheelDialog.open) return;
        trackSection(surprises[selected].sectionId);
        playView.hidden = true;
        surpriseView.hidden = false;
        loadSurpriseMedia(sectionsById.get(surprises[selected].sectionId));
        renderResult();
        title.focus({ preventScroll: true });
    }
    spin.addEventListener('click', () => {
        if (spinning || !wheelDialog.open || !surpriseView.hidden || selected !== null || !availableCards.length) return;
        activeSectionId = null;
        renderSectionStates();
        spinning = true;
        spin.disabled = true;
        const poolIndex = Math.floor(Math.random() * availableCards.length);
        const sectionId = availableCards.splice(poolIndex, 1)[0];
        selected = surprises.findIndex(surprise => surprise.sectionId === sectionId);
        result.setAttribute('aria-busy', 'true');
        renderResult();
        // Segment centers land beneath the fixed pointer at twelve o'clock.
        const target = (360 - (selected + .5) * step) % 360;
        rotation += 360 * 5 + ((target - rotation % 360 + 360) % 360);
        wheel.style.transform = `rotate(${rotation}deg)`;
        if (reducedMotion.matches) finishSpin();
        else timer = window.setTimeout(finishSpin, 3300);
    });
    back.addEventListener('click', () => {
        if (spinning || surpriseView.hidden || selected === null) return;
        completedCards.add(surprises[selected].sectionId);
        selected = null;
        activeSectionId = null;
        if (completedCards.size === sectionsById.size) {
            availableCards = [...sectionsById.keys()];
            completedCards.clear();
            visitedSections.clear();
        }
        renderSectionStates();
        spin.disabled = false;
        resetWheelView(true);
        renderResult();
    });
    // The existing dialog close handler calls this cleanup for Close and Escape.
    function closeWheel() {
        if (spinning) {
            // Cancelled, unviewed results remain available in the current round.
            if (selected !== null) availableCards.push(surprises[selected].sectionId);
            selected = null;
            activeSectionId = null;
            renderSectionStates();
            wheel.style.transition = 'none';
            wheel.style.transform = `rotate(${rotation}deg)`;
            void wheel.offsetWidth;
            wheel.style.removeProperty('transition');
        }
        clearTimeout(timer);
        spinning = false;
        result.removeAttribute('aria-busy');
        if (!surpriseView.hidden && selected !== null) {
            // Keep a viewed result pending until Back; reopening restores its media.
            clearSurpriseMedia();
            spin.disabled = true;
        } else {
            spin.disabled = false;
            resetWheelView();
        }
        renderResult();
    }
    reducedMotion.addEventListener('change', () => {
        if (spinning && reducedMotion.matches) finishSpin();
    });
    new MutationObserver(renderResult).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    renderResult();
})();

"use strict";

//Author:Leslie Brockman
//Date: 2026-10-30
(() => {
    const root = document.getElementById('loser-of-the-week');
    if (!root) return;
    // Manual weekly rotation: one featured winner per update; archive the previous winner when replaced.
    // An explicit editorial decision may extend a winner for another week; retain every award date.
    // Returning winners reuse their existing archive record and awardDates, never duplicate trophies.
    // No timers, scheduling, backend or browser persistence.
    const currentLoser = {
        "id": "nikol-stelmashvski-2026-11-11",
        "nameEn": "Nikol Stelmashvski",
        "nameAr": "نيكول ستيلماشفسكي",
        "awardDate": "2026-11-11",
        "awardDates": [
            "2026-11-11"
        ],
        "flipLabelEn": "What She Did",
        "flipLabelAr": "ماذا فعلت؟",
        "frontImages": [
            {
                "src": "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/loser/l-2-2.jpg",
                "altEn": "Editorial artwork accompanying the reporting on Mahmoud Al-Drimli — l-2-2.jpg",
                "altAr": "صورة تحريرية مرافقة للتقارير عن محمود الدريملي — l-2-2.jpg"
            },
            {
                "src": "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/loser/1-2-3.jpg",
                "altEn": "Editorial artwork accompanying the reporting on Mahmoud Al-Drimli — 1-2-3.jpg",
                "altAr": "صورة تحريرية مرافقة للتقارير عن محمود الدريملي — 1-2-3.jpg"
            }
        ],
        "backImages": [
            {
                "src": "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/loser/l-2-1.jpg",
                "altEn": "Editorial artwork accompanying the reporting on Mahmoud Al-Drimli — l-2-1.jpg",
                "altAr": "صورة تحريرية مرافقة للتقارير عن محمود الدريملي — l-2-1.jpg"
            },
            {
                "src": "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/loser/l-2-2.jpg",
                "altEn": "Editorial artwork accompanying the reporting on Mahmoud Al-Drimli — l-2-2.jpg",
                "altAr": "صورة تحريرية مرافقة للتقارير عن محمود الدريملي — l-2-2.jpg"
            },
            {
                "src": "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/loser/1-2-3.jpg",
                "altEn": "Editorial artwork accompanying the reporting on Mahmoud Al-Drimli — 1-2-3.jpg",
                "altAr": "صورة تحريرية مرافقة للتقارير عن محمود الدريملي — 1-2-3.jpg"
            }
        ],
        "storyHeadingEn": "WHERE IS MAHMOUD?",
        "storyHeadingAr": "أين محمود؟",
        "story": [
            {
                "en": "In July 2026, an Instagram post attributed in news reporting to Nikol Stelmashvski circulated photographs from her military service. One photograph showed two women posing beside a blindfolded and restrained Palestinian detainee.",
                "ar": "في يوليو/تموز 2026، انتشرت صور من منشور على إنستغرام نسبته تقارير صحفية إلى نيكول ستيلماشفسكي، يوثّق فترة خدمتها العسكرية. وأظهرت إحدى الصور امرأتين تقفان بجانب معتقل فلسطيني معصوب العينين ومقيّد."
            },
            {
                "en": "The image sparked public criticism and was subsequently removed from the post.",
                "ar": "أثارت الصورة انتقادات واسعة، ثم حُذفت من المنشور."
            },
            {
                "en": "The detainee's family recognized him as Mahmoud Al-Drimli, a young Palestinian man from Gaza who had been missing since November 2, 2024.",
                "ar": "وتعرّفت عائلة المعتقل عليه بوصفه محمود الدريملي، وهو شاب فلسطيني من غزة فُقد منذ 2 نوفمبر/تشرين الثاني 2024."
            },
            {
                "en": "For his family, the photograph was not a souvenir. It was evidence that their missing son had been alive in custody when the photograph was taken.",
                "ar": "بالنسبة إلى عائلته، لم تكن الصورة تذكارًا، بل دليلًا على أن ابنها المفقود كان حيًا رهن الاحتجاز وقت التقاطها."
            },
            {
                "en": "In September 2026, the Los Angeles Times reported that Mahmoud's parents had spent nearly two years searching for answers. Israeli military and prison authorities denied holding him.",
                "ar": "وفي سبتمبر/أيلول 2026، ذكرت صحيفة لوس أنجلوس تايمز أن والدي محمود أمضيا ما يقارب عامين في البحث عن إجابات. ونفت السلطات العسكرية وسلطات السجون الإسرائيلية احتجازه."
            },
            {
                "en": "The photograph does not establish his current whereabouts or condition.",
                "ar": "ولا تثبت الصورة مكان وجوده الحالي أو حالته الراهنة."
            },
            {
                "en": "Where is Mahmoud Al-Drimli?",
                "ar": "أين محمود الدريملي؟",
                "strong": true
            },
            {
                "en": "His family deserves answers.",
                "ar": "من حق عائلته معرفة مصيره."
            }
        ],
        "sourcesHeadingEn": "Sources & Reporting",
        "sourcesHeadingAr": "المصادر والتقارير",
        "sources": [
            {
                "url": "https://www.latimes.com/world-nation/story/2026-09-12/viral-photo-gives-gaza-family-bittersweet-glimpse-of-their-missing-son",
                "labelEn": "Los Angeles Times — September 12, 2026",
                "labelAr": "لوس أنجلوس تايمز — 12 سبتمبر 2026"
            },
            {
                "url": "https://www.aljazeera.net/news/2026/7/29/تفاخر-بالتنكيل-مجندة-إسرائيلية-تنشر",
                "labelEn": "Al Jazeera Arabic — July 29, 2026",
                "labelAr": "الجزيرة نت — 29 يوليو 2026"
            },
            {
                "url": "https://en.hathalyoum.net/amp/287357",
                "labelEn": "Middle East Eye — Reporting on the photograph (Hatha Alyoum republication)",
                "labelAr": "ميدل إيست آي — تقرير عن الصورة (إعادة نشر عبر هذا اليوم)"
            }
        ]
    };
    // Copy this schema for the next winner; null fields are intentionally unpublished.
    // Images: { src, altEn, altAr }; story: [{ en, ar }]; sources: [{ url, labelEn, labelAr }].
    const pendingLoser = { id: null, nameEn: null, nameAr: null, awardDate: null,
        frontImages: null, backImages: null, story: null, sources: null,
        flipLabelEn: 'What He Did', flipLabelAr: 'ماذا فعل؟' };
    const previousLosers = [
        { id: 'andrey', nameEn: 'Andrey', nameAr: 'أندريه', awardDates: ['2026-10-23', '2026-11-06'],
          cardHtml: "          <div class=\"loser-week-card\" data-loser-card>\n            <div id=\"loser-week-front\" class=\"loser-week-face\" data-loser-face=\"front\">\n              <div class=\"loser-week-images\">\n                <img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-2.jpg\" alt=\"Front editorial image 1 of 2 / صورة تحريرية 2\" loading=\"lazy\">\n                <img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-1.jpg\" alt=\"Front editorial image 2 of 2 / صورة تحريرية 1\" loading=\"lazy\">\n              </div>\n              <button type=\"button\" id=\"loser-week-more\" class=\"loser-week-button\" data-loser-flip=\"back\" aria-controls=\"loser-week-back\" aria-expanded=\"false\"><span class=\"lang-en\">What He Did</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ماذا فعل؟</span></button>\n            </div>\n            <div id=\"loser-week-back\" class=\"loser-week-face\" data-loser-face=\"back\" hidden inert aria-hidden=\"true\">\n              <div class=\"loser-week-images\">\n                <img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-3.jpg\" alt=\"Back editorial image 1 of 3 / صورة تحريرية 3\" loading=\"lazy\">\n                <img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-4.jpg\" alt=\"Back editorial image 2 of 3 / صورة تحريرية 4\" loading=\"lazy\">\n                <img src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/l-5.jpg\" alt=\"Back editorial image 3 of 3 / صورة تحريرية 5\" loading=\"lazy\">\n              </div>\n              <h3><span class=\"lang-en\">What They Did</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">ماذا فعلوا؟</span></h3>\n              <div class=\"loser-week-description loser-week-intro\">\n                <p><span class=\"lang-en\">Violence isn't strength. It's a failure of humanity.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">العنف ليس قوة. إنه إخفاق في الإنسانية.</span></p>\n                <p><span class=\"lang-en\">This week's spotlight is reserved for acts of violence captured and documented by those who witnessed them.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">نسلّط الضوء هذا الأسبوع على أعمال عنف التقطها ووثّقها من شهدوها.</span></p>\n                <p><span class=\"lang-en\">No threats. No retaliation. No celebration of harm.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">لا تهديدات. لا انتقام. لا احتفاء بالأذى.</span></p>\n                <p><span class=\"lang-en\">Just a reminder that actions have consequences, witnesses have voices, and accountability begins when we refuse to look away.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إنه مجرد تذكير بأن للأفعال عواقب، وللشهود أصواتًا، وأن المساءلة تبدأ حين نرفض أن نُشيح بأنظارنا.</span></p>\n                <p><span class=\"lang-en\">Our rocks are made of truth, evidence, and peaceful resistance.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">حجارتنا مصنوعة من الحقيقة والأدلة والمقاومة السلمية.</span></p>\n              </div>\n              <details id=\"andrey-coverage\" class=\"andrey-coverage\">\n                <summary class=\"loser-week-button\"><span class=\"lang-en\">View Andrey Coverage</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">عرض تغطية أندريه</span></summary>\n                <div class=\"andrey-coverage-content\">\n        <h2 id=\"meet-andrey-heading\" class=\"west-bank-heading\"><span class=\"west-bank-alert\"><span class=\"lang-en\">ALL EYES ON THE WEST BANK!</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">كل الأنظار على الضفة الغربية!</span></span><span class=\"west-bank-place\"><span class=\"lang-en\">AL-KHAIR</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أم الخير</span></span></h2>\n        <div class=\"west-bank-decoration\" aria-hidden=\"true\">✌️ 👀 ✌️</div>\n      <section class=\"meet-andrey\" aria-labelledby=\"meet-andrey-heading\">\n        <img class=\"meet-andrey-portrait\"\n             src=\"https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/Andrey/617.jpg\"\n             alt=\"Andrey X peace in cuffs / أندريه إكس: السلام مكبّل اليدين\"\n             loading=\"lazy\">\n        <div class=\"andrey-account\">\n          <p><span class=\"lang-en\">On October 28, 2026, journalist and activist Andrey X was attacked near the Palestinian village of Umm al-Khair in the occupied West Bank.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">في 28 أكتوبر 2026، تعرّض الصحفي والناشط أندريه إكس لاعتداء قرب قرية أم الخير الفلسطينية في الضفة الغربية المحتلة.</span></p>\n          <p><span class=\"lang-en\">Andrey was there alongside American journalist Jasper Nathaniel and fellow journalist Adele Shoko. Video footage shared by Shoko shows a violent confrontation with Israeli settlers, including an armed individual.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">كان أندريه هناك برفقة الصحفي الأمريكي جاسبر ناثانيال وزميلتهما الصحفية أديل شوكو. وتُظهر لقطات فيديو نشرتها شوكو مواجهة عنيفة مع مستوطنين إسرائيليين، بينهم شخص مسلّح.</span></p>\n          <p><span class=\"lang-en\">According to Shoko, Andrey was beaten, suffered a head injury, and lost consciousness multiple times. She also reported that his phone was stolen and that he was denied hospital treatment.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">وبحسب شوكو، تعرّض أندريه للضرب، وأُصيب في رأسه، وفقد الوعي عدة مرات. وأفادت أيضًا بأن هاتفه سُرق وأنه حُرم من العلاج في المستشفى.</span></p>\n          <p><span class=\"lang-en\">Instead of receiving hospital care, Andrey and Jasper were taken into Israeli police custody.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">وبدلًا من تلقي الرعاية في المستشفى، اقتيد أندريه وجاسبر إلى عهدة الشرطة الإسرائيلية.</span></p>\n          <p><span class=\"lang-en\">Israeli police stated that they were investigating allegations arising from the confrontation. Both men were subsequently released, but reportedly barred from entering the West Bank for the remainder of 2026.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">وقالت الشرطة الإسرائيلية إنها تحقق في ادعاءات نشأت عن المواجهة. وأُفرج عن الرجلين لاحقًا، لكن ورد أنهما مُنعا من دخول الضفة الغربية حتى نهاية عام 2026.</span></p>\n          <p><span class=\"lang-en\">Andrey has spent years documenting the experiences of Palestinian communities and bringing attention to violence in the West Bank. His work has helped people around the world witness events they might otherwise never see.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">أمضى أندريه سنوات في توثيق تجارب المجتمعات الفلسطينية وتسليط الضوء على العنف في الضفة الغربية. وقد ساعد عمله الناس في أنحاء العالم على مشاهدة أحداث ربما لم يكونوا ليروها لولاه.</span></p>\n          <p><span class=\"lang-en\">Journalists and witnesses should not face violence for documenting what happens around them.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">لا ينبغي أن يتعرّض الصحفيون والشهود للعنف بسبب توثيق ما يجري من حولهم.</span></p>\n          <p><span class=\"lang-en\">To Andrey, Jasper, Adele, and the people of Umm al-Khair: we see you. Your courage matters, your safety matters, and your voices deserve to be heard.</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">إلى أندريه وجاسبر وأديل وأهل أم الخير: نحن نراكم. شجاعتكم مهمة، وسلامتكم مهمة، وأصواتكم تستحق أن تُسمع.</span></p>\n        </div>\n        <div class=\"andrey-modal-actions\">\n          <button class=\"modal-back-button\" id=\"andrey-modal-back\" type=\"button\" onclick=\"window.location.href='index.html'\">\n            <span class=\"lang-en\">Back</span>\n            <span class=\"lang-ar hidden\">رجوع</span>\n          </button>\n          <a class=\"andrey-profile-link\" href=\"hero.html#journalist-13\">\n            <span class=\"lang-en\">Learn More About Andrey</span>\n            <span class=\"lang-ar hidden\">تعرّف أكثر على أندريه</span>\n          </a>\n        </div>\n      </section>\n                </div>\n              </details>\n              <button type=\"button\" id=\"loser-week-return\" class=\"loser-week-button\" data-loser-flip=\"front\" aria-controls=\"loser-week-front\"><span class=\"lang-en\">Back</span><span class=\"lang-ar hidden\" lang=\"ar\" dir=\"rtl\">رجوع</span></button>\n            </div>\n          </div>" }
    ];
    const featured = root.querySelector('[data-current-loser]');
    const grid = root.querySelector('[data-trophy-grid]');
    const archive = root.querySelector('[data-archived-loser]');
    let activeTrophy = null;
    const arabic = () => document.documentElement.lang === 'ar';
    function bilingual(en, ar) {
        const fragment = document.createDocumentFragment();
        [['en', en], ['ar', ar]].forEach(([lang, text]) => {
            const span = document.createElement('span');
            span.className = `lang-${lang}`;
            span.lang = lang;
            span.dir = lang === 'ar' ? 'rtl' : 'ltr';
            span.textContent = text;
            span.classList.toggle('hidden', (lang === 'ar') !== arabic());
            fragment.append(span);
        });
        return fragment;
    }
    function element(tag, en, ar, className) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        node.append(bilingual(en, ar));
        return node;
    }
    function syncLanguage(container) {
        container.querySelectorAll('.lang-en, .lang-ar').forEach(span => {
            span.classList.toggle('hidden', span.classList.contains('lang-ar') !== arabic());
        });
        container.querySelectorAll('[data-winner-image]').forEach(image => {
            image.alt = image.dataset[arabic() ? 'altAr' : 'altEn'];
        });
    }
    function imageGallery(images) {
        const gallery = document.createElement('div');
        gallery.className = 'loser-week-images';
        images.forEach(data => {
            const image = document.createElement('img');
            image.src = data.src;
            image.loading = 'lazy';
            image.dataset.winnerImage = '';
            image.dataset.altEn = data.altEn;
            image.dataset.altAr = data.altAr;
            gallery.append(image);
        });
        return gallery;
    }
    function ready(winner) {
        return winner && winner.id && winner.nameEn && winner.nameAr && winner.awardDate
            && /^\d{4}-\d{2}-\d{2}$/.test(winner.awardDate)
            && winner.frontImages?.length === 2 && winner.backImages?.length === 3
            && [...winner.frontImages, ...winner.backImages].every(image => image.src && image.altEn && image.altAr)
            && winner.story?.length && winner.story.every(p => p.en && p.ar)
            && winner.sources?.length && winner.sources.every(s => s.url && s.labelEn && s.labelAr);
    }
    function dateLabel(winner, lang) {
        const dates = winner.awardDates?.length ? winner.awardDates : winner.awardDate ? [winner.awardDate] : [];
        if (!dates.length) return lang === 'ar' ? 'تاريخ الجائزة غير مسجل' : 'Award date not recorded';
        const sameYear = dates.every(date => date.slice(0, 4) === dates[0].slice(0, 4));
        const format = new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en', {
            day: 'numeric', month: lang === 'ar' ? 'long' : 'short', numberingSystem: lang === 'ar' ? 'arab' : 'latn',
            ...(sameYear ? {} : { year: 'numeric' }), timeZone: 'UTC'
        });
        let label = dates.map(date => format.format(new Date(date + 'T12:00:00Z')))
            .join(lang === 'ar' ? ' و' : ' & ');
        if (sameYear) {
            const year = new Intl.NumberFormat(lang === 'ar' ? 'ar' : 'en', { useGrouping: false, numberingSystem: lang === 'ar' ? 'arab' : 'latn' }).format(Number(dates[0].slice(0, 4)));
            label += (lang === 'ar' ? ' ' : ', ') + year;
        }
        return (lang === 'ar' ? 'مُنحت الجائزة: ' : 'Awarded: ') + label;
    }
    function renderCard(winner, container) {
        container.replaceChildren();
        if (winner.cardHtml) {
            // Trusted, preserved source markup only; never accept remote/user HTML here.
            const template = document.createElement('template');
            template.innerHTML = winner.cardHtml;
            container.append(template.content.cloneNode(true));
        } else {
            if (!ready(winner)) return;
            const card = document.createElement('div');
            card.className = 'loser-week-card';
            card.dataset.loserCard = '';
            const front = document.createElement('div');
            front.id = `loser-${winner.id}-front`;
            front.className = 'loser-week-face';
            front.dataset.loserFace = 'front';
            front.append(element('h3', winner.nameEn, winner.nameAr));
            front.append(element('p', dateLabel(winner, 'en'), dateLabel(winner, 'ar')));
            front.append(imageGallery(winner.frontImages));
            const back = document.createElement('div');
            back.id = `loser-${winner.id}-back`;
            back.className = 'loser-week-face';
            back.dataset.loserFace = 'back';
            back.append(imageGallery(winner.backImages));
            const story = document.createElement('div');
            story.className = 'loser-week-description';
            if (winner.storyHeadingEn && winner.storyHeadingAr) {
                story.append(element('h3', winner.storyHeadingEn, winner.storyHeadingAr));
            }
            winner.story.forEach(p => {
                const paragraph = document.createElement('p');
                paragraph.append(element(p.strong ? 'strong' : 'span', p.en, p.ar));
                story.append(paragraph);
            });
            if (winner.sourcesHeadingEn && winner.sourcesHeadingAr) {
                story.append(element('h4', winner.sourcesHeadingEn, winner.sourcesHeadingAr));
            }
            winner.sources.forEach(source => {
                const link = element('a', source.labelEn, source.labelAr, 'loser-source-link');
                link.href = source.url;
                if (new URL(source.url, location.href).origin !== location.origin) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
                const paragraph = document.createElement('p');
                paragraph.append(link);
                story.append(paragraph);
            });
            back.append(story);
            [['back', front, back.id, winner.flipLabelEn || pendingLoser.flipLabelEn, winner.flipLabelAr || pendingLoser.flipLabelAr],
             ['front', back, front.id, 'Back', 'رجوع']].forEach(([face, parent, controls, en, ar]) => {
                const button = element('button', en, ar, 'loser-week-button');
                button.type = 'button';
                button.dataset.loserFlip = face;
                button.setAttribute('aria-controls', controls);
                parent.append(button);
            });
            card.append(front, back);
            container.append(card);
        }
        const card = container.querySelector('[data-loser-card]');
        showFace(card, false, false);
        syncLanguage(container);
    }
    function showFace(card, showBack, moveFocus = true) {
        const front = card.querySelector('[data-loser-face="front"]');
        const back = card.querySelector('[data-loser-face="back"]');
        const more = front.querySelector('[data-loser-flip="back"]');
        const reset = back.querySelector('[data-loser-flip="front"]');
        const visible = showBack ? back : front;
        const concealed = showBack ? front : back;
        visible.hidden = false;
        visible.inert = false;
        visible.removeAttribute('aria-hidden');
        visible.classList.toggle('is-revealed', moveFocus);
        more.setAttribute('aria-expanded', String(showBack));
        if (moveFocus) (showBack ? reset : more).focus({ preventScroll: true });
        concealed.hidden = true;
        concealed.inert = true;
        concealed.setAttribute('aria-hidden', 'true');
        concealed.classList.remove('is-revealed');
    }
    const trophySvg = '<svg viewBox="0 0 80 88" aria-hidden="true" focusable="false"><defs><linearGradient id="TROPHY_PAINT" x2="1" y2="1"><stop stop-color="#fff0ac"/><stop offset=".5" stop-color="#d5aa52"/><stop offset="1" stop-color="#93602b"/></linearGradient></defs><g fill="url(#TROPHY_PAINT)" stroke="#e9bd69" stroke-width="2"><path d="M23 10h34v24c0 25-34 25-34 0Z"/><path d="M23 16H9v12q0 19 19 19v-8Q17 38 17 24h6Zm34 0h14v12q0 19-19 19v-8q11-1 11-15h-6Z"/><path d="M36 53h8v15h12v9H24v-9h12Z"/><rect x="20" y="77" width="40" height="6" rx="3"/></g><path d="m40 21 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1Z" fill="#fff2bd"/></svg>';
    previousLosers.forEach((winner, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'loser-trophy';
        button.dataset.loserArchive = String(index);
        button.setAttribute('aria-controls', 'loser-archive-view');
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = trophySvg.replaceAll('TROPHY_PAINT', `loser-trophy-gold-${index}`);
        button.append(element('span', winner.nameEn, winner.nameAr, 'loser-trophy-name'));
        button.append(element('span', dateLabel(winner, 'en'), dateLabel(winner, 'ar'), 'loser-trophy-date'));
        grid.append(button);
    });
    archive.id = 'loser-archive-view';
    root.addEventListener('click', event => {
        const flip = event.target.closest('[data-loser-flip]');
        if (flip) {
            showFace(flip.closest('[data-loser-card]'), flip.dataset.loserFlip === 'back');
            return;
        }
        const trophy = event.target.closest('[data-loser-archive]');
        if (trophy) {
            if (activeTrophy) activeTrophy.setAttribute('aria-expanded', 'false');
            activeTrophy = trophy;
            renderCard(previousLosers[Number(trophy.dataset.loserArchive)], archive);
            const back = element('button', 'Back to the Trophy Case', 'العودة إلى خزانة الجوائز', 'loser-week-button');
            back.type = 'button';
            back.dataset.trophyReturn = '';
            archive.prepend(back);
            archive.hidden = false;
            trophy.setAttribute('aria-expanded', 'true');
            back.focus({ preventScroll: true });
            return;
        }
        if (event.target.closest('[data-trophy-return]')) {
            activeTrophy?.setAttribute('aria-expanded', 'false');
            activeTrophy?.focus({ preventScroll: true });
            archive.hidden = true;
            archive.replaceChildren();
        }
    });
    if (ready(currentLoser)) renderCard(currentLoser, featured);
    syncLanguage(root);
    new MutationObserver(() => syncLanguage(root)).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
