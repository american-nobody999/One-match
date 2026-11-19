
/**
 * Author: Leslie Brockman
 * ABC Numbers Educational Page
 * Date Modified 11-18-2026
 * Description: JavaScript functionality for the ABC Numbers educational page.
 */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.abc-numbers-classroom');
    if (!page) return;
    const find = selector => page.querySelector(selector);
    const choices = find('#number-choices');
    const games = { puzzle: find('#puzzle-game'), line: find('#line-game') };
    const puzzleBoard = find('#puzzle-board');
    const puzzleMoves = find('#puzzle-moves');
    const puzzleStatus = find('#puzzle-status');
    const lineBoard = find('#number-line');
    const tray = find('#number-tray');
    const lineStatus = find('#line-status');
    const colors = ['#ffe08e', '#f7b9a8', '#bce2c2', '#c9d9fa', '#e5c8ee', '#ffd3a5', '#b9e4df', '#f5cbdb', '#e4edac'];
    const arabicNumber = n => String(n).replace(/[0-9]/g, digit => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]);
    function bilingualStatus(element, en, ar) {
        element.replaceChildren();
        if (!en) return;
        const english = document.createElement('span');
        english.lang = 'en'; english.textContent = en;
        const arabic = document.createElement('span');
        arabic.lang = 'ar'; arabic.dir = 'rtl'; arabic.textContent = ar;
        element.append(english, arabic);
    }
    function switchActivity(name) {
        choices.hidden = Boolean(name);
        Object.entries(games).forEach(([key, panel]) => { panel.hidden = key !== name; });
        if (name) games[name].querySelector('[data-back-choices]').focus();
        else choices.querySelector('[data-open-game]').focus();
    }
    page.querySelectorAll('[data-open-game]').forEach(button => button.addEventListener('click', () => switchActivity(button.dataset.openGame)));
    page.querySelectorAll('[data-back-choices]').forEach(button => button.addEventListener('click', () => switchActivity(null)));

    const solvedBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    let board = solvedBoard.slice();
    let moves = 0;
    let puzzleComplete = false;
    function isSolved() { return board.every((value, index) => value === solvedBoard[index]); }
    function adjacent(a, b) { return Math.abs(Math.floor(a / 3) - Math.floor(b / 3)) + Math.abs(a % 3 - b % 3) === 1; }
    function swapTiles(a, b) { [board[a], board[b]] = [board[b], board[a]]; }
    function renderBoard(focusNumber) {
        puzzleBoard.replaceChildren();
        board.forEach((number, index) => {
            if (!number) {
                const empty = document.createElement('div');
                empty.className = 'puzzle-empty'; empty.setAttribute('role', 'img');
                empty.setAttribute('aria-label', `Empty position ${index + 1} / المكان الفارغ ${arabicNumber(index + 1)}`);
                puzzleBoard.append(empty);
                return;
            }
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'number-tile';
            button.style.setProperty('--block-color', colors[number - 1]);
            button.textContent = number; button.dataset.number = number;
            button.setAttribute('aria-label', `Number ${number}, position ${index + 1} / الرقم ${arabicNumber(number)}، المكان ${arabicNumber(index + 1)}`);
            button.disabled = puzzleComplete;
            button.addEventListener('click', () => moveTile(index));
            puzzleBoard.append(button);
        });
        puzzleMoves.textContent = moves;
        if (focusNumber && !puzzleComplete) puzzleBoard.querySelector(`[data-number="${focusNumber}"]`)?.focus();
    }
    function moveTile(index) {
        if (puzzleComplete || !adjacent(index, board.indexOf(0))) return;
        const number = board[index];
        swapTiles(index, board.indexOf(0));
        moves += 1; puzzleComplete = isSolved();
        bilingualStatus(puzzleStatus, puzzleComplete ? 'Hooray! You did it! 🌟' : '', puzzleComplete ? 'رائع! لقد نجحت! 🌟' : '');
        renderBoard(number);
        if (puzzleComplete) find('#puzzle-shuffle').focus();
    }
    function shufflePuzzle() {
        board = solvedBoard.slice();
        let previousEmpty = -1;
        for (let i = 0; i < 60; i++) {
            const empty = board.indexOf(0);
            let candidates = board.map((_, index) => index).filter(index => adjacent(index, empty));
            if (candidates.length > 1) candidates = candidates.filter(index => index !== previousEmpty);
            const next = candidates[Math.floor(Math.random() * candidates.length)];
            swapTiles(empty, next); previousEmpty = empty;
        }
        if (isSolved()) { const empty = board.indexOf(0); swapTiles(empty, board.findIndex((_, index) => adjacent(index, empty))); }
        moves = 0; puzzleComplete = false; bilingualStatus(puzzleStatus, '', ''); renderBoard();
    }
    find('#puzzle-shuffle').addEventListener('click', shufflePuzzle);

    const goal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let positions = Array(9).fill(null);
    let trayOrder = [];
    let selected = null;
    let dragged = null;
    function shuffledNumbers() {
        const values = goal.slice();
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }
        return values;
    }
    function checkCompletion() {
        if (positions.some(number => number === null)) return bilingualStatus(lineStatus, '', '');
        const correct = positions.every((number, index) => number === goal[index]);
        bilingualStatus(lineStatus, correct ? 'Hooray! You put all the numbers in order! 🌟' : 'Almost there! Try moving a few numbers.', correct ? 'رائع! لقد رتّبت جميع الأرقام! 🌟' : 'اقتربت! جرّب تغيير أماكن بعض الأرقام.');
    }
    function countingClue(count) {
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('viewBox', '0 0 60 60');
        svg.setAttribute('class', 'counting-clue');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        const faceColors = ['#ffdc4e', '#ff82b2', '#65daca', '#a6e85c', '#c9a1f3', '#ffac5e', '#f58f7d'];
        for (let i = 0; i < count; i++) {
            const x = 10 + (i % 3) * 20;
            const y = 10 + Math.floor(i / 3) * 20;
            const group = document.createElementNS(ns, 'g');
            group.setAttribute('transform', `translate(${x} ${y})`);
            const face = document.createElementNS(ns, 'circle');
            face.setAttribute('r', '8'); face.setAttribute('fill', faceColors[i % faceColors.length]); face.setAttribute('stroke', '#674f36'); face.setAttribute('stroke-width', '.8');
            const eyes = document.createElementNS(ns, 'path');
            eyes.setAttribute('d', 'M-3 -2h.1 M3 -2h.1 M-3 2 Q0 5 3 2'); eyes.setAttribute('fill', 'none'); eyes.setAttribute('stroke', '#3f382e'); eyes.setAttribute('stroke-width', '1.4'); eyes.setAttribute('stroke-linecap', 'round');
            const shine = document.createElementNS(ns, 'circle');
            shine.setAttribute('cx', '-3'); shine.setAttribute('cy', '-5'); shine.setAttribute('r', '1.5'); shine.setAttribute('fill', '#fff'); shine.setAttribute('opacity', '.75');
            group.append(face, eyes, shine); svg.append(group);
        }
        return svg;
    }
    function renderLine() {
        lineBoard.replaceChildren();
        positions.forEach((number, index) => {
            const slot = document.createElement('button');
            slot.type = 'button'; slot.className = `line-slot${number === null ? '' : ' filled'}`;
            slot.dataset.index = index;
            slot.setAttribute('aria-label', number === null ? `Empty position ${index + 1} / المكان الفارغ ${arabicNumber(index + 1)}` : `Position ${index + 1}, number ${number}. Select to return to tray. / المكان ${arabicNumber(index + 1)}، الرقم ${arabicNumber(number)}. اضغط لإعادته إلى الصينية.`);
            if (number === null) slot.append(countingClue(index + 1));
            if (number !== null) { slot.style.setProperty('--block-color', colors[number - 1]); slot.append(document.createTextNode(number)); }
            slot.addEventListener('click', () => number === null ? placeNumber(index, selected) : returnNumber(index));
            slot.addEventListener('dragover', event => { if (positions[index] === null && dragged !== null) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; } });
            slot.addEventListener('drop', event => { event.preventDefault(); placeNumber(index, dragged); dragged = null; });
            lineBoard.append(slot);
        });
    }
    function renderTray(focusNumber) {
        tray.replaceChildren();
        trayOrder.filter(number => !positions.includes(number)).forEach(number => {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'tray-block'; button.draggable = true;
            button.dataset.number = number; button.textContent = number;
            button.style.setProperty('--block-color', colors[number - 1]);
            button.setAttribute('aria-pressed', String(selected === number));
            button.setAttribute('aria-label', `Select number ${number} / اختر الرقم ${arabicNumber(number)}`);
            button.addEventListener('click', () => selectNumber(number));
            button.addEventListener('dragstart', event => { dragged = number; event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', String(number)); });
            button.addEventListener('dragend', () => { dragged = null; });
            tray.append(button);
        });
        if (focusNumber) tray.querySelector(`[data-number="${focusNumber}"]`)?.focus();
    }
    function selectNumber(number) { selected = selected === number ? null : number; renderTray(number); }
    function placeNumber(index, number) {
        if (number === null || positions[index] !== null || positions.includes(number)) return;
        positions[index] = number; selected = null; renderLine(); renderTray(); checkCompletion();
        lineBoard.querySelector(`[data-index="${index}"]`)?.focus();
    }
    function returnNumber(index) {
        const number = positions[index]; positions[index] = null; selected = null;
        renderLine(); renderTray(number); checkCompletion();
    }
    function resetNumberLine() { positions = Array(9).fill(null); trayOrder = shuffledNumbers(); selected = null; dragged = null; renderLine(); renderTray(); checkCompletion(); }
    find('#line-reset').addEventListener('click', resetNumberLine);
    shufflePuzzle();
    resetNumberLine();
});
