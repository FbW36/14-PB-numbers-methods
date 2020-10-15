// 1.
// What does NaN stand for? 
// Not a Number 

let str1 = "hello"
console.log(isNaN(str1*1)); // true

let str2 = "100em"
console.log(isNaN(str2)); // true

console.log(typeof isNaN()); //boolean

// 2.
console.log(0.1 * 0.2);
let num1 = 0.1;
let num2 = 0.2;
let prod = num1 * num2;
console.log(prod.toFixed(2)); // 0.02

// 3.
let num3 = 12.26000000000033;
console.log(num3.toFixed(2)); // 12.26
let num4 = 0.63783990;
console.log(num4.toFixed(1)); // 0.6
let num5 = 1.842220;
console.log(num5.toFixed(4)); // 1.8442