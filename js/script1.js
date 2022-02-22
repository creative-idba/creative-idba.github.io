// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const menuTo = document.querySelector('.menu-to');
const nav = document.querySelector('header ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
  menuTo.classList.toggle('df');
});

menuTo.addEventListener('click', function () {
  nav.classList.toggle('slide');
  menuTo.classList.toggle('df');
});


// 
const windowHeight = window.innerHeight;
const sections = document.querySelectorAll('.sec');
const navigation = document.querySelector('.navigation');
function resetSelection() {
  for (var i = 0; i < navigation.children.length; i++) {
    navigation.children[i].classList.remove('selected');
  }
}
window.addEventListener('scroll', function () {
  scrollTop = window.scrollY;
  sections.forEach(function (section, i) {
    if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
      resetSelection();
      navigation.children[i].classList.add('selected');
    }
  });
});