// JS Built-In Constructor functions

/**
 * Some of the JS Data Types:
 * number
 * string
 * boolean
 * Array
 * Object
 */

const x = 100.237273;
console.log(x.toFixed(4));
//create number using number constructor
const y = new Number(100.12345);

console.log(y.toFixed(4));

console.log(x + 10, y + 10);

console.log("======================");
//create array using array constructor
const arr = new Array(10, 20, 30, 40, 50);

console.log(arr);
console.log("======================");

const myString = new String("some string value");
const myBoolean = new Boolean(false);
