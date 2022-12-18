import { add } from 'date-fns';
import { th } from 'date-fns/locale';
import './style.scss';

(function() {
    
    let todoApp = {
        projectListArr : [],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.renderProjectList();
    },
    cacheDom: function() {
        this.addProjectBtn = document.getElementById('add')
        this.projectList = document.getElementById('projectList')
        this.deleteProjectBtn = document.querySelectorAll('.delete')
        this.projectTitleInput = document.getElementById('projectTitle')
        this.projectTitleForm = document.getElementById('projectTitleForm')
        this.projectTitleInputDiv = document.getElementById('titleBtns')
        this.projectTitleInputConfirm = document.getElementById('submitTitleInput')
        this.projectTitleInputCancel = document.getElementById('cancelTitleInput')
        this.addToDoBtn = document.getElementById('addToDo')
        this.toDoInputFieldForm = document.getElementById('toDoInputField')
        this.toDoInputField = document.getElementById('toDoInput')
        this.cancelToDoInputBtn = document.getElementById('cancelToDoInput')
        this.toDoInputDate = document.getElementById('toDoInputDate')
        this.toDoListDOM = document.getElementById('toDoList')
    },
    bindEvents: function() {
           this.addProjectBtn.addEventListener('click', () => {
           this.projectTitleInputDiv.style.display = 'flex'
           this.projectTitleInput.focus()
        });
        this.projectTitleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createProject();
            this.addProject();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
            this.renderProjectList();
            // this.renderToDo();
        }),
        this.projectTitleInputCancel.addEventListener('click', (e) => {
            e.preventDefault();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
        })
        
        this.toDoInputFieldForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createToDo();
          
        }) 

        this.toDoInputDate.addEventListener('change', () => {
            console.log(this.toDoInputDate.value)
        })
    },
    createProject: function() {
        class Project {
            constructor  (projectTitleInput) {
                this.title = projectTitleInput
                this.toDos = ['add ToDo']
            }
            }
        this.project = new Project(this.projectTitleInput.value)
    },
    addProject: function() {
        this.projectListArr.push(this.project)
    },
    deleteProject: function(event) {
        const target = event.currentTarget.parentNode
        target.remove();
        this.projectListArr.splice(target.dataset.id, 1)

    },
    renderProjectList: function () {
        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        };

        // while (this.toDoListDOM.children[1]) {
        //    this.toDoListDOM.removeChild(this.toDoListDOM.children[1])
        // };
        
        for(let i = 0; i < this.projectListArr.length; i++) {
            const div = document.createElement('div')
            div.setAttribute('data-id', `${i}`)
            const title = document.createElement('div')
            title.classList.add('title')
            title.addEventListener('click', (e) => {this.renderToDo(e)})
            div.classList.add('project')
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.addEventListener('click', (e) => {this.deleteProject(e)})
            div.appendChild(deleteBtn)
            div.appendChild(title)
            title.textContent = this.projectListArr[i].title
            this.projectList.appendChild(div)


            for(let u = 0; u < this.projectListArr[i].toDos.length; u++) {
                if(this.projectListArr[i].toDos[u] === "add ToDo") {

                    const addToDo = document.createElement('div')
                    addToDo.style.display = 'flex'
                    addToDo.classList.add('addToDo')
                    addToDo.setAttribute('id', `addToDo${i}`);
                    const addToDoBtn = document.createElement('div')
                    addToDoBtn.classList.add('addToDoBtn')
                    const addToDoBtnTitle = document.createElement('div')
                    addToDoBtnTitle.classList.add('addToDoBtnTitle')
                    addToDoBtnTitle.textContent = 'Add a Task';
    
                    addToDo.appendChild(addToDoBtn)
                    addToDo.appendChild(addToDoBtnTitle)
                    this.toDoListDOM.appendChild(addToDo)

                    addToDo.addEventListener('click', () => {
                        this.toDoInputFieldForm.style.display = 'flex'
                        addToDo.style.display = 'none'
                        this.toDoInputField.style.display = 'flex'
                    })


                } else {
                    const doDo = document.createElement('div')
                    toDo.classList.add('toDo')
                }
            }
        }
    },
    createToDo: function () {
        class Task {
            constructor (title, date) {
                this.title = title;
                this.date = date;
            }
        }
        this.toDo = new Task(this.toDoInputField.value, this.toDoInputDate.value)
    },

    addToDo: function (n) {
        this.projectListArr[n].toDos.push(this.toDo)
    },

    renderToDo: function () {
        // while (this.toDoListDOM.firstChild) {
        //     this.toDoListDOM.removeChild(this.toDoListDOM.firstChild);
        // }

        // for(let i = 0; i < this.projectListArr.toDos.length; i++) {
        //     if(this.projectListArr[i].toDos === "add ToDo") {
        //         const addToDo = document.createElement('div')
        //         addToDo.classList.add('addToDo')
        //         addToDo.setAttribute('id', `addToDo${i}`);
        //         const addToDoBtn = createElement('div')
        //         addToDoBtn.classList.add('addToDoBtn')
        //         const addToDoBtnTitle = document.createElement('div')
        //         addToDoBtnTitle.classList.add('addToDoBtnTitle')
        //         addToDoBtnTitle.textContent = 'Add a Task';

        //         addToDo.appendChild(addToDoBtn)
        //         addToDo.appendChild(addToDoBtnTitle)
        //         this.toDoListDOM.appendChild(addToDo)

        //     }
        // }
    }
    
   
    
}
todoApp.init();
})()
