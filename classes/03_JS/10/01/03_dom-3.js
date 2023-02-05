const h1 = document.getElementById("header-one");

h1.classList.add("another-class");

console.log(h1.classList);

h1.classList.remove("another-class");

console.log(h1.classList);

//==============================================

const toggleButton = document.getElementById("toggle-demo");

toggleButton.onclick = () => {
  h1.classList.toggle("yellow-background");
};
//==============================================

h1.style.color = "red";
h1.style.fontSize = "64px";

console.log(h1.style.color, h1.style.fontSize);
