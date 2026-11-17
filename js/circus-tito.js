// Author: Leslie Brockman
// Circus Tito Game controller.
(() => {
    'use strict';
    const game = document.getElementById('tito-game');
    if (!game) return;
    const stage = game.querySelector('#tito-arena');
    const scoreDisplay = game.querySelector('#tito-score');
    const livesDisplay = game.querySelector('#tito-lives');
    const message = game.querySelector('#tito-message');
    const startBtn = game.querySelector('#tito-start');
    const stopBtn = game.querySelector('#tito-stop');
    const replayBtn = game.querySelector('#tito-replay');
    const finale = game.querySelector('#tito-finale');
    const finalScore = game.querySelector('#tito-final-score');
    const welcome = game.querySelector('#tito-arena-welcome');
    const trophy = game.querySelector('#tito-trophy');
    const trophyScore = game.querySelector('#tito-trophy-score');
    const trophyMessage = game.querySelector('#tito-trophy-message');
    const floor = game.querySelector('.tito-arena-floor');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const catchSparkles = game.querySelector('.tito-catch-sparkles');
    function clearCatchSparkles() { catchSparkles?.classList.remove('is-catching'); }
    function celebrateCatch() {
        if (!catchSparkles || reducedMotion.matches) return;
        clearCatchSparkles();
        void catchSparkles.offsetWidth;
        catchSparkles.classList.add('is-catching');
    }
    catchSparkles?.addEventListener('animationend', clearCatchSparkles);
    reducedMotion.addEventListener('change', clearCatchSparkles);
    // Six original objects plus five adapted from the Aloosh illustration collection.
    const objects = [
        { id: 'ball', en: 'Palestinian-colored juggling ball', ar: 'كرة بهلوانية بألوان فلسطين', art: '<circle cx="50" cy="50" r="33" fill="#FFFFFF"/><path d="M50 17a33 33 0 0 0-33 33h33Z" fill="#000000"/><path d="M50 17a33 33 0 0 1 33 33H50Z" fill="#CE1126"/><path d="M50 50h33a33 33 0 0 1-33 33Z" fill="#007A3D"/><circle cx="50" cy="50" r="33" fill="none" stroke="#795315" stroke-width="3"/><path d="M33 29q6-5 12-5" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>' },
        { id: 'star', en: 'Golden circus star', ar: 'نجمة السيرك الذهبية', art: '<path d="m50 12 11 24 27 4-20 19 5 28-23-13-23 13 5-28-20-19 27-4Z" fill="#f5cd70" stroke="#ad7b22" stroke-width="3" stroke-linejoin="round"/><path d="m50 26 5 12m-21 5-8 2" fill="none" stroke="#fff9e9" stroke-width="4" stroke-linecap="round"/>' },
        { id: 'balloon', en: 'Red circus balloon', ar: 'بالون السيرك الأحمر', art: '<path d="M50 67q-10 13 0 26" fill="none" stroke="#427965" stroke-width="3"/><ellipse cx="50" cy="38" rx="26" ry="29" fill="#CE1126" stroke="#9e263f" stroke-width="3"/><path d="m50 65-5 8h10Z" fill="#CE1126"/><path d="M35 28q3-8 9-9" fill="none" stroke="#fff0ce" stroke-width="4" stroke-linecap="round"/>' },
        { id: 'ticket', en: 'Golden circus ticket', ar: 'تذكرة السيرك الذهبية', art: '<path d="M13 28h74v13q-13 9 0 18v13H13V59q13-9 0-18Z" fill="#f5cd70" stroke="#ad7b22" stroke-width="3" stroke-linejoin="round"/><path d="M30 33v34m40-34v34" stroke="#ad7b22" stroke-width="2" stroke-dasharray="3 4"/><path d="m50 37 4 8 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1Z" fill="#bc344c"/><path d="M19 33h6" stroke="#fff9e9" stroke-width="3" stroke-linecap="round"/>' },
        { id: 'hat', en: 'Circus top hat', ar: 'قبعة السيرك العالية', art: '<ellipse cx="50" cy="78" rx="37" ry="10" fill="#17666a" stroke="#315e53" stroke-width="2.5"/><path d="M28 72q4-24-4-49 26-10 52 0-8 25-4 49-22 9-44 0Z" fill="#CE1126" stroke="#9e263f" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="50" cy="23" rx="26" ry="6" fill="#ed6771" stroke="#9e263f" stroke-width="2"/><path d="M29 56q21 6 42 0v12q-21 7-42 0Z" fill="#f5cd70"/><path d="M35 32q2 10 1 17" fill="none" stroke="#fff0ce" stroke-width="3" stroke-linecap="round"/>' },
        { id: 'club', en: 'Colorful juggling club', ar: 'صولجان بهلواني ملون', art: '<g transform="rotate(22 50 50)"><path d="M44 10q-10 0-10 12v26q0 14 10 18l2 23q4 5 8 0l2-23q10-4 10-18V22q0-12-10-12Z" fill="#86b9ac" stroke="#427965" stroke-width="3" stroke-linejoin="round"/><path d="M35 35h30v12H35Z" fill="#CE1126"/><path d="M44 64h12" stroke="#f5cd70" stroke-width="6" stroke-linecap="round"/><path d="M43 17q-3 6-2 13" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/></g>' },
        {"id": "kite", "en": "Palestine Kite", "ar": "طائرة ورقية فلسطينية", "art": "<defs><clipPath id=\"tito-kite-flag-clip\"><path d=\"m50 9 27 30-27 30-27-30Z\"/></clipPath></defs><path d=\"M50 69q-15 11 4 17t-5 10\" fill=\"none\" stroke=\"#795315\" stroke-width=\"2\"/><g clip-path=\"url(#tito-kite-flag-clip)\"><path d=\"M23 9h54v20H23Z\" fill=\"#000000\"/><path d=\"M23 29h54v20H23Z\" fill=\"#FFFFFF\"/><path d=\"M23 49h54v20H23Z\" fill=\"#007A3D\"/><path d=\"m23 9 27 30-27 30Z\" fill=\"#CE1126\"/></g><path d=\"m50 9 27 30-27 30-27-30Z\" fill=\"none\" stroke=\"#795315\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"m38 76 8 4-8 4Zm16 9 8-4v8Z\" fill=\"#CE1126\"/><path d=\"m46 80 8-4v8Z\" fill=\"#000000\"/><path d=\"m54 85-8-4v8Z\" fill=\"#FFFFFF\" stroke=\"#795315\" stroke-width=\".7\"/><path d=\"m43 92 7 3-7 3Zm7 3 7-3v6Z\" fill=\"#007A3D\"/>"},
        {"id": "sailboat", "en": "Palestine Sailboat", "ar": "قارب شراعي فلسطيني", "art": "<path d=\"M17 72h69L75 87H31Z\" fill=\"#d99a57\" stroke=\"#925b31\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M51 10v62\" stroke=\"#925b31\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"m46 35-25 31h25Zm11 8v23h24Z\" fill=\"#fff9e9\" stroke=\"#86b9ac\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M53 12h38v8H53Z\" fill=\"#000000\"/><path d=\"M53 20h38v8H53Z\" fill=\"#FFFFFF\"/><path d=\"M53 28h38v8H53Z\" fill=\"#007A3D\"/><path d=\"m53 12 13 12-13 12Z\" fill=\"#CE1126\"/><path d=\"M15 92q9-5 18 0t18 0 18 0 18 0\" fill=\"none\" stroke=\"#428f95\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M32 77h39\" stroke=\"#f5cd70\" stroke-width=\"2\" stroke-linecap=\"round\"/>"},
        {"id": "olive", "en": "Olive Branch", "ar": "غصن زيتون", "art": "<path d=\"M25 88Q57 59 72 15\" fill=\"none\" stroke=\"#795315\" stroke-width=\"3\" stroke-linecap=\"round\"/><g fill=\"#6e9b50\" stroke=\"#427343\" stroke-width=\"1.5\"><path d=\"M39 75q-29 0-20-20 20 0 20 20Z\"/><path d=\"M45 66q23 8 30-12-19-7-30 12Z\"/><path d=\"M55 50q-26 0-23-20 19 2 23 20Z\"/><path d=\"M62 35q22 4 22-15-18-1-22 15Z\"/></g><g fill=\"#34452b\"><ellipse cx=\"35\" cy=\"78\" rx=\"5\" ry=\"7\"/><ellipse cx=\"59\" cy=\"51\" rx=\"5\" ry=\"7\"/><ellipse cx=\"69\" cy=\"25\" rx=\"4\" ry=\"6\"/></g>"},
        {"id": "watermelon", "en": "Watermelon Slice", "ar": "شريحة بطيخ", "art": "<path d=\"M12 33h76a38 47 0 0 1-76 0Z\" fill=\"#007A3D\" stroke=\"#315e53\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M18 33h64a32 39 0 0 1-64 0Z\" fill=\"#FFFFFF\"/><path d=\"M23 33h54a27 31 0 0 1-54 0Z\" fill=\"#e85160\"/><g fill=\"#231a18\"><ellipse cx=\"36\" cy=\"42\" rx=\"2.5\" ry=\"4\" transform=\"rotate(-25 36 42)\"/><ellipse cx=\"50\" cy=\"48\" rx=\"2.5\" ry=\"4\"/><ellipse cx=\"64\" cy=\"42\" rx=\"2.5\" ry=\"4\" transform=\"rotate(25 64 42)\"/><ellipse cx=\"44\" cy=\"59\" rx=\"2\" ry=\"3\"/><ellipse cx=\"58\" cy=\"57\" rx=\"2\" ry=\"3\"/></g>"},
        {"id": "music", "en": "Connected Eighth Notes", "ar": "نوتتان موسيقيتان متصلتان", "art": "<g stroke=\"#000000\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><path d=\"M34 73V25q0-3 3-4l41-10q4-1 4 3v49h-9V27l-30 7v39Z\" fill=\"#007A3D\"/><path d=\"m39 23 38-9v10l-38 9Z\" fill=\"#000000\" stroke=\"none\"/><ellipse cx=\"29\" cy=\"75\" rx=\"15\" ry=\"10\" transform=\"rotate(-20 29 75)\" fill=\"#CE1126\"/><ellipse cx=\"68\" cy=\"66\" rx=\"15\" ry=\"10\" transform=\"rotate(-20 68 66)\" fill=\"#007A3D\"/></g><g fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"m44 25 23-6M22 72q4-3 8-2m31-7q4-3 8-2\"/></g>"},
    ];
    const definitions = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    definitions.setAttribute('class', 'tito-symbol-defs');
    definitions.setAttribute('aria-hidden', 'true');
    definitions.setAttribute('focusable', 'false');
    definitions.innerHTML = '<defs>' + objects.map(object => `<symbol id="tito-symbol-${object.id}" viewBox="0 0 100 100"><g transform="translate(3 3) scale(.94)" stroke-linecap="round" stroke-linejoin="round">${object.art}</g></symbol>`).join('') + '</defs>';
    game.append(definitions);

    // Practice 7 active-object set, scoring, frame timing, and spawn cadence.
    const activeObjects = new Set();
    let score = 0;
    let lives = 3;
    let running = false;
    let spawnTimer = null;
    let animationId = null;
    let lastFrame = 0;
    let messageKey = 'ready';
    const isArabic = () => document.documentElement.lang === 'ar';
    const text = (en, ar) => isArabic() ? ar : en;
    const messages = {
        ready: () => ['Uncle Tito is warming up backstage!', 'عمو تيتو يستعد خلف الكواليس!'],
        started: () => ['The show has begun! Catch those circus surprises!', 'بدأ العرض! التقط مفاجآت السيرك!'],
        catch: () => ['Nice catch! Uncle Tito is cheering for you!', 'التقاط رائع! عمو تيتو يشجعك!'],
        miss: () => [`Keep going! Lives remaining: ${lives}.`, `واصل المحاولة! الفرص المتبقية: ${lives}.`],
        stopped: () => [`Wonderful juggling! You caught ${score} circus surprises! Keep Your Eye on the Ball!`, `ألعاب خفة رائعة! التقطت ${score} من مفاجآت السيرك! أبقِ عينك على الكرة!`],
        over: () => [`Wonderful juggling! You caught ${score} circus surprises! Keep Your Eye on the Ball!`, `ألعاب خفة رائعة! التقطت ${score} من مفاجآت السيرك! أبقِ عينك على الكرة!`]
    };
    function renderMessage() {
        const value = text(...messages[messageKey]());
        message.lang = isArabic() ? 'ar' : 'en';
        message.dir = isArabic() ? 'rtl' : 'ltr';
        // Repeated catches keep the same phrase instead of flooding the live region.
        if (message.textContent !== value) message.textContent = value;
    }
    function setMessage(key) {
        messageKey = key;
        renderMessage();
    }
    function updateScore() {
        scoreDisplay.textContent = score;
        livesDisplay.textContent = lives;
        game.querySelectorAll('.tito-hearts svg').forEach((heart, index) => {
            heart.classList.toggle('is-lost', index >= lives);
        });
    }
    function clearObjects() {
        activeObjects.forEach(item => item.element.remove());
        activeObjects.clear();
    }
    function stopJuggling() {
        clearCatchSparkles();
        running = false;
        clearInterval(spawnTimer);
        cancelAnimationFrame(animationId);
        spawnTimer = null;
        animationId = null;
        lastFrame = 0;
        clearObjects();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        welcome.hidden = !trophy.hidden;
    }
    function renderFinalScore() {
        finalScore.lang = isArabic() ? 'ar' : 'en';
        finalScore.dir = isArabic() ? 'rtl' : 'ltr';
        finalScore.textContent = text(`Objects caught: ${score}`, `الأشياء الملتقطة: ${score}`);
        trophyScore.textContent = score;
        trophyScore.style.setProperty('--tito-score-size', `${Math.min(2.4, 9 / String(score).length)}rem`);
        trophyMessage.lang = isArabic() ? 'ar' : 'en';
        trophyMessage.dir = isArabic() ? 'rtl' : 'ltr';
        trophyMessage.textContent = text(`Wonderful juggling! You caught ${score} circus surprises!`, `ألعاب خفة رائعة! التقطت ${score} من مفاجآت السيرك!`);
    }
    function showFinalCelebration() {
        welcome.hidden = true;
        renderFinalScore();
        trophy.hidden = false;
        finale.hidden = false;
    }
    function endGame() {
        stopJuggling();
        showFinalCelebration();
        setMessage('over');
        replayBtn.focus();
    }
    function moveFocusAfterRemoval(hadFocus) {
        if (!hadFocus || !running) return;
        const next = activeObjects.values().next().value;
        (next?.element || stopBtn).focus({ preventScroll: true });
    }
    function catchObject(item) {
        if (!running || !activeObjects.has(item)) return;
        const hadFocus = document.activeElement === item.element;
        activeObjects.delete(item);
        item.element.remove();
        score++;
        updateScore();
        setMessage('catch');
        celebrateCatch();
        moveFocusAfterRemoval(hadFocus);
    }
    function missObject(item) {
        if (!running || !activeObjects.has(item)) return;
        const hadFocus = document.activeElement === item.element;
        activeObjects.delete(item);
        item.element.remove();
        lives--;
        updateScore();
        if (lives <= 0) {
            endGame();
            return;
        }
        setMessage('miss');
        moveFocusAfterRemoval(hadFocus);
    }
    function labelObject(item) {
        item.element.setAttribute('aria-label', text(`Catch ${item.symbol.en}`, `التقط: ${item.symbol.ar}`));
    }
    function createObject() {
        if (!running) return;
        const element = document.createElement('button');
        element.type = 'button';
        element.className = 'juggle-object';
        const symbol = objects[Math.floor(Math.random() * objects.length)];
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', `#tito-symbol-${symbol.id}`);
        svg.append(use);
        element.append(svg);
        const item = { element, symbol, xRatio: Math.random(), y: 4, size: 0, speed: Math.min(240, 95 + score * 4) };
        labelObject(item);
        element.addEventListener('click', () => catchObject(item));
        stage.append(element);
        item.size = element.offsetWidth;
        const x = 4 + item.xRatio * Math.max(0, stage.clientWidth - item.size - 8);
        element.style.transform = `translate(${x}px, ${item.y}px)`;
        activeObjects.add(item);
    }
    function animate(timestamp) {
        if (!running) return;
        const elapsed = lastFrame ? Math.min((timestamp - lastFrame) / 1000, 0.05) : 0;
        lastFrame = timestamp;
        const width = stage.clientWidth;
        const floorTop = stage.clientHeight - floor.offsetHeight;
        for (const item of [...activeObjects]) {
            // Falling is the essential mechanic; reduced-motion players get gentler speed.
            item.y += item.speed * (reducedMotion.matches ? 0.65 : 1) * elapsed;
            const x = 4 + item.xRatio * Math.max(0, width - item.size - 8);
            item.element.style.transform = `translate(${x}px, ${item.y}px)`;
            if (item.y >= floorTop - item.size) {
                missObject(item);
                if (!running) return;
            }
        }
        animationId = requestAnimationFrame(animate);
    }
    function startJuggling() {
        stopJuggling();
        score = 0;
        lives = 3;
        running = true;
        finale.hidden = true;
        trophy.hidden = true;
        trophyScore.textContent = '';
        trophyMessage.textContent = '';
        finalScore.textContent = '';
        welcome.hidden = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
        updateScore();
        setMessage('started');
        createObject();
        spawnTimer = setInterval(createObject, 1100);
        animationId = requestAnimationFrame(animate);
        stopBtn.focus({ preventScroll: true });
    }
    function syncLanguage() {
        game.dir = isArabic() ? 'rtl' : 'ltr';
        const portrait = game.querySelector('.tito-character-image');
        if (portrait) portrait.alt = isArabic() ? portrait.dataset.altAr : portrait.dataset.altEn;
        activeObjects.forEach(labelObject);
        renderMessage();
        if (!finale.hidden) renderFinalScore();
    }
    startBtn.addEventListener('click', startJuggling);
    replayBtn.addEventListener('click', startJuggling);
    stopBtn.addEventListener('click', () => {
        stopJuggling();
        showFinalCelebration();
        setMessage('stopped');
        startBtn.focus({ preventScroll: true });
    });
    new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    new ResizeObserver(() => {
        // Percentage-like horizontal positions adapt without changing score or restarting.
        activeObjects.forEach(item => { item.size = item.element.offsetWidth; });
    }).observe(stage);
    window.addEventListener('pagehide', stopJuggling);
    updateScore();
    syncLanguage();
})();
