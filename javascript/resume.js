const leftToggleButton = document.querySelector(".toggle");
const leftToggle = document.querySelector(".left-container");

leftToggleButton.addEventListener("click",()=>{
    leftToggle.classList.toggle("left-container-visible");
    leftToggleButton.classList.toggle("toggle-reverse");
});

window.addEventListener("resize", ()=>{
    let heightProjectItems = (Array.from(document.querySelectorAll('.project-item')).map((item)=>{
        return item.clientHeight;
    }));
   

    document.documentElement.style.setProperty('--height-experience-item1', (heightProjectItems[0]-40)+'px');
    document.documentElement.style.setProperty('--height-experience-item2', (heightProjectItems[1]-40)+'px');

    
});

let heightLeftContainer = document.querySelector('.main-container').clientHeight; 


