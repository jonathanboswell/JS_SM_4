$(function(){
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#lookup').click(function(clickEvent){
        var encoded_address = encodeURIComponent($('#address').val());
        console.log($('#address').val(), encoded_address);

        //The GET request that Google expects:
        //https://maps.googleapis.com/maps/api/geocode/json?&address=360%20E%202nd%20Street%2C%20Los%20Angeles%2C%20CA
        var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address
        console.log(request_url);

        //Make an API request to the request_url and write an anonymous function to handle the response
        $.get(request_url,function(response){
            console.log(response);

            //var lat = response[][][][][];
            //var lng = response[][][][][];
            
            var lat = null;
            var lng = null;

            $('#lat').text(lat);
            $('#long').text(lng);

            $('#output').text(JSON.stringify(response, null, 2));
        });
    });
});