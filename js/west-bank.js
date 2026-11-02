"use strict";
//Author: Leslie Brockman
//Date:11-01-2026
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
    function renderWeeklyRecap(community) {
        const recap = community.weeklyRecap;
        // Require complete, source-backed editorial data; never infer a recap or its date.
        const ready = recap && /^\d{4}-\d{2}-\d{2}$/.test(recap.date)
            && recap.textEn && recap.textAr && Array.isArray(recap.sources)
            && recap.sources.length > 0
            && recap.sources.every(source => source.labelEn && source.labelAr && source.url);
        if (!ready) {
            profile.append(textElement('h4', 'This Week', 'هذا الأسبوع'));
            profile.append(textElement('p', 'No weekly recap published yet.', 'لم يُنشر ملخص أسبوعي بعد.', 'research-pending'));
            return;
        }
        const hasDateLabels = recap.dateLabelEn && recap.dateLabelAr;
        profile.append(textElement('h4',
            hasDateLabels ? `This Week — ${recap.dateLabelEn}` : `This Week: ${recap.date} — ${community.nameEn}`,
            hasDateLabels ? `هذا الأسبوع — ${recap.dateLabelAr}` : `هذا الأسبوع: ${recap.date} — ${community.nameAr}`));
        profile.append(textElement('p', recap.textEn, recap.textAr, 'research-pending'));
        profile.append(textElement('h5', 'Weekly recap sources', 'مصادر الملخص الأسبوعي'));
        recap.sources.forEach(source => {
            const paragraph = document.createElement('p');
            const link = textElement('a', source.labelEn, source.labelAr);
            setLinkDestination(link, source.url);
            paragraph.append(link);
            profile.append(paragraph);
        });
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
            profile.append(textElement('p', community.backgroundEn, community.backgroundAr));
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
