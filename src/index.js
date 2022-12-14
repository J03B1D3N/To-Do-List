import { add } from 'date-fns';
import { th } from 'date-fns/locale';
import { test } from './cachingDom';
import './style.scss';



(function() {
    
    let todoApp = {
        projectListArr : [],
    init: function() {
        this.boot();
        this.cacheDom();
        this.bindEvents();
        this.renderProjectList();
    },
    boot: function () {
        if(JSON.parse(localStorage.getItem('projectListArr')) === null) {
            this.projectListArr = [];
        } else {
            this.projectListArr = JSON.parse(localStorage.getItem('projectListArr'));
            for(let e = 0; e < this.projectListArr.length; e++) {
                this.projectListArr[e].selected = false
            }
        }

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
        this.toDoInputField = document.getElementById('toDoInput')
        this.cancelToDoInputBtn = document.getElementById('cancelToDoInput')
        this.toDoInputDate = document.getElementById('toDoInputDate')
        this.toDoListDOM = document.getElementById('toDoList')
        this.toDoListTitle = document.getElementById('toDoListTitle')
    },
    updateLocalStorage: function() {
        localStorage.setItem('projectListArr', 
        JSON.stringify(this.projectListArr))
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
            this.updateLocalStorage();
            this.renderProjectList();
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
        console.log(target.children[1])
        this.renderProjectList();

        if(target.children[1].textContent == this.toDoListTitle.textContent) {
            this.toDoListTitle.textContent = 'Project Title';

            while (this.toDoListDOM.firstChild) {
            this.toDoListDOM.removeChild(this.toDoListDOM.firstChild)
        };}

        this.updateLocalStorage();
    },
    

    renderProjectList: function () {

        let n;

        while (this.projectList.firstChild) {
            this.projectList.removeChild(this.projectList.firstChild);
        };

        
        

        for(let i = 0; i < this.projectListArr.length; i++) {
            this.div = document.createElement('div')
            this.div.setAttribute('data-id', `${i}`)
            this.div.classList.add('project')
            switch (this.projectListArr[i].selected) {
                case true:
                    this.div.style.backgroundColor  = 'grey'
                    break;
                case false:
                    this.div.style.backgroundColor = 'rgb(240, 235, 206)'
                    break;
            }
            this.title = document.createElement('div')
            this.title.classList.add('title')
            this.deleteBtn = document.createElement('button')
            this.deleteBtn.classList.add('delete')
            this.deleteBtn.addEventListener('click', (e) => {this.deleteProject(e)})
            this.div.appendChild(this.deleteBtn)
            this.div.appendChild(this.title)


            this.title.textContent = this.projectListArr[i].title

            this.projectList.appendChild(this.div)

            this.title.addEventListener('click', (e) => {
                const target = e.target.parentNode
                target.style.backgroundColor = 'grey'
                console.log(target)
                n = target.dataset.id
                for(let w = 0; w < this.projectListArr.length; w++) {
                    this.projectListArr[w].selected = false
                }
                this.projectListArr[n].selected = true;
                this.renderToDoList(n)
                this.toDoListTitle.textContent = target.textContent
                this.renderProjectList();
            })
        }
        
},
renderToDoList: function (n) {
    
    while (this.toDoListDOM.firstChild) {
        this.toDoListDOM.removeChild(this.toDoListDOM.firstChild)
     };

    for(let u = 0; u < this.projectListArr[n].toDos.length; u++) {
    if (this.projectListArr[n].toDos[u] === "add ToDo") {
        this.createAddToDoBtn(n)
        this.createToDoInputForm(n)
        this.addLaterEventListenersFirstHalf(n)
        
    } else {
        this.createToDoDOM(u);
        this.addLaterEventListenersSecondHalf(n)
    }



}
},

    createAddToDoBtn: function (n) {
        const addToDo = document.createElement('div')
            addToDo.style.display = 'flex'
            addToDo.classList.add('addToDo')
            addToDo.setAttribute('id', `addToDo`);
            addToDo.setAttribute('data-id', `${n}`)
            const addToDoBtn = document.createElement('div')
            addToDoBtn.classList.add('addToDoBtn')
            const addToDoBtnTitle = document.createElement('div')
            addToDoBtnTitle.classList.add('addToDoBtnTitle')
            addToDoBtnTitle.textContent = 'Add a Task';

            addToDo.appendChild(addToDoBtn)
            addToDo.appendChild(addToDoBtnTitle)
            this.toDoListDOM.appendChild(addToDo)
    },
    createToDoInputForm: function(n) {
            this.toDoInputFieldForm = document.createElement('form')
            this.toDoInputFieldForm.classList.add('toDoInputField')
            this.toDoInputFieldForm.setAttribute('id','toDoInputField')
            this.toDoInputFieldForm.setAttribute('data-id', `${n}`)
            this.toDoInputFieldForm.style.display =  'none'

            this.toDoInput = document.createElement('input')
            this.toDoInput.setAttribute('type', 'text')
            this.toDoInput.setAttribute('id', 'toDoInput')
            this.toDoInput.setAttribute('placeholder','Task Title')

            this.toDoInputFieldRight = document.createElement('div')
            this.toDoInputFieldRight.classList.add('toDoInputFieldRight')

            this.inputDate = document.createElement('input')
            this.inputDate.setAttribute('type','date')
            this.inputDate.setAttribute('id','toDoInputDate')

            this.inputSubmitBtn = document.createElement('button')
            this.inputSubmitBtn.classList.add('toDoInputBtns')
            this.inputSubmitBtn.setAttribute('id','submitToDoInput')

            this.inputCancelBtn = document.createElement('button')
            this.inputCancelBtn.classList.add('toDoInputBtns')
            this.inputCancelBtn.setAttribute('id','cancelToDoInput')

            this.toDoInputFieldRight.appendChild(this.inputDate)
            this.toDoInputFieldRight.appendChild(this.inputSubmitBtn)
            this.toDoInputFieldRight.appendChild(this.inputCancelBtn)

            this.toDoInputFieldForm.appendChild(this.toDoInput)
            this.toDoInputFieldForm.appendChild(this.toDoInputFieldRight)

            this.toDoListDOM.appendChild(this.toDoInputFieldForm)
    },

    addLaterEventListenersFirstHalf: function(n) {

        addToDo.addEventListener('click', () => {
            addToDo.style.display = 'none'
            this.toDoInputFieldForm.style.display = 'flex'
            this.toDoInput.focus();
        }, {once: true})

        this.toDoInputFieldForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createTodo();
            this.addToDo();
            this.toDoInputFieldForm.style.display = 'none'
            this.toDoInput.value = '';
            this.inputDate.value = '';
            console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)
            localStorage.projectArray = this.projectListArr
            this.updateLocalStorage();
            this.renderToDoList(n);
        } , {once: true}) 

        this.inputCancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.toDoInputFieldForm.style.display = 'none'
            this.toDoInput.value = '';
            this.inputDate.value = '';
            addToDo.style.display = 'flex'
            this.updateLocalStorage();
            this.renderToDoList(n)
        })
    },
    addLaterEventListenersSecondHalf: function(n) {
        

        this.deleteToDoBtn.addEventListener('click', (e) => {
            const target = e.currentTarget.parentNode.parentNode
            this.toDoListDOM.removeChild(target)
            this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.splice(target.dataset.id, 1)
            console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos)
            localStorage.projectArray = this.projectListArr
            this.updateLocalStorage();
            this.renderToDoList(n)

        },{once:true})

        this.toDoTitle.addEventListener('click', (e) => {
            const target = e.target
            const todo = e.target.parentNode;
            const title = todo.children[1]
            const input = todo.children[2].children[0]
            console.log(todo.children)
            title.style.display = 'none'

            input.value = target.textContent
            input.style.display = 'block'
            input.focus()
        })

        this.toDoTitleInputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target
            console.log(form)
            const formInput = form.parentNode.children[2].children[0]
            const todoTitle =  form.parentNode.children[1]
            todoTitle.textContent = formInput.value
            this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[form.dataset.id].title = formInput.value
            localStorage.projectArray = this.projectListArr
            formInput.style.display = 'none'
            todoTitle.style.display = 'flex'
            formInput.value = ''
            this.updateLocalStorage();
        })
        

    },
    createToDoDOM: function (u) {
            this.toDo = document.createElement('div')
            this.toDo.classList.add('toDo')
            this.toDo.setAttribute('data-id', `${u}`)
            this.toDo.style.backgroundColor = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? "lightgreen" : "'rgb(255, 169, 169)"

            this.todoNumber = document.createElement('div')
            this.todoNumber.textContent = `${u}`
            this.todoNumber.classList.add('toDoNumber')

            this.toDoTitle = document.createElement('div')
            this.toDoTitle.classList.add('toDoTitle')
            this.toDoTitle.setAttribute('data-id',`${u}`)
            this.toDoTitle.textContent =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].title;
            this.toDoTitleInputForm = document.createElement('form')
            this.toDoTitleInputForm.setAttribute('data-id',`${u}`)
            this.toDoTitleInput = document.createElement('input')
            this.toDoTitleInput.setAttribute('type','text')
            this.toDoTitleInput.setAttribute('data-id',`${u}`)
            this.toDoTitleInput.classList.add('toDoTitleInput')
            this.toDoTitleInput.style.display = 'none'

           

            this.toDoRightSide = document.createElement('div')
            this.toDoRightSide.classList.add('toDoRightSide')

            this.date = document.createElement('input')
            this.date.setAttribute('type', 'date')
            this.date.setAttribute('id', 'date')
            this.date.value =  this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].date

            this.markDone = document.createElement('button')
            this.markDone.classList.add('markDone')
            this.markDone.setAttribute('data-id',`${u}`)
            this.markDone.setAttribute('id', 'markDone')
            this.markDone.textContent = this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[u].done ? 'Mark Undone' : 'Mark Done'
            
            this.markDone.addEventListener('click', (e) => {
                const target = e.currentTarget.parentNode.parentNode

                switch (e.target.textContent) {
                    case 'Mark Done':
                        e.target.textContent = 'Mark Undone';
                        target.style.backgroundColor = 'lightgreen';
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done = true
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done)
                        break;
                    
                    case 'Mark Undone':
                        e.target.textContent = 'Mark Done'
                        target.style.backgroundColor = 'rgb(255, 169, 169)'
                        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done = false
                        console.log(this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos[e.target.dataset.id].done)
                        break;

                }
            })
        
            this.deleteToDoBtn = document.createElement('div')
            this.deleteToDoBtn.setAttribute('id', 'deleteToDoBtn')

            this.toDo.appendChild(this.todoNumber)
            this.toDoRightSide.appendChild(this.date)
            this.toDoRightSide.appendChild(this.markDone)
            this.toDoRightSide.appendChild(this.deleteToDoBtn)
            this.toDo.appendChild(this.toDoTitle)
            
            this.toDoTitleInputForm.appendChild(this.toDoTitleInput)
            this.toDo.appendChild(this.toDoTitleInputForm)
            this.toDo.appendChild(this.toDoRightSide)

            this.toDoListDOM.appendChild(this.toDo)
    },

    createTodo: function() {
        class ToDo {
            constructor (title, date) {
                this.title = title;
                this.date = date;
                this.done = false;
            }
        }
        this.toDo = new ToDo(this.toDoInput.value, this.inputDate.value)
    },

    addToDo: function() {
        this.projectListArr[this.toDoInputFieldForm.dataset.id].toDos.push(this.toDo)
    },

    

    

    

}
todoApp.init();
})()
