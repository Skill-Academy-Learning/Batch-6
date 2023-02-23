//classes

// Object literal approach
let person1 = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

person1.sayHello();

console.log("=============================");

// Constructor function approach
function PersonConstructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = firstName;

  this.sayHello = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

const person2 = new PersonConstructor("Virat", "Kohli");

person2.sayHello();
console.log("=============================");

class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person3 = new PersonClass("Virat", "Kohli");

person3.sayHello();
