document.addEventListener("DOMContentLoaded", () => {
  const garden = initRoseGarden();
  initLanguageToggle();
  initMemorials(garden);
  initButterflies();
});

function initRoseGarden() {
  const body = document.body;
  const entrance = document.querySelector("#garden-entrance");
  const garden = document.querySelector("#rose-garden");
  const enterButton = document.querySelector("#enter-garden");
  const dedicationModal = document.querySelector("#dedication-modal");
  const dedicationButton = document.querySelector("#accept-dedication");
  const firstMemorial = document.querySelector(".memorial-column");
  let dedicationShown = false;

  const closeDedication = () => closeDialog(dedicationModal, firstMemorial, () => {
    body.classList.remove("rose-page--locked");
  });

  enterButton.addEventListener("click", () => {
    entrance.classList.add("is-leaving");
    garden.classList.add("is-visible");
    garden.setAttribute("aria-hidden", "false");

    window.setTimeout(() => {
      entrance.hidden = true;
      if (!dedicationShown) {
        dedicationShown = true;
        openDialog(dedicationModal, dedicationButton);
      }
    }, prefersReducedMotion() ? 0 : 1700);
  });

  dedicationButton.addEventListener("click", closeDedication);
  dedicationModal.addEventListener("click", (event) => {
    if (event.target === dedicationModal) closeDedication();
  });

  return { garden, dedicationModal, closeDedication };
}

function initMemorials() {
  const memorials = {
    "memorial-one": {
      name: "Supreme Leader Ayatollah Ali Khamenei",
      image: "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/rose/tribute.jpg",
      alt: "Memorial artwork honoring Supreme Leader Ayatollah Ali Khamenei",
      dates: "1939–2026",
      biography: {
        en: [
          "Ayatollah Ali Khamenei (1939–2026) devoted much of his long life to faith, scholarship, service, and the people and country he loved. Born in the holy city of Mashhad, he began religious studies at a young age, eventually becoming a prominent Islamic scholar and one of the most consequential figures in modern Iranian history. He served as president of Iran before becoming Supreme Leader in 1989, a responsibility he carried for more than three decades.",
          "To countless people who admired him, Khamenei was far more than a political leader. He was a religious teacher, a scholar of Islam, a student and lover of Persian poetry and literature, a husband, a father, and an enduring symbol of Iranian independence and resistance to foreign domination.",
          "Following his death on February 28, 2026, enormous crowds gathered in mourning. His funeral observances stretched across Iran and Iraq, filling streets and holy places with people carrying his image, praying, grieving, and saying farewell. It was a true honor for MPGA to witness and accompany the family home as he was finally laid to rest in Mashhad. Whatever history ultimately writes about his long and complicated leadership, the depth of mourning surrounding his passing reflected the profound place he held in the hearts of many.",
          "**May he rest in peace, remembered by those who loved him and carried his memory home.**"
        ],
        ar: []
      },
      remembrance: ""
    },
    "memorial-two": {
      name: "Hudhayfah Samir Abdullah al-Kahlout",
      image: "https://raw.githubusercontent.com/american-nobody999/three-match-image/main/image/rose/abu-1.jpg",
      alt: "Memorial artwork honoring Hudhayfah Samir Abdullah al-Kahlout",
      dates: "",
      biography: {
        en: [
          "For many people around the world, he was known only by a name and a voice: Abu Obeida. Behind the red keffiyeh, however, was **Hudhayfah Samir Abdullah al-Kahlout**, a Palestinian man whose life began among the people and crowded streets of the Jabalia refugee camp in northern Gaza.",
          "Born around 1984–1985, Hudhayfah grew up in Jabalia and attended UNRWA schools before continuing his education at the Islamic University of Gaza. He later earned a master's degree in Islamic studies, with his academic work focused on religious interpretation and the Holy Land. Over the years, his voice became recognized far beyond Gaza as people across Palestine, the Arab world, and international media listened closely to his words.",
          "His public life cannot tell us everything about the man behind that voice. Away from cameras and speeches, Hudhayfah was also a husband and father, a son, brother, uncle, and friend. Those who loved him knew a person beyond the name by which the world knew him—a private life largely hidden from public view.",
          "Hudhayfah was killed in an Israeli airstrike in Gaza City on **August 30, 2025**. For months, his fate remained publicly unconfirmed. On December 29, his death was formally announced and the identity behind Abu Obeida was finally revealed.",
          "Whatever history ultimately writes about the conflict that surrounded his life, Hudhayfah was more than a symbol, a covered face, or a voice heard through a screen. He was a Palestinian human being with a family, a childhood, an education, convictions, and a story, advocating for humanitarian rights, an end to conflicts, and the preservation of the Palestinian right to exist.",
          "Today, we remember the human being behind the keffiyeh.",
          "May Hudhayfah and his family rest in peace. Palestine remains free."
        ],
        ar: [
          "بالنسبة للكثيرين حول العالم، لم يكن معروفًا إلا باسم وصوت: أبو عبيدة. لكن خلف الكوفية الحمراء، كان هناك حذيفة سمير عبدالله الكحلوت، رجل فلسطيني بدأت حياته بين الناس وفي الشوارع المزدحمة لمخيم جباليا للاجئين في شمال غزة.",
          "وُلِد حذيفة حوالي عام 1984-1985، ونشأ في جباليا والتحق بمدارس الأونروا قبل أن يواصل تعليمه في الجامعة الإسلامية بغزة. وحصل لاحقًا على درجة الماجستير في الدراسات الإسلامية، وركز عمله الأكاديمي على التفسير الديني والأرض المقدسة. وعلى مر السنين، أصبح صوته معروفًا خارج حدود غزة، حيث استمع إلى كلماته عن كثب الناس في فلسطين والعالم العربي ووسائل الإعلام الدولية.",
          "لا يمكن لحياته العامة أن تخبرنا بكل شيء عن الرجل الذي يقف خلف ذلك الصوت. بعيدًا عن الكاميرات والخطابات، كان حذيفة أيضًا زوجًا وأبًا، وابنًا وأخًا وعمًا وصديقًا. أولئك الذين أحبوه عرفوا شخصًا يتجاوز الاسم الذي عرفه به العالم — حياة خاصة ظلت إلى حد كبير بعيدة عن الأنظار.",
          "قُتل حذيفة في غارة جوية إسرائيلية على مدينة غزة في 30 أغسطس 2025. ولأشهر، ظل مصيره غير مؤكد علنًا. وفي 29 ديسمبر، أُعلن رسميًا عن وفاته وكُشفت أخيرًا الهوية التي تقف خلف اسم أبو عبيدة.",
          "مهما كتب التاريخ في نهاية المطاف عن الصراع الذي أحاط بحياته، كان حذيفة أكثر من مجرد رمز، أو وجه مغطى، أو صوت يُسمع عبر شاشة. كان إنسانًا فلسطينيًا له عائلة وطفولة وتعليم وقناعات وقصة، يدافع عن الحقوق الإنسانية، وإنهاء النزاعات، والحفاظ على حق الفلسطينيين في الوجود.",
          "اليوم، نتذكر الإنسان الذي كان خلف الكوفية.",
          "لترقد روح حذيفة وعائلته بسلام. تبقى فلسطين حرة."
        ]
      },
      remembrance: ""
    }
  };

  const modal = document.querySelector("#memorial-modal");
  const closeButton = document.querySelector("#close-memorial");
  const image = document.querySelector("#memorial-image");
  const name = document.querySelector("#memorial-name");
  const dates = document.querySelector("#memorial-dates");
  const biography = document.querySelector("#memorial-biography");
  const remembrance = document.querySelector("#memorial-remembrance");
  let returnFocus = null;

  const openMemorial = (key, trigger) => {
    const memorial = memorials[key];
    if (!memorial) return;
    returnFocus = trigger;
    image.src = memorial.image;
    image.alt = memorial.alt;
    name.textContent = memorial.name;
    dates.textContent = memorial.dates;
    dates.hidden = !memorial.dates;
    renderBiography(biography, memorial.biography);
    remembrance.textContent = memorial.remembrance;
    remembrance.hidden = !memorial.remembrance;
    openDialog(modal, closeButton);
  };

  const closeMemorial = () => closeDialog(modal, returnFocus);

  document.querySelectorAll(".memorial-column[data-memorial]").forEach((column) => {
    column.addEventListener("click", () => openMemorial(column.dataset.memorial, column));
  });

  closeButton.addEventListener("click", closeMemorial);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeMemorial();
  });
}

function renderBiography(container, content) {
  container.replaceChildren();

  [
    { language: "en", direction: "ltr", label: "English" },
    { language: "ar", direction: "rtl", label: "العربية" }
  ].forEach(({ language, direction, label }) => {
    const paragraphs = content?.[language] || [];
    if (!paragraphs.length) return;

    const section = document.createElement("section");
    section.className = `memorial-biography__language memorial-biography__language--${language} lang-${language}`;
    section.lang = language;
    section.dir = direction;
    section.setAttribute("aria-label", label);
    section.hidden = language !== (document.body.dataset.language || "en");

    paragraphs.forEach((copy, index) => {
      const paragraph = document.createElement("p");
      appendBiographyCopy(paragraph, copy);
      if (index === paragraphs.length - 1 && paragraphs.length > 1) {
        paragraph.className = "memorial-biography__closing";
      }
      section.append(paragraph);
    });

    container.append(section);
  });
}

function initLanguageToggle() {
  const toggle = document.querySelector("#garden-language-toggle");
  if (!toggle) return;

  document.body.dataset.language = "en";

  toggle.addEventListener("click", () => {
    const language = document.body.dataset.language === "ar" ? "en" : "ar";
    document.body.dataset.language = language;
    toggle.setAttribute("aria-pressed", String(language === "ar"));
    toggle.setAttribute("aria-label", language === "ar" ? "Switch memorial text to English" : "تبديل نص النصب التذكاري إلى العربية");

    document.querySelectorAll(".memorial-biography__language").forEach((section) => {
      section.hidden = !section.classList.contains(`lang-${language}`);
    });

    document.querySelectorAll(".lang-en").forEach((element) => {
      element.hidden = language === "ar";
    });
    document.querySelectorAll(".lang-ar").forEach((element) => {
      element.hidden = language !== "ar";
    });
  });
}

function appendBiographyCopy(paragraph, copy) {
  copy.split(/(\*\*.*?\*\*)/).forEach((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const emphasis = document.createElement("strong");
      emphasis.textContent = part.slice(2, -2);
      paragraph.append(emphasis);
    } else {
      paragraph.append(part);
    }
  });
}

function initButterflies() {
  const field = document.querySelector("#butterfly-field");
  if (!field || prefersReducedMotion()) return;
  createButterflies(field, 8);
}

function createButterflies(field, count) {
  const colors = ["#e9c984", "#d99c86", "#f0dfb2", "#bd8fa9"];
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < count; index += 1) {
    const butterfly = document.createElement("span");
    butterfly.className = "butterfly";
    butterfly.setAttribute("aria-hidden", "true");
    butterfly.style.setProperty("--start-x", `${8 + Math.random() * 84}%`);
    butterfly.style.setProperty("--duration", `${17 + Math.random() * 15}s`);
    butterfly.style.setProperty("--delay", `${-Math.random() * 24}s`);
    butterfly.style.setProperty("--scale", `${0.65 + Math.random() * 0.75}`);
    butterfly.style.setProperty("--sway-a", `${-65 + Math.random() * 130}px`);
    butterfly.style.setProperty("--sway-b", `${-100 + Math.random() * 200}px`);
    butterfly.style.setProperty("--sway-c", `${-140 + Math.random() * 280}px`);
    butterfly.style.setProperty("--wing-color", colors[index % colors.length]);
    fragment.append(butterfly);
  }

  field.append(fragment);
}

function openDialog(modal, initialFocus) {
  modal.hidden = false;
  document.body.classList.add("rose-page--locked");
  requestAnimationFrame(() => modal.classList.add("is-open"));
  window.setTimeout(() => initialFocus.focus(), prefersReducedMotion() ? 0 : 80);
  modal.addEventListener("keydown", trapDialogFocus);
}

function closeDialog(modal, returnFocus, afterClose) {
  if (modal.hidden) return;
  modal.classList.remove("is-open");
  modal.removeEventListener("keydown", trapDialogFocus);
  window.setTimeout(() => {
    modal.hidden = true;
    document.body.classList.remove("rose-page--locked");
    if (afterClose) afterClose();
    if (returnFocus && !returnFocus.hidden) returnFocus.focus();
  }, prefersReducedMotion() ? 0 : 550);
}

function trapDialogFocus(event) {
  const modal = event.currentTarget;
  if (event.key === "Escape") {
    const closeButton = modal.querySelector("#accept-dedication, #close-memorial");
    closeButton?.click();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = [...modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.disabled && !element.hidden);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
