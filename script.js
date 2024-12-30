function createTask(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'todo-item';

    const taskParagraph = document.createElement('p');
    taskParagraph.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function () {
        taskDiv.remove();
    };

    taskDiv.appendChild(taskParagraph);
    taskDiv.appendChild(deleteButton);
    document.getElementById('todoList').appendChild(taskDiv);
}
function addTask() {
    const taskInput = document.getElementById('newTaskInput');
    const taskText = taskInput.value.trim();
    createTask(taskText);
    taskInput.value = ''; 
}
window.onload = function () {
    createTask("ตื่นนอน");
    createTask("อาบน้ำ");
    createTask("ไปทำงาน");
};
