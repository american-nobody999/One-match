// js/main.js
document.addEventListener('DOMContentLoaded', function() {
   // ============== LANGUAGE TOGGLE ==============
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.documentElement.setAttribute('lang', currentLang);
    
    if (currentLang === 'ar') {
        langToggle.textContent = 'العربية | English';
        document.querySelectorAll('.lang-en').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.lang-ar').forEach(el => el.classList.remove('hidden'));
    } else {
        langToggle.textContent = 'English | العربية';
        document.querySelectorAll('.lang-en').forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.lang-ar').forEach(el => el.classList.add('hidden'));
    }
}

langToggle.addEventListener('click', toggleLanguage);

// Set initial state (English)
document.querySelectorAll('.lang-ar').forEach(el => el.classList.add('hidden'));
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
                    if (overlay) overlay.classList.remove('hidden');
                });
            }

            // Replay button
            if (replayBtn) {
                replayBtn.addEventListener('click', () => {
                    video.currentTime = 0;
                    video.play();
                });
            }

            // Hide overlay when video ends
            video.addEventListener('ended', () => {
                if (overlay) overlay.classList.add('hidden');
                if (initialPlayBtn) initialPlayBtn.style.display = 'block';
            });
        });
    }

    initVideoGalleries();

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
