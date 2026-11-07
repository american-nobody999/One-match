//Author: Leslie Brockman
//Date:11-07-2026
// Scientist associations are selected research contributions, not exclusive discoveries.
'use strict';
(() => {
    const root = document.getElementById('science-detectives');
    if (!root) return;
    const find = key => root.querySelector(`[data-detective-${key}]`);
    const mysteryCards = [...root.querySelectorAll('[data-mystery-card]')];
    function setMysteryFace(card, flipped) {
        card.setAttribute('aria-pressed', String(flipped));
        const number = card.dataset.mysteryCard;
        card.setAttribute('aria-label', flipped
            ? `Mystery ${number}: show illustration / اللغز ${number}: أظهر الرسم`
            : `Mystery ${number}: show clue / اللغز ${number}: أظهر الدليل`);
        if (flipped) card.setAttribute('aria-describedby', `science-mystery-clue-${number}`);
        else card.removeAttribute('aria-describedby');
        const front = card.querySelector('[data-mystery-front]');
        const back = card.querySelector('[data-mystery-back]');
        front.setAttribute('aria-hidden', String(flipped)); front.inert = flipped;
        back.setAttribute('aria-hidden', String(!flipped)); back.inert = !flipped;
    }
    mysteryCards.forEach(card => card.addEventListener('click', () => {
        setMysteryFace(card, card.getAttribute('aria-pressed') !== 'true');
    }));
    // Artwork is static HTML: no portraits, image manifest, external assets or requests.
    const scientists = [
        { id: 'curie', name: ['Marie Curie', 'ماري كوري'], fact: ['Marie Curie pioneered radioactivity research and shared the 1903 Nobel Prize in Physics for radiation research.', 'كانت ماري كوري رائدة في أبحاث النشاط الإشعاعي، وتقاسمت جائزة نوبل في الفيزياء عام 1903 لأبحاث الإشعاع.'] },
        { id: 'einstein', name: ['Albert Einstein', 'ألبرت أينشتاين'], fact: ['Albert Einstein developed special and general relativity, changing how scientists understand space, time and gravity.', 'طوّر ألبرت أينشتاين النسبية الخاصة والعامة، وغيّر فهم العلماء للمكان والزمان والجاذبية.'] },
        { id: 'tesla', name: ['Nikola Tesla', 'نيكولا تسلا'], fact: ['Nikola Tesla made major contributions to alternating-current electrical power systems; many researchers and engineers contributed to this field.', 'قدّم نيكولا تسلا إسهامات كبيرة في أنظمة القدرة الكهربائية بالتيار المتناوب؛ وقد ساهم كثير من الباحثين والمهندسين في هذا المجال.'] },
        { id: 'may', name: ['Brian May', 'براين ماي'], fact: ['Brian May studied zodiacal dust for his astrophysics doctorate at Imperial College London. He is also known as Queen’s guitarist.', 'درس براين ماي الغبار البروجي في دكتوراه الفيزياء الفلكية بإمبريال كوليدج لندن. ويُعرف أيضًا بعزف الغيتار في فرقة كوين.'] },
        { id: 'mirzakhani', name: ['Maryam Mirzakhani', 'مريم ميرزاخاني'], fact: ['Maryam Mirzakhani studied geometry and dynamical systems. In 2014 she became the first woman awarded the Fields Medal.', 'درست مريم ميرزاخاني الهندسة والأنظمة الديناميكية. وفي عام 2014 أصبحت أول امرأة تنال ميدالية فيلدز.'] },
        { id: 'tu', name: ['Tu Youyou', 'تو يويو'], fact: ['Tu Youyou’s work led to artemisinin, a medicine used against malaria. She shared the 2015 Nobel Prize in Physiology or Medicine.', 'قاد عمل تو يويو إلى الأرتيميسين، وهو دواء يُستخدم لمكافحة الملاريا. وتقاسمت جائزة نوبل في علم وظائف الأعضاء أو الطب عام 2015.'] }
    ];
    const categories = [
        ['Radioactivity research', 'أبحاث النشاط الإشعاعي'], ['Theory of relativity', 'نظرية النسبية'],
        ['Alternating-current electrical systems', 'أنظمة التيار الكهربائي المتناوب'], ['Zodiacal dust and astrophysics', 'الغبار البروجي والفيزياء الفلكية'],
        ['Geometry and dynamical systems', 'الهندسة والأنظمة الديناميكية'], ['Artemisinin and malaria treatment', 'الأرتيميسين وعلاج الملاريا']
    ];
    const solution = [0, 1, 2, 3, 4, 5];
    // Each clue's predicate makes its deduction independently testable over all 720 matchings.
    const clues = [
        { text: ['In this puzzle, Curie and Tesla occupy the radioactivity and alternating-current categories, in some order.', 'في هذا اللغز، تشغل كوري وتسلا فئتي النشاط الإشعاعي والتيار المتناوب، بترتيب لم يُحدّد بعد.'], test: p => [0, 2].includes(p[0]) && [0, 2].includes(p[2]) },
        { text: ['Curie’s category here is not alternating-current systems. Combine this with the previous clue.', 'فئة كوري هنا ليست أنظمة التيار المتناوب. اجمع هذا الدليل مع الدليل السابق.'], test: p => p[0] !== 2 },
        { text: ['Einstein and May occupy the relativity and zodiacal-dust categories, in some order.', 'يشغل أينشتاين وماي فئتي النسبية والغبار البروجي، بترتيب لم يُحدّد بعد.'], test: p => [1, 3].includes(p[1]) && [1, 3].includes(p[3]) },
        { text: ['May, the Queen guitarist, studied dust between planets for his astrophysics doctorate. His category is not relativity.', 'درس ماي، عازف الغيتار في كوين، الغبار بين الكواكب في دكتوراه الفيزياء الفلكية. فئته ليست النسبية.'], test: p => p[3] === 3 },
        { text: ['Mirzakhani and Tu occupy the geometry-and-dynamics and malaria-treatment categories, in some order.', 'تشغل ميرزاخاني وتو فئتي الهندسة والأنظمة الديناميكية وعلاج الملاريا، بترتيب لم يُحدّد بعد.'], test: p => [4, 5].includes(p[4]) && [4, 5].includes(p[5]) },
        { text: ['Mirzakhani, the first woman awarded the Fields Medal, studied geometry and dynamical systems. Use elimination for the remaining category.', 'درست ميرزاخاني، أول امرأة نالت ميدالية فيلدز، الهندسة والأنظمة الديناميكية. استخدم الاستبعاد لتحديد الفئة المتبقية.'], test: p => p[4] === 4 },
        { text: ['Tu’s Nobel-winning research is connected to artemisinin and malaria treatment.', 'يرتبط بحث تو الذي نال جائزة نوبل بالأرتيميسين وعلاج الملاريا.'], test: p => p[5] === 5 },
        { text: ['Einstein developed the theories of relativity; Tesla made major contributions to alternating-current power systems.', 'طوّر أينشتاين نظريتي النسبية؛ وقدّم تسلا إسهامات كبيرة في أنظمة القدرة بالتيار المتناوب.'], test: p => p[1] === 1 && p[2] === 2 },
        { text: ['Curie pioneered radioactivity research. This does not mean she alone discovered radioactivity.', 'كانت كوري رائدة في أبحاث النشاط الإشعاعي. وهذا لا يعني أنها وحدها اكتشفت النشاط الإشعاعي.'], test: p => p[0] === 0 }
    ];
    function countSolutions() {
        let count = 0;
        function visit(permutation) {
            if (permutation.length === 6) { if (clues.every(clue => clue.test(permutation))) count++; return; }
            for (let column = 0; column < 6; column++) if (!permutation.includes(column)) visit([...permutation, column]);
        }
        visit([]); return count;
    }
    function validateGrid(grid) {
        if (!Array.isArray(grid) || grid.length !== 6 || grid.some(row => !Array.isArray(row) || row.length !== 6 || row.some(value => ![0, 1, 2].includes(value)))) return false;
        const matches = grid.map(row => row.flatMap((value, column) => value === 2 ? [column] : []));
        return matches.every(row => row.length === 1) && new Set(matches.map(row => row[0])).size === 6 && matches.every((row, i) => row[0] === solution[i]);
    }
    function pair(parent, en, ar) {
        parent.replaceChildren();
        [en, ar].forEach((text, i) => {
            const span = document.createElement('span'); span.className = i ? 'lang-ar' : 'lang-en'; span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; parent.append(span);
        });
    }
    let grid = [], cells = [], clueIndex = 0, completed = false;
    const states = [['Unknown', 'غير معروف'], ['Eliminated', 'مستبعد'], ['Confirmed match', 'تطابق مؤكد']];
    const marks = ['?', 'X', '✓'];
    function updateCell(row, column) {
        const state = grid[row][column], button = cells[row][column];
        button.textContent = marks[state]; button.dataset.state = String(state);
        button.setAttribute('aria-label', `${scientists[row].name[0]} — ${categories[column][0]}: ${states[state][0]} / ${scientists[row].name[1]} — ${categories[column][1]}: ${states[state][1]}`);
    }
    function cycle(row, column) {
        grid[row][column] = (grid[row][column] + 1) % 3; updateCell(row, column);
        if (completed) { completed = false; find('results').hidden = true; pair(find('feedback'), 'You can revise your deductions and check again.', 'يمكنك تعديل استنتاجاتك والتحقق مجددًا.'); }
    }
    function buildTable() {
        const table = find('table'); const caption = table.querySelector('caption'); table.replaceChildren(caption);
        const order = [0, 1, 2, 3, 4, 5];
        for (let i = 5; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
        const head = document.createElement('thead'), top = document.createElement('tr'), corner = document.createElement('th'); corner.scope = 'col'; pair(corner, 'Scientist / Research area', 'العالم أو العالمة / مجال البحث'); top.append(corner);
        order.forEach(column => { const th = document.createElement('th'); th.scope = 'col'; pair(th, `${String.fromCharCode(65 + column)}. ${categories[column][0]}`, `${String.fromCharCode(65 + column)}. ${categories[column][1]}`); top.append(th); });
        head.append(top); table.append(head); const body = document.createElement('tbody'); cells = [];
        scientists.forEach((scientist, row) => {
            cells[row] = []; const tr = document.createElement('tr'), heading = document.createElement('th'); heading.scope = 'row'; pair(heading, ...scientist.name); tr.append(heading);
            order.forEach(column => { const td = document.createElement('td'), button = document.createElement('button'); button.type = 'button'; button.className = 'science-grid-cell'; button.addEventListener('click', () => cycle(row, column)); cells[row][column] = button; updateCell(row, column); td.append(button); tr.append(td); });
            body.append(tr);
        }); table.append(body);
    }
    function revealClue() {
        if (clueIndex >= clues.length) return;
        const li = document.createElement('li'); pair(li, ...clues[clueIndex].text); find('clues').append(li); clueIndex++;
        pair(find('clue-status'), `Clue ${clueIndex} of ${clues.length}: ${clues[clueIndex - 1].text[0]}`, `الدليل ${clueIndex} من ${clues.length}: ${clues[clueIndex - 1].text[1]}`);
        find('next-clue').disabled = clueIndex === clues.length;
    }
    function check() {
        if (completed) return;
        if (!validateGrid(grid)) { pair(find('feedback'), 'Keep investigating! Confirm exactly one match in each row and column, and check all six against the clues. X marks do not count as matches.', 'واصل التحقيق! أكّد تطابقًا واحدًا فقط في كل صف وعمود، وتحقق من التطابقات الستة باستخدام الأدلة. لا تُحسب علامة X تطابقًا.'); return; }
        completed = true; pair(find('feedback'), 'All six deductions are correct! Three completion stars. ★ ★ ★', 'الاستنتاجات الستة صحيحة! ثلاث نجوم لإكمال اللغز. ★ ★ ★'); find('results').hidden = false; find('results-title').focus();
    }
    function reset() {
        mysteryCards.forEach(card => setMysteryFace(card, false));
        grid = Array.from({ length: 6 }, () => Array(6).fill(0)); clueIndex = 0; completed = false;
        find('clues').replaceChildren(); find('next-clue').disabled = false; find('results').hidden = true; find('hint-text').hidden = true;
        pair(find('clue-status'), 'Reveal one clue at a time. Your grid starts with every cell unknown.', 'اكشف الأدلة واحدًا تلو الآخر. تبدأ جميع خانات الجدول بحالة غير معروف.');
        pair(find('feedback'), '', ''); buildTable();
    }
    scientists.forEach(scientist => { const article = document.createElement('article'), h4 = document.createElement('h4'), p = document.createElement('p'); pair(h4, ...scientist.name); pair(p, ...scientist.fact); article.append(h4, p); find('facts').append(article); });
    if (countSolutions() !== 1) throw new Error('Science clue set must have exactly one solution');
    find('next-clue').addEventListener('click', revealClue); find('check').addEventListener('click', check);
    find('reset').addEventListener('click', () => { reset(); find('table').closest('.science-grid-scroll').focus(); });
    find('hint').addEventListener('click', () => { pair(find('hint-text'), 'Use the paired clues together. Once a row has a match, the other five cells in that row cannot be matches; the same is true for its column.', 'اجمع الأدلة المترابطة. عندما تحدد تطابقًا في صف، لا يمكن للخانات الخمس الأخرى في ذلك الصف أن تكون تطابقات؛ وينطبق الأمر نفسه على عموده.'); find('hint-text').hidden = false; });
    reset();
})();
