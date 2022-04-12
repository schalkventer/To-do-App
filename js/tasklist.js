const elements = {
	form: document.querySelector("#new-task-form");
	input: document.querySelector("#new-task-input");
	list: document.querySelector("#tasks");
	cal: document.querySelector("#calendar");
}

const createId = () => `${Math.floor(Math.random() * 10000)}-${new Date().getTime()}`

const createTask = () => {\
  const id = createId()
  const task = input.value;
  const date = elements.cal.value;

  if (!task && !date) return alert("Please fill in task and select date");
  if (!task) return alert("Please fill in task");
  if (!date) return alert("Please fill select date");

  const task = document.createElement("div");
  
  task.innerHTML = `
  	<div class="task" data-id="${id}">
		<div class='content'>
		  <input type="checkbox" class="tick">
		  <input class="text" id="text" readonly>
		  <label class="due-date" for="text">${date}</label>
		</div>

		<div class="actions">
			<button class="edit" data-id="${id}">Edit</button>
 			<button class="delete" data-id="${id}">Delete</button>
		</div>
	</div>
  `

  element.list.appendChild(task);
  return task
}

elements.list.addEventListener('click', event => {
	const { target } = event;
	
	const { id } = target.dataset
	const task = id ? document.querySelector('[data-id="${id}"]') : null
	      
	const type = {
		edit: event.target.classList.contains('edit'),
		delete: event.target.classList.contains('delete'),
	}
	
	const isFromSaveLabel = target.innerText.toLowerCase() === 'save'
	
	if (task && type.edit && isFromSaveLabel) {	
	  const text = task.querySelector('text')
	  target.innerText = 'Edit'
	  text.addAttribute('readonly')
	  return
	}
	
	if (task && type.edit) {	
	  const text = task.querySelector('text')
	  target.innerText = 'Save'
	  text.removeAttribute('readonly')
	  text.focus()
	  return
	}
	
	if (task && type.delete) {
	 return	
	}
})

const submitHandler = (event) => {
  event.preventDefault(); 
  createTask();
}
  
form.addEventListener("submit", submitHandler);
