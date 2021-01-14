import {statuses, $modalAddTask} from "./constants.js";

export function addTask(task){
    $('<li>')
        .appendTo(`[data-status="${task.status}"]`)
        .addClass('list-group-item')
        .text(task.title);
}

export function handleFormAddTask(event) {
    event.preventDefault();

    const newTask = {
        title: $('[name="title"]', this).val(),
        status: statuses.TODO, //1 - to do, 2 - inprogress, 3 - done
        id: new Date().getTime()
    };

    addTask(newTask);
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
    $modalAddTask.modal('hide');
    this.reset();
}
