//Author: Leslie Brockman
//Date: 11-06-2026
// Five independent, directly selectable algebra levels. No storage or timers.
'use strict';
(() => {
    const root = document.getElementById('algebra-activity');
    if (!root) return;
    const find = name => root.querySelector(`[data-algebra-${name}]`);
    const input = find('answer');
    const randomInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    // Reduced rational numbers keep fractional coefficients and comparisons exact.
    function fraction(n, d = 1) {
        if (!Number.isSafeInteger(n) || !Number.isSafeInteger(d) || !d) throw new Error('Invalid rational');
        const gcd = (a, b) => b ? gcd(b, a % b) : a;
        const divisor = gcd(Math.abs(n), Math.abs(d));
        return { n: n / divisor * Math.sign(d), d: Math.abs(d) / divisor };
    }
    const add = (a, b) => fraction(a.n * b.d + b.n * a.d, a.d * b.d);
    const negate = a => fraction(-a.n, a.d);
    const subtract = (a, b) => add(a, negate(b));
    const multiply = (a, b) => fraction(a.n * b.n, a.d * b.d);
    const divide = (a, b) => fraction(a.n * b.d, a.d * b.n);
    const equal = (a, b) => a.n === b.n && a.d === b.d;
    const display = a => a.d === 1 ? String(a.n) : `${a.n} / ${a.d}`;
    const polynomial = (c = 0, b = 0, a = 0) => [c, b, a].map(value => typeof value === 'number' ? fraction(value) : value);
    const combine = (a, b) => a.map((coefficient, i) => add(coefficient, b[i]));
    const scale = (p, value) => p.map(coefficient => multiply(coefficient, value));
    const difference = row => combine(row.left.p, scale(row.right.p, fraction(-1)));
    function evaluate(p, x) {
        return add(p[0], add(multiply(p[1], fraction(x)), multiply(p[2], fraction(x * x))));
    }
    function formatPolynomial(p, value = 'x') {
        const parts = [];
        for (let power = 2; power >= 0; power--) {
            const coefficient = p[power];
            if (!coefficient.n) continue;
            const magnitude = fraction(Math.abs(coefficient.n), coefficient.d);
            let term = display(magnitude);
            if (power) term = (equal(magnitude, fraction(1)) ? '' : magnitude.d === 1 ? term : `(${term})`) + value + (power === 2 ? '²' : '');
            parts.push((parts.length ? coefficient.n < 0 ? ' − ' : ' + ' : coefficient.n < 0 ? '−' : '') + term);
        }
        return parts.join('') || '0';
    }
    const simplified = p => ({ p, text: formatPolynomial(p) });
    const constant = n => simplified(polynomial(n));
    const linear = (a = 1, b = 0) => simplified(polynomial(b, a));
    const sum = (a, b) => ({ p: combine(a.p, b.p), text: `${a.text} + (${b.text})` });
    const minus = (a, b) => ({ p: combine(a.p, scale(b.p, fraction(-1))), text: `(${a.text}) − (${b.text})` });
    const times = (a, n) => ({ p: scale(a.p, fraction(n)), text: `${n}(${a.text})` });
    const over = (a, n) => ({ p: scale(a.p, fraction(1, n)), text: `(${a.text}) / ${n}` });
    const equation = (left, right, en, ar) => ({ left, right, en, ar });
    const equationText = row => `${row.left.text} = ${row.right.text}`;
    function equivalent(a, b) {
        const first = a.findIndex(value => value.n !== 0);
        if (first < 0 || !b[first].n) return false;
        const ratio = divide(b[first], a[first]);
        return a.every((value, i) => equal(multiply(value, ratio), b[i]));
    }
    function validateQuestion(q) {
        const original = difference(q.original);
        const degree = original[2].n ? 2 : original[1].n ? 1 : 0;
        if (!degree || !q.roots.length || q.roots.some(x => !Number.isSafeInteger(x))) throw new Error('Invalid solution set');
        q.roots.forEach(x => {
            if (!equal(evaluate(q.original.left.p, x), evaluate(q.original.right.p, x))) throw new Error('Invalid substitution');
        });
        const unique = [...new Set(q.roots)].sort((a, b) => a - b);
        if (degree === 1) {
            if (unique.length !== 1 || !equal(divide(negate(original[0]), original[1]), fraction(unique[0]))) throw new Error('Invalid linear root');
        } else {
            const r = unique[0], s = unique.length === 1 ? r : unique[1];
            if (unique.length > 2 || !equal(original[1], multiply(original[2], fraction(-r - s))) || !equal(original[0], multiply(original[2], fraction(r * s)))) throw new Error('Incomplete quadratic roots');
        }
        q.steps.forEach(row => { if (!equivalent(original, difference(row))) throw new Error('Invalid transformation'); });
        q.roots = unique;
        return q;
    }
    function linearQuestion(left, right, solution, hint, hintAr, expand = false) {
        const original = equation(left, right);
        const steps = [];
        let l = left, r = right;
        if (expand) {
            l = simplified(left.p); r = simplified(right.p);
            steps.push(equation(l, r, 'Distribute, then combine like terms on each side.', 'وزّع الضرب، ثم اجمع الحدود المتشابهة في كل طرف.'));
        }
        // Remove denominators on BOTH sides using an exact common multiple.
        const denominators = [...l.p, ...r.p].map(value => value.d);
        const common = denominators.reduce((a, b) => {
            const gcd = (x, y) => y ? gcd(y, x % y) : x;
            return a / gcd(a, b) * b;
        }, 1);
        if (common !== 1) {
            steps.push(equation(times(l, common), times(r, common), `Multiply both sides by ${common} to clear denominators.`, `اضرب طرفي المعادلة في ${common} للتخلّص من المقامات.`));
            l = simplified(scale(l.p, fraction(common))); r = simplified(scale(r.p, fraction(common)));
            steps.push(equation(l, r, 'Simplify both sides.', 'بسّط طرفي المعادلة.'));
        }
        if (r.p[1].n) {
            const term = simplified(polynomial(0, r.p[1]));
            steps.push(equation(minus(l, term), minus(r, term), 'Subtract the right-hand variable term from both sides.', 'اطرح حد المتغير الموجود في الطرف الأيمن من طرفي المعادلة.'));
            l = simplified(combine(l.p, scale(term.p, fraction(-1)))); r = simplified(combine(r.p, scale(term.p, fraction(-1))));
            steps.push(equation(l, r, 'Collect the variable terms.', 'اجمع حدود المتغير.'));
        }
        if (l.p[0].n) {
            const c = simplified(polynomial(l.p[0]));
            steps.push(equation(minus(l, c), minus(r, c), 'Subtract the left-hand constant from both sides.', 'اطرح الحد الثابت الموجود في الطرف الأيسر من طرفي المعادلة.'));
            l = simplified(combine(l.p, scale(c.p, fraction(-1)))); r = simplified(combine(r.p, scale(c.p, fraction(-1))));
            steps.push(equation(l, r, 'Simplify to isolate the variable term.', 'بسّط لعزل حد المتغير.'));
        }
        const coefficient = l.p[1];
        if (!equal(coefficient, fraction(1))) {
            const divisor = coefficient.n;
            if (coefficient.d !== 1) throw new Error('Uncleared denominator');
            steps.push(equation(over(l, divisor), over(r, divisor), `Divide both sides by ${divisor}.`, `اقسم طرفي المعادلة على ${divisor}.`));
        }
        steps.push(equation(linear(), constant(solution), 'The variable is isolated.', 'أصبحت قيمة المتغير معزولة.'));
        return validateQuestion({ original, steps, roots: [solution], hint, hintAr });
    }
    function quadraticQuestion(first, second, boss = false) {
        const base = simplified(polynomial(first * second, -first - second, 1));
        const a = boss ? randomInt(2, 4) : 1;
        const variable = linear(randomInt(-4, 4));
        const left = boss ? sum(times(base, a), variable) : base;
        const right = boss ? variable : constant(0);
        const original = equation(left, right);
        const steps = [];
        if (boss) {
            steps.push(equation(simplified(left.p), simplified(right.p), 'Distribute and collect like terms.', 'وزّع واجمع الحدود المتشابهة.'));
            steps.push(equation(minus(simplified(left.p), variable), minus(right, variable), 'Subtract the same variable expression from both sides.', 'اطرح تعبير المتغير نفسه من طرفي المعادلة.'));
            steps.push(equation(over(times(base, a), a), over(constant(0), a), `Simplify and divide both sides by ${a}.`, `بسّط واقسم طرفي المعادلة على ${a}.`));
            steps.push(equation(base, constant(0), 'Simplify to a monic quadratic.', 'بسّط للحصول على معادلة تربيعية معامل حدها الأعلى واحد.'));
        }
        const factor1 = linear(1, -first), factor2 = linear(1, -second);
        const factored = { text: `(${factor1.text})(${factor2.text})`, p: polynomial(first * second, -first - second, 1) };
        steps.push(equation(factored, constant(0), 'Factor the quadratic. The factors reproduce its coefficients.', 'حلّل المقدار التربيعي إلى عوامل؛ يعيد حاصل ضربها معاملات المقدار الأصلي.'));
        return validateQuestion({ original, steps, roots: [first, second], quadratic: true,
            hint: boss ? 'Expand, move the variable terms to one side, then factor the quadratic.' : 'Find two numbers whose sum is the x coefficient and whose product is the constant.',
            hintAr: boss ? 'فك الأقواس، وانقل حدود المتغير إلى طرف واحد، ثم حلّل المقدار التربيعي.' : 'ابحث عن عددين مجموعهما معامل س وحاصل ضربهما الحد الثابت.' });
    }
    function generateLevel1(type) {
        // Preserve the original five families and signed/zero integer ranges.
        const factor = type === 0 ? 1 : randomInt(2, 6);
        const divideTerm = type === 4;
        const solution = divideTerm ? factor * randomInt(-3, 3) : randomInt(-10, 10);
        const offset = type === 1 ? 0 : randomInt(1, 9) * (type === 3 ? -1 : 1);
        const term = divideTerm ? over(linear(), factor) : linear(factor);
        const left = offset ? sum(term, constant(offset)) : term;
        const right = simplified(polynomial(evaluate(left.p, solution)));
        return linearQuestion(left, right, solution,
            offset ? `Undo the constant term by ${offset > 0 ? 'subtracting' : 'adding'} ${Math.abs(offset)} on both sides.` : `Divide both sides by ${factor}.`,
            offset ? `${offset > 0 ? 'اطرح' : 'أضف'} ${Math.abs(offset)} ${offset > 0 ? 'من' : 'إلى'} طرفي المعادلة لإزالة الحد الثابت.` : `اقسم طرفي المعادلة على ${factor}.`);
    }
    function generateLevel2() {
        const x = randomInt(-10, 10), a = randomInt(2, 7);
        let b = randomInt(-5, 5);
        if (!b || b === a) b = -a;
        const c = randomInt(-9, 9), d = (a - b) * x + c;
        return linearQuestion(linear(a, c), linear(b, d), x, 'Collect variable terms on one side by subtracting the same x term from both sides; then collect constants.', 'اجمع حدود المتغير في طرف واحد بطرح حد س نفسه من الطرفين، ثم اجمع الحدود الثابتة.');
    }
    function generateLevel3(type) {
        const x = randomInt(-9, 9), m = randomInt(2, 5), d = randomInt(2, 5), k = randomInt(1, 7) * (type % 2 ? -1 : 1);
        const expressions = [times(linear(1, k), m), over(linear(1, k), d), over(linear(m, k), d), sum(times(linear(1, k), m), constant(-d)), times(linear(1, k), -m)];
        const left = expressions[type], right = simplified(polynomial(evaluate(left.p, x)));
        return linearQuestion(left, right, x, 'Use distribution inside parentheses; multiply both sides by a common denominator before collecting terms.', 'استخدم خاصية التوزيع داخل الأقواس، واضرب الطرفين في مقام مشترك قبل جمع الحدود.', true);
    }
    function generateBoss(type) {
        if (type === 4) return quadraticQuestion(randomInt(-6, 6), randomInt(-6, 6), true);
        const x = randomInt(-8, 8), m = randomInt(2, 5), n = m + 1, k = randomInt(-5, 5), h = randomInt(1, 5), d = randomInt(2, 5);
        let left, rightVariable;
        if (type === 0) { left = sum(times(linear(1, k), m), constant(h)); rightVariable = linear(n); }
        if (type === 1) { left = minus(times(linear(1, k), m), times(linear(1, -h), n)); rightVariable = linear(-2); }
        if (type === 2) { left = sum(over(linear(1, k), d), linear(-n)); rightVariable = linear(m); }
        if (type === 3) { left = sum(over(times(linear(1, k), -m), d), linear(-n)); rightVariable = linear(m); }
        const c = subtract(evaluate(left.p, x), evaluate(rightVariable.p, x));
        const right = sum(rightVariable, simplified(polynomial(c)));
        return linearQuestion(left, right, x, 'Expand every bracket, clear denominators on both sides, and then collect variable terms and constants.', 'فك كل الأقواس، وتخلّص من المقامات في الطرفين، ثم اجمع حدود المتغير والحدود الثابتة.', true);
    }
    const levels = { 1: generateLevel1, 2: generateLevel2, 3: generateLevel3, 4: () => quadraticQuestion(randomInt(-7, 7), randomInt(-7, 7)), 5: generateBoss };
    function generateQuestions(level = 1) {
        const questions = [], seen = new Set();
        for (let type = 0; type < 5; type++) {
            let q;
            do { q = levels[level](type); } while (seen.has(equationText(q.original)));
            seen.add(equationText(q.original)); questions.push(q);
        }
        for (let i = questions.length - 1; i > 0; i--) {
            const j = randomInt(0, i);
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        return questions;
    }
    function parseAnswer(value, quadratic) {
        const text = value.trim().replace(/[٠-٩]/g, digit => String(digit.charCodeAt(0) - 1632)).replace(/[۰-۹]/g, digit => String(digit.charCodeAt(0) - 1776)).replace(/−/g, '-').replace(/،/g, ',');
        const parts = text.split(',').map(part => part.trim());
        if (parts.length > (quadratic ? 2 : 1) || parts.some(part => !/^[+-]?\d+$/.test(part) || !Number.isSafeInteger(Number(part)))) return null;
        return [...new Set(parts.map(Number))].sort((a, b) => a - b);
    }
    const answersMatch = (q, answer) => answer && answer.length === q.roots.length && answer.every((value, i) => value === q.roots[i] && equal(evaluate(q.original.left.p, value), evaluate(q.original.right.p, value)));
    let selectedLevel = 1;
    let questions = [], index = 0, stars = 0;
    let attempted = false, usedSteps = false, solved = false, active = false, revealed = false;
    function bilingual(name, english, arabic) {
        find(`${name}-en`).textContent = english;
        find(`${name}-ar`).textContent = arabic;
    }
    function updateProgress() {
        bilingual('progress', `Level ${selectedLevel} · Question ${index + 1} of 5 · Stars: ${stars} ★`, `المستوى ${selectedLevel} · السؤال ${index + 1} من 5 · النجوم: ${stars} ★`);
    }
    function renderQuestion() {
        attempted = usedSteps = solved = revealed = false;
        const q = questions[index];
        find('equation').textContent = equationText(q.original);
        updateProgress();
        bilingual('feedback', '', '');
        bilingual('answer-note', q.quadratic ? 'Enter all distinct roots, in either order, separated by commas (example: -2, 3). For a repeated root enter it once.' : 'Enter an integer, including 0 or a negative number such as -3.', q.quadratic ? 'أدخل جميع الجذور المختلفة بأي ترتيب، وافصل بينها بفاصلة (مثل: ‎-2, 3). أدخل الجذر المكرر مرة واحدة.' : 'أدخل عددًا صحيحًا، بما في ذلك 0 أو عدد سالب مثل ‎-3.');
        find('hint-text').hidden = find('steps').hidden = true;
        find('steps').replaceChildren();
        find('steps-button').disabled = find('next').disabled = true;
        find('steps-button').setAttribute('aria-expanded', 'false');
        find('check').disabled = input.disabled = false;
        input.value = '';
        input.focus();
    }
    function startSession(level = selectedLevel) {
        if (!levels[level]) return;
        selectedLevel = Number(level);
        questions = generateQuestions(selectedLevel);
        index = stars = 0; active = true;
        find('levels').hidden = find('results').hidden = true;
        find('round').hidden = false;
        find('return-levels').hidden = false;
        renderQuestion();
    }
    function checkAnswer(event) {
        event.preventDefault();
        if (!active || solved) return;
        const q = questions[index], answer = parseAnswer(input.value, q.quadratic);
        if (!answer) {
            bilingual('feedback', 'Enter signed whole numbers only. Use commas between quadratic roots.', 'أدخل أعدادًا صحيحة موجبة أو سالبة فقط. افصل بين الجذور التربيعية بفواصل.');
            return;
        }
        attempted = true;
        find('steps-button').disabled = false;
        if (!answersMatch(q, answer)) {
            bilingual('feedback', q.quadratic ? 'Keep going! Check every root and include all distinct solutions.' : 'Good effort! Keep both sides balanced and try again. A hint can help.', q.quadratic ? 'واصل المحاولة! تحقق من كل جذر وأدرج جميع الحلول المختلفة.' : 'محاولة جيدة! حافظ على توازن طرفي المعادلة وحاول مجددًا. قد يساعدك تلميح.');
            return;
        }
        solved = true;
        if (!usedSteps) stars++;
        bilingual('feedback', usedSteps ? 'Correct! You practiced the reasoning. Keep going!' : 'Correct! You earned a star! ★', usedSteps ? 'صحيح! تدرّبت على التفكير في الحل. واصل التقدّم!' : 'صحيح! حصلت على نجمة! ★');
        updateProgress();
        input.disabled = find('check').disabled = true;
        find('next').disabled = false;
        find('next').focus();
    }
    function showHint() {
        if (!active) return;
        bilingual('hint', questions[index].hint, questions[index].hintAr);
        find('hint-text').hidden = false;
    }
    function appendStep(english, arabic, math) {
        const item = document.createElement('li');
        const isArabic = document.documentElement.lang === 'ar';
        [['en', english], ['ar', arabic]].forEach(([language, text]) => {
            const span = document.createElement('span');
            span.className = `lang-${language}${(language === 'ar') !== isArabic ? ' hidden' : ''}`;
            span.lang = language;
            span.dir = language === 'ar' ? 'rtl' : 'ltr';
            span.textContent = text;
            item.append(span);
        });
        const working = document.createElement('span');
        working.className = 'algebra-working'; working.dir = 'ltr'; working.textContent = math;
        item.append(working); find('steps').append(item);
    }
    function showSteps() {
        if (!active || !attempted) return;
        const q = questions[index];
        if (!solved) { usedSteps = true; revealed = true; }
        find('steps').replaceChildren();
        q.steps.forEach(row => appendStep(row.en, row.ar, equationText(row)));
        if (q.quadratic) {
            appendStep('By the zero-product property, at least one factor must be zero. Solve each factor equation; list a repeated root only once.', 'وفق خاصية حاصل الضرب الصفري، يجب أن يساوي عامل واحد على الأقل صفرًا. حل معادلة كل عامل، واكتب الجذر المكرر مرة واحدة.', q.roots.map(x => `${linear(1, -x).text} = 0  ⇒  x = ${x}`).join('\n'));
        }
        q.roots.forEach(x => {
            const substitute = expression => expression.text.replace(/x/g, `(${x})`);
            appendStep('Substitute into the original equation to check both sides.', 'عوّض في المعادلة الأصلية للتحقق من تساوي الطرفين.', `x = ${x}\n${substitute(q.original.left)} = ${substitute(q.original.right)}\n${display(evaluate(q.original.left.p, x))} = ${display(evaluate(q.original.right.p, x))} ✓`);
        });
        find('steps').hidden = false;
        find('steps-button').setAttribute('aria-expanded', 'true');
        if (revealed && !solved) bilingual('feedback', 'Solution revealed. No star for this question; practice the answer or continue when you are ready.', 'عُرض الحل. لا نجمة لهذا السؤال؛ تدرّب على الإجابة أو تابع عندما تكون مستعدًا.');
        find('next').disabled = false;
    }
    function nextQuestion() {
        if (!active || (!solved && !revealed)) return;
        index++;
        if (index < questions.length) return renderQuestion();
        active = false;
        find('round').hidden = true; find('results').hidden = false;
        bilingual('complete', `Level ${selectedLevel} complete!`, `أكملت المستوى ${selectedLevel}!`);
        bilingual('total', String(stars), String(stars));
        find('results-title').focus();
    }
    function returnToLevels() {
        active = false;
        find('round').hidden = find('results').hidden = find('return-levels').hidden = true;
        find('levels').hidden = false;
        find('levels-title').focus();
    }
    root.querySelectorAll('[data-algebra-select]').forEach(button => button.addEventListener('click', () => startSession(button.dataset.algebraSelect)));
    find('form').addEventListener('submit', checkAnswer);
    find('again').addEventListener('click', () => startSession());
    find('hint').addEventListener('click', showHint);
    find('steps-button').addEventListener('click', showSteps);
    find('next').addEventListener('click', nextQuestion);
    find('return-levels').addEventListener('click', returnToLevels);
})();
