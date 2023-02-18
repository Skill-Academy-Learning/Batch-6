const delay = new Promise((resolve, reject) => {
  // Write async code

  setTimeout(() => {
    const randomNumber = Math.random();

    if (randomNumber < 0.5) {
      resolve({ success: true });
    } else {
      reject({ success: false });
    }
  }, 2000);
});

delay
  .then((response) => {
    console.log("Success response: ", response);
  })
  .catch((error) => {
    console.log("Error response: ", error);
  });
