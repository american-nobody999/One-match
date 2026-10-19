// Modern Quest Board: one reusable, non-modal detail panel.
(() => {
    'use strict';
    const page = document.querySelector('.quests-page');
    if (!page) return;
    const panel = page.querySelector('#mq-detail-panel');
    const title = panel.querySelector('#mq-detail-title');
    const number = panel.querySelector('#mq-detail-number-value');
    const imageArea = panel.querySelector('.mq-detail-image');
    const descriptionArea = panel.querySelector('.mq-detail-description');
    const resourceArea = panel.querySelector('.mq-detail-resource');
    const buttons = Array.from(page.querySelectorAll('[data-quest-open]'));
    let trigger = null;

    function syncLanguage() {
        const arabic = document.documentElement.lang === 'ar';
        page.querySelector('.mq-main').dir = arabic ? 'rtl' : 'ltr';
        panel.dir = arabic ? 'rtl' : 'ltr';
        panel.querySelectorAll('.lang-en, .lang-ar').forEach(element => {
            element.classList.toggle('hidden', element.classList.contains('lang-ar') !== arabic);
        });
    }

    function bilingualLabel(element, english, arabic) {
        [['en', english], ['ar', arabic]].forEach(([language, text]) => {
            const label = document.createElement('span');
            label.setAttribute('class', `lang-${language}`);
            label.setAttribute('lang', language);
            label.textContent = text;
            element.append(label);
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = document.getElementById(button.dataset.questOpen);
            const source = card.querySelector('template').content;
            const heading = card.querySelector('h3');
            trigger = button;
            buttons.forEach(control => control.setAttribute('aria-expanded', String(control === button)));
            number.textContent = card.id.replace('quest-', '').padStart(2, '0');
            title.replaceChildren(...Array.from(heading.childNodes, node => node.cloneNode(true)));
            title.lang = heading.lang;
            title.dir = heading.dir;

            imageArea.replaceChildren();
            const image = source.querySelector('img');
            imageArea.hidden = !image;
            panel.classList.toggle('mq-detail-no-image', !image);
            if (image) imageArea.append(image.cloneNode(true));

            descriptionArea.replaceChildren();
            const description = source.querySelector('.mq-description');
            if (description) {
                const copy = description.cloneNode(true);
                if (!copy.querySelector('.lang-ar')) {
                    copy.lang = 'en';
                    copy.dir = 'ltr';
                }
                descriptionArea.append(copy);
            }

            resourceArea.replaceChildren();
            const destination = source.querySelector('a[href]');
            resourceArea.hidden = !destination;
            if (destination) {
                // Clone the trusted template anchor to preserve its URL and security attributes.
                const link = destination.cloneNode(false);
                link.setAttribute('class', 'mq-detail-link');
                bilingualLabel(link, 'Visit Resource ↗', 'زيارة المصدر ↗');
                resourceArea.append(link);
            }

            syncLanguage();
            panel.hidden = false;
            title.focus({ preventScroll: true });
            panel.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
                block: 'start'
            });
        });
    });

    panel.querySelector('.mq-detail-close').addEventListener('click', () => {
        panel.hidden = true;
        buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
        trigger?.focus({ preventScroll: true });
    });

    new MutationObserver(syncLanguage).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['lang']
    });
    syncLanguage();
})();
