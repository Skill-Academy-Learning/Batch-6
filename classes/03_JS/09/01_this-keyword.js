// "this" keyword

const p1 = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello() {
    console.log("Inside a object: ", this); // Refers to the object itself
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

p1.sayHello();
console.log("==========================");

// JS needs a host environment to run. In the browser the host environment is represented by the object "window"
console.log("Inside the script: ", this); //Refers to window

console.log("==========================");

function testing() {
  console.log("Inside a function that is inside the script: ", this); //Refers to the window object
}

testing();

console.log("==========================");

//Click button to print
document.getElementById("my-button").onclick = function () {
  console.log(this); //Refers to the button object
};

console.log("==========================");

const p2 = {
  firstName: "Virat",
  lastName: "Kohli",
  sayHello: () => {
    console.log("Inside a object: ", this); // Refers to the window as window is the value of this where this object is defined
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

p2.sayHello();
console.log("==========================");

const testAF = () => {
  console.log(this);
};

testAF(); //window as "this" where the AF is defined is "window"

console.log("==========================");
