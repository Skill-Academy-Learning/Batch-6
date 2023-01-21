// JS Functions -- arguments object that behaves like an array

function sayGreeting(greeting, name) {
  console.log("arguments: ", arguments);

  console.log("First argument: ", arguments[0]);
  console.log("Second argument: ", arguments[1]);

  return `${greeting} ${name}`;
}

console.log(sayGreeting("Good Morning", "Batch 6"));
