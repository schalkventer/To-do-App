
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

//This function is to display new to do on the screen
function displaytasks(todo)
{
    const list = document.querySelector('.list');

    const isChecked = todo.checked ? 'done': '';

    const addedList = document.createElement("li");

    addedList.setAttribute('class', `todo-item ${isChecked}`);

    addedList.setAttribute('data-key', todo.id);

    addedList.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <img class = "delete" src="images/delete.png" alt="delete icon">
    </button>`;

    list.append(addedList);
}