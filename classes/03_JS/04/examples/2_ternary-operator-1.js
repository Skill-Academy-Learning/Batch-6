// Ternary Operator - short form of if/else

// Generate random age between 1 to 100
const age = Math.ceil(Math.random() * 100);

console.log("Age is: ", age);

if (age >= 60) {
  console.log("Old Age");
} else {
  console.log("Not Old Age");
}

const ageText = age >= 60 ? "Old Age" : "Not Old Age";

console.log(ageText);

// +, -, *
// &&, ||, !
// +=, -=, =, ++, --
