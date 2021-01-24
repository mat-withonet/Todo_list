//Mats todo list functions.

//selectors

const todoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listeners

toDoButton.addEventListener("click", addToTheTodoList);
toDoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions

function addToTheTodoList(event) {
  event.preventDefault();
  // Create a todo div which will contiain each line of the todo list.
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");
  // Create the list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  toDoDiv.appendChild(newTodo);
  // adding a completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  toDoDiv.appendChild(completedButton);
  // adds the trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  toDoDiv.appendChild(trashButton);
  // add to the main list
  toDoList.appendChild(toDoDiv);
  //Clear the input value
  todoInput.value = "";
}

function deleteCheck(e) {
  //target shows us what we are clicking on.
  //console.log(e.target);
  const button = e.target;
  if (button.classList[0] === "trash-btn") {
    const todo = button.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //What happens when you get the Tick Button.
  if (button.classList[0] === "complete-btn") {
    const todo = button.parentElement;
    // added the class "completed" to the "todo" div.
    todo.classList.toggle("completed");
    console.log("some shit just got toggled");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
