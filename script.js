// NAVBAR ANIMATION
const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a.nav-link")];
const light = document.querySelector("nav .tubelight");
let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;
links.forEach((link, index) => {
  link.addEventListener("mouseenter", (e) => {
    activeIndex = index;
    light.style.left = `${links[index].offsetLeft + links[index].offsetWidth / 4}px`;
  });

  link.addEventListener("mouseleave", (e) => {
    activeIndex = 0;
    light.style.left = `${links[0].offsetLeft + links[0].offsetWidth / 4}px`;
  }, 500);
});

// Get all navbar links
const navLinks = document.querySelectorAll('.nav-link');
  
// Add scroll event listener to window
window.addEventListener('scroll', () => {
  // Get current scroll position
  const currentScrollPos = window.pageYOffset;
  
  // Loop through all sections
  document.querySelectorAll('section').forEach((section) => {
    // Get section top and bottom positions
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    // Check if current scroll position is within section bounds
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      // Get section ID and add 'active' class to corresponding navbar link
      const sectionId = section.getAttribute('id');
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('href').slice(1) === sectionId) {
          navLink.classList.add('active');
        }
      });
    }
  });
});






// ANIMATED TEXT
const text = "Full Stack Software Developer";
const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
    typingText.textContent += text[index];
    index++;
  
    if (index === text.length) {
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        untype();
      }, 3000);
    } else {
      setTimeout(type, 100);
    }
  }
  
  function untype() {
    if (typingText.textContent.length > 0) {
      typingText.textContent = typingText.textContent.slice(0, -1);
      setTimeout(untype, 100);
    } else {
      index = 0;
      typingTimeout = setTimeout(() => {
        type();
      }, 1000);
    }
  }
  
  let typingTimeout;
  type();

// MOUSE CLICK EFFECT
let body = document.querySelector("body");
document.addEventListener("click", function(e){
    var x = e.offsetX;
    var y = e.offsetY;

    let ripple = document.createElement("div");
    ripple.className="ripple";
    body.appendChild(ripple);
    ripple.style.left=x+"px";
    ripple.style.top=y+"px";

    ripple.onanimationend = () =>{
        body.removeChild(ripple);
    }
})


// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");

// prevBtn.addEventListener("click", () => {
//   const checkedInput = document.querySelector("input[name='slider']:checked");
//   const previousSibling = checkedInput.previousElementSibling || document.querySelector("input[name='slider']:last-of-type");
//   previousSibling.checked = true;
// });

// nextBtn.addEventListener("click", () => {
//   const checkedInput = document.querySelector("input[name='slider']:checked");
//   const nextSibling = checkedInput.nextElementSibling || document.querySelector("input[name='slider']:first-of-type");
//   nextSibling.checked = true;
// });


// get the previous and next buttons
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// get the radio inputs and the labels
const radios = document.querySelectorAll('input[name="slider"]');
const labels = document.querySelectorAll('label');

// initialize the current index to 0
let currentIndex = 0;

// function to show the current card
function showCard(index) {
  // uncheck all the radios and hide all the labels
  for (let i = 0; i < radios.length; i++) {
    radios[i].checked = false;
    labels[i].classList.remove('show');
  }
  // check the radio for the current index and show the label
  radios[index].checked = true;
  labels[index].classList.add('show');
  // update the current index
  currentIndex = index;
}

// function to show the previous card
function prevCard() {
  // calculate the index of the previous card
  const prevIndex = currentIndex === 0 ? radios.length - 1 : currentIndex - 1;
  showCard(prevIndex);
}

// function to show the next card
function nextCard() {
  // calculate the index of the next card
  const nextIndex = currentIndex === radios.length - 1 ? 0 : currentIndex + 1;
  showCard(nextIndex);
}

// show the initial card
showCard(currentIndex);


// const skillCard2 = document.querySelector('.skill-card-2');
// let isDown = false;
// let startX;
// let scrollLeft;

// skillCard2.addEventListener('mousedown', (e) => {
//   isDown = true;
//   startX = e.pageX - skillCard2.offsetLeft;
//   scrollLeft = skillCard2.scrollLeft;
// });

// skillCard2.addEventListener('mouseleave', () => {
//   isDown = false;
// });

// skillCard2.addEventListener('mouseup', () => {
//   isDown = false;
// });

// skillCard2.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - skillCard2.offsetLeft;
//   const walk = (x - startX) * 3; // adjust the scrolling speed
//   skillCard2.scrollLeft = scrollLeft - walk;
// });


// const skillCard1 = document.querySelector('.skill-card-1');
// let isDown1 = false;
// let startX1;
// let scrollLeft1;

// skillCard1.addEventListener('mousedown', (e) => {
//   isDown1 = true;
//   startX1 = e.pageX - skillCard1.offsetLeft;
//   scrollLeft1 = skillCard1.scrollLeft1;
// });

// skillCard1.addEventListener('mouseleave', () => {
//   isDown1 = false;
// });

// skillCard1.addEventListener('mouseup', () => {
//   isDown1 = false;
// });

// skillCard1.addEventListener('mousemove', (e) => {
//   if (!isDown1) return;
//   e.preventDefault();
//   const x = e.pageX - skillCard1.offsetLeft;
//   const walk = (x - startX) * 3; // adjust the scrolling speed
//   skillCard1.scrollLeft1 = scrollLeft1 - walk;
// });


const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}