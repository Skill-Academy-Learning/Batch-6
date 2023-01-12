/* arithmetic operators

+   --> adding
-   --> subtracting (hyphen)
*   --> multiplication (asterisk)
/   --> Division (forward slash)
**  --> To the power
%   --> Modulus (remainder) (percentage)
++  --> Increment
--  --> Decrement
*/

let x = 10;
const y = 5;

const sum = x + y; //15
const difference = x - y; //5
const product = x * y; //50
const division = x / y; //2
const square = x ** 2; //100
const cube = y ** 3; //125
const remainder = x % y; //0
const remainder2 = 12 % 5; //2

console.log(
  "Answers: ",
  sum,
  difference,
  product,
  division,
  square,
  cube,
  remainder,
  remainder2
);

x++; //x=x+1
x++;
x--; //x=x-1
x--;

console.log(x);
