// Find maximum number in the array

const myArray = [10, 7, 345, -5, 567, 333]; //567

let max = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];

  // i = 5, element = 333, max = 567
  if (element > max) {
    max = element; // max = 567
  }
}

console.log(max); // 567
