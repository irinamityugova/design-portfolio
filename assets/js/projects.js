function loadProjects() {
  let section = document.getElementById("projects");
  let links = section.querySelectorAll("a");
  display(selectProjects("logo"));

  links.forEach((a) => {
    a.addEventListener("click", clickHandler);
  });

  function clickHandler(event) {
    let a = event.currentTarget;
    let category = a.innerText.toLowerCase();
    let selected = selectProjects(category);

    links.forEach((a) => {
      a.classList.remove("active");
    });

    a.classList.toggle("active");
    display(selected);
  }

  function display(selected) {
    let container = section.querySelector("#projects-container");
    let html = "";
    for (let id in selected) {
      let project = selected[id];
      let projectCard = `<div class='card'>
      <div style="background-image: url('${project.image}')" class='project-img'></div>
      </div>`;
      html += projectCard;
    }
    container.innerHTML = html;
  }

  function selectProjects(category) {
    return Collection.categories[category];
  }
}

loadProjects();
