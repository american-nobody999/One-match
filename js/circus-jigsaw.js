  //Author: Leslie Brockman
  // Circus Jigsaw Game controller.
  // Retains native pointer capture/delta dragging; adds generated geometry, snapping,
  //keyboard placement, lifecycle cleanup, and image-relative resize-safe positions. 
  //Date: 11-21-2026
(() => {
    'use strict';
    const game = document.getElementById('jigsaw-game');
    if (!game) return;
    const root = 'https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/';
    const photographs = [1, 2, 3].map(number => ({ number, src: `${root}edu/circus/puz-${number}.jpg` }));
    // Only the approved first and third transparent performer cutouts.
    const characterAssets = { welcome: `${root}edu/circus/clown1.png`, presenter: `${root}edu/circus/tata.png` };
    const $ = id => game.querySelector(`#${id}`);
    const board = $('jigsaw-board');
    const viewport = $('jigsaw-board-viewport');
    const photoOnBoard = $('jigsaw-board-photo');
    const targets = $('jigsaw-targets');
    const layer = $('jigsaw-pieces-layer');
    const tray = $('jigsaw-tray');
    const work = $('jigsaw-work');
    const table = game.querySelector('.jigsaw-table');
    const status = $('jigsaw-status');
    const placedDisplay = $('jigsaw-placed');
    const timeDisplay = $('jigsaw-time');
    const progress = $('jigsaw-progress');
    const start = $('jigsaw-start');
    const newGame = $('jigsaw-new');
    const pictureButton = $('jigsaw-picture');
    const referencePanel = $('jigsaw-picture-panel');
    const referenceImage = $('jigsaw-reference-image');
    const guide = $('jigsaw-guide');
    const victory = $('jigsaw-victory');
    const finalResult = $('jigsaw-final-result');
    const again = $('jigsaw-again');
    const choose = $('jigsaw-choose');
    const levelInputs = [...game.querySelectorAll('input[name="jigsaw-level"]')];
    const svgNS = 'http://www.w3.org/2000/svg';
    let grid = 3;
    let loadedPhoto = null;
    let imageRequest = 0;
    let state = 'loading';
    let pieces = [];
    let selected = null;
    let placed = 0;
    let width = 1000;
    let height = 750;
    let cellW = 0;
    let cellH = 0;
    let pad = 0;
    let scale = 1;
    let serial = 0;
    let zCounter = 3;
    let startedAt = 0;
    let elapsedSeconds = 0;
    let timer = null;
    let drag = null;
    let deferredLayout = false;
    let suppressClickUntil = 0;
    let feedback = { key: 'loading', values: {} };
    const arabic = () => document.documentElement.lang === 'ar';
    const text = (en, ar) => arabic() ? ar : en;
    const photo = () => photographs[grid / 3 - 1]; // 3×3→puz-1, 6×6→puz-2, 9×9→puz-3.
    const total = () => grid * grid;
    const messages = {
        work: () => text('Piece on the work table. Use arrow keys to rearrange it, B for the board, or G for the gallery.', 'القطعة على طاولة العمل. استخدم الأسهم لتحريكها، وB للوحة، وG للمعرض.'),
        touchReady: () => text('Piece selected. Drag it on your next touch, or tap a board space or empty work-table area. Tap the selected piece again to allow scrolling.', 'اخترت القطعة. اسحبها في اللمسة التالية، أو المس مكانًا على اللوحة أو مساحة فارغة على طاولة العمل. المس القطعة المختارة مجددًا للسماح بالتمرير.'),
        gallery: () => text('Piece returned to the gallery.', 'أُعيدت القطعة إلى المعرض.'),
        loading: () => text('Loading the selected photograph…', 'جارٍ تحميل الصورة المختارة…'),
        ready: () => text(`Photograph ${photo().number} · ${grid} × ${grid} · ${total()} pieces. Ready to start!`, `الصورة ${photo().number} · ${grid} × ${grid} · عدد القطع ${total()}. جاهزون للبدء!`),
        started: () => text('The picture magic begins! Find a place for each piece.', 'بدأ سحر الصور! اعثر على مكان كل قطعة.'),
        selected: v => text(`Piece ${v.number} selected. Choose a board space, then Enter or tap to place.`, `اخترت القطعة ${v.number}. اختر مكانًا على اللوحة، ثم اضغط Enter أو المسه لوضعها.`),
        wrong: () => text('Not this space yet. Try another spot; your piece is still movable!', 'هذا ليس مكانها بعد. جرّب مكانًا آخر؛ ما زالت القطعة قابلة للتحريك!'),
        placed: () => text(`Lovely fit! ${placed} of ${total()} pieces placed.`, `تطابق رائع! ثُبّتت ${placed} من ${total()} قطعة.`),
        pick: () => text('Select a loose piece first, then choose its space.', 'اختر قطعة حرة أولًا، ثم اختر مكانها.'),
        occupied: () => text('That space already has its correct piece.', 'هذا المكان يحتوي بالفعل على القطعة الصحيحة.'),
        cancelled: () => text('Selection cleared. Choose any loose piece.', 'أُلغي الاختيار. اختر أي قطعة حرة.'),
        won: () => text(`Bravo! Photograph ${photo().number} complete: ${total()} pieces in ${formatTime(elapsedSeconds)}.`, `برافو! اكتملت الصورة ${photo().number}: ${total()} قطعة في ${formatTime(elapsedSeconds)}.`),
        error: v => text(`This level’s photograph could not load: ${v.url || photo().src}. Choose another level, then reselect this one to retry. Details are in the browser console.`, `تعذّر تحميل صورة هذا المستوى: ${v.url || photo().src}. اختر مستوى آخر، ثم اختر هذا المستوى مجددًا للمحاولة. التفاصيل في وحدة تحكم المتصفح.`)
    };
    function announce(key, values = {}) {
        feedback = { key, values };
        renderStatus();
    }
    function renderStatus() {
        status.lang = arabic() ? 'ar' : 'en';
        status.dir = arabic() ? 'rtl' : 'ltr';
        status.textContent = messages[feedback.key](feedback.values);
    }
    function formatTime(seconds) {
        return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    }
    function updateTimer() {
        elapsedSeconds = Math.floor((performance.now() - startedAt) / 1000);
        timeDisplay.textContent = formatTime(elapsedSeconds);
    }
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }
    function shuffle(list) {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        return list;
    }
    function updateProgress() {
        placedDisplay.textContent = `${placed} / ${total()}`;
        progress.max = total();
        progress.value = placed;
        progress.textContent = `${placed} / ${total()}`;
    }
    function clearSelection() {
        if (selected) {
            selected.button.setAttribute('aria-pressed', 'false');
            selected.button.classList.remove('is-touch-ready');
        }
        selected = null;
        board.classList.remove('is-selecting');
    }
    function resetToPreview() {
        cancelDrag();
        stopTimer();
        clearSelection();
        pieces = [];
        placed = 0;
        elapsedSeconds = 0;
        timeDisplay.textContent = '00:00';
        layer.replaceChildren();
        targets.replaceChildren();
        tray.replaceChildren();
        work.querySelectorAll('.jigsaw-piece').forEach(button => button.remove());
        tray.scrollLeft = 0;
        tray.scrollTop = 0;
        zCounter = 3;
        board.classList.remove('is-playing', 'hide-guide', 'is-complete');
        board.style.setProperty('--jg-board-min', '0px');
        victory.hidden = true;
        finalResult.textContent = '';
        referencePanel.hidden = true;
        pictureButton.setAttribute('aria-expanded', 'false');
        state = loadedPhoto ? 'ready' : 'loading';
        start.disabled = !loadedPhoto;

        newGame.disabled = !loadedPhoto;
        pictureButton.disabled = !loadedPhoto;
        updateProgress();
        announce(loadedPhoto ? 'ready' : 'loading');
    }
    function selectPhotograph() {
        const request = ++imageRequest;
        const requestedPhoto = photo();
        const requestedGrid = grid;
        const url = requestedPhoto.src;
        loadedPhoto = null;
        resetToPreview();
        board.setAttribute('aria-busy', 'true');
        photoOnBoard.hidden = true;
        photoOnBoard.removeAttribute('src');
        referenceImage.removeAttribute('src');
        const image = new Image();
        function failImage(reason, event) {
            console.error('[Gaza Circus Jigsaw] Photograph loading failed.', {
                url,
                level: requestedGrid / 3,
                grid: `${requestedGrid}x${requestedGrid}`,
                reason,
                eventType: event?.type || 'invalid-image',
                advice: 'Check the URL, filename case, network response, and image-src CSP. Image events do not expose HTTP status.'
            });
            if (request !== imageRequest) return;
            loadedPhoto = null;
            state = 'error';
            board.setAttribute('aria-busy', 'false');
            photoOnBoard.hidden = true;
            start.disabled = true;

            pictureButton.disabled = true;
            newGame.disabled = false; // Retry is available; the other level selectors stay usable.
            announce('error', { url });
        }
        image.onload = () => {
            if (request !== imageRequest) return;
            if (!image.naturalWidth || !image.naturalHeight) {
                failImage('The response did not decode to an image with valid dimensions.');
                return;
            }
            loadedPhoto = image;
            width = 1000;
            height = width * image.naturalHeight / image.naturalWidth;
            board.style.setProperty('--jg-photo-ratio', `${image.naturalWidth} / ${image.naturalHeight}`);
            photoOnBoard.src = url;
            referenceImage.src = url;
            photoOnBoard.hidden = false;
            board.setAttribute('aria-busy', 'false');
            resetToPreview(); // Enables Start only after this selected image has loaded.
            syncLanguage();
        };
        image.onerror = event => failImage('The browser could not fetch or decode the photograph.', event);
        image.src = url;
    }
    function selectDifficulty() {
        // Every level owns its photograph. Loading clears old pieces/timers and
        // the request token prevents late images from replacing a newer selection.
        selectPhotograph();
    }
    // Clockwise boundary construction. Outward normals reverse on shared edges.
    // Reversed traversal + opposite sign produces the identical neighboring contour.
    function edge(x1, y1, x2, y2, sign) {
        if (!sign) return `L ${x2} ${y2} `;
        const dx = x2 - x1, dy = y2 - y1;
        const length = Math.hypot(dx, dy);
        const depth = Math.min(cellW, cellH) * .22 * sign;
        const point = (t, d) => `${x1 + dx * t + dy / length * d} ${y1 + dy * t - dx / length * d}`;
        return `L ${point(.32, 0)} C ${point(.42, 0)} ${point(.38, depth)} ${point(.5, depth)} C ${point(.62, depth)} ${point(.58, 0)} ${point(.68, 0)} L ${x2} ${y2} `;
    }
    function generatePieces() {
        cellW = width / grid;
        cellH = height / grid;
        pad = Math.min(cellW, cellH) * .25;
        const sign = () => Math.random() < .5 ? -1 : 1;
        const vertical = Array.from({ length: grid }, () => Array.from({ length: grid - 1 }, sign));
        const horizontal = Array.from({ length: grid - 1 }, () => Array.from({ length: grid }, sign));
        return Array.from({ length: total() }, (_, id) => {
            const row = Math.floor(id / grid), col = id % grid;
            const x = col * cellW, y = row * cellH;
            const path = `M ${x} ${y} `
                + edge(x, y, x + cellW, y, row ? -horizontal[row - 1][col] : 0)
                + edge(x + cellW, y, x + cellW, y + cellH, col < grid - 1 ? vertical[row][col] : 0)
                + edge(x + cellW, y + cellH, x, y + cellH, row < grid - 1 ? horizontal[row][col] : 0)
                + edge(x, y + cellH, x, y, col ? -vertical[row][col - 1] : 0) + 'Z';
            return { id, row, col, x, y, path, number: 0, locked: false, zone: 'gallery', workX: .5, workY: .5, posX: x + cellW / 2, posY: y + cellH / 2, button: null };
        });
    }
    function renderPieceSVG(piece) {
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('viewBox', `${piece.x - pad} ${piece.y - pad} ${cellW + 2 * pad} ${cellH + 2 * pad}`);
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
        const defs = document.createElementNS(svgNS, 'defs');
        const clip = document.createElementNS(svgNS, 'clipPath');
        const clipId = `jg-piece-clip-${++serial}`;
        clip.id = clipId;
        clip.setAttribute('clipPathUnits', 'userSpaceOnUse');
        const shape = document.createElementNS(svgNS, 'path');
        shape.setAttribute('d', piece.path);
        clip.append(shape);
        defs.append(clip);
        const image = document.createElementNS(svgNS, 'image');
        image.setAttribute('href', photo().src);
        image.setAttribute('x', '0'); image.setAttribute('y', '0');
        image.setAttribute('width', String(width)); image.setAttribute('height', String(height));
        image.setAttribute('preserveAspectRatio', 'none'); // Dimensions already match the photo's exact ratio.
        image.setAttribute('clip-path', `url(#${clipId})`);
        const outline = document.createElementNS(svgNS, 'path');
        outline.setAttribute('d', piece.path);
        outline.setAttribute('fill', 'none');
        outline.setAttribute('stroke', '#674b2b');
        outline.setAttribute('stroke-width', '1');
        outline.setAttribute('vector-effect', 'non-scaling-stroke');
        svg.append(defs, image, outline);
        return svg;
    }
    function labelPiece(piece) {
        piece.button.setAttribute('aria-label', piece.locked
            ? text(`Piece ${piece.number}, placed`, `القطعة ${piece.number}، مثبتة`)
            : text(`Piece ${piece.number}. Select, then choose a board space.`, `القطعة ${piece.number}. اخترها ثم اختر مكانًا على اللوحة.`));
    }
    function createPiece(piece) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.order = piece.number;
        button.className = 'jigsaw-piece';
        button.draggable = false;
        button.addEventListener('dragstart', event => event.preventDefault());
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-describedby', 'jigsaw-keyboard-help');
        button.append(renderPieceSVG(piece));
        piece.button = button;
        labelPiece(piece);
        button.addEventListener('focus', () => { if (!piece.locked && piece.zone !== 'gallery') button.style.zIndex = ++zCounter; });
        button.addEventListener('pointerdown', event => grabPiece(event, piece));
        // Document listeners finish the gesture even if capture is lost during reflow.
        button.addEventListener('click', event => {
            if (performance.now() < suppressClickUntil || state !== 'playing' || piece.locked) return;
            selectPiece(piece);
            if (event.detail === 0) focusBoardSpace();
        });
        return button;
    }
    function createTargets() {
        targets.replaceChildren();
        for (let id = 0; id < total(); id++) {
            const cell = document.createElement('button');
            cell.type = 'button'; cell.className = 'jigsaw-cell'; cell.dataset.cell = id;
            cell.style.left = `${id % grid / grid * 100}%`;
            cell.style.top = `${Math.floor(id / grid) / grid * 100}%`;
            cell.style.width = `${100 / grid}%`; cell.style.height = `${100 / grid}%`;
            cell.tabIndex = id ? -1 : 0;
            cell.setAttribute('aria-disabled', 'false');
            labelTarget(cell);
            cell.addEventListener('click', () => attemptKeyboardPlacement(id));
            cell.addEventListener('keydown', navigateTargets);
            cell.addEventListener('focus', () => {
                targets.querySelectorAll('button').forEach(button => { button.tabIndex = button === cell ? 0 : -1; });
            });
            targets.append(cell);
        }
    }
    function labelTarget(cell) {
        const id = Number(cell.dataset.cell);
        cell.setAttribute('aria-label', text(`Row ${Math.floor(id / grid) + 1}, column ${id % grid + 1}${pieces[id]?.locked ? ', filled' : ''}`, `الصف ${Math.floor(id / grid) + 1}، العمود ${id % grid + 1}${pieces[id]?.locked ? '، ممتلئ' : ''}`));
    }
    function navigateTargets(event) {
        let id = Number(event.currentTarget.dataset.cell);
        const row = Math.floor(id / grid), col = id % grid;
        if (event.key === 'ArrowRight') id += col < grid - 1 ? 1 : 0;
        else if (event.key === 'ArrowLeft') id -= col ? 1 : 0;
        else if (event.key === 'ArrowDown') id += row < grid - 1 ? grid : 0;
        else if (event.key === 'ArrowUp') id -= row ? grid : 0;
        else if (event.key === 'Home') id = event.ctrlKey ? 0 : row * grid;
        else if (event.key === 'End') id = event.ctrlKey ? total() - 1 : row * grid + grid - 1;
        else return;
        event.preventDefault();
        targets.children[id].focus();
    }
    function focusBoardSpace() {
        const cell = [...targets.children].find(item => item.getAttribute('aria-disabled') !== 'true');
        cell?.focus();
    }
    function selectPiece(piece) {
        clearSelection();
        selected = piece;
        piece.button.setAttribute('aria-pressed', 'true');
        piece.button.classList.add('is-touch-ready');
        if (piece.zone !== 'gallery') piece.button.style.zIndex = ++zCounter;
        board.classList.add('is-selecting');
        announce('selected', { number: piece.number });
    }
    function attemptKeyboardPlacement(id) {
        if (state !== 'playing') return;
        if (pieces[id].locked) { announce('occupied'); return; }
        if (!selected) { announce('pick'); return; }
        if (selected.id !== id) { announce('wrong'); return; }
        lockPiece(selected, true);
    }
    function layoutPieces() {
        if (!pieces.length) return;
        scale = board.clientWidth / width;
        table.style.setProperty('--jg-piece-width', `${(cellW + 2 * pad) * scale}px`);
        table.style.setProperty('--jg-piece-height', `${(cellH + 2 * pad) * scale}px`);
        pieces.forEach(piece => {
            piece.button.style.width = ''; piece.button.style.height = '';
            if (piece.zone !== 'board') {
                const factor = looseScale();
                piece.button.style.width = `${(cellW + 2 * pad) * factor}px`;
                piece.button.style.height = `${(cellH + 2 * pad) * factor}px`;
            }
            if (piece.zone === 'work') positionInWork(piece);
            if (piece.zone === 'board') {
                piece.button.style.left = `${(piece.posX - cellW / 2 - pad) * scale}px`;
                piece.button.style.top = `${(piece.posY - cellH / 2 - pad) * scale}px`;
            }
        });
    }
    // Project 10-01 pointer capture with a separate top-level visual drag surface.
    // The original button remains the sole interactive instance; the ghost is decorative.
    function grabPiece(event, piece) {
        if (state !== 'playing' || piece.locked || drag || !event.isPrimary || event.button !== 0) return;
        const rect = piece.button.getBoundingClientRect();
        drag = { piece, pointer: event.pointerId, x: event.clientX, y: event.clientY,
            dx: event.clientX - rect.left, dy: event.clientY - rect.top,
            width: rect.width, height: rect.height, moved: false, ghost: null,
            threshold: event.pointerType === 'touch' ? 10 : 5 };
        if (piece.zone !== 'gallery') piece.button.style.zIndex = ++zCounter;
        try { piece.button.setPointerCapture(event.pointerId); }
        catch { /* Document-level pointer handlers remain the fallback. */ }
    }
    function movePiece(event) {
        if (!drag || event.pointerId !== drag.pointer || state !== 'playing') return;
        if (!drag.moved && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < drag.threshold) return;
        event.preventDefault();
        if (!drag.moved) {
            drag.moved = true;
            const ghost = document.createElement('div');
            ghost.className = 'jigsaw-drag-ghost';
            ghost.setAttribute('aria-hidden', 'true');
            ghost.style.width = `${drag.width}px`; ghost.style.height = `${drag.height}px`;
            ghost.append(renderPieceSVG(drag.piece)); // Fresh clip ID, not a duplicate DOM clone.
            document.body.append(ghost);
            drag.ghost = ghost;
            drag.piece.button.classList.add('is-dragging');
        }
        drag.ghost.style.left = `${event.clientX - drag.dx}px`;
        drag.ghost.style.top = `${event.clientY - drag.dy}px`;
    }
    function finishDragCapture() {
        const previous = drag;
        drag = null; // lostpointercapture must not cancel a subsequent placement.
        if (!previous) return null;
        previous.ghost?.remove();
        previous.piece.button.classList.remove('is-dragging');
        if (previous.piece.button.hasPointerCapture(previous.pointer)) previous.piece.button.releasePointerCapture(previous.pointer);
        if (deferredLayout) {
            deferredLayout = false;
            requestAnimationFrame(() => { if (!drag) layoutPieces(); });
        }
        return previous;
    }
    function cancelDrag() {
        if (drag?.moved) suppressClickUntil = performance.now() + 300;
        finishDragCapture();
    }
    function dropPiece(event) {
        if (!drag || event.pointerId !== drag.pointer) return;
        const previous = finishDragCapture();
        if (!previous.moved || state !== 'playing') return;
        event.preventDefault();
        suppressClickUntil = performance.now() + 300;
        const piece = previous.piece;
        const within = rect => event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        const workSurface = workCoordinates();
        const centerXOnRelease = event.clientX - previous.dx + previous.width / 2;
        const centerYOnRelease = event.clientY - previous.dy + previous.height / 2;
        // Pointer capture keeps event.target on the source button. Hit-test the
        // actual surface/descendants and its inner wooden bounds instead.
        const hits = document.elementsFromPoint(event.clientX, event.clientY);
        const galleryRect = tray.getBoundingClientRect();
        if (within(galleryRect) || hits.some(node => node === tray || tray.contains(node))) { returnToTray(piece); return; }
        const onWork = workSurface.width > 0 && workSurface.height > 0 && (
            within(workSurface) || hits.some(node => node === work || work.contains(node)));
        if (onWork) {
            moveToWork(piece,
                (centerXOnRelease - workSurface.left) / workSurface.width,
                (centerYOnRelease - workSurface.top) / workSurface.height);
            return;
        }
        const rect = surfaceCoordinates(board);
        const visible = viewport.getBoundingClientRect();
        // Off-board pieces have a compact display scale. Map the dragged centre
        // back to the board's photograph coordinates before snapping.
        const centerX = event.clientX - previous.dx + previous.width / 2;
        const centerY = event.clientY - previous.dy + previous.height / 2;
        const overBoard = within(visible) && within(rect);
        if (!overBoard) {
            selectPiece(piece); // Preserve the original zone and a recoverable selection.
            return;
        }
        const x = (centerX - rect.left) / rect.width * width;
        const y = (centerY - rect.top) / rect.height * height;
        const targetX = piece.x + cellW / 2, targetY = piece.y + cellH / 2;
        const tolerance = Math.min(cellW, cellH) * .38;
        if (Math.hypot(x - targetX, y - targetY) <= tolerance) lockPiece(piece, false);
        else {
            piece.zone = 'board';
            piece.posX = Math.max(cellW / 2 + pad, Math.min(width - cellW / 2 - pad, x));
            piece.posY = Math.max(cellH / 2 + pad, Math.min(height - cellH / 2 - pad, y));
            piece.button.classList.remove('is-in-work');
            piece.button.classList.add('is-on-board');
            piece.button.style.zIndex = ++zCounter;
            layer.append(piece.button);
            layoutPieces();
            selectPiece(piece);
            announce('wrong');
        }
    }
    // One piece record and one button travel between all three surfaces.
    function looseScale() {
        const nineAcross = (tray.clientWidth - 8 * 8 - 24) / 9;
        const desired = grid === 3 ? Math.max(64, Math.min(100, nineAcross)) : 76;
        const galleryStyle = getComputedStyle(tray);
        const galleryWidth = Math.max(1, tray.clientWidth - parseFloat(galleryStyle.paddingLeft) - parseFloat(galleryStyle.paddingRight));
        return Math.min(galleryWidth / (cellW + 2 * pad), desired / (cellW + 2 * pad), Math.max(1, work.clientWidth - 16) / (cellW + 2 * pad), Math.max(1, work.clientHeight - 16) / (cellH + 2 * pad));
    }
    function surfaceCoordinates(element) {
        const rect = element.getBoundingClientRect();
        const scaleX = element.offsetWidth ? rect.width / element.offsetWidth : 1;
        const scaleY = element.offsetHeight ? rect.height / element.offsetHeight : 1;
        const left = rect.left + element.clientLeft * scaleX;
        const top = rect.top + element.clientTop * scaleY;
        const width = element.clientWidth * scaleX, height = element.clientHeight * scaleY;
        return { left, top, width, height, right: left + width, bottom: top + height };
    }
    function workCoordinates() { return surfaceCoordinates(work); }
    function positionInWork(piece) {
        const w = piece.button.offsetWidth, h = piece.button.offsetHeight;
        const x = Math.max(0, work.clientWidth - w), y = Math.max(0, work.clientHeight - h);
        piece.workX = Math.max(0, Math.min(1, piece.workX));
        piece.workY = Math.max(0, Math.min(1, piece.workY));
        piece.button.style.left = `${piece.workX * x}px`;
        piece.button.style.top = `${piece.workY * y}px`;
    }
    function moveToWork(piece, x, y) {
        if (state !== 'playing' || piece.locked) return;
        piece.zone = 'work';
        piece.button.classList.remove('is-on-board');
        piece.button.classList.add('is-in-work');
        piece.button.style.zIndex = ++zCounter;
        work.append(piece.button);
        const factor = looseScale();
        piece.button.style.width = `${(cellW + 2 * pad) * factor}px`;
        piece.button.style.height = `${(cellH + 2 * pad) * factor}px`;
        if (x !== undefined) {
            const w = piece.button.offsetWidth, h = piece.button.offsetHeight;
            piece.workX = (x * work.clientWidth - w / 2) / Math.max(1, work.clientWidth - w);
            piece.workY = (y * work.clientHeight - h / 2) / Math.max(1, work.clientHeight - h);
        }
        positionInWork(piece);
        selectPiece(piece);
        announce('work');
    }
    function returnToTray(piece) {
        if (piece.locked) return;
        piece.zone = 'gallery';
        piece.button.classList.remove('is-on-board', 'is-in-work');
        piece.button.style.removeProperty('left'); piece.button.style.removeProperty('top');
        piece.button.style.removeProperty('z-index');
        // Restore original shuffled order without a second piece dataset.
        const next = [...tray.children].find(button => Number(button.dataset.order) > piece.number);
        tray.insertBefore(piece.button, next || null);
        layoutPieces();
        selectPiece(piece);
        announce('gallery');
    }
    function lockPiece(piece, keyboard) {
        if (state !== 'playing' || piece.locked) return;
        clearSelection();
        piece.locked = true; piece.zone = 'board';
        piece.posX = piece.x + cellW / 2; piece.posY = piece.y + cellH / 2;
        piece.button.classList.remove('is-in-work');
        piece.button.classList.add('is-on-board', 'is-locked');
        piece.button.style.zIndex = '1';
        piece.button.disabled = true;
        piece.button.classList.add('is-just-locked');
        piece.button.addEventListener('animationend', () => piece.button.classList.remove('is-just-locked'), { once: true });
        labelPiece(piece);
        layer.append(piece.button);
        const target = targets.children[piece.id];
        target.setAttribute('aria-disabled', 'true');
        labelTarget(target);
        placed++;
        layoutPieces();
        updateProgress();
        if (placed === total()) { completePuzzle(); return; }
        announce('placed');
        if (keyboard) pieces.find(item => !item.locked)?.button.focus({ preventScroll: false });
    }
    function completePuzzle() {
        cancelDrag();
        state = 'complete';
        updateTimer();
        stopTimer();
        clearSelection();
        board.classList.remove('is-playing', 'hide-guide');
        board.classList.add('is-complete');
        // Reveal the unsegmented photograph; locked piece geometry stays in state.
        layer.hidden = true;
        targets.hidden = true;
        renderFinalResult();
        victory.hidden = false;
        announce('won');
        again.focus({ preventScroll: true });
    }
    function renderFinalResult() {
        finalResult.lang = arabic() ? 'ar' : 'en';
        finalResult.dir = arabic() ? 'rtl' : 'ltr';
        finalResult.textContent = text(`Circus photograph ${photo().number} · ${total()} pieces · ${formatTime(elapsedSeconds)}`, `صورة السيرك ${photo().number} · القطع: ${total()} · الوقت: ${formatTime(elapsedSeconds)}`);
    }
    function startPuzzle() {
        if (!loadedPhoto) return;
        resetToPreview();
        state = 'playing';
        pieces = generatePieces();
        board.style.setProperty('--jg-board-min', `${grid * 48 * Math.max(1, width / height)}px`);
        layer.hidden = false; targets.hidden = false;
        board.classList.add('is-playing');
        board.classList.toggle('hide-guide', !guide.checked);
        createTargets();
        shuffle([...pieces]).forEach((piece, index) => {
            piece.number = index + 1;
            tray.append(createPiece(piece));
        });
        layoutPieces();
        start.disabled = false; // Start can reset the current loaded puzzle.

        startedAt = performance.now();
        timer = setInterval(updateTimer, 1000);
        announce('started');
        tray.querySelector('button')?.focus({ preventScroll: true });
    }
    function syncLanguage() {
        game.dir = arabic() ? 'rtl' : 'ltr';
        pieces.forEach(labelPiece);
        [...targets.children].forEach(labelTarget);
        targets.setAttribute('aria-label', text('Puzzle spaces', 'أماكن قطع الأحجية'));
        referenceImage.alt = text(`Circus photograph ${photo().number}, full reference`, `صورة السيرك ${photo().number}، المرجع الكامل`);
        renderStatus();
        if (state === 'complete') renderFinalResult();
    }
    function configureCharacters() {
        for (const [key, src] of Object.entries(characterAssets)) {
            if (!src) continue;
            const slot = game.querySelector(`[data-character="${key}"]`);
            const image = new Image();
            image.alt = ''; // Decorative: adjacent game content supplies the meaning.
            image.onload = () => { slot.prepend(image); slot.classList.add('has-art'); };
            image.onerror = () => console.error('[Gaza Circus Jigsaw] Character image failed:', src);
            image.src = src;
        }
    }
    levelInputs.forEach(input => input.addEventListener('change', () => {
        if (!input.checked) return;
        grid = Number(input.value);
        selectDifficulty();
    }));
    const helpPanel = game.querySelector('.jigsaw-play-help');
    const helpToggle = $('jigsaw-help-toggle');
    const helpClose = $('jigsaw-help-close');
    helpPanel.addEventListener('toggle', () => {
        helpToggle.setAttribute('aria-expanded', String(helpPanel.open));
    });
    helpClose.addEventListener('click', () => {
        helpPanel.open = false;
        helpToggle.setAttribute('aria-expanded', 'false');
        helpToggle.focus();
    });
    start.addEventListener('click', startPuzzle);
    newGame.addEventListener('click', () => loadedPhoto ? startPuzzle() : selectPhotograph());
    again.addEventListener('click', startPuzzle);
    choose.addEventListener('click', () => {
        resetToPreview();
        levelInputs.find(input => input.checked)?.focus();
    });
    pictureButton.addEventListener('click', () => {
        referencePanel.hidden = !referencePanel.hidden;
        pictureButton.setAttribute('aria-expanded', String(!referencePanel.hidden));
    });
    guide.addEventListener('change', () => board.classList.toggle('hide-guide', state === 'playing' && !guide.checked));
    // Tap alternative: selected pieces can transfer without a drag gesture.
    work.addEventListener('click', event => {
        if (state !== 'playing' || !selected || performance.now() < suppressClickUntil || event.target !== work) return;
        const surface = workCoordinates();
        if (!surface.width || !surface.height) return;
        moveToWork(selected, (event.clientX - surface.left) / surface.width,
            (event.clientY - surface.top) / surface.height);
    });
    tray.addEventListener('click', event => {
        if (state !== 'playing' || !selected || performance.now() < suppressClickUntil || event.target !== tray) return;
        if (selected.zone === 'gallery') { clearSelection(); announce('cancelled'); }
        else returnToTray(selected);
    });
    document.addEventListener('pointermove', movePiece, { capture: true, passive: false });
    document.addEventListener('pointerup', dropPiece, true);
    document.addEventListener('pointercancel', event => { if (event.pointerId === drag?.pointer) cancelDrag(); }, true);
    window.addEventListener('blur', cancelDrag);
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancelDrag(); });
    $('jigsaw-gallery-prev').addEventListener('click', () => tray.scrollBy({ left: -tray.clientWidth * .8, behavior: 'auto' }));
    $('jigsaw-gallery-next').addEventListener('click', () => tray.scrollBy({ left: tray.clientWidth * .8, behavior: 'auto' }));
    game.addEventListener('keydown', event => {
        if (state !== 'playing' || event.ctrlKey || event.altKey || event.metaKey) return;
        const focused = pieces.find(piece => piece.button === event.target && !piece.locked);
        const piece = focused || selected;
        if (!piece || piece.locked) return;
        const key = event.key.toLowerCase();
        if (['w', 'g', 'b'].includes(key)) {
            event.preventDefault();
            if (key === 'w') { moveToWork(piece); piece.button.focus(); }
            if (key === 'g') { returnToTray(piece); piece.button.focus(); }
            if (key === 'b') { selectPiece(piece); focusBoardSpace(); }
        } else if (focused?.zone === 'work' && event.key.startsWith('Arrow')) {
            event.preventDefault();
            const step = event.shiftKey ? .1 : .025;
            if (event.key === 'ArrowLeft') piece.workX -= step;
            if (event.key === 'ArrowRight') piece.workX += step;
            if (event.key === 'ArrowUp') piece.workY -= step;
            if (event.key === 'ArrowDown') piece.workY += step;
            positionInWork(piece);
        }
    });
    function refreshSurfaceLayout() {
        if (drag) { deferredLayout = true; return; }
        layoutPieces();
    }
    const surfaceResize = new ResizeObserver(refreshSurfaceLayout);
    surfaceResize.observe(work);
    surfaceResize.observe(tray);
    game.addEventListener('keydown', event => {
        if (event.key === 'Escape' && (selected || drag)) {
            const previous = selected;
            cancelDrag(); clearSelection(); announce('cancelled');
            previous?.button.focus();
        }
    });
    new MutationObserver(syncLanguage).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    new ResizeObserver(refreshSurfaceLayout).observe(board);
    window.addEventListener('pagehide', () => { cancelDrag(); stopTimer(); });
    window.addEventListener('pageshow', () => {
        if (state === 'playing' && timer === null) {
            updateTimer();
            timer = setInterval(updateTimer, 1000);
        }
    });
    configureCharacters();
    syncLanguage();
    selectPhotograph();
})();
