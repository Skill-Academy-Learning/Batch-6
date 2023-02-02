const currentDate = new Date();

console.log("Current datetime: ", currentDate);

console.log("====================");

console.log(new Date(0));
console.log(new Date(86400000)); //1 day
console.log(new Date(2 * 86400000)); //2 days

console.log("====================");

console.log(new Date(0));
console.log(new Date(-86400000)); //1 day

// JS stores date in milli seconds
