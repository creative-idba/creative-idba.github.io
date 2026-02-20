// Animate Navbar
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 480);
});

// Animate Back top
window.addEventListener('scroll', function () {
  var backTop = document.querySelector('.back-top');
  var faArrowCircleUp = document.querySelector('.fa-arrow-circle-up');

  backTop.classList.toggle('back-topp', window.scrollY > 480);
  faArrowCircleUp.classList.toggle('faArrowCircleUp', window.scrollY > 480);
});

// Animate About
window.addEventListener('scroll', function () {
  var about = document.querySelector('.abh3');
  var aboutH4 = document.querySelector('.about-h4');
  var aboutP = document.querySelector('.about-p');

  about.classList.toggle('animate-abh3', window.scrollY > 750);
  aboutH4.classList.toggle('typing-about-h4', window.scrollY > 850);
  aboutP.classList.toggle('animate-abp', window.scrollY > 850);
});

// Animate Medsos
window.addEventListener('scroll', function () {
  var medsos = document.querySelector('.meh3');
  var medpani = document.querySelector('.medpani');
  var medpany = document.querySelector('.medpany');
  var medpanf = document.querySelector('.medpanf');
  var medpang = document.querySelector('.medpang');
  var medpanl = document.querySelector('.medpanl');
  var medii = document.querySelector('#medii');
  var mediy = document.querySelector('#mediy');
  var medif = document.querySelector('#medif');
  var medig = document.querySelector('#medig');
  var medil = document.querySelector('#medil');

  medsos.classList.toggle('animate-meh3', window.scrollY > 1000);
  medpani.classList.toggle('scale-medsos-span', window.scrollY > 1100);
  medpany.classList.toggle('scale-medsos-span', window.scrollY > 1100);
  medpanf.classList.toggle('scale-medsos-span', window.scrollY > 1100);
  medpang.classList.toggle('scale-medsos-span', window.scrollY > 1100);
  medpanl.classList.toggle('scale-medsos-span', window.scrollY > 1100);
  medii.classList.toggle('rotate-medsos-i', window.scrollY > 1100);
  mediy.classList.toggle('rotate-medsos-y', window.scrollY > 1100);
  medif.classList.toggle('rotate-medsos-f', window.scrollY > 1100);
  medig.classList.toggle('rotate-medsos-g', window.scrollY > 1100);
  medil.classList.toggle('rotate-medsos-l', window.scrollY > 1100);
});

// Animate Service
window.addEventListener('scroll', function () {
  var service = document.querySelector('.seh3');
  var seCol1 = document.querySelector('.se-col1');
  var seCol2 = document.querySelector('.se-col2');
  var seCol3 = document.querySelector('.se-col3');
  var seCol4 = document.querySelector('.se-col4');
  var seCol5 = document.querySelector('.se-col5');

  service.classList.toggle('animate-seh3', window.scrollY > 1350);
  seCol1.classList.toggle('animate-col', window.scrollY > 1450);
  seCol2.classList.toggle('animate-col', window.scrollY > 1450);
  seCol3.classList.toggle('animate-col', window.scrollY > 1450);
  seCol4.classList.toggle('animate-col', window.scrollY > 1600);
  seCol5.classList.toggle('animate-col', window.scrollY > 1600);
});

// Animate Projects
window.addEventListener('scroll', function () {
  var projects = document.querySelector('.proh3');
  var proCol1 = document.querySelector('.pro-col1');
  var proCol2 = document.querySelector('.pro-col2');
  var proCol3 = document.querySelector('.pro-col3');
  var proCol4 = document.querySelector('.pro-col4');
  var proCol5 = document.querySelector('.pro-col5');

  projects.classList.toggle('animate-proh3', window.scrollY > 1850);
  proCol1.classList.toggle('animate-col1', window.scrollY > 1900);
  proCol2.classList.toggle('animate-col2', window.scrollY > 1900);
  proCol3.classList.toggle('animate-col3', window.scrollY > 1900);
  proCol4.classList.toggle('animate-col4', window.scrollY > 2100);
  proCol5.classList.toggle('animate-col5', window.scrollY > 2100);
});