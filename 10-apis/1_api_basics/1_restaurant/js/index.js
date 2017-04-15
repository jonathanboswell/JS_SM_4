$(function(){

    getInfo();
    
    $.get("http://headshot.mockable.io/restaurant", function(response) {
        console.log(response);
        var name = response["name"];
        var hours = response["hours"];
        
        $('#restaurant').html(name);
        $('#hours').html(hours);
        $('#location').html(response["location"]);
    });

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){
        getInfo();
    });

    function getInfo()
    {
        $.get("http://headshot.mockable.io/restaurant", function(response) {
            console.log(response);
            var name = response["name"];
            var hours = response["hours"];
            
            $('#restaurant').html(name);
            $('#hours').html(hours);
            $('#location').html(response["location"]);
        });
    }
});