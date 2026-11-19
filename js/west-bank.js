"use strict";
//Author: Leslie Brockman
//Date:11-01-2026
//Date modified: 11-18-2026
// Explorer only: main.js remains responsible for shared language and navigation.
(() => {
    const explorer = document.querySelector('.west-bank-page .community-explorer');
    const communities = window.WEST_BANK_COMMUNITIES;
    if (!explorer || !Array.isArray(communities) || !communities.length) return;
    const regions = [
        { id: 'hebron', en: 'Hebron', ar: 'الخليل' },
        { id: 'jenin', en: 'Jenin', ar: 'جنين' },
        { id: 'tulkarm', en: 'Tulkarm', ar: 'طولكرم' },
        { id: 'tubas', en: 'Tubas', ar: 'طوباس' },
        { id: 'nablus', en: 'Nablus', ar: 'نابلس' },
        { id: 'ramallah', en: 'Ramallah', ar: 'رام الله' },
        { id: 'jericho-jordan-valley', en: 'Jericho & Jordan Valley', ar: 'أريحا والأغوار' },
        { id: 'other-areas', en: 'Other Areas', ar: 'مناطق أخرى' }
    ];
    const regionRoot = document.getElementById('region-buttons');
    const communityRoot = document.getElementById('community-buttons');
    const profile = document.getElementById('community-profile');
    const regionButtons = new Map();
    const communityButtons = new Map();
    const isArabic = () => document.documentElement.lang === 'ar';

    function bilingual(en, ar) {
        const fragment = document.createDocumentFragment();
        for (const [language, text] of [['en', en], ['ar', ar]]) {
            const span = document.createElement('span');
            span.className = `lang-${language}`;
            span.lang = language;
            span.dir = language === 'ar' ? 'rtl' : 'ltr';
            span.textContent = text;
            span.classList.toggle('hidden', (language === 'ar') !== isArabic());
            fragment.append(span);
        }
        return fragment;
    }
    function textElement(tag, en, ar, className) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.append(bilingual(en, ar));
        return element;
    }
    function setLinkDestination(link, href) {
        link.href = href;
        const destination = new URL(href, window.location.href);
        if (/^https?:$/.test(destination.protocol) && destination.origin !== window.location.origin) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    }
    function renderReportTiles(community) {
        const current = community.weeklyRecap;
        const stagedCurrent = community.id === 'hebron-city' || community.id === 'umm-al-khair';
        const currentReady = current && /^\d{4}-\d{2}-\d{2}$/.test(current.date) && (!stagedCurrent || current.date >= '2026-11-19') && current.textEn && current.textAr
            && Array.isArray(current.sources) && current.sources.length > 0
            && current.sources.every(source => source.labelEn && source.labelAr && source.url);
        const currentPanel = document.createElement('section');
        currentPanel.className = 'community-current-report';
        const pendingDateEn = community.pendingReport?.dateLabelEn || community.reportingStart?.labelEn || (stagedCurrent ? 'November 20, 2026' : null);
        const pendingDateAr = community.pendingReport?.dateLabelAr || community.reportingStart?.labelAr || (stagedCurrent ? '٢٠ نوفمبر ٢٠٢٦' : null);
        currentPanel.append(textElement('h4', currentReady ? `Current Report — ${current.dateLabelEn || current.date}` : pendingDateEn ? `Current Report — ${pendingDateEn}` : 'Current Report', currentReady ? `التقرير الحالي — ${current.dateLabelAr || current.date}` : pendingDateAr ? `التقرير الحالي — ${pendingDateAr}` : 'التقرير الحالي'));
        if (currentReady) {
            if (current.paragraphs || current.emphasizeFinalParagraph) {
                const english = current.textEn.split('\n\n');
                const arabic = current.textAr.split('\n\n');
                english.forEach((paragraph, index) => {
                    const item = textElement('p', paragraph, arabic[index] || '');
                    if (current.emphasizeFinalParagraph && index === english.length - 1) {
                        const emphasis = document.createElement('strong');
                        emphasis.append(...item.childNodes); item.append(emphasis);
                    }
                    currentPanel.append(item);
                });
            } else {
                currentPanel.append(textElement('p', current.textEn, current.textAr));
            }
            currentPanel.append(textElement('h5', 'Weekly recap sources', 'مصادر الملخص الأسبوعي'));
            current.sources.forEach(source => {
                const paragraph = document.createElement('p');
                const link = textElement('a', source.labelEn, source.labelAr);
                setLinkDestination(link, source.url);
                paragraph.append(link); currentPanel.append(paragraph);
            });
        } else {
            currentPanel.append(textElement('p', community.pendingReport?.textEn || (community.pendingReport ? 'Unpublished: the report and sources are awaiting approval.' : 'Reporting pending: verified updates and sources have not yet been supplied.'), community.pendingReport?.textAr || (community.pendingReport ? 'غير منشور: التقرير والمصادر بانتظار الاعتماد.' : 'التغطية قيد الانتظار: لم تُقدَّم بعد تحديثات ومصادر موثوقة.'), 'research-pending'));
        }
        profile.append(currentPanel);

        const history = Array.isArray(community.previousReports) ? [...community.previousReports] : [];
        if (stagedCurrent && current && !currentReady && !history.includes(current)) history.push(current);
        if (!history.length && ['jericho', 'aqabat-jaber', 'al-auja', 'fasayil', 'al-jiftlik'].includes(community.id)) return;
        history.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
        const section = document.createElement('section');
        section.className = 'community-report-archive';
        section.append(textElement('h4', 'Previous Reports', 'التقارير السابقة'));
        if (!history.length) {
            const newRegion = community.regionId === 'jericho-jordan-valley' && community.id !== 'jericho' && community.id !== 'aqabat-jaber';
            section.append(textElement('p', newRegion ? 'No previous reports yet. Reporting begins November 20, 2026.' : 'Previous reports will appear here.', newRegion ? 'لا توجد تقارير سابقة بعد. تبدأ التغطية في 20 نوفمبر 2026.' : 'ستظهر التقارير السابقة هنا.'));
            profile.append(section); return;
        }
        const grid = document.createElement('div'); grid.className = 'report-tile-grid';
        const panel = document.createElement('article');
        panel.className = 'report-tile-panel'; panel.id = `report-panel-${community.id}`; panel.hidden = true;
        let active = null;
        history.forEach((recap, index) => {
            const button = document.createElement('button'); button.type = 'button';
            button.className = 'report-date-tile'; button.id = `report-tile-${community.id}-${index}`;
            button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-controls', panel.id);
            const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            icon.setAttribute('viewBox', '0 0 32 32'); icon.setAttribute('aria-hidden', 'true'); icon.setAttribute('focusable', 'false');
            icon.innerHTML = '<rect x="3" y="5" width="26" height="23" rx="3" fill="#3d4c33" stroke="#d4b46a" stroke-width="2"/><path d="M8 3v5m16-5v5M4 12h24" stroke="#e3c487" stroke-width="2"/><circle cx="16" cy="20" r="5" fill="none" stroke="#f3dfae"/><path d="M16 15v10m0-5-3.5 3.5M16 20l3.5 3.5" fill="none" stroke="#f3dfae"/><path d="M5 27h5" stroke="#d84d4d" stroke-width="2"/><path d="M10 27h5" stroke="#e6e6dd" stroke-width="2"/><path d="M15 27h5" stroke="#1d251e" stroke-width="2"/><path d="M20 27h5" stroke="#6ea67a" stroke-width="2"/>';
            button.append(icon, textElement('span', recap.dateLabelEn || recap.date, recap.dateLabelAr || recap.date, 'report-tile-date'));
            const action = textElement('span', 'View Report', 'عرض التقرير', 'report-tile-action'); button.append(action);
            const chevron = document.createElement('span'); chevron.className = 'report-tile-chevron'; chevron.setAttribute('aria-hidden', 'true'); chevron.textContent = '⌄'; button.append(chevron);
            if (community.id === 'yabad' || community.id === 'tulkarm-refugee-camp' || community.id === 'nur-shams-refugee-camp' || community.id === 'khirbet-ras-al-ahmar' || community.id === 'tammun' || community.id === 'burin' || community.id === 'madama' || community.id === 'yabrud' || community.id === 'rammun' || community.id === 'immatin' || community.id === 'al-walaja' || community.id === 'silwan') {
                const ownPanel = document.createElement('article');
                ownPanel.className = 'report-tile-panel';
                ownPanel.id = `report-panel-${community.id}-${index}`;
                ownPanel.hidden = true;
                ownPanel.setAttribute('aria-labelledby', button.id);
                button.setAttribute('aria-controls', ownPanel.id);
                ownPanel.append(textElement('h5', recap.dateLabelEn || recap.date, recap.dateLabelAr || recap.date));
                ownPanel.append(textElement('p', recap.textEn, recap.textAr));
                if (Array.isArray(recap.sources) && recap.sources.length) ownPanel.append(textElement('h5', 'Weekly recap sources', 'مصادر الملخص الأسبوعي'));
                (recap.sources || []).forEach(source => {
                    const paragraph = document.createElement('p');
                    const link = textElement('a', source.labelEn, source.labelAr);
                    setLinkDestination(link, source.url);
                    paragraph.append(link); ownPanel.append(paragraph);
                });
                button.addEventListener('click', () => {
                    const opening = ownPanel.hidden;
                    ownPanel.hidden = !opening;
                    button.setAttribute('aria-expanded', String(opening));
                    action.replaceChildren(bilingual(opening ? 'Close Report' : 'View Report', opening ? 'إغلاق التقرير' : 'عرض التقرير'));
                });
                grid.append(button, ownPanel);
                return;
            }
            button.addEventListener('click', () => {
                const opening = active !== button;
                grid.querySelectorAll('.report-date-tile').forEach(item => {
                    item.setAttribute('aria-expanded', 'false');
                    item.querySelector('.report-tile-action').replaceChildren(bilingual('View Report', 'عرض التقرير'));
                });
                panel.hidden = true; panel.replaceChildren(); active = null;
                if (!opening) return;
                active = button; button.setAttribute('aria-expanded', 'true');
                action.replaceChildren(bilingual('Close Report', 'إغلاق التقرير'));
                panel.setAttribute('aria-labelledby', button.id);
                panel.append(textElement('h5', recap.dateLabelEn || recap.date, recap.dateLabelAr || recap.date));
                panel.append(textElement('p', recap.textEn, recap.textAr));
                if (Array.isArray(recap.sources) && recap.sources.length) panel.append(textElement('h5', 'Weekly recap sources', 'مصادر الملخص الأسبوعي'));
                (recap.sources || []).forEach(source => {
                    const paragraph = document.createElement('p'); const link = textElement('a', source.labelEn, source.labelAr);
                    setLinkDestination(link, source.url); paragraph.append(link); panel.append(paragraph);
                });
                panel.hidden = false;
            });
            grid.append(button);
        });
        section.append(grid, panel); profile.append(section);
    }
    function renderWeeklyRecap(community) {
        renderReportTiles(community);
    }
    function selectCommunity(community) {
        communityButtons.forEach((button, id) => {
            button.setAttribute('aria-pressed', String(id === community.id));
        });
        profile.replaceChildren();
        profile.dataset.communityId = community.id;
        const heading = document.createElement('h3');
        heading.id = 'community-profile-heading';
        heading.className = 'profile-community-heading';
        heading.append(textElement('span', 'ALL EYES ON THE WEST BANK!', 'كل الأنظار على الضفة الغربية!', 'profile-heading-alert'));
        heading.append(textElement('span', community.nameEn, community.nameAr, 'profile-heading-place'));
        const decoration = document.createElement('span');
        decoration.className = 'profile-heading-decoration';
        decoration.setAttribute('aria-hidden', 'true');
        decoration.textContent = '✌️ 👀 ✌️';
        heading.append(decoration);
        profile.append(heading);
        profile.append(textElement('p', community.governorateEn, community.governorateAr, 'profile-area'));
        if (community.imagePath) {
            const image = document.createElement('img');
            image.src = community.imagePath;
            image.alt = `${community.nameEn} / ${community.nameAr}`;
            image.loading = 'lazy';
            profile.append(image);
        }
        if (community.backgroundEn && community.backgroundAr) {
            profile.append(textElement('h4', 'Community background', 'خلفية عن المجتمع'));
            if (community.id === 'jericho' || community.id === 'aqabat-jaber' || community.id === 'al-auja' || community.id === 'fasayil' || community.id === 'al-jiftlik' || community.id === 'immatin' || community.id === 'al-walaja' || community.id === 'silwan') {
                const english = community.backgroundEn.split('\n\n');
                const arabic = community.backgroundAr.split('\n\n');
                english.forEach((paragraph, index) => profile.append(textElement('p', paragraph, arabic[index] || '')));
            } else {
                profile.append(textElement('p', community.backgroundEn, community.backgroundAr));
            }
        }
        profile.append(textElement('h4', 'Community location', 'موقع المجتمع'));
        if (community.locationMap) {
            const map = document.createElement('figure');
            map.className = 'community-location-map';
            const frame = document.createElement('iframe');
            frame.src = community.locationMap.embedUrl;
            frame.title = community.locationMap.titleEn && community.locationMap.titleAr
                ? `${community.locationMap.titleEn} / ${community.locationMap.titleAr}`
                : `Approximate community location: ${community.nameEn} / الموقع التقريبي للمجتمع: ${community.nameAr}`;
            frame.loading = 'lazy';
            frame.width = '600';
            frame.height = '300';
            map.append(frame);
            map.append(textElement('figcaption',
                community.locationMap.captionEn || 'Approximate community location, not an exact residential address.',
                community.locationMap.captionAr || 'موقع تقريبي للمجتمع، وليس عنوانًا سكنيًا دقيقًا.'));
            const larger = textElement('a', community.locationMap.buttonLabelEn || 'Open larger map',
                community.locationMap.buttonLabelAr || 'فتح خريطة أكبر', 'community-map-button');
            const pin = document.createElement('span');
            pin.className = 'community-map-button-icon';
            pin.setAttribute('aria-hidden', 'true');
            pin.textContent = '⚲';
            larger.prepend(pin);
            const external = document.createElement('span');
            external.className = 'community-map-button-icon';
            external.setAttribute('aria-hidden', 'true');
            external.textContent = '↗';
            larger.append(external);
            setLinkDestination(larger, community.locationMap.largerMapUrl);
            map.append(larger);
            profile.append(map);
        } else if (community.locationUrl) {
            const location = textElement('a', 'View community location', 'اعرض موقع المجتمع');
            setLinkDestination(location, community.locationUrl);
            profile.append(location);
        } else {
            profile.append(textElement('p', 'Location pending: a reliable map link has not yet been confirmed.', 'الموقع قيد البحث: لم يُؤكَّد بعد رابط خريطة موثوق.'));
        }
        if (!community.backgroundEn || !community.backgroundAr) {
            profile.append(textElement('p', 'Research pending: fuller community background is still being researched.',
                'البحث قيد الانتظار: لا يزال البحث جاريًا لإعداد خلفية أشمل عن المجتمع.', 'research-pending'));
        }
        renderWeeklyRecap(community);
        // Prefer multiple claim-specific references; preserve older single-source entries.
        const sources = Array.isArray(community.sources) && community.sources.length
            ? community.sources
            : community.sourceUrl ? [{ url: community.sourceUrl,
                labelEn: 'Read community source', labelAr: 'اقرأ مصدر المجتمع',
                publicationDate: community.sourcePublicationDate }] : [];
        if (sources.length) profile.append(textElement('h4', 'Community sources', 'مصادر المجتمع'));
        sources.forEach(source => {
            const paragraph = document.createElement('p');
            const link = textElement('a', source.labelEn, source.labelAr);
            setLinkDestination(link, source.url);
            paragraph.append(link);
            profile.append(paragraph);
            if (source.supportEn && source.supportAr) {
                profile.append(textElement('p', `Supports: ${source.supportEn}`, `يدعم: ${source.supportAr}`));
            }
        });
        // Keep each existing archive separate and below the community source list.
        const previousReports = profile.querySelector('.community-report-archive, .community-previous-reports');
        if (previousReports) profile.append(previousReports);
    }
    function selectRegion(region) {
        regionButtons.forEach((button, id) => {
            button.setAttribute('aria-pressed', String(id === region.id));
        });
        const members = communities.filter(community => community.regionId === region.id);
        communityRoot.replaceChildren();
        communityButtons.clear();
        members.forEach(community => {
            const button = textElement('button', community.nameEn, community.nameAr, 'community-choice');
            button.type = 'button';
            button.id = `choose-${community.id}`;
            button.setAttribute('aria-controls', 'community-profile');
            button.addEventListener('click', () => selectCommunity(community));
            communityButtons.set(community.id, button);
            communityRoot.append(button);
        });
        if (members.length) selectCommunity(members[0]);
    }
    regions.forEach(region => {
        const button = textElement('button', region.en, region.ar, 'region-choice');
        button.type = 'button';
        button.dataset.regionId = region.id;
        button.setAttribute('aria-controls', 'community-buttons community-profile');
        button.addEventListener('click', () => selectRegion(region));
        regionButtons.set(region.id, button);
        regionRoot.append(button);
    });
    function syncLanguage() {
        const ar = isArabic();
        explorer.querySelectorAll('.lang-en, .lang-ar').forEach(span => {
            span.classList.toggle('hidden', span.classList.contains('lang-ar') !== ar);
        });
        profile.lang = ar ? 'ar' : 'en';
        profile.dir = ar ? 'rtl' : 'ltr';
    }
    // Read shared state; do not register a second language-toggle handler.
    new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    selectRegion(regions[0]);
    syncLanguage();
    document.getElementById('explorer-controls').hidden = false;
})();
