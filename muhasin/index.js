// 1.NaN
// NaN is not a number

let str = "hello"
console.log(isNaN("str" * 1)) // true ==>  is not a number
/* console.log("hallo" * 1); // NaN  */

let str2 = "100em"
console.log(isNaN(str2)); // true ==> is not a number

console.log(typeof NaN); // number

// 2. Rounding
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 * num2;
console.log(sum.toFixed(2)); // 0.02

// 3. fix number
let num3 = 12.26000000000033
let fixednum3 = num3.toFixed(2);
console.log(fixednum3); // 12.26

let num4 = 0.63783990
let fixednum4 = num4.toFixed(1);
console.log(fixednum4); // 0.6

let num5 = 1.842220
let fixednum5 = num5.toFixed(4);
console.log(fixednum5); // 1.8422