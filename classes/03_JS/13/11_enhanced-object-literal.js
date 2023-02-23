//Enhanced object literal

const x = 100;
const y = 200;

const test = function test() {
  console.log("I am test method");
};

const obj = {
  x,
  y,
  test,
};

console.log(obj);
