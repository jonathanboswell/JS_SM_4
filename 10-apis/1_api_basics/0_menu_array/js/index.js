$(function(){

    var meals = {
        'breakfast': ['eggs','cereal','toast'],
        'lunch': ['blt','chicken sandwhich', 'fries'],
        'dinner': ['pasta','steak','chicken']
    }

    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#buildButton').click(function(clickEvent){
      
        //Iterate meals array
        for( meal in meals)
        {
            var items = meals[meal];
            $('#' + meal + ' h3').html(meal);
            $('#' + meal + ' ul').html('');
            for(var j = 0; j < items.length; j++)
            {
              $('#' + meal + ' ul').append('<li class="list-group-item">' + items[j] + '</li>');
            }
        }
    });
});