fetch("projects.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".container");
    data.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      projectDiv.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Visit Website</a>
      `;
      container.appendChild(projectDiv);
    });
  })
  .catch(error => console.error("Error loading projects:", error));
