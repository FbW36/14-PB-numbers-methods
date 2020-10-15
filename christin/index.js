// 1. NaN
/*Question: Comment your answer in your js file: What does NaN stand for?*/

// Not a Number

// Check if "hello" * 1 is NaN.
console.log("1a:", isNaN("Hello" * 1)); // true is NaN

// Check if 100em is NaN.

console.log("1b:", Number.isNaN("100em")); // false

// What is the type of NaN?

console.log("1c:", typeof NaN); // number

// 2. Rounding
console.log("2", 0.1 * 0.2);

//The above in JavaScript will print: 0.020000000000000004.Use a method to make sure that only 0.02 is printed.

let sum = 0.1 * 0.2;

console.log("2 b:", sum.toFixed(2)); // 0.02

// 3. fix number

//12.26000000000033 Use a method to make sure that only 12.26 is printed.

let num = 12.26000000000033;

console.log("3 a:", num.toFixed(2)); // 12.26

// 0.63783990 Use a method to make sure that only 0.6 is printed.

let num2 = 0.6378399;
console.log("3 b:", num2.toFixed(1)); // 0.6

// 1.842220 Use a method to make sure that only 1.8422 is printed.
let num3 = 1.84222;
console.log("3 c:", num3.toFixed(4)); // 1.8422
