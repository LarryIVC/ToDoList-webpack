import TaskManager from './TaskManager.js';

const taskManager = new TaskManager();

export function addTask() {
  const input = document.getElementById('new-task');
  const description = input.value.trim();
  if (description === '') {
    return;
  }
  taskManager.addTask(description);
  input.value = '';
}

export function updateTask(index, inputElement) {
  const description = inputElement.value.trim();
  if (description === '') {
    return;
  }
  taskManager.updateTask(index, description);
}

export function toggleTask(index) {
  taskManager.toggleTask(index);
}

export function removeTask(index) {
  taskManager.removeTask(index);
}