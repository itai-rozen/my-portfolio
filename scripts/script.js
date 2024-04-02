import projects from "./projects.js"

const init = () => {
    renderProjects()
    addHamburgerMenuEvents()
}

const renderProjects = () => {
    const projectsContainer = document.querySelector('.projects-container')
    const projectsHtml = projects.map(project => {
        const { title,imageClass,link,description,techs, repo } = project
        return `
        <div class="project-container">
          <h3 class="project-header">${title}</h3>
          <a href=${link} target="_blank">
              <div class="project-image-container ${imageClass}"></div>
          </a>
          <p class="description">${description}</p>
          <a class="description" href="${repo}">Repo</a>
          <a class="description" href="${link}">Demo</a>
          <ul class="tech-list">
              ${techs.map(tech => `<li class="tech-item">
              ${tech}
              </li>`).join('')}
          </ul>
  
        </div>`
    })
    projectsContainer.innerHTML = projectsHtml.join('')
}

const addHamburgerMenuEvents = () => {
    const navItems = document.querySelectorAll('.nav-item')
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.hamburger-menu').checked = false
        })
    })
}

window.addEventListener('load', init)


