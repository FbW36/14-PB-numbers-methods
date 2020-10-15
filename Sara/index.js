// 1. NaN ===> What does NaN stand for? 🔢
// NaN ===> stands for Not a Number

// * Check if "hello" * 1 is NaN. 
let exampleOne = 'Hello' ;
let result = exampleOne * 1 ; 
console.log('result ==>', isNaN(result)) ; // true exampleOne is NaN 

// * Check if `100em` is NaN.
let exampleTwo = `100em` ;
console.log('exampleTwo ==>', isNaN(exampleTwo)) ; // true exampleTwo is NaN
 
// * What is the type of NaN? ==> aside from being a part of the global object it is also a part of the Number object
console.log('typeof NaN ==>', typeof NaN) ; // number

// 2. Rounding
let x = 0.1 ;
let y = 0.2 ;
let sum = x * y ;
console.log('sum ==>', sum) ; // sum ==> 0.020000000000000004
// ===> to print with only 2 decimals
let formatNumber = sum.toFixed(2) ;
console.log('formatNumber ==>', formatNumber) ; // 0.02

// 3. fix number 
// *  Use a method to make sure that only `12.26` is printed.
let exampleThree = 12.26000000000033 ; 
let formatNumber3 = exampleThree.toFixed(2) ; 
console.log('formatNumber3 ==>', formatNumber3) ; // 12.26
//* 0.63783990  Use a method to make sure that only `0.6` is printed.
let exampleFour =  0.63783990 ; 
let formatNumber4 = exampleFour.toFixed(1) ; 
console.log('formatNumber4 ==>', formatNumber4) ; // 0.6
//* 1.842220  Use a method to make sure that only `1.8422` is printed.
let exampleFive = 1.842220 ; 
let formatNumber5 = exampleFive.toFixed(4) ; 
console.log('formatNumber5 ==>', formatNumber5) ; // 0.6