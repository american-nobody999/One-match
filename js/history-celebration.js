
//Author: Leslie Brockman
//date modified: 2026-11-11
// Presentation-only certificates: read earned stars and reuse existing navigation/replay. Reuseable across different levels and activities.
'use strict';
(() => {
    const root = document.getElementById('history-ancient-activity');
    const art = document.getElementById('history-certificate-art');
    if (!root || !art) return;
    const nameSource = document.querySelector('[data-history-name-en]');
    const certificates = new Map(); let sequence = 0;
    const titles = [['Junior Archaeologist', 'عالم الآثار الصغير'], ['Archaeological Explorer', 'المستكشف الأثري'], ['Master Archaeologist', 'عالم الآثار الخبير']];
    const messages = [
        ['You examined evidence from ancient Jericho and completed your first expedition!', 'فحصت أدلة من أريحا القديمة وأكملت مغامرتك الأولى!'],
        ['You investigated seven questions and tested your ideas against the evidence!', 'بحثت في سبعة أسئلة واختبرت أفكارك بالأدلة!'],
        ['You connected evidence and interpretations to complete your master expedition!', 'ربطت الأدلة والتفسيرات لتكمل مغامرتك كعالم آثار خبير!']
    ];
    function pair(node, en, ar) {
        node.replaceChildren(); [en, ar].forEach((text, i) => { const span = document.createElement('span'); span.className = i ? 'history-ar' : 'history-en'; span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; node.append(span); });
    }
    function cloneArt(source, prefix) {
        const clone = source.cloneNode(true), ids = new Map();
        if (clone.id) { const old = clone.id; clone.id = `${prefix}-${old}`; ids.set(old, clone.id); }
        clone.querySelectorAll('[id]').forEach(node => { const old = node.id; node.id = `${prefix}-${old}`; ids.set(old, node.id); });
        [clone, ...clone.querySelectorAll('*')].filter(node => node.attributes).forEach(node => [...node.attributes].forEach(attribute => {
            let value = attribute.value;
            ids.forEach((replacement, original) => { value = value.split(`url(#${original})`).join(`url(#${replacement})`); if (value === `#${original}`) value = `#${replacement}`; });
            if (value !== attribute.value) node.setAttribute(attribute.name, value);
        })); return clone;
    }
    function personalize(heading) {
        const name = nameSource?.textContent.trim() || 'Explorer';
        const salutation = document.createElement('span'); salutation.className = 'certificate-salutation'; pair(salutation, 'Congratulations!', 'تهانينا!');
        const line = document.createElement('span'); line.className = 'journal-name-line'; line.dir = 'ltr'; line.dataset.nameLength = String(Array.from(name.replace(/\p{M}/gu, '')).length);
        const label = document.createElement('bdi'); label.className = 'journal-student-name'; label.dir = 'auto'; label.lang = /\p{Script_Extensions=Arabic}/u.test(name) ? 'ar' : 'en'; label.textContent = name; line.append(label);
        heading.replaceChildren(salutation, line);
    }
    [1, 2, 3].forEach(level => {
        const view = root.querySelector(`[data-expedition-level="${level}"]`);
        const results = view?.querySelector('[data-ancient-results]'); if (!results) return;
        const heading = results.querySelector('h5'), total = results.querySelector('[data-ancient-total]'), replay = results.querySelector('[data-ancient-again]');
        results.classList.add('expedition-certificate'); personalize(heading);
        const title = document.createElement('p'); title.className = 'certificate-earned-title'; pair(title, ...titles[level - 1]);
        const message = document.createElement('p'); message.className = 'certificate-message'; pair(message, ...messages[level - 1]);
        const stars = document.createElement('div'); stars.className = 'certificate-stars'; stars.setAttribute('aria-hidden', 'true');
        const seal = document.createElement('span'); seal.className = 'certificate-seal'; seal.setAttribute('aria-hidden', 'true');
        const actions = document.createElement('div'); actions.className = 'certificate-actions';
        const navigation = document.createElement('button'); navigation.type = 'button'; navigation.className = 'history-explore certificate-navigation'; navigation.dataset.certificateNext = String(level);
        pair(navigation, level === 1 ? 'Continue to Level 2' : level === 2 ? 'Continue to Level 3' : 'Return to Bookshelf', level === 1 ? 'الانتقال إلى المستوى الثاني' : level === 2 ? 'الانتقال إلى المستوى الثالث' : 'العودة إلى رف الكتب');
        const target = () => level < 3 ? document.querySelector(`[data-ancient-level="${level + 1}"]`) : document.querySelector('[data-history-back]');
        function refresh() {
            personalize(heading); stars.replaceChildren();
            view.querySelector('.ancient-stars').querySelectorAll('[data-ancient-star]').forEach(star => {
                if (star.dataset.earned !== 'true') return;
                const treasure = cloneArt(star, `certificate-${level}-star-${++sequence}`); treasure.removeAttribute('data-ancient-star'); treasure.className = 'certificate-earned-star'; stars.append(treasure);
            });
            const destination = target(); navigation.hidden = !destination || destination.disabled === true || (level < 3 && !document.getElementById(`history-ancient-level${level + 1}`));
        }
        navigation.addEventListener('click', () => { const destination = target(); if (destination && !destination.disabled && !navigation.hidden) destination.click(); });
        actions.append(navigation, replay);
        results.replaceChildren(cloneArt(art.content, `certificate-${level}-trophy`), heading, title, message, stars, total, seal, actions);
        refresh(); certificates.set(results, {heading, refresh});
    });
    const observer = new MutationObserver((records = []) => {
        if (records.some(record => record.type !== 'attributes')) certificates.forEach(certificate => personalize(certificate.heading));
        records.forEach(record => { const certificate = certificates.get(record.target); if (certificate && !record.target.hidden) certificate.refresh(); });
    });
    certificates.forEach((_, results) => observer.observe(results, {attributes: true, attributeFilter: ['hidden']}));
    if (nameSource) observer.observe(nameSource, {childList: true, characterData: true, subtree: true});
})();
