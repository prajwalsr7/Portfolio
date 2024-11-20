async function loadProjects() {
    try {
        const response = await fetch('http://localhost:5000/projects');
        const projects = await response.json();

        const container = document.querySelector('.project-container');
        projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                    <a href="${project.report_pdf}" target="_blank">View Report</a>
                    <a href="${project.github_link}" target="_blank">GitHub Repo</a>
                </div>
            `;
            container.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

window.onload = loadProjects;