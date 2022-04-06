
let tasks = [];

const currentdt = new Date()

function todo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
    timestamp: currentdt
  };

  tasks.push(todo);
  console.log(tasks);
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

function displaytasks()
{
    const list = document.querySelector('list');

    const isChecked = todo.checked ? 'done': '';

    const addedList = document.createElement('list');

    addedList.setAttribute('class', `task-item ${isChecked}`);

    addedList.setAttribute('data-key', todo.id);

    addedList.innerHTML = list;

    list.append(addedList);
}