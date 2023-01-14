// Conditional operators - used for comparision

/*

===
            ==
!==
            !=
<
>
<=
>=

*/

console.log("100 === 100", 100 === 100); //true
console.log("100 !== 100", 100 !== 100); //false
console.log("100 !== 99", 100 !== 99); //true
console.log("50 < 50", 50 < 50); //false
console.log("50 === 50", 50 === 50); //true
console.log("50 <= 50", 50 <= 50); //true
console.log("50 > 50", 50 > 50); //false
console.log("50 >= 50", 50 >= 50); //true

console.log("---------------------------");

//strict compare. Compares both value and data type
console.log("'100' === 100", "100" === 100); // false

//normal compare. Compares only the value
console.log("'100' == 100", "100" == 100); // true

//strict compare. Compares both value and data type
console.log("'100' !== 100", "100" !== 100); // true

//normal compare. Compares only the value
console.log("'100' != 100", "100" != 100); // false
