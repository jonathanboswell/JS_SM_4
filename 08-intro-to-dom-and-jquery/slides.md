<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# DOM + jQuery

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* What is the DOM?
* Working with the DOM
* DOM Manipulation: Independent Practice
* jQuery and DOM
* Augmenting JS with jQuery
* Challenge Lab: Checklist
* Review
* Homework

---

<!-- .slide: data-background="../images/background.jpg"-->
### Learning Objectives

- Identify differences between the DOM and HTML.
- Explain the methods and use the DOM in JavaScript.
- Manipulate the DOM by using jQuery selectors and functions.
- Register and trigger event handlers for jQuery events.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Preparation

- Understand fundamental data types.
- Implement object oriented programming in JavaScript.
- Create and modify JavaScript objects.

---

<!-- .slide: data-background="../images/background.jpg"-->
## The Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for HTML [and XML] documents. 

**Video: [How Browser Rendering works](https://www.youtube.com/watch?v=n1cKlKM3jYI).**

---

<!-- .slide: data-background="../images/background.jpg"-->
* The DOM is a large object that describes the structure of our content. 
* Since it's an object, we can use normal techniques to get and set data
* In the browser, the DOM is represented by the `document` object. 

---

<!-- .slide: data-background="../images/background.jpg"-->
#### What can I do with the `document` object?

#### [Summary of all DOM properites and events](https://developer.mozilla.org/en-US/docs/Web/API/Document)

* Notice the event handlers. Pay special attention to:

	- `Document.getElementById(String id)`
	- `Document.querySelector(String selector)`
	- `Document.querySelectorAll(String selector)`

---

<!-- .slide: data-background="../images/background.jpg"-->
## Working with the DOM: Codealong

We can manipulate the DOM in 3 different ways:

1) Inline JavaScript (least desirable).

```html
  <body onload="window.alert('welcome to my app!');">
```

---

<!-- .slide: data-background="../images/background.jpg"-->
2) Include script tags in our HTML documents. This technique is used primarily when generating content/properties through a back-end language. Try to avoid this if not necessary.

	  <html>
	    <head>
	      <script>
	         alert('Welcome to my app!');
	      </script>
	    </head>
	    <body>
	    </body>
	  </html>

---

<!-- .slide: data-background="../images/background.jpg"-->
3) Including the JavaScript file [at the footer] of our site/app.

**It is important to get used to falling in the habit of only doing DOM related manipulation only once our content has loaded.** 

* We can't manipulate something that has not yet been drawn in the browser
* We can usually wrap this in a 'window.onload' function
* Let's try it out

---

<!-- .slide: data-background="../images/background.jpg"-->
Add a new element to our page through the following steps:

```js
   // run this function when the document is loaded
   window.onload = function() {

     // create a couple of elements in an empty HTML page
     var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("Hello dynamic world!");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);
  }
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Given the following HTML:

```html
<body>
  <div id="hello">Hello world</div>
  <ul id="gaCampuses">
    <li>DC</li>
    <li>NY</li>
    <li>SF</li>
    <li>LA</li>
    <li>HK</li>
  </ul>
</body>
```

---

<!-- .slide: data-background="../images/background.jpg"-->
We can manipulate it using javascript:

```js
   // run this function when the document is loaded
   window.onload = function() {
     // Target items by id via the getElementById() method
     var helloElem = document.getElementById("hello");
     // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
     helloElem.style.color = "red";

     var campusesContainer = document.getElementById("gaCampuses");
     // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
     var gaCampuses = campusesContainer.getElementsByTagName("li");

     // We can iterate through the returned collection with a for loop
     for (var i = 0; i < gaCampuses.length; i++) {
          gaCampuses[i].style.backgroundColor = "red";
      }
  }
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Finally, we can set certain events to execute based on user interaction. A common example is listening for a button click.

Given this form:

```html
  <form>
    <input id="my-input" />
    <input id="my-input-button" type="submit" value="Run button code"></input>
  </form>
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Add the following javascript:

```js
  window.onload = function() {
    button = document.getElementById('my-input-button');
    // Event parameter is the default object event that would have happened on user click
    button.onclick = function(event) {
      // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
      event.preventDefault();
      MyApp.do_something("world");
    };
  };

  // We can define things outside of the `window.onload` that are evaluated
  // only when called.
  MyApp = {};

  MyApp.do_something = function(name) {
    console.log("Hello " + name);
  }
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## DOM Manipulation: Independent Practice

Try it out yourself!

- When the user clicks the submit button, take the value they've typed into the input box and add it to the list (remember: `appendChild`!)

- Clear the input box after adding. (Hint: the `value` property of the input box)

- Use `event.preventDefault();`

---

<!-- .slide: data-background="../images/background.jpg"-->
## jQuery + DOM: Intro

The DOM's _**API**_ (application programming interface) give us access to a couple of different methods that allow us to select elements from the DOM.

* `document.getElementById` retrieves a single element with a matching ID.
* `document.getElementsByClassName` retrieves an array of elements that match the given class.
* `document.getElementsByTagName` retrieves an array of elements that are of the given type.

---

<!-- .slide: data-background="../images/background.jpg"-->
What if we wanted to retrieve:

* The first `<li>` 
* on a particular list with class `specialList`

In CSS, we could just write a selector like this to style that element:

```CSS
  .specialList li:first-child {
    ...
  }
```

Wow - short and powerful! Wouldn't it be nice if we could select elements in the same way?

---

<!-- .slide: data-background="../images/background.jpg"-->
### Well now you can! With jQuery

jQuery allows us to query (i.e. select elements from) the DOM using the **exact same selector syntax** that we've used in CSS. 

To select the element described before, we would write

```js
$(".specialList li:first-child")
```

---

<!-- .slide: data-background="../images/background.jpg"-->
This will return a 'jQuery Object'

- You can retrieve any of the specific results using array notation (`$("...")[i]`). 
- There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements selected by the query, at once_. 

These methods can do things like:

* change styling
* add event listeners for specific events
* write brand new content (text _and_ HTML) into the page

---

<!-- .slide: data-background="../images/background.jpg"-->
## Augmenting JavaScript with jQuery: Codealong

Let's look at: [.val()](https://api.jquery.com/val/). 

Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

---

<!-- .slide: data-background="../images/background.jpg"-->
Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. 

Be sure you're using the correct method. 

Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

---

<!-- .slide: data-background="../images/background.jpg"-->
Here is a list of many common jQuery functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)** / **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)** / **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)** / **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

---

<!-- .slide: data-background="../images/background.jpg"-->
We can use jQuery to find elements, manipulate the returned elements, change styles, and add event listeners.

Targeting DOM elements in jQuery is a little easier to read than the JavaScript counterpart.

```js
  // Target item by id
  $('#item');

  // Target item(s) by class
  $('.box')

  // Target item(s) by tag
  $('h2')
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Setting CSS properties is just as easy
```js
  // It is good practice to prefix items we have selected via jQuery with a $ in front of the variable name
  var $item = $('#item');
  // Setting the css property requires us to pass the property we are changing and the value we are changing it to as parameters (strings) in the css() method
  $item.css('color', 'red');
```
>*** TIP: We often don't update styles through the css property. 
>
>This should be done by adding and removing classes appropriately through the `addClass()` and `removeClass()` methods. ***

---

<!-- .slide: data-background="../images/background.jpg"-->
We can update the internal html of an element with the html() method. 

Whatever we pass through the method will replace the current content of the selected element.

```js
  var $item = $('#item');
  // We can replace the content of the element either with text or with additional html.
  var htmlContent = "<p>Hello world</p>";
  $item.html(htmlContent);
```

---

<!-- .slide: data-background="../images/background.jpg"-->
jQuery also gives us access to many events making dealing with user interaction significantly easier.
```js
  var $button = $('#my-button');

  // Most events we will work with will pass as the first parameter in the on() method
  $button.on('click', function(event) {
    event.preventDefault();
    // Do something
  });
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Challenge Lab: Create a Checklist

You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review

* Uderstand how HTML parses and creates the object model, the DOM.
* Use selectors and methods to access and update HTML using the DOM.
* Register and trigger event handlers for jQuery events.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Homework

**Converting JSON**
- All of the instructions for this exercise are contained in the homework folder
- Given the json-hw.js file, read through the instructions and complete each of the challenges, typing your code directly into the file

**99 Bottles of Beer**
- Reuse the 99 Bottles of Beer assignment to create a website that programatically displays the lyrics to that song.
- You'll need to create both an `.html` file and a `.js` file
- In your HTML file, you'll want to have an unordered list (`<ul>`) that contains all of your lyrics
- Each line of the song should appear inside of a list item (`<li>`) within that unordered list

---

<!-- .slide: data-background="../images/background.jpg"-->
- Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!