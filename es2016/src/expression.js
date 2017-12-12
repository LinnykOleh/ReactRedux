
function TaskFunction() {

}

let TaskFunctionNew = function Task() {

};

class Task {

  constructor(){
    console.log('Creating a task');
  }
}

let TaskClass = class Task {

  constructor(){
    console.log('Creating a task');
  }

};

let SubTask = class extends Task{

  constructor(){
    super();
    console.log('Creating a sub task');
  }

};


let task = new TaskClass();
let subTask = new SubTask();

console.dir(task);
console.dir(subTask);