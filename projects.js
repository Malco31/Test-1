// Project Information

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
  
    const projectId = params.get('id');
  
    const projects = {
      project1: {
        title: "Sam Steven",
        description: "Sam Steven is a small business mainly based in Oxford, Mississippi. Since joining the team, I've managed the store's online presence, including a full Shopify website overhaul. I handle product inventory, regularly update site content, and have customized the theme's code for site improvements. I also registered and optimized the business on Google, ensuring it appears on Google Maps and its products show in Google search results.",
        image: "images/Sam Steven Img2.png",
        image2: "images/Sam Steven Img1.png",
        link: "https://samsteven.com"
      },
      project2: {
        title: "Athletech AI",
        description: "-Created and implemented blog posts in MDX format, enhancing website content and engagement. Developed and integrated forms, including a contact form, using React & Fastify.js. Fixed typos across the site ensuring professional presentation",
        image: "images/Screenshot 2025-01-26 184034.png",
        image2: "images/Athletech Img2.png",
        link: "https://www.athletech.ai/"
      },
      project3: {
        title: "Budget Manager",
        description: "This is a CRUD monthly income management application. It is a simple project that I made as an introduction to React. This project pairs React on the frontend and Django on the backend.",
        image: "images/IMA.png",
        image2: "images/IMA2.png",
        link: "https://django-react-app-frontend.onrender.com/login"
      },
      project4: {
        title: "Classic American Lifestyle",
        description: "Classic American Lifestyle is a site developed and managed through Bigcommerce. It is an ecommerce store that sells shoes, accessories, and other apparel. Although it is currently unavailable, it will eventually be used as a wholesale site for the Sam Steven brand.",
        image: "images/Classic American Lifestyle Img1.png",
        image2: "images/classicamericanlifestyle2.png",
        link: "https://classicamericanlifestyle.com"
      },
    };
  
    
      const project = projects[projectId];
  
      if (project) {
        document.getElementById("project-title").textContent = project.title;
        document.getElementById("project-description").textContent = project.description;
        document.getElementById("project-image").src = project.image;
        document.getElementById("project-image2").src = project.image2;
        document.getElementById("project-link").href = project.link;
      } else {
        document.getElementById("project-title").textContent = "Project Not Found"
      }
  
  
    //   console.log("Project ID from URL:", projectId);
    //   console.log("Project data:", projects[projectId]);
    });


    // const descriptionEl = document.getElementById("project-description");

    // if (projectId === "project2") {
    //   const bulletPoints = project.description.split('-').filter(point => point.trim() !== '');
      
    //   descriptionEl.innerHTML = '';

    //   const ul = document.createElement('ul');
    //   bulletPoints.forEach(point=> {
    //     const li = document.createElement('li');
    //     li.textContent = point.trim();
    //     ul.appendChild(li);
    //   });
    //   descriptionEl.appendChild(ul);
    // } else {
    //   descriptionEl.textContent = project.description
    // }