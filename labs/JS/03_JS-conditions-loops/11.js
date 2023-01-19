// Sum of numbers in a array

const myArray = [10, 20, 30, 40, 50];

// const sum = myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4];

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];

  sum = sum + element;
}

console.log(sum);
