/**
 * 
.children property
.parentElement property
.nextElementSibling property
.previousElementSibling property
 */

const parent1 = document.getElementsByClassName("parent-1")[0];

console.log(parent1.children);

console.log(parent1.parentElement);

console.log(parent1.nextElementSibling);

console.log(parent1.nextElementSibling.previousElementSibling);

const child1 = parent1.children[0];

//child1-->parent-1-->grand-parent-->body-->html
console.log(child1.closest(".dummy"));

//------------------------------

console.log("-------------------");

const childDivs = document.querySelectorAll(".child");

const childDivsArray = Array.from(childDivs);

childDivsArray.forEach((element) => {
  console.log(element.classList);
});

//console.log(childDivs);
