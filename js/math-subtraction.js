const SubtractionApp = (() => {
  // Author: Leslie Brockman
  //Date Last Modified: 08-19-2026
  // Description: This module implements a subtraction flashcard application. It provides functionality for displaying subtraction problems, checking answers, tracking scores, and managing a timer.
  const cards = [
    { q: "15 − 7",  a: "8" },
    { q: "20 − 9",  a: "11" },
    { q: "18 − 6",  a: "12" },
    { q: "14 − 8",  a: "6" },
    { q: "19 − 5",  a: "14" },
    { q: "16 − 9",  a: "7" },
    { q: "13 − 4",  a: "9" },
    { q: "17 − 8",  a: "9" },
    { q: "12 − 7",  a: "5" },
    { q: "21 − 6",  a: "15" },
    { q: "25 − 9",  a: "16" },
    { q: "22 − 8",  a: "14" },
    { q: "11 − 5",  a: "6" },
    { q: "30 − 12", a: "18" },
    { q: "24 − 7",  a: "17" },
    { q: "28 − 9",  a: "19" },
    { q: "15 − 8",  a: "7" },
    { q: "19 − 11", a: "8" },
    { q: "23 − 6",  a: "17" },
    { q: "27 − 14", a: "13" }
  ];

  // ---- State ----
  let index = 0;
  let flipped = false;
  let correct = 0;
  let wrong = 0;
  let answered = new Set();
  let seconds = 0;
  let timerId = null;
  let timerOn = false;

  // ---- DOM refs ----
  const $ = (id) => document.getElementById(`subtraction-${id}`);
  const el = {
    card: $("card"),
    question: $("question"),
    answer: $("answer"),
    progress: $("progress"),
    timer: $("timer"),
    scoreCorrect: $("scoreCorrect"),
    scoreWrong: $("scoreWrong"),
    scoreBtns: $("scoreBtns"),
    answerInput: $("answerInput"),
    answerFeedback: $("answerFeedback"),
    results: $("results"),
    finalScore: $("finalScore"),
    finalCorrect: $("finalCorrect"),
    finalWrong: $("finalWrong"),
    finalAccuracy: $("finalAccuracy"),
    finalTime: $("finalTime")
  };

  // ---- Helpers ----
  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  function startTimer() {
    if (timerOn) return;
    timerOn = true;
    timerId = setInterval(() => {
      seconds++;
      el.timer.textContent = `⏱ ${formatTime(seconds)}`;
    }, 1000);
  }

  function start() {
    startTimer();
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function updateScoreUI() {
    el.scoreCorrect.textContent = `${correct}`;
    el.scoreWrong.textContent = `${wrong}`;
  }

  function renderCard() {
    const c = cards[index];
    el.question.textContent = c.q;
    el.answer.textContent = c.a;
    el.progress.textContent = `Card ${index + 1} of ${cards.length}`;

    flipped = false;
    el.card.classList.remove("is-flipped");
    el.card.setAttribute("aria-label", `Flashcard: ${c.q}. Press to flip.`);
    el.scoreBtns.classList.remove("is-visible");
    el.answerInput.value = "";
    el.answerFeedback.textContent = "";
    el.answerFeedback.className = "answer-feedback";
  }

  // ---- Public API ----
  function flip() {
    startTimer();
    flipped = !flipped;
    el.card.classList.toggle("is-flipped", flipped);

    if (flipped && !answered.has(index)) {
      el.scoreBtns.classList.add("is-visible");
    } else {
      el.scoreBtns.classList.remove("is-visible");
    }
  }

  function mark(isCorrect) {
    if (answered.has(index)) return;

    answered.add(index);
    if (isCorrect) correct++;
    else wrong++;
    updateScoreUI();
    el.scoreBtns.classList.remove("is-visible");

    setTimeout(() => {
      if (answered.size >= cards.length) {
        showResults();
      } else {
        next();
      }
    }, 320);
  }

  function checkAnswer() {
    if (answered.has(index)) return;
    startTimer();
    const submittedAnswer = el.answerInput.value.trim();
    if (submittedAnswer === "") {
      el.answerFeedback.textContent = "Enter an answer first / أدخل إجابة أولًا";
      el.answerFeedback.className = "answer-feedback is-wrong";
      el.answerInput.focus();
      return;
    }
    const isCorrect = Number(submittedAnswer) === Number(cards[index].a);
    el.answerFeedback.textContent = isCorrect ? "Correct! / إجابة صحيحة!" : "Not quite. / ليست صحيحة.";
    el.answerFeedback.className = `answer-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    mark(isCorrect);
  }

  function next() {
    index = (index + 1) % cards.length;
    renderCard();
  }

  function prev() {
    index = (index - 1 + cards.length) % cards.length;
    renderCard();
  }

  function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    answered.clear();
    index = 0;
    renderCard();
  }

  function reset() {
    stopTimer();
    correct = 0;
    wrong = 0;
    answered.clear();
    seconds = 0;
    timerOn = false;
    el.timer.textContent = "⏱ 0:00";
    updateScoreUI();
    index = 0;
    renderCard();
  }

  function showResults() {
    stopTimer();
    const total = correct + wrong;
    const accuracy = total ? Math.round((correct / total) * 100) : 0;

    el.finalScore.textContent = `${correct} / ${total}`;
    el.finalCorrect.textContent = `${correct}`;
    el.finalWrong.textContent = `${wrong}`;
    el.finalAccuracy.textContent = `${accuracy}%`;
    el.finalTime.textContent = formatTime(seconds);

    el.results.hidden = false;
    el.results.classList.add("is-visible");
  }

  function closeResults() {
    el.results.classList.remove("is-visible");
    el.results.hidden = true;
    reset();
  }

  // ---- Keyboard ----
  document.addEventListener("keydown", (e) => {
    if (!document.querySelector('[data-operation="subtraction"]')?.contains(document.activeElement)) return;
    if (el.results.classList.contains("is-visible")) return;

    switch (e.key) {
      case " ":
      case "Enter":
        e.preventDefault();
        flip();
        break;
      case "ArrowRight":
        next();
        break;
      case "ArrowLeft":
        prev();
        break;
      case "c":
      case "C":
        if (flipped && !answered.has(index)) mark(true);
        break;
      case "x":
      case "X":
        if (flipped && !answered.has(index)) mark(false);
        break;
    }
  });

  // ---- Init ----
  renderCard();
  updateScoreUI();
  el.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });

  return { start, flip, mark, checkAnswer, next, prev, shuffle, reset, closeResults };
})();
