$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){

        $.getJSON("http://headshot.mockable.io/restaurant", function(response) {
            console.log(response);
            var name = response.name;
            var hours = response.hours;
            
            $('title').html(name);
            $('#apiResponse').html(name + " - " + hours);
        });

    });
});