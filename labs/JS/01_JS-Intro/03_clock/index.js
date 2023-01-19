setInterval(printTime, 1000);

function printTime() {
  const time = new Date().toLocaleTimeString();

  document.querySelector("h1").innerText = time;
}
