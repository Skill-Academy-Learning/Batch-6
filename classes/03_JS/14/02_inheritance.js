class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

//inheritance
class SoftwareDeveloper extends Person {
  constructor(firstName, lastName, middleName) {
    super(firstName, lastName);

    this.middleName = middleName;
  }

  //method overriding
  sayHello() {
    console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
  }
}

const sd1 = new SoftwareDeveloper("Mohandas", "Gandhi", "Karamchand");

console.log(sd1);

sd1.sayHello();
