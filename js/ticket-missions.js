/* Author: Leslie Brockman
 Date modified: 11/22/2026 
 Description: Ticket missions configuration and logic
 */
(() => {
    'use strict';

    const table = document.querySelector('[data-ticket-table]');
    if (!table || table.hasAttribute('data-ticket-ready')) return;
    table.setAttribute('data-ticket-ready', '');

    const panels = new Map(
        Array.from(table.querySelectorAll('[data-ticket-panel][id]'), panel => [panel.id, panel])
    );
    // Midnight in Asia/Gaza under the rules applicable on April 1, 2027 (UTC+03:00).
    const gameCountdownTarget = Date.parse('2027-04-01T00:00:00+03:00');
    const gamePanel = panels.get('sail-to-gaza');
    const countdownUnits = Array.from(gamePanel?.querySelectorAll('[data-game-countdown]') ?? []);
    let countdownInterval;

    function stopGameCountdown() {
        window.clearInterval(countdownInterval);
        countdownInterval = undefined;
    }

    function updateGameCountdown() {
        const remaining = Math.max(0, Math.ceil((gameCountdownTarget - Date.now()) / 1000));
        const values = {
            days: Math.floor(remaining / 86400),
            hours: Math.floor(remaining / 3600) % 24,
            minutes: Math.floor(remaining / 60) % 60,
            seconds: remaining % 60
        };

        for (const unit of countdownUnits) {
            unit.textContent = String(values[unit.dataset.gameCountdown]).padStart(2, '0');
        }

        if (remaining === 0) stopGameCountdown();
        return remaining;
    }

    let activePanel;
    let activeTrigger;

    function closePanel(restoreFocus) {
        if (!activePanel) return;

        if (activePanel === gamePanel) stopGameCountdown();
        activePanel.hidden = true;
        activeTrigger.setAttribute('aria-expanded', 'false');
        if (restoreFocus) activeTrigger.focus();
        activePanel = undefined;
        activeTrigger = undefined;
    }

    table.addEventListener('click', event => {
        const trigger = event.target.closest('[data-ticket-open]');
        if (trigger) {
            const panel = panels.get(trigger.getAttribute('aria-controls'));
            if (!panel) return;
            if (panel === activePanel) {
                closePanel(true);
                return;
            }

            closePanel(false);
            activePanel = panel;
            activeTrigger = trigger;
            trigger.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
            panel.scrollTop = 0;
            if (panel === gamePanel && countdownUnits.length && updateGameCountdown() > 0) {
                countdownInterval = window.setInterval(updateGameCountdown, 1000);
            }
            panel.querySelector('.ticket-panel-heading h2')?.focus();
            return;
        }

        const flipButton = event.target.closest('[data-flotilla-flip]');
        const card = flipButton?.closest('[data-flotilla-card]');
        if (card && activePanel?.contains(card)) {
            const currentFace = flipButton.closest('.flotilla-card-face');
            const nextFace = document.getElementById(flipButton.getAttribute('aria-controls'));
            const nextButton = nextFace?.querySelector('[data-flotilla-flip]');
            if (!currentFace || !nextButton || !card.contains(nextFace)) return;

            card.toggleAttribute('data-flipped');
            nextFace.inert = false;
            nextFace.removeAttribute('aria-hidden');
            flipButton.setAttribute('aria-expanded', 'true');
            nextButton.setAttribute('aria-expanded', 'false');
            nextButton.focus({ preventScroll: true });
            currentFace.inert = true;
            currentFace.setAttribute('aria-hidden', 'true');
            return;
        }

        const closeButton = event.target.closest('[data-ticket-close]');
        if (closeButton && activePanel?.contains(closeButton)) closePanel(true);
    });

    table.addEventListener('keydown', event => {
        // The convoy stop dialog handles Escape first while it is open.
        if (event.key !== 'Escape' || event.defaultPrevented || !activePanel) return;
        event.preventDefault();
        closePanel(true);
    });
})();
