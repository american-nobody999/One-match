// Author: Leslie Brockman
// Date modified: 11/27/2026
// Homepage only. Changed weekly

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.weekly-dispatch');
    if (!banner) return;

    let bannerVisible = true;
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target === banner) {
                    bannerVisible = entry.isIntersecting;
                    return;
                }
                entry.target.style.animationPlayState = entry.isIntersecting ? '' : 'paused';
            });
        }, { rootMargin: '80px 0px' });
        animationObserver.observe(banner);
        banner.closest('.home-main')
            ?.querySelectorAll('.interactive-wiggle, .big-top-invitation, .big-top-sparkle')
            .forEach(element => animationObserver.observe(element));
    }

    // WEEKLY EDITING AREA: fill a slot's bilingual fields, existing page URL,
    // and approved image URL/alt text, then set active: true. Blank fields are
    // intentional placeholders, never published content. week is optional.
    //Profanity! This is still not right, I have to keep playing with this.
    //Reuseable, modular weekly dispatch entries for the homepage. store for archives?
    const discoveries = [
        {
            slot: 'Feature slot 1 — Ele Elna Elak winter campaign', active: true,
            alignment: 'winter-campaign',
            category: { en: 'WINTER IN GAZA', ar: 'الشتاء في غزة' },
            headline: { en: 'NO BABY GOES COLD THIS WINTER!', ar: 'لن يبرد أي طفل هذا الشتاء!' },
            organization: { en: 'Ele Elna Elak | إلنا إلك', ar: 'إلنا إلك | Ele Elna Elak' },
            description: {
                en: "Ele Elna Elak filled 1,000 winter kits last week for children in Gaza. This week, they're calling for 2,000 more.\n\nPffft! We can do better than that.\n\n5,000 WINTER KITS. THAT'S OUR CHALLENGE.\n\nGet your debit cards out!",
                ar: 'جهّزت إلنا إلك ١٬٠٠٠ حزمة شتوية الأسبوع الماضي لأطفال غزة. وهذا الأسبوع تدعو إلى تجهيز ٢٬٠٠٠ حزمة إضافية.\n\nأفف! نستطيع أن نفعل أفضل من ذلك.\n\n٥٬٠٠٠ حزمة شتوية. هذا هو تحدّينا نحن.\n\nأخرجوا بطاقات الدفع!'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/united/ele1.jpg',
            imageAlt: { en: 'Ele Elna Elak Palestinian humanitarian campaign logo.', ar: 'شعار إلنا إلك، الحملة الإنسانية الفلسطينية.' },
            destinationUrl: 'united.html',
            destinationLabel: { en: 'Explore Their Story', ar: 'اكتشف قصتهم' },
            secondaryDestinationUrl: 'https://eleelnaelak.org/',
            secondaryDestinationLabel: { en: 'Support Their Work', ar: 'ادعم عملهم' },
            week: { en: '', ar: '' }
        },
        {
            slot: 'Feature slot 2 — Gaza Circus School Big Top', active: true,
            alignment: 'circus-school',
            category: { en: 'GAZA CIRCUS SCHOOL', ar: 'مدرسة سيرك غزة' },
            headline: { en: 'Help Rebuild Gaza Circus School!', ar: 'ساعدوا في إعادة بناء مدرسة سيرك غزة!' },
            description: {
                en: 'The Big Top is open!\n\nEnjoy the games, meet the performers, and help rebuild the circus for the children of Gaza.',
                ar: 'الخيمة الكبرى مفتوحة!\n\nاستمتعوا بالألعاب، وتعرّفوا إلى الفنانين، وساهموا في إعادة بناء السيرك لأطفال غزة.'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/gcs.png',
            imageAlt: { en: 'Gaza Circus School artwork.', ar: 'لوحة مدرسة سيرك غزة.' },
            destinationUrl: 'circus.html',
            destinationLabel: { en: 'Enjoy the Show 😊', ar: 'استمتعوا بالعرض 😊' },
            secondaryDestinationUrl: 'https://chuffed.org/project/213680-gaza-circus-school',
            secondaryDestinationLabel: { en: 'Help Rebuild the Circus', ar: 'ساعدوا في إعادة بناء السيرك' },
            week: { en: '', ar: '' }
        },
        {
            slot: 'Feature slot 3 — Featured Hero of the Week', active: true,
            alignment: 'featured-hero',
            category: { en: 'FEATURED HERO OF THE WEEK', ar: 'بطل الأسبوع المميز' },
            headline: { en: 'Gaza Poets Society', ar: 'جمعية شعراء غزة' },
            description: {
                en: "Meet this week's Featured Hero. Discover their story, their work, and why we're celebrating them.",
                ar: 'تعرّفوا إلى بطل هذا الأسبوع المميز، واكتشفوا قصته وعمله وسبب احتفائنا به.'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/featured/gazap.jpg',
            imageAlt: { en: 'Gaza Poets Society.', ar: 'جمعية شعراء غزة.' },
            destinationUrl: 'featured-hero.html',
            destinationLabel: { en: 'Meet Our Featured Hero', ar: 'تعرّفوا إلى بطلنا المميز' },
            week: { en: 'Friday, November 27, 2026', ar: 'الجمعة، ٢٧ نوفمبر ٢٠٢٦' }
        },
        {
            slot: 'Feature slot 4 — West Bank This Week', active: true,
            category: { en: 'WEST BANK • WEEKLY UPDATES', ar: 'الضفة الغربية • تحديثات أسبوعية' },
            headline: { en: 'West Bank This Week', ar: 'الضفة الغربية هذا الأسبوع' },
            description: {
                en: "Beyond the headlines are communities, families, and stories that deserve to be seen.\n\nFollow our weekly updates from across the West Bank, explore the communities, and stay connected to what's happening on the ground.",
                ar: 'وراء العناوين مجتمعات وعائلات وقصص تستحق أن تُرى.\n\nتابعوا تحديثاتنا الأسبوعية من أنحاء الضفة الغربية، وتعرّفوا إلى مجتمعاتها، وابقوا على اطلاع بما يحدث على الأرض.'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/index/wb.png',
            imageAlt: { en: 'West Bank community explorer artwork.', ar: 'صورة مستكشف مجتمعات الضفة الغربية.' },
            destinationUrl: 'west-bank.html',
            destinationLabel: { en: 'Explore the West Bank', ar: 'استكشف الضفة الغربية' },
            week: { en: '', ar: '' }
        },
        {
            slot: 'Feature slot 5 — Leslie\'s Quests', active: true,
            category: { en: 'NEW QUESTS • MPGA', ar: 'مهام جديدة • MPGA' },
            headline: { en: "Leslie's Quests — New Adventures Await!", ar: 'مهام ليزلي — مغامرات جديدة بانتظاركم!' },
            description: {
                en: "Our quest board is growing! Meet Breaking the Silence in Quest 09, discover Leslie's Dollys in Quest 10, and join the mission in Quest 11.\n\nMore quests, more voices, and more surprises coming soon!",
                ar: 'لوحة مهامنا تكبر! تعرّفوا على منظمة كسر الصمت في المهمة 09، واكتشفوا دمى ليزلي في المهمة 10، وانضموا إلى رسالتنا في المهمة 11.\n\nالمزيد من المهام، والمزيد من الأصوات، والمزيد من المفاجآت قريبًا!'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/1016/quest.png',
            imageAlt: { en: "Leslie's Quests artwork.", ar: 'أعمال فنية لمهام ليزلي.' },
            destinationUrl: 'quests.html',
            destinationLabel: { en: "Explore Leslie's Quests", ar: 'استكشفوا مهام ليزلي' },
            week: { en: '', ar: '' }
        },
        {
            slot: 'Feature slot 6 — Dr. Hussam Abu Safiya', active: true,
            category: { en: 'HEALTHCARE WORKERS', ar: 'العاملون في الرعاية الصحية' },
            headline: { en: 'Dr. Hussam Abu Safiya — Bring Him Home!', ar: 'الدكتور حسام أبو صفية — أعيدوه إلى بيته!' },
            description: {
                en: "On November 18, 2026, an Israeli court extended Dr. Hussam Abu Safiya's detention for another six months, without charges or trial, citing an alleged threat to Israel's security.\n\nThe Palestinian pediatrician and director of Gaza's Kamal Adwan Hospital has been detained since December 2024.\n\nMeanwhile, his humanitarian service continues to receive international recognition, including the **2026 Arab Doctor Award** and the **2026 Gianni Rufini Award**.\n\nThe United Nations has called for his immediate release.",
                ar: 'في ١٨ نوفمبر ٢٠٢٦، مدّدت محكمة إسرائيلية احتجاز الدكتور حسام أبو صفية ستة أشهر أخرى، من دون توجيه تهم إليه أو محاكمته، بدعوى أنه يشكّل تهديدًا لأمن إسرائيل.\n\nويُحتجز طبيب الأطفال الفلسطيني ومدير مستشفى كمال عدوان في غزة منذ ديسمبر ٢٠٢٤.\n\nوفي الوقت نفسه، يواصل عمله الإنساني نيل التقدير الدولي، بما في ذلك **جائزة الطبيب العربي لعام ٢٠٢٦** و**جائزة جياني روفيني لعام ٢٠٢٦**.\n\nوقد دعت الأمم المتحدة إلى الإفراج الفوري عنه.'
            },
            imageUrl: 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/biosite/01.jpg',
            imageAlt: { en: 'Poster with a portrait of Dr. Hussam Abu Safiya.', ar: 'ملصق يحمل صورة الدكتور حسام أبو صفية.' },
            destinationUrl: 'biosite/index.html',
            destinationLabel: { en: 'Give Us Back Our Dolly!', ar: 'أعيدوا إلينا دميتنا!' },
            week: { en: '', ar: '' }
        }
    ];
    // END WEEKLY EDITING AREA
    const filled = value => typeof value === 'string' && value.trim().length > 0;
    const bilingual = value => value && filled(value.en) && filled(value.ar);
    const activeFeatures = discoveries.filter(item => item.active &&
        ['category', 'headline', 'description', 'imageAlt'].every(key => bilingual(item[key])) &&
        filled(item.imageUrl) && filled(item.destinationUrl));
    let currentIndex = 0;
    let timer = null;
    let userPaused = false;
    let displayedIndex = null;
    let pauseLabelState = '';
    let preloadedImage = null;
    let preloadedUrl = '';
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let motionOverride = false;
    const find = selector => banner.querySelector(selector);
    const feature = find('.weekly-dispatch-feature');
    const image = find('.weekly-dispatch-image');
    const indicator = find('.weekly-dispatch-indicator');
    const pauseButton = find('[data-dispatch-action="pause"]');
    const language = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const text = (en, ar) => language() === 'ar' ? ar : en;

    function resetPauseLabel() {
        const paused = userPaused || (motion.matches && !motionOverride);
        const state = `${language()}:${paused}`;
        if (state === pauseLabelState) return;
        pauseLabelState = state;
        pauseButton.replaceChildren();
        const icon = document.createElement('span');
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = paused ? '▶' : '❚❚';
        pauseButton.append(icon, ` ${paused ? text('Play', 'تشغيل') : text('Pause', 'إيقاف مؤقت')}`);
        pauseButton.setAttribute('aria-label', paused ? text('Resume automatic rotation', 'استئناف التدوير التلقائي') : text('Pause automatic rotation', 'إيقاف التدوير التلقائي مؤقتًا'));
        pauseButton.title = pauseButton.getAttribute('aria-label');
    }

    function resetRotation() {
        if (timer !== null) window.clearTimeout(timer);
        timer = null;
        const paused = userPaused || (motion.matches && !motionOverride);
        const rotating = activeFeatures.length > 1 && !paused && !document.hidden;
        const liveMode = rotating ? 'off' : 'polite';
        if (indicator.getAttribute('aria-live') !== liveMode) indicator.setAttribute('aria-live', liveMode);
        resetPauseLabel();
        if (rotating) timer = window.setTimeout(nextCard, 4000);
    }

    function showCard(resetTimer = true) {
        const lang = language();
        const direction = lang === 'ar' ? 'rtl' : 'ltr';
        if (banner.dir !== direction) banner.dir = direction;
        const empty = find('.weekly-dispatch-empty');
        const hasFeatures = activeFeatures.length > 0;
        const pauseDisabled = activeFeatures.length < 2;
        if (pauseButton.disabled !== pauseDisabled) pauseButton.disabled = pauseDisabled;
        if (feature.hidden === hasFeatures) feature.hidden = !hasFeatures;
        if (empty.hidden !== hasFeatures) empty.hidden = hasFeatures;
        const indicatorText = hasFeatures ? text(`Feature ${currentIndex + 1} of ${activeFeatures.length}`, `المختار ${currentIndex + 1} من ${activeFeatures.length}`) : text('No active features', 'لا توجد مختارات نشطة');
        if (indicator.textContent !== indicatorText) indicator.textContent = indicatorText;
        if (activeFeatures.length) {
            const item = activeFeatures[currentIndex];
            const dispatchCard = item.alignment || '';
            if (feature.dataset.dispatchCard !== dispatchCard) feature.dataset.dispatchCard = dispatchCard;
            ['category', 'headline'].forEach(key => {
                const element = find(`.weekly-dispatch-${key}`);
                if (element.textContent !== item[key][lang]) element.textContent = item[key][lang];
            });
            const description = find('.weekly-dispatch-description');
            const descriptionText = item.description[lang];
            if (description.textContent !== descriptionText.replace(/\*\*([^*]+)\*\*/g, '$1')) {
                const descriptionParts = descriptionText.split(/\*\*([^*]+)\*\*/);
                description.replaceChildren(...descriptionParts.map((part, index) => {
                    if (index % 2 === 0) return part;
                    const emphasis = document.createElement('strong');
                    emphasis.textContent = part;
                    return emphasis;
                }));
            }
            if (image.getAttribute('src') !== item.imageUrl) image.src = item.imageUrl;
            if (image.alt !== item.imageAlt[lang]) image.alt = item.imageAlt[lang];
            preloadNextImage();
            const organization = find('.weekly-dispatch-organization');
            const organizationText = item.organization?.[lang] || '';
            if (organization.textContent !== organizationText) organization.textContent = organizationText;
            const organizationHidden = !organizationText;
            if (organization.hidden !== organizationHidden) organization.hidden = organizationHidden;
            const link = find('.weekly-dispatch-link');
            if (link.getAttribute('href') !== item.destinationUrl) link.href = item.destinationUrl;
            const linkText = item.destinationLabel?.[lang] || text('Visit featured page', 'زيارة الصفحة المختارة');
            if (link.textContent !== linkText) link.textContent = linkText;
            const secondaryLink = find('.weekly-dispatch-link-secondary');
            const hasSecondaryLink = filled(item.secondaryDestinationUrl) && bilingual(item.secondaryDestinationLabel);
            if (secondaryLink.hidden === hasSecondaryLink) secondaryLink.hidden = !hasSecondaryLink;
            if (hasSecondaryLink) {
                if (secondaryLink.getAttribute('href') !== item.secondaryDestinationUrl) secondaryLink.href = item.secondaryDestinationUrl;
                if (secondaryLink.textContent !== item.secondaryDestinationLabel[lang]) secondaryLink.textContent = item.secondaryDestinationLabel[lang];
            } else {
                if (secondaryLink.hasAttribute('href')) secondaryLink.removeAttribute('href');
                if (secondaryLink.textContent) secondaryLink.textContent = '';
            }
            const week = find('.weekly-dispatch-week');
            const weekText = item.week?.[lang] || '';
            if (week.textContent !== weekText) week.textContent = weekText;
            const weekHidden = !weekText;
            if (week.hidden !== weekHidden) week.hidden = weekHidden;
            if (bannerVisible && displayedIndex !== null && displayedIndex !== currentIndex && !motion.matches) {
                feature.animate([{ opacity: .65, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 220, easing: 'ease-out' });
            }
            displayedIndex = currentIndex;
        }
        if (resetTimer) resetRotation();
    }

    function preloadNextImage() {
        if (activeFeatures.length < 2 || document.hidden || userPaused || (motion.matches && !motionOverride)) return;
        const nextUrl = activeFeatures[(currentIndex + 1) % activeFeatures.length].imageUrl;
        if (nextUrl === preloadedUrl) return;
        preloadedImage = new Image();
        preloadedImage.decoding = 'async';
        preloadedImage.fetchPriority = 'low';
        preloadedImage.src = nextUrl;
        preloadedUrl = nextUrl;
    }

    function nextCard() {
        if (activeFeatures.length) currentIndex = (currentIndex + 1) % activeFeatures.length;
        showCard();
    }
    pauseButton.addEventListener('click', () => {
        if (motion.matches && !motionOverride) { motionOverride = true; userPaused = false; }
        else userPaused = !userPaused;
        preloadNextImage();
        resetRotation();
    });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) preloadNextImage();
        resetRotation();
    });
    motion.addEventListener('change', () => { motionOverride = false; showCard(); });
    // Observe the existing global language state; no second toggle or language store.
    new MutationObserver(() => { showCard(false); resetPauseLabel(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    showCard();
});
