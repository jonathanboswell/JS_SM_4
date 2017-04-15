// name is a function expression
var name = function()
{
    return "your name";
}

// sayName is a higher order named function definition
// "Higher Order" = It expects a function as a parameter
// "Named" = It is not anonymous
// "Function Definition" = it begins with the word function and is not assigned (=) to a variable
function sayName(name)
{
    console.log("Hello " + name());
}

sayName(name);