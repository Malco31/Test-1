
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


const navLinks = document.querySelectorAll('.nav-link');
  

window.addEventListener('scroll', () => {
  
  const currentScrollPos = window.pageYOffset;
  
  
  document.querySelectorAll('section').forEach((section) => {
    
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
   
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      
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


let menu = document.querySelector('#menu-icon i');
let menulist = document.querySelector('.nav-links');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  menulist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  menulist.classList.remove('open');
}


var typed = new Typed(".input", {
  strings:["Web Developer", "Software Engineer", "Software Developer"],
  typeSpeed: 120,
  backSpeed: 70,
  loop:true,
})


const downloadLink = document.getElementById('resume-btn');

downloadLink.addEventListener('click', function (event) {
    const userConfirmed = confirm('Are you sure you want to download the resume?');
    
    if (!userConfirmed) {
        event.preventDefault();
    }
});







