$(function(){

    var dailyTodos = ["Wake-up","Eat breakfast","Shower","Get dressed"];
    for(var i = 0; i < dailyTodos.length; i++)
    {
        addItem(dailyTodos[i]);
    }

    $('#addButton').click(add);

    $('#todos').on('click', '.btn-primary', function(){
        $(this).parent().css('text-decoration','line-through');
        $(this).parent().prepend('<button class="btn btn-danger">Done</button> ');
        $(this).remove();
    });

    $('#todos').on('click', '.btn-danger', function(){
        $(this).parent().remove();
    });

    function add(submitEvent)
    {
        submitEvent.preventDefault();
        addItem($('#todo').val());
        $('#todo').val("");
    }

    function addItem(value)
    {
        if(value==="fall")
        {
            console.log("NOPE");
        } else {
            var output = "";
            output += '<li class="list-group-item">';
            output += '<button class="btn btn-primary">Line Through</button> ';
            output += value;
            output += '</li>';

            $('#todos').append(output);
        }
    }
});

function convertCurrency(number)
{
    return number * .8;
}



