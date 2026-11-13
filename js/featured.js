// Author: Leslie Brockman
//date modified: 2026-11-11
// Portrait archive and one shared story viewer. Content lives in featured-data.js.Clean up. This is going to get annoying after a few months
"use strict";
(() => {
    const page = document.querySelector('.featured-page');
    const heroes = window.MPGAFeaturedHeroes;
    if (!page || !Array.isArray(heroes) || page.dataset.featuredReady) return;
    const gallery = page.querySelector('[data-featured-gallery]');
    const viewer = page.querySelector('[data-featured-story]');
    const content = page.querySelector('[data-featured-story-content]');
    const close = page.querySelector('[data-featured-close]');
    if (!gallery || !viewer || !content || !close) return;
    page.dataset.featuredReady = 'true';
    let selectedButton = null;

    function element(tag, className = '') {
        const node = document.createElement(tag);
        if (className) node.className = className;
        return node;
    }
    function appendText(parent, value) {
        if (Array.isArray(value)) {
            value.forEach(run => {
                const node = run.emphasis ? element('em') : document.createTextNode('');
                node.textContent = run.text;
                parent.append(node);
            });
        } else parent.textContent = value;
    }
    function bilingual(parent, value) {
        ['en', 'ar'].forEach(language => {
            const span = element('span', `lang-${language}`);
            span.lang = language;
            span.dir = language === 'ar' ? 'rtl' : 'ltr';
            span.classList.toggle('hidden', language !== document.documentElement.lang);
            appendText(span, value[language]);
            parent.append(span);
        });
        return parent;
    }
    function safeURL(value) {
        try {
            const url = new URL(value);
            return url.protocol === 'https:' ? url.href : null;
        } catch { return null; }
    }
    function image(data, className) {
        const img = element('img', className);
        const url = safeURL(data.url);
        if (url) img.src = url;
        img.alt = data.alt;
        img.loading = 'lazy';
        img.decoding = 'async';
        return img;
    }
    function link(data, className) {
        const anchor = element('a', className);
        const url = safeURL(data.url);
        if (url) anchor.href = url;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        return anchor;
    }
    function date(hero) {
        if (!hero.featuredDate) return null;
        const paragraph = element('p', 'featured-date');
        ['en', 'ar'].forEach(language => {
            const span = element('span', `lang-${language}`);
            span.lang = language;
            span.dir = language === 'ar' ? 'rtl' : 'ltr';
            span.append(document.createTextNode(language === 'ar' ? 'أسبوع التكريم: ' : 'Featured week: '));
            const time = element('time');
            time.dateTime = hero.featuredDate;
            time.textContent = hero.dateLabels[language];
            span.append(time);
            paragraph.append(span);
        });
        return paragraph;
    }
    function paragraph(data) {
        const p = element('p');
        if ('text' in data) {
            const text = data.emphasis ? element('em') : p;
            text.textContent = data.text;
            if (text !== p) p.append(text);
        } else bilingual(p, data);
        return p;
    }
    function syncLanguage() {
        const language = document.documentElement.lang === 'ar' ? 'ar' : 'en';
        [gallery, viewer].forEach(region => {
            region.dir = language === 'ar' ? 'rtl' : 'ltr';
            region.querySelectorAll('.lang-en, .lang-ar').forEach(span => {
                span.classList.toggle('hidden', !span.classList.contains(`lang-${language}`));
            });
        });
    }
    function closeStory() {
        if (viewer.hidden) return;
        // Removing the iframe destroys its playback context, including audio.
        content.replaceChildren();
        viewer.hidden = true;
        if (selectedButton) {
            selectedButton.setAttribute('aria-expanded', 'false');
            selectedButton.focus();
        }
    }
    function openStory(hero, button) {
        if (selectedButton) selectedButton.setAttribute('aria-expanded', 'false');
        selectedButton = button;
        button.setAttribute('aria-expanded', 'true');
        content.replaceChildren();
        const heading = bilingual(element('h2'), hero.names);
        heading.id = 'featured-story-heading';
        heading.tabIndex = -1;
        const header = element('div', 'featured-story-intro');
        const copy = element('div');
        copy.append(heading);
        const featuredDate = date(hero);
        if (featuredDate) copy.append(featuredDate);
        if (hero.storyHeading) copy.append(bilingual(element('h3'), hero.storyHeading));
        header.append(image(hero.portrait, 'featured-story-portrait'), copy);
        content.append(header);
        const body = element('div', 'featured-story-body');
        hero.biography.forEach(data => body.append(paragraph(data)));
        const socials = element('div', 'featured-socials');
        hero.socialLinks.forEach(data => {
            const anchor = link(data, 'featured-social-link');
            anchor.setAttribute('aria-label', data.label);
            anchor.append(image(data.icon, 'featured-social-icon'));
            socials.append(anchor);
        });
        body.append(socials);
        (hero.sections || []).forEach(data => {
            const section = element('section', 'featured-story-section');
            if (data.heading) section.append(bilingual(element('h3'), data.heading));
            (data.paragraphs || []).forEach(p => section.append(paragraph(p)));
            const links = element('div', 'featured-support-links');
            (data.linkIds || []).forEach(id => {
                const support = hero.supportLinks.find(item => item.id === id);
                if (support) links.append(bilingual(link(support, 'featured-button'), support.label));
            });
            if (links.childElementCount) section.append(links);
            (data.videoIds || []).forEach(id => {
                const video = hero.videos.find(item => item.id === id);
                const url = video && safeURL(video.url);
                if (!url) return;
                const parsed = new URL(url);
                if (parsed.hostname !== 'www.youtube-nocookie.com' || !parsed.pathname.startsWith('/embed/')) return;
                const frame = element('iframe', 'featured-video');
                frame.src = url;
                frame.title = video.title;
                frame.allow = video.allow;
                frame.referrerPolicy = video.referrerPolicy;
                frame.allowFullscreen = true;
                section.append(frame);
            });
            body.append(section);
        });
        content.append(body);
        viewer.hidden = false;
        syncLanguage();
        heading.focus({ preventScroll: true });
        viewer.scrollIntoView({ block: 'start', behavior: 'instant' });
    }

    heroes.forEach(hero => {
        const card = element('article', 'featured-card');
        card.id = `featured-${hero.id}`;
        const heading = bilingual(element('h3'), hero.names);
        heading.id = `${card.id}-name`;
        card.setAttribute('aria-labelledby', heading.id);
        const button = bilingual(element('button', 'featured-button'), {
            en: 'Read Their Story', ar: 'اقرأ قصتهم'
        });
        button.type = 'button';
        button.dataset.featuredOpen = hero.id;
        button.setAttribute('aria-controls', viewer.id);
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-describedby', heading.id);
        card.append(image(hero.portrait, 'featured-card-portrait'), heading);
        const featuredDate = date(hero);
        if (featuredDate) card.append(featuredDate);
        card.append(button);
        gallery.append(card);
    });
    // One delegated listener per interaction, regardless of how often stories open.
    gallery.addEventListener('click', event => {
        const button = event.target.closest('[data-featured-open]');
        if (!button || !gallery.contains(button)) return;
        const hero = heroes.find(item => item.id === button.dataset.featuredOpen);
        if (hero) openStory(hero, button);
    });
    gallery.addEventListener('keydown', event => {
        const buttons = [...gallery.querySelectorAll('[data-featured-open]')];
        const index = buttons.indexOf(event.target);
        if (index < 0) return;
        const rtl = gallery.dir === 'rtl';
        let next;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = buttons.length - 1;
        if (event.key === 'ArrowRight') next = (index + (rtl ? -1 : 1) + buttons.length) % buttons.length;
        if (event.key === 'ArrowLeft') next = (index + (rtl ? 1 : -1) + buttons.length) % buttons.length;
        if (next !== undefined) { event.preventDefault(); buttons[next].focus(); }
    });
    close.addEventListener('click', closeStory);
    viewer.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !event.defaultPrevented) {
            event.preventDefault();
            closeStory();
        }
    });
    // main.js owns the toggle; observe its language state for newly rendered content.
    new MutationObserver(syncLanguage).observe(document.documentElement, {
        attributes: true, attributeFilter: ['lang']
    });
    syncLanguage();
})();
