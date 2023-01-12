function buttonClicked() {
  console.log("Button was clicked!");

  document.body.style.backgroundColor = Math.random() > 0.5 ? "red" : "blue";
}

function textChanged(e) {
  console.log(e.target.value);
}

document.getElementById("textbox").addEventListener("keyup", textChanged);
