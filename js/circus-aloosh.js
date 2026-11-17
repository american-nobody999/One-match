/* Author: Leslie Brockman
 * Circus Aloosh Game SVG Symbols/ memeory game
 */
(() => {
    'use strict';
    const game = document.getElementById('aloosh-game');
    if (!game) return;

    // Phase 3D.10: fifteen local SVG symbols, with shared rounded presentation and padding.
    const performers = [
        {"id": "ticket", "en": "Circus Ticket", "ar": "تذكرة السيرك", "art": "<path d=\"M14 28h72v13q-13 9 0 18v13H14V59q13-9 0-18Z\" fill=\"#f5cd70\" stroke=\"#ad6f25\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M30 33v34m40-34v34\" stroke=\"#ad6f25\" stroke-width=\"2\" stroke-dasharray=\"3 4\"/><path d=\"m50 36 4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1Z\" fill=\"#d75c66\"/><path d=\"M22 33h5\" stroke=\"#fff9e9\" stroke-width=\"3\" stroke-linecap=\"round\"/>"},
        {"id": "smiley", "en": "Smiley Face", "ar": "وجه مبتسم", "art": "<circle cx=\"50\" cy=\"50\" r=\"34\" fill=\"#f8cf55\" stroke=\"#b97b22\" stroke-width=\"3\"/><ellipse cx=\"39\" cy=\"43\" rx=\"4\" ry=\"6\" fill=\"#493025\"/><ellipse cx=\"61\" cy=\"43\" rx=\"4\" ry=\"6\" fill=\"#493025\"/><path d=\"M33 59q17 22 34 0\" fill=\"none\" stroke=\"#493025\" stroke-width=\"4\" stroke-linecap=\"round\"/><g fill=\"#ed9a7c\"><ellipse cx=\"29\" cy=\"54\" rx=\"5\" ry=\"3\"/><ellipse cx=\"71\" cy=\"54\" rx=\"5\" ry=\"3\"/></g><path d=\"M29 30q7-7 14-7\" fill=\"none\" stroke=\"#fff4cc\" stroke-width=\"4\" stroke-linecap=\"round\"/>"},
        {"id": "peace", "en": "Peace Sign", "ar": "رمز السلام", "art": "<circle cx=\"50\" cy=\"50\" r=\"39\" fill=\"#f5cd70\"/><g fill=\"none\" stroke=\"#17666a\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"50\" cy=\"50\" r=\"32\"/><path d=\"M50 18v64M50 50 27 73m23-23 23 23\"/></g><path d=\"M28 23q8-7 16-8\" fill=\"none\" stroke=\"#fff9e9\" stroke-width=\"3\" stroke-linecap=\"round\"/>"},
        {"id": "kite", "en": "Palestine Kite", "ar": "طائرة ورقية فلسطينية", "art": "<defs><clipPath id=\"aloosh-kite-flag-clip\"><path d=\"m50 9 27 30-27 30-27-30Z\"/></clipPath></defs><path d=\"M50 69q-15 11 4 17t-5 10\" fill=\"none\" stroke=\"#795315\" stroke-width=\"2\"/><g clip-path=\"url(#aloosh-kite-flag-clip)\"><path d=\"M23 9h54v20H23Z\" fill=\"#000000\"/><path d=\"M23 29h54v20H23Z\" fill=\"#FFFFFF\"/><path d=\"M23 49h54v20H23Z\" fill=\"#007A3D\"/><path d=\"m23 9 27 30-27 30Z\" fill=\"#CE1126\"/></g><path d=\"m50 9 27 30-27 30-27-30Z\" fill=\"none\" stroke=\"#795315\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"m38 76 8 4-8 4Zm16 9 8-4v8Z\" fill=\"#CE1126\"/><path d=\"m46 80 8-4v8Z\" fill=\"#000000\"/><path d=\"m54 85-8-4v8Z\" fill=\"#FFFFFF\" stroke=\"#795315\" stroke-width=\".7\"/><path d=\"m43 92 7 3-7 3Zm7 3 7-3v6Z\" fill=\"#007A3D\"/>"},
        {"id": "star", "en": "Star", "ar": "نجمة", "art": "<path d=\"m50 12 11 24 27 4-20 19 5 28-23-13-23 13 5-28-20-19 27-4Z\" fill=\"#f5cd70\" stroke=\"#b97b22\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"m50 25 5 13m-19 5-10 2\" stroke=\"#fff9e9\" stroke-width=\"4\" stroke-linecap=\"round\"/>"},
        {"id": "balloon", "en": "Balloon", "ar": "بالون", "art": "<path d=\"M50 67q-12 13 0 27\" fill=\"none\" stroke=\"#427965\" stroke-width=\"2.5\"/><ellipse cx=\"50\" cy=\"38\" rx=\"26\" ry=\"29\" fill=\"#e24556\" stroke=\"#a52e35\" stroke-width=\"3\"/><path d=\"m50 66-5 7h10Z\" fill=\"#e24556\"/><path d=\"M35 29q2-9 9-10\" fill=\"none\" stroke=\"#fff0ce\" stroke-width=\"4\" stroke-linecap=\"round\"/>"},
        {"id": "sailboat", "en": "Palestine Sailboat", "ar": "قارب شراعي فلسطيني", "art": "<path d=\"M17 72h69L75 87H31Z\" fill=\"#d99a57\" stroke=\"#925b31\" stroke-width=\"3\" stroke-linejoin=\"round\"/><path d=\"M51 10v62\" stroke=\"#925b31\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"m46 35-25 31h25Zm11 8v23h24Z\" fill=\"#fff9e9\" stroke=\"#86b9ac\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M53 12h38v8H53Z\" fill=\"#000000\"/><path d=\"M53 20h38v8H53Z\" fill=\"#FFFFFF\"/><path d=\"M53 28h38v8H53Z\" fill=\"#007A3D\"/><path d=\"m53 12 13 12-13 12Z\" fill=\"#CE1126\"/><path d=\"M15 92q9-5 18 0t18 0 18 0 18 0\" fill=\"none\" stroke=\"#428f95\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M32 77h39\" stroke=\"#f5cd70\" stroke-width=\"2\" stroke-linecap=\"round\"/>"},
        {"id": "hat", "en": "Ringmaster’s Top Hat", "ar": "قبعة مدير السيرك العالية", "art": "<ellipse cx=\"50\" cy=\"82\" rx=\"43\" ry=\"10\" fill=\"#9c2037\" stroke=\"#792039\" stroke-width=\"2.5\"/><path d=\"M27 77Q31 50 22 19q28-12 56 0-9 31-5 58-23 9-46 0Z\" fill=\"#CE1126\" stroke=\"#9c2037\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><ellipse cx=\"50\" cy=\"19\" rx=\"28\" ry=\"7\" fill=\"#ec5364\" stroke=\"#9c2037\" stroke-width=\"2\"/><path d=\"M28 59q22 8 44 0l1 13q-23 9-46 0Z\" fill=\"#f5cd70\" stroke=\"#b97b22\" stroke-width=\"1.5\"/><path d=\"m51 49 4 8 9 1-7 7 2 9-8-4-8 4 2-9-7-7 9-1Z\" fill=\"#ffdf78\" stroke=\"#b97b22\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><path d=\"M34 30q3 12 2 21\" fill=\"none\" stroke=\"#fff0ce\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".6\"/><path d=\"M15 81q11 3 19 2\" fill=\"none\" stroke=\"#ef9ca6\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>"},
        {"id": "olive", "en": "Olive Branch", "ar": "غصن زيتون", "art": "<path d=\"M25 88Q57 59 72 15\" fill=\"none\" stroke=\"#795315\" stroke-width=\"3\" stroke-linecap=\"round\"/><g fill=\"#6e9b50\" stroke=\"#427343\" stroke-width=\"1.5\"><path d=\"M39 75q-29 0-20-20 20 0 20 20Z\"/><path d=\"M45 66q23 8 30-12-19-7-30 12Z\"/><path d=\"M55 50q-26 0-23-20 19 2 23 20Z\"/><path d=\"M62 35q22 4 22-15-18-1-22 15Z\"/></g><g fill=\"#34452b\"><ellipse cx=\"35\" cy=\"78\" rx=\"5\" ry=\"7\"/><ellipse cx=\"59\" cy=\"51\" rx=\"5\" ry=\"7\"/><ellipse cx=\"69\" cy=\"25\" rx=\"4\" ry=\"6\"/></g>"},
        {"id": "watermelon", "en": "Watermelon Slice", "ar": "شريحة بطيخ", "art": "<path d=\"M12 33h76a38 47 0 0 1-76 0Z\" fill=\"#007A3D\" stroke=\"#315e53\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M18 33h64a32 39 0 0 1-64 0Z\" fill=\"#FFFFFF\"/><path d=\"M23 33h54a27 31 0 0 1-54 0Z\" fill=\"#e85160\"/><g fill=\"#231a18\"><ellipse cx=\"36\" cy=\"42\" rx=\"2.5\" ry=\"4\" transform=\"rotate(-25 36 42)\"/><ellipse cx=\"50\" cy=\"48\" rx=\"2.5\" ry=\"4\"/><ellipse cx=\"64\" cy=\"42\" rx=\"2.5\" ry=\"4\" transform=\"rotate(25 64 42)\"/><ellipse cx=\"44\" cy=\"59\" rx=\"2\" ry=\"3\"/><ellipse cx=\"58\" cy=\"57\" rx=\"2\" ry=\"3\"/></g>"},
        {"id": "music", "en": "Connected Eighth Notes", "ar": "نوتتان موسيقيتان متصلتان", "art": "<g stroke=\"#000000\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><path d=\"M34 73V25q0-3 3-4l41-10q4-1 4 3v49h-9V27l-30 7v39Z\" fill=\"#007A3D\"/><path d=\"m39 23 38-9v10l-38 9Z\" fill=\"#000000\" stroke=\"none\"/><ellipse cx=\"29\" cy=\"75\" rx=\"15\" ry=\"10\" transform=\"rotate(-20 29 75)\" fill=\"#CE1126\"/><ellipse cx=\"68\" cy=\"66\" rx=\"15\" ry=\"10\" transform=\"rotate(-20 68 66)\" fill=\"#007A3D\"/></g><g fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\"><path d=\"m44 25 23-6M22 72q4-3 8-2m31-7q4-3 8-2\"/></g>"},
        {"id": "juggling", "en": "Juggling Balls", "ar": "كرات بهلوانية", "art": "<g stroke-width=\"2.5\"><circle cx=\"50\" cy=\"29\" r=\"18\" fill=\"#f5cd70\" stroke=\"#b97b22\"/><circle cx=\"28\" cy=\"67\" r=\"18\" fill=\"#e85160\" stroke=\"#a52e35\"/><circle cx=\"73\" cy=\"67\" r=\"18\" fill=\"#86b9ac\" stroke=\"#427965\"/></g><g fill=\"none\" stroke=\"#fff9e9\" stroke-width=\"3.5\" stroke-linecap=\"round\"><path d=\"M42 21q4-4 8-3M20 59q4-4 8-3m37 3q4-4 8-3\"/></g>"},
        {"id": "popcorn", "en": "Popcorn Box", "ar": "علبة فشار", "art": "<g stroke=\"#b47b30\" stroke-width=\"2.5\" stroke-linejoin=\"round\"><path d=\"M23 40q-9-12 4-17 2-13 14-7 10-14 19-1 15-6 17 9 13 5 1 18Z\" fill=\"#fff3c4\"/><path d=\"m22 39 10 48q18 7 36 0l10-48Z\" fill=\"#FFFFFF\"/><path d=\"m27 42 8 43 7 1-5-44Zm19 0 1 45h8l1-45Zm20 0-5 44 7-1 8-43Z\" fill=\"#CE1126\" stroke=\"none\"/><path d=\"M22 39q28 7 56 0\" fill=\"none\"/></g><g fill=\"none\" stroke=\"#d5b776\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"m32 24 4-3m12 2 3-4m11 7 3-3\"/></g><circle cx=\"50\" cy=\"64\" r=\"12\" fill=\"#f5cd70\" stroke=\"#b47b30\" stroke-width=\"2\"/><path d=\"M46 61h1m6 0h1m-9 6q5 5 10 0\" fill=\"none\" stroke=\"#795315\" stroke-width=\"2\" stroke-linecap=\"round\"/>"},
        {"id": "clubs", "en": "Juggling Clubs", "ar": "صولجانات بهلوانية", "art": "<g stroke-width=\"2.5\" stroke-linejoin=\"round\"><g transform=\"rotate(-24 50 57)\"><path d=\"M22 22q-7 0-7 10v22q0 10 7 14l2 21h6l2-21q7-4 7-14V32q0-10-7-10Z\" fill=\"#d75c66\" stroke=\"#a52e35\"/><path d=\"M23 27v22\" stroke=\"#fff0ce\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M22 67h10\" stroke=\"#f5cd70\" stroke-width=\"5\"/></g><g transform=\"rotate(24 50 57)\"><path d=\"M68 22q-7 0-7 10v22q0 10 7 14l2 21h6l2-21q7-4 7-14V32q0-10-7-10Z\" fill=\"#86b9ac\" stroke=\"#427965\"/><path d=\"M69 27v22\" stroke=\"#FFFFFF\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M68 67h10\" stroke=\"#f5cd70\" stroke-width=\"5\"/></g><path d=\"M45 10q-7 0-7 10v23q0 10 7 14l2 24h6l2-24q7-4 7-14V20q0-10-7-10Z\" fill=\"#f5cd70\" stroke=\"#ad6f25\"/><path d=\"M45 17v22\" stroke=\"#fff9e9\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M45 56h10\" stroke=\"#d75c66\" stroke-width=\"5\"/></g>"},
        {"id": "unicycle", "en": "Unicycle", "ar": "دراجة أحادية العجلة", "art": "<circle cx=\"50\" cy=\"65\" r=\"25\" fill=\"#FFFFFF\" stroke=\"#333537\" stroke-width=\"5\"/><circle cx=\"50\" cy=\"65\" r=\"19\" fill=\"#e4f2e9\" stroke=\"#86b9ac\" stroke-width=\"2\"/><g fill=\"none\" stroke=\"#86b9ac\" stroke-width=\"2\"><path d=\"M50 46v38M31 65h38M37 52l26 26m0-26L37 78\"/></g><path d=\"M50 64V26\" stroke=\"#CE1126\" stroke-width=\"6\" stroke-linecap=\"round\"/><path d=\"M35 16q15 6 30 0l-2 10q-13 5-26 0Z\" fill=\"#e28aaf\" stroke=\"#9c375e\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/><path d=\"M39 20h17\" stroke=\"#fff0ce\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"50\" cy=\"65\" r=\"5\" fill=\"#f5cd70\" stroke=\"#ad6f25\" stroke-width=\"2\"/><path d=\"m50 65-12 8m12-8 12-8\" stroke=\"#795315\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M31 74h12m14-18h12\" stroke=\"#17666a\" stroke-width=\"4\" stroke-linecap=\"round\"/>"},
    ];
    const levels = {
        '1': { pairs: 8 },
        '2': { pairs: 10 },
        '3': { pairs: 15 }
    };
    let selectedLevel = game.querySelector('input[name="aloosh-level"]:checked')?.value || '1';
    const activePerformers = () => performers.slice(0, levels[selectedLevel].pairs);
    const pairCount = () => levels[selectedLevel].pairs;
    // Define each symbol once; both cards reference it without duplicating SVG IDs.
    const symbolDefinitions = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    symbolDefinitions.setAttribute('class', 'aloosh-symbol-defs');
    symbolDefinitions.setAttribute('aria-hidden', 'true');
    symbolDefinitions.setAttribute('focusable', 'false');
    symbolDefinitions.innerHTML = '<defs>' + performers.map(performer =>
        `<symbol id="aloosh-symbol-${performer.id}" viewBox="0 0 100 100"><g transform="translate(3 3) scale(.94)" stroke-linecap="round" stroke-linejoin="round">${performer.art}</g></symbol>`
    ).join('') + '</defs>';
    game.append(symbolDefinitions);
    // Phase 3D.5: rounded fabric canopy, gold trim, and soft dimensional accents.
    // No SVG definition IDs are needed, so repeated card backs remain collision-free.
    const emblem = `
        <ellipse cx="50" cy="89" rx="42" ry="6" fill="#795315" opacity=".16"/>
        <g stroke="#a77830" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
            <path d="M17 48Q50 39 83 48l4 34Q50 95 13 82Z" fill="#FFFFFF"/>
            <path d="M17 48q9-3 18-3l-3 42q-10 0-19-5Z" fill="#000000"/>
            <path d="M50 44q9 0 17 1l2 42q-10 2-19 2Z" fill="#007A3D"/>
            <path d="M67 45q9 0 16 3l4 34q-8 4-18 5Z" fill="#CE1126"/>
            <path d="M14 76Q50 88 86 76l1 6Q50 95 13 82Z" fill="#000000" opacity=".12" stroke="none"/>
            <path d="M9 51Q16 41 30 33 43 25 50 14q7 11 20 19 14 8 21 18Q50 66 9 51Z" fill="#FFFFFF"/>
            <path d="M50 14Q39 33 29 56 18 55 9 51q7-10 21-18 13-8 20-19Z" fill="#000000"/>
            <path d="M50 14q4 19 0 45 11 0 21-3Q64 31 50 14Z" fill="#007A3D"/>
            <path d="M50 14q14 17 21 42 11-1 20-5-7-10-21-18-13-8-20-19Z" fill="#CE1126"/>
            <path d="M16 48q17-13 34-29 17 16 34 29" fill="none" stroke="#FFFFFF" stroke-width="3" opacity=".23"/>
            <path d="M10 51q10 8 20 5 10 9 20 3 10 6 20-3 10 3 20-5l-1 6q-9 7-19 3-10 8-20 3-10 5-20-3-10 4-19-3Z" fill="#f5cd70"/>
            <path d="M37 86V72q0-17 13-17t13 17v14q-13 5-26 0Z" fill="#000000"/>
            <path d="M38 85V72q0-15 12-16-3 19-12 29Zm24 0V72q0-15-12-16 3 19 12 29Z" fill="#CE1126"/>
            <path d="m37 79 5-2m16 0 5 2" fill="none" stroke="#f5cd70" stroke-width="2"/>
            <path d="M46 86q4-2 8 0l5 5H41Z" fill="#f5cd70" stroke="none"/>
            <path d="M50 7v7" stroke="#b48125" stroke-width="3"/>
            <circle cx="50" cy="7" r="3.5" fill="#f5cd70"/>
        </g>
        <g fill="#fff8c5" stroke="#d99d32" stroke-width=".8">
            <circle cx="18" cy="55" r="1.8"/><circle cx="35" cy="60" r="1.8"/>
            <circle cx="50" cy="63" r="1.8"/><circle cx="65" cy="60" r="1.8"/><circle cx="82" cy="55" r="1.8"/>
        </g>`;
    const board = game.querySelector('#aloosh-board');
    const matchesDisplay = game.querySelector('#aloosh-matches');
    const movesDisplay = game.querySelector('#aloosh-moves');
    const timerDisplay = game.querySelector('#aloosh-timer');
    const message = game.querySelector('#aloosh-message');
    const victoryPanel = game.querySelector('#aloosh-victory');
    const finalPairs = game.querySelector('#aloosh-final-pairs');
    const finalMoves = game.querySelector('#aloosh-final-moves');
    const finalTime = game.querySelector('#aloosh-final-time');
    const startButton = game.querySelector('#aloosh-start');
    const restartButton = game.querySelector('#aloosh-restart');
    const againButton = game.querySelector('#aloosh-play-again');
    const levelInputs = game.querySelectorAll('input[name="aloosh-level"]');
    let firstCard = null;
    let secondCard = null;
    let matches = 0;
    let moves = 0;
    let playing = false;
    let boardLocked = false;
    let startedAt = 0;
    let timerInterval = null;
    let flipTimeout = null;
    let elapsed = '00:00';
    let messageKey = 'ready';
    let messagePerformer = null;

    const messages = {
        ready: () => [`Level ${selectedLevel}: ${pairCount()} pairs, ${pairCount() * 2} cards. Select Start when you’re ready!`, `المستوى ${selectedLevel}: عدد الأزواج ${pairCount()}، وعدد البطاقات ${pairCount() * 2}. اختر ابدأ عندما تكون مستعدًا!`],
        started: () => [`The show has begun! Find all ${pairCount()} pairs!`, `بدأ العرض! اعثر على جميع الأزواج وعددها ${pairCount()}!`],
        first: ['One symbol revealed! Find its matching partner.', 'كشفت رمزًا! ابحث عن الرمز المطابق له.'],
        mismatch: ['Not a match. Remember these symbols!', 'ليسا متطابقين. تذكّر هذين الرمزين!'],
        retry: ['Choose another pair. You can do it!', 'اختر زوجًا آخر. أنت تستطيع!'],
        won: () => [`Hooray! You Did It! Aloosh is cheering for you! All ${pairCount()} pairs found in ${moves} moves. Time: ${elapsed}.`, `يا سلام! أحسنت! عمو علوش يشجعك! وجدت جميع الأزواج (${pairCount()}) في ${moves} محاولة. الوقت: ${elapsed}.`]
    };
    const isArabic = () => document.documentElement.lang === 'ar';
    const text = (en, ar) => isArabic() ? ar : en;

    function setMessage(key, performer = null) {
        messageKey = key;
        messagePerformer = performer;
        renderMessage();
        if (key !== 'started') reactToGame(key);
    }
    function renderMessage() {
        // Keep ready-state details available to assistive technology without a visible instruction row.
        message.classList.toggle('is-ready', messageKey === 'ready');
        message.lang = isArabic() ? 'ar' : 'en';
        message.dir = isArabic() ? 'rtl' : 'ltr';
        message.textContent = messageKey === 'match'
            ? text(`A magical match: ${messagePerformer.en}!`, `تطابق سحري: ${messagePerformer.ar}!`)
            : text(...(typeof messages[messageKey] === 'function' ? messages[messageKey]() : messages[messageKey]));
    }
    // Practice 6 Fisher–Yates shuffle and clock-derived elapsed time.
    function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
        }
        return deck;
    }
    function formatTime(seconds) {
        return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    }
    function updateTimer() {
        elapsed = formatTime(Math.floor((performance.now() - startedAt) / 1000));
        timerDisplay.textContent = elapsed;
        return elapsed;
    }
    function updateScoreboard() {
        matchesDisplay.textContent = `${matches} / ${pairCount()}`;
        movesDisplay.textContent = moves;
    }
    function svgArt(art, symbolId = null) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('class', 'card-symbol');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        if (symbolId) {
            const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
            use.setAttribute('href', `#aloosh-symbol-${symbolId}`);
            svg.append(use);
        } else {
            svg.innerHTML = art; // Only the fixed local emblem above.
        }
        return svg;
    }
    function updateCardLabel(card) {
        const performer = performers.find(item => item.id === card.dataset.performer);
        const position = card.dataset.position;
        const revealed = card.classList.contains('is-flipped');
        const matched = card.classList.contains('is-matched');
        const state = matched ? text(`${performer.en}, matched`, `${performer.ar}، متطابقتان`)
            : revealed ? text(performer.en, performer.ar) : text('face down', 'مقلوبة');
        card.setAttribute('aria-label', text(`Card ${position}, ${state}`, `البطاقة ${position}، ${state}`));
    }
    function createCard(performer, index) {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'memory-card';
        card.disabled = !playing;
        card.dataset.performer = performer.id;
        card.dataset.position = index + 1;
        card.setAttribute('aria-pressed', 'false');
        updateCardLabel(card);
        const inner = document.createElement('span');
        inner.className = 'card-inner';
        inner.setAttribute('aria-hidden', 'true');
        const front = document.createElement('span');
        front.className = 'card-front';
        front.append(svgArt(emblem));
        const back = document.createElement('span');
        back.className = 'card-back';
        const mark = document.createElement('span');
        mark.className = 'card-match-mark';
        mark.textContent = '✓';
        back.append(svgArt(null, performer.id), mark);
        inner.append(front, back);
        card.append(inner);
        card.addEventListener('click', () => selectCard(card));
        return card;
    }
    function flipCard(card, revealed) {
        card.classList.toggle('is-flipped', revealed);
        card.setAttribute('aria-pressed', String(revealed));
        updateCardLabel(card);
    }
    function clearSelection() {
        firstCard = null;
        secondCard = null;
        boardLocked = false;
    }
    function selectCard(card) {
        if (!playing || boardLocked || card === firstCard || card.disabled) return;
        flipCard(card, true);
        if (!firstCard) {
            firstCard = card;
            setMessage('first');
            return;
        }
        secondCard = card;
        moves++;
        if (firstCard.dataset.performer === secondCard.dataset.performer) {
            const performer = performers.find(item => item.id === card.dataset.performer);
            const advanceFocus = [firstCard, secondCard].includes(document.activeElement);
            [firstCard, secondCard].forEach(matchedCard => {
                matchedCard.classList.add('is-matched');
                matchedCard.disabled = true;
                updateCardLabel(matchedCard);
            });
            matches++;
            setMessage('match', performer);
            clearSelection();
            updateScoreboard();
            if (matches === pairCount()) finishGame();
            else if (advanceFocus) board.querySelector('button:not(:disabled)')?.focus({ preventScroll: true });
        } else {
            boardLocked = true;
            setMessage('mismatch');
            updateScoreboard();
            flipTimeout = setTimeout(() => {
                flipCard(firstCard, false);
                flipCard(secondCard, false);
                clearSelection();
                flipTimeout = null;
                setMessage('retry');
            }, 900);
        }
    }
    function renderFinalScore() {
        finalPairs.textContent = matches;
        finalMoves.textContent = moves;
        finalTime.textContent = elapsed;
    }
    function finishGame() {
        playing = false;
        boardLocked = true;
        clearInterval(timerInterval);
        timerInterval = null;
        updateTimer();
        renderFinalScore();
        victoryPanel.hidden = false;
        setMessage('won');
        againButton.focus();
    }
    function resetGame() {
        // Cancel pending work before changing the deck or selected-card references.
        clearInterval(timerInterval);
        clearTimeout(flipTimeout);
        timerInterval = null;
        flipTimeout = null;
        clearSelection();
        matches = 0;
        moves = 0;
        playing = false;
        victoryPanel.hidden = true;
        finalPairs.textContent = '0';
        finalMoves.textContent = '0';
        finalTime.textContent = '00:00';
        elapsed = '00:00';
        timerDisplay.textContent = elapsed;
        updateScoreboard();
        board.replaceChildren();
        board.dataset.level = selectedLevel;
        const symbols = activePerformers();
        shuffleDeck([...symbols, ...symbols]).forEach((performer, index) => board.append(createCard(performer, index)));
        startButton.hidden = false;
        restartButton.hidden = true;
        setMessage('ready');
    }
    function startGame() {
        // Start, Restart, and Play Again all use the currently selected level.
        resetGame();
        playing = true;
        board.querySelectorAll('.memory-card').forEach(card => { card.disabled = false; });
        startButton.hidden = true;
        restartButton.hidden = false;
        startedAt = performance.now();
        timerInterval = setInterval(updateTimer, 1000);
        setMessage('started');
        board.querySelector('button').focus({ preventScroll: true });
    }
    function syncLanguage() {
        // Observe main.js's chosen language; do not implement a second toggle or reset the game.
        game.dir = isArabic() ? 'rtl' : 'ltr';
        updateCharacterLanguage();
        board.querySelectorAll('.memory-card').forEach(updateCardLabel);
        renderMessage();
        if (!victoryPanel.hidden) renderFinalScore();
    }
    levelInputs.forEach(input => input.addEventListener('change', () => {
        if (!input.checked || !levels[input.value]) return;
        selectedLevel = input.value;
        resetGame(); // Ready for an explicit Start; changing language never calls this.
    }));
    [startButton, restartButton, againButton].forEach(button => button.addEventListener('click', startGame));
    new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    // Phase 3D.7: reusable character presentation; no card/timer state is changed here.
    const characterSlot = game.querySelector('.aloosh-character');
    const characterReaction = game.querySelector('.aloosh-character-reaction');
    const characterImage = game.querySelector('.aloosh-character-image');
    const pendingArtwork = game.querySelector('.aloosh-character-pending');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reactionClasses = ['is-welcoming', 'is-cheering', 'is-encouraging', 'is-celebrating'];
    let characterCleanup = null;

    function clearCharacterReaction() {
        clearTimeout(characterCleanup);
        characterCleanup = null;
        characterSlot?.classList.remove(...reactionClasses);
    }
    function reactToGame(key) {
        if (!characterSlot || !characterReaction) return;
        if (key === 'ready') {
            clearCharacterReaction();
            return;
        }
        const reactions = {
            started: ['is-welcoming', 1200],
            match: ['is-cheering', 1400],
            mismatch: ['is-encouraging', 1400],
            won: ['is-celebrating', 3200]
        };
        const reaction = reactions[key];
        if (!reaction) return;
        clearCharacterReaction();
        if (reducedMotion.matches) return;
        // Restart the CSS effect even when two matches happen close together.
        void characterReaction.offsetWidth;
        characterSlot.classList.add(reaction[0]);
        // Fallback also handles interrupted animations or a hidden browser tab.
        characterCleanup = setTimeout(clearCharacterReaction, reaction[1] + 150);
    }
    function updateCharacterLanguage() {
        if (!characterImage) return;
        characterImage.alt = isArabic() ? characterImage.dataset.altAr : characterImage.dataset.altEn;
        characterImage.lang = isArabic() ? 'ar' : 'en';
        characterImage.dir = isArabic() ? 'rtl' : 'ltr';
    }
    function showCharacterIfLoaded() {
        if (!characterImage || !characterSlot) return;
        const hasSource = Boolean(characterImage.getAttribute('src')?.trim());
        const ready = hasSource && characterImage.complete && characterImage.naturalWidth > 0;
        characterImage.hidden = !ready;
        characterSlot.dataset.assetState = ready ? 'ready' : 'pending';
        if (pendingArtwork) pendingArtwork.hidden = ready;
    }
    if (characterImage && characterSlot) {
        characterImage.addEventListener('load', showCharacterIfLoaded);
        characterImage.addEventListener('error', () => {
            characterImage.hidden = true;
            characterSlot.dataset.assetState = 'pending';
            if (pendingArtwork) pendingArtwork.hidden = false;
        });
        // Also supports supplying the approved src later without changing game code.
        new MutationObserver(showCharacterIfLoaded).observe(characterImage, { attributes: true, attributeFilter: ['src'] });
        showCharacterIfLoaded();
    }
    characterReaction?.addEventListener('animationend', event => {
        if (event.target === characterReaction) clearCharacterReaction();
    });
    // Explicit Start welcomes the player; Replay/Play Again reset directly to idle.
    startButton.addEventListener('click', () => reactToGame('started'));
    reducedMotion.addEventListener('change', clearCharacterReaction);
    window.addEventListener('pagehide', clearCharacterReaction);
    resetGame();
    syncLanguage();
})();
