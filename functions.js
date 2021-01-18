import {statuses, $modalAddTask} from "./constants.js";

export function addTask(task){
    const $btnDelete = $('<button>').addClass('btn btn-danger btn-xs pull-right btn-delete').html('<i class="glyphicon glyphicon-trash"></i>');
    const $btnEdit = $('<button>').addClass('btn btn-warning btn-xs pull-right btn-edit').html('<i class="glyphicon glyphicon-pencil"></i>');
    $('<li>')
        .appendTo(`[data-status="${task.status}"]`)
        .addClass('list-group-item')
        .text(task.title)
        .append($btnDelete)
        .append($btnEdit)
        .attr('data-id', task.id);
}

export function removeLocalStorage(){
    localStorage.clear();
    window.location.reload();
    $('<span>').appendTo('[class="badge badge-secondary"]').text(localStorage.length);

}

export function countOfTasks(){
    $('span').empty();
    $('<span>').appendTo('[class="badge badge-secondary toDo"]').text(localStorage.length);
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
    countOfTasks();
}

export function handleBtnDel(event){
    const $parent = $(this).parents('[data-id]');
    const id = $parent.attr('data-id');

    $parent.remove();
    localStorage.removeItem(id);
}
