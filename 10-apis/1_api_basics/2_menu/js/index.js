$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){
        console.log("I want to make an API request");

        $.get("http://headshot.mockable.io/menu", function(response) {
            $('#menu').html(''); //reset menu

            for(meal in response)
            {
                var items = response[meal];
                var string = "";

                string = '<div id="' + meal + '">' + meal + '</div>';
                $('#menu').append(string);

                $('#' + meal).append("WOOHOOO");

            }
        });
    });
});










