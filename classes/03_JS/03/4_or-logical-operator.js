// Logical operator

/*

||  --> or operator
||  --> or operator
!   --> not operator

*/
console.log("100 === 100 || 200 === 200", 100 === 100 || 200 === 200); //true = true or true

console.log("100 === 100 || 200 === 300", 100 === 100 || 200 === 300); //true = true or false

console.log("200 === 100 || 200 === 200", 200 === 100 || 200 === 200); //true = false or true

console.log("100 === 200 || 200 === 300", 100 === 200 || 200 === 300); //false = false or false

console.log("------------------------------");

console.log(
  "100 === 100 || 200 === 200 || 300 == 300",
  100 === 100 || 200 === 200 || 300 == 300
); //true

console.log(
  "100 === 100 || 200 === 100 || 300 == 300",
  100 === 100 || 200 === 100 || 300 == 300
); //true
console.log("------------------------------");
