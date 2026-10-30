// Author: Leeslie Brockman
// Date:2026-10-30
"use strict";
function initHeroDirectory({galleryId, prefix}) {
    const gallery = document.getElementById(galleryId);
    const select = document.getElementById(`${prefix}-select`);
    if (!gallery || !select) return;
    const cards = Array.from(gallery.querySelectorAll(':scope > .source-card'));
    const previous = document.getElementById(`${prefix}-previous`);
    const next = document.getElementById(`${prefix}-next`);
    const indicator = document.getElementById(`${prefix}-page`);
    let page = 0;
    let selectedId = '';
    const arabic = () => document.documentElement.lang === 'ar';
    cards.forEach(card => {
        const option = document.createElement('option');
        option.value = card.id;
        select.append(option);
        card.tabIndex = -1;
    });
    function update() {
        const pages = cards.length;
        page = Math.max(0, Math.min(page, Math.max(0, pages - 1)));
        selectedId = cards[page]?.id || '';
        cards.forEach((card, index) => {
            card.hidden = index !== page;
            card.classList.toggle('is-selected', card.id === selectedId);
            const title = card.querySelector('.card-title');
            const name = title.querySelector(arabic() ? '.lang-ar' : '.lang-en') || title;
            select.options[index].textContent = name.textContent.trim();
        });
        selectedId = cards[page]?.id || '';
        select.value = selectedId;
        previous.disabled = page === 0;
        next.disabled = page + 1 >= pages;
        indicator.textContent = arabic() ? `الصفحة ${pages ? page + 1 : 0} من ${pages}` : `Page ${pages ? page + 1 : 0} of ${pages}`;
    }
    function reveal(id, focus) {
        const index = cards.findIndex(card => card.id === id);
        if (index < 0) return;
        selectedId = id;
        page = index;
        select.value = id;
        update();
        if (focus) cards[index].focus();
    }
    select.addEventListener('change', () => {
        if (select.value) reveal(select.value, true);
        else { selectedId = ''; update(); }
    });
    previous.addEventListener('click', () => {
        if (page > 0) { page--; update(); }
    });
    next.addEventListener('click', () => {
        if (page + 1 < cards.length) { page++; update(); }
    });
    const revealHash = () => reveal(window.location.hash.slice(1), false);
    window.addEventListener('hashchange', revealHash);
    new MutationObserver(update).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});
    document.getElementById(`${prefix}-pagination`).hidden = false;
    update();
    revealHash();
}
[
    {galleryId: 'journalists-gallery', prefix: 'journalist'},
    {galleryId: 'sources-gallery', prefix: 'research'},
    {galleryId: 'their-voices-gallery', prefix: 'memorial'}
].forEach(initHeroDirectory);
