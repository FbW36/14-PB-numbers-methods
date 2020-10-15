// 1.NaN
let str = "hello" * 1;
console.log(isNaN(str)); // true

let num = "100em";

console.log(isNaN(num));

//NaN is type of number

// ------------------------

console.log(0.1 * 0.2);
console.log("ans:", (0.1 * 0.2).toFixed(2));

// 3 fix number
let num1 = 12.26000000000033;
console.log("ans1:", num1.toFixed(2));

let num2 = 0.6378399;
console.log("ans2:", num2.toFixed(1)); //0.6

let num3 = 1.84222;
console.log("ans3:", num3.toFixed(4));
