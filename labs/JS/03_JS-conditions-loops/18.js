// Find the last position of a given number in the array

const myArray = [10, 20, 30, 40, 50, 30, 60, 70];
const myNumber = 30;

for (let index = myArray.length - 1; index > 0; index--) {
  const element = myArray[index];

  if (element === myNumber) {
    console.log("Found number at position: ", index + 1);

    break;
  }
}
