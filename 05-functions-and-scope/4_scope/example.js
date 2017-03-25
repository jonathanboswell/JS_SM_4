//Define global variables
var planet = "Earth";
var current_location = "";

//Define a function
function visitCalifornia()
{
    //define a local variable
    var state = "California";

    //assign a global variable a new value
    current_location = state;
}

visitCalifornia();

console.log(planet);
