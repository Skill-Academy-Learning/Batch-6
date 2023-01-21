// JS Functions -- parameters vs arguments

// parameters are  in function declaration
function sayGreeting(greeting, name) {
  return `${greeting} ${name}`;
}

console.log(sayGreeting("Good Morning", "Batch 6")); //arguments are values passed when invoking
