// NaN = not a number

// Check if "hello" * 1 is NaN
let str = 'hello'
console.log('"hello" * 1 is NaN -->', isNaN(str * 1))

// Check if 100em is NaN
let valueToCheck = '100em'
console.log('100em not a number -->', isNaN(valueToCheck))

// What is the type of NaN?
console.log('What is the type of NaN? -->', typeof NaN)

// rounding
let mult = .1 * .2
console.log('rounded sum -->', mult.toFixed(2))

// Use a method to make sure that only XY is printed
let num1 = 12.26000000000033;
console.log('only 12.26 is printed -->', num1.toFixed(2))
let num2 = 0.63783990;
console.log('only 0.6 is printed -->', num2.toFixed(1))
let num3 = 1.842220;
console.log('only 1.8422 is printed -->', num3.toFixed(4))