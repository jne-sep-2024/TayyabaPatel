// script.js

// Select elements
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a button to delete the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append the span and button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input
    taskInput.value = '';
}

// Event listener for the button
addTaskButton.addEventListener('click', addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
