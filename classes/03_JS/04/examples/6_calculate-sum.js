// Loops - for

// Calculate sum of numbers from 1 to n

// Generate random age between 1 to 100
const n = Math.ceil(Math.random() * 100);

console.log("n is: ", n);

let sumOfNumbers = 0;

// for(initialization; condition; increment)
for (let k = 1; k <= n; k++) {
  sumOfNumbers = sumOfNumbers + k;
}

console.log(`Sum of number from 1 to ${n} is: ${sumOfNumbers}`);
