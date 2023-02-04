// some, every

const arr = [10, 20, 30, 40, 50];

console.log(
  arr.some((element) => {
    return element < 21;
  })
);

console.log(
  arr.every((element) => {
    return element < 21;
  })
);
