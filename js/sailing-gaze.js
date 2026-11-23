//Author: Leslie Brockman
//Date modified: 11/22/2026
//Description: Sailing Gaza game configuration and constants

(() => {
  'use strict';

  const WIDTH = 720;
  const HEIGHT = 400;
  const BOAT_BOUNDS = { x: 49, y: 45, radius: 28 };
  const BOAT_SPEED = 235;
  const MAX_LIVES = 3;
  const EXTRA_LIFE_COST = 4;
  const EMERGENCY_SOS_COST = 3;
  const CHECKPOINT_SOS_COST = 5;
  const FLAG_SPAWN_DELAY = 3;
  const STAR_INTERVAL = 1.35;
  const LEVEL_ONE_STAR_TARGET = 34;
  const CHECKPOINT_BONUS = 3;
  const PEACE_COIN_COUNTS = [8, 8, 9];
  const ANIMATED_FINALE_STAGES = new Set(['arrival', 'fireworks', 'unloading', 'raising']);
  const PEACE_BEST_KEY = 'sailing-gaza-peace-best';
  const SAILING_LANES = [200, 108, 285, 158, 321, 78, 238];
  const ENTRY_X = WIDTH + 54;
  const PEACE_COIN_SPEED = 78;
  const SIEGE_BOUNDARY = 64;
  const SWARM_BOUNDARY = 75;
  const SIEGE_REPLIES = {
    cyprus: ['YOUR SOS WAS RECEIVED.', "IT'S BEING IGNORED."],
    greece: ['YOUR SOS WAS HEARD.', 'IT IS ACTIVELY BEING FORWARDED TO THE NEXT COUNTRY WITH A SPINE.'],
    turkey: ['SOS ANSWERED!', 'TÜRKİYE IS ON THE WAY!']
  };
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const RESCUES = {
    protesters: { cost: 1, enemy: 'blockade', name: 'Protesters', sprite: 'blockade-protesters', message: 'The protesters arrive by boat and organize a peaceful passage!' },
    turkiye: { cost: 3, enemy: 'ship', name: 'SOS', sprite: 'helper-turkiye', message: 'Türkiye is on the way! Clear the waters!' },
    eagle: { cost: 5, enemy: 'drone', name: 'MPGA Eagle', sprite: 'helper-eagle', message: 'The eagle squadron ushers the drones away!' }
  };

  // One staggered group is three slow ships, two medium ships, one speedboat and one drone.
  const PATROL_GROUP = ['slow', 'medium', 'slow', 'fast', 'medium', 'slow', 'drone'];
  const ADVANCED_PATROL_GROUP = [...PATROL_GROUP, 'drone'];
  const SOS_REPLIES = {
    cyprus: 'Signal received! Try another frequency, Captain!',
    greece: 'Message received! Keep searching for help!'
  };

  const LEVEL_ONE_PATROL = [...PATROL_GROUP, 'medium', 'slow', 'fast', 'medium'];
  const LEVELS = [
    { title: 'CHECKPOINT ONE: PEOPLE POWER', seconds: 52, patrol: LEVEL_ONE_PATROL, limit: 3, speed: 1, rescue: 'protesters' },
    { title: 'CHECKPOINT TWO: SHIP BLOCKADE', seconds: 66, patrol: ADVANCED_PATROL_GROUP, groups: 2, limit: 4, speed: 1.12, rescue: 'turkiye', gate: 'command' },
    { title: 'FINAL APPROACH: THE GIANT DRONE', seconds: 81, patrol: ADVANCED_PATROL_GROUP, groups: 3, limit: 5, speed: 1.23, rescue: 'eagle', gate: 'drone' }
  ];

  const SPRITES = {
    star: { id: 'aid-flag', width: 37, height: 37, radius: 17, speed: 110 },
    slow: { id: 'obstacle-slow', width: 108, height: 68, radius: 35, speed: 82, group: 'ship' },
    medium: { id: 'obstacle-medium', width: 90, height: 61, radius: 29, speed: 112, group: 'ship' },
    fast: { id: 'obstacle-fast', width: 77, height: 51, radius: 21, speed: 152, group: 'ship' },
    drone: { id: 'obstacle-drone', width: 78, height: 57, radius: 24, speed: 205 },
    command: { id: 'blockade-command', width: 226, height: 93, radius: 65, group: 'ship' }
  };

  const KEY_DIRECTIONS = new Map([
    ['arrowup', 'up'], ['w', 'up'], ['arrowdown', 'down'], ['s', 'down'],
    ['arrowleft', 'left'], ['a', 'left'], ['arrowright', 'right'], ['d', 'right']
  ]);

  const $ = id => document.getElementById(id);
  const landingCargo = [
    { node: $('landing-food'), from: [305, 271], to: [444, 317] },
    { node: $('landing-water-crate'), from: [303, 283], to: [504, 337] },
    { node: $('landing-medical'), from: [321, 291], to: [504, 317] }
  ];
  const ui = {
    setup: $('setup'), form: $('setup-form'), play: $('play'), finish: $('finish'),
    title: $('level-title'), pause: $('pause'), restart: $('restart'), harbor: $('harbor'), mouseFollow: $('mouse-follow'), captainPrefix: $('captain-prefix'), captain: $('captain-display'),
    peaceDisplay: $('peace-display'), peaceCoins: $('peace-coins'), ceremony: $('flag-ceremony'),
    raiseFlag: $('raise-flag'), ceremonyNote: $('ceremony-note'),
    voyageScore: $('voyage-score'), finalFlags: $('final-flags'), finalCoins: $('final-coins'),
    hearts: $('heart-display'), stars: $('star-display'), bank: $('star-bank'), progress: $('progress'),
    ocean: $('ocean'), wildlife: $('wildlife-visitors'), entities: $('entities'), player: $('player'), boat: $('player-boat'), helpers: $('helpers'),
    status: $('status'), statusCopy: $('status-copy'), checkpointHint: $('checkpoint-rescue-hint'), sos: $('sos-panel'), sosResponse: $('sos-response'), sosResponseCopy: $('sos-response-copy'),
    sosCost: $('sos-cost'), emergency: $('emergency-panel'), emergencySend: $('emergency-send'),
    emergencyEnd: $('emergency-end'), emergencyShortfall: $('emergency-shortfall'),
    extraLife: $('extra-life'), card: $('checkpoint-card'), checkpointTitle: $('checkpoint-title'),
    peoplePower: $('checkpoint-people-power'), achievement: $('flag-achievement'), halfwayMarker: $('halfway-marker'), note: $('voyage-note'),
    blockadeMessage: $('blockade-message'), returnHalfway: $('return-halfway'),
    peoplePowerGuidance: $('people-power-guidance'), checkpointGuidance: $('checkpoint-guidance'), interceptionWarning: $('interception-warning'), swarmGuidance: $('swarm-guidance'),
    siegeCelebration: $('siege-celebration'), next: $('next-level'), finishPanel: $('finish-panel'), finishKicker: $('finish-kicker'), finishCopy: $('finish-copy'), finishTitle: $('finish-title'), finishMessage: $('finish-message'),
    finishAction: $('finish-action'), arrival: $('arrival'), arrivalBoat: $('arrival-boat'), landingCable: $('landing-cable'), landingHook: $('landing-hook'),
    rescues: [...document.querySelectorAll('[data-rescue]')], steering: [...document.querySelectorAll('[data-direction]')]
  };

  const heldKeys = new Map();
  const heldPointers = new Map();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let sessionBest = 0;
  const state = {
    phase: 'setup', paused: false, level: 0, highestUnlocked: 0, captain: '', boat: 'sunbeam',
    lives: MAX_LIVES, stars: 0, cleared: new Set(), entities: [], player: { x: 0, y: 0 },
    rescue: null, invulnerable: 0, pendingSpend: null, halfway: null, pulse: null, oceanPointer: null, pointerTarget: null
  };

  const level = () => LEVELS[state.level];
  const atLevelOneBlockade = () => state.level === 0 && state.phase === 'checkpoint';
  const beforeNavalSiege = () => state.level === 1 && state.phase === 'sailing';
  const atNavalSiege = () => state.level === 1 && state.phase === 'checkpoint';
  const atDroneSwarm = () => state.level === 2 && state.phase === 'checkpoint';
  const starSlot = index => state.level === 0 && index < LEVEL_ONE_STAR_TARGET ? { starSlot: index } : {};
  const checkpointCost = () => level().rescue === 'turkiye' ? CHECKPOINT_SOS_COST : RESCUES[level().rescue].cost;
  const rescueCost = key => key === 'turkiye' && state.phase === 'checkpoint' && level().rescue === key
    ? CHECKPOINT_SOS_COST : RESCUES[key].cost;
  const canSail = () => !state.paused && (state.phase === 'sailing' || state.phase === 'checkpoint');
  const playing = () => canSail() && !ui.sos.open && !state.siegeRide;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const NOTICE_FADE_MS = 600;
  let noticeTimeout;
  let statusEntrance;
  function clearStatus() {
    window.clearTimeout(noticeTimeout);
    statusEntrance?.cancel();
    ui.status.classList.remove('message-fading');
    ui.status.removeAttribute('data-message-tone');
    ui.statusCopy.textContent = '';
  }

  function announce(message, briefly = false, tone = 'information') {
    window.clearTimeout(noticeTimeout);
    ui.status.classList.remove('message-fading');
    ui.status.dataset.messageTone = tone;
    const changed = ui.statusCopy.textContent !== message;
    ui.statusCopy.textContent = message;
    if (changed) {
      statusEntrance?.cancel();
      if (!reducedMotion.matches && ui.status.animate) {
        statusEntrance = ui.status.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 220 });
      }
    }
    if (!briefly) return;

    noticeTimeout = window.setTimeout(() => {
      ui.status.classList.add('message-fading');
      noticeTimeout = window.setTimeout(clearStatus, NOTICE_FADE_MS);
    }, 2700);
  }

  let voyageNoteTimeout;
  function clearVoyageNote() {
    window.clearTimeout(voyageNoteTimeout);
    for (const plaque of [ui.note, ui.achievement]) {
      plaque.hidden = true;
      plaque.classList.remove('message-fading');
    }
  }

  function scheduleVoyageNoteDismissal(plaque, duration) {
    voyageNoteTimeout = window.setTimeout(() => {
      plaque.classList.add('message-fading');
      voyageNoteTimeout = window.setTimeout(clearVoyageNote, NOTICE_FADE_MS);
    }, duration);
  }

  function showVoyageNote(heading, detail, tone = 'information', duration = 3600) {
    clearVoyageNote();
    ui.note.dataset.messageTone = tone;
    ui.note.querySelector('strong').textContent = heading;
    ui.note.querySelector('span').textContent = detail;
    ui.note.hidden = false;
    scheduleVoyageNoteDismissal(ui.note, duration);
  }

  function showFlagAchievement() {
    clearVoyageNote();
    ui.achievement.hidden = false;
    scheduleVoyageNoteDismissal(ui.achievement, 4200);
  }

  function svgUse(id, width, height) {
    const use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', '#' + id);
    use.setAttribute('width', width);
    use.setAttribute('height', height);
    use.setAttribute('x', -width / 2);
    use.setAttribute('y', -height / 2);
    return use;
  }

  function place(node, x, y) {
    node.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
  }

  function clearInput() {
    heldKeys.clear();
    for (const [id, pointer] of heldPointers) {
      if (pointer.button.hasPointerCapture(id)) pointer.button.releasePointerCapture(id);
    }
    heldPointers.clear();
    if (state.oceanPointer !== null && ui.ocean.hasPointerCapture(state.oceanPointer)) {
      ui.ocean.releasePointerCapture(state.oceanPointer);
    }
    state.oceanPointer = null;
    state.pointerTarget = null;
    state.pulse = null;
  }

  function syncControls() {
    const active = playing();
    ui.play.dataset.paused = String(state.paused || ui.sos.open || state.phase === 'emergency');
    ui.play.dataset.steering = String(active);
    ui.pause.textContent = state.paused ? 'Resume' : 'Pause';
    ui.pause.disabled = state.phase === 'celebration';
    for (const button of ui.steering) button.disabled = !active;
    ui.halfwayMarker.classList.toggle('saved', state.halfway?.level === state.level);
    ui.blockadeMessage.hidden = state.phase !== 'checkpoint';
    ui.peoplePowerGuidance.hidden = !atLevelOneBlockade();
    ui.checkpointGuidance.hidden = atLevelOneBlockade() || atNavalSiege() || atDroneSwarm();
    ui.swarmGuidance.hidden = !atDroneSwarm();
    syncInterceptionWarning();
    ui.returnHalfway.hidden = !atLevelOneBlockade() || state.stars >= RESCUES.protesters.cost || Boolean(state.rescue);
    ui.returnHalfway.disabled = !active;
    ui.sosCost.textContent = rescueCost('turkiye');
    for (const button of ui.rescues) {
      const key = button.dataset.rescue;
      const earlySOS = key === 'turkiye' && beforeNavalSiege();
      const short = state.stars < rescueCost(key) && !earlySOS;
      const activating = state.rescue?.key === key;
      button.disabled = !active || (!earlySOS && Boolean(state.rescue)) || short;
      setControlState(button, activating ? 'Activating' : short ? 'Not enough flags' : button.disabled ? 'On standby' : 'Ready');
    }
    const fullLives = state.lives >= MAX_LIVES;
    const lifeShort = state.stars < EXTRA_LIFE_COST;
    ui.extraLife.disabled = !active || fullLives || lifeShort;
    setControlState(ui.extraLife, fullLives ? 'All hearts are full' : lifeShort ? 'Not enough flags' : active ? 'Ready' : 'On standby');
  }

  function setControlState(button, label) {
    button.dataset.controlState = label;
    const status = button.querySelector('.rescue-state');
    if (status.textContent !== label) status.textContent = label;
  }

  function renderHUD() {
    ui.stars.textContent = state.stars;
    ui.hearts.replaceChildren();
    for (let index = 0; index < MAX_LIVES; index++) {
      const heart = document.createElement('span');
      heart.className = index < state.lives ? 'heart' : 'heart empty';
      heart.textContent = index < state.lives ? '♥' : '♡';
      heart.setAttribute('aria-hidden', 'true');
      ui.hearts.append(heart);
    }
    ui.hearts.setAttribute('aria-label', state.lives + ' of ' + MAX_LIVES + ' hearts remaining');
    syncControls();
  }

  function clearPeaceCoins() {
    state.peaceCoins = [];
    ui.peaceCoins.replaceChildren();
  }

  function spawnPeaceCoin(dt) {
    state.peaceDelay = Math.max(0, state.peaceDelay - dt);
    if (state.peaceDelay > 0) return;

    const count = PEACE_COIN_COUNTS[state.level];
    const slot = Array.from({ length: count }, (_, index) => index).find(index =>
      state.distance >= level().seconds * (index + 1) / (count + 2) &&
      !state.collectedCoins.has(state.level + ':' + index) &&
      !state.peaceCoins.some(coin => coin.slot === index));
    if (slot === undefined) return;

    const lanes = atLevelOneBlockade() ? [251, 283, 325] : SAILING_LANES;
    const x = ENTRY_X;
    const vx = -PEACE_COIN_SPEED;
    for (let offset = 0; offset < lanes.length; offset++) {
      const y = lanes[(slot * 3 + state.level + offset) % lanes.length];
      if (state.peaceCoins.some(coin => Math.hypot(x - coin.x, y - coin.y) < 58)) continue;
      if (state.entities.some(entity => {
        const relativeX = entity.vx - vx;
        const speedSquared = relativeX ** 2 + entity.vy ** 2;
        const closest = speedSquared
          ? clamp(((x - entity.x) * relativeX + (y - entity.y) * entity.vy) / speedSquared, 0, 1.5)
          : 0;
        return Math.hypot(x - entity.x - relativeX * closest, y - entity.y - entity.vy * closest) < entity.radius + 36;
      })) continue;

      const node = document.createElementNS(SVG_NS, 'g');
      node.classList.add('peace-coin');
      node.append(svgUse('peace-coin', 37, 37));
      place(node, x, y);
      ui.peaceCoins.append(node);
      state.peaceCoins.push({ slot, node, x, y, vx, sparkle: 0 });
      state.peaceDelay = 1.2;
      return;
    }
    state.peaceDelay = 0.2;
  }

  function updatePeaceCoins(dt) {
    spawnPeaceCoin(dt);
    state.peaceCoins = state.peaceCoins.filter(coin => {
      if (coin.sparkle > 0) {
        coin.sparkle -= dt;
        if (coin.sparkle > 0) return true;
        coin.node.remove();
        return false;
      }
      coin.x += coin.vx * dt;
      if (coin.x < -20) {
        coin.node.remove();
        return false;
      }
      place(coin.node, coin.x, coin.y);
      if (Math.hypot(coin.x - state.player.x, coin.y - state.player.y) >= BOAT_BOUNDS.radius + 15) return true;

      state.collectedCoins.add(state.level + ':' + coin.slot);
      state.peaceBalance++;
      ui.peaceDisplay.textContent = state.peaceBalance;
      if (reducedMotion.matches) {
        coin.node.remove();
        return false;
      }
      coin.sparkle = 0.36;
      coin.node.classList.add('peace-coin--collected');
      return true;
    });
  }

  function clearEntities() {
    state.entities = [];
    ui.entities.replaceChildren();
  }

  // Wildlife is deliberately kept out of the entities collection and collision logic.
  const wildlife = {
    elapsed: 0, due: {}, last: {}, remaining: 0
  };
  const steeringPad = ui.steering[0].closest('.steering');
  const randomBetween = (min, max) => min + Math.random() * (max - min);
  const wildlifeDelay = kind => kind === 'dolphin' ? randomBetween(8, 15) : randomBetween(20, 35);

  function clearWildlife() {
    wildlife.remaining = 0;
    ui.wildlife.replaceChildren();
  }

  function resetWildlife() {
    clearWildlife();
    wildlife.elapsed = 0;
    wildlife.last = {};
    wildlife.due = { dolphin: wildlifeDelay('dolphin'), whale: wildlifeDelay('whale') };
  }

  function findWildlifeSpot(kind) {
    const ocean = ui.ocean.getBoundingClientRect();
    const pad = steeringPad.getBoundingClientRect();
    const padLeft = (pad.left - ocean.left) / ocean.width * WIDTH;
    const padRight = (pad.right - ocean.left) / ocean.width * WIDTH;
    const padTop = (pad.top - ocean.top) / ocean.height * HEIGHT;
    const padBottom = (pad.bottom - ocean.top) / ocean.height * HEIGHT;
    const dolphin = kind === 'dolphin';
    const reachX = dolphin ? 138 : 80;
    const reachAbove = dolphin ? 92 : 67;
    const reachBelow = dolphin ? 42 : 18;

    for (let attempt = 0; attempt < 10; attempt++) {
      const x = Math.round(randomBetween(reachX + 12, WIDTH - reachX - 12));
      const y = Math.round(randomBetween(reachAbove + 45, HEIGHT - reachBelow - 30));
      const left = x - reachX;
      const right = x + reachX;
      const top = y - reachAbove;
      const bottom = y + reachBelow;
      const overlapsPad = left < padRight + 9 && right > padLeft - 9 && top < padBottom + 9 && bottom > padTop - 9;
      const overlapsBoat = left < state.player.x + BOAT_BOUNDS.x && right > state.player.x - BOAT_BOUNDS.x &&
        top < state.player.y + BOAT_BOUNDS.y && bottom > state.player.y - BOAT_BOUNDS.y;
      const prior = wildlife.last[kind];
      if (!overlapsPad && !overlapsBoat && (!prior || Math.hypot(x - prior.x, y - prior.y) >= 95)) return { x, y };
    }
    return null;
  }

  function addDolphins(group) {
    const count = Math.random() < 0.38 ? 2 : 1;
    const direction = Math.random() < 0.5 ? -1 : 1;
    for (let index = 0; index < count; index++) {
      const leap = document.createElementNS(SVG_NS, 'g');
      leap.classList.add('wildlife-leap');
      leap.style.setProperty('--dive-delay', (index * 250) + 'ms');
      leap.setAttribute('transform', 'translate(' + (index ? -12 * direction : 8 * direction) + ' ' + (index ? 12 : -7) + ') scale(' + direction + ' 1)');
      const size = randomBetween(0.88, 1.07);
      const dolphin = svgUse('ocean-dolphin', 76 * size, 48 * size);
      dolphin.classList.add('wildlife-dolphin');
      leap.append(dolphin);
      for (const [position, label] of [[-71, 'emerge'], [71, 'dive']]) {
        const splash = svgUse('wildlife-splash', 50, 30);
        splash.classList.add('wildlife-splash', 'wildlife-splash--' + label);
        place(splash, position, 6);
        leap.append(splash);
      }
      group.append(leap);
    }
    return count === 2 ? 2.8 : 2.55;
  }

  function updateWildlife(dt) {
    if (state.phase !== 'sailing' || state.rescue || reducedMotion.matches) {
      if (wildlife.remaining) clearWildlife();
      return;
    }

    wildlife.elapsed += dt;
    if (wildlife.remaining > 0) {
      wildlife.remaining -= dt;
      if (wildlife.remaining <= 0) clearWildlife();
      return;
    }

    const kind = wildlife.due.whale <= wildlife.elapsed ? 'whale'
      : wildlife.due.dolphin <= wildlife.elapsed ? 'dolphin' : null;
    if (!kind) return;

    const spot = findWildlifeSpot(kind);
    wildlife.due[kind] = wildlife.elapsed + (spot ? wildlifeDelay(kind) : 1.5);
    if (!spot) return;

    wildlife.last[kind] = spot;
    const group = document.createElementNS(SVG_NS, 'g');
    place(group, spot.x, spot.y);
    if (kind === 'dolphin') wildlife.remaining = addDolphins(group);
    else {
      const whale = $('ocean-whale-art').cloneNode(true);
      whale.removeAttribute('id');
      whale.classList.add('wildlife-whale');
      group.append(whale);
      wildlife.remaining = 6.4;
    }
    ui.wildlife.append(group);
  }

  function startLevel(index, halfway = null) {
    if (index > state.highestUnlocked) return;
    if (halfway && halfway.level !== index) halfway = null;
    clearSiege();
    resetWildlife();
    clearInput();
    clearEntities();
    clearPeaceCoins();
    ui.helpers.replaceChildren();
    Object.assign(state, {
      level: index, phase: 'sailing', paused: false, rescue: null, pendingSpend: null,
      distance: halfway?.distance ?? 0, activeSailingTime: halfway?.activeSailingTime ?? 0,
      starDue: halfway?.starDue ?? FLAG_SPAWN_DELAY,
      starIndex: halfway?.starIndex ?? 0, hazardIndex: halfway?.hazardIndex ?? 0,
      hazardDue: halfway?.hazardDue ?? 4,
      invulnerable: 0, peaceDelay: 0, halfway
    });
    state.player.x = clamp(halfway?.x ?? 138, BOAT_BOUNDS.x, WIDTH - BOAT_BOUNDS.x);
    state.player.y = clamp(halfway?.y ?? HEIGHT / 2, BOAT_BOUNDS.y, HEIGHT - BOAT_BOUNDS.y);
    place(ui.player, state.player.x, state.player.y);
    ui.player.classList.remove('damaged', 'cheering');
    ui.title.textContent = 'Level ' + (index + 1) + ' · ' + level().title;
    ui.progress.value = state.distance / level().seconds * 100;
    clearCelebration();
    clearVoyageNote();
    const requiredRescue = RESCUES[level().rescue];
    const cost = checkpointCost();
    const unit = cost === 1 ? 'flag' : 'flags';
    ui.checkpointHint.textContent = requiredRescue.name + ' — ' + cost + ' ' + unit + '.';
    clearStatus();
    renderHUD();
    ui.title.focus();
  }

  function newRun() {
    stopLoop();
    resetFinale();
    Object.assign(state, { stars: 0, lives: MAX_LIVES, highestUnlocked: 0, cleared: new Set(), levelOneCollected: new Set(), collectedCoins: new Set(), peaceBalance: 0, flagsCollected: 0 });
    ui.peaceDisplay.textContent = 0;
    ui.captainPrefix.textContent = state.captain ? 'Captain ' : '';
    ui.captain.textContent = state.captain || 'Captain';
    ui.boat.setAttribute('href', '#boat-' + state.boat);
    ui.setup.hidden = true;
    ui.finish.hidden = true;
    ui.play.hidden = false;
    startLevel(0);
    startLoop();
  }

  function clearCelebration() {
    ui.card.hidden = true;
    ui.card.querySelector('.confetti')?.remove();
    for (const flag of document.querySelectorAll('.flying-flag')) {
      for (const effect of flag.getAnimations()) effect.cancel();
      flag.remove();
    }
  }

  function backToHarbor() {
    clearSiege();
    stopLoop();
    clearWildlife();
    clearInput();
    clearEntities();
    clearPeaceCoins();
    clearCelebration();
    ui.helpers.replaceChildren();
    ui.player.classList.remove('damaged', 'cheering');
    clearVoyageNote();
    clearStatus();
    Object.assign(state, { phase: 'setup', paused: false, rescue: null, pendingSpend: null });
    ui.play.hidden = true;
    ui.finish.hidden = true;
    ui.setup.hidden = false;
    $('captain').focus();
  }

  function spawn(kind, x, y, options = {}) {
    const sprite = SPRITES[kind];
    const size = options.size ?? 1;
    const node = svgUse(sprite.id, sprite.width * size, sprite.height * size);
    const entity = { kind, x, y, node, radius: sprite.radius * size, vx: 0, vy: 0, ...options };
    if (kind === 'star') node.classList.add('floating-flag');
    if (options.boss) node.classList.add('checkpoint-obstacle');
    if (options.swarm) node.classList.add('swarm-drone');
    if (options.blockade) node.dataset.blockade = '';
    place(node, x, y);
    ui.entities.append(node);
    state.entities.push(entity);
    return entity;
  }

  function spawnDrifting(kind, index) {
    const star = kind === 'star';
    const vx = -SPRITES[kind].speed * level().speed;
    const laneCount = star ? SAILING_LANES.length : 1;

    for (let offset = 0; offset < laneCount; offset++) {
      const y = SAILING_LANES[(index + (star ? offset : 2)) % SAILING_LANES.length];
      if (star && !clearStarLane(ENTRY_X, y, vx, 0)) continue;
      spawn(kind, ENTRY_X, y, { vx, ...(star ? starSlot(index) : {}) });
      return true;
    }
    return false;
  }

  function clearStarLane(x, y, vx, vy) {
    return state.entities.every(entity => {
      const dx = entity.x - x;
      const dy = entity.y - y;
      const relativeX = entity.vx - vx;
      const relativeY = entity.vy - vy;
      const speedSquared = relativeX ** 2 + relativeY ** 2;
      const closest = speedSquared ? clamp(-(dx * relativeX + dy * relativeY) / speedSquared, 0, 1.5) : 0;
      const distance = Math.hypot(dx + relativeX * closest, dy + relativeY * closest);
      return distance > entity.radius + SPRITES.star.radius + 13;
    });
  }

  function spawnEncounters() {
    const config = level();
    const patrol = config.patrol;
    const total = patrol.length * (config.groups ?? 1);
    const spacing = (config.seconds - 10) / total;
    const active = state.entities.filter(entity => entity.kind !== 'star' && !entity.retreating).length;
    if (state.hazardIndex < total && active < config.limit && state.distance >= state.hazardDue) {
      const index = state.hazardIndex++;
      spawnDrifting(patrol[index % patrol.length], index);
      state.hazardDue = state.distance + spacing;
    }
  }

  function enterCheckpoint() {
    clearEntities();
    clearInput();
    state.phase = 'checkpoint';
    state.pendingSpend = null;
    const rescue = RESCUES[level().rescue];
    const approach = (kind, x, y, options = {}) => {
      const size = options.size ?? 1;
      spawn(kind, Math.max(ENTRY_X, WIDTH + SPRITES[kind].width * size / 2) + (options.entryOffset ?? 0), y,
        { boss: true, stopX: x, vx: -280, ...options });
    };
    if (atLevelOneBlockade()) {
      approach('command', 377, 92, { blockade: true });
      for (const [index, kind] of ['medium', 'slow', 'fast', 'slow', 'medium', 'slow'].entries()) {
        approach(kind, 73 + index * 114, 155, { blockade: true, size: 0.88 });
      }
      state.player.y = Math.max(state.player.y, 226);
    } else if (atNavalSiege()) {
      approach(level().gate, WIDTH / 2 + 30, HEIGHT / 2, { size: 1.65 });
      for (const [index, kind] of ['slow', 'medium', 'fast', 'slow'].entries()) {
        const entryOffset = index * 116;
        approach(kind, 166 + index * 142, 76, { size: 0.94, entryOffset });
        approach(kind, 221 + index * 142, 311, { size: 0.86, entryOffset });
      }
      state.player.x = Math.min(state.player.x, SIEGE_BOUNDARY);
    } else {
      const rows = [
        { y: 52, positions: [170, 270, 370, 470, 570, 670] },
        { y: 128, positions: [208, 295, 592, 679] },
        { y: 272, positions: [168, 255, 586, 673] },
        { y: 348, positions: [218, 318, 418, 518, 618] }
      ];
      approach(level().gate, 444, HEIGHT / 2, { size: 2.55, swarm: true, giant: true });
      for (const row of rows) {
        row.positions.forEach((x, index) => {
          approach('drone', x, row.y, { size: 0.94, swarm: true, entryOffset: index * 82 });
        });
      }
      state.player.x = Math.min(state.player.x, SWARM_BOUNDARY);
    }
    ui.progress.value = 100;
    const cost = checkpointCost();
    ui.checkpointGuidance.textContent = (atNavalSiege() || atDroneSwarm()) ? '' : 'Checkpoint reached. Call ' + rescue.name + ' for ' + cost + ' flags. If you are short, collect the flags that appear.';
    clearStatus();
    supplyCheckpointStar();
    syncControls();
  }

  function supplyCheckpointStar() {
    if (state.phase !== 'checkpoint' || state.rescue || state.entities.some(entity => entity.kind === 'star')) return;
    const missing = atLevelOneBlockade()
      ? Array.from({ length: LEVEL_ONE_STAR_TARGET }, (_, index) => index).find(index => !state.levelOneCollected.has(index))
      : undefined;
    if (missing === undefined && state.stars >= checkpointCost()) return;
    const lanes = atLevelOneBlockade() ? [251, 283, 325] : [63, 337];
    const y = lanes[state.starIndex++ % lanes.length];
    spawn('star', ENTRY_X, y, { vx: -SPRITES.star.speed, ...(missing === undefined ? {} : { starSlot: missing }) });
  }

  function approveSpend(key, cost, clearsCheckpoint) {
    const needed = checkpointCost();
    if (clearsCheckpoint || state.stars - cost >= needed || state.pendingSpend === key) {
      state.pendingSpend = null;
      return true;
    }
    state.pendingSpend = key;
    announce('Spending now leaves fewer than ' + needed + ' flags for this checkpoint. Press the same control again to confirm.', false, 'caution');
    return false;
  }

  function matchingRescueTargets(key) {
    return state.entities.filter(entity => !entity.retreating &&
      (entity.blockade ? 'blockade' : SPRITES[entity.kind].group ?? entity.kind) === RESCUES[key].enemy);
  }

  function prematureRescue() {
    announce("We don't need them yet!", true, 'caution');
  }

  function returnToHalfway() {
    startLevel(state.level, state.halfway);
    state.invulnerable = 2;
  }

  function wrongCheckpointRescue(key) {
    const cost = rescueCost(key);
    if (state.phase !== 'checkpoint' || key === level().rescue || !canSail() || state.rescue || state.stars < cost) return;
    if (ui.sos.open) ui.sos.close('wrong-rescue');
    state.stars -= cost;
    applyCheckpointPenalty();
  }

  function applyCheckpointPenalty() {
    state.lives--;
    if (state.lives === 0) {
      clearEntities();
      openEmergency();
      return;
    }
    returnToHalfway();
    showVoyageNote('WRONG RESCUE, CAPTAIN!', 'One heart lost. Returning to halfway!', 'warning');
  }

  function retreatTargets(targets, blockade = false) {
    for (const entity of targets) {
      entity.retreating = true;
      entity.vx = blockade ? (entity.x - WIDTH / 2) * 0.15 : 215;
      entity.vy = blockade ? -220 : -35;
    }
  }

  function callRescue(key) {
    const power = RESCUES[key];
    const fromSOS = key === 'turkiye' && ui.sos.open;
    const cost = rescueCost(key);
    if (!(fromSOS ? canSail() : playing()) || state.rescue || state.stars < cost) return;
    if (state.phase === 'checkpoint' && key !== level().rescue) {
      if (key !== 'turkiye' || fromSOS) wrongCheckpointRescue(key);
      return;
    }
    const targets = matchingRescueTargets(key);
    if (!targets.length) {
      state.pendingSpend = null;
      if (state.phase === 'checkpoint') announce(power.name + ' has no matching obstacle here. No flags were used.', false, 'caution');
      else {
        if (fromSOS) ui.sos.close();
        prematureRescue();
      }
      return;
    }
    const clearsCheckpoint = state.phase === 'checkpoint' && level().rescue === key && targets.some(entity => entity.boss);
    if (!approveSpend(key, cost, clearsCheckpoint)) return;

    state.stars -= cost;
    if (atDroneSwarm() && key === 'eagle') {
      startSwarmRescue(power, targets);
      return;
    }
    const blockade = atLevelOneBlockade();
    const helpers = Array.from({ length: blockade ? 4 : key === 'eagle' ? 3 : 1 }, () => {
      const node = svgUse(power.sprite, 110, 84);
      if (blockade) node.classList.add('blockade-helper');
      if (key === 'eagle') node.classList.add('press-eagle-flight');
      ui.helpers.append(node);
      return node;
    });
    const target = targets.find(entity => entity.boss) ?? targets[0];
    state.rescue = { key, time: 0, duration: blockade ? 3.3 : 1.65, helpers,
      clearsCheckpoint, x: target.x, y: target.y, blockade, targets, retreatStarted: !blockade };
    if (!blockade) retreatTargets(targets);
    positionHelpers();
    if (fromSOS) ui.sos.close();
    announce(power.message, true, 'success');
    renderHUD();
  }

  function startSwarmRescue(power, targets) {
    const eagle = svgUse(power.sprite, 235, 152);
    eagle.classList.add('swarm-eagle', 'press-eagle-flight');
    place(eagle, -125, 205);
    ui.helpers.append(eagle);
    state.rescue = { key: 'eagle', swarm: true, time: 0, eagle, targets, effects: [] };
    announce(power.message, true, 'success');
    renderHUD();
  }

  function updateSwarmRescue(dt) {
    const rescue = state.rescue;
    if (rescue.targets.some(entity => !entity.retreating && entity.vx < 0)) return;

    rescue.time += dt;
    const fraction = clamp(rescue.time / 3, 0, 1);
    const x = -125 + 925 * fraction;
    const reduced = reducedMotion.matches;
    place(rescue.eagle, reduced ? 355 : x, reduced ? 200 : 205 - Math.sin(fraction * Math.PI * 2) * 48);

    for (const target of rescue.targets) {
      if (target.retreating || (target.giant ? fraction < 0.94 : x < target.stopX)) continue;
      target.retreating = true;
      if (reduced) continue;
      target.vx = target.giant ? 220 : 190;
      target.vy = target.y < HEIGHT / 2 ? -180 : 180;
      if (target.giant || rescue.effects.length < 2) {
        const gear = svgUse('machine-gear', 38, 38);
        gear.classList.add('swarm-cheer-gear');
        place(gear, target.x, target.y);
        ui.helpers.insertBefore(gear, rescue.eagle);
        rescue.effects.push({ gear, end: rescue.time + 0.62 });
      }
    }

    rescue.effects = rescue.effects.filter(effect => {
      if (rescue.time < effect.end) return true;
      effect.gear.remove();
      return false;
    });
    if (rescue.time >= (reduced ? 3 : 4.05)) {
      ui.helpers.replaceChildren();
      state.rescue = null;
      celebrate();
    }
  }

  function positionHelpers() {
    const rescue = state.rescue;
    const fraction = clamp(rescue.time / rescue.duration, 0, 1);
    if (rescue.blockade) {
      const approach = clamp(fraction / 0.48, 0, 1);
      rescue.helpers.forEach((node, index) => {
        const x = [84, 260, 452, 630][index];
        const y = [199, 233, 233, 199][index];
        const bob = reducedMotion.matches ? 0 : Math.sin(rescue.time * 5 + index) * 3;
        place(node, x, HEIGHT + 55 + (y - HEIGHT - 55) * approach + bob);
      });
      return;
    }
    const x = -70 + (rescue.x + 105) * fraction;
    const y = rescue.y + 38;
    rescue.helpers.forEach((node, index) => {
      const lift = reducedMotion.matches ? 0 : Math.sin(fraction * Math.PI * 4 + index) * 10;
      place(node, x - index * 40, y - index * 33 + lift);
    });
  }

  function extraLife() {
    if (!playing() || state.stars < EXTRA_LIFE_COST || state.lives >= MAX_LIVES) return;
    if (!approveSpend('life', EXTRA_LIFE_COST, false)) return;
    state.stars -= EXTRA_LIFE_COST;
    state.lives++;
    announce('One heart restored.', true, 'success');
    renderHUD();
  }

  function celebrate() {
    if (state.cleared.has(state.level)) return;
    state.cleared.add(state.level);
    state.highestUnlocked = Math.min(LEVELS.length - 1, state.level + 1);
    state.stars += CHECKPOINT_BONUS;
    state.phase = 'celebration';
    clearInput();
    clearEntities();
    clearPeaceCoins();
    ui.player.classList.remove('damaged');
    ui.player.classList.add('cheering');
    clearVoyageNote();
    const siege = state.level === 1;
    ui.siegeCelebration.hidden = !siege;
    ui.checkpointTitle.textContent = siege ? 'CHECKPOINT TWO CLEARED!' : 'CHECKPOINT CLEARED!';
    ui.next.textContent = siege ? 'KEEP SAILING, CAPTAIN!' : 'KEEP SAILING!';
    ui.peoplePower.hidden = state.level !== 0;
    ui.card.hidden = false;
    announce('Checkpoint cleared! Three bonus flags.', false, 'success');
    renderHUD();
    animateBonus();
    ui.checkpointTitle.focus();
  }

  function animateBonus() {
    if (reducedMotion.matches || !ui.bank.animate) return;
    const origin = ui.card.getBoundingClientRect();
    const destination = ui.bank.getBoundingClientRect();
    for (let index = 0; index < CHECKPOINT_BONUS; index++) {
      const flag = document.createElementNS(SVG_NS, 'svg');
      flag.setAttribute('viewBox', '-20 -20 40 40');
      flag.append(svgUse('aid-flag', 40, 40));
      const x = origin.left + origin.width / 2 + (index - 1) * 22;
      const y = origin.top + 20;
      flag.classList.add('flying-flag');
      flag.setAttribute('aria-hidden', 'true');
      flag.style.left = x + 'px';
      flag.style.top = y + 'px';
      document.body.append(flag);
      const flight = flag.animate([
        { transform: 'translate(0,0) scale(.65)', opacity: 0 },
        { transform: 'translate(0,-22px) scale(1.25)', opacity: 1, offset: 0.3 },
        { transform: 'translate(' + (destination.left - x) + 'px,' + (destination.top - y) + 'px) scale(.65)', opacity: 0 }
      ], { duration: 760, delay: index * 105, easing: 'ease-in-out' });
      flight.onfinish = flight.oncancel = () => flag.remove();
    }
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.setAttribute('aria-hidden', 'true');
    for (let index = 0; index < 14; index++) {
      const piece = document.createElement('i');
      piece.style.setProperty('--scatter', ((index - 6.5) * 19) + 'px');
      piece.style.setProperty('--height', (-35 - (index % 5) * 19) + 'px');
      piece.style.setProperty('--confetti-tone', ['#58a879', '#ce5b53', '#fff3d0', '#e4b868'][index % 4]);
      confetti.append(piece);
    }
    ui.card.append(confetti);
    confetti.addEventListener('animationend', () => confetti.remove(), { once: true });
  }

  function openEmergency() {
    clearWildlife();
    state.phase = 'emergency';
    clearVoyageNote();
    state.pendingSpend = null;
    stopLoop();
    clearInput();
    const short = state.stars < EMERGENCY_SOS_COST;
    ui.emergencySend.disabled = short;
    ui.emergencyShortfall.hidden = !short;
    syncControls();
    ui.emergency.showModal();
    (short ? ui.emergencyEnd : ui.emergencySend).focus();
  }

  function answerEmergency() {
    if (state.phase !== 'emergency' || !ui.emergency.open || state.stars < EMERGENCY_SOS_COST) return;
    ui.emergencySend.disabled = true;
    ui.emergency.close();
    state.stars -= EMERGENCY_SOS_COST;
    state.lives = 1;
    startLevel(state.level, state.halfway);
    state.invulnerable = 2;
    announce('SOS ANSWERED! BACK TO SAILING!', true, 'success');
    startLoop();
  }

  function finish(won) {
    clearWildlife();
    state.phase = 'finished';
    clearVoyageNote();
    clearStatus();
    stopLoop();
    if (ui.emergency.open) ui.emergency.close();
    clearCelebration();
    clearInput();
    clearEntities();
    clearPeaceCoins();
    ui.helpers.replaceChildren();
    ui.play.hidden = true;
    ui.finish.hidden = false;
    ui.arrival.toggleAttribute('hidden', !won);
    ui.arrivalBoat.setAttribute('href', '#boat-' + state.boat);
    ui.finishCopy.dataset.messageTone = won ? 'success' : 'warning';
    ui.finishTitle.textContent = won ? 'THE AID HAS REACHED GAZA!' : 'GAME OVER';
    ui.finishMessage.textContent = won ? '' : 'Even brave captains need another try. Your boat is ready when you are!';
    ui.finishKicker.hidden = true;
    ui.finishPanel.hidden = won;
    ui.ceremony.hidden = true;
    ui.raiseFlag.hidden = !won || state.peaceBalance < 1;
    ui.finishAction.disabled = false;
    ui.voyageScore.hidden = true;
    ui.ceremonyNote.textContent = state.peaceBalance
      ? ''
      : 'You need 1 Peace Coin to raise the flag. Sail again to collect one!';
    ui.finishAction.textContent = won ? '← DO ANOTHER AID RUN' : 'RETRY';
    if (won) {
      setFinaleStage('arrival');
      ui.arrival.scrollIntoView({ block: 'start' });
      ui.arrival.focus({ preventScroll: true });
      startLoop();
    } else {
      state.finale = null;
      ui.finish.removeAttribute('data-finale');
      ui.finishTitle.focus();
    }
  }

  function resetFinale() {
    ui.arrival.querySelector('.landing-peace-shower')?.remove();
    state.finale = null;
    state.flagRaised = false;
    ui.finish.removeAttribute('data-finale');
    ui.arrival.setAttribute('hidden', '');
    ui.finishPanel.hidden = true;
    ui.ceremony.hidden = true;
    ui.voyageScore.hidden = true;
    unloadLandingCargo(0);
  }

  function setFinaleStage(stage) {
    state.finale = { stage, time: 0 };
    ui.finish.dataset.finale = stage;
  }

  function unloadLandingCargo(time) {
    const elapsed = Math.max(0, time - 0.4);
    const cycle = 1.55;
    const current = Math.min(Math.floor(elapsed / cycle), landingCargo.length - 1);
    const fraction = clamp((elapsed - current * cycle) / cycle, 0, 1);
    const travel = clamp((fraction - 0.38) / 0.34, 0, 1);
    const descend = clamp((fraction - 0.72) / 0.23, 0, 1);
    const lift = clamp((fraction - 0.17) / 0.21, 0, 1);
    const [fromX, fromY] = landingCargo[current].from;
    const [toX, toY] = landingCargo[current].to;
    const x = fromX + (toX - fromX) * travel;
    const y = fromY - 43 * lift + (toY - fromY + 43) * descend;
    landingCargo.forEach(({ node, from, to }, index) => {
      if (index === current) place(node, x, y);
      else place(node, ...(index < current ? to : from));
    });
    const hookY = fraction < 0.17
      ? 177 + (fromY - 201) * (fraction / 0.17)
      : y - 24;
    ui.landingCable.setAttribute('x1', x);
    ui.landingCable.setAttribute('x2', x);
    ui.landingCable.setAttribute('y2', hookY);
    place(ui.landingHook, x, hookY);
  }

  function updateFinale(dt) {
    const finale = state.finale;
    finale.time += dt;
    const reduced = reducedMotion.matches;
    if (finale.stage === 'arrival' && (reduced || finale.time >= 1.65)) {
      setFinaleStage('fireworks');
    } else if (finale.stage === 'fireworks' && (reduced || finale.time >= 1.15)) {
      unloadLandingCargo(reduced ? 5.05 : 0);
      setFinaleStage('unloading');
    } else if (finale.stage === 'unloading' && (reduced || finale.time >= 5.05)) {
      unloadLandingCargo(5.05);
      setFinaleStage('ready-to-raise');
      ui.finishPanel.hidden = false;
      ui.ceremony.hidden = false;
      if (state.peaceBalance === 0) showVoyageScore();
      ui.finishTitle.focus({ preventScroll: true });
    } else if (finale.stage === 'unloading') {
      unloadLandingCargo(finale.time);
    } else if (finale.stage === 'raising' && (reduced || finale.time >= 2.6)) {
      setFinaleStage('flag-raised');
      floatLandingPeaceSigns();
      ui.finishKicker.hidden = false;
      ui.finishTitle.textContent = 'Mission Complete, Captain!';
      ui.ceremony.hidden = true;
      showVoyageScore();
      recordPeaceBest(state.peaceBalance);
      ui.finishAction.disabled = false;
      ui.finishTitle.focus({ preventScroll: true });
    }
  }

  function floatLandingPeaceSigns() {
    if (reducedMotion.matches) return;
    const layer = document.createElementNS(SVG_NS, 'g');
    layer.classList.add('landing-peace-shower');
    layer.setAttribute('aria-hidden', 'true');
    const signs = [
      [94, 34, 0.72, '#cd4c59'], [224, 58, 0.98, '#57a77b'],
      [340, 25, 0.66, '#fff4de'], [467, 46, 0.9, '#e6b768'],
      [545, 31, 0.76, '#57a77b'], [152, 47, 0.62, '#e6b768']
    ];
    signs.forEach(([x, y, scale, color], index) => {
      const anchor = document.createElementNS(SVG_NS, 'g');
      anchor.setAttribute('transform', 'translate(' + x + ' ' + y + ') scale(' + scale + ')');
      const sign = document.createElementNS(SVG_NS, 'g');
      sign.classList.add('landing-peace-sign');
      sign.style.setProperty('--peace-color', color);
      sign.style.setProperty('--peace-delay', (index * 0.38) + 's');
      sign.style.setProperty('--peace-sway', (index % 2 ? -13 : 13) + 'px');
      sign.innerHTML = `
        <circle r="13" fill="#302528" fill-opacity=".72" stroke="#f0cb89" stroke-width="1.2"/>
        <circle r="10.8" fill="none" stroke="currentColor" stroke-width="2.4"/>
        <path d="M0-10.2v20.4M0 0l-7.3 7.3M0 0l7.3 7.3" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
        <path d="M-9-8q3-3 8-4M6 10l3-2" fill="none" stroke="#fff2cb" stroke-width=".85" stroke-linecap="round"/>
        <path d="M15-9h6m-3-3v6M-18 7h4m-2-2v4" stroke="#fff0c9" stroke-width=".8" stroke-linecap="round"/>
      `;
      if (index === signs.length - 1) sign.addEventListener('animationend', () => layer.remove(), { once: true });
      anchor.append(sign);
      layer.append(anchor);
    });
    ui.arrival.append(layer);
  }

  function showVoyageScore() {
    ui.finalFlags.textContent = state.flagsCollected;
    ui.finalCoins.textContent = state.peaceBalance;
    ui.voyageScore.hidden = false;
  }

  function recordPeaceBest(score) {
    sessionBest = Math.max(sessionBest, score);
    try {
      const saved = Number(window.localStorage.getItem(PEACE_BEST_KEY));
      if (Number.isInteger(saved) && saved >= 0 && saved < 25) sessionBest = Math.max(sessionBest, saved);
      window.localStorage.setItem(PEACE_BEST_KEY, String(sessionBest));
    } catch {
      // The current session still retains its best if browser storage is unavailable.
    }
    return sessionBest;
  }

  function raiseVoyageFlag() {
    if (state.phase !== 'finished' || state.finale?.stage !== 'ready-to-raise' || state.flagRaised || state.peaceBalance < 1) return;
    state.flagRaised = true;
    state.peaceBalance--;
    ui.ceremony.hidden = true;
    setFinaleStage('raising');
    ui.finishAction.disabled = true;
    ui.arrival.scrollIntoView({ block: 'start' });
    ui.finishTitle.focus({ preventScroll: true });
    ui.raiseFlag.hidden = true;
    startLoop();
  }

  function movePlayer(dt) {
    const directions = new Set([...heldKeys.values(), ...Array.from(heldPointers.values(), pointer => pointer.direction)]);
    if (state.pulse) {
      directions.add(state.pulse.direction);
      state.pulse.time -= dt;
      if (state.pulse.time <= 0) state.pulse = null;
    }

    let dx = Number(directions.has('right')) - Number(directions.has('left'));
    let dy = Number(directions.has('down')) - Number(directions.has('up'));
    const target = directions.size === 0 ? state.pointerTarget : null;
    if (target) {
      dx = target.x - state.player.x;
      dy = target.y - state.player.y;
    }

    const length = Math.hypot(dx, dy);
    if (length < (target ? 1 : Number.EPSILON)) return;
    const step = target ? Math.min(length, BOAT_SPEED * dt) : BOAT_SPEED * dt;
    state.player.x = clamp(state.player.x + dx / length * step, BOAT_BOUNDS.x,
      atNavalSiege() ? SIEGE_BOUNDARY : atDroneSwarm() ? SWARM_BOUNDARY : WIDTH - BOAT_BOUNDS.x);
    state.player.y = clamp(state.player.y + dy / length * step, atLevelOneBlockade() ? 226 : BOAT_BOUNDS.y, HEIGHT - BOAT_BOUNDS.y);
    if (state.phase === 'sailing' && state.level !== 1) state.distance += dt;
  }

  function moveEntities(dt) {
    const survivors = [];
    for (const entity of state.entities) {
      entity.x += entity.vx * dt;
      entity.y += entity.vy * dt;
      if (!entity.retreating && entity.stopX !== undefined && entity.x <= entity.stopX) {
        entity.x = entity.stopX;
        entity.vx = 0;
      }
      const entering = !entity.retreating && entity.stopX !== undefined;
      const out = entity.x < -100 || (!entering && entity.x > WIDTH + 110) ||
        entity.y < -100 || entity.y > HEIGHT + 100;
      const hit = !entity.boss && !entity.retreating &&
        Math.hypot(entity.x - state.player.x, entity.y - state.player.y) < entity.radius + BOAT_BOUNDS.radius;
      if (out || (hit && (entity.kind === 'star' || (!state.rescue && state.invulnerable === 0)))) {
        entity.node.remove();
        if (hit && !out) {
          if (entity.kind === 'star') {
            state.stars++;
            state.flagsCollected++;
            state.pendingSpend = null;
            if (entity.starSlot !== undefined && !state.levelOneCollected.has(entity.starSlot)) {
              state.levelOneCollected.add(entity.starSlot);
              if (state.levelOneCollected.size === LEVEL_ONE_STAR_TARGET) {
                showFlagAchievement();
              }
            }
          } else {
            state.lives--;
            state.invulnerable = 1.5;
            announce('Watch out! One heart lost.', true, 'warning');
          }
          renderHUD();
        }
      } else {
        place(entity.node, entity.x, entity.y);
        survivors.push(entity);
      }
    }
    state.entities = survivors;
  }

  function update(dt) {
    state.invulnerable = Math.max(0, state.invulnerable - dt);
    movePlayer(dt);
    if (state.phase === 'sailing') {
      state.activeSailingTime += dt;
      if (state.level === 1) state.distance = state.activeSailingTime;
      const progress = state.distance / level().seconds;
      ui.progress.value = progress * 100;
      if (progress >= 0.5 && !state.halfway) {
        state.halfway = { level: state.level, distance: level().seconds / 2, x: state.player.x, y: state.player.y,
          activeSailingTime: state.level === 1 ? level().seconds / 2 : state.activeSailingTime,
          starDue: state.starDue, starIndex: state.starIndex, hazardIndex: state.hazardIndex, hazardDue: state.hazardDue };
        syncControls();
        showVoyageNote('HALFWAY THERE, CAPTAIN!', 'Checkpoint saved!', 'success', 2400);
      }
      if (progress >= 1) enterCheckpoint();
      else {
        spawnEncounters();
        if ((state.level !== 0 || state.starIndex < LEVEL_ONE_STAR_TARGET) &&
            state.activeSailingTime >= state.starDue && spawnDrifting('star', state.starIndex)) {
          state.starIndex++;
          state.starDue = state.activeSailingTime + STAR_INTERVAL;
        }
      }
    }

    moveEntities(dt);
    if (atNavalSiege() && ui.interceptionWarning.hidden) syncInterceptionWarning();
    if (state.lives > 0) updatePeaceCoins(dt);
    place(ui.player, state.player.x, state.player.y);
    const flash = !reducedMotion.matches && Math.floor(state.invulnerable * 10) % 2 === 0;
    ui.player.classList.toggle('damaged', state.invulnerable > 0 && (reducedMotion.matches || flash));
    if (state.lives === 0) {
      openEmergency();
      return;
    }

    if (state.rescue?.swarm) {
      updateSwarmRescue(dt);
    } else if (state.rescue) {
      const rescue = state.rescue;
      rescue.time += dt;
      positionHelpers();
      if (!rescue.retreatStarted && rescue.time >= 1.6) {
        retreatTargets(rescue.targets, true);
        rescue.retreatStarted = true;
      }
      if (rescue.time >= rescue.duration) {
        if (!rescue.blockade) ui.helpers.replaceChildren();
        state.rescue = null;
        if (rescue.clearsCheckpoint) celebrate();
        else syncControls();
      }
    }
    supplyCheckpointStar();
    updateWildlife(dt);
  }

  function setPaused(paused) {
    if (state.siegeReply) return;
    if (state.phase !== 'sailing' && state.phase !== 'checkpoint') return;
    state.paused = paused;
    state.pendingSpend = null;
    clearInput();
    syncControls();
    announce(paused ? 'Paused. Press Resume when you are ready.' :
      state.phase === 'checkpoint' ? 'Checkpoint ready. Collect flags or call the required rescue.' : 'Back at sea. Keep sailing!', !paused);
  }

  const sosButton = ui.rescues.find(button => button.dataset.rescue === 'turkiye');
  const countryButtons = [...ui.sos.querySelectorAll('[data-sos-country]')];

  let alarmAudio;
  let alarmTone;
  let alarmPlayed = false;

  function unlockInterceptionAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
      alarmAudio ??= new AudioContext();
      alarmAudio.resume().then(playInterceptionAlarm).catch(() => {});
    } catch {
      // The visual warning also works when audio is unavailable.
    }
  }

  function playInterceptionAlarm() {
    if (ui.interceptionWarning.hidden || alarmPlayed || alarmAudio?.state !== 'running') return;
    const now = alarmAudio.currentTime;
    const tone = alarmAudio.createOscillator();
    const volume = alarmAudio.createGain();
    tone.frequency.setValueAtTime(420, now);
    tone.frequency.linearRampToValueAtTime(680, now + 0.18);
    tone.frequency.linearRampToValueAtTime(460, now + 0.38);
    tone.frequency.linearRampToValueAtTime(630, now + 0.56);
    volume.gain.setValueAtTime(0, now);
    volume.gain.linearRampToValueAtTime(0.045, now + 0.06);
    volume.gain.linearRampToValueAtTime(0, now + 0.65);
    tone.connect(volume).connect(alarmAudio.destination);
    alarmTone = tone;
    alarmPlayed = true;
    tone.onended = () => {
      tone.disconnect();
      volume.disconnect();
      if (alarmTone === tone) alarmTone = null;
    };
    tone.start(now);
    tone.stop(now + 0.65);
  }

  function hideInterceptionWarning() {
    ui.interceptionWarning.hidden = true;
    ui.play.removeAttribute('data-interception');
    if (alarmTone) {
      alarmTone.stop();
      alarmTone = null;
    }
  }

  function syncInterceptionWarning() {
    if (!atNavalSiege() || state.siegeRide) {
      hideInterceptionWarning();
      return;
    }
    if (!ui.interceptionWarning.hidden || state.entities.some(entity => entity.boss && entity.vx < 0)) return;
    ui.interceptionWarning.hidden = false;
    ui.play.setAttribute('data-interception', '');
    playInterceptionAlarm();
  }

  function openSOS() {
    const early = beforeNavalSiege();
    if (!playing() || (!early && (state.rescue || state.stars < rescueCost('turkiye')))) return;
    if (!early && state.phase !== 'checkpoint' && !matchingRescueTargets('turkiye').length) {
      state.pendingSpend = null;
      prematureRescue();
      return;
    }
    clearInput();
    state.pendingSpend = null;
    ui.sosResponseCopy.textContent = '';
    ui.sosResponse.dataset.messageTone = 'sos';
    ui.sos.returnValue = '';
    ui.sos.toggleAttribute('data-naval-siege', early || atNavalSiege());
    ui.sos.showModal();
    if (atNavalSiege()) unlockInterceptionAudio();
    syncControls();
  }

  const sosCancel = ui.sos.querySelector('[value="cancel"]');

  function clearSiege() {
    hideInterceptionWarning();
    alarmPlayed = false;
    state.siegeReply = null;
    state.siegeRide = null;
    delete ui.sos.dataset.siegeReply;
    for (const button of [...countryButtons, sosCancel]) button.disabled = false;
    if (ui.sos.open) ui.sos.close('siege-reset');
  }

  function selectSiegeCountry(country) {
    if (!atNavalSiege() || state.siegeReply || state.stars < CHECKPOINT_SOS_COST) return;
    if (country === 'turkey') {
      startSiegeRide();
      return;
    }
    state.stars -= CHECKPOINT_SOS_COST;
    state.siegeReply = { remaining: country === 'greece' ? 4 : 2.5 };
    for (const button of [...countryButtons, sosCancel]) button.disabled = true;
    ui.sos.dataset.siegeReply = country;
    ui.sosResponse.dataset.messageTone = country === 'greece' ? 'caution' : 'sos';
    const [heading, detail] = SIEGE_REPLIES[country];
    const title = document.createElement('strong');
    title.textContent = heading;
    const message = document.createElement('span');
    message.textContent = detail;
    ui.sosResponseCopy.replaceChildren(title, message);
    ui.sosResponse.focus();
    renderHUD();
  }

  function updateSiegeReply(dt) {
    const reply = state.siegeReply;
    reply.remaining -= dt;
    if (reply.remaining > 0) return;
    clearSiege();
    applyCheckpointPenalty();
  }

  function startSiegeRide() {
    clearSiege();
    const node = svgUse('siege-microphone', 252, 203);
    node.classList.add('siege-microphone');
    ui.helpers.append(node);
    place(node, WIDTH + 130, 210);
    const targets = state.entities.filter(entity => entity.boss).sort((left, right) => right.stopX - left.stopX);
    state.siegeRide = { node, time: 0, targets, effects: [] };
    state.stars -= CHECKPOINT_SOS_COST;
    announce(SIEGE_REPLIES.turkey.join(' '), false, 'success');
    ui.status.focus({ preventScroll: true });
    renderHUD();
  }

  function updateSiegeRide(dt) {
    const ride = state.siegeRide;
    if (ride.targets.some(entity => !entity.retreating && entity.vx < 0)) {
      moveEntities(dt);
      return;
    }

    ride.time += dt;
    const fraction = clamp(ride.time / 2.8, 0, 1);
    const x = WIDTH + 130 - 745 * fraction ** 1.35;
    const reduced = reducedMotion.matches;
    const targetY = ride.targets[0]?.y ?? 210;
    const lean = clamp((targetY - 210) * 0.26, -35, 35);
    const y = 210 + lean * Math.sin(Math.PI * fraction) + Math.sin(ride.time * 7) * 6;
    place(ride.node, reduced ? 310 : x, reduced ? 210 : y);
    if (!reduced && fraction === 1) ride.node.setAttribute('transform', 'translate(' + x + ' 210) rotate(-9)');
    while (ride.targets.length && x <= ride.targets[0].stopX) {
      const entity = ride.targets.shift();
      entity.retreating = true;
      entity.vx = 95;
      entity.vy = entity.y <= HEIGHT / 2 ? -250 : 250;
      if (!reduced) {
        const splash = svgUse('siege-splash', 92, 69);
        place(splash, entity.x, entity.y);
        ui.helpers.insertBefore(splash, ride.node);
        ride.effects.push({ node: splash, ends: ride.time + 0.7 });
      }
    }
    ride.effects = ride.effects.filter(effect => {
      if (ride.time < effect.ends) return true;
      effect.node.remove();
      return false;
    });
    if (!reduced) moveEntities(dt);
    if (ride.time >= (reduced ? 2.8 : 4.05)) {
      ui.helpers.replaceChildren();
      state.siegeRide = null;
      celebrate();
    }
  }

  ui.sos.addEventListener('cancel', event => {
    if (state.siegeReply) event.preventDefault();
  });

  ui.sos.addEventListener('close', () => {
    if (ui.sos.open) return;
    state.pendingSpend = null;
    syncControls();
    if (!ui.play.hidden && !['wrong-rescue', 'siege-reset'].includes(ui.sos.returnValue)) (sosButton.disabled ? ui.status : sosButton).focus({ preventScroll: true });
  });

  for (const button of countryButtons) {
    button.addEventListener('click', () => {
      if (!ui.sos.open) return;
      if (atNavalSiege()) {
        selectSiegeCountry(button.dataset.sosCountry);
      } else if (beforeNavalSiege() && button.dataset.sosCountry === 'turkey') {
        ui.sosResponse.dataset.messageTone = 'information';
        ui.sosResponseCopy.textContent = "We don't need them quite yet—keep sailing.";
      } else if (state.phase === 'checkpoint' && level().rescue !== 'turkiye' && !state.paused) {
        wrongCheckpointRescue('turkiye');
      } else if (button.dataset.sosCountry === 'turkey') {
        if (state.paused) ui.sosResponseCopy.textContent = 'Close the radio panel and press Resume to continue.';
        else callRescue('turkiye');
      } else {
        state.pendingSpend = null;
        ui.sosResponse.dataset.messageTone = 'sos';
        ui.sosResponseCopy.textContent = SOS_REPLIES[button.dataset.sosCountry];
      }
    });
  }

  ui.returnHalfway.addEventListener('click', () => {
    if (playing() && atLevelOneBlockade() && !state.rescue && state.stars < RESCUES.protesters.cost) returnToHalfway();
  });

  ui.emergency.addEventListener('cancel', event => event.preventDefault());
  ui.emergencySend.addEventListener('click', answerEmergency);
  ui.emergencyEnd.addEventListener('click', () => {
    if (state.phase === 'emergency') finish(false);
  });

  ui.form.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(ui.form);
    state.captain = values.get('captain').trim().slice(0, 8);
    state.boat = values.get('boat');
    newRun();
  });
  ui.pause.addEventListener('click', () => setPaused(!state.paused));
  ui.restart.addEventListener('click', newRun);
  ui.harbor.addEventListener('click', backToHarbor);
  ui.raiseFlag.addEventListener('click', raiseVoyageFlag);
  ui.finishAction.addEventListener('click', newRun);
  ui.extraLife.addEventListener('click', extraLife);
  ui.next.addEventListener('click', () => {
    if (state.phase !== 'celebration') return;
    if (state.level === LEVELS.length - 1) finish(true);
    else {
      if (state.level === 0) unlockInterceptionAudio();
      startLevel(state.level + 1);
    }
  });
  // A held activation key must not confirm a spend on the next key repeat.
  for (const button of [...ui.rescues, ...countryButtons, ui.extraLife]) {
    button.addEventListener('keydown', event => {
      if (event.repeat && (event.key === 'Enter' || event.key === ' ')) event.preventDefault();
    });
  }
  for (const button of ui.rescues) {
    const key = button.dataset.rescue;
    button.addEventListener('click', key === 'turkiye' ? openSOS : () => callRescue(key));
  }

  window.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const direction = KEY_DIRECTIONS.get(key);
    if (!direction || !playing() || event.ctrlKey || event.metaKey || event.altKey) return;
    event.preventDefault();
    if (state.oceanPointer === null) state.pointerTarget = null;
    heldKeys.set(key, direction);
  });
  window.addEventListener('keyup', event => heldKeys.delete(event.key.toLowerCase()));
  window.addEventListener('blur', clearInput);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) setPaused(true);
  });

  for (const button of ui.steering) {
    button.addEventListener('pointerdown', event => {
      if (!playing() || event.button !== 0) return;
      state.pointerTarget = null;
      heldPointers.set(event.pointerId, { button, direction: button.dataset.direction, started: event.timeStamp });
      button.setPointerCapture(event.pointerId);
    });
    button.addEventListener('pointerup', event => {
      const pointer = heldPointers.get(event.pointerId);
      heldPointers.delete(event.pointerId);
      if (playing() && pointer && event.timeStamp - pointer.started < 90) {
        state.pulse = { direction: pointer.direction, time: 0.12 };
      }
    });
    for (const type of ['pointercancel', 'lostpointercapture']) {
      button.addEventListener(type, event => heldPointers.delete(event.pointerId));
    }
    button.addEventListener('click', event => {
      if (playing() && event.detail === 0) {
        state.pointerTarget = null;
        state.pulse = { direction: button.dataset.direction, time: 0.16 };
      }
    });
  }

  function aimOceanPointer(event) {
    const point = ui.ocean.createSVGPoint();
    const matrix = ui.ocean.getScreenCTM();
    if (!matrix) return;
    point.x = event.clientX;
    point.y = event.clientY;
    const target = point.matrixTransform(matrix.inverse());
    state.pointerTarget = {
      x: clamp(target.x, BOAT_BOUNDS.x, WIDTH - BOAT_BOUNDS.x),
      y: clamp(target.y, BOAT_BOUNDS.y, HEIGHT - BOAT_BOUNDS.y)
    };
  }

  ui.ocean.addEventListener('pointerdown', event => {
    if (!playing() || event.button !== 0 || !event.isPrimary || state.oceanPointer !== null) return;
    state.oceanPointer = event.pointerId;
    ui.ocean.setPointerCapture(event.pointerId);
    aimOceanPointer(event);
  });
  ui.ocean.addEventListener('pointermove', event => {
    if (!playing() || heldPointers.size) return;
    if (event.pointerId === state.oceanPointer ||
        (state.oceanPointer === null && event.pointerType === 'mouse' && ui.mouseFollow.checked)) {
      aimOceanPointer(event);
    }
  });
  ui.ocean.addEventListener('pointerup', event => {
    if (state.oceanPointer !== event.pointerId) return;
    state.oceanPointer = null;
    if (event.pointerType !== 'mouse') state.pointerTarget = null;
  });
  for (const type of ['pointercancel', 'lostpointercapture']) {
    ui.ocean.addEventListener(type, event => {
      if (state.oceanPointer !== event.pointerId) return;
      state.oceanPointer = null;
      state.pointerTarget = null;
    });
  }
  ui.ocean.addEventListener('pointerleave', () => {
    if (state.oceanPointer === null && ui.mouseFollow.checked) state.pointerTarget = null;
  });
  ui.mouseFollow.addEventListener('change', () => {
    if (state.oceanPointer === null) state.pointerTarget = null;
  });

  let previousTime;
  let frameId = null;

  function startLoop() {
    if (frameId !== null) return;
    previousTime = undefined;
    frameId = requestAnimationFrame(frame);
  }

  function stopLoop() {
    if (frameId !== null) cancelAnimationFrame(frameId);
    frameId = null;
    previousTime = undefined;
  }

  function frame(time) {
    frameId = null;
    const dt = previousTime === undefined ? 0 : Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    if (state.phase === 'finished' && ANIMATED_FINALE_STAGES.has(state.finale?.stage)) {
      updateFinale(dt);
      if (ANIMATED_FINALE_STAGES.has(state.finale.stage)) frameId = requestAnimationFrame(frame);
      return;
    }
    if (state.siegeReply) updateSiegeReply(dt);
    else if (state.siegeRide && !state.paused) updateSiegeRide(dt);
    else if (playing()) update(dt);
    if (state.phase !== 'setup' && state.phase !== 'finished' && state.phase !== 'emergency') frameId = requestAnimationFrame(frame);
  }
})();
