/** #### 1. NaN
**Question: Comment your answer in your js file**: What does NaN stand for? 
* Check if "hello" * 1 is NaN. 
* Check if `100em` is NaN.
* What is the type of NaN?


Answer: Nan stands for "Not a Number"
*/

let one = "hello";
console.log(isNaN(one *1)); //true

let two = "100em";
console.log(isNaN(two));//true

console.log (typeof NaN); //number

/*#### 2. Rounding 
```javascript
console.log(0.1 * 0.2);
```
The above in JavaScript will print: `0.020000000000000004`. 
Use a method to make sure that only `0.02` is printed.*/

let sum = 0.1 * 0.2;
let formateNumber = sum.toFixed(2);
console.log(formateNumber);

/*#### 3. fix number
* 12.26000000000033 Use a method to make sure that only `12.26` is printed.
* 0.63783990  Use a method to make sure that only `0.6` is printed.
* 1.842220  Use a method to make sure that only `1.8422` is printed.*/

let sum2 = 12.26000000000033;
let formateNumber1 = sum2.toFixed(2);
let sum3 = 0.63783990;
let formateNumber2 = sum3.toFixed(1);
let sum4 = 1.842220;
let formateNumber3 = sum4.toFixed(4);
console.log(formateNumber1);
console.log(formateNumber2);
console.log(formateNumber3);