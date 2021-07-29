/**
 * Logic of hamburguer menu
 */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navFas = Array.from(document.querySelectorAll(".nav-toggle .fas"));

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
    navFas.map((element) => {
        return element.classList.toggle("fas-hidden");
    });

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Close menu");
    } else {
        navToggle.setAttribute("aria-label", "Open menu")
    }
});

const timeInit = 1000;
const timeGap = 1000;
const timeChar = 40;
const cursorChar = '&#9608;';



/*const textElementsos = Array.from(document.querySelectorAll(".line-text-typed"));
let textFormatted = textElementsos.map((element) => {
    return element.innerHTML;
});
let typeWriter = (index)=>{
    let loc = 

}*/


const textElements = ['line1', 'line2', 'line3'];
let originText = new Array();
for (let i = 0; i < textElements.length; i++) {
    originText.push(document.getElementById(textElements[i]).innerHTML);
}
let cursorLine = document.getElementById('cursor-line');
let currentTimeout;
let showCursor;
let typeWriter = function (index) {
    let loc = document.getElementById(textElements[index]);
    let fullText = originText[index];
    let letterCount = 0;
    let typeLetter = function () {
        currentTimeout = setTimeout(function () {
            loc.className = 'visible';
            letterCount += 1;
            let showText = fullText.substring(0, letterCount);
            if (letterCount === fullText.length) {
                loc.innerHTML = '&gt;&gt; ' + showText;
            } else {
                loc.innerHTML = '&gt;&gt; ' + showText + '<span class="typed-cursor">' + cursorChar + '</span>';
                typeLetter();
            }
        }, timeChar);
    };
    typeLetter();
    let totalTime = fullText.length * timeChar + timeChar;
    showCursor = setTimeout(function () {
        document.getElementById('cursor-line').className = 'visible';
    }, totalTime);
};
let delayTime = [timeInit];
let cumulativeDelayTime = [timeInit];
for (let i = 0; i < textElements.length; i++) {
    let elapsedTimeLine = originText[i].length * timeChar + timeGap + timeChar * 2;
    delayTime.push(elapsedTimeLine);
    let sum = 0;
    for (let j = 0; j < delayTime.length; j++) {
        sum += delayTime[j];
    }
    ; cumulativeDelayTime.push(sum);
};
let typeLineTimeout = new Array();
for (let i = 0; i < textElements.length; i++) {
    typeLineTimeout[i] = setTimeout((function (index) {
        return function () {
            cursorLine.className = 'hidden';
            typeWriter(index);
        }
    })(i), cumulativeDelayTime[i]);
};
let skip = function () {
    clearTimeout(currentTimeout);
    clearTimeout(showCursor);
    for (let i = 0; i < typeLineTimeout.length; i++) {
        clearTimeout(typeLineTimeout[i]);
    }
    ;
};
let rewriteText = function (element, index, array) {
    let loc = document.getElementById(element);
    loc.innerHTML = '&gt;&gt; ' + originText[index];
    loc.className = 'visible';
};
window.onkeydown = function (key) {
    if (key.which === 13 || key.which === 32) {
        skip();
        textElements.forEach(rewriteText);
        document.getElementById('cursor-line').className = 'visible';
    }
};

/** 
 * Logic of skills section
 */ 

let skillsContainers = Array.from(document.querySelectorAll(".skills-section-title"));
console.log(skillsContainers);

skillsContainers.forEach((element)=>{
    element.addEventListener("click", ()=>{
        element.classList.toggle("skills-section-title-active");
    });
});