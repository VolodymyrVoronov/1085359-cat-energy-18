var menu = document.querySelector (".main-nav");
var btn = document.querySelector (".main-header__btn-menu");
var header = document.querySelector(".main-header");
var logo = document.querySelector(".logo");

menu.classList.remove("main-nav--visible");
header.classList.remove("main-header--pt");
logo.classList.remove("logo--pt");


btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--visible");
  header.classList.toggle("main-header--pt");
  logo.classList.toggle("logo--pt");
  btn.classList.toggle("main-header__btn-menu--pt");
  btn.classList.toggle("main-header__btn-menu--open");
});