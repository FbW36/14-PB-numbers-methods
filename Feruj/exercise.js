// 1

let str = "hello"
console.log(isNaN(str * 1)) // true ==>  is not a number

let str1 = "100em"
console.log(isNaN(str1)); // true ==> is not a number

console.log(typeof NaN); // number

// 2
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 * num2;
console.log(sum.toFixed(2)); // 0.02

// 3
let num3 = 12.26000000000033
let fixedNum3 = num3.toFixed(2);
console.log(fixedNum3); // 12.26

let num4 = 0.63783990
let fixedNum4 = num4.toFixed(1);
console.log(fixedNum4); // 0.6

let num5 = 1.842220
let fixedNum5 = num5.toFixed(4);
console.log(fixedNum5); // 1.8422