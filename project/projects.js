let template = [{
    "name": "Pitch Changer",
    "description": "The Pitch Changer allows you to change the pitch of an audio and listen to it. ",
    "pic": "/profile.jpeg",
    "link": "https://onlyahuman7926.github.io/pitch-changer"
  },
  {
    "name": "Test Manager",
    "description": "Manage your tests at one platform and set a timer for each! \nI first thought of this project when I was taking a test in the classroom. I wanted to make a giant clock on the computer screen in my classroom, so I built one <a href='https://onlyahuman7926.github.io/Clock'>here</a>. However, since people were saying that this can be a timer for other things, I added more features such as adding names to tests and stuff. (now it's more like a todo list)",
    "pic": "/profile.jpeg",
    "link": "https://onlyahuman7926.github.io/tm"
}];

async function getProjects() {
  let projects = await fetch("project/projects.json");
  projects = await projects.json();
  // projects = template;
  return projects;
}

function formatProject(project) {
  let card = document.createElement("div");
  card.classList.add("project-card");
  let div = document.createElement("div");
  div.innerHTML = `<h1>${project.name}</h1><div>${project.description}</div>`;
  card.append(div);
  let img = new Image();
  img.src = project.pic;
  card.append(img);
  card.addEventListener("click", e => {
    if (e.target.nodeName == "A") return;
    if (project.link) window.open(project.link, "_blank");
    else alert('This project isn\'t accessible yet. It\'s either because it\'s not ready to be shown publicly or it was once hosted on Replit.');
  })
  document.body.append(card);
}