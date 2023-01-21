// JS Functions -- pass by value and pass by reference

// primitive data types like number, string, boolean are passed by value

function something1(value) {
  value = 1000;
}

let x = 100;
something1(x);

console.log(x);

//------------------------------------

// object data types are passed by reference

function something1(value) {
  value.a = 1000;
}

let y = {
  a: 100,
  b: 200,
};

something1(y);

console.log(y);
