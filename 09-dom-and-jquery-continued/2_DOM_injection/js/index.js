$(function(){

    //##### Injection with strings only #####
    //Append 3 tasks to the toDoList
    $('#toDoList').append('<li class="list-group-item">Go to the grocery store</li>');
    $('#toDoList').append('<li class="list-group-item">Walk the dog</li>');
    $('#toDoList').append('<li class="list-group-item">Do laundry</li>');

    //Append a task with an "id" attribute
    $('#toDoList').append('<li id="bedtime" class="list-group-item">Go to bed</li>');

    //Remove a task by the "id" attribute
    $('#bedtime').remove();


    //##### Injection with variables #####
    //Append items from this array to the toDoList
    var tasks = ['Do the dishes', 'Wash clothes', 'Pickup dry cleaning'];
    for(var i = 0; i < tasks.length; i++)
    {
        $('#toDoList').append('<li class="list-group-item">' + tasks[i] + '</li>');
    }

    //Append items from this array and give them each a unique "id" attribute
    var moreTasks = ['Clean the tub', 'Wipe down the counters', 'Make the bed'];
    for(var i = 0; i < moreTasks.length; i++)
    {
        $('#toDoList').append('<li id="moreTasks-' + i + '" class="list-group-item">' + moreTasks[i] + '</li>');
    }

    //Append 3 items from this array and include a button inside of the <li> tag
    var funTasks = ['Dinner with friends', 'Binge watch The Wire', 'Read articles on AI'];
    for(var i = 0; i < funTasks.length; i++)
    {
        $('#toDoList').append('<li class="list-group-item">' + funTasks[i] + ' <button class="btn btn-success">Done</button> </li>');
    }
});









