import Task from './Task.js';

export default class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(description) {
    const task = new Task(description, false, this.tasks.length + 1);
    this.tasks.push(task);
    this.save();
  }

  removeTask(index) {
    if (this.tasks.length === 0) {
      return -1;
    }
    this.tasks.splice(index, 1);
    this.orderTasks();
    this.save();
    return 0;
  }

  updateTask(index, description) {
    this.tasks[index].description = description;
    this.save();
  }

  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.save();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  orderTasks() {
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i + 1;
    }
  }
}
