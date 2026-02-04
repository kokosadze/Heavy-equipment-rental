const navbar = document.querySelector(".active");
const navMenu = document.querySelector(".nav__active");

navbar.addEventListener("click", function () {
  navMenu.classList.toggle("nav__active");
});
 