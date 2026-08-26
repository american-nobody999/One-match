// js/main.js
//Author: Leslie Brockman
//Date modified: 08/26/2026
document.addEventListener('DOMContentLoaded', function() {
   // ============== LANGUAGE TOGGLE ==============
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

const englishLanguageSelectors = '.lang-en, .p-en, .h2-en, .h3-en, .caption-en, .intro-en, .learn-en';
const arabicLanguageSelectors = '.lang-ar, .p-ar, .h2-ar, .h3-ar, .caption-ar, .intro-ar, .learn-ar';

function setLanguageVisibility(selector, hide) {
    document.querySelectorAll(selector).forEach(el => {
        el.classList.toggle('hidden', hide);
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.documentElement.setAttribute('lang', currentLang);
    
    if (currentLang === 'ar') {
        langToggle.textContent = 'العربية | English';
        setLanguageVisibility(englishLanguageSelectors, true);
        setLanguageVisibility(arabicLanguageSelectors, false);
    } else {
        langToggle.textContent = 'English | العربية';
        setLanguageVisibility(englishLanguageSelectors, false);
        setLanguageVisibility(arabicLanguageSelectors, true);
    }
}

langToggle.addEventListener('click', toggleLanguage);

// Set initial state (English)
setLanguageVisibility(englishLanguageSelectors, false);
setLanguageVisibility(arabicLanguageSelectors, true);
    // ============== MOBILE MENU ==============
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        
        // Change hamburger icon
        menuToggle.textContent = isExpanded ? '☰' : '✕';
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });
    });

    // ============== QUEST TABS HAMBURGER (united.html) ==============
    const questTabsToggle = document.getElementById('quest-tabs-toggle');
    const questTabsList = document.getElementById('quest-tabs-list');

    if (questTabsToggle && questTabsList) {
        questTabsToggle.addEventListener('click', function() {
            const isExpanded = questTabsToggle.getAttribute('aria-expanded') === 'true';

            questTabsToggle.setAttribute('aria-expanded', !isExpanded);
            questTabsList.classList.toggle('active');
        });

        questTabsList.querySelectorAll('.source-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    questTabsList.classList.remove('active');
                    questTabsToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ============== VIDEO GALLERY CONTROLS ==============
    function initVideoGalleries() {
        const videoContainers = document.querySelectorAll('.video-container');
        
        videoContainers.forEach(container => {
            const video = container.querySelector('video');
            const initialPlayBtn = container.querySelector('.initial-play-btn');
            const overlay = container.querySelector('.video-overlay');
            const replayBtn = container.querySelector('.replay-btn');
            
            if (!video) return;

            // Initial play button
            if (initialPlayBtn) {
                initialPlayBtn.addEventListener('click', () => {
                    video.play();
                    initialPlayBtn.style.display = 'none';
                    if (overlay) overlay.classList.add('hidden');
                });
            }

            // Replay button
            if (replayBtn) {
                replayBtn.addEventListener('click', () => {
                    video.currentTime = 0;
                    if (overlay) overlay.classList.add('hidden');
                    video.play();
                });
            }

            // Show replay only when the video has ended
            video.addEventListener('ended', () => {
                if (overlay) overlay.classList.remove('hidden');
                if (initialPlayBtn) initialPlayBtn.style.display = 'none';
            });
        });
    }

    initVideoGalleries();

    function initEighthFrontTableReadMore() {
        const table = document.querySelector('.eighth-front-table');

        if (!table) {
            return;
        }

        const getReadMoreLabel = isExpanded => {
            if (document.documentElement.lang === 'ar') {
                return isExpanded ? 'عرض أقل' : 'اقرأ المزيد';
            }

            return isExpanded ? 'Show less' : 'Read more';
        };

        table.querySelectorAll('tbody td:not(.platform-cell), tbody .platform-cell .cell-pros').forEach(cell => {
            const copy = document.createElement('div');
            copy.className = 'table-cell-copy is-collapsed';
            copy.innerHTML = cell.innerHTML;

            const button = document.createElement('button');
            button.className = 'table-read-more';
            button.type = 'button';
            button.textContent = getReadMoreLabel(false);
            button.setAttribute('aria-expanded', 'false');

            cell.replaceChildren(copy, button);

            button.addEventListener('click', () => {
                const isExpanded = copy.classList.toggle('is-expanded');
                copy.classList.toggle('is-collapsed', !isExpanded);
                button.textContent = getReadMoreLabel(isExpanded);
                button.setAttribute('aria-expanded', String(isExpanded));
            });
        });

        langToggle?.addEventListener('click', () => {
            table.querySelectorAll('.table-read-more').forEach(button => {
                button.textContent = getReadMoreLabel(button.getAttribute('aria-expanded') === 'true');
            });
        });
    }

    initEighthFrontTableReadMore();

    // Standardize repetitive placeholder alt text on the Faces page.
    function normalizeFaceGalleryAltText() {
        if (!document.body.classList.contains('face-page')) {
            return;
        }

        let imageIndex = 0;
        document.querySelectorAll('.face-page .image-gallery img').forEach(img => {
            if (/^Image\s+\d+$/i.test(img.alt.trim())) {
                imageIndex += 1;
                img.alt = `Palestine faces gallery image ${imageIndex}`;
            }
        });
    }

    normalizeFaceGalleryAltText();

    // Red Door page intro: hold on black for 2 seconds, then reveal like a lit match.
    function initHomeMatchIntro() {
        const isReddoorPage = window.location.pathname.endsWith('/reddoor.html') ||
            window.location.pathname.endsWith('reddoor.html');

        if (!isReddoorPage || !document.body.classList.contains('reddoor-page')) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        document.body.classList.add('match-intro-active');

        window.setTimeout(() => {
            document.body.classList.add('match-intro-light');
        }, 2000);

        window.setTimeout(() => {
            document.body.classList.remove('match-intro-light');
            document.body.classList.remove('match-intro-active');
        }, 3700);
    }

    initHomeMatchIntro();

    /* =========================
       GET ELEMENTS
    ========================= */

    const giftImage = document.getElementById("giftImage");

    const popupOverlay = document.getElementById("popupOverlay");

    const backButton = document.getElementById("backButton");


    if (giftImage && popupOverlay && backButton) {
        /* =========================
           OPEN POPUP
        ========================= */

        giftImage.addEventListener("click", function () {

            // Stop the gift from shaking
            giftImage.classList.add("stopped");

            // Show the popup
            popupOverlay.classList.add("show");

            popupOverlay.setAttribute("aria-hidden", "false");

        });


        /* =========================
           BACK BUTTON
        ========================= */

        backButton.addEventListener("click", function () {

            // Hide the popup
            popupOverlay.classList.remove("show");

            popupOverlay.setAttribute("aria-hidden", "true");

        });


        /* =========================
           CLICK OUTSIDE POPUP
        ========================= */

        popupOverlay.addEventListener("click", function (event) {

            // Close when clicking the dark
            // background outside the popup

            if (event.target === popupOverlay) {

                popupOverlay.classList.remove("show");

                popupOverlay.setAttribute("aria-hidden", "true");

            }

        });


        /* =========================
           ESCAPE KEY
        ========================= */

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                popupOverlay.classList.remove("show");

                popupOverlay.setAttribute("aria-hidden", "true");

            }

        });
    }

    // ============== ACCESSIBILITY & KEYBOARD SUPPORT ==============
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const nav = document.querySelector('.main-nav');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        }
    });

    // ============== PERFORMANCE & CLEANUP ==============
    console.log('%cMPGA Website initialized successfully', 'color: #28a745; font-weight: bold;');
    
    // Optional: Add resize handler for responsive adjustments
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768) {
                const nav = document.querySelector('.main-nav');
                if (nav) nav.classList.remove('active');
            }
        }, 150);
    });
});

// Contact form submission
const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');
const submitBtn = document.getElementById('submitBtn');
const submitBtnEn = document.getElementById('submitBtnEn');
const submitBtnAr = document.getElementById('submitBtnAr');

function getContactCopy() {
    return {
        sending: {
            en: 'Sending...',
            ar: 'جارٍ الإرسال...'
        },
        idle: {
            en: 'Send Message',
            ar: 'إرسال الرسالة'
        },
        success: {
            en: 'Thank you! Your message has been sent.',
            ar: 'شكراً لكم. تم إرسال رسالتكم بنجاح.'
        },
        error: {
            en: 'Sorry, something went wrong. Please try again.',
            ar: 'عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.'
        },
        network: {
            en: 'Network error. Please check your connection.',
            ar: 'خطأ في الشبكة. يرجى التحقق من الاتصال.'
        }
    };
}

function setContactStatus(message, state) {
    if (!statusMessage) {
        return;
    }

    statusMessage.textContent = message;
    statusMessage.className = state ? `status-message ${state}` : 'status-message';
}

function getCurrentLanguage() {
    return document.documentElement.lang === 'ar' ? 'ar' : 'en';
}

function getLocalizedText(copyBlock) {
    return copyBlock[getCurrentLanguage()];
}

function setSubmitButtonLabel(copyBlock) {
    if (!submitBtnEn || !submitBtnAr) {
        return;
    }

    submitBtnEn.textContent = copyBlock.en;
    submitBtnAr.textContent = copyBlock.ar;
}

if (form && statusMessage && submitBtn && submitBtnEn && submitBtnAr) {
    setContactStatus('', '');
    setSubmitButtonLabel(getContactCopy().idle);

    form.addEventListener('submit', async event => {
        event.preventDefault();

        const copy = getContactCopy();
        submitBtn.disabled = true;
        setSubmitButtonLabel(copy.sending);
        setContactStatus('', '');

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    Accept: 'application/json'
                }
            });
            const result = await response.json().catch(() => null);

            if (response.ok) {
                form.reset();
                setContactStatus(getLocalizedText(copy.success), 'success');
            } else {
                console.error('Formspree submission failed:', response.status, result);
                const formspreeError = result?.errors?.[0]?.message || result?.error;
                const errorMessage = formspreeError
                    ? `${getLocalizedText(copy.error)} (${formspreeError})`
                    : getLocalizedText(copy.error);
                setContactStatus(errorMessage, 'error');
            }
        } catch (error) {
            setContactStatus(getLocalizedText(copy.network), 'error');
        }

        submitBtn.disabled = false;
        setSubmitButtonLabel(copy.idle);
    });

    document.getElementById('lang-toggle')?.addEventListener('click', () => {
        if (!submitBtn.disabled) {
            const copy = getContactCopy();
            setSubmitButtonLabel(copy.idle);
        }
    });
}

// Count down timer for January 20, 2029, next election cycle begins--this demonstrates the countdown timer functionality. Adjust the target date as needed.
const countdownElement = document.getElementById('countdown');
const targetDate = new Date('January 20, 2029 00:00:00').getTime();

function updateCountdown() {
    if (!countdownElement) {
        return;
    }

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.textContent = 'The election cycle has begun!';
        clearInterval(countdownInterval);
        return;
    }
// Calculate time components-seconds, minutes, hours, days, yes, I know how to program.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
//
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();  

// Legacy source tabs outside the single-card Hero directories.
document.querySelectorAll('.source-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.closest('.hero-page .journalist-tabs, .hero-page .research-source-tabs')) {
      return;
    }

    const targetId = tab.dataset.target;
    const card = document.getElementById(targetId);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }

    // Active state
    document.querySelectorAll('.source-tab').forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
  });
});

// Hero journalist, memorial, and research directories: independent single-card tabs.
document.querySelectorAll('.hero-page .journalist-tabs, .hero-page .research-source-tabs').forEach(tabList => {
  const gallery = tabList.nextElementSibling;
  const toggle = tabList.previousElementSibling;

  if (!(gallery?.classList.contains('journalist-gallery') || gallery?.classList.contains('research-sources-gallery')) ||
      !toggle?.classList.contains('journalist-menu-toggle')) {
    return;
  }

  const tabs = Array.from(tabList.querySelectorAll('.source-tab'));
  const cards = Array.from(gallery.querySelectorAll(':scope > .source-card'));
  const currentName = toggle.querySelector('.journalist-menu-current');

  const selectJournalist = tab => {
    const targetId = tab.dataset.target;

    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.setAttribute('tabindex', selected ? '0' : '-1');
    });

    cards.forEach(card => {
      const selected = card.id === targetId;
      card.classList.toggle('is-active', selected);
      card.hidden = !selected;
    });

    currentName.textContent = tab.textContent.trim();
    tabList.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  tabs.forEach((tab, index) => {
    const card = document.getElementById(tab.dataset.target);
    tab.setAttribute('aria-controls', tab.dataset.target);
    if (card) {
      card.setAttribute('role', 'tabpanel');
      card.setAttribute('aria-labelledby', `${tabList.id}-tab-${index + 1}`);
      tab.id = `${tabList.id}-tab-${index + 1}`;
    }

    tab.addEventListener('click', () => selectJournalist(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      selectJournalist(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });

  toggle.addEventListener('click', () => {
    const open = tabList.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    if (open) tabs.find(tab => tab.classList.contains('is-active'))?.focus();
  });

  selectJournalist(tabs[0]);
});
