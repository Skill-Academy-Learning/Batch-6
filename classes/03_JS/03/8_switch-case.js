// Decision making & Looping

// conditional statement: switch - case

//Generate random number between 1 and 7
const dayOfWeek = Math.ceil(Math.random() * 7);

console.log(`Today is day number ${dayOfWeek} of the week.`);

console.log("------------------");

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;
}

console.log("------------------");

switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;

  case 6:
  case 7:
    console.log("Weekend");
    break;
}

console.log("------------------");

switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("WEEKDAY");
    break;

  default:
    console.log("WEEKEND");
}

/**
 * Note: Switch case comparision uses ===, i.e, strict compare. In other words both data value and data type must match
 */
