// gallery

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");


function openFullImg(pic) {
  fullImgBox.style.display = "flex" ;
  fullImg.src = pic;

}

function closeFullImg() {
  fullImgBox.style.display = "none" ;
}






// -----------------------------------------------------
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
// sticky navigation

window.addEventListener("scroll" , function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});
// --------------------------------------------------