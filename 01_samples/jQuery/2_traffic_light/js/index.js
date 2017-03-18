$('#goButton').click(function(){
    resetLights();
    $('#goLight').css('background-color','green');
});

$('#slowButton').click(function(){
    resetLights();
    $('#slowLight').css('background-color','yellow');
});

$('#stopButton').click(function(){
    resetLights();
    $('#stopLight').css('background-color','red');
});

$('#resetButton').click(function(){
    resetLights();
});


function resetLights()
{
    $('.bulb').css('background-color','black');
}