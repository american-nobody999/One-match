//Author: Leslie Brockman
//Date: 11-06-2026
// Catch the Correct Symbol: independent beginner arithmetic, no timer or storage.
'use strict';
(() => {
    const root = document.getElementById('correct-symbol-activity');
    if (!root) return;
    const find = name => root.querySelector(`[data-symbol-${name}]`);
    const answers = [...root.querySelectorAll('[data-symbol-answer]')];
    const operations = [
        { symbol: '+', calculate: (a, b) => a + b },
        { symbol: '−', calculate: (a, b) => a - b },
        { symbol: '×', calculate: (a, b) => a * b },
        { symbol: '÷', calculate: (a, b) => a / b }
    ];
    function buildQuestionPool() {
        const pool = [];
        for (let a = 1; a <= 20; a++) {
            for (let b = 1; b <= 10; b++) {
                operations.forEach(operation => {
                    const result = operation.calculate(a, b);
                    if (!Number.isInteger(result) || result < 1 || result > 20) return;
                    if (operations.filter(item => item.calculate(a, b) === result).length !== 1) return;
                    pool.push({ a, b, result, symbol: operation.symbol });
                });
            }
        }
        return pool;
    }
    const pool = buildQuestionPool();
    let questions = [];
    let index = 0;
    let stars = 0;
    let firstTry = true;
    let solved = false;
    let active = false;
    function feedback(english, arabic) {
        find('feedback-en').textContent = english;
        find('feedback-ar').textContent = arabic;
    }
    function renderQuestion() {
        const question = questions[index];
        firstTry = true;
        solved = false;
        find('equation').textContent = `${question.a} ? ${question.b} = ${question.result}`;
        find('progress-en').textContent = `Question ${index + 1} of 10 · Stars: ${stars} ★`;
        find('progress-ar').textContent = `السؤال ${index + 1} من 10 · النجوم: ${stars} ★`;
        feedback('', '');
        find('next').disabled = true;
        answers.forEach(button => { button.disabled = false; });
        answers[0].focus();
    }
    function startSession() {
        questions = [...pool];
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        questions = questions.slice(0, 10);
        index = 0;
        stars = 0;
        active = true;
        find('start').hidden = true;
        find('results').hidden = true;
        find('round').hidden = false;
        renderQuestion();
    }
    function chooseAnswer(symbol) {
        if (!active || solved) return;
        const question = questions[index];
        if (symbol !== question.symbol) {
            firstTry = false;
            feedback('Good try! Choose another symbol. You can do it!', 'محاولة جيدة! اختر رمزًا آخر. أنت تستطيع!');
            return;
        }
        solved = true;
        if (firstTry) stars++;
        find('equation').textContent = `${question.a} ${question.symbol} ${question.b} = ${question.result}`;
        feedback(firstTry ? 'You found it! One star for your first try! ★' : 'You found it! Keep learning!', firstTry ? 'وجدته! نجمة لمحاولتك الأولى! ★' : 'وجدته! واصل التعلّم!');
        find('progress-en').textContent = `Question ${index + 1} of 10 · Stars: ${stars} ★`;
        find('progress-ar').textContent = `السؤال ${index + 1} من 10 · النجوم: ${stars} ★`;
        answers.forEach(button => { button.disabled = true; });
        find('next').disabled = false;
        find('next').focus();
    }
    function showResults() {
        active = false;
        find('round').hidden = true;
        find('results').hidden = false;
        // Read only the selector's displayed greeting; never access its private nickname state.
        ['en', 'ar'].forEach(language => {
            const displayedName = document.querySelector(`[data-game-selector] [data-name-${language}]`);
            find(`name-${language}`).textContent = displayedName?.textContent || (language === 'ar' ? 'طالب' : 'Student');
            find(`total-${language}`).textContent = String(stars);
        });
        find('results-title').focus();
    }
    function nextQuestion() {
        if (!active || !solved) return;
        index++;
        if (index === questions.length) showResults();
        else renderQuestion();
    }
    answers.forEach(button => button.addEventListener('click', () => chooseAnswer(button.dataset.symbolAnswer)));
    find('start').addEventListener('click', startSession);
    find('again').addEventListener('click', startSession);
    find('next').addEventListener('click', nextQuestion);
})();
