/* JS identifier rules:
    - Must start with alphabets or $ or _
    - After first character can contain alphabets or numbers or $ or _
    - Are case sensitive
*/

let nameVariable; //valid identifier

let p1; //valid identifier

let $text; //valid identifier

let _test; //valid identifier

let check1$_; //valid identifier

let t123456789; // valid identifier

let x = 100;

let X = 200;

console.log(x, X); // identifiers are case sensitive

// Camel case for variable names is recommended. i.e. it is not a rule but a convention

// NAMEVARIABLE
// namevariable
// nameVariable
// let thisIsMyFirstVariable = 100;
