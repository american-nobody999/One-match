
//Author: Leslie Brockman
//date modified: 2026-11-11
//  History chapter metadata and Explorer’s Bookshelf navigation. Personalizes the experience based on the user's progress and choices.
'use strict';
(() => {
    const root = document.querySelector('.history-journey');
    if (!root) return;
    // Dates describe broad teaching periods, not uninterrupted rule or fixed borders.
    // Future activities: recognition/chronology, comparisons, evidence/reasoning.
    // Only Chapter 1 Levels 1–3 are playable; no chapter score gates.
    const chapters = [
    {
        "id": "history-ancient-palestine",
        "number": 1,
        "titles": [
            "Ancient Palestine",
            "فلسطين القديمة"
        ],
        "difficulty": [
            "Easy",
            "سهل"
        ],
        "period": [
            "Neolithic settlements",
            "مستوطنات العصر الحجري الحديث"
        ],
        "sources": [
            "https://whc.unesco.org/en/list/1687"
        ],
        "futureActivityStatus": "levels-1-2-3-playable"
    },
    {
        "id": "history-kingdoms-empires",
        "number": 2,
        "titles": [
            "Kingdoms and Empires",
            "الممالك والإمبراطوريات"
        ],
        "difficulty": [
            "Easy to Medium",
            "سهل إلى متوسط"
        ],
        "period": [
            "Tell Balata · Middle–Late Bronze Age",
            "تل بلاطة · العصر البرونزي الأوسط والمتأخر"
        ],
        "sources": [],
        "futureActivityStatus": "foundation-content-pending"
    },
    {
        "id": "history-byzantine-islamic",
        "number": 3,
        "titles": [
            "Byzantine and Islamic Eras",
            "العصر البيزنطي والعصور الإسلامية"
        ],
        "difficulty": [
            "Medium",
            "متوسط"
        ],
        "period": [
            "Late antiquity and successive Islamic periods",
            "أواخر العصور القديمة والعصور الإسلامية المتعاقبة"
        ],
        "sources": [
            "https://whc.unesco.org/en/list/1433/",
            "https://whc.unesco.org/en/tentativelists/6546/"
        ],
        "futureActivityStatus": "not-implemented"
    },
    {
        "id": "history-ottoman-palestine",
        "number": 4,
        "titles": [
            "Ottoman Palestine",
            "فلسطين في العهد العثماني"
        ],
        "difficulty": [
            "Medium",
            "متوسط"
        ],
        "period": [
            "Approximately 1516–1917",
            "نحو 1516–1917"
        ],
        "sources": [
            "https://www.palquest.org/en/overallchronology"
        ],
        "futureActivityStatus": "not-implemented"
    },
    {
        "id": "history-mandate-nakba",
        "number": 5,
        "titles": [
            "British Mandate and the Nakba",
            "الانتداب البريطاني والنكبة"
        ],
        "difficulty": [
            "Medium to Hard",
            "متوسط إلى متقدم"
        ],
        "period": [
            "British administration; events of 1947–1949",
            "الإدارة البريطانية؛ أحداث 1947–1949"
        ],
        "sources": [
            "https://www.un.org/unispal/timeline/",
            "https://www.palquest.org/en/overallchronology",
            "https://palmuseum.org/en/exhibitions-and-events/exhibitions/labour-love-embroidering-palestinian-history"
        ],
        "futureActivityStatus": "not-implemented"
    },
    {
        "id": "history-modern-palestine",
        "number": 6,
        "titles": [
            "Modern Palestine",
            "فلسطين الحديثة"
        ],
        "difficulty": [
            "Hard",
            "متقدم"
        ],
        "period": [
            "Since 1948",
            "منذ 1948"
        ],
        "sources": [
            "https://www.palquest.org/en/overallchronology",
            "https://palmuseum.org/en/exhibitions-and-events/exhibitions/labour-love-embroidering-palestinian-history"
        ],
        "futureActivityStatus": "not-implemented"
    }
];
    const choices = root.querySelector('[data-history-choices]');
    const form = root.querySelector('[data-history-name-form]');
    const input = form.querySelector('input');
    const error = root.querySelector('#history-name-error');
    const shelf = root.querySelector('[data-history-bookshelf]');
    const books = root.querySelector('[data-history-books]');
    const contents = root.querySelector('[data-history-chapters]');
    const back = root.querySelector('[data-history-back]');
    const start = root.querySelector('[data-history-start]');
    let explorer = '', selectedBook = null;
    const sections = chapters.map(chapter => document.getElementById(chapter.id));
    function pair(parent, english, arabic) {
        [english, arabic].forEach((text, i) => {
            const span = document.createElement('span');
            span.className = i ? 'history-ar' : 'history-en';
            span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr';
            span.textContent = text; parent.append(span);
        });
    }
    function show(view, focus) {
        choices.hidden = view !== 'choices'; form.hidden = view !== 'name';
        shelf.hidden = view !== 'shelf'; contents.hidden = view !== 'chapter';
        back.hidden = view !== 'chapter';
        focus?.focus();
    }
    // Match classroom normalization, grapheme counting and attached Arabic marks.
    // History requires a name; English letters are restricted to A–Z.
    const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
    function validateName() {
        const value = input.value.replace(/^ +| +$/g, '').normalize('NFC');
        let followsLetter = false;
        const lettersOnly = Array.from(value).every(character => {
            if (character === ' ') { followsLetter = false; return true; }
            if (/[a-z]/i.test(character) || (/\p{L}/u.test(character) && /\p{Script_Extensions=Arabic}/u.test(character) && character !== '\u0640')) {
                followsLetter = true; return true;
            }
            return followsLetter && /\p{Mn}/u.test(character)
                && !/[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/u.test(character)
                && /[\p{Script_Extensions=Arabic}\p{Script_Extensions=Inherited}]/u.test(character);
        });
        const length = segmenter ? [...segmenter.segment(value)].length : (value.match(/\P{M}\p{M}*|\p{M}+/gu) || []).length;
        const valid = !!value && lettersOnly && length <= 8;
        input.setAttribute('aria-invalid', String(!valid)); error.hidden = valid;
        return { valid, value };
    }
    form.addEventListener('submit', event => {
        event.preventDefault(); const result = validateName();
        if (!result.valid) { input.focus(); return; }
        explorer = result.value; input.value = explorer;
        root.querySelector('[data-history-name-en]').textContent = explorer;
        root.querySelector('[data-history-name-ar]').textContent = explorer;
        show('shelf', root.querySelector('#history-bookshelf-title'));
    });
    input.addEventListener('input', event => { if (!event.isComposing && input.value) validateName(); else if (!input.value) { error.hidden = true; input.removeAttribute('aria-invalid'); } });
    input.addEventListener('compositionend', validateName);
    start.hidden = false;
    start.addEventListener('click', () => show(explorer ? 'shelf' : 'name', explorer ? root.querySelector('#history-bookshelf-title') : input));
    root.querySelectorAll('[data-history-choose]').forEach(button => button.addEventListener('click', () => show('choices', start)));
    back.addEventListener('click', () => show('shelf', selectedBook));
    const bookTitles = [
        ['Ancient Palestine', 'فلسطين القديمة'], ['Kingdoms and Empires', 'الممالك والإمبراطوريات'],
        ['Byzantine and Islamic Eras', 'العصور البيزنطية والإسلامية'], ['Ottoman Palestine', 'فلسطين العثمانية'],
        ['British Mandate and the Nakba', 'الانتداب البريطاني والنكبة'], ['Modern Palestine', 'فلسطين الحديثة']
    ];
    chapters.forEach((chapter, i) => {
        const section = sections[i];
        if (i > 1) {
            const notice = document.createElement('p'); notice.className = 'history-phase-note';
            pair(notice, 'Informational preview · Interactive activities coming later', 'معاينة معلوماتية · الأنشطة التفاعلية قادمة لاحقًا');
            section.append(notice);
        }
        const previewButton = section.querySelector('[data-history-explore]');
        // Focused chapter views include their complete existing preview and citations.
        previewButton.hidden = true;
        document.getElementById(previewButton.getAttribute('aria-controls')).hidden = false;
        const button = document.createElement('button'); button.type = 'button';
        button.className = 'history-book'; button.setAttribute('aria-controls', chapter.id);
        const number = document.createElement('span'); number.className = 'history-book-number';
        pair(number, `Chapter ${chapter.number}`, `الفصل ${chapter.number}`); button.append(number);
        const art = document.getElementById(`history-cover-${chapter.number}`).content.querySelector('svg').cloneNode(true);
        // Reused artwork needs independent paint-server IDs; original SVGs stay intact.
        const ids = new Map();
        art.querySelectorAll('[id]').forEach(node => { const old = node.id; node.id = `book-${i}-${old}`; ids.set(old, node.id); });
        art.querySelectorAll('*').forEach(node => [...node.attributes].forEach(attribute => {
            let value = attribute.value;
            ids.forEach((replacement, original) => { value = value.split(`url(#${original})`).join(`url(#${replacement})`); if (value === `#${original}`) value = `#${replacement}`; });
            if (value !== attribute.value) node.setAttribute(attribute.name, value);
        }));
        button.append(art);
        const title = document.createElement('span'); title.className = 'history-book-title'; pair(title, ...bookTitles[i]); button.append(title);
        if (chapter.number !== 1) {
            button.disabled = true;
            const status = document.createElement('span');
            pair(status, 'Coming Soon', 'قريبًا'); button.append(status);
        }
        button.addEventListener('click', () => {
            if (chapter.number !== 1) return;
            selectedBook = button; sections.forEach(item => { item.hidden = item !== section; });
            const heading = section.querySelector('h3'); heading.tabIndex = -1;
            show('chapter', heading);
        });
        books.append(button);
    });
    show('choices');
})();
