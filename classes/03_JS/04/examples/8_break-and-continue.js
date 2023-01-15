// Nested Loops - for

// break & continue keywords

for (let i = 0; i <= 5; i++) {
  if (i === 2) {
    break; //end the looping. no more iterations
  }

  console.log(i + 1);
}

console.log("-----------------");

for (let i = 0; i <= 5; i++) {
  if (i === 2) {
    continue; // skip rest of the statements for this iteration

    console.log("This will never print");
  }

  console.log(i + 1);
}
