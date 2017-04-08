// run this function when the document is loaded
window.onload = function() {

    //**** INJECT INTO THE DOM ****//
    // create an empty HTML tag and add text
    var h1_tag = document.createElement("h3");
    var h1_text = document.createTextNode("Hello dynamic world!");
    h1_tag.appendChild(h1_text);
    document.body.appendChild(h1_tag);

    
    //**** STYLE THE DOM ****//
    var style_the_dom = true;

    if(style_the_dom)
    {
        // Select the element by id
        // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
        var helloElem = document.getElementById("hello");
        helloElem.style.color = "red";

        // Select the element by id
        var campusesContainer = document.getElementById("gaCampuses");
        // The getElementsByTagName() method returns array with the given tag name.
        var gaCampuses = campusesContainer.getElementsByTagName("li");

        // We can iterate through the returned collection with a for loop
        for (var i = 0; i < gaCampuses.length; i++) {
            gaCampuses[i].style.backgroundColor = "red";
        }
    }


    //**** DOM EVENTS ****//
    //Select the button
    button = document.getElementById('my-input-button');
    
    //Create an onclick function
    button.onclick = function(event) {
        // The preventDefault() method lets us disable the default action
        event.preventDefault();

        // Get the value of the input
        MyApp.do_something(document.getElementById('my-input').value);
    };
};

// We can define things outside of the `window.onload` that are evaluated only when called.
MyApp = {};

MyApp.do_something = function(name) {
    console.log("Hello " + name);
}