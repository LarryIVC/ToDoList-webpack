import TaskManager from './TaskManager';
import { addTask, removeTask } from './TaskActions';
import 'jest-localstorage-mock';

describe('addTask & removeTask', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a task to the task manager', () => {
    // Set up the task manager
    const taskManager = new TaskManager();
    const renderTasks = jest.fn();
    const input = document.createElement('input');
    input.id = 'new-task';
    input.value = 'Test task';
    document.body.appendChild(input); 

    addTask(taskManager, renderTasks);

    expect(taskManager.tasks).toContainEqual({ index: expect.any(Number), description: 'Test task', completed: false });
    expect(renderTasks).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'tasks',
      JSON.stringify(taskManager.tasks)
    );

    document.body.removeChild(input);
  });

  test('removeTask should remove a task from the task manager', () => {
    // Set up the task manager
    const taskManager = new TaskManager();
    const input = document.createElement('input');
    input.value = 'Test task';
    addTask(taskManager, jest.fn(), input);
    removeTask(taskManager, jest.fn(), 0);

    expect(taskManager.tasks).toEqual([]);
  });
});
