
let tasks = [];

function todo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),

  };

  tasks.push(todo);
  displaytasks(todo);
}

// Select the form element
const form = document.querySelector('.form');
// Add a submit event listener
form.addEventListener('submit', event => {
  // prevent page refresh on form submission
  event.preventDefault();
  // select the text input
  const input = document.querySelector('.userInput');

  // Get the value of the input and remove whitespace
  const text = input.value.trim();
  if (text !== '') {
    todo(text);
    input.value = '';
    input.focus();
  }
});

//This function is to print on screen
function displaytasks(todo)
{
  localStorage.setItem('tasksRef', JSON.stringify(tasks));

    const list = document.querySelector('.list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
     
      item.remove();
      return
    }
  
    const isChecked = todo.checked ? 'done': '';
    const addedList = document.createElement("li");
    addedList.setAttribute('class', `todo-item ${isChecked}`);
    addedList.setAttribute('data-key', todo.id);
    addedList.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    Delete
    </button> 
    <button class="edit-todo js-edit-todo">
    Edit
    </button>`;
  

    if(item)
    {
      list.replaceChild(addedList,item);
    }
    else
    {
      list.append(addedList);
    }
    
}

//Select the list
const list = document.querySelector('.list')

//add a click event to the list and its elements tied to it
list.addEventListener('click', event =>{
  if(event.target.classList.contains('js-tick')){
  const itemKey = event.target.parentElement.dataset.key;
  toggleDone(itemKey);
}
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
}

if(event.target.classList.contains('js-edit-todo'))
{
  const itemKey = event.target.parentElement.dataset.key;
  editTodo(itemKey);
}

});

/* This is marks tasks complete*/
function  toggleDone(key)
{
  const index = tasks.findIndex(item => item.id === Number(key));

  tasks[index].checked =!tasks[index].checked;
  displaytasks(tasks[index]);
}

/* This is to delete tasks*/
function deleteTodo(key) {

  const index = tasks.findIndex(item => item.id === Number(key));

  const todo = {
    deleted: true,
    ...tasks[index]
  };

  tasks = tasks.filter(item => item.id !== Number(key));
  displaytasks(todo);
}

/* Edits the task*/
function editTodo(key)
{
 const edit = document.querySelector(".editInput").style.display ="block";
 const close = document.querySelector(".submitBtn").innerHTML ="Close"; 
 const update = document.querySelector(".Sort").innerHTML ="Add";

 close.addEventListener('click' ,event => {
  if(event.target.edit)
 {
   edit.style.display = "none";
 }
 })

 
}


document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('tasksRef');
  if(ref)
  {
    tasks = JSON.parse(ref);
    tasks.forEach(t =>{
      displaytasks(t);
    });
  }
});

