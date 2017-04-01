//Function Declaration
function slimeSomeone(name, callback)
{
    return callback(name + " just got slimed!");
}

//Function Expression
var takeShower = function(slimedPerson)
{
    return slimedPerson + " But took a shower and now has no slime.";
}

//Passing a function expression
cleanPerson = slimeSomeone("Jonathan", takeShower);

//Passing an anonymous function expression
grossPerson = slimeSomeone("Bob", function(slimedPerson){
    return slimedPerson + " And ate the slime and said Yum!";
});


/*


var pie = {
    "type": "apple",
    "is_cooked": false
}
//Function Declaration
function bake(pie)
{
    pie["is_cooked"] = true;
    return pie;
}
console.log(bake(pie));

//Function expression
var bake = function(pie) {
    pie["is_cooked"] = true;
    return pie;
}
console.log(bake(pie));

//Function expression with a callback
var whatToDo = function(pie, callback)
{
    return callback(pie);
}

//Function expressions can be used as anonymous functions
console.log(
    whatToDo(pie, function(){
        pie["type"] = "pecan";
        pie["is_cooked"] = true;
        pie["eat_it"] = true;
        return pie;
    })
);
*/
