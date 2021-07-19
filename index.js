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

/**
 * Config of the particles effect
 */

particlesJS({
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
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


