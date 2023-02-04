// Constructor function
// Constructor functions help to construct objects

// Object literal approach to create JS objects
const p1 = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

console.log(p1);

p1.sayHello();
console.log("-------------------------");

function Employee(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;

  this.sayHello = function () {
    console.log(`${this.firstName} ${this.lastName}`);
  };
}

const p2 = new Employee("Virat", "Kohli");
const p3 = new Employee("Rishabh", "Pant");
const p4 = new Employee("Sreekanth", "M E");

console.log(p2, p3);

p2.sayHello();
p3.sayHello();
