//Author: Leslie Brockman
//Date Last Modified: 08-19-2026
//Flashcards-Addtion



const App = (() => {
  const cards = [
    { q: "7 + 5", a: "12" },
    { q: "9 + 8", a: "17" },
    { q: "4 + 11", a: "15" },
    { q: "13 + 6", a: "19" },
    { q: "8 + 7", a: "15" },
    { q: "15 + 4", a: "19" },
    { q: "6 + 9", a: "15" },
    { q: "12 + 5", a: "17" },
    { q: "3 + 14", a: "17" },
    { q: "10 + 10", a: "20" },
    { q: "16 + 3", a: "19" },
    { q: "5 + 12", a: "17" },
    { q: "9 + 9", a: "18" },
    { q: "7 + 13", a: "20" },
    { q: "11 + 8", a: "19" },
    { q: "2 + 17", a: "19" },
    { q: "14 + 6", a: "20" },
    { q: "8 + 4", a: "12" },
    { q: "19 + 1", a: "20" },
    { q: "6 + 7", a: "13" }
  ];

  let index = 0;
  let flipped = false;
  let correct = 0;
  let wrong = 0;
  let answered = new Set();
  let seconds = 0;
  let timerId = null;
  let timerOn = false;

  const $ = (id) => document.getElementById(id);
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

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const secondsPart = totalSeconds % 60;
    return `${minutes}:${secondsPart.toString().padStart(2, "0")}`;
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
    if (!timerId) return;
    clearInterval(timerId);
    timerId = null;
  }

  function updateScoreUI() {
    el.scoreCorrect.textContent = `${correct}`;
    el.scoreWrong.textContent = `${wrong}`;
  }

  function renderCard() {
    const currentCard = cards[index];
    el.question.textContent = currentCard.q;
    el.answer.textContent = currentCard.a;
    el.progress.textContent = `Card ${index + 1} of ${cards.length}`;
    flipped = false;
    el.card.classList.remove("is-flipped");
    el.card.setAttribute("aria-label", `Flashcard: ${currentCard.q}. Press to flip.`);
    el.scoreBtns.classList.remove("is-visible");
    el.answerInput.value = "";
    el.answerFeedback.textContent = "";
    el.answerFeedback.className = "answer-feedback";
  }

  function flip() {
    startTimer();
    flipped = !flipped;
    el.card.classList.toggle("is-flipped", flipped);
    el.scoreBtns.classList.toggle("is-visible", flipped && !answered.has(index));
  }

  function mark(isCorrect) {
    if (answered.has(index)) return;
    answered.add(index);
    if (isCorrect) correct++;
    else wrong++;
    updateScoreUI();
    el.scoreBtns.classList.remove("is-visible");

    setTimeout(() => {
      if (answered.size >= cards.length) showResults();
      else next();
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
    el.answerFeedback.textContent = isCorrect
      ? "Correct! / إجابة صحيحة!"
      : "Not quite. / ليست صحيحة. ";
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
    for (let cardIndex = cards.length - 1; cardIndex > 0; cardIndex--) {
      const randomIndex = Math.floor(Math.random() * (cardIndex + 1));
      [cards[cardIndex], cards[randomIndex]] = [cards[randomIndex], cards[cardIndex]];
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

  document.addEventListener("keydown", (event) => {
    if (!document.querySelector('[data-operation="addition"]')?.contains(document.activeElement)) return;
    if (el.results.classList.contains("is-visible")) return;
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
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

  renderCard();
  updateScoreUI();
  el.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });

  return { start, flip, mark, checkAnswer, next, prev, shuffle, reset, closeResults };
})();
