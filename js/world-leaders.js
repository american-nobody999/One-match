//Author: Leslie Brockman
//Date modified: 11/06/2026
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
            let returnTrigger = trigger;
            const isWorkBack = activeDialog?.id === 'leader-work-together-modal'
                && trigger.dataset.leaderModal === 'leader-1-modal';
            if (activeDialog) {
                // Allow chooser paths and the Work Together return through the same cleanup.
                if (trigger.closest('dialog') !== activeDialog
                    || (activeDialog.id !== 'leader-1-modal' && !isWorkBack)) return;
                const previousDialog = activeDialog;
                returnTrigger = activeTrigger;
                previousDialog.close();
                // close events are queued: finish synchronously before opening the next modal.
                finishClose(previousDialog);
            }
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
            const focusTarget = isWorkBack
                ? dialog.querySelector('[data-leader-modal="leader-work-together-modal"]')
                : dialog.querySelector('h2');
            (focusTarget || dialog).focus({ preventScroll: true });
            dialog.scrollTop = 0;
            activeTrigger = returnTrigger;
            activeDialog = dialog;
            previousOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        });
    });
});
