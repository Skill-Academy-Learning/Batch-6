// String methods

// length property
console.log("Hello has", "Hello".length, "characters.");

console.log("--------------------------");

//split method
console.log("1,2,3,4,5".split(","));

console.log("100*200*300*500".split("*"));

console.log("This is an example of splitting".split(" "));

console.log("--------------------------");

// slice method - slice(start, end)

console.log("abcdefghij".slice(0)); //output: abcdefghij
console.log("abcdefghij".slice(1)); //output: bcdefghij
console.log("abcdefghij".slice(2)); //output: cdefghij

console.log("abcdefghij".slice(1, 2)); //output: b

console.log("abcdefghij".slice(1, 3)); //output: bc

console.log("abcdefghij".slice(5, 10)); //output: fghij

console.log("abcdefghij".slice(-1)); //output: j

console.log("abcdefghij".slice(-2)); //output: ij

console.log("abcdefghij".slice(-2, -1)); //output: i
