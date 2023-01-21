// JS Functions -- function declaration vs function expression

// Function declaration
function add1(x, y) {
  return x + y;
}

// Function expression
const add2 = function (x, y) {
  return x + y;
};

console.log(add1(100, 200));

console.log(add2(100, 200));
