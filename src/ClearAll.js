import renderTasks from './logic.js';
/* eslint-disable */
export default function ClearAll(taskManager) {
  const bntClearAll = document.getElementById('btn-clear');
  bntClearAll.addEventListener('click', () => {
    taskManager.tasks = taskManager.tasks.filter((task) => !task.completed);
    taskManager.save();
    renderTasks();
  });
}