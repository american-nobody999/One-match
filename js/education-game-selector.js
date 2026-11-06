//Author: Leslie Brockman
//Date: 11-06-2026
// Reusable classroom selector. Card data attributes supply each classroom's configuration.
'use strict';
(() => {
    function createGameSelector(root) {
        const form = root.querySelector('[data-student-form]');
        const input = root.querySelector('[data-student-name]');
        const nicknameLimit = Number(input.dataset.nicknameMax || 0);
        const nicknameFeedback = root.querySelector('[data-nickname-feedback]');
        const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
        function validateNickname() {
            if (!nicknameLimit) return { valid: true, value: input.value.trim() };
            const value = input.value.replace(/^ +| +$/g, '').normalize('NFC');
            let followsLetter = false;
            const lettersOnly = Array.from(value).every(character => {
                if (character === ' ') { followsLetter = false; return true; }
                if (/\p{L}/u.test(character) && /[\p{Script_Extensions=Latin}\p{Script_Extensions=Arabic}]/u.test(character) && character !== '\u0640') {
                    followsLetter = true;
                    return true;
                }
                // Attached vocalization/combining marks belong to their letter, not a new character.
                return followsLetter && /\p{Mn}/u.test(character)
                    && !/[\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/u.test(character)
                    && /[\p{Script_Extensions=Arabic}\p{Script_Extensions=Inherited}]/u.test(character);
            });
            const characters = segmenter ? [...segmenter.segment(value)].length : (value.match(/\P{M}\p{M}*|\p{M}+/gu) || []).length;
            const valid = lettersOnly && characters <= nicknameLimit;
            input.setAttribute('aria-invalid', String(!valid));
            if (nicknameFeedback) nicknameFeedback.hidden = valid;
            return { valid, value };
        }
        const greeting = root.querySelector('[data-student-greeting]');
        const choices = root.querySelector('[data-game-choices]');
        const changeName = root.querySelector('[data-change-name]');
        const cards = [...root.querySelectorAll('[data-game]')];
        const games = cards.map(card => ({
            card,
            available: card.dataset.available === 'true',
            activity: document.getElementById(card.dataset.activity || '')
        }));
        let nickname = '';
        let selectedGame = null;
        function showChoices() {
            games.forEach(game => { if (game.activity) game.activity.hidden = true; });
            choices.hidden = false;
            const focusTarget = selectedGame?.card || choices.querySelector('h3');
            selectedGame = null;
            focusTarget?.focus();
        }
        function showGame(game) {
            if (!game.available || !game.activity || greeting.hidden) return;
            games.forEach(item => { if (item.activity) item.activity.hidden = item !== game; });
            choices.hidden = true;
            selectedGame = game;
            game.activity.querySelector('h2')?.focus();
        }
        function welcomeStudent(event) {
            event.preventDefault();
            const validation = validateNickname();
            if (!validation.valid) { input.focus(); return; }
            nickname = validation.value;
            input.value = nickname;
            root.querySelector('[data-name-en]').textContent = nickname || 'Student';
            root.querySelector('[data-name-ar]').textContent = nickname || 'طالب';
            form.hidden = true;
            greeting.hidden = false;
            showChoices();
        }
        form.addEventListener('submit', welcomeStudent);
        if (nicknameLimit) {
            input.addEventListener('input', event => { if (!event.isComposing) validateNickname(); });
            input.addEventListener('compositionend', validateNickname);
        }
        changeName.addEventListener('click', () => {
            showChoices();
            choices.hidden = true;
            greeting.hidden = true;
            form.hidden = false;
            input.value = nickname;
            if (nicknameLimit) validateNickname();
            input.focus();
        });
        games.forEach(game => {
            game.card.disabled = !game.available || !game.activity;
            game.card.addEventListener('click', () => showGame(game));
            if (!game.activity) return;
            game.activity.hidden = true;
            game.activity.querySelectorAll('[data-return-games]').forEach(button => {
                button.hidden = false;
                button.addEventListener('click', showChoices);
            });
        });
        root.hidden = false;
    }
    document.querySelectorAll('[data-game-selector]').forEach(createGameSelector);
})();
