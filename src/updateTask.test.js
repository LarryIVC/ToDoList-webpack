// Import the function and any dependencies
const { updateTask } = require('./TaskActions.js');

// Create a mock task manager and rendering function
const taskManager = {
  updateTask: jest.fn(),
};
const renderTasks = jest.fn();

describe('updateTask function', () => {
  it('should update the task description if it is not empty', () => {
    // Set up the test
    const index = 0;
    const inputElement = { value: 'New task description' };

    // Call the updateTask function
    updateTask(taskManager, renderTasks, index, inputElement);

    // Check that the task was updated and rendered
    expect(taskManager.updateTask).toHaveBeenCalledWith(index, inputElement.value.trim());
    expect(renderTasks).toHaveBeenCalled();
  });
});