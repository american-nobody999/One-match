(() => {
    'use strict';

    const countries = [
        { id: 1, country: 'China', answers: ['china', 'الصين'] },
        { id: 2, country: 'Turkey', answers: ['turkey', 'türkiye', 'turkiye', 'تركيا'] },
        { id: 3, country: 'Russia', answers: ['russia', 'russian federation', 'روسيا'] },
        { id: 4, country: 'Spain', answers: ['spain', 'إسبانيا', 'اسبانيا'] },
        { id: 5, country: 'Pakistan', answers: ['pakistan', 'باكستان'] },
        { id: 6, country: 'Lebanon', answers: ['lebanon', 'لبنان'] },
        { id: 7, country: 'Qatar', answers: ['qatar', 'قطر'] },
        { id: 8, country: 'Iran', answers: ['iran', 'إيران', 'ايران'] },
        { id: 9, country: 'Saudi Arabia', answers: ['saudi arabia', 'saudi', 'السعودية', 'المملكة العربية السعودية'] }
    ];

    const messages = {
        en: {
            empty: 'Type a country name first.',
            incorrect: 'Not quite. Try again!',
            correct: 'Correct! Flip the card!'
        },
        ar: {
            empty: 'اكتب اسم دولة أولاً.',
            incorrect: 'ليست الإجابة الصحيحة. حاول مرة أخرى!',
            correct: 'أحسنت! اقلب البطاقة!'
        }
    };

    function normalizeAnswer(answer) {
        return answer.trim().toLowerCase().replace(/\s+/g, ' ');
    }

    function initFlagGame() {
        const languageUpdates = [];
        document.querySelectorAll('.flag-game .flag-card').forEach((card) => {
            const front = card.querySelector('.flag-card-front');
            const back = card.querySelector('.flag-card-back');
            const input = card.querySelector('.flag-answer');
            const checkButton = card.querySelector('.flag-check-button');
            const resetButton = card.querySelector('.flag-reset-button');
            const feedback = card.querySelector('.flag-feedback');
            const cardId = Number(input.id.replace('flag-answer-', ''));
            const countryData = countries.find(country => country.id === cardId);
            if (!countryData) return;
            card.dataset.country = countryData.country;

            let feedbackState = '';

            function syncLanguage() {
                const language = document.documentElement.lang === 'ar' ? 'ar' : 'en';
                input.dir = language === 'ar' ? 'rtl' : 'ltr';
                input.placeholder = language === 'ar' ? 'اكتب اسم الدولة' : 'Type country name';
                feedback.dir = input.dir;
                feedback.textContent = feedbackState ? messages[language][feedbackState] : '';
            }

            function showFeedback(state) {
                feedbackState = state;
                syncLanguage();
            }

            languageUpdates.push(syncLanguage);
            syncLanguage();

            function checkAnswer() {
                if (card.classList.contains('is-flipped')) return;
                const answer = normalizeAnswer(input.value);
                if (!answer) {
                    showFeedback('empty');
                    return;
                }
                if (!countryData.answers.includes(answer)) {
                    showFeedback('incorrect');
                    input.setAttribute('aria-invalid', 'true');
                    input.select();
                    return;
                }
                input.removeAttribute('aria-invalid');
                showFeedback('correct');
                card.classList.add('is-flipped');
                back.inert = false;
                resetButton.focus({ preventScroll: true });
                front.inert = true;
                input.disabled = true;
                checkButton.disabled = true;
            }

            function resetCard() {
                card.classList.remove('is-flipped');
                input.value = '';
                input.removeAttribute('aria-invalid');
                showFeedback('');
                front.inert = false;
                input.disabled = false;
                checkButton.disabled = false;
                input.focus({ preventScroll: true });
                back.inert = true;
            }

            checkButton.addEventListener('click', checkAnswer);
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' && !event.isComposing) {
                    event.preventDefault();
                    checkAnswer();
                }
            });
            resetButton.addEventListener('click', resetCard);
        });

        // main.js owns the site language; follow its existing HTML lang attribute.
        if (languageUpdates.length) {
            const languageObserver = new MutationObserver(() => {
                languageUpdates.forEach(update => update());
            });
            languageObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['lang']
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFlagGame, { once: true });
    } else {
        initFlagGame();
    }
})();
