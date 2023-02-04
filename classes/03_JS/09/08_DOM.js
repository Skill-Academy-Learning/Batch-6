// DOM -- Document Object Model

// CRUD / manipulate: Create, Read, Update, Delete
// Changed styling

/**
createElement()
append()

remove()
innerText
innerHTML (has security issue)
setAttribute()
getAttribute()
dataset property for setting/getting data attributes
 */

// Creating a button
const button = document.createElement("button");
button.innerText = "Click Me!";
button.onclick = () => (document.body.style.backgroundColor = "lightblue");

document.body.append(button);

//--------------------------------------------
const br1 = document.createElement("br");
document.body.append(br1);

const br2 = document.createElement("br");
document.body.append(br2);
//--------------------------------------------

const input = document.createElement("input");
input.type = "password";

input.style.marginTop = "50px";

document.body.append(input);

//--------------------------------------------

const h1 = document.getElementById("myh1");

console.log(h1.innerText); //Reading

//--------------------------------------------
h1.innerText = "India"; //Updating
//--------------------------------------------
const h2 = document.getElementById("deleteme");

h2.remove(); // Deleting
//--------------------------------------------
document.body.style.backgroundColor = "lightcoral"; //background-color

let x = 10; // identifier name should start with alphabet, number, $, _
