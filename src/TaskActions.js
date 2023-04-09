function addTask(taskManager, renderTasks) {
  const input = document.getElementById('new-task');
  const description = input.value.trim();
  if (description === '') {
    return;
  }
  taskManager.addTask(description);
  input.value = '';
  renderTasks();
}

function removeTask(taskManager, renderTasks, index) {
  taskManager.removeTask(index);
  renderTasks();
}

function updateTask(taskManager, renderTasks, index, inputElement) {
  const description = inputElement.value.trim();
  if (description === '') {
    return;
  }

  taskManager.updateTask(index, description);
  renderTasks();
}

function toggleTask(taskManager, renderTasks, index) {
  taskManager.toggleTask(index);
  renderTasks();
}

export {
  addTask,
  removeTask,
  updateTask,
  toggleTask,
};