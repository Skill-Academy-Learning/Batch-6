// Print 7th number of the Fibonacci sequence -- 8
// Required output 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const n = 7;

let firstNumber = 0;
let secondNumber = 1;

for (i = 0; i < 10; i++) {
  let nextNumber;

  if (i === 0 || i === 1) {
    nextNumber = i;
  } else {
    nextNumber = firstNumber + secondNumber;

    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  if (i === n - 1) {
    console.log(nextNumber);
  }
}
