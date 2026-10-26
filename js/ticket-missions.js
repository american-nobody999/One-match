/* Author:Leslie Brockman Date modified: 10-26-2026*/
//
(() => {
    'use strict';
    const section = document.querySelector('.flotilla-missions');
    if (!section) return;
    const trigger = section.querySelector('[data-flotilla-open]');
    const dialog = section.querySelector('#flotilla-directory');
    const closeButton = section.querySelector('[data-flotilla-close]');
    if (!trigger || !dialog || !closeButton) return;

    trigger.addEventListener('click', () => {
        if (!dialog.open) dialog.showModal();
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => trigger.focus({ preventScroll: true }));
})();
