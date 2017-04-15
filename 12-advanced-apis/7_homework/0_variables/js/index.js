$(function(){

    $('#showVariable').click(function(){
        var variable = $('#variable').val(); //will always be a "string"

        //can you convert it to an integer?
        variable = parseInt(variable);

        //can you convert it to a float?
        variable = parseFloat(variable);

        //can you add 1 to it?
        variable++;

        //can you add 10 to it?
        variable += 10;

        //can you turn it into a string?
        variable.toString();

        //can you add " is awesome" to the it?
        variable += " is awesome";
        
        $('#output').text(variable);
    });

});
