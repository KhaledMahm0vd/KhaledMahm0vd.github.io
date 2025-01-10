// Sample projects data
let projects = [
    {
        title: "E-commerce API",
        description: "RESTful API built with Node.js and Express for an e-commerce platform",
        technologies: ["Node.js", "Express", "MongoDB", "Jest"],
        github: "https://github.com/username/ecommerce-api",
        demo: "https://api-demo.example.com"
    },
    {
        title: "Test Automation Framework",
        description: "Comprehensive testing framework for web applications",
        technologies: ["JavaScript", "Cypress", "Selenium", "Mocha"],
        github: "https://github.com/username/test-framework",
        demo: "https://framework-demo.example.com"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const toggleAdminBtn = document.getElementById('toggleAdmin');
const adminContent = document.querySelector('.admin-content');
const addProjectBtn = document.getElementById('addProject');
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
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank">GitHub</a>
                <a href="${project.demo}" target="_blank">Live Demo</a>
            </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Toggle admin panel
    toggleAdminBtn.addEventListener('click', () => {
        adminContent.classList.toggle('active');
    });

    // Add new project
    addProjectBtn.addEventListener('click', () => {
        const newProject = {
            title: prompt('Project title:'),
            description: prompt('Project description:'),
            technologies: prompt('Technologies (comma-separated):').split(',').map(tech => tech.trim()),
            github: prompt('GitHub URL:'),
            demo: prompt('Demo URL:')
        };

        if (newProject.title && newProject.description) {
            projects.push(newProject);
            renderProjects();
            saveToLocalStorage();
        }
    });

    // Edit content
    editContentBtn.addEventListener('click', () => {
        const editableElements = document.querySelectorAll('h1, h2, p:not(.tech-tag)');
        editableElements.forEach(element => {
            element.contentEditable = element.contentEditable === 'true' ? 'false' : 'true';
            element.style.outline = element.contentEditable === 'true' ? '2px dashed #3498db' : 'none';
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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