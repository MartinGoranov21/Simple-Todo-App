var counter = 0;

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var counterSpan = document.getElementById('counter');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.className = 'taskItem';

        var taskNumber = document.createElement('span');
        taskNumber.textContent = ++counter + '. ';
        newTask.appendChild(taskNumber);

        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        newTask.appendChild(taskText);

        newTask.innerHTML += '<button onclick="removeTask(this)">Remove</button>';

        taskList.appendChild(newTask);
        taskInput.value = '';

        counterSpan.textContent = counter;
    }
}

function removeTask(button) {
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);

    document.getElementById('counter').textContent = --counter;
}
