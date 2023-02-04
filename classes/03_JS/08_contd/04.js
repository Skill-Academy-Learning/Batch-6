// Objects

const person = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

//setting & getting: approach-1
person.firstName = "Rishabh";
person.lastName = "Pant";

console.log(person.firstName, person.lastName);
person.sayHello();

console.log("----------------------");

//setting & getting : approach-2
person["firstName"] = "Rishabh";
person["lastName"] = "Pant";

console.log(person["firstName"], person["lastName"]);

person["sayHello"]();
