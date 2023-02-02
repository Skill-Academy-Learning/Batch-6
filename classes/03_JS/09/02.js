// find, findIndex

const arr = [10, 20, 30, 40, 50];

console.log(
  arr.find((element) => {
    return element < 1;
  })
); //undefined

console.log(
  arr.find((element) => {
    return element < 30;
  })
); //10

console.log("===================");

console.log(
  arr.findIndex((element) => {
    return element < 1;
  })
); //-1 because not found

console.log(
  arr.findIndex((element) => {
    return element < 30;
  })
); //0 which is the index of the found element
