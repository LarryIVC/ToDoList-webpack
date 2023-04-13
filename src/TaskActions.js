function addTask(taskManager, renderTasks, input) {
  /*const description = inputElement.value;
  const task = {
    id: taskManager.tasks.length,
    description,
    completed: false,
  };
  taskManager.addTask(task);
  inputElement.value = '';
  renderTasks();
  localStorage.setItem('tasks', JSON.stringify(taskManager.tasks));*/
  
  const description = input.value.trim();
  if (!description) return;

  const task = taskManager.addTask(description);
  renderTasks();
  input.value = '';


  /*const input = document.getElementById('new-task');
  if (!input) {
    return;
  }
  const description = input.value.trim();
  if (description === '') {
    return;
  }
  taskManager.addTask(description);
  input.value = '';
  renderTasks();*/
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