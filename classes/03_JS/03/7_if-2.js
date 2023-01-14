// Decision making & Looping

// conditional statement: if - else - else if

//Generate random number between 1 and 100
const score = Math.ceil(Math.random() * 100);

/**
 * Print result status based on score
 */

console.log("Your score was: ", score);

if (score < 35) {
  console.log("Failed");
} else if (score >= 35 && score < 60) {
  console.log("Second class");
} else if (score >= 60 && score < 70) {
  console.log("First Class");
} else {
  console.log("Distinction");
}
