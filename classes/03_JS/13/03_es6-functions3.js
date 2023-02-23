// find, findIndex

const arr = [100, 200, 300, 400, 500];

// Syntax is like map, reduce, filter
const found = arr.find((element) => {
  return element === 1300;
}); // value or undefined

console.log(found);

const foundIndex = arr.findIndex((element) => {
  return element === 300;
}); // index or undefined

console.log(foundIndex);
