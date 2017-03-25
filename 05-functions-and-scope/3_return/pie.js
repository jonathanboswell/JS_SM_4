function getIngredients()
{
    return "Pie ingredients";
}

function mixIngredients(ingredients)
{
    if(ingredients === "Pie ingredients")
    {
        return "Pie mixture";
    } else {
        return "These are pie ingredients!";
    }
}

function cookPie(mixedIngredients)
{
    if(mixedIngredients === "Pie mixture")
    {
        return "A baked pie";
    } else {
        return "Your ingredients aren't mixed yet";
    }
}

var pie = getIngredients();
console.log(pie);