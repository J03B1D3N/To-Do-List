import { add } from 'date-fns';
import { th } from 'date-fns/locale';
import './style.scss';

(function() {
    
    let todoApp = {
        projectListArr : [],
    init: function() {
        this.cacheDom();
        this.bindEvents();
        this.render();
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
        this.toDoListTitle = document.getElementById('toDoListTitle')
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
            this.render();
        }),
        this.projectTitleInputCancel.addEventListener('click', (e) => {
            e.preventDefault();
            this.projectTitleInput.value = ''
            this.projectTitleInputDiv.style.display = 'none'
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
    render: function () {

        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        };

        while (this.toDoListDOM.children[1]) {
           this.toDoListDOM.removeChild(this.toDoListDOM.children[1])
        };
        
        for(let i = 0; i < this.projectListArr.length; i++) {
            const div = document.createElement('div')
            div.setAttribute('data-id', `${i}`)
            const title = document.createElement('div')
            title.classList.add('title')
            // title.addEventListener('click', (e) => {this.renderToDo(e)})
            div.classList.add('project')
            const deleteBtn = document.createElement('button')
            deleteBtn.classList.add('delete')
            deleteBtn.addEventListener('click', (e) => {this.deleteProject(e)})
            div.appendChild(deleteBtn)
            div.appendChild(title)
            title.textContent = this.projectListArr[i].title
            this.projectList.appendChild(div)

            div.addEventListener('click', () => {
                renderProjectsToDos(div.dataset.id)
            })}


           function renderProjectsToDos (number) {

            for(let u = 0; u < this.projectListArr[number].toDos.length; u++) {
                if(this.projectListArr[number].toDos[u] === "add ToDo") {

                    const addToDo = document.createElement('div')
                    addToDo.style.display = 'flex'
                    addToDo.classList.add('addToDo')
                    addToDo.setAttribute('id', `addToDo`);
                    addToDo.setAttribute('data-id', `${number}`)
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
                        this.toDoInputFieldForm.setAttribute('data-id', `${number}`)
                        this.toDoInputField.focus();
                    })

                    this.toDoInputFieldForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.createToDo();
                        this.addToDo();
                        this.renderProjectList();
                        this.toDoInputFieldForm.style.display = 'none'
                        this.toDoInputField.value = '';
                        this.toDoInputDate.value = '';
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)
                    } , {once: true}) 
            
                } else {

                    const toDo = document.createElement('div')
                    toDo.classList.add('toDo')
                    toDo.setAttribute('data-id', `${u}`)
                    toDo.style.backgroundColor = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? "lightgreen" : "'rgb(255, 169, 169)"

                    const toDoTitle = document.createElement('div')
                    toDoTitle.classList.add('toDoTitle')
                    toDoTitle.textContent =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].title;

                    const toDoRightSide = document.createElement('div')
                    toDoRightSide.classList.add('toDoRightSide')

                    const date = document.createElement('input')
                    date.setAttribute('type', 'date')
                    date.setAttribute('id', 'date')
                    date.value =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].date

                    const markDone = document.createElement('div')
                    markDone.classList.add('markDone')
                    markDone.setAttribute('id', 'markDone')
                    markDone.textContent = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? 'Mark Undone' : 'Mark Done'
                    markDone.addEventListener('click', () => {
                    
                        switch (markDone.textContent) {
                            case 'Mark Done':
                                markDone.textContent = 'Mark Undone';
                                toDo.style.backgroundColor = 'lightgreen';
                                this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done = true
                                console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done)
                                break;
                            
                            case 'Mark Undone':
                                markDone.textContent = 'Mark Done'
                                toDo.style.backgroundColor = 'rgb(255, 169, 169)'
                                this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done = false
                                console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].doneg)
                                break;

                        }
                    })
                
                    const deleteToDoBtn = document.createElement('div')
                    deleteToDoBtn.setAttribute('id', 'deleteToDoBtn')

                    toDoRightSide.appendChild(date)
                    toDoRightSide.appendChild(markDone)
                    toDoRightSide.appendChild(deleteToDoBtn)

                    toDo.appendChild(toDoTitle)
                    toDo.appendChild(toDoRightSide)

                    this.toDoListDOM.appendChild(toDo)

                    deleteToDoBtn.addEventListener('click', (e) => {
                        const target = e.currentTarget.parentNode.parentNode
                        this.toDoListDOM.removeChild(target)
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.splice(target.dataset.id, 1)
                        this.renderProjectList();
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)

                    })
                }
            }
        }
    },

    createToDo: function () {
        class ToDo {
            constructor (title, date) {
                this.title = title;
                this.date = date;
                this.done = false;
            }
        }
        this.toDo = new ToDo(this.toDoInputField.value, this.toDoInputDate.value)
    },

    addToDo: function (o) {
        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.push(this.toDo)
    },

}
todoApp.init();
})()
