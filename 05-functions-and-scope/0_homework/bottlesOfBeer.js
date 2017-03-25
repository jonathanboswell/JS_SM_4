//Build for loop that counts down from 99
for(var i = 99; i > 0; i--)
{
    //Declare and assign variables
    var item = (i===1) ? "1 bottle": i + " bottles";
    var next_item = (i===2) ? "1 bottle": (i-1) + " bottles";
    var lyrics = ""; //reset lyrics each pass;

    //Build a string
    lyrics += item + " of beer on the wall, " + item + " of beer. ";
    lyrics += "Take one down and pass it around, " + next_item + " of beer on the wall.";

    //Output the string
    console.log(lyrics);
}