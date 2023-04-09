
export default function ClearAll(taskManager) {
    taskManager.tasks = taskManager.tasks.filter((task) => !task.completed);
    taskManager.save();  
}