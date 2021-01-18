import {addTask, countOfTasks} from "./functions.js";
import {handleFormAddTask} from "./functions.js";
import {$formAddTask, $removeAll} from "./constants.js";
import {removeLocalStorage, handleBtnDel} from "./functions.js";


$formAddTask.on('submit', handleFormAddTask);
$removeAll.click(removeLocalStorage);
$('body').on('click', '.btn-delete', handleBtnDel);

for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)){
        console.log(localStorage[key]);
        const task = JSON.parse(localStorage[key]);
        task && addTask(task);
    }
}
countOfTasks();

