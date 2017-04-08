window.onload = function() {
    button = document.getElementById('new-thing-button');
    //Create an onclick function
    button.onclick = function(event) {
        // The preventDefault() method lets us disable the default action
        event.preventDefault();

        var value = document.getElementById('new-thing').value;

        if(value)
        {
            //call function below
            addToList(document.getElementById('fav-list'),value)

            //clear the new-thing
            document.getElementById('new-thing').value = "";
        } else {
            window.alert("You must type in a value!");
        }
    };
};

function addToList(list, newThing) {
    var tag = document.createElement("li");
    var text = document.createTextNode(newThing);
    tag.appendChild(text);
    list.appendChild(tag);
}

/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/
