// Ternary Operator - short form of if/else

// Generate random age between 1 to 100
const age = Math.ceil(Math.random() * 100);

console.log("Age is: ", age);

if (age >= 60) {
  console.log("Old Age");
} else if (age < 18) {
  console.log("Childhood");
} else {
  console.log("Neither Old Age nor childhood");
}

// Nested ternary operator
const ageText =
  age >= 60
    ? "Old Age"
    : age < 18
    ? "Childhood"
    : "Neither Old Age nor childhood";

console.log(ageText);
