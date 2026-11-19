/**
 * Author: Leslie Brockman
 * ABC Shapes Educational Page
 * Date Modified 11-18-2026
 * Description: JavaScript functionality for the ABC Shapes educational page.
 */
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.abc-shapes-classroom');
    if (!page) return;
    const shapes = [
        { id: 'circle', en: 'Circle', ar: 'دائرة', color: '#f4d15d', path: 'M50 10 A40 40 0 1 1 49.99 10 Z' },
        { id: 'square', en: 'Square', ar: 'مربع', color: '#91cda4', path: 'M16 16 H84 V84 H16 Z' },
        { id: 'triangle', en: 'Triangle', ar: 'مثلث', color: '#ef927e', path: 'M50 10 L90 84 H10 Z' },
        { id: 'rectangle', en: 'Rectangle', ar: 'مستطيل', color: '#a1c7ed', path: 'M8 25 H92 V75 H8 Z' },
        { id: 'diamond', en: 'Diamond', ar: 'معين', color: '#c8aee8', path: 'M50 8 L86 50 L50 92 L14 50 Z' },
        { id: 'crescent', en: 'Crescent', ar: 'هلال', color: '#f5c94c', path: 'M72 10 C50 16 40 32 40 50 C40 68 50 84 72 90 C38 96 12 76 12 50 C12 24 38 4 72 10 Z' },
        { id: 'semicircle', en: 'Semicircle', ar: 'نصف دائرة', color: '#ecadc1', path: 'M10 72 A40 40 0 0 1 90 72 Z' },
        { id: 'oval', en: 'Oval', ar: 'شكل بيضاوي', color: '#59d5cb', path: 'M8 50 A42 29 0 1 0 92 50 A42 29 0 1 0 8 50 Z' },
        { id: 'pentagon', en: 'Pentagon', ar: 'خماسي الأضلاع', color: '#a778e9', path: 'M50 9 L90 39 L75 86 H25 L10 39 Z' },
        { id: 'hexagon', en: 'Hexagon', ar: 'سداسي الأضلاع', color: '#a4d95e', path: 'M28 12 H72 L94 50 L72 88 H28 L6 50 Z' },
        { id: 'star', en: 'Star', ar: 'نجمة', color: '#f4c63f', path: 'M50 7 L61 35 L91 36 L67 55 L75 85 L50 68 L25 85 L33 55 L9 36 L39 35 Z' },
        { id: 'heart', en: 'Heart', ar: 'قلب', color: '#f17bac', path: 'M50 87 C42 78 9 57 9 33 C9 10 35 5 50 25 C65 5 91 10 91 33 C91 57 58 78 50 87 Z' }
    ];

    const board = page.querySelector('#shape-board');
    const tray = page.querySelector('#shape-tray');
    const feedback = page.querySelector('#shape-feedback');
    const complete = page.querySelector('#shape-complete');
    const again = page.querySelector('#shape-again');
    const resetButton = page.querySelector('#shape-reset');
    if (![board, tray, feedback, complete, again, resetButton].every(Boolean)) return;
    const matched = new Set();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let gesture = null;
    let graphicId = 0;
    function say(en, ar) {
        const english = document.createElement('span');
        english.lang = 'en'; english.textContent = en;
        const arabic = document.createElement('span');
        arabic.lang = 'ar'; arabic.dir = 'rtl'; arabic.textContent = ar;
        feedback.replaceChildren(english, arabic);
    }
    function graphic(shape) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100'); svg.setAttribute('aria-hidden', 'true'); svg.classList.add('shape-svg');
        const ns = 'http://www.w3.org/2000/svg';
        const defs = document.createElementNS(ns, 'defs');
        const gradient = document.createElementNS(ns, 'linearGradient');
        const id = `shape-toy-gradient-${++graphicId}`;
        gradient.id = id; gradient.setAttribute('x1', '0'); gradient.setAttribute('y1', '0'); gradient.setAttribute('x2', '1'); gradient.setAttribute('y2', '1');
        [['0%', '#fff', '.85'], ['18%', shape.color, '1'], ['70%', shape.color, '1'], ['100%', '#513c45', '.8']].forEach(([offset, color, opacity]) => {
            const stop = document.createElementNS(ns, 'stop'); stop.setAttribute('offset', offset); stop.setAttribute('stop-color', color); stop.setAttribute('stop-opacity', opacity); gradient.append(stop);
        });
        defs.append(gradient); svg.append(defs); svg.style.setProperty('--shape-fill', `url(#${id})`);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', shape.path); path.setAttribute('class', 'shape-geometry');
        svg.append(path);
        const shine = document.createElementNS(ns, 'path');
        shine.setAttribute('d', 'M27 31 Q35 19 46 18');
        shine.setAttribute('class', 'shape-shine');
        shine.setAttribute('fill', 'none'); shine.setAttribute('stroke', '#fff');
        shine.setAttribute('stroke-width', '4'); shine.setAttribute('stroke-linecap', 'round');
        shine.setAttribute('opacity', '.48');
        const clip = document.createElementNS(ns, 'clipPath'); clip.id = `${id}-clip`;
        const clipShape = path.cloneNode(); clip.append(clipShape); defs.append(clip);
        shine.setAttribute('clip-path', `url(#${clip.id})`); svg.append(shine);
        return svg;
    }
    function label(shape) {
        const wrapper = document.createElement('span'); wrapper.className = 'shape-label';
        const en = document.createElement('span'); en.lang = 'en'; en.textContent = shape.en;
        const ar = document.createElement('span'); ar.lang = 'ar'; ar.dir = 'rtl'; ar.textContent = shape.ar;
        wrapper.append(en, ar); return wrapper;
    }

    function buildGame() {
        board.replaceChildren();
        tray.replaceChildren();
        shapes.forEach(shape => {
            const target = document.createElement('button');
            target.type = 'button'; target.className = 'shape-target';
            target.dataset.shape = shape.id;
            target.style.setProperty('--shape-color', shape.color);
            target.setAttribute('aria-label', `${shape.en} target / ${shape.ar} مكان الشكل`);
            target.append(graphic(shape), label(shape));
            board.append(target);
            const piece = document.createElement('button');
            piece.type = 'button'; piece.className = 'shape-piece';
            piece.dataset.shape = shape.id;
            piece.style.setProperty('--shape-color', shape.color);
            piece.setAttribute('aria-label', `Drag ${shape.en} / اسحب ${shape.ar}`);
            piece.append(graphic(shape), label(shape));
            tray.append(piece);
        });
    }
    // Use target rectangles directly: nested SVGs, labels, and pointer capture cannot change the result.
    function targetAt(x, y) {
        if (x < 0 || y < 0 || x > innerWidth || y > innerHeight) return null;
        return Array.from(board.querySelectorAll('.shape-target:not(:disabled)')).find(target => {
            const r = target.getBoundingClientRect();
            return r.width > 0 && r.height > 0 && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        }) || null;
    }
    function positionGhost(g, x, y) {
        g.ghost.style.left = `${x}px`;
        g.ghost.style.top = `${y}px`;
    }
    function clearHighlight(g) {
        if (g?.hover) g.hover.classList.remove('is-over');
        if (g) g.hover = null;
    }
    function animateReturn(g, x, y, rect) {
        const ghost = g.ghost;
        if (!ghost) return;
        if (reducedMotion.matches || !ghost.animate) { ghost.remove(); return; }
        const dx = rect.left + rect.width / 2 - x;
        const dy = rect.top + rect.height / 2 - y;
        const finish = () => ghost.remove();
        try {
            const animation = ghost.animate([
                { transform: 'translate(-50%, -50%)' },
                { transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px)` }
            ], { duration: 230, easing: 'ease-out' });
            animation.addEventListener('finish', finish, { once: true });
            animation.addEventListener('cancel', finish, { once: true });
        } catch (_) { finish(); }
    }
    function release(g) {
        clearHighlight(g);
        g.piece.classList.remove('is-dragging');
        gesture = null;
        // Pointer capture is deliberately not used: window listeners track the gesture.
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        window.removeEventListener('pointercancel', onCancel);
        window.removeEventListener('blur', onBlur);
    }
    function onDown(event) {
        if (gesture || !event.isPrimary || event.button !== 0) return;
        const piece = event.target.closest?.('.shape-piece');
        if (!piece || !tray.contains(piece) || matched.has(piece.dataset.shape)) return;
        const shape = shapes.find(item => item.id === piece.dataset.shape);
        if (!shape) return;
        // Avoid native button dragging/text selection, without introducing click-to-match.
        event.preventDefault();
        gesture = { pointer: event.pointerId, piece, shape, startX: event.clientX, startY: event.clientY, x: event.clientX, y: event.clientY, ghost: null, hover: null };
        window.addEventListener('pointermove', onMove, { passive: false });
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onCancel);
        window.addEventListener('blur', onBlur);
    }
    function onMove(event) {
        const g = gesture;
        if (!g || event.pointerId !== g.pointer) return;
        g.x = event.clientX; g.y = event.clientY;
        if (!g.ghost && Math.hypot(g.x - g.startX, g.y - g.startY) < 5) return;
        if (!g.ghost) {
            const ghost = graphic(g.shape);
            ghost.classList.add('shape-drag-ghost');
            ghost.style.setProperty('--shape-color', g.shape.color);
            ghost.style.position = 'fixed';
            ghost.style.pointerEvents = 'none';
            ghost.style.zIndex = '2147483647';
            ghost.style.width = '85px'; ghost.style.height = '85px';
            ghost.style.transform = 'translate(-50%, -50%)';
            document.body.append(ghost);
            g.ghost = ghost;
            g.piece.classList.add('is-dragging');
        }
        event.preventDefault();
        positionGhost(g, g.x, g.y);
        const next = targetAt(g.x, g.y);
        if (next !== g.hover) {
            clearHighlight(g);
            g.hover = next;
            next?.classList.add('is-over');
        }
    }
    function onUp(event) {
        const g = gesture;
        if (!g || event.pointerId !== g.pointer) return;
        event.preventDefault();
        const target = g.ghost ? targetAt(event.clientX, event.clientY) : null;
        const success = !!target && target.dataset.shape === g.shape.id && !matched.has(g.shape.id);
        const destinationRect = success ? target.querySelector('.shape-svg').getBoundingClientRect() : g.piece.querySelector('.shape-svg').getBoundingClientRect();
        release(g);
        if (success) {
            matched.add(g.shape.id);
            target.classList.add('matched');
            target.disabled = true;
            target.setAttribute('aria-label', `${g.shape.en} matched / ${g.shape.ar} تمت المطابقة`);
            g.piece.remove();
            say('Great job! You found the shape! ⭐', 'أحسنت! لقد وجدت الشكل! ⭐');
            if (matched.size === shapes.length) {
                complete.hidden = false;
                again.hidden = false;
                feedback.replaceChildren();
            }
        } else if (g.ghost) {
            say('Try again! 🌈', 'حاول مرة أخرى! 🌈');
        }
        if (g.ghost) animateReturn(g, event.clientX, event.clientY, destinationRect);
    }
    function onCancel(event) {
        const g = gesture;
        if (!g || event.pointerId !== g.pointer) return;
        const rect = g.piece.querySelector('.shape-svg').getBoundingClientRect();
        release(g);
        if (g.ghost) animateReturn(g, g.x, g.y, rect);
    }
    function onBlur() {
        const g = gesture;
        if (!g) return;
        const rect = g.piece.querySelector('.shape-svg').getBoundingClientRect();
        release(g);
        if (g.ghost) animateReturn(g, g.x, g.y, rect);
    }
    function reset() {
        if (gesture) {
            const g = gesture;
            release(g);
            g.ghost?.remove();
        }
        document.querySelectorAll('.shape-drag-ghost').forEach(node => node.remove());
        matched.clear();
        complete.hidden = true;
        again.hidden = true;
        feedback.replaceChildren();
        buildGame();
    }
    tray.addEventListener('pointerdown', onDown);
    tray.addEventListener('dragstart', event => event.preventDefault());
    resetButton.addEventListener('click', reset);
    again.addEventListener('click', reset);
    reset();
});
