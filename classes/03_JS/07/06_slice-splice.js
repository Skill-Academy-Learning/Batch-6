// Array Methods and Props
let myArray = [1, 2, 3, 4, 5];
let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = [1, 2, 3, 4, 5];

// slice(startingIndex, endingIndex)
console.log(myArray.slice(1, 3));

// splice(startingIndex,deleteCount,...list of items)
// Splice remove & replace

myArray.splice(1, 2);
console.log(myArray);

myArray1.splice(1, 0, 100, 200, 300);
console.log(myArray1);

myArray2.splice(1, 2, 100, 200, 300);
console.log(myArray2);
