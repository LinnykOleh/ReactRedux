
function add(x, y) {
  return x + y;
}

console.log(add(2, 5));

console.log('******************************');

let addArrow = (x, y) => x + y;

console.log(addArrow(2, 5));
console.log(typeof addArrow); //function

console.log('******************************');

let square = function (x) {
  return x * x;
};
console.log(square(3));

let squareArrow = x => x * x;
console.log(squareArrow(3));

console.log('******************************');

let giveMeAnswer = function () {
  return 42;
};

console.log(giveMeAnswer());

let giveMeAnswerArrow = () => 42;

console.log(giveMeAnswerArrow());

console.log('******************************');

let log = function () {
  console.log('Logging');

};
log();

let logArrow = () => console.log('Logging arrow');
logArrow();

console.log('******************************');

let multiply = function (x, y) {
  let result = x * y;
  return result;
};
console.log(multiply(3, 7));

let multiplyArrow = (x, y) => {
  let result = x * y;
  return result;
};
console.log(multiplyArrow(3, 7));

console.log('******************************');

let getPerson = function () {
  return {name: 'John'}
};
console.log(getPerson());

let getPersonArrow = () => ({name: 'John'});
console.log(getPersonArrow());

console.log('******************************');

(function () {
  console.log('IIFI'); //Immediately-Invoked Function Expression. Немедленно вызываемая функция
})();

(() => console.log('IIFI Arrow'))();

console.log('******************************');
console.log('******************************');
console.log('******************************');
console.log('******************************');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
numbers.forEach((function (num) {
  sum +=num;
}));
console.log('Sum is', sum);

sum = 0;
numbers.forEach((num) => sum += num);
console.log('Sum-arrow is', sum);

console.log('******************************');

let squared = numbers.map(n => n * n);
console.log('Squared is ', squared);

console.log('******************************');

let person = {
  name: 'Bob',
  great : function() {
    // let that = this; //замыкание

    setTimeout(function () {
      // console.log('Hello my name is ' + that.name);
      // console.log('That is ' + that);
      console.log('This is ' + this);
    }, 1000);
  }
};

person.great.apply(person);

// let personArrow = {
//   name: 'Bob',
//   great : function() {
//     window.setTimeout(() => {
//       console.log('Arrow hello my name is ' + this.name);
//       console.log(this); // this берется из контекста. Контекст объекта person это Window
//     }, 1000)
//   }
// };
//
// personArrow.great();
