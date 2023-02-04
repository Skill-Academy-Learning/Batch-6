// Error Handling

try {
  Math.sxsdasds();

  console.log("This will not print in console");
} catch (error) {
  console.log("Error Name: ", error.name);
  console.log("Error Message: ", error.message);

  console.log("Error stack: ", error.stack);
}
