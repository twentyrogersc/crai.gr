

window.addEventListener 'DOMContentLoaded', () ->

  setup = (project) ->
    image = project.nextSibling
    image.style.margin = Math.ceil(Math.random() * 100) - 50 +'px'

    project.addEventListener 'mouseover', () ->
      image.classList.add 'is-active'

    project.addEventListener 'mouseout', () ->
      image.classList.remove 'is-active'

  projects = document.querySelectorAll '#projects .project'
  setup project for project in projects
