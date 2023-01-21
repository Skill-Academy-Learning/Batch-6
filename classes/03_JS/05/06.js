// JS Functions -- parameters

// Params without default value
function sayGreeting1(greeting, name) {
  return `${greeting} ${name}`; //template literal
}

console.log(sayGreeting1("Good Morning", "Batch 6"));

console.log(sayGreeting1("Good Morning"));

console.log(sayGreeting1());

console.log("------------------");
// params with default value
function sayGreeting2(greeting = "Hello", name = "World") {
  return `${greeting} ${name}`; //template literal
}

console.log(sayGreeting2("Good Morning", "Batch 6"));

console.log(sayGreeting2("Good Morning"));

console.log(sayGreeting2());
