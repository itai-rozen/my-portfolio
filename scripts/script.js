import projects from "./projects.js"

const init = () => {
    renderProjects()
    scrollPage()
}

const scrollPage = () => {
    setTimeout(() => {
        document.getElementById('about').scrollIntoView({behavior:"smooth", block:'end'})
    },2000)
}

const renderProjects = () => {
    const projectsContainer = document.querySelector('.projects-container')
    const projectsHtml = projects.map(project => {
        const { title,imageClass,link,description,techs } = project
        return `
        <div class="project-container ">
        <h3 class="project-header">${title}</h3>
        <a href=${link} target="_blank">
            <div class="project-image-container ${imageClass}"></div>
        </a>
        <p class="description">${description}</p>
        <ul class="tech-list">
            ${techs.map(tech => `<li class="tech-item">
            ${tech}
            </li>`)}
        </ul>
    </div>`
    })
    projectsContainer.innerHTML = projectsHtml.join('')
}



window.addEventListener('load', init)


