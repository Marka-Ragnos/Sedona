var mainNav = document.querySelector(".main-nav");
var toggle = document.querySelector(".page-header__toggle");
var logo = document.querySelector(".page-header__logo-image");

mainNav.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
    toggle.classList.remove("page-header__toggle--closed");
    toggle.classList.add("page-header__toggle--opened");
    logo.classList.remove("page-header__logo-image--closed");
    logo.classList.add("page-header__logo-image--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
    toggle.classList.remove("page-header__toggle--opened");
    toggle.classList.add("page-header__toggle--closed");
    logo.classList.remove("page-header__logo-image--opened");
    logo.classList.add("page-header__logo-image--closed");
  }
});
