import {addTask} from "./functions.js";
import {handleFormAddTask} from "./functions.js";
import {$formAddTask} from "./constants.js";


$formAddTask.on('submit', handleFormAddTask);

for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)){
        console.log(localStorage[key]);
        const task = JSON.parse(localStorage[key]);
        task && addTask(task);
    }
}