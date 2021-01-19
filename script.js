import {addTask, countOfTasks} from "./functions.js";
import {handleFormAddTask} from "./functions.js";
import {$dateTimePicker1, $formAddTask, $formEditTask, $removeAll} from "./constants.js";
import {removeLocalStorage, handleFormEditTask, handleBtnEdit, handleBtnDel} from "./functions.js";


$formAddTask.on('submit', handleFormAddTask);
$formEditTask.on('submit', handleFormEditTask);
$removeAll.click(removeLocalStorage);
$('body').on('click', '.btn-delete', handleBtnDel);
$('body').on('click', '.btn-edit', handleBtnEdit);
for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)){
        console.log(localStorage[key]);
        const task = JSON.parse(localStorage[key]);
        task && addTask(task);
    }
}
countOfTasks();

