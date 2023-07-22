

// hamburger menu

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

// end of hamburger
// -------------------

// active nav links

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function changeLinkState() {
  let index = sections.length - 1;

  while (
    index >= 0 &&
    (window.scrollY + window.innerHeight < sections[index].offsetTop ||
      window.scrollY > sections[index].offsetTop + sections[index].offsetHeight)
  ) {
    index--;
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  if (index >= 0) {
    navLinks[index].classList.add("active");
  }
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);






// end of active
// -------------------

// sticky navigation

window.addEventListener("scroll" , function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
// --------------------------------------------------
