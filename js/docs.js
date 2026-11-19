"use strict";
//Date modified: 11/19/2026 
//Author: Leslie Brockman


document.querySelectorAll('.docs-page [data-featured-card]').forEach(card => {
    if (card.dataset.docsReady) return;

    const front = card.querySelector('[data-featured-face="front"]');
    const back = card.querySelector('[data-featured-face="back"]');
    const more = front.querySelector('[data-featured-flip="back"]');
    const backButton = back.querySelector('[data-featured-flip="front"]');

    function setFlipped(flipped) {
        const activeFace = flipped ? back : front;
        const inactiveFace = flipped ? front : back;
        const nextButton = flipped ? backButton : more;

        card.classList.toggle('is-flipped', flipped);
        more.setAttribute('aria-expanded', String(flipped));
        activeFace.inert = false;
        activeFace.setAttribute('aria-hidden', 'false');
        nextButton.focus();
        inactiveFace.inert = true;
        inactiveFace.setAttribute('aria-hidden', 'true');
    }

    more.addEventListener('click', () => setFlipped(true));
    backButton.addEventListener('click', () => setFlipped(false));
    card.dataset.docsReady = 'true';
});
