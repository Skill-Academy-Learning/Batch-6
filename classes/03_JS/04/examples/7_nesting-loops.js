// Nested Loops - for

// Display pattern table of x rows and y columns

//Generate x and y values randomly
const numberOfRows = Math.ceil(Math.random() * 5);
const numberOfColumns = Math.ceil(Math.random() * 5);

console.log(`Pattern of ${numberOfRows} rows and ${numberOfColumns} columns:`);

for (let i = 1; i <= numberOfRows; i++) {
  let rowText = "";

  for (let k = 1; k <= numberOfColumns; k++) {
    rowText = rowText + " x";
  }

  console.log(`${i} ${rowText}`);
}

/*
 x x x
 x x x
 x x x
 */
