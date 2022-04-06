
let tasks = [];


function todo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
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