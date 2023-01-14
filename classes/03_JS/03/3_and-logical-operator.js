// Logical operator

/*

&&  --> and operator
||  --> or operator
!   --> not operator

*/
console.log("100 === 100 && 200 === 200", 100 === 100 && 200 === 200); //true = true and true

console.log("100 === 100 && 200 === 300", 100 === 100 && 200 === 300); //false = true and false

console.log("200 === 100 && 200 === 200", 200 === 100 && 200 === 200); //false = false and true

console.log("100 === 200 && 200 === 300", 100 === 200 && 200 === 300); //false = false and false

console.log("------------------------------");

console.log(
  "100 === 100 && 200 === 200 && 300 == 300",
  100 === 100 && 200 === 200 && 300 == 300
); //true

console.log(
  "100 === 100 && 200 === 100 && 300 == 300",
  100 === 100 && 200 === 100 && 300 == 300
); //false
console.log("------------------------------");
