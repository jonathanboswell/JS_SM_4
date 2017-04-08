$(function(){
    //Build for loop that counts down from 99
    for(var i = 99; i > 0; i--)
    {
        //Declare and assign variables
        var item = (i===1) ? "1 bottle": i + " bottles";
        var next_item = (i===2) ? "1 bottle": (i-1) + " bottles";
        var string = ""; //reset lyrics each pass;

        //Build a string
        string += '<li class="list-group-item">';
        string += item + " of beer on the wall, " + item + " of beer. ";
        string += "Take one down and pass it around, " + next_item + " of beer on the wall.";
        string += '</li>';

        //Output the string
        $('#lyrics').append(string);
    }
});
