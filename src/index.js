import './style.scss';
class Project {
constructor  (title) {
    this.title = title
}
}
(function() {
    
    let todoApp = {
        projectListArr : [],
        toDoList: [],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.renderProjectList();
    },
    cacheDom: function() {
        this.addProjectBtn = document.getElementById('add')
        this.projectList = document.getElementById('projectList')
        this.deleteProject = document.getElementById('delete')
        this.div = document.createElement('div')
    },
    addProject: function() {
        this.projectListArr.push(this.project)
    },
    bindEvents: function() {
        this.addProjectBtn.addEventListener('click', () => {
            this.createProject().bind(this)
            this.addProject.bind(this)
            this.renderProjectList().bind(this)
        });
    },
    createProject: function() {
        this.project = new Project('john')
    },
    renderProjectList: function () {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        }
        for(let i = 0; i < projectList.length; i++) {
            
        }
        console.log(this.projectListArr)

    }
}
todoApp.init();
})()
