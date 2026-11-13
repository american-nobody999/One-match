
//Author: Leslie Brockman
//date modified: 2026-11-11
// One persistent source journal; progressively finer soil without resetting cleared area.This is intended to simulate careful archaeological excavation over time. This the digging part.
'use strict';
(() => {
    const root = document.getElementById('history-ancient-activity');
    if (!root) return;
    const ns = 'http://www.w3.org/2000/svg', controllers = [];
    const create = (tag, attributes) => { const node = document.createElementNS(ns, tag); Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value)); return node; };
    function pair(node, en, ar) {
        node.replaceChildren(); [en, ar].forEach((text, i) => { const span = document.createElement('span'); span.className = i ? 'history-ar' : 'history-en'; span.lang = i ? 'ar' : 'en'; span.dir = i ? 'rtl' : 'ltr'; span.textContent = text; node.append(span); });
    }
    root.querySelectorAll('[data-buried-clue]').forEach(entry => {
        const dig = entry.querySelector('[data-buried-dig]'), soil = entry.querySelector('.buried-soil');
        const original = [...entry.querySelectorAll('[data-soil-tile]')];
        const clear = entry.querySelector('[data-buried-clear]'), reveal = entry.querySelector('[data-buried-reveal]'), status = entry.querySelector('[data-buried-status]');
        // A 60x36 coverage map is divisible by every visible grid (10x6, 20x12, 30x18).
        const cleared = new Set(), maskID = `shared-soil-${entry.dataset.buriedClue}`;
        const mask = create('mask', {id: maskID, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 300, height: 150});
        mask.append(create('rect', {width: 300, height: 150, fill: 'white'}));
        const holes = create('g', {fill: 'black'}); mask.append(holes); soil.querySelector('defs').append(mask);
        const surface = create('g', {mask: `url(#${maskID})`}); original.forEach(tile => surface.append(tile)); soil.append(surface);
        let columns = 10, rows = 6, tiles = original, pointer = null, previous = null, lastPercent = -1, dirty = true;
        function cells(index) {
            const result = [], w = 60 / columns, h = 36 / rows, x = index % columns * w, y = Math.floor(index / columns) * h;
            for (let dy = 0; dy < h; dy++) for (let dx = 0; dx < w; dx++) result.push((y + dy) * 60 + x + dx);
            return result;
        }
        function isCleared(index) { return cells(index).every(cell => cleared.has(cell)); }
        function paint() {
            holes.replaceChildren();
            for (let y = 0; y < 36; y++) for (let x = 0; x < 60;) {
                if (!cleared.has(y * 60 + x)) { x++; continue; }
                const start = x; while (x < 60 && cleared.has(y * 60 + x)) x++;
                holes.append(create('rect', {x: start * 5, y: y * 150 / 36, width: (x - start) * 5 + .02, height: 150 / 36 + .02}));
            }
            tiles.forEach((tile, index) => { tile.dataset.cleared = String(isCleared(index)); });
        }
        function update() {
            const percent = Math.round(cleared.size / 2160 * 100), ready = cleared.size >= 1296, complete = cleared.size === 2160;
            const newlyRevealed = complete && dig.dataset.revealed !== 'true';
            reveal.disabled = !ready; clear.disabled = complete; dig.dataset.ready = String(ready);
            dig.style.setProperty('--buried-ink-opacity', String(.88 + cleared.size / 2160 * .12));
            if (newlyRevealed) {
                dig.dataset.revealed = 'true'; const hint = entry.querySelector('[data-buried-hint]');
                hint.setAttribute('aria-hidden', 'false'); hint.inert = false; reveal.setAttribute('aria-expanded', 'true');
                entry.dispatchEvent(new CustomEvent('history-clue-revealed'));
            }
            if (percent !== lastPercent || newlyRevealed) {
                pair(status, complete ? '100% cleared. Source hint fully uncovered. The quotation and source link are available.' : ready ? `${percent}% cleared. Keep brushing or reveal the full hint.` : `${percent}% cleared. Clear 60% to unlock the hint.`,
                    complete ? 'أُزيل 100٪. كُشف التلميح بالكامل. الاقتباس ورابط المصدر متاحان.' : ready ? `أُزيل ${percent}٪. واصل التنظيف أو اكشف التلميح بالكامل.` : `أُزيل ${percent}٪. أزِل 60٪ لفتح التلميح.`); lastPercent = percent;
            }
            if (dirty) { paint(); dirty = false; }
        }
        function uncover(index) { if (index >= 0 && index < tiles.length) cells(index).forEach(cell => { if (!cleared.has(cell)) { cleared.add(cell); dirty = true; } }); }
        function brush(event) {
            if (dig.dataset.revealed === 'true') return;
            const box = dig.getBoundingClientRect(); if (!box.width || !box.height) return;
            const x = (event.clientX - box.left) / box.width * columns, y = (event.clientY - box.top) / box.height * rows;
            if (x < 0 || x >= columns || y < 0 || y >= rows) { previous = null; return; }
            const from = previous || {x, y}; const steps = Math.max(1, Math.ceil(Math.max(Math.abs(x - from.x), Math.abs(y - from.y)) * 2));
            for (let step = 0; step <= steps; step++) {
                const column = Math.floor(from.x + (x - from.x) * step / steps), row = Math.floor(from.y + (y - from.y) * step / steps);
                for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (column + dx >= 0 && column + dx < columns && row + dy >= 0 && row + dy < rows) uncover((row + dy) * columns + column + dx);
            }
            previous = {x, y}; update();
        }
        dig.addEventListener('pointerdown', event => { if (event.button !== 0 || pointer !== null || dig.dataset.revealed === 'true') return; pointer = event.pointerId; previous = null; dig.setPointerCapture(pointer); brush(event); });
        dig.addEventListener('pointermove', event => { if (event.pointerId === pointer) brush(event); });
        const end = event => { if (event.pointerId === pointer) { pointer = null; previous = null; } };
        ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => dig.addEventListener(type, end));
        clear.addEventListener('click', () => { if (dig.dataset.revealed === 'true') return; tiles.map((_, i) => i).filter(i => !isCleared(i)).slice(0, Math.ceil(tiles.length * .2)).forEach(uncover); update(); });
        reveal.addEventListener('click', () => { if (reveal.disabled || dig.dataset.revealed === 'true') return; for (let i = 0; i < 2160; i++) cleared.add(i); dirty = true; update(); });
        controllers.push(level => {
            if (columns === level * 10) return;
            if (pointer !== null && dig.hasPointerCapture(pointer)) dig.releasePointerCapture(pointer);
            pointer = null; previous = null; columns = level * 10; rows = level * 6;
            if (level === 1) { tiles = original; } else {
                tiles = Array.from({length: columns * rows}, (_, i) => {
                    const tile = original[0].cloneNode(true); tile.dataset.soilTile = String(i);
                    tile.setAttribute('transform', `translate(${i % columns * 300 / columns} ${Math.floor(i / columns) * 150 / rows}) scale(${10 / columns} ${6 / rows})`); return tile;
                });
            }
            surface.replaceChildren(...tiles); dirty = true; dig.dataset.grid = `${columns}x${rows}`; update();
        });
        dig.dataset.grid = '10x6'; clear.hidden = false; update();
    });
    root.setExcavationLevel = level => { if ([1, 2, 3].includes(level)) controllers.forEach(set => set(level)); };
})();
