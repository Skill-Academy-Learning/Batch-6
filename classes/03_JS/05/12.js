// JS Functions -- functions are first class citizens

/**
 * Functions in JS are called first class citizens because:
 *
 * 1. Functions can be assigned to a variable
 * 2. Functions can be passed as parameters to another function
 * 3. Functions can be returned by another function
 */

const x = function () {
  console.log("function x");
};

const y = function () {
  console.log("function y");

  return function () {
    console.log("another function");
  };
};

y(x);
