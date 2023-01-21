// JS Functions -- rest parameters

function add1(a, b, ...c) {
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("c: ", c);
}

add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("------------------------------");
//-------------------------------------------------

function add2(...c) {
  let sum = 0;
  for (let index = 0; index < c.length; index++) {
    const element = c[index];

    sum = sum + element;
  }

  console.log(sum);
}

add2(1, 2, 3);
