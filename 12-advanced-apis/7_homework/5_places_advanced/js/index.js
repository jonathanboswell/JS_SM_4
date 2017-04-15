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

            var lat = response["results"][0]["geometry"]["location"]["lat"];
            var lng = response["results"][0]["geometry"]["location"]["lng"];
            var keyword = $('#keyword').val();

            $('#lat').text(lat);
            $('#long').text(lng);

            var position = {
                lat: lat,
                lng: lng
            }
            loadMap(position, keyword);

        });
    });
});

var map;
var infowindow;
function loadMap(position, keyword) {
    if(!position)
    {
        var position = { lat: 34.0478914, lng: -118.2401423 };
    }
    if(!keyword)
    {
        var keyword = "store";
    }
    console.log(keyword);
    map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.textSearch({location: position, radius: 500, query:keyword}, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
}