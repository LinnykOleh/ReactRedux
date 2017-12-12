
class Task {

  constructor(title){
    this.title = title;
    this.done = false;
    console.log('Creating the task');

  }

  complete(){
    this.done = true;
    console.log(`Task ${this.title} is done`);
  }
}

class SubTask extends Task{ /*наследование*/

  constructor(title, parent){
    super(title);
    this.parent = parent;
    console.log('Creating subtask');
  }

  /*Переопределение родительского метода*/
  complete(){
    super.complete();
    console.log(`Sub task ${this.title} is done`);
  }

}

let task = new Task('Study JS');
let subTask = new SubTask('Study ES6', task);

task.complete();
subTask.complete();

console.log('Task', task);
console.log('SubTask', subTask);

console.log(subTask instanceof Task);
console.log(subTask instanceof SubTask);

