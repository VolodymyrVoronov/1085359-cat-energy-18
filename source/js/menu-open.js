"use strict";

var header = document.querySelector(".main-header");
var menu = header.querySelector(".main-nav");
var btn = header.querySelector(".main-header__btn-menu");
var logo = header.querySelector(".logo");

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
