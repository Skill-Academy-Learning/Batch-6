// prototype

// every object in JS has a prototype object
// prototypal inheritance

const a = {
  x: 100,
  testA() {
    console.log("I am method of object a");
  },
};

const b = {
  y: 200,
  testB() {
    console.log("I am method of object b");
  },
};

const c = {
  z: 200,
  testC() {
    console.log("I am method of object c");
  },
};

//-------------------------------------

console.log(Object.getPrototypeOf(c));

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(Object.getPrototypeOf(c));

c.testB();
c.testA();
