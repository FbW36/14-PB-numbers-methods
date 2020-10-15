// 1
// NaN stands for Not a Number
let value = "hello" * 1;
console.log(isNaN(value));

let value1 = "100em";
console.log(isNaN(value1));

console.log(typeof NaN);

// 2 Rounding
console.log((0.1 * 0.2).toFixed(2));

// 3 Fix number
let num1 = 12.26000000000033;
console.log(num1.toFixed(2));

let num2 = 0.6378399;
console.log(num2.toFixed(1));

let num3 = 1.84222;
console.log(num3.toFixed(4));
