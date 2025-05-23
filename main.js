// Sample projects data
let projects = [
    {
        title: "E-commerce API",
        description: "RESTful API built with Node.js and Express for an e-commerce platform",
        technologies: ["Node.js, ", "Express, ", "MongoDB, ", "Jest"],
        github: "https://github.com/username/ecommerce-api",
        demo: "projects/ecomm/index.html"
    },
{
    title: "Test Automation Framework",
    description: "Comprehensive testing framework for web applications",
    technologies: ["JavaScript, ", "Cypress, ", "Selenium, ", "Mocha"],
    github: "https://github.com/username/test-framework",
    demo: "projects/test/index.html"
}
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const toggleAdminBtn = document.getElementById('toggleAdmin');
const adminContent = document.querySelector('.admin-content');
const addProjectBtn = document.getElementById('addProject'); // Element for adding projects
const editContentBtn = document.getElementById('editContent');
const contactForm = document.getElementById('contactForm');

// Initialize the page
function init() {
    renderProjects();
    setupEventListeners();
}

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = createProjectCard(project); // createProjectCard was missing, added below
        projectsGrid.appendChild(projectCard);
    });
}

// (Placeholder for createProjectCard, added for completeness as it's used in renderProjects)
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card'; // Example class

    const titleEl = document.createElement('h3');
    titleEl.textContent = project.title;
    card.appendChild(titleEl);

    const descEl = document.createElement('p');
    descEl.textContent = project.description;
    card.appendChild(descEl);

    const techEl = document.createElement('p');
    techEl.innerHTML = '<strong>Technologies:</strong> ';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        span.className = 'tech-tag'; // Example class
        techEl.appendChild(span);
    });
    card.appendChild(techEl);

    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.textContent = 'GitHub';
        githubLink.target = '_blank';
        card.appendChild(githubLink);
        // Add a separator if both links exist
        if (project.demo) {
            card.appendChild(document.createTextNode(' | '));
        }
    }

    if (project.demo) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demo;
        demoLink.textContent = 'Demo';
        demoLink.target = '_blank';
        card.appendChild(demoLink);
    }

    return card;
}


// Setup event listeners
function setupEventListeners() {
    // Toggle admin panel
    if (toggleAdminBtn && adminContent) { // Added null checks for robustness
        toggleAdminBtn.addEventListener('click', () => {
            adminContent.classList.toggle('active');
        });
    }

    // MODIFICATION: Explicitly disabling the "add new project" functionality.
    // The 'addProjectBtn' DOM element is fetched, but the functionality
    // for adding new projects using this button is intentionally disabled.
    // No event listener is attached to 'addProjectBtn' for project creation.
    // To enable this, an event listener would typically be added here, e.g.:
    // if (addProjectBtn) {
    //     addProjectBtn.addEventListener('click', () => {
    //         // Logic to prompt for project details and add to the 'projects' array
    //         console.log("Add project button clicked - functionality currently disabled.");
    //         // For example:
    //         // const title = prompt("Enter project title:");
    //         // if (title) {
    //         //     const newProject = { title, description: "New desc", technologies: [], github: "", demo: "" };
    //         //     projects.push(newProject);
    //         //     renderProjects();
    //         //     saveToLocalStorage();
    //         // }
    //     });
    // }
    // End of modification for disabling "add new project"

    // Edit content
    if (editContentBtn) { // Added null check
        editContentBtn.addEventListener('click', () => {
            const editableElements = document.querySelectorAll('h1, h2, p:not(.tech-tag)');
            editableElements.forEach(element => {
                const isEditable = element.contentEditable === 'true';
                element.contentEditable = isEditable ? 'false' : 'true';
                element.style.outline = isEditable ? 'none' : '2px dashed #3498db';
            });
        });
    }

    // Contact form submission
    if (contactForm) { // Added null check
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const formData = {
                name: nameInput ? nameInput.value : '',
                email: emailInput ? emailInput.value : '',
                message: messageInput ? messageInput.value : ''
            };

            console.log('Form submitted:', formData);
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) { // Added null check for targetElement
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Smooth scroll target not found: ${targetId}`);
            }
        });
    });
}

// Local storage functions
function saveToLocalStorage() {
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
}

function loadFromLocalStorage() {
    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
        projects = JSON.parse(savedProjects);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    init();
});
