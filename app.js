// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions
const addTodo = (e) => {
    e.preventDefault();
    // console.log('1111')

    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);

    // append to list
    todoList.appendChild(todoDiv);

    // clear todo input value
    todoInput.value = "";
}

// delete and complete btn 
const deleteCheck = (e) => {
    // console.log(e.target);

    const item = e.target;

    // Delete
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add("fall")

        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

