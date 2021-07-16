const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navFas = Array.from(document.querySelectorAll(".nav-toggle .fas"));

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
    navFas.map((element)=>{
        return element.classList.toggle("fas-hidden");
    });

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Close menu");
    }else{
        navToggle.setAttribute("aria-label", "Open menu")
    }
});