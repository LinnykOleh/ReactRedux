
class Task {

  /**Свойство указываются исключительно в конструкторе !!!*/

  constructor(title = Task.getDefaultTitle()){
    this.title = title;
    this._done = false;
    Task.count += 1; // статические переменные
    console.log('Constructor', this);
  }

  complete() {
    this._done = 1;
    console.log(`The task ${this.title} is done`);

  }

  // статический метод
  static getDefaultTitle(){
    return 'Task';
  }

  get done(){
    return this._done === true ? 'Done' : "Not done";
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    }else {
      console.log('Error');
    }
  }

}
// статическае переменная
Task.count = 1;

let task = new Task();

console.log(typeof Task);
console.log(typeof task);
console.log(task instanceof Task);

console.log('******************************');
let task1 = new Task("task1 Clean");
console.log(task1.title);

console.log('******************************');
let task2 = new Task("task2 Clean");
task2.complete();
console.log(task2.title);

console.log('******************************');
let task3 = new Task();
console.log(task3.title);

console.log('******************************');
let task4 = new Task();
console.log(task4.done);

console.log('******************************');
let task5 = new Task();
task4.done = 1; //Error
console.log(task4.done);


