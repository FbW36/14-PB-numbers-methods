//14-PB-numbers-methods
//1. NaN

//Question: Comment your answer in your js file: What does NaN stand for?

//In computing, NaN, standing for Not a Number, is a member of a numeric data type that can be interpreted as a value that is undefined or unrepresentable, especially in floating-point arithmetic. Systematic use of NaNs was introduced by the IEEE 754 floating-point standard in 1985, along with the representation of other non-finite quantities such as infinities. -Wikipedida-

    //Check if "hello" * 1 is NaN.
    let str1 = "hello"
    console.log(isNaN(str1 * 1))
//True because "hello" * 1 is a string, not a number (NaN)


    //Check if 100em is NaN.
    let str2 = "100em"
    console.log(isNaN(str2))
//Without " " is giving an erroor. But if we use " " , result will be true (NaN). 

    //What is the type of NaN?
    console.log(typeof NaN)
    //The type of NaN , which stands for Not a Number is, surprisingly, a number. The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers.

    //************************************
    //2. Rounding

console.log((0.1 * 0.2).toFixed(2));
//Result: 0.02 :D 

//The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.

//*************************************
//3. fix number

    //12.26000000000033 Use a method to make sure that only 12.26 is printed.
    console.log(12.26000000000033.toFixed(2))
    
    //0.63783990 Use a method to make sure that only 0.6 is printed.
    console.log(0.63783990.toFixed(1))
    //1.842220 Use a method to make sure that only 1.8422 is printed.
    console.log(1.842220.toFixed(4))