// Loops

let i = 1;

// do - while loop
do {
  console.log(i, "1- Hello World!");

  i = i + 1;
} while (i <= 5);

console.log("---------------");

let k = 1;

// while loop
while (k <= 5) {
  console.log(k, "2-Hello World!");

  k++; //k=k+1
}

// *** infinite loop -- very very dangerous

// 2 <= 5 -- true
// 3 <= 5 -- true
// 4 <= 5 -- true
// 5 <= 5 -- true
// 6 <= 5 -- false
