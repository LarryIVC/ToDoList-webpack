import ClearAll from './ClearAll.js';
import TaskManager from './TaskManager.js';

describe('ClearAll', () => {
  let taskManager;
  let renderTasks;
  let btnClear;

  beforeEach(() => {
    // Set up mock TaskManager and renderTasks functions
    taskManager = new TaskManager();
    taskManager.tasks = [{ description: 'Task 1', completed: true }, { description: 'Task 2', completed: false }, { description: 'Task 3', completed: true }];
    taskManager.save = jest.fn();
    renderTasks = jest.fn();

    // Mock the button element
    document.body.innerHTML = '<button id="btn-clear">Clear All</button>';
    btnClear = document.getElementById('btn-clear');

    // Set up event listener on button element
    ClearAll(taskManager, renderTasks);
  });

  test('should remove completed tasks from the task manager', () => {
    // Click the Clear All button
    btnClear.click();

    // Check that completed tasks were removed from the task manager
    expect(taskManager.tasks).toEqual([{ description: 'Task 2', completed: false }]);

    // Check that the save and renderTasks functions were called
    expect(taskManager.save).toHaveBeenCalled();
    expect(renderTasks).toHaveBeenCalled();
  });
});
