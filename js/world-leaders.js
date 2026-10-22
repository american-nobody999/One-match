//Author: Leslie Brockman
//Date modified: 10/21/2026
'use strict';

// Native dialogs provide background inertness, keyboard containment, and Escape handling.
document.addEventListener('DOMContentLoaded', () => {
    function initElectionCountdown() {
        const dialog = document.getElementById('leader-1-modal');
        if (!dialog) return;
        const countdown = dialog.querySelector('#countdown');
        const days = dialog.querySelector('#days');
        const hours = dialog.querySelector('#hours');
        const minutes = dialog.querySelector('#minutes');
        const seconds = dialog.querySelector('#seconds');
        const status = dialog.querySelector('#countdown-status');
        if (!countdown || !days || !hours || !minutes || !seconds || !status || countdown.dataset.initialized) return;
        countdown.dataset.initialized = 'true';
        // Preserve the original visitor-local midnight target.
        const targetDate = new Date('January 20, 2029 00:00:00').getTime();
        let interval = null;
        function updateCountdown() {
            const remaining = Math.max(0, targetDate - Date.now());
            days.textContent = String(Math.floor(remaining / 86400000));
            hours.textContent = String(Math.floor((remaining % 86400000) / 3600000));
            minutes.textContent = String(Math.floor((remaining % 3600000) / 60000));
            seconds.textContent = String(Math.floor((remaining % 60000) / 1000));
            status.hidden = remaining > 0;
            if (remaining === 0) {
                if (interval !== null) clearInterval(interval);
                interval = null;
                return false;
            }
            return true;
        }
        if (updateCountdown()) interval = setInterval(updateCountdown, 1000);
    }
    initElectionCountdown();

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
            dialog.querySelector('h2').focus({ preventScroll: true });
            dialog.scrollTop = 0;
            activeTrigger = trigger;
            activeDialog = dialog;
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        });
    });
});
