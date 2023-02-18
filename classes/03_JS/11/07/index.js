// AJAX -- Asynchronous JavaScript and XML

const url = "https://run.mocky.io/v3/b49e58a0-2fbb-4876-a783-6d6f0e8a01f9";

/*
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
  console.log(xhr.readyState, xhr.status);

  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.open("get", url); // Telling xhr what to do

xhr.send(); // Calling backend url

*/
// Convert above code to promise

function ourFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      } catch (error) {
        reject(error);
      }
    });

    try {
      xhr.open("get", url); // Telling xhr what to do

      xhr.send(); // Calling backend url
    } catch (error) {
      reject(error);
    }
  });
}

ourFetch(url)
  .then((response) => {
    console.log("Promise Response: ", response);
  })
  .catch((error) => {
    console.log("Promise Error: ", error);
  })
  .finally(() => {
    console.log("Promise Finally....");
  });

async function apiCall() {
  try {
    const response = await ourFetch(url);
    console.log("Async/Await Response: ", response);
  } catch (error) {
    console.log("Async/Await Error: ", error);
  } finally {
    console.log("Async/Await Finally....");
  }
}

apiCall();

/////////////////////////////////////////////////

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((responseJSON) => {
    console.log("Promise Fetch Response: ", responseJSON);
  })
  .catch((error) => {
    console.log("Promise Fetch Error: ", error);
  })
  .finally(() => {
    console.log("Promise Fetch Finally....");
  });

async function fetchAPICall() {
  try {
    const response = await fetch(url);

    const responseJSON = await response.json();

    console.log("Async/Await Fetch Response: ", responseJSON);
  } catch (error) {
    console.log("Async/Await Fetch Error: ", error);
  } finally {
    console.log("Async/Await Fetch Finally....");
  }
}

fetchAPICall();
