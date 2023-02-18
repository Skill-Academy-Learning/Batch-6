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

/*
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
*/

async function asyncAwaitDemo() {
  try {
    const response1 = await delay(4000);

    console.log("Success response1: ", response1);

    const response2 = await delay(2000);

    console.log("Success response2: ", response2);
  } catch (error) {
    console.log("Error response: ", error);
  } finally {
    console.log("Finally...");
  }
}

asyncAwaitDemo();
