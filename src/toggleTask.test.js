// Import the function and any dependencies
const { toggleTask } = require('./TaskActions.js');

// Create a mock task manager and rendering function
const taskManager = {
  toggleTask: jest.fn(),
};
const renderTasks = jest.fn();

describe('toggleTask function', () => {
  test('toggles completed status', () => {
    // Set up the test
    const index = 2;

    // Call the function
    toggleTask(taskManager, renderTasks, index);

    // Check that the task was toggled and rendered
    expect(taskManager.toggleTask).toHaveBeenCalledWith(index);
    expect(renderTasks).toHaveBeenCalled();
  });
});