// AJAX -- Asynchronous JavaScript and XML

const url = "https://run.mocky.io/v3/b49e58a0-2fbb-4876-a783-6d6f0e8a01f9";

// Fetch returns a promise object
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((responseText) => {
    showData(responseText);
  });

/*
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  console.log(xhr.readyState, xhr.status);

  if (xhr.readyState === 4 && xhr.status === 200) {
    showData(xhr.responseText);
  }
});



xhr.open("get", url); // Telling xhr what to do

xhr.send(); // Calling backend url

*/

function showData(users) {
  const tbody = document.getElementById("table-body");

  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${user.id}</td>
                  <td>${user.first_name} ${user.last_name}</td>
                  <td>${user.gender}</td>
                  <td>${user.email}</td>`;

    tbody.append(tr);
  }
}
