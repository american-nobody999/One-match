"use strict";
//Author: Leslie Brockman
//Date: 11-01-2026
// The lounge owns its dialogs and wheel; main.js owns language and navigation.
(() => {
    const page = document.querySelector('.drinking-games-page');
    if (!page) return;
    const dialogs = [...page.querySelectorAll('.lounge-dialog')];
    const triggers = new WeakMap();
    let activeDialog = null;
    const jukebox = document.getElementById('jukebox-dialog');

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
                    frame.src = frame.dataset.src;
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
        { sectionId: 1, id: 'bonus-song', titleEn: 'Bonus Song', titleAr: 'أغنية إضافية', type: 'embed', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://www.youtube.com/embed/Ek750-CExS8', mediaTitleEn: 'Bonus Song — YouTube video', mediaTitleAr: 'أغنية إضافية — فيديو يوتيوب' },
        { sectionId: 2, id: 'meme-madness', titleEn: 'Meme Madness', titleAr: 'جنون الميمات', type: 'image', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/ai.png', mediaTitleEn: 'Meme Madness artwork', mediaTitleAr: 'صورة جنون الميمات' },
        { sectionId: 3, id: 'surprise-video', titleEn: 'Surprise Video', titleAr: 'فيديو مفاجئ', type: 'text', descriptionEn: "Congratulations! You've won absolutely nothing. Much like your last argument.", descriptionAr: 'تهانينا! لم تفز بأي شيء على الإطلاق. تمامًا كما خرجت من جدالك الأخير بلا مكسب.', mediaUrl: null },
        { sectionId: 4, id: 'mystery-box', titleEn: 'Mystery Scent', titleAr: 'الرائحة الغامضة', type: 'embed', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://www.youtube.com/embed/bc5gNP5D3Ig', mediaTitleEn: 'Mystery Box — YouTube video', mediaTitleAr: 'الصندوق الغامض — فيديو يوتيوب', mediaLoading: 'lazy' },
        { sectionId: 5, id: 'ridiculous-challenge', titleEn: 'Ridiculous Challenge', titleAr: 'تحدٍّ طريف', type: 'image', descriptionEn: '', descriptionAr: '', mediaUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/arcade/ho.png', mediaTitleEn: 'Ridiculous Challenge artwork', mediaTitleAr: 'صورة التحدي الطريف' },
        { sectionId: 6, id: 'wild-card', titleEn: 'Wild Card', titleAr: 'المفاجأة الحرة', type: 'text', descriptionEn: "Did I piss you off yet? Good, I like pissed off. Now use it and let's go free Palestine.", descriptionAr: 'هل أغضبتك حتى الآن؟ جيد، يعجبني هذا الغضب. والآن حوّله إلى عمل، وهيا نحرّر فلسطين.', mediaUrl: null }
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
    const card = document.querySelector('#loser-of-the-week [data-loser-card]');
    if (!card) return;
    const front = card.querySelector('[data-loser-face="front"]');
    const back = card.querySelector('[data-loser-face="back"]');
    const more = front?.querySelector('[data-loser-flip="back"]');
    const reset = back?.querySelector('[data-loser-flip="front"]');
    if (!front || !back || !more || !reset) return;

    function showFace(showBack, moveFocus = true) {
        const visible = showBack ? back : front;
        const concealed = showBack ? front : back;
        visible.hidden = false;
        visible.inert = false;
        visible.removeAttribute('aria-hidden');
        visible.classList.toggle('is-revealed', moveFocus);
        more.setAttribute('aria-expanded', String(showBack));
        // Transfer focus before concealing the previously active control.
        if (moveFocus) (showBack ? reset : more).focus({ preventScroll: true });
        concealed.hidden = true;
        concealed.inert = true;
        concealed.setAttribute('aria-hidden', 'true');
        concealed.classList.remove('is-revealed');
    }

    showFace(false, false);
    more.addEventListener('click', () => showFace(true));
    reset.addEventListener('click', () => showFace(false));
})();
