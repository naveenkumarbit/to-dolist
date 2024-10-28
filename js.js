let editIndex = null;

function openAddTaskPopup() {
    document.getElementById('add-task-popup').style.display = 'flex';
}

function closeAddTaskPopup() {
    document.getElementById('add-task-popup').style.display = 'none';
    document.getElementById('task-input').value = '';
    document.getElementById('deadline-input').value = '';
}

function openEditTaskPopup(index) {
    document.getElementById('edit-task-popup').style.display = 'flex';
    const taskElement = document.getElementById('task-list').children[index];
    const taskText = taskElement.childNodes[0].textContent.replace(/ Edit Delete$/, '');
    const deadline = taskElement.childNodes[1].textContent.replace('Deadline: ', '');
    document.getElementById('edit-task-input').value = taskText;
    document.getElementById('edit-deadline-input').value = deadline;
    editIndex = index;
}

function closeEditTaskPopup() {
    document.getElementById('edit-task-popup').style.display = 'none';
    document.getElementById('edit-task-input').value = '';
    document.getElementById('edit-deadline-input').value = '';
}

function addTask() {
    var taskText = document.getElementById('task-input').value;
    var deadline = document.getElementById('deadline-input').value;
    if (taskText === '' || deadline === '') {
        alert('Please enter a task and deadline.');
        return;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskText));

    var deadlineSpan = document.createElement('span');
    deadlineSpan.appendChild(document.createTextNode('Deadline: ' + deadline));
    li.appendChild(deadlineSpan);

    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.classList.add('edit-btn');
    editBtn.onclick = function() {
        var index = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement);
        openEditTaskPopup(index);
    };

    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        var li = this.parentElement;
        li.parentElement.removeChild(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
    closeAddTaskPopup();
}

function editTask() {
    var taskText = document.getElementById('edit-task-input').value;
    var deadline = document.getElementById('edit-deadline-input').value;
    if (taskText === '' || deadline === '') {
        alert('Please enter a task and deadline.');
        return;
    }
    var taskList = document.getElementById('task-list').children[editIndex];
    taskList.childNodes[0].textContent = taskText;
    taskList.childNodes[1].textContent = 'Deadline: ' + deadline;

    closeEditTaskPopup();
}
