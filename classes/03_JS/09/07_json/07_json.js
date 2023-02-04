// JSON -- Java Script Object Notation

const obj = {
  i: 100,
  j: 200,
  k: "something",
};

// Convert JS Object to JSON string
console.log(JSON.stringify(obj));

// Convert JSON string to JS Object
console.log(JSON.parse('{"i":100,"j":200,"k":"something"}'));
