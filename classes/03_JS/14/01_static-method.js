class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // static method
  static sayHi(param1) {
    // calculations
  }
}

const person2 = new Person("Virat", "Kohli");

person2.sayHello();

Person.sayHi();
