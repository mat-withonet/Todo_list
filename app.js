//Mats todo list functions. 



//selectors


const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//event listeners

todoButton.addEventListener("click", addTodo);


//functions 

function addTodo(e) {
    //Prevent natural behaviour
    e.preventDefault();
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    //Save to local - do this last
    //Save to local
    saveLocalTodos(todoInput.value);
    //
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  }

// function addToTheTodoList(event){
//     event.preventDefault();
//    // Create a todo div which will contiain each line of the todo list. 
//    const toDoDiv = document.createElement("div");
//    toDoDiv.classList.add("todo")
//    // Create the list
//    const newTodoline = document.createElement("li");
//     newTodoline.innerText = "hey";
//     newTodoline.classList.add('todo-item');
//     toDoDiv.appendChild(newTodoline);
//     // adding a completed button
//     const completedButton = document.createElement("button")
//     completedButton.innerHTML = '<i class="fas fa-check"></li>';
//     completedButton.classList.add("complete-btn");
//     toDoDiv.appendChild(completedButton);
//     // trash button
//     const trashButton = document.createElement("button")
//     trashButton.innerHTML = '<i class="fas fa-trash"></li>';
//     trashButton.classList.add("trash-btn");
//     toDoDiv.appendChild(trashButton);
//     // add to the main list 
//     toDoList.appendChild(toDoDiv);
// } 