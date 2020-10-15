//1. NaN
//Question: Comment your answer in your js file**: What does NaN stand for?

// Answer ==> Stands for NaN "Not a Number". Is a term used in mathematics and computer science to describe a non-numeric value. It may also be a placeholder for an expectednumeric result that cannot be defined as a floating point number.

// Check if "hello" * 1 is NaN.

let hello = "hello";

let checkHello = isNaN(hello * 1);

console.log("Is hello * 1 not a number? ==>", checkHello);

// Check if "100em" is NaN.

let em = "100em";

let checkEm = isNaN(em);

console.log("Is 100em not a number? ==>", checkEm);

// What is the type of NaN?

let typeNan = typeof NaN;

console.log("type of NaN ==>", typeNan);

/*2. Rounding 
javascript
console.log(0.1 * 0.2);*/

/*The above in JavaScript will print: `0.020000000000000004`. 
Use a method to make sure that only `0.02` is printed.*/

let crazyNum = 0.1 * 0.2;

console.log(crazyNum);

let fixedNum = crazyNum.toFixed(2);

console.log("crazyNum fixed ==>", fixedNum);

/*3. fix number
12.26000000000033 Use a method to make sure that only `12.26` is printed.
0.63783990  Use a method to make sure that only `0.6` is printed.
1.842220  Use a method to make sure that only `1.8422` is printed.*/

let crazyNum1 = 12.26000000000033;

let fixedNum1 = crazyNum1.toFixed(2);

console.log("crazyNum1 fixed ==>", fixedNum1);

let crazyNum2 = 0.6378399;

let fixedNum2 = crazyNum2.toFixed(1);

console.log("crazyNum2 fixed ==>", fixedNum2);

let crazyNum3 = 1.84222;

let fixedNum3 = crazyNum3.toFixed(4);

console.log("crazyNum3 fixed ==>", fixedNum3);
