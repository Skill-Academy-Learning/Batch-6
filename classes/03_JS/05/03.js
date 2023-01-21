// JS Functions

// Calculate simple interest
// simple interest = (principal * rate of interest * time) / 100
// SI= (P * R * T) / 100

function calculateSimpleInterest(p, r, t) {
  const si = (p * r * t) / 100;

  return si;
}

const simpleInterest1 = calculateSimpleInterest(100000, 10, 15);

console.log(
  "SI on 1 lakh rupees for 15 years with rate of interest of 10% per year is: ",
  simpleInterest1
);
