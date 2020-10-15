// 1. NaN
// Question: Comment your answer in your js file: What does NaN stand for?
// Not a number, so any datatype that is not number
//NaN stands for Not a Number, that means any other data types.

//Check if "hello" * 1 is NaN.
let var1 = "Hello";
console.log("is hello x 1 NaN: " + isNaN(var1 * 1));

// Check if 100em is NaN.
let var2 = "100em";
console.log("chech if 100em is Nan: " + isNaN(var2));
// What is the type of NaN?
console.log(typeof NaN);
//number somehow


// 2. Rounding
console.log(0.1 * 0.2);
let value3 = (0.1 * 0.2);
// The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
console.log(value3.toFixed(2));

// 3. fix number
// 12.26000000000033 Use a method to make sure that only 12.26 is printed.
let value4 = 12.26000000000033;
console.log(value4.toFixed(2));
// 0.63783990 Use a method to make sure that only 0.6 is printed.
let value5 = 0.63783990;
console.log(value5.toFixed(1));
// 1.842220 Use a method to make sure that only 1.8422 is printed.
let value6 = 1.842220;
console.log(value6.toFixed(4));