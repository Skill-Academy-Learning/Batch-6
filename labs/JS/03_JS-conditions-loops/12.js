// Average of numbers in a array

const myArray = [10, 20, 30, 40, 50];

let sum = 0;
let lengthOfArray = myArray.length;

for (let i = 0; i < lengthOfArray; i++) {
  const element = myArray[i];

  sum = sum + element;
}

console.log(sum / lengthOfArray);
