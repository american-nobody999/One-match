
//Author: Leslie Brockman
//date modified: 2026-11-11
// Progressive notebook disclosures: move existing icons, keep every excavation node alive. This handles the notebook interface for discoveries and ensures that each clue remains accessible.
'use strict';
(() => {
    const activity = document.getElementById('history-ancient-activity');
    const pages = activity?.querySelector('.ancient-journal-pages');
    if (!pages) return;
    const entries = [...pages.querySelectorAll('[data-buried-clue]')];
    if (entries.length < 5) return;
    const grid = document.createElement('div'); grid.className = 'notebook-discoveries';
    grid.setAttribute('role', 'group'); grid.setAttribute('aria-label', 'Choose a discovery / اختر اكتشافًا');
    const controls = [];
    let currentIndex = 0, currentLevel = 1;
    const selectedByLevel = new Map();
    function pair(node, english, arabic) {
        [english, arabic].forEach((text, i) => {
            const span = document.createElement('span'); span.className = i ? 'history-ar' : 'history-en';
            span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; node.append(span);
        });
    }
    const firstDiscoveries = new Set(['clues', 'water', 'settlement', 'tower-wall', 'evidence']);
    function reviewSticker(introduced) {
        const badge = document.createElement('span'); badge.className = 'notebook-review-badge';
        badge.dataset.introducedLevel = String(introduced); badge.hidden = true;
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '0 0 48 48'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
        const shapes = [
            ['path', {d: 'm24 4 6 12 13 2-10 10 3 14-12-7-12 7 3-14-10-10 13-2Z', fill: '#efbd50', stroke: '#b87835', 'stroke-width': '2', 'stroke-linejoin': 'round'}],
            ['path', {d: 'm22 10-4 10-7 1', fill: 'none', stroke: '#fff1b1', 'stroke-width': '3', 'stroke-linecap': 'round'}],
            ['path', {d: 'M17 24q3-6 6 0m4 0q3-6 6 0m-13 6q5 5 10-1', fill: 'none', stroke: '#76502d', 'stroke-width': '2', 'stroke-linecap': 'round'}]
        ];
        shapes.forEach(([tag, attributes]) => { const node = document.createElementNS(ns, tag); Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value)); svg.append(node); });
        badge.append(svg); const label = document.createElement('span'); pair(label, 'Remember Me!', 'هل تذكرني؟'); badge.append(label); return badge;
    }
    function select(index) {
        if (!controls[index] || controls[index].hidden) return;
        currentIndex = index; selectedByLevel.set(currentLevel, index);
        entries.forEach((entry, i) => {
            entry.open = i === index; entry.hidden = i !== index;
            controls[i].setAttribute('aria-expanded', String(i === index));
        });
        // Leave focus on the activated disclosure button; never reset the soil or hint.
    }
    pages.insertBefore(grid, entries[0]);
    entries.forEach((entry, index) => {
        const key = entry.dataset.buriedClue;
        const summary = entry.querySelector('summary');
        const sourceTitle = summary.querySelector('.buried-header-title');
        const english = sourceTitle.querySelector('.history-en').textContent.replace(/^Discovery \d+:\s*/, '');
        const arabic = sourceTitle.querySelector('.history-ar').textContent;
        const control = document.createElement('button'); control.type = 'button';
        control.className = 'notebook-discovery'; control.dataset.notebookClue = key;
        control.id = `notebook-discovery-${key}`;
        const introduced = Number(entry.dataset.clueLevel || (firstDiscoveries.has(key) ? 1 : 0));
        control.append(reviewSticker(introduced));
        entry.id = entry.id || `notebook-page-${key}`;
        control.setAttribute('aria-controls', entry.id); control.setAttribute('aria-expanded', 'false');
        entry.setAttribute('role', 'region'); entry.setAttribute('aria-labelledby', control.id);
        const icon = summary.querySelector('.buried-header-symbol'); summary.removeChild(icon); control.append(icon);
        const title = document.createElement('span'); title.className = 'notebook-discovery-title'; pair(title, english, arabic); control.append(title);
        const completed = document.createElement('span'); completed.className = 'notebook-discovery-complete';
        completed.textContent = '✓'; completed.setAttribute('aria-hidden', 'true'); control.append(completed);
        const updateMarker = () => { completed.hidden = entry.querySelector('[data-buried-dig]').dataset.revealed !== 'true'; };
        updateMarker(); entry.addEventListener('history-clue-revealed', updateMarker);
        const heading = document.createElement('h6'); heading.className = 'notebook-page-title'; pair(heading, english, arabic);
        entry.insertBefore(heading, entry.querySelector('[data-buried-dig]'));
        control.addEventListener('click', () => select(index)); controls.push(control); grid.append(control);
    });
    activity.setNotebookLevel = level => {
        const count = [5, 7, 9][level - 1];
        if (!count) return;
        currentLevel = level; grid.dataset.discoveryCount = String(count);
        controls.forEach((control, i) => {
            control.hidden = i >= count;
            const badge = control.querySelector('.notebook-review-badge');
            const introduced = Number(badge.dataset.introducedLevel); badge.hidden = !(introduced > 0 && introduced < level);
        });
        select(selectedByLevel.get(level) ?? Math.min(currentIndex, count - 1));
    };
    // Read the existing validated greeting, never raw input or a second name store.
    const explorerName = document.querySelector('[data-history-name-en]');
    const englishTitle = activity.querySelector('[data-journal-title-en]');
    const arabicTitle = activity.querySelector('[data-journal-title-ar]');
    function personalizeJournal() {
        const name = explorerName?.textContent.trim() || '';
        const arabicName = /\p{Script_Extensions=Arabic}/u.test(name);
        const nameLine = document.createElement('span'); nameLine.className = 'journal-name-line'; nameLine.dir = 'ltr';
        nameLine.dataset.nameLength = String(Array.from((name || 'My').replace(/\p{M}/gu, '')).length);
        const label = document.createElement('bdi'); label.className = 'journal-student-name';
        label.dir = 'auto'; label.lang = arabicName ? 'ar' : 'en'; label.textContent = name || 'My'; nameLine.append(label);
        if (name && !arabicName) nameLine.append(document.createTextNode("'s"));
        const titleLine = document.createElement('span'); titleLine.className = 'journal-main-title'; titleLine.textContent = 'Field Journal!';
        englishTitle.replaceChildren(nameLine, document.createTextNode(' '), titleLine);
        arabicTitle.textContent = 'دفتر ملاحظاتي الميداني';
        document.querySelectorAll('[data-expedition-welcome]').forEach(heading => {
            const student = document.createElement('bdi'); student.dir = 'auto'; student.textContent = name || 'Explorer';
            heading.replaceChildren(document.createTextNode(`${heading.dataset.welcomePrefix}, `), student, document.createTextNode('!'));
        });
    }
    personalizeJournal();
    if (explorerName) new MutationObserver(personalizeJournal).observe(explorerName, { childList: true, characterData: true, subtree: true });
    // Native toggle fires after opening; align the cover after expansion/layout settles.
    const journal = activity.querySelector('.ancient-field-journal');
    journal.addEventListener('toggle', event => {
        if (event.target !== journal || !journal.open) return;
        requestAnimationFrame(() => {
            if (!journal.open || !journal.getClientRects().length) return;
            const header = document.querySelector('.site-header');
            let inset = 12;
            if (header) {
                const style = window.getComputedStyle(header);
                if (style.position === 'sticky' || style.position === 'fixed') {
                    inset += Math.max(0, parseFloat(style.top) || 0) + header.getBoundingClientRect().height;
                }
            }
            const cover = journal.querySelector('summary');
            // Instant alignment avoids global smooth-scroll and closing-animation races,
            // and introduces no motion for users who prefer reduced motion.
            window.scrollTo({ top: Math.max(0, window.scrollY + cover.getBoundingClientRect().top - inset), behavior: 'instant' });
        });
    });
    pages.classList.add('notebook-compact'); activity.setNotebookLevel(1);
})();
