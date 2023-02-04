// Error stack

try {
  console.log(x);

  let x = 100;

  console.log("This will not print in console");
} catch (error) {
  console.log("Error Name: ", error.name);
  console.log("Error Message: ", error.message);

  console.log("Error stack: ", error.stack);
} finally {
  console.log("This completes the program");
}
