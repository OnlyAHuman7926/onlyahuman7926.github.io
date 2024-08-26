async function getProjects() {
  let projects = await fetch("project/projects.json");
  projects = await projects.json();
  return projects;
}

function formatProject(project) {
  return `
  <div>
    <h1>${project.name}</h1>
    <div>${project.description}</div>
  </div>
  <img src="${project.pic}" onclick="window.open('${project.link}', '_blank');">
  `
}