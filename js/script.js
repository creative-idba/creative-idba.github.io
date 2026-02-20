/**
 * SCROLL ANIMATION OPTIMIZED (Mobile + Desktop)
 * Ganti seluruh kode scroll animation lama dengan ini
 */

// 1. CACHE SEMUA ELEMENT (Agar tidak query berulang-ulang saat scroll)
const elements = {
  header: document.querySelector('header'),
  backTop: document.querySelector('.back-top'),
  faArrow: document.querySelector('.fa-arrow-circle-up'),
  about: {
    h3: document.querySelector('.abh3'),
    h4: document.querySelector('.about-h4'),
    p: document.querySelector('.about-p')
  },
  medsos: {
    h3: document.querySelector('.meh3'),
    spans: [
      document.querySelector('.medpani'),
      document.querySelector('.medpany'),
      document.querySelector('.medpanf'),
      document.querySelector('.medpang'),
      document.querySelector('.medpanl')
    ],
    icons: [
      document.querySelector('#medii'),
      document.querySelector('#mediy'),
      document.querySelector('#medif'),
      document.querySelector('#medig'),
      document.querySelector('#medil')
    ]
  },
  service: {
    h3: document.querySelector('.seh3'),
    cols: [
      document.querySelector('.se-col1'),
      document.querySelector('.se-col2'),
      document.querySelector('.se-col3'),
      document.querySelector('.se-col4'),
      document.querySelector('.se-col5')
    ]
  },
  projects: {
    h3: document.querySelector('.proh3'),
    cols: [
      document.querySelector('.pro-col1'),
      document.querySelector('.pro-col2'),
      document.querySelector('.pro-col3'),
      document.querySelector('.pro-col4'),
      document.querySelector('.pro-col5')
    ]
  }
};

// 2. FUNGSI THROTTLE (Membatasi eksekusi agar scroll di HP tidak berat)
function throttle(func, delay) {
  let timeout = false;
  return function (...args) {
    if (timeout) return;
    timeout = true;
    func.apply(this, args);
    setTimeout(() => { timeout = false; }, delay);
  };
}

// 3. FUNGSI HITUNG THRESHOLD RESPONSIF
// Di HP (max-width 768px), threshold dikalikan 0.65 agar animasi muncul lebih awal
function getThreshold(basePx) {
  if (window.innerWidth <= 768) {
    return basePx * 0.65;
  }
  return basePx;
}

// 4. FUNGSI UTAMA ANIMASI (Dipanggil saat scroll)
function runAnimations() {
  const scrollY = window.scrollY;

  // --- NAVBAR ---
  if (elements.header) {
    elements.header.classList.toggle('sticky', scrollY > 480);
  }

  // --- BACK TO TOP ---
  if (elements.backTop) {
    elements.backTop.classList.toggle('back-topp', scrollY > 480);
  }
  if (elements.faArrow) {
    elements.faArrow.classList.toggle('faArrowCircleUp', scrollY > 480);
  }

  // --- ABOUT SECTION ---
  if (elements.about.h3) {
    elements.about.h3.classList.toggle('animate-abh3', scrollY > getThreshold(750));
  }
  if (elements.about.h4) {
    elements.about.h4.classList.toggle('typing-about-h4', scrollY > getThreshold(850));
  }
  if (elements.about.p) {
    elements.about.p.classList.toggle('animate-abp', scrollY > getThreshold(850));
  }

  // --- MEDSOS SECTION ---
  if (elements.medsos.h3) {
    elements.medsos.h3.classList.toggle('animate-meh3', scrollY > getThreshold(1000));
  }
  
  // Loop untuk spans medsos
  elements.medsos.spans.forEach(el => {
    if (el) el.classList.toggle('scale-medsos-span', scrollY > getThreshold(1100));
  });
  
  // Loop untuk icons medsos
  elements.medsos.icons.forEach(el => {
    if (el) el.classList.toggle('rotate-medsos-i', scrollY > getThreshold(1100)); 
    // Catatan: Jika setiap icon punya class rotate berbeda (rotate-medsos-y, dll),
    // silakan disesuaikan loop-nya atau dipanggil manual seperti kode asli.
  });

  // --- SERVICE SECTION ---
  if (elements.service.h3) {
    elements.service.h3.classList.toggle('animate-seh3', scrollY > getThreshold(1350));
  }
  
  // Kolom 1-3 (threshold 1450)
  for (let i = 0; i < 3; i++) {
    if (elements.service.cols[i]) {
      elements.service.cols[i].classList.toggle('animate-col', scrollY > getThreshold(1450));
    }
  }
  // Kolom 4-5 (threshold 1600)
  for (let i = 3; i < 5; i++) {
    if (elements.service.cols[i]) {
      elements.service.cols[i].classList.toggle('animate-col', scrollY > getThreshold(1600));
    }
  }

  // --- PROJECTS SECTION ---
  if (elements.projects.h3) {
    elements.projects.h3.classList.toggle('animate-proh3', scrollY > getThreshold(1850));
  }
  
  // Kolom 1-3 (threshold 1900)
  for (let i = 0; i < 3; i++) {
    if (elements.projects.cols[i]) {
      elements.projects.cols[i].classList.toggle(`animate-col${i + 1}`, scrollY > getThreshold(1900));
    }
  }
  // Kolom 4-5 (threshold 2100)
  for (let i = 3; i < 5; i++) {
    if (elements.projects.cols[i]) {
      elements.projects.cols[i].classList.toggle(`animate-col${i + 1}`, scrollY > getThreshold(2100));
    }
  }
}

// 5. PASANG EVENT LISTENER
// Throttle 16ms (~60fps) + passive:true agar scroll HP halus
window.addEventListener('scroll', throttle(runAnimations, 16), { passive: true });

// 6. JALANKAN SEKALI SAAT LOAD
// Agar jika user refresh di tengah halaman, animasi tetap sesuai posisinya
window.addEventListener('load', runAnimations);

// 7. RECALCULATE SAAT RESIZE
// Jika user memutar layar HP (portrait <-> landscape), threshold dihitung ulang
let resizeTimeout;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(runAnimations, 200);
});