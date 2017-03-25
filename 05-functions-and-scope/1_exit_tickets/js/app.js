console.log("For Loop an Array");
var names = ["Beyonce","Madonna","Bono","Prince","Katy","Miley"];
for(var i = 0; i < names.length; i++)
{
    console.log(i, names[i]);
}


console.log("For Loop an Object");
var person = {
    "moniker": "Beyonce",
    "name": "Beyoncé Giselle Knowles-Carter",
    "gender": "female"
}
for(index in person)
{
    var value = person[index];
    console.log(index, value);
}