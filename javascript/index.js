/**
 * Logic of hamburguer menu
 */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuIcon = document.querySelector(".menu-icon");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-visible");
  navMenuIcon.classList.toggle("menu-open");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Close menu");
  } else {
    navToggle.setAttribute("aria-label", "Open menu");
  }
});

/**
 * Logic of welcome section
 */
let typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
  backSpeed: 1000,
});

const fileUrl = "test.txt"; // provide file location

fetch(fileUrl)
  .then((r) => r.text())
  .then((t) => console.log(t));

let elem = document.querySelector(".main-carousel");
let flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  autoPlay: 20000,
});
