// setTimeout & setInterval

function runMe1() {
  console.log("Hello1");
}

function runMe2() {
  console.log("Hello2");
}

function runMe3() {
  console.log("Hello3");
}

// 1/1000 seconds == 1 millisecond

// runs runMe function after 2 seconds
setTimeout(runMe1, 2000);

// runs runMe function after 3 seconds
setTimeout(runMe2, 3000);

// runs runMe function after 1 seconds
setTimeout(runMe3, 1000);

// Keeps running after every 5 seconds
const timer = setInterval(() => {
  console.log("After every 5 seconds", new Date());

  // Uncommenting below line will run this setInterval only once
  // clearInterval(timer);
}, 5000);
