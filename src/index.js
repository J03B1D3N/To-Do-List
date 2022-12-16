import './style.scss'

(function() {
    let todoApp = {
        projectList : [],
        toDoList: [],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.shorts();
        this.renderProjectList();
    },
    shorts: function() {
        function createDiv() {
            document.createElement('div')
        }
    },
    cacheDom: function() {
        this.addProject = document.getElementById('add')
        this.projectList = document.getElementById('projectList')
        this.deleteProject = document.getElementById('delete')
    },
    bindEvents: function() {
        this.addProject.addEventListener('click', (this.addProject))
    },
    addProject: function() {
        this.createProject();
        projectList.push(this.project)
    },
    createProject: function() {
        this.project = createDiv();
        this.project.classList.add('project')
    },
    renderProjectList: function () {

    }
}
todoApp.init();
})()
