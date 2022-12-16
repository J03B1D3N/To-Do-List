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
    },
    addProject: function() {
        this.projectListArr.push(this.project)
    },
    bindEvents: function() {
        this.addProjectBtn.addEventListener('click', () => {
            this.createProject()
            this.addProject()
            this.renderProjectList()
        });
    },
    createProject: function() {
        this.project = new Project('john')
    },
    renderProjectList: function () {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        }
        
        for(let i = 0; i < this.projectListArr.length; i++) {
            const div = document.createElement('div')
            const title = document.createElement('div')
            title.classList.add('title')
            div.classList.add('project')
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            div.appendChild(deleteBtn)
            div.appendChild(title)
            title.textContent = this.projectListArr[i].title
            this.projectList.appendChild(div)
        }
    }
}
todoApp.init();
})()
