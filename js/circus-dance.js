// Author: Leslie Brockman
// Circus Dance Game controller.

(() => {
  'use strict';
  const root = document.getElementById('danceGame');
  if (!root) return;
  const get = id => document.getElementById(id);
  const pads = [...root.querySelectorAll('.dance-pad')];
  const activities = [...root.querySelectorAll('.dance-activity')];
  const stage = root.querySelector('.dance-stage');
  const clown = get('danceClown');
  const moves = {
    jump: ['Jump', 'اقفز'], spin: ['Spin', 'دُر'], clap: ['Clap', 'صفّق'],
    wave: ['Wave', 'لوّح'], stomp: ['Stomp', 'اخبط بقدمك'], freeze: ['Freeze', 'تجمّد']
  };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const maxRoutineMoves = 24;
  const state = {
    activity: 'clown-says', phase: 'idle', score: 0, round: 0,
    movement: null, previous: null, sequence: [], input: 0,
    recording: false, routine: [], timers: new Set(), generation: 0,
    command: null, says: false, deadline: 0, movementVersion: 0, replaySpeed: 1
  };

  function bilingual(element, english, arabic) {
    const en = document.createElement('span');
    en.className = 'dance-en';
    en.textContent = english;
    const ar = document.createElement('span');
    ar.className = 'dance-ar';
    ar.lang = 'ar';
    ar.dir = 'rtl';
    ar.textContent = arabic;
    element.replaceChildren(en, document.createTextNode(' '), ar);
  }
  function commandIcon(move) {
    // SVG elements do not reliably reflect HTMLElement.hidden into an attribute.
    get('danceCommandIcon').toggleAttribute('hidden', !move);
    if (move) get('danceCommandUse').setAttribute('href', `#dance-icon-${move}`);
    else get('danceCommandUse').removeAttribute('href');
  }
  function instruction(en, ar, move = null, prefixed = null) {
    bilingual(get('danceInstruction'), en, ar);
    commandIcon(move);
    const screen = root.querySelector('.dance-stage-command');
    if (prefixed === null) delete screen.dataset.clownSays;
    else screen.dataset.clownSays = String(prefixed);
  }
  const feedback = (en, ar) => bilingual(get('danceFeedback'), en, ar);
  function later(callback, delay) {
    const generation = state.generation;
    const timer = window.setTimeout(() => {
      state.timers.delete(timer);
      if (generation === state.generation) callback();
    }, delay);
    state.timers.add(timer);
    return timer;
  }
  function clearMovement() {
    clown.style.removeProperty('--dance-playback-duration');
    state.movementVersion += 1;
    Object.keys(moves).forEach(move => clown.classList.remove(`dance-performer--${move}`));
    pads.forEach(pad => pad.classList.remove('dance-pad--active'));
    delete stage.dataset.movement;
    state.movement = null;
  }
  function cancelPending() {
    state.generation += 1;
    state.timers.forEach(timer => window.clearTimeout(timer));
    state.timers.clear();
    clearMovement();
    delete stage.dataset.response;
    pads.forEach(pad => pad.classList.remove('dance-pad--response'));
  }
  function render() {
    get('danceScore').textContent = state.score;
    get('danceRound').textContent = state.round;
    root.dataset.activity = state.activity;
    root.dataset.phase = state.phase;
    root.classList.toggle('dance-studio--reduced-motion', reducedMotion.matches);
    const creative = state.activity === 'creative-studio';
    get('standardControls').hidden = creative;
    get('creativeControls').hidden = !creative;
    if (creative) {
      const status = state.recording
        ? ['Recording', 'جارٍ التسجيل']
        : state.phase === 'playback'
          ? ['Playing', 'جارٍ التشغيل']
          : state.routine.length === maxRoutineMoves
            ? ['24 moves recorded!', 'تم تسجيل ٢٤ حركة!']
            : ['Ready!', 'جاهزون!'];
      const heading = document.createElement('span');
      heading.className = 'dance-studio-status-line';
      bilingual(heading, ...status);
      const count = document.createElement('span');
      count.className = 'dance-studio-status-line';
      const arabicCount = String(state.routine.length).replace(/\d/g, digit => '٠١٢٣٤٥٦٧٨٩'[Number(digit)]);
      bilingual(count, `${state.routine.length}/24 moves`, `${arabicCount}/٢٤ حركة`);
      get('routineStatus').replaceChildren(heading, count);
    }
    pads.forEach(pad => { pad.disabled = state.phase !== 'input' && !(creative && state.phase === 'ready'); });
    get('danceStart').disabled = !['idle', 'ended'].includes(state.phase);
    get('routineRecord').disabled = !creative || state.recording || state.phase === 'playback';
    get('routineStop').disabled = !state.recording;
    get('routinePlay').disabled = !creative || state.recording || state.phase === 'playback' || !state.routine.length;
    get('routineClear').disabled = !creative || state.recording || state.phase === 'playback' || !state.routine.length;
    activities.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.activity === state.activity)));
  }
  function movement(move, speed = 1) {
    if (!moves[move]) return;
    clearMovement();
    state.movement = move;
    const version = state.movementVersion;
    if (speed !== 1) clown.style.setProperty('--dance-playback-duration', `${650 / speed}ms`);
    stage.dataset.movement = move;
    if (!reducedMotion.matches) {
      // Restart a repeated move's future CSS animation without changing the artwork.
      void clown.offsetWidth;
      clown.classList.add(`dance-performer--${move}`);
    }
    feedback(...moves[move]);
    later(() => { if (state.movementVersion === version) clearMovement(); }, 650 / speed);
  }
  function randomMove(previous = state.previous) {
    const options = Object.keys(moves).filter(move => move !== previous);
    const move = options[Math.floor(Math.random() * options.length)];
    state.previous = move;
    return move;
  }
  function sequence(length) {
    return Array.from({ length }, () => randomMove());
  }
  function finish(en, ar) {
    cancelPending();
    state.phase = 'ended';
    state.recording = false;
    get('danceCountdown').hidden = true;
    instruction(en, ar);
    feedback('Great dancing!', 'رقص رائع!');
    render();
  }
  function reset(activity) {
    cancelPending();
    Object.assign(state, { activity, phase: 'idle', score: 0, round: 0, previous: null,
      sequence: [], input: 0, recording: false, routine: [], command: null, says: false, deadline: 0 });
    get('danceCountdown').hidden = true;
    const selected = activities.find(button => button.dataset.activity === activity);
    bilingual(get('danceGuideTitle'), selected.querySelector('.dance-en').textContent, selected.querySelector('.dance-ar').textContent);
    const guides = {
      'clown-says': [
        ['Listen to the clown.', 'استمع إلى المهرج.'],
        ['Press the matching move only when the command begins with “Clown Says!”', 'اضغط الحركة المطابقة فقط عندما يبدأ الأمر بعبارة «المهرج يقول!».'],
        ['Without “Clown Says!”, wait without pressing a move.', 'بدون «المهرج يقول!»، انتظر ولا تضغط أي حركة.']
      ],
      'remember-routine': [
        ['Watch the routine.', 'شاهد تسلسل الحركات.'],
        ['Repeat the moves in order.', 'كرّر الحركات بالترتيب.'],
        ['Try again if you miss a move.', 'حاول مجددًا إذا أخطأت في حركة.']
      ],
      'dj-challenge': [
        ['Read the stage command.', 'اقرأ الأمر على المسرح.'],
        ['Press each matching move in order.', 'اضغط كل حركة مطابقة بالترتيب.'],
        ['Finish before time runs out.', 'أكمل قبل انتهاء الوقت.']
      ],
      'creative-studio': [
        ['Dance freely or select Record Routine.', 'ارقص بحرية أو اختر تسجيل تسلسل الحركات.'],
        ['Choose moves, then stop recording.', 'اختر حركاتك ثم أوقف التسجيل.'],
        ['Play your routine or clear it.', 'شغّل تسلسلك أو امسحه.']
      ]
    };
    guides[activity].forEach((text, index) => bilingual(get(`danceGuideStep${index + 1}`), ...text));
    instruction(`${selected.querySelector('.dance-en').textContent} — Press Start.`, `${selected.querySelector('.dance-ar').textContent} — اضغط ابدأ.`);
    feedback('Ready!', 'جاهزون!');
    if (activity === 'creative-studio') {
      state.phase = 'ready';
      instruction('Dance freely, or record a routine!', 'ارقص بحرية أو سجّل تسلسل حركات!');
    }
    render();
  }

  // Playback uses the same pads and movement renderer as player input.
  const routineTiming = { movement: 2500, between: 600, after: 1000 };
  function playback(list, done) {
    cancelPending();
    state.phase = 'playback';
    render();
    const memory = state.activity === 'remember-routine';
    const step = index => {
      if (index === list.length) {
        clearMovement();
        done();
        return;
      }
      if (memory) instruction(...moves[list[index]], list[index]);
      else instruction(`Watch: ${moves[list[index]][0]}`, `شاهد: ${moves[list[index]][1]}`, list[index]);
      const speed = memory ? 1 : state.replaySpeed;
      movement(list[index], speed);
      if (memory) {
        later(() => {
          clearMovement();
          commandIcon(null);
          if (index + 1 < list.length) {
            instruction('', '');
            later(() => step(index + 1), routineTiming.between);
          } else {
            instruction('Get ready to repeat!', 'استعد لتكرار الحركات!');
            later(() => step(index + 1), routineTiming.after);
          }
        }, routineTiming.movement);
      } else later(() => step(index + 1), 1150 / speed);
    };
    later(() => step(0), 600);
  }
  function clownRound() {
    if (state.round === 10) {
      finish('Ten rounds complete!', 'اكتملت عشر جولات!');
      return;
    }
    state.round += 1;
    state.command = randomMove();
    state.says = Math.random() < 0.65;
    const [en, ar] = moves[state.command];
    instruction(`${state.says ? 'Clown Says! ' : ''}${en}`, `${state.says ? 'المهرج يقول! ' : ''}${ar}`, state.command, state.says);
    feedback('Your turn!', 'دورك!');
    state.phase = 'input';
    state.deadline = performance.now() + 4500;
    render();
    later(() => resolveClown(!state.says), 4500);
  }
  function resolveClown(correct) {
    cancelPending();
    state.phase = 'waiting';
    if (correct) state.score += 1;
    feedback(correct ? 'Well done!' : 'Keep trying! Listen for “Clown Says!”', correct ? 'أحسنت!' : 'حاول مجددًا! انتبه لعبارة «المهرج يقول!»');
    render();
    later(clownRound, 1400);
  }
  function memoryPlayback() {
    state.input = 0;
    playback(state.sequence, () => {
      state.phase = 'input';
      instruction('Repeat the routine!', 'كرّر تسلسل الحركات!');
      render();
    });
  }
  function djInstruction() {
    const move = state.sequence[state.input];
    instruction(`Move ${state.input + 1}/${state.sequence.length}: ${moves[move][0]}`, `الحركة ${state.input + 1}/${state.sequence.length}: ${moves[move][1]}`, move);
  }
  function djRound() {
    if (state.round === 5) {
      finish('DJ challenge complete! You are a dance star!', 'اكتمل تحدّي الدي جي! أنت نجم الرقص!');
      return;
    }
    cancelPending();
    state.round += 1;
    state.sequence = sequence(state.round + 1);
    state.input = 0;
    state.phase = 'input';
    state.deadline = performance.now() + (state.sequence.length * 3500 + 5000);
    get('danceCountdown').hidden = false;
    djInstruction();
    render();
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((state.deadline - performance.now()) / 1000));
      bilingual(get('danceCountdown'), `Time: ${remaining}s`, `الوقت: ${remaining} ث`);
      if (!remaining) {
        cancelPending();
        state.phase = 'waiting';
        feedback('Time is up. Try the next routine!', 'انتهى الوقت. جرّب التسلسل التالي!');
        render();
        later(djRound, 1800);
      } else later(tick, 250);
    };
    tick();
  }
  function start() {
    reset(state.activity);
    if (state.activity === 'clown-says') clownRound();
    else if (state.activity === 'remember-routine') {
      state.round = 1;
      state.sequence = sequence(2);
      memoryPlayback();
    } else if (state.activity === 'dj-challenge') djRound();
    else {
      state.phase = 'ready';
      instruction('Dance freely, or record a routine!', 'ارقص بحرية أو سجّل تسلسل حركات!');
      render();
    }
  }
  function handlePlayerMove(move) {
    const creative = state.activity === 'creative-studio';
    if (state.phase !== 'input' && !(creative && state.phase === 'ready')) return;
    // Enforce deadlines even if a browser delays the scheduled timeout.
    if (state.activity === 'dj-challenge' && performance.now() >= state.deadline) return;
    if (state.activity === 'clown-says' && performance.now() >= state.deadline) {
      resolveClown(!state.says);
      return;
    }
    movement(move);
    if (creative) {
      if (state.recording && state.routine.length < maxRoutineMoves) {
        state.routine.push(move);
        feedback(`Recorded ${state.routine.length} moves.`, `تم تسجيل ${state.routine.length} حركات.`);
        if (state.routine.length === maxRoutineMoves) {
          state.recording = false;
          instruction('24 moves recorded!', 'تم تسجيل ٢٤ حركة!');
          feedback('24 moves recorded!', 'تم تسجيل ٢٤ حركة!');
        }
        render();
      }
      return;
    }
    if (state.activity === 'clown-says') {
      resolveClown(state.says && move === state.command);
    } else if (state.activity === 'remember-routine') {
      if (move !== state.sequence[state.input]) {
        cancelPending();
        state.phase = 'waiting';
        feedback('Nice try! Watch the same routine again.', 'محاولة جميلة! شاهد نفس التسلسل مجددًا.');
        render();
        later(memoryPlayback, 1800);
      } else if (++state.input === state.sequence.length) {
        cancelPending();
        state.score += 1;
        state.phase = 'waiting';
        feedback('Wonderful! One more move next time.', 'رائع! سنضيف حركة أخرى.');
        render();
        later(() => {
          state.round += 1;
          state.sequence.push(randomMove(state.sequence[state.sequence.length - 1]));
          memoryPlayback();
        }, 1600);
      }
    } else {
      if (move !== state.sequence[state.input]) {
        feedback('Try the highlighted command again!', 'حاول تنفيذ الحركة المطلوبة مجددًا!');
      } else if (++state.input === state.sequence.length) {
        cancelPending();
        state.score += 1;
        state.phase = 'waiting';
        feedback('Routine complete! Great dancing!', 'اكتمل التسلسل! رقص رائع!');
        render();
        later(djRound, 1600);
      } else djInstruction();
    }
  }

  let responseVersion = 0;
  function playerMove(move) {
    const creative = state.activity === 'creative-studio';
    if (state.phase !== 'input' && !(creative && state.phase === 'ready')) return;
    const expired = ['clown-says', 'dj-challenge'].includes(state.activity) && performance.now() >= state.deadline;
    const correct = creative || (state.activity === 'clown-says'
      ? state.says && move === state.command : move === state.sequence[state.input]);
    handlePlayerMove(move);
    if (expired) return;
    const version = ++responseVersion;
    pads.forEach(pad => pad.classList.remove('dance-pad--response'));
    stage.dataset.response = correct ? 'correct' : 'incorrect';
    const pad = pads.find(button => button.dataset.move === move);
    pad.classList.add('dance-pad--response');
    // Keep the next DJ command intact; the response lights its frame briefly.
    later(() => {
      if (version !== responseVersion) return;
      delete stage.dataset.response;
      pad.classList.remove('dance-pad--response');
    }, 650);
  }

  activities.forEach(button => button.addEventListener('click', () => reset(button.dataset.activity)));
  pads.forEach(button => button.addEventListener('click', () => playerMove(button.dataset.move)));
  get('danceStart').addEventListener('click', () => {
    if (['idle', 'ended'].includes(state.phase)) start();
  });
  get('danceRestart').addEventListener('click', start);
  get('routineRecord').addEventListener('click', () => {
    if (state.activity !== 'creative-studio' || state.recording || state.phase === 'playback') return;
    cancelPending();
    state.routine = [];
    state.recording = true;
    state.phase = 'ready';
    instruction('Recording — choose your moves!', 'جارٍ التسجيل — اختر حركاتك!');
    render();
  });
  get('routineStop').addEventListener('click', () => {
    if (!state.recording) return;
    state.recording = false;
    instruction('Recording stopped. Play or record a new routine.', 'توقف التسجيل. شغّل التسلسل أو سجّل تسلسلًا جديدًا.');
    render();
  });
  get('routinePlay').addEventListener('click', () => {
    if (state.activity !== 'creative-studio' || state.recording || state.phase === 'playback' || !state.routine.length) return;
    playback([...state.routine], () => {
      state.phase = 'ready';
      instruction('Routine complete! Play it again or keep dancing.', 'اكتمل التسلسل! شغّله مجددًا أو تابع الرقص.');
      render();
    });
  });
  get('routineSpeed').addEventListener('change', event => {
    const speed = Number(event.target.value);
    if ([1, 1.5, 2].includes(speed)) state.replaySpeed = speed;
  });
  get('routineClear').addEventListener('click', () => {
    if (state.activity !== 'creative-studio' || state.recording || state.phase === 'playback') return;
    cancelPending();
    state.routine = [];
    instruction('Routine cleared. Ready to dance!', 'تم مسح التسلسل. جاهزون للرقص!');
    render();
  });
  reducedMotion.addEventListener('change', () => {
    clearMovement();
    render();
  });
  reset('clown-says');
})();
