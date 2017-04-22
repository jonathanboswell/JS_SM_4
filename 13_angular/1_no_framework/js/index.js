//This is the jQuery onLoad function
$(function(){

    //.on() is an event listener function
    //we pass this function 2 values: a string and a callback function
    $('#yourName').on('keyup', function(){

        //Get the value of the input with an id "yourName"
        var yourName = $('#yourName').val();

        //Select the span tag with an id "name" and set the HTML to the value of yourName 
        $('#name').html(yourName);
    });

});