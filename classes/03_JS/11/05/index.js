function delay(timeoutInMs) {
  return new Promise((resolve, reject) => {
    // Write async code

    setTimeout(() => {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        resolve({ success: true });
      } else {
        reject({ success: false });
      }
    }, timeoutInMs);
  });
}

delay(1000)
  .then((response) => {
    console.log("Success response: ", response);

    return delay(2000);
  })
  .then((response) => {
    console.log("Success response: ", response);
  })
  .catch((error) => {
    console.log("Error response: ", error);
  })
  .finally(() => {
    console.log("Finally...");
  });

// Promise chaining instead of callback nesting makes reading the code and error handling much easier compared to callbacks
