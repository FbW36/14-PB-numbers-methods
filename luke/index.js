// #### 1. NaN
//     ** Question: Comment your answer in your js file **: What does NaN stand for?
// not a number

// * Check if "hello" * 1 is NaN.
console.log(isNaN("hello" * 1)); // true

// * Check if `100em` is NaN.
console.log(isNaN("100em")); // true

// * What is the type of NaN?
console.log(typeof NaN); //number

// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`.
// Use a method to make sure that only`0.02` is printed.
console.log((0.1 * 0.2).toFixed(2)); // 0.02

// * 12.26000000000033 Use a method to make sure that only`12.26` is printed.
console.log((12.26000000000033).toFixed(2));

// * 0.63783990  Use a method to make sure that only`0.6` is printed.
console.log((0.6378399).toFixed(1));

// * 1.842220  Use a method to make sure that only`1.8422` is printed.
console.log((1.84222).toFixed(4));
