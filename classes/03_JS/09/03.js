// sorting

const stringArr = ["orange", "apple", "pineapple", "lemon", "peach", "guava"];

const numberArray = [4, 3, 5, 5, 1, 2];

console.log(stringArr.sort()); // sorts string in ascending order

console.log("-----------------------");

// sorting of numbers using comparator function
// comparator function must return negative number or positive number or zero

console.log(
  numberArray.sort((a, b) => {
    return a - b;
  })
); //sorts number in ascending order

console.log(
  numberArray.sort((a, b) => {
    return b - a;
  })
); //sorts number in descending order

console.log("-----------------------");
// sorting of strings using comparator function
// comparator function must return negative number or positive number or zero

console.log(
  stringArr.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
); //sorts strings in ascending order

console.log(
  stringArr.sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
); //sorts strings in descending order
