// Import TaskManager class and addTask and removeTask functions from TaskActions module
import TaskManager from './TaskManager.js';
import {
  addTask,
  removeTask,
} from './TaskActions.js';
// Import the 'jest-localstorage-mock' package to mock the localStorage API
import 'jest-localstorage-mock';

// Test suite for addTask and removeTask functions
describe('addTask & removeTask', () => {
  // Clear localStorage before each test
  beforeEach(() => {
    localStorage.clear();
  });

  // Test that addTask function adds a new task to the task manager
  test('should add a task to the task manager', () => {
    // Set up the task manager
    const taskManager = new TaskManager();
    const renderTasks = jest.fn();
    const input = document.createElement('input');
    input.id = 'new-task';
    input.value = 'Test task';
    document.body.appendChild(input);

    // Call addTask function
    addTask(taskManager, renderTasks);

    // Assert that the new task has been added to the task manager,
    // renderTasks function has been called and the tasks have been saved to localStorage
    expect(taskManager.tasks).toContainEqual({ index: expect.any(Number), description: 'Test task', completed: false });
    expect(renderTasks).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(taskManager.tasks),
    );

    // Clean up: remove input element from the document
    document.body.removeChild(input);
  });

  // Test that removeTask function removes a task from the task manager
  test('removeTask should remove a task from the task manager', () => {
    // Set up the task manager
    const taskManager = new TaskManager();
    const input = document.createElement('input');
    input.value = 'Test task';
    addTask(taskManager, jest.fn(), input);
    removeTask(taskManager, jest.fn(), 0);

    // Assert that the task has been removed from the task manager
    expect(taskManager.tasks).toEqual([]);
  });
});
