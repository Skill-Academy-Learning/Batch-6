// window - Built in Object

// No need to mention object name in case of window. i.e. you can just call alert, confirm and prompt without 'window." before them"

window.alert("I am an alert message"); // No return value

const userResponse = confirm("Are you sure you want delete this record?"); // true / false

console.log("User Response: ", userResponse);

const promptResponse = window.prompt("Please enter your student ID"); // value entered by the user / null

console.log("Prompt Response: ", promptResponse);
