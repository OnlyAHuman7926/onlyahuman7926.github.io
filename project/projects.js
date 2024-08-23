async function getProjects() {
  let projects = await fetch("/projects.json");
  projects = await projects.json();
  return projects;
}

function formatProject(project) {
  return `
  <h1>${project.name}</h1>
  <div>${project.description}</div>
  <img src="${project.pic}" onclick="window.open('${project.link}', '_blank');">
  `
}