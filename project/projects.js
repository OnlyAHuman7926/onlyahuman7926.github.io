async function getProjects() {
  let projects = await fetch("project/projects.json");
  projects = await projects.json();
  return projects;
}

function formatProject(project) {
  let thing = project.link ? `window.open('${project.link}', '_blank')` : `alert('This project isn\\'t accessible yet. It\\'s either because it\\'s not ready to be shown publicly or it was once hosted on Replit.')`
  return `
  <div onclick="${thing}">
    <h1>${project.name}</h1>
    <div>${project.description}</div>
  </div>
  <img src="${project.pic}">
  `
}