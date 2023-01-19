// Find minimum number in the array

const myArray = [10, 7, 345, -5, 567, 333]; //567

let min = myArray[0];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];

  if (element < min) {
    min = element;
  }
}

console.log(min); // -5
