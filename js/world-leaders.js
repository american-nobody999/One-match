//Author: Leslie Brockman
//Date modified: 11/11/2026
'use strict';

// Native dialogs provide background inertness, keyboard containment, and Escape handling.
document.addEventListener('DOMContentLoaded', () => {
    let activeDialog = null;
    let activeTrigger = null;
    let previousOverflow = '';

    function finishClose(dialog) {
        if (activeDialog !== dialog) return;
        const frame = dialog.querySelector('iframe');
        frame?.removeAttribute('src'); // Stop playback and unload the embedded document.
        document.body.style.overflow = previousOverflow;
        activeDialog = null;
        activeTrigger?.focus({ preventScroll: true });
        activeTrigger = null;
    }

    document.querySelectorAll('.world-leader-modal').forEach(dialog => {
        dialog.querySelector('.world-leader-close').addEventListener('click', () => dialog.close());
        dialog.addEventListener('close', () => finishClose(dialog));
    });

    document.querySelectorAll('[data-leader-modal]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            if (activeDialog) return;
            const dialog = document.getElementById(trigger.dataset.leaderModal);
            if (!dialog) return;
            const frame = dialog.querySelector('iframe');
            const placeholder = dialog.querySelector('.world-leader-video-placeholder');
            const videoURL = (frame?.dataset.videoSrc || '').trim();
            const hasVideo = /^https:\/\/www\.youtube-nocookie\.com\/embed\/[a-zA-Z0-9_-]{11}$/.test(videoURL);
            if (frame) {
                frame.parentElement.hidden = !hasVideo;
                if (hasVideo) frame.src = videoURL;
            }
            if (placeholder) placeholder.hidden = hasVideo;
            dialog.showModal();
            // Start at the heading on every open, including after a previous scroll.
            const focusTarget = dialog.querySelector('h2');
            (focusTarget || dialog).focus({ preventScroll: true });
            dialog.scrollTop = 0;
            activeTrigger = trigger;
            activeDialog = dialog;
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        });
    });
});

// January 20, 2029 at noon in America/New_York (EST, UTC-05:00).
(() => {
    const fields = document.querySelectorAll('[data-trump-countdown]');
    if (!fields.length) return;
    const target = Date.parse('2029-01-20T12:00:00-05:00');
    let timer;
    function update() {
        const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000));
        const values = {
            days: Math.floor(remaining / 86400),
            hours: Math.floor(remaining / 3600) % 24,
            minutes: Math.floor(remaining / 60) % 60,
            seconds: remaining % 60
        };
        fields.forEach(field => {
            field.textContent = String(values[field.dataset.trumpCountdown]).padStart(2, '0');
        });
        if (remaining === 0 && timer) clearInterval(timer);
        return remaining;
    }
    if (update() > 0) timer = setInterval(update, 1000);
})();
