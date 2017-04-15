// EASY: Use a named function in the callbacks instead of an anonymous function
// MEDIUM: Add a "time" variable to timedCook that tells it how many seconds to cook
// HARD: Create a for loop that counts down the seconds until the pizza is finished cooking
$(function(){
    var pizza = {};

    // No callback, no delayed execution
    $('#instantCookNoCallback').on('click', function(clickEvent){
        instantCook(pizza);
        eat(pizza);
    });

    // Callback, no delayed execution
    $('#instantCookCallback').on('click', function(clickEvent){
        instantCook(pizza, function(pizza){
            eat(pizza);
        });
    });

    // No callback, DELAYED execution
    $('#timedCookNoCallback').on('click', function(clickEvent){
        timedCook(pizza);
        eat(pizza);
    });

    // Callback, DELAYED execution
    $('#timedCookCallback').on('click', function(clickEvent){
        timedCook(pizza, function(pizza){
            eat(pizza);
        });
    });

    function instantCook(pizza, callback)
    {
        $("#pizza").html("Instantly Cooked. ");
        pizza["is_cooked"] = true;

        // Check if there is a callback
        if(typeof(callback) === "function")
        {
            // If so, then execute the callback and pass it the pizza
            callback(pizza);
        } else {

            // Otherwise just return the pizza
            return pizza;
        } 
    }

    function timedCook(pizza, callback)
    {
        $("#pizza").html("Putting the pizza in the oven ");
        pizza["is_cooked"] = false;

        if(callback)
        {
            /* Count down section */
            var timer = 5;
            for(var i = timer; i > 0; i--)
            {
                (function(timer, j)
                {
                    setTimeout(function() {
                        $("#pizza").html("Pizza finished in: " + (timer - j) + " seconds. ");
                    }, j*1000);                
                })(timer, i)
            }
            
            /* Eating the pizza section */
            setTimeout(function(){
                pizza["is_cooked"] = true;
                // Check if there is a callback
                if(typeof(callback) === "function")
                {
                    // If so, then execute the callback and pass it the pizza
                    callback(pizza);
                } else {

                    // Otherwise just return the pizza
                    return pizza;
                } 
            }, timer*1000);
        }
        
        //If no callback is defined then just return the pizza
        if(!callback)
        {
            return pizza;
        }
    }

    function eat(pizza)
    {
        $("#pizza").append("Eating it and it is: ");
        if(pizza["is_cooked"])
        {
            $("#pizza").append("DELICIOUS!");
        } else {
            $("#pizza").append("GROSS!");
        }
    }
});






