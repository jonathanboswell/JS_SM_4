$(function(){
    
    //Can you create a song array and add a song from each artist
    //  to the output while going through the names array only once?

    //Can you add a "song" key to the Beyonce person with a value "Halo"?

    //Super bonus: can you add a "songs" key to the Beyonce person
    //  make the value equal an array like ["Halo","All the Single Ladies","Lemonade"]
    //  using if(index=="songs") { } add each song to the output using a for loop on the
    //  songs array
    
    var output = "For Loop an Array\n";

    //names is an array
    //all arrays are objects
    //arrays have index/value pairs
    //arrays are just objects that have sequential indexes (0,1,2,3, etc..)
    var names = ["Beyonce","Madonna","Bono","Prince","Katy","Miley"];
    for(var i = 0; i < names.length; i++)
    {
        output += i + " = " + names[i] + "\n";
    }

    output += "------------------\n";
    output += "For Loop an Object\n";
    
    //person is an object
    //objects have key/value pairs
    //the key can be a string or an integer
    //the value can be a string, integer, array, object or even a function
    var person = {
        "moniker": "Beyonce",
        "name": "Beyoncé Giselle Knowles-Carter",
        "gender": "female"
    }
    for(index in person)
    {
        var value = person[index];
        output += index + " = " + value +  "\n";
    }

    $('#output').text(output);
});
