
// 1. NaN

// a-
console.log(`NaN stands for 'Not A Number'`); 

// b-
console.log(`This expression ("hello" * 1) is a NaN ==> ${isNaN("hello" * 1)}`);

// c-
console.log(`This expression ("100em") is a NaN ==> ${isNaN('100em')}`);

// d- 
console.log(`The type of NaN is ${typeof NaN} and it returns a ${typeof !!NaN} value`);

// 2. Rounding
let num1 = 0.1;
let num2 = 0.2;
let sum = num1 * num2;
console.log(sum);
let roundedSum = sum.toFixed(2);
console.log(roundedSum);

// 3.
// a-
let numberWithFloatingFraction = 12.260000000033;
let numberWithRoundedFraction = numberWithFloatingFraction.toFixed(2);
console.log(numberWithRoundedFraction);

// b-
numberWithFloatingFraction = 0.63783990;
numberWithRoundedFraction = numberWithFloatingFraction.toFixed(1);
console.log(numberWithRoundedFraction);

// c-
numberWithFloatingFraction = 1.842220;
numberWithRoundedFraction = numberWithFloatingFraction.toFixed(4);
console.log(numberWithRoundedFraction);