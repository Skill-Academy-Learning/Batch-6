//array.filter

//input array
const arr = [10, 20, 30, 40, 50];

//output array
const newArr = arr.filter((element) => {
  return element > 15 && element < 25; //newArr will not contain elements for which this condition is false
});

console.log(arr, newArr);
