// Selecting HTML elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Function to create a new task
function createTask(title, description, priority, dueDate) {
  // Create task item elements
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  const taskDetails = document.createElement('div');
  taskDetails.classList.add('task-details');

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = title;
  taskTitle.classList.add('task-title');

  const taskDescription = document.createElement('p');
  taskDescription.textContent = description;
  taskDescription.classList.add('task-description');

  const taskPriority = document.createElement('span');
  taskPriority.textContent = 'Priority: ' + priority;
  taskPriority.classList.add('task-priority');

  const taskDueDate = document.createElement('span');
  taskDueDate.textContent = 'Due: ' + dueDate;
  taskDueDate.classList.add('task-due-date');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function () {
    taskItem.remove();
  });

  // Append elements to task item
  taskDetails.appendChild(taskTitle);
  taskDetails.appendChild(taskDescription);
  taskDetails.appendChild(taskPriority);
  taskDetails.appendChild(taskDueDate);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskDetails);
  taskItem.appendChild(deleteButton);

  // Append task item to task list
  taskList.appendChild(taskItem);
}

// Event listener for task form submission
taskForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form input values
  const taskTitle = document.getElementById('task-title').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskPriority = document.getElementById('task-priority').value;
  const taskDueDate = document.getElementById('task-due-date').value;

  // Create a new task
  createTask(taskTitle, taskDescription, taskPriority, taskDueDate);

  // Clear form inputs
  taskForm.reset();
});
