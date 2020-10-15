//! 1. NaN -- Question: Comment your answers in your js file: What does NaN stand for?

console.log(isNaN("hello"*1)); // ==> true
console.log(isNaN("100em")); // ==> true
console.log(typeof(NaN)); // ==> number

//! 2. Rounding

let x = 0.1;
let y = 0.2;

let sumxy = 0.1 * 0.2;

console.log(sumxy.toFixed(2)); // ==> 0.02

//! 3. fix number

let a = 12.26000000000033;
console.log(a.toFixed(2)); // ==> 12.26
let b = 0.63783990;
console.log(b.toFixed(1)); // ==> 0.6
let c = 1.842220;
console.log(c.toFixed(4)); // ==> 1.8422
