const $formAddTask = $('#formAddTask');
const $modalAddTask = $('#modalAddTask');
const statuses = {
    'TODO': 1,
    'IN_PROGRESS': 2,
    'DONE': 3,
};

$formAddTask.on('submit', function (event) {
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
});

function addTask(task){
    $('<li>')
        .appendTo(`[data-status="${task.status}"]`)
        .addClass('list-group-item')
        .text(task.title);
}


for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)){
        console.log(localStorage[key]);
        const task = JSON.parse(localStorage[key]);
        task && addTask(task);
    }
}