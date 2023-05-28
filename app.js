const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
     console.log(entry)
     if (entry.isIntersecting) {
         entry.target.classList.add('show');
         
     }
     else{
         
         entry.target.classList.remove('show');
     }


  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

// **********************************************
// **********************************************
const faders = document.querySelectorAll(".fade-in1");
const faders2 = document.querySelectorAll(".fade-in2");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
faders2.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
/****************************************************************** */
const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-title");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

// **************************
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('dark-mode');
});


//************************************************************************************** */
let TheCanvas = document.getElementById('our-canvas'),
  
theContext = TheCanvas.getContext('2d'),
thwGradient = TheCanvas.CreatelinerGradient();


theContext.fillStyle='#F00';


theContext.fillRect(x, y, TheCanvas.width, TheCanvas.hight);
//************************************************************************************** */

const restartButton = document.querySelector(".reset");

restartButton.addEventListener(
    "click",
    () => {
        const textAnimation = document.querySelector(".text-stroke");

        setAnimationName(textAnimation, "none");
        requestAnimationFrame(() =>
            setTimeout(() => setAnimationName(textAnimation, ""), 0)
        );
    },
    false
);

const setAnimationName = (element, animationName) => {
    if (element) {
        element.style.animationName = animationName;
    }
};



// ************************************************************
var str = document.getElementsByTagName('div')[0].innerHTML.toString();
var i = 0;
document.getElementsByTagName('div')[0].innerHTML = "";

setTimeout(function() {
    var se = setInterval(function() {
        i++;
        document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByTagName('div')[0].innerHTML = str;
        }
    }, 10);
},0);
