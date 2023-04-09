import ClearAll from "./ClearAll.js";
import TaskManager from "./TaskManager.js";
import { addTask, removeTask, updateTask, toggleTask } from "./link.js";

const taskManager = new TaskManager();
const bntClearAll = document.getElementById("btn-clear");

export default function renderTasks() {
  const taskList = document.getElementById("ul-tasks");
  taskList.innerHTML = "";
  taskManager.tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    const input = document.createElement("input");
    input.type = "text";
    input.value = task.description;
    input.classList.add("txt-task");
    input.addEventListener("focusout", () => {
      updateTask(index, input);
      renderTasks();
    });
    const checkbox = document.createElement("input");
    listItem.classList.add("li-task");
    checkbox.classList.add("complete");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("click", () => {
      toggleTask(index);
      renderTasks();
    });

    const removeButton = document.createElement("button");
    const trash = document.createElement("i");
    trash.classList.add("fa-regular");
    trash.classList.add("fa-trash-can");
    removeButton.classList.add("btn-remove");
    removeButton.addEventListener("click", () => {
      removeTask(index);
      renderTasks();
    });

    if (task.completed) {
      input.classList.add("completed");
    } else {
      input.classList.remove("completed");
    }
    removeButton.appendChild(trash);
    listItem.appendChild(checkbox);
    listItem.appendChild(input);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  });
}

const myForm = document.getElementById("frm-task");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskManager.tasks = addTask();
  renderTasks();
});

bntClearAll.addEventListener("click", () => {
  ClearAll(taskManager);
  renderTasks();
});