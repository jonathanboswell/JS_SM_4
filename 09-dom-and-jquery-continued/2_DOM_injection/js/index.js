$(function(){

    //##### Injection with strings only #####
    //Append 3 tasks to the toDoList
    $('#toDoList').append('<li>Go to the grocery store</li>');

    //Append a task with an "id" attribute
    //Remove a task by the "id" attribute


    //##### Injection with variables #####
    //Append items from this array to the toDoList
    var tasks = ['Do the dishes', 'Wash clothes', 'Pickup dry cleaning'];

    //Append items from this array and give them each a unique "id" attribute
    var moreTasks = ['Clean the tub', 'Wipe down the counters', 'Make the bed'];

    //Append 3 items from this array and include a button inside of the <li> tag
    var funTasks = ['Dinner with friends', 'Binge watch The Wire', 'Read articles on AI'];

});