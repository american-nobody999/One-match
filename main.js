document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('lang-toggle');
  // All English and Arabic elements
  const enElements = document.querySelectorAll('#h1-en, #h2-en, #p-en, .btn-en, #footer-text-en-main, #footer-text-en-copy, .home-en, #progress-en');
  const arElements = document.querySelectorAll('#h1-ar, #h2-ar, #p-ar, .btn-ar, #footer-text-ar-main, #footer-text-ar-copy, .home-ar, #progress-ar');
  let isArabic = false;

  toggleBtn.addEventListener('click', () => {
    isArabic = !isArabic;
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    enElements.forEach(el => el.classList.toggle('hidden', isArabic));
    arElements.forEach(el => el.classList.toggle('hidden', !isArabic));
    toggleBtn.textContent = isArabic ? 'العربية | English' : 'English | العربية';
  });
});
