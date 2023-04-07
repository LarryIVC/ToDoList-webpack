// import _ from 'lodash';
import './style.css';

const arrTasks = [
  {
    description: 'Double-tap to edit',
    completed: false,
    index: 0,
  },
  {
    description: "Drag 'n drop to reorder your list",
    completed: true,
    index: 1,
  },
  {
    description: 'Manage all your lists in one place',
    completed: true,
    index: 2,
  },
  {
    description: 'Resync to clear out the old',
    completed: false,
    index: 3,
  },
];

function makeHtmlList() {
  let html = '';
  if (arrTasks.length === 0) {
    return '<p class= "li-task">No tasks yet</p>';
  }
  for (let i = 0; i < arrTasks.length; i += 1) {
    html += `<li class="li-task">
            <input class="complete" name="complete" type="checkbox" ${arrTasks[i].completed ? 'checked' : ''} >
            <input class="txt-task" name="txt-task" type="text" value="${arrTasks[i].description}">
            <button class="btn-drag"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            <button class="btn-remove"><i class="fa-regular fa-trash-can"></i></button>
          </li>`;
  }
  return html;
}

function showTasks() {
  const ulTasks = document.getElementById('ul-tasks');
  ulTasks.innerHTML = makeHtmlList();
}

showTasks();
