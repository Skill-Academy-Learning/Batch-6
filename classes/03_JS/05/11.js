// JS Functions -- scope of variables

let x = 100;

/*
1. Parameters are available inside the function only. Not outside. Because scope of the parameter variables is only inside the function
2. Variables defined outside a function are available inside the function also
3. Variables defined inside the function are not available outside the function
*/
function sayGreeting(greeting, name) {
  let y = 200;
  return `${greeting} ${name} ---- ${x}-${y}`;
}

console.log(sayGreeting("Good Morning", "Batch 6"));

//console.log(greeting, name); // will throw error

// console.log(y); //will throw error
