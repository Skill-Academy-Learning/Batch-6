const arr = [100, 200, 300, 400, 500];

//array.forEach method is like for...loop

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];

  if (index === 2) {
    continue;
  }

  console.log("Hi", index, element);
}

console.log("============================");

// Shorter syntax than for...loop
// break and continue can't be used
arr.forEach((element, index) => {
  if (index === 2) {
    return;
  }

  console.log("Hi", index, element);
});
