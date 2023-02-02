const currentDate = new Date();

console.log(currentDate);

console.log("======================");
console.log(currentDate.toLocaleDateString()); // 2/2/2023
console.log(currentDate.toLocaleTimeString()); // 9:42:04 PM

// India date format: DD/MM/YYYY
// America date format: mm-dd-yyyy

console.log("======================");

// GMT(Greenwich Mean Time) is now called UTC (Universal Time Coordinated)
console.log(currentDate.toUTCString()); // converts to GMT time value
console.log(currentDate.toISOString());
