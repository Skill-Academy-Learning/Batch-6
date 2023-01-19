// Print 10 numbers of the Fibonacci sequence
// Required output 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let firstNumber = 0;
let secondNumber = 1;

for (i = 0; i < 10; i++) {
  if (i === 0 || i === 1) {
    console.log(i);
  } else {
    const nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);

    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }
}
