$(function(){

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#apiRequestButton').click(function(clickEvent){

        //getMenu();
        getAdvancedMenu();
    });

    function getMenu()
    {
        $.get("http://headshot.mockable.io/menu", function(response) {
            $('#menu').html('');

            //show why a for loop will not work

            $.each(response, function(index, value){
                console.log(index, value);
                var meal = index;
                var dishes = value;
                console.log(meal);
                $('#menu').append('<div id="' + meal + '"><h3></h3><ul class="list-group"></ul></div>');
                $('#' + meal + ' h3').html(meal);
                $('#' + meal + ' ul').html('');
                for(var j = 0; j < dishes.length; j++)
                {
                    var dish = dishes[j];
                    $('#' + meal + ' ul').append('<li class="list-group-item">' + dish + '</li>');
                }
            });

        });
    }

    function getAdvancedMenu()
    {
        $.getJSON("http://headshot.mockable.io/menu/advanced", function(response) {

            $('#menu').html('');

            $.each(response,function(meal, info){
                if(meal=="specials")
                {
                    return;
                }
                var dishes = info.items; //array
                var hours = info.hours; //string

                $('#menu').append('<div id="' + meal + '"><h3></h3><p class="hours"></p><ul class="list-group"></ul></div>');
                $('#' + meal + ' h3').html(meal);
                $('#' + meal + ' p').html(hours);
                $('#' + meal + ' ul').html('');
                
                //append specials if they exist
                var special = response["specials"][meal];
                if(special) {
                    $('#' + meal + " ul").append('<li class=list-group-item><h4>***' + special + "***</h4></li>");
                }

                //add the dishes
                for(var i = 0; i < dishes.length; i++)
                {
                    var dish = dishes[i];
                    var li = '<li class="list-group-item">';
                    li += '<h4>' + dish.name + '</h4>';
                    li += '<span>' + dish.desc + '</span>'
                    if(dish.cheeses)
                    {
                        $.each(dish.cheeses,function(key, cheese){
                            var searchTerm = (cheese=="swiss") ? "swiss cheese":cheese;
                            li += ' | <span><a href="https://www.google.com/search?q=' + searchTerm +'">' + cheese + '</a></span>';
                        })
                    }
                    li += '<h5>' + dish.price + '</h5>';

                    $('#' + meal + ' ul').append(li);
                }
            });
            
        });
    } 
});