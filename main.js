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

//speak//
const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
  // Toggle header title
  document.getElementById('h1-en').classList.toggle('hidden');
  document.getElementById('h1-ar').classList.toggle('hidden');

  // Toggle home button
  const homeEn = document.querySelectorAll('.home-en');
  const homeAr = document.querySelectorAll('.home-ar');
  homeEn.forEach(el => el.classList.toggle('hidden'));
  homeAr.forEach(el => el.classList.toggle('hidden'));

  // Toggle gallery titles
  const galleryTitlesEn = document.querySelectorAll('.gallery-title-en');
  const galleryTitlesAr = document.querySelectorAll('.gallery-title-ar');
  galleryTitlesEn.forEach(el => el.classList.toggle('hidden'));
  galleryTitlesAr.forEach(el => el.classList.toggle('hidden'));

  // Toggle video captions
  const captionsEn = document.querySelectorAll('.caption-en');
  const captionsAr = document.querySelectorAll('.caption-ar');
  captionsEn.forEach(el => el.classList.toggle('hidden'));
  captionsAr.forEach(el => el.classList.toggle('hidden'));

  // Toggle footer
  document.getElementById('footer-text-en-main').classList.toggle('hidden');
  document.getElementById('footer-text-ar-main').classList.toggle('hidden');
  document.getElementById('footer-text-en-copy').classList.toggle('hidden');
  document.getElementById('footer-text-ar-copy').classList.toggle('hidden');
});
