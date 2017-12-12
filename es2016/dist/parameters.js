
function greet(greeting, name) {
  console.log(`${greeting} ${name}`);
}

greet("Hi", "Bill"); //Hi Bill
greet("Hi"); //Hi undefined
greet(); //undefined undefined

console.log('******************************');

function greetNew(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting} ${name}`);
}

greetNew("Hi", "Bill"); //Hi Bill
greetNew("Hi"); //Hi friend
greetNew(); //Hello friend

console.log('******************************');
//Old JS
function sum() {
  console.log(arguments);

  var sum = 0;
  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

sum(5, 7, 2, 10);

console.log('******************************');
//New JS

function sumNew(...values) {
  let sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
};

sumNew(5, 7, 2, 10);

console.log('******************************');

function sumNew2(...values) {
  console.log(values.reduce(function (prevValue, currentValue) {
    return prevValue += currentValue;
  }));
}

sumNew2(5, 7, 2, 10);