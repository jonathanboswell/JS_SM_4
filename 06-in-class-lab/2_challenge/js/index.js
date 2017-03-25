//Build your arrays
var questions = [];
var answers = [];
var responses = []

var intCurrentQuestion = 0;

$(function(){

    //ask a question


    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        //send an answer
    });

});

function askQuestion(questionNumber)
{
    $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
    //set the current question to the the passed parameter
}

function sendAnswer(answer)
{
    $('#answer').val('');
    $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
    //add the answer to the answer array
    //lookup a response
    //ask the next question
}

function sendResponse(response)
{
    $('#conversation').append('<li class="list-group-item ai">' + response + '</li>');
}

function lookUpResponse()
{
    var response = undefined;
    if(intCurrentQuestion == 0)
    {
        response = responses[0] + " " + answers[0];
    } else if(intCurrentQuestion == 1) {
        answer = answers[1].toLowerCase();
        //add if/else statements to alter responses
    }

    if(response)
    {
        //send the response
    }
}

