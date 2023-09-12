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
const text = "Junior Software Developer";
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





// Function to change the skill text based on the clicked icon
function changeSkillText(skillName) {
  var titleElement = document.querySelector('.skill-text-title h1');
  var bodyElement = document.querySelector('.skill-text-body p');

  // Update the text based on the clicked skill icon
  switch(skillName) {
    case 'HTML':
      titleElement.textContent = 'Frontend Language';
      bodyElement.textContent = 'HTML is a markup language used for structuring and presenting content on the web.';
      break;
    case 'CSS':
      titleElement.textContent = 'Frontend Language';
      bodyElement.textContent = 'CSS is a style sheet language used for describing the look and formatting of a document written in HTML.';
      break;
    case 'JavaScript':
      titleElement.textContent = 'Frontend Language';
      bodyElement.textContent = 'JavaScript is a high-level programming language used for adding interactivity and dynamic behavior to web pages.';
      break;
    // Add cases for other skill icons
    case 'Bootstrap':
      titleElement.textContent = 'Frontend Framework';
      bodyElement.textContent = 'Bootstrap is a popular front-end framework that provides a collection of pre-built HTML, CSS, and JavaScript components and tools. It is designed to help developers quickly and easily create responsive and mobile-friendly websites and web applications.';
      break;
    case 'Python':
      titleElement.textContent = 'Backend Language';
      bodyElement.textContent = "Python's versatility, extensive library ecosystem, and strong community support have contributed to its popularity. Its ease of use, readability, and scalability make it suitable for both beginners and experienced developers. Python continues to evolve and find applications in a wide range of industries, making it a powerful and widely adopted programming language.";
      break;
    case 'Django':
      titleElement.textContent = 'Backend Framework';
      bodyElement.textContent = "Django's strengths lie in its ability to accelerate the development process, promote code reusability, and maintain scalability. It follows best practices and conventions, allowing developers to focus on application logic rather than repetitive tasks. Django has become a popular choice for building robust and scalable web applications.";
      break;
    case 'Java':
      titleElement.textContent = 'Backend Language';
      bodyElement.textContent = "Java's popularity and versatility have made it one of the most widely adopted programming languages in the world. Its robustness, security, portability, and extensive ecosystem make it suitable for a wide range of applications across different industries.";
      break;
    case 'SQL':
      titleElement.textContent = 'Backend Language';
      bodyElement.textContent = "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases. It provides a set of commands and syntax for interacting with databases and performing various operations such as querying data, inserting, updating, and deleting records, creating and modifying database schemas, and more.";
      break;
    case 'Spring':
      titleElement.textContent = 'Backend Framework';
      bodyElement.textContent = "Spring is a popular Java-based framework that provides a comprehensive infrastructure for developing enterprise-level applications. It aims to simplify Java development by offering a cohesive and modular approach to building robust and scalable applications.";
      break;
    case 'Vue':
      titleElement.textContent = 'Frontend Framework';
      bodyElement.textContent = "Vue is a progressive JavaScript framework used for building user interfaces. With Vue, developers can create interactive web applications with ease. It emphasizes simplicity, flexibility, and efficiency, making it a popular choice among developers.";
      break;
  }
}


const projects = [
  {
    name: 'Touriste',
    description: 'Touriste is a travel website made for a real client. It is meant for users to go to the client\'s website to get in touch with them about booking a trip to almost anywhere in the world, on any budget.',
    type: 'Group Project',
    role: 'Full Stack',
    highlights: 'HTML, CSS, Django, JavaScript, & OpenAI',
    imageSrc: 'images/touriste-logo-3.png',
    codeLink: 'https://www.touristeluxury.com'
  },
  {
    name: 'ClockWise',
    description: 'ClockWise is a time clock application that allows employees to easily clock in and out, tracks their working hours, and calculates their earnings. It provides users with a clear view of their earnings until the next pay period. The admin can access all user data, manage payroll, and add/delete users.',
    type: 'Solo Project',
    role: 'Full Stack',
    highlights: 'HTML, Vue, & Django',
    imageSrc: 'images/clockwise-logo.png',
    codeLink: 'https://github.com/Malco31/ClockWise'
  },
  {
    name: 'DataBank',
    description: 'Databank is a simplified banking application that provides users with a simulated banking experience. Users can create accounts, easily deposit, withdraw, view their account balance, and get charged fees.',
    type: 'Group Project',
    role: 'Frontend',
    highlights: 'Java & SQL',
    imageSrc: 'images/databank-logo.png',
    codeLink: 'https://github.com/Mike469/DataBank'
  },
  {
    name: 'Translator',
    description: 'The Translator is a versatile application that empowers users to seamlessly translate between multiple languages. With its intuitive interface, users can input text to be translated from one language to another. The Translator provides a reliable and efficient tool for bridging language barriers.',
    type: 'Group Project',
    role: 'Frontend',
    highlights: 'Python',
    imageSrc: 'images/translator-logo.png',
    codeLink: 'https://replit.com/@unit-project-2/Translator-program'
  },
  {
    name: 'MagiCard',
    description: 'MagiCard is a dynamic application designed for fans of the popular game, Magic The Gathering. With MagiCard, users can unleash their creativity by creating personalized decks using a wide range of captivating and strategic cards. Explore the vast card database, where you can browse and search for specific cards to enhance your collection.',
    type: 'Group Project',
    role: 'Frontend',
    highlights: 'Java, SQL, & Spring',
    imageSrc: 'images/magicard-logo.png',
    codeLink: 'https://github.com/NuzziVF/card-manager'
  },
  {
    name: 'Subscriptify',
    description: "Subscriptify is an application designed to simplify your subscription management. Users can easily create an account, allowing them to add their subscriptions to the system, which will be organized in a convenient table format. The application keeps track of the cost and payment due dates, calculates the total monthly expenses as well as the total yearly costs.",
    type: 'Group Project',
    role: 'Backend',
    highlights: 'HTML, CSS, Django',
    imageSrc: 'images/subscriptify-logo.png',
    codeLink: 'https://github.com/coltfields23/Subscription-Manager'
  },
  {
    name: 'WGT-Ecommerce Shop',
    description: "Welcome to WGT, a sample ecommerce application where we've brewed up a digital oasis for tea lovers worldwide. Explore our tea catalog, learn about tea varieties, and discover new flavors. Join WGT today and steep yourself in the world of tea with ease and sophistication.",
    type: "Solo Project",
    role: "Full Stack",
    highlights: "HTML, CSS, Javascript",
    imageSrc: 'images/wgt.png',
    codeLink: 'https://malco31.github.io/WGT-Ecommerce/home.html',
  },
  // Add more project objects here...
];

let currentProjectIndex = 0;

function updateProjectInfo() {
  const project = projects[currentProjectIndex];
  document.querySelector('.project-name').textContent = project.name;
  document.querySelector('.project-text').textContent = project.description;
  document.querySelector('.type-text').textContent = project.type;
  document.querySelector('.role-text').textContent = project.role;
  document.querySelector('.highlights-text').textContent = project.highlights;
  document.querySelector('.right-project img').src = project.imageSrc;
  document.querySelector('.code-link').setAttribute('href', project.codeLink);
}

document.querySelector('.prev-btn').addEventListener('click', function() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  updateProjectInfo();
});

document.querySelector('.nxt-btn').addEventListener('click', function() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  updateProjectInfo();
});

updateProjectInfo();









