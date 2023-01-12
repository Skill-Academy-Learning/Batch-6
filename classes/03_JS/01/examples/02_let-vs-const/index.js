someVariable = "some text"; // Can declare a variable without let keyword. But don't do this as it is bad programming practice

someVariable = "some other text";

console.log(someVariable);

//=======================================
console.log("====================");
let nameVariable; // No need to assigna value at the time of declaration

nameVariable = "Sreekanth";

console.log(nameVariable);

nameVariable = "Charan"; //no error here because nameVariable is a variable

console.log(nameVariable);

//========================================

console.log("====================");

const nationality = "Indian"; //Have to assign value at the time of declaration

console.log(nationality);

nationality = "American"; //we got error here becuae nationality is a constant

console.log(nationality);

// Note: let and const are JS keywords / JS syntax
