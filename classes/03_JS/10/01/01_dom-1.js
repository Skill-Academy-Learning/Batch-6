const h1 = document.getElementById("header-one");
console.log(h1.innerText);

h1.innerText = "New Text";

const div = document.getElementById("test-div");

div.innerHTML = "<strong>sdsdsdsd</strong>";
//------------------------------------------------
//There are 2 approaches to set and get attribute values
const input = document.getElementById("textbox");

//Approach-1
input.type = "password"; //setting attribute
console.log(input.type); //getting attribute

//Approach-2
input.setAttribute("type", "number"); //setting attribute
console.log(input.getAttribute("type")); //getting attribute
