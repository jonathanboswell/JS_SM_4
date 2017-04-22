//This is were we are accessing the Angular framework
angular

    //This is where we create a module/application
    //.module() is a function
    //.module() takes 2 parameters: 'nameOfApp', array of services/libraries (we'll cover these later)
    .module('taskApp', [])

    //This is where we create a controller
    //.controller() is a function
    //.controller() takes 2 parameters: 'controllerName', callback function
    .controller('TaskController', function() {

        //this is a reserved variable which simply means "this controller"

        //Here we create an array of the initial items we want on our list
        //Feel free to change!
        this.tasks = [
            {"text": "learn AngularJS", done:true},
            {"text": "build an AngularJS app", done:false}
        ];

        //Here we are writing a function expression
        //.addTodo() takes no parameters
        //.addTodo() returns nothing
        this.addTodo = function() {

            //Here we are adding an item to our list
            //Notice how we don't have to call a function to get the value of newTask
            //Angular manages the DOM for us :)
            this.tasks.push( { "text": this.newTask, "done": false } );

            //Here we can set the newText back to an empty string
            this.newTask = '';
        };

        //Here we are writing another function expression
        //.remaining() takes no parameters
        //.remaining() returns an integer
        //Look in the HTML - we can call JS functions from the HTML. Woohoo!!!!
        this.remaining = function() {

            //We define a local variable of "count"
            var count = 0;

            //We loop through the tasks
            for(var i = 0; i < this.tasks.length; i++)
            {
                //Grab the current task
                var task = this.tasks[i];

                //Short hand for:
                // If todo is done, then add 0 to count
                // otherwise add 1 to count
                count += task.done ? 0 : 1;        
            }

            return count;
        };
  });