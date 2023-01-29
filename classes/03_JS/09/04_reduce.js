//array.reduce

//input array
const arr = [10, 20, 30, 40, 50];

//output array
const reducedValue1 = arr.reduce((accumulator, element) => {
  // loop-1 --> 0, 10
  // loop-2 --> 10, 20
  // loop-3 --> 30, 30
  // loop-4 --> 60, 40
  // loop-5 --> 100, 50

  return accumulator + element;
}, 0);

console.log(arr, reducedValue1);

console.log("============================");
const reducedValue2 = arr.reduce(
  (accumulator, element) => {
    return {
      sum: accumulator.sum + element,
      product: accumulator.product * element,
    };
  },
  {
    sum: 0,
    product: 1,
  }
);

console.log(arr, reducedValue2);
