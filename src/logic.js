import TaskManager from './TaskManager.js';
import ClearAll from './ClearAll.js';

const taskManager = new TaskManager();

export default function renderTasks() {
  const taskList = document.getElementById('ul-tasks');
  taskList.innerHTML = '';
  taskManager.tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.description;
    input.classList.add('txt-task');
    input.addEventListener('focusout', () => {
      updateTask(index, input);
    });
    const checkbox = document.createElement('input');
    listItem.classList.add('li-task');
    checkbox.classList.add('complete');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', (item) => {      
      toggleTask(index);      
    });
    const removeButton = document.createElement('button');
    const trash = document.createElement('i');
    trash.classList.add('fa-regular');
    trash.classList.add('fa-trash-can');
    removeButton.classList.add('btn-remove');
    removeButton.addEventListener('click', () => {
      removeTask(index);
    });
    if(task.completed) {
      input.classList.add('completed');
    } else 
    {
      input.classList.remove('completed');
    }
    removeButton.appendChild(trash);
    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);    
  });
}

function addTask() {
  const input = document.getElementById('new-task');
  const description = input.value.trim();
  if (description === '') {
    return;
  }
  taskManager.addTask(description);
  input.value = '';
  renderTasks();
}

function removeTask(index) {
  taskManager.removeTask(index);
  renderTasks();
}

function updateTask(index, inputElement) {
  const description = inputElement.value.trim();
  if (description === '') {
    return;
  }
  taskManager.updateTask(index, description);
  renderTasks();
}

function toggleTask(index){
  taskManager.toggleTask(index);  
  renderTasks();
}

const myForm = document.getElementById('frm-task');
myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

ClearAll(taskManager, renderTasks);
