document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('lang-toggle');
  // All English and Arabic elements
  const enElements = document.querySelectorAll('#h1-en, #h2-en, #p-en, .btn-en, #footer-text-en-main, #footer-text-en-copy, .home-en, #progress-en, #letter-en, .gallery-title-en, .caption-en, .intro-en, .learn-en, .disclaimer-en, .video-title-en, .replay-en');
  const arElements = document.querySelectorAll('#h1-ar, #h2-ar, #p-ar, .btn-ar, #footer-text-ar-main, #footer-text-ar-copy, .home-ar, #progress-ar, #letter-ar, .gallery-title-ar, .caption-ar, .intro-ar, .learn-ar, .disclaimer-ar, .video-title-ar, .replay-ar');
  let isArabic = false;

  toggleBtn.addEventListener('click', () => {
    isArabic = !isArabic;
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    enElements.forEach(el => el.classList.toggle('hidden', isArabic));
    arElements.forEach(el => el.classList.toggle('hidden', !isArabic));
    toggleBtn.textContent = isArabic ? 'العربية | English' : 'English | العربية';
  });

  // YouTube video overlay control
  const overlay = document.getElementById('video-overlay');
  const replayBtn = document.getElementById('replay-btn');
  const videoIframe = document.getElementById('edu-video');
  
  if (overlay && replayBtn && videoIframe) {
    // Show overlay after 3 minutes (video duration approximation)
    let videoTimeout;
    
    const showOverlay = () => {
      overlay.classList.remove('hidden');
    };
    
    const hideOverlay = () => {
      overlay.classList.add('hidden');
    };
    
    // Show overlay after approximately video duration (adjust time as needed)
    videoIframe.addEventListener('load', () => {
      videoTimeout = setTimeout(showOverlay, 133000); // 2 minutes 13 seconds
    });
    
    replayBtn.addEventListener('click', () => {
      hideOverlay();
      // Reload iframe to restart video
      const src = videoIframe.src;
      videoIframe.src = '';
      videoIframe.src = src;
      clearTimeout(videoTimeout);
      videoTimeout = setTimeout(showOverlay, 133000);
    });
  }
});
