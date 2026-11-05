/* Gaza Circus entrance only. Add an approved source to the video's data-intro-src. -- DONT TOUCH ANY OF THIS--PHASE 2--Activly workin
Author: American Nobody
Date last modified: 2026-11-04 */
(() => {
    'use strict';
    const stage = document.querySelector('.circus-entrance');
    const dialog = document.getElementById('circus-intro-dialog');
    const video = document.getElementById('circus-intro-video');
    const play = document.getElementById('circus-intro-play');
    if (!stage || !dialog || !video || !play || typeof dialog.showModal !== 'function') return;
    const configured = (video.dataset.introSrc || '').trim();
    if (!configured) return; // No source: keep the development notice, never open an empty player.
    let source;
    try {
        source = new URL(configured, document.baseURI);
        if (!['https:', 'http:'].includes(source.protocol)) return;
    } catch { return; }

    let shown = false;
    let dismissed = false;
    let curtainsReady = false;
    let mediaReady = false;
    let failed = false;
    let previousFocus;
    let delay;
    const attemptPlayback = async () => {
        if (!dialog.open || dismissed) return;
        play.hidden = true;
        try { await video.play(); }
        catch { if (dialog.open && !dismissed) play.hidden = false; }
        if (!dialog.open || dismissed) video.pause();
    };
    const maybeOpen = () => {
        if (!curtainsReady || !mediaReady || failed || shown || dismissed) return;
        // Metadata and a real video track must load successfully before opening.
        if (video.error || !video.videoWidth || video.readyState < 1) return;
        previousFocus = document.activeElement;
        try { dialog.showModal(); }
        catch { return; }
        shown = true;
        video.autoplay = true;
        video.muted = true;
        video.currentTime = 0;
        dialog.querySelector('[data-circus-close]').focus();
        const notice = stage.querySelector('.circus-intro-development');
        if (notice) notice.hidden = true;
        attemptPlayback();
    };
    const close = () => { if (dialog.open) dialog.close(); };
    dialog.querySelectorAll('[data-circus-close]').forEach(button => button.addEventListener('click', close));
    // Native modal dialog supplies focus containment and Escape cancellation.
    dialog.addEventListener('close', () => {
        dismissed = true;
        video.pause();
        play.hidden = true;
        const target = previousFocus instanceof HTMLElement && previousFocus !== document.body && previousFocus.isConnected
            ? previousFocus : document.getElementById('circus-main-attraction');
        target?.focus({ preventScroll: true });
    });
    play.addEventListener('click', attemptPlayback);
    video.addEventListener('loadedmetadata', () => {
        mediaReady = Boolean(video.videoWidth) && !video.error;
        maybeOpen();
    }, { once: true });
    video.addEventListener('error', () => {
        failed = true;
        clearTimeout(delay);
        close();
    });
    // Wait for the actual CSS animations (including ones already in progress).
    // Reduced motion/unsupported animation API means there is no animation to await.
    const animations = [...stage.querySelectorAll('.circus-curtain')]
        .flatMap(panel => typeof panel.getAnimations === 'function' ? panel.getAnimations() : []);
    Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
        if (failed || dismissed) return;
        delay = setTimeout(() => { curtainsReady = true; maybeOpen(); }, 2000);
    });
    // No autoplay until the scheduled popup: the autoplay attribute is re-enabled at opening.
    video.autoplay = false;
    video.src = source.href;
    video.load();
})();
