const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskInput.value.trim().length > 0) {
    const newTask= document.createElement('div');
    newTask.classList.add('task');

    newTask.insertAdjacentHTML('beforeEnd',
      `<div class="task__title">
      ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>`
    );
    taskInput.value = '';
    tasksList.appendChild(newTask);
    const removeButtom = newTask.querySelector('.task__remove');
    removeButtom.addEventListener('click', (event) => {
      event.currentTarget.closest('.task').remove();
    });
  }
});