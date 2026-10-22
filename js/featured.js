// author: Leslie Brockman
// date modified: 10/23/2026
"use strict";

// Each card owns its state; no page-specific content or shared toggle logic here.
document.querySelectorAll('[data-featured-card]').forEach(card => {
    const front = card.querySelector('[data-featured-face="front"]');
    const back = card.querySelector('[data-featured-face="back"]');
    const more = front?.querySelector('[data-featured-flip="back"]');
    const reset = back?.querySelector('[data-featured-flip="front"]');
    if (!front || !back || !more || !reset) return;

    function showFace(showBack, moveFocus = true) {
        const visible = showBack ? back : front;
        const concealed = showBack ? front : back;
        visible.inert = false;
        visible.removeAttribute('aria-hidden');
        card.classList.toggle('is-flipped', showBack);
        more.setAttribute('aria-expanded', String(showBack));
        // Move focus before hiding the face that previously held it.
        if (moveFocus) (showBack ? reset : more).focus({ preventScroll: true });
        concealed.inert = true;
        concealed.setAttribute('aria-hidden', 'true');
        if (!showBack) {
            // Reload the same URL to stop playback when returning to the front.
            back.querySelectorAll('iframe').forEach(frame => {
                const src = frame.getAttribute('src');
                if (src) frame.setAttribute('src', src);
            });
        }
    }

    showFace(false, false);
    more.addEventListener('click', () => showFace(true));
    reset.addEventListener('click', () => showFace(false));
});
