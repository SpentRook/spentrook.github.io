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

/**
 * Logic with Observer
 */

const options = {
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0.12,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.nav-menu-item a[href="#${id}"`);

    entry.isIntersecting
      ? menuLink.classList.add("nav-menu-link_active")
      : menuLink.classList.remove("nav-menu-link_active");
  });
}, options);

const navLinks = document.querySelectorAll(".nav-menu-link");
navLinks.forEach((navLink) => {
  const address = navLink.getAttribute("href");
  const target = document.querySelector(address);

  if (target) {
    observer.observe(target);
  }
});
