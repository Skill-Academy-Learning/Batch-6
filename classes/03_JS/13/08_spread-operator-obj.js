//spread operator ...

const x = { a: 100, b: 200, c: 300, p: 100 };

const y = { d: 400, e: 500, f: 600, p: 200 };

const z = { p: 1000, ...y, ...x }; // objects are unordered list

console.log(z);

///rest parameter-- collect
// spread operator -- spread
