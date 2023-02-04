// Error stack

try {
  testOne();

  console.log("This will not print in console");
} catch (error) {
  console.log("Error Name: ", error.name);
  console.log("Error Message: ", error.message);

  console.log("Error stack: ", error.stack);
}

function testOne() {
  testTwo();
}

function testTwo() {
  testThree();
}

function testThree() {
  testFour();
}

function testFour() {
  Math.sxsdasds();
}
