//Mats todo list functions. 



//selectors


const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");


//event listeners

toDoButton.addEventListener("click", addToTheTodoList);


//functions 

function addToTheTodoList(event){
    event.preventDefault();
   // Create a todo div which will contiain each line of the todo list. 
   const toDoDiv = document.createElement("div");
   toDoDiv.classList.add("todo")
   // Create the list
   const newTodoline = document.createElement("li");
    newTodoline.innerText = "hey";
    newTodoline.classList.add('todo-item');
    toDoDiv.appendChild(newTodoline);
    // adding a completed button
    const completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check"></li>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("complete-btn");
    toDoDiv.appendChild(trashButton);
    // add to the main list 
    toDoList.appendChild(toDoDiv);
} 