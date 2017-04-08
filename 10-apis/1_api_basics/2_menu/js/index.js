$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){
        console.log("I want to make an API request");

        $.get("http://headshot.mockable.io/menu", function(response) {
            $('.panel-body').html(''); //reset panel body
            $.each(response, function(meal, items){

                //INJECT the template into the DOM
                var string = '';
                string += '<div id="' + meal + '">';
                string += ' <h3>' + meal + '</h3>';
                string += ' <ul class="list-group"></ul>';
                string += '</div>';
                $('.panel-body').append(string);

                //UPDATE the template with values
                for(var i = 0; i < items.length; i++)
                {
                    $('#' + meal + ' ul').append('<li class="list-group-item">' + items[i] + '</li>');
                }
            });
        });

    });
});