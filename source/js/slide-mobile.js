"use strict";

var slider = document.querySelector(".example__slide");
var photoBefore = slider.querySelector(".slide-example__photo--before");
var photoAfter = slider.querySelector(".slide-example__photo--after");

var btnBefore = slider.querySelector(".slide-example__toggle--before");
var btnAfter = slider.querySelector(".slide-example__toggle--after");

var indicator = slider.querySelector(".slide-example__indicator");

btnBefore.addEventListener("click", function (evt) {
  evt.preventDefault();
});

btnAfter.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoAfter.classList.add("slide-example__photo--visible");
  photoBefore.classList.add("slide-example__photo--invisible");
  indicator.classList.add("slide-example__indicator--on");
});

btnBefore.addEventListener("click", function (evt) {
  evt.preventDefault();
  photoAfter.classList.remove("slide-example__photo--visible");
  photoBefore.classList.remove("slide-example__photo--invisible");
  indicator.classList.remove("slide-example__indicator--on");
});
