// Example of callback hell

setTimeout(() => {
  console.log("External setTimeout");

  try {
    setTimeout(() => {
      try {
        console.log("Internal setTimeout");
        throw new Error("boom");
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}, 2000);

// Error handling with a callback is not easy
// Error handling with nested callbacks is even more diffifult
// Writing, understanding and maintaining callback code are all difficult
// Nested callbacks are said to cause callback hell
