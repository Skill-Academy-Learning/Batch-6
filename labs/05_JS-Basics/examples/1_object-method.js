// data types

// Objects can have properties and methods
// A method is a function that belongs to an object
const person1 = {
  firstName: "Sreekanth",
  lastName: "M E",
  add: function (x, y) {
    return x + y;
  },
};

console.log(person1.firstName, person1.lastName);

console.log("Sum of 100 and 200: ", person1.add(100, 200));
