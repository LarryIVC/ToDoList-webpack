export default function ClearAll(taskManager, renderTasks) {
  const bntClearAll = document.getElementById('btn-clear');
  bntClearAll.addEventListener('click', () => {
    taskManager.tasks = taskManager.tasks.filter((task) => !task.completed);
    taskManager.save();
    renderTasks();
  });
}