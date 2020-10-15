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
