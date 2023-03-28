const menu = document.querySelector(".navbar--toggle-menu");
const menuLinks = document.querySelector(".navbar--menu");
const buttonBtn = document.querySelector(".button");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
