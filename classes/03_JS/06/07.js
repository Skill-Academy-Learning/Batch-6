// call / apply / bind
// Method borrowing

// A function that is part of a object is called a method

const person1 = {
  firstName: "Virat",
  lastName: "Kohli",
  getFullName: function (greeting, title) {
    console.log(`${greeting} ${title} ${this.firstName} ${this.lastName}`);
  },
};

const person2 = {
  firstName: "Rohit",
  lastName: "Sharma",
};
//Normal method calling
person1.getFullName("Hello", "Mr.");

//call
person1.getFullName.call(person2, "Hello", "Mr.");

//apply
person1.getFullName.apply(person2, ["Hello", "Mr."]);

//bind
const boundGetFullName = person1.getFullName.bind(person2);

boundGetFullName("Hello", "Mr.");
