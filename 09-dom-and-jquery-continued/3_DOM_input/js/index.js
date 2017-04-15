$(function(){

    $('#shoppingList').append('<button class="item btn btn-lg btn-success">Power Crunch Bars</button>');

    //##### Injection from input #####
    $('#shoppingForm').submit(function(submitEvent){
        submitEvent.preventDefault();

        var item = $('#item').val();
        $('#item').val('');
        $('#shoppingList').append('<button class="item btn btn-lg btn-success">' + item + '</button>');
    });

    // Our first TYPE selector
    $('button').click(function(){
        console.log('A button was clicked');
    });

    // Our first self aware button
    $('#selfAware').click(function(){
        //console.log( $(this).html() );
    });

    // Our first "on" event
    $('#shoppingList').on('click', 'button', function(){
        $(this).remove();
    });

});