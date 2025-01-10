let section = document.getElementById("projects");
let popup = section.querySelector("#popup");
popup.addEventListener("click", (e) => popup.classList.add("not-displayed"));

function displayPopup(e, image) {
  popup.classList.remove("not-displayed");
  let html = `<div style="background-image: url('${image}')" class='project-img'></div>`;
  popup.innerHTML = html;
  let imageContainer = popup.querySelectorAll(".project-img")[0];
  imageContainer.classList.add("fadeIn");
}

function loadProjects() {
  let links = section.querySelectorAll("a");
  display(selectProjects("all"));

  links.forEach((a) => {
    a.addEventListener("click", setActive);
  });

  function setActive(event) {
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
    container.innerHTML = "";
    for (let id in selected) {
      let project = selected[id];
      let projectCard = document.createElement("div");
      projectCard.classList.add("card");
      projectCard.innerHTML = `<div style="background-image: url('${project.image}')" class='project-img'>
          <div id="${project.image}" class="hover-overlay flex center light">
            <strong>${project.title}</strong>
          </div>
          </div>
        </div>`;
      container.appendChild(projectCard);

      projectCard.addEventListener("click", (e) =>
        displayPopup(e, project.image)
      );
    }
  }

  function selectProjects(category) {
    if (category === "all") {
      let projects = {};
      for (let category in Collection.categories) {
        Object.assign(projects, Collection.categories[category]);
      }
      return projects;
    }
    return Collection.categories[category];
  }
}

loadProjects();
