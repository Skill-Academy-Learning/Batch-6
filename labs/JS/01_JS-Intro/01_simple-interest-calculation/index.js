let loanAmount = 100000; //rupees
let loanPeriod = 15; //years
let rateOfInterest = 10; //percentage

const simpleInterest = (loanAmount * rateOfInterest * loanPeriod) / 100;

console.log("Simple interest per year is: ", simpleInterest);

document.write("Principal: ", loanAmount);
document.write("<br/>");
document.write("Number of Years: ", loanPeriod);
document.write("<br/>");
document.write("Rate of Interest: ", rateOfInterest);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("Simple interest per year is: ", simpleInterest);
