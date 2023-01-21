// JS Functions -- Hoisting

sayHello(); // works because of function hoisting

function sayHello() {
  console.log("Hello!");
}

// sayHi(); // throws error because let and const variables are not hoisted

const sayHi = function () {
  console.log("Hi!");
};

// console.log(x); // throws error because let and const variables are not hoisted

const x = 100;
