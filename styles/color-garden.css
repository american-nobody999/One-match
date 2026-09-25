/* Color Garden — isolated state; English and Arabic always appear together. */
(() => {
  'use strict';
  const garden = document.getElementById('color-garden');
  if (!garden) return;
  const find = selector => garden.querySelector(selector);
  const all = selector => [...garden.querySelectorAll(selector)];
  const colors = {
    red: ['Red', 'أحمر', '#c62836', '#fff'],
    yellow: ['Yellow', 'أصفر', '#ffd60a', '#111'],
    blue: ['Blue', 'أزرق', '#206887', '#fff'],
    orange: ['Orange', 'برتقالي', '#f77f00', '#111'],
    green: ['Green', 'أخضر', '#43aa5f', '#111'],
    purple: ['Purple', 'بنفسجي', '#8e44ad', '#fff']
  };
  const recipes = { 'red-yellow': 'orange', 'blue-yellow': 'green', 'blue-red': 'purple' };
  const secondary = ['orange', 'green', 'purple'];
  const discovered = new Set();
  let mixing = [], paintColor = 'red', challenge = null, pointer = null;
  let previous = null, keyboardPosition = { x: 450, y: 250 };
  const canvas = find('#color-garden-canvas');
  const ctx = canvas.getContext('2d');
  const result = find('#mix-result');
  const blobs = [find('#mix-color-one'), find('#mix-color-two')];
  const palette = all('.paint-color');

  function bilingual(element, english, arabic) {
    element.replaceChildren();
    for (const [language, text] of [['en', english], ['ar', arabic]]) {
      const span = document.createElement('span');
      span.className = `cg-${language}`;
      span.lang = language;
      span.dir = language === 'ar' ? 'rtl' : 'ltr';
      span.textContent = text;
      element.append(span);
    }
  }
  function animate(element, name) {
    element.classList.remove(name);
    void element.offsetWidth;
    element.classList.add(name);
  }
  function selectColor(color) {
    all('.color-choice').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === color)));
    bilingual(find('#color-name-display'), colors[color][0], colors[color][1]);
    animate(find(`[data-color="${color}"]`), 'mix-animation');
  }
  function selectPaint(color) {
    paintColor = color;
    palette.forEach(button => {
      const selected = button.dataset.paint === color;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }
  function updatePalette() {
    palette.forEach(button => {
      const color = button.dataset.paint;
      const locked = secondary.includes(color) && !discovered.has(color);
      button.disabled = locked;
      button.classList.toggle('locked', locked);
      bilingual(button, colors[color][0], colors[color][1]);
      button.setAttribute('aria-label', `${colors[color][0]} — ${colors[color][1]}${locked ? ' — Mix to unlock / امزج لفتح اللون' : ''}`);
    });
  }
  function unlockColor(color) {
    if (secondary.includes(color)) discovered.add(color);
    updatePalette();
  }
  function resetMix() {
    mixing = [];
    blobs.forEach(blob => { blob.style.background = ''; blob.classList.remove('mix-animation'); });
    result.style.background = '#eee';
    result.style.color = '#111';
    result.textContent = '?';
    result.classList.remove('splat');
    find('#cg-mix-equation').textContent = '';
  }
  function generateChallenge() {
    const choices = secondary.filter(color => color !== challenge);
    challenge = choices[Math.floor(Math.random() * choices.length)];
    bilingual(find('#cg-challenge'), `Can you make ${colors[challenge][0].toLowerCase()}?`, `هل يمكنك صنع اللون ${colors[challenge][1]}؟`);
  }
  function checkChallenge(color) {
    if (challenge === color) {
      bilingual(find('#cg-challenge'), `You made ${colors[color][0].toLowerCase()}!`, `رائع! صنعت اللون ${colors[color][1]}!`);
      challenge = null;
    }
  }
  function mixColors(color) {
    if (mixing.length === 2) resetMix();
    mixing.push(color);
    blobs[mixing.length - 1].style.background = colors[color][2];
    if (mixing.length !== 2) return;
    const [first, second] = mixing;
    const mixed = first === second ? first : recipes[[first, second].sort().join('-')];
    blobs.forEach(blob => animate(blob, 'mix-animation'));
    result.style.background = colors[mixed][2];
    result.style.color = colors[mixed][3];
    bilingual(result, colors[mixed][0], colors[mixed][1]);
    bilingual(find('#cg-mix-equation'), `${colors[first][0]} + ${colors[second][0]} = ${colors[mixed][0]}`, `${colors[first][1]} + ${colors[second][1]} = ${colors[mixed][1]}`);
    animate(result, 'splat');
    unlockColor(mixed);
    checkChallenge(mixed);
  }
  const equation = document.createElement('p');
  equation.id = 'cg-mix-equation';
  equation.setAttribute('aria-live', 'polite');
  find('.mixing-stage').after(equation);

  // Keep the fixed drawing buffer while CSS resizes it, preserving artwork.
  function position(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height };
  }
  function draw(from, to) {
    if (!ctx) return;
    const width = 18 * canvas.width / (canvas.getBoundingClientRect().width || canvas.width);
    ctx.fillStyle = ctx.strokeStyle = colors[paintColor][2];
    ctx.lineWidth = width;
    ctx.lineCap = ctx.lineJoin = 'round';
    ctx.beginPath();
    if (!from) {
      ctx.arc(to.x, to.y, width / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    }
  }
  function stopPainting(event) {
    if (event && event.pointerId !== pointer) return;
    if (pointer !== null && canvas.hasPointerCapture(pointer)) canvas.releasePointerCapture(pointer);
    pointer = null;
    previous = null;
  }
  function clearCanvas() {
    stopPainting();
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }
  function resetGame() {
    clearCanvas();
    resetMix();
    discovered.clear();
    updatePalette();
    selectPaint('red');
    challenge = null;
    find('#cg-challenge').textContent = '';
    find('#color-name-display').textContent = '🎨';
    keyboardPosition = { x: 450, y: 250 };
    all('.color-choice').forEach(button => {
      button.setAttribute('aria-pressed', 'false');
      button.classList.remove('mix-animation');
    });
  }
  all('.color-choice').forEach(button => button.addEventListener('click', () => selectColor(button.dataset.color)));
  all('.mix-choice').forEach(button => button.addEventListener('click', () => mixColors(button.dataset.mix)));
  palette.forEach(button => button.addEventListener('click', () => { if (!button.disabled) selectPaint(button.dataset.paint); }));
  find('#reset-mix').addEventListener('click', resetMix);
  find('#cg-new-challenge').addEventListener('click', generateChallenge);
  find('#clear-painting').addEventListener('click', clearCanvas);
  find('#restart-color-garden').addEventListener('click', resetGame);
  canvas.addEventListener('pointerdown', event => {
    if (pointer !== null || event.button !== 0) return;
    event.preventDefault();
    pointer = event.pointerId;
    canvas.setPointerCapture(pointer);
    previous = position(event);
    draw(null, previous);
  });
  canvas.addEventListener('pointermove', event => {
    if (event.pointerId !== pointer) return;
    const next = position(event);
    draw(previous, next);
    previous = next;
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => canvas.addEventListener(type, stopPainting));
  canvas.addEventListener('keydown', event => {
    const moves = { ArrowLeft: [-15, 0], ArrowRight: [15, 0], ArrowUp: [0, -15], ArrowDown: [0, 15] };
    if (event.key === ' ') { event.preventDefault(); draw(null, keyboardPosition); return; }
    if (!moves[event.key]) return;
    event.preventDefault();
    const [x, y] = moves[event.key];
    keyboardPosition = { x: Math.max(0, Math.min(canvas.width, keyboardPosition.x + x)), y: Math.max(0, Math.min(canvas.height, keyboardPosition.y + y)) };
  });
  resetGame();
})();

