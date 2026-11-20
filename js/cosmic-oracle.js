
"use strict";

/**
 * Author: Leslie Brockman
 * The Cosmic Oracle
 * Phase 2 - Random Fortune Generator
 * Date Modified 11-20-2026
 * Description: JavaScript for the cosmic fortune-telling arcade machine simulation. Includes integration for random fortune generation and user interaction.
 */

// Original fortunes for entertainment and satire.
// Description: JavaScript for the cosmic fortune-telling arcade machine simulation. Includes integration for random fortune generation and user interaction.

const fortunes = [
    {
        number: "001",
        title: "The Wandering Planet",
        symbol: "🪐",
        fortune: "You are destined for great things. Unfortunately, the universe forgot to specify which things.",
        omen: "Cosmic advice: Bring snacks.",
        ar: {
            title: "الكوكب التائه",
            fortune: "قُدّر لك أن تحقّق أمورًا عظيمة. للأسف، نسي الكون أن يحدّد أيّ أمور.",
            omen: "نصيحة كونية: أحضر معك بعض الوجبات الخفيفة."
        }
    },
    {
        number: "002",
        title: "The Suspicious Moon",
        symbol: "🌙",
        fortune: "Someone is thinking about you. They probably want to know why you haven't answered their message.",
        omen: "Cosmic advice: Check your notifications.",
        ar: {
            title: "القمر المرتاب",
            fortune: "ثمة من يفكّر فيك. على الأرجح، يريد أن يعرف لماذا لم تردّ على رسالته.",
            omen: "نصيحة كونية: تحقّق من إشعاراتك."
        }
    },
    {
        number: "003",
        title: "The Galactic Committee",
        symbol: "🌌",
        fortune: "The stars have formed a committee to discuss your future. A second committee has been appointed to investigate the first.",
        omen: "Cosmic advice: Do not expect minutes.",
        ar: {
            title: "لجنة المجرّة",
            fortune: "شكّلت النجوم لجنة لمناقشة مستقبلك. وعُيّنت لجنة ثانية للتحقيق مع الأولى.",
            omen: "نصيحة كونية: لا تتوقّع محضرًا للاجتماع."
        }
    },
    {
        number: "004",
        title: "The Diplomatic Fog",
        symbol: "🌫️",
        fortune: "A powerful voice will express deep concern. The concern will be forwarded to another department.",
        omen: "Cosmic advice: Your patience has expired.",
        ar: {
            title: "الضباب الدبلوماسي",
            fortune: "سيعبّر صوت نافذ عن قلق بالغ. وسيُحال القلق إلى قسم آخر.",
            omen: "نصيحة كونية: انتهت صلاحية صبرك."
        }
    },
    {
        number: "005",
        title: "Mercury's Complaint Department",
        symbol: "☿",
        fortune: "Your complaint has reached Mercury. Mercury is currently unavailable and suggests contacting Venus.",
        omen: "Cosmic advice: Please remain on the line.",
        ar: {
            title: "قسم الشكاوى في عطارد",
            fortune: "وصلت شكواك إلى عطارد. عطارد غير متاح حاليًا ويقترح التواصل مع الزهرة.",
            omen: "نصيحة كونية: يُرجى البقاء على الخط."
        }
    },
    {
        number: "006",
        title: "The Rebellious Comet",
        symbol: "☄️",
        fortune: "You were born to follow your own path. The universe would appreciate it if you stopped asking for directions.",
        omen: "Cosmic advice: Take the scenic route.",
        ar: {
            title: "المذنّب المتمرّد",
            fortune: "وُلدت لتسلك طريقك الخاص. وسيقدّر لك الكون لو توقّفت عن طلب الإرشادات.",
            omen: "نصيحة كونية: اسلك الطريق ذا المناظر الخلّابة."
        }
    },
    {
        number: "007",
        title: "Saturn's Performance Review",
        symbol: "🪐",
        fortune: "Saturn has reviewed your recent decisions. The rings are impressed. The moons have concerns.",
        omen: "Cosmic advice: Schedule a follow-up.",
        ar: {
            title: "تقييم الأداء لدى زحل",
            fortune: "راجع زحل قراراتك الأخيرة. الحلقات معجبة. أمّا الأقمار فلديها تحفّظات.",
            omen: "نصيحة كونية: حدّد موعدًا للمتابعة."
        }
    },
    {
        number: "008",
        title: "The Cosmic Customer Service Desk",
        symbol: "✨",
        fortune: "Your request for a peaceful week has been received. Estimated processing time: Three to five business eternities.",
        omen: "Cosmic advice: Your call is important.",
        ar: {
            title: "مكتب خدمة العملاء الكوني",
            fortune: "تلقّينا طلبك لقضاء أسبوع هادئ. المدّة المقدّرة للمعالجة: من ثلاثة إلى خمسة دهور عمل.",
            omen: "نصيحة كونية: اتصالك يهمّنا."
        }
    },
    {
        number: "009",
        title: "The Overworked Sun",
        symbol: "☀️",
        fortune: "You are a shining example of perseverance. The sun would like to know whether you can cover its next shift.",
        omen: "Cosmic advice: Apply sunscreen.",
        ar: {
            title: "الشمس المُنهَكة من العمل",
            fortune: "أنت مثال ساطع على المثابرة. تودّ الشمس أن تعرف إن كان بإمكانك أن تنوب عنها في مناوبتها القادمة.",
            omen: "نصيحة كونية: ضع واقيًا من الشمس."
        }
    },
    {
        number: "010",
        title: "The Lost Constellation",
        symbol: "⭐",
        fortune: "Your future is written in the stars. Unfortunately, somebody spilled coffee on the map.",
        omen: "Cosmic advice: Follow the crumbs.",
        ar: {
            title: "الكوكبة الضائعة",
            fortune: "مستقبلك مكتوب في النجوم. للأسف، سكب أحدهم القهوة على الخريطة.",
            omen: "نصيحة كونية: اتبع أثر الفتات."
        }
    },
    {
        number: "011",
        title: "The Intergalactic Audit",
        symbol: "🌠",
        fortune: "The universe has audited your life choices. Several receipts are missing, but your sense of humor remains deductible.",
        omen: "Cosmic advice: Keep your paperwork.",
        ar: {
            title: "التدقيق بين المجرّات",
            fortune: "دقّق الكون في اختياراتك في الحياة. بعض الإيصالات مفقودة، لكن حسّك الفكاهي ما زال قابلًا للخصم الضريبي.",
            omen: "نصيحة كونية: احتفظ بأوراقك."
        }
    },
    {
        number: "012",
        title: "The Cosmic Plot Twist",
        symbol: "🌑",
        fortune: "Everything is about to make sense. Not today, obviously. The universe enjoys dramatic suspense.",
        omen: "Cosmic advice: Stay for the sequel.",
        ar: {
            title: "المنعطف الكوني في الحبكة",
            fortune: "قريبًا سيصبح لكل شيء معنى. ليس اليوم، طبعًا. فالكون يستمتع بالتشويق الدرامي.",
            omen: "نصيحة كونية: ابقَ لمشاهدة الجزء التالي."
        }
    }
];

// DOM elements

const revealBtn = document.getElementById("revealBtn");
const ticketReturn = document.getElementById("ticketReturn");
const advicePanel = document.querySelector(".advice-panel");
const dispenserSlot = document.querySelector(".slot-opening");
const fortuneTicket = document.getElementById("fortuneTicket");
const miniTicket = document.getElementById("miniTicket");
const miniTicketNumber = document.getElementById("miniTicketNumber");
const oracleLayout = document.getElementById("oracleLayout");
const oracle = oracleLayout.closest("main");
const ticketNumber = document.getElementById("ticketNumber");
const ticketSymbol = document.getElementById("ticketSymbol");
const fortuneTitle = document.getElementById("fortuneTitle");
const fortuneText = document.getElementById("fortuneText");
const fortuneOmen = document.getElementById("fortuneOmen");
const statusEnglish = document.querySelector("#windowMessage .lang-en");
const statusArabic = document.querySelector("#windowMessage .lang-ar");
const waitingStatus = [statusEnglish.textContent, statusArabic.textContent];
const englishPageTitle = document.title;

// Application state

let currentFortuneIndex = -1;
let fortuneDeck = [];

// Refill the deck and shuffle its indexes using Fisher–Yates.

function shuffleFortuneDeck() {
    fortuneDeck = fortunes.map((fortune, index) => index);

    for (let i = fortuneDeck.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [fortuneDeck[i], fortuneDeck[randomIndex]] = [fortuneDeck[randomIndex], fortuneDeck[i]];
    }

    // pop() draws from the end. Avoid repeating the previous cycle's final draw.
    const last = fortuneDeck.length - 1;
    if (fortuneDeck.length > 1 && fortuneDeck[last] === currentFortuneIndex) {
        const swapIndex = Math.floor(Math.random() * last);
        [fortuneDeck[last], fortuneDeck[swapIndex]] = [fortuneDeck[swapIndex], fortuneDeck[last]];
    }
}

// Draw every fortune once before refilling the deck.

function selectRandomFortune() {
    if (fortunes.length === 0) {
        return null;
    }

    if (fortuneDeck.length === 0) {
        shuffleFortuneDeck();
    }

    currentFortuneIndex = fortuneDeck.pop();

    return fortunes[currentFortuneIndex];
}

function setWindowMessage(english, arabic) {
    statusEnglish.textContent = english;
    statusArabic.textContent = arabic;
}

function renderFortuneText(fortune) {
    const isArabic = oracle.lang === "ar";
    const copy = isArabic ? fortune.ar : fortune;
    fortuneTitle.textContent = copy.title;
    fortuneText.textContent = isArabic ? `«${copy.fortune}»` : `"${copy.fortune}"`;
    fortuneOmen.textContent = copy.omen;
}

function syncOracleLanguage() {
    const isArabic = document.documentElement.lang === "ar";
    oracle.lang = isArabic ? "ar" : "en";
    oracle.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "نصائح كونية مجانية | صالة ألعاب MPGA" : englishPageTitle;
    ticketReturn.setAttribute("aria-label", isArabic ? "أعِد الرسالة الكونية" : "Return cosmic message");

    if (currentFortuneIndex !== -1) {
        renderFortuneText(fortunes[currentFortuneIndex]);
    }
}

// Display the selected fortune on the ticket.

function displayFortune(fortune) {
    if (!fortune) {
        setWindowMessage("The cosmos has misplaced its advice.", "أضاع الكون نصيحته.");
        return;
    }

    ticketNumber.textContent = fortune.number;
    miniTicketNumber.textContent = fortune.number;
    const illustration = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    illustration.setAttribute("viewBox", "0 0 160 120");
    illustration.setAttribute("aria-hidden", "true");
    const artwork = document.createElementNS("http://www.w3.org/2000/svg", "use");
    artwork.setAttribute("href", `images/cosmic-advice-illustrations.svg#art-${fortune.number}`);
    illustration.append(artwork);
    ticketSymbol.replaceChildren(illustration);
    renderFortuneText(fortune);

    miniTicket.classList.remove("dispense");
    miniTicket.hidden = true;

    // Restart the CSS ticket-dispensing animation.

    void miniTicket.offsetWidth;

    miniTicket.hidden = false;
    miniTicket.classList.add("dispense");
    fortuneTicket.hidden = false;
    oracleLayout.classList.add("has-advice");

    setWindowMessage("The universe has spoken!", "لقد تكلّم الكون!");
}

// Reveal a new fortune.

async function retractTicket(reducedMotion) {
    if (fortuneTicket.hidden) return;
    fortuneTicket.classList.remove("is-revealing", "is-retracting");
    if (!reducedMotion) {
        const ticket = fortuneTicket.getBoundingClientRect();
        const slot = dispenserSlot.getBoundingClientRect();
        const dx = slot.left + slot.width / 2 - (ticket.left + ticket.width / 2);
        const dy = slot.top + slot.height / 2 - (ticket.top + ticket.height / 2);
        advicePanel.classList.add("is-returning");
        try {
            const animation = fortuneTicket.animate([
                { transform: "perspective(900px) translate(0, 0) scale(1) rotateX(0)", opacity: 1, filter: "brightness(1)" },
                { transform: "perspective(900px) translate(0, 0) scale(.96) rotateX(8deg)", opacity: .8, filter: "brightness(1.15)", offset: .25 },
                { transform: `perspective(900px) translate(${dx}px, ${dy}px) scale(.12) rotateX(24deg)`, opacity: 0 }
            ], { duration: 420, easing: "ease-in-out", fill: "forwards" });
            await animation.finished.catch(() => {});
            fortuneTicket.hidden = true;
            animation.cancel();
        } catch (_) { fortuneTicket.hidden = true; }
        advicePanel.classList.remove("is-returning");
    } else {
        fortuneTicket.hidden = true;
    }
}

async function revealFortune() {
    if (revealBtn.disabled) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    revealBtn.disabled = true;
    ticketReturn.disabled = true;
    oracleLayout.classList.remove("is-scanning");
    void oracleLayout.offsetWidth;
    if (!reducedMotion) oracleLayout.classList.add("is-scanning");
    try {
        await retractTicket(reducedMotion);
        displayFortune(selectRandomFortune());
        fortuneTicket.classList.remove("is-revealing");
        void fortuneTicket.offsetWidth;
        if (!reducedMotion) {
            fortuneTicket.classList.add("is-revealing");
            await new Promise(resolve => window.setTimeout(resolve, 500));
        }
    } finally {
        oracleLayout.classList.remove("is-scanning");
        revealBtn.disabled = false;
        ticketReturn.disabled = false;
    }
}

async function returnTicket() {
    if (revealBtn.disabled || fortuneTicket.hidden) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    revealBtn.disabled = true;
    ticketReturn.disabled = true;
    try {
        await retractTicket(reducedMotion);
        miniTicket.hidden = true;
        miniTicket.classList.remove("dispense");
        oracleLayout.classList.remove("has-advice");
        setWindowMessage(...waitingStatus);
    } finally {
        revealBtn.disabled = false;
        ticketReturn.disabled = false;
        revealBtn.focus({ preventScroll: true });
    }
}

// Event listeners

const languageObserver = new MutationObserver(syncOracleLanguage);
languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
syncOracleLanguage();

revealBtn.addEventListener("click", revealFortune);
ticketReturn.addEventListener("click", returnTicket);

