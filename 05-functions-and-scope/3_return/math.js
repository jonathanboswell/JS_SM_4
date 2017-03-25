function sum(x, y)
{
    return x + y;
}

function double(z)
{
    return z * 2;
}

var number = sum(2,3);
var double = double(number);

console.log("number", number);
console.log("double", double);

pie = getIngredients();

function getIngredients()
{
    return "Here are your ingredients";
}

function makePie(ingredients)
{
    return "I took all the ingredients and mixed them";
}

function cookPie(mixedIngredients)
{
    return "A baked pie";
}