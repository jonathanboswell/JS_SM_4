// This code will cause an error. If you complete the practice below, the code will work

// Practice
// - Convert name into a function that returns "your name"

// name is a variable with a string value
// name needs to be a a function expression
var name = "your name";

// sayName is a higher order named function definition
// "Higher Order" = It expects a function as a parameter
// "Named" = It is not anonymous
// "Function Definition" = it begins with the word function and is not assigned (=) to a variable
function sayName(name)
{
    console.log("Hello " + name());
}

sayName(name);