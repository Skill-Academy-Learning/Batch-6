// Throwing custom Errors

try {
  testing();

  console.log("This will not print in console");
} catch (error) {
  console.log("Error Name: ", error.name);
  console.log("Error Message: ", error.message);

  console.log("Error stack: ", error.stack);
} finally {
  console.log("This completes the program");
}

function testing() {
  const myNewError = new Error("This is my error");

  throw myNewError;
}
