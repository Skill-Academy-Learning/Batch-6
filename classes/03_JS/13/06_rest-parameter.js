// Rest parameters

function add(...numbers) {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];

    sum = sum + element;
  }

  return sum;
}

console.log(add(100, 200));

console.log(add(1, 2, 3));

console.log(add(1, 2, 3, 4, 5, 6));

console.log("==========================");

////////////////////////////////////////////////

function something(x, y, ...z) {
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("z: ", z);
}

something(10, 20, 30, 40, 50);
