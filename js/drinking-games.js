"use strict";

//Author:Leslie Brockman
//Date: 2026-10-30
(() => {
    const card = document.querySelector('#loser-of-the-week [data-loser-card]');
    if (!card) return;
    const front = card.querySelector('[data-loser-face="front"]');
    const back = card.querySelector('[data-loser-face="back"]');
    const more = front?.querySelector('[data-loser-flip="back"]');
    const reset = back?.querySelector('[data-loser-flip="front"]');
    if (!front || !back || !more || !reset) return;

    function showFace(showBack, moveFocus = true) {
        const visible = showBack ? back : front;
        const concealed = showBack ? front : back;
        visible.hidden = false;
        visible.inert = false;
        visible.removeAttribute('aria-hidden');
        visible.classList.toggle('is-revealed', moveFocus);
        more.setAttribute('aria-expanded', String(showBack));
        // Transfer focus before concealing the previously active control.
        if (moveFocus) (showBack ? reset : more).focus({ preventScroll: true });
        concealed.hidden = true;
        concealed.inert = true;
        concealed.setAttribute('aria-hidden', 'true');
        concealed.classList.remove('is-revealed');
    }

    showFace(false, false);
    more.addEventListener('click', () => showFace(true));
    reset.addEventListener('click', () => showFace(false));
})();
