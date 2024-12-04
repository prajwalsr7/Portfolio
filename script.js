async function loadProjects() {
    try {
        const response = await fetch('http://localhost:5000/projects');
        const projects = await response.json();

        const container = document.querySelector('.container2');
        projects.forEach(project => {
            const projectCard = `
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <h3>${project.name}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <p>${project.description}</p>
                                <a href="${project.report_pdf}">View Report</a>
                                <a href="${project.github_link}">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

window.onload = loadProjects;