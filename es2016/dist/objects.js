//============================
//Old JS
let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function () {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
  }
};

Object.defineProperty(person, 'fullName', {
  get: function () {
    return this.firstName + ' ' + this.lastName;
  },
  set: function (value) {
    this.firstName = value;
  }
});

console.log(person);
person.sayHello();

//================================
//New JS
let personNew = {
  firstName,
  lastName,
  email,
  sayHello() {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
  },
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

console.log(personNew);
personNew.sayHello();

//===========================

let myObject = {};
let property = 'lastName';
myObject = {
  [property]: 'Bill'
};

console.log(myObject);

//==========================

function createCar(property, value) {
  return {
    [property]: value,
    ['_' + property]: value,
    [property.toUpperCase()]: value,
    ['get' + property]() {
      return this[property];
    }
  };
}

console.log(createCar('vin', '1'));