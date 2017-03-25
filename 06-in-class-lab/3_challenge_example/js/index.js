var questions = [
    "What is your name?",
    "How's your day?",
    "What can I help you with today?",
];

var answers = [];

var responses = [
    "Hi",
    "That's wonderful!",
    "Yeah, I'm with ya",
    "I'm sorry to hear that :(",
    "Thank you for sharing",
    "Awesome!"
]

var intCurrentQuestion = 0;

$(function(){

    askQuestion(intCurrentQuestion);

    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        sendAnswer(answer);
    });

});

function askQuestion(questionNumber)
{
    $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
    intCurrentQuestion = questionNumber;
}

function sendAnswer(answer)
{
    if(answer)
    {
        $('#answer').val('');
        $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
        answers.push(answer);
        lookUpResponse();
        askQuestion(intCurrentQuestion + 1);
    }
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
        if (answer == "good") {
            response = responses[1]; //say something good back
        } else if(answer == "ok") {
            response = responses[2]; //say something agreeable
        } else if(answer == "bad") {
            response = responses[3]; //say something emphatetic
        } else {
            response = responses[4]; //say something neutral
        }
    }

    if(response)
    {
        sendResponse(response);
    }
}

