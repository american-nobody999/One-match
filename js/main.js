// js/main.js
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

            if (response.ok) {
                form.reset();
                setContactStatus(getLocalizedText(copy.success), 'success');
            } else {
                setContactStatus(getLocalizedText(copy.error), 'error');
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

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();  
