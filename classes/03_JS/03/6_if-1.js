// Decision making & Looping

// conditional statement: if - else - else if

//Generate random number between 1 and 100
const age = Math.ceil(Math.random() * 100);

/**
 * This program should tell whether person can vote or not in India depending on his age.
 *
 */

//check if age is less than 18.
// If true, can vote.
// If false, can't vote.

// Approach-1
if (age < 18) {
  console.log("Cannot vote");
} else {
  console.log("Can vote");
}

console.log("-----------------");
//Approach-2
let voteMessage = "Can Vote";

if (age < 18) {
  voteMessage = "Cannot vote";
}

console.log(voteMessage);
