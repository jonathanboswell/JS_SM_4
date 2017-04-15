<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# Asynchronous JavaScript + Callbacks

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Mid Course Review
* Core: Intro to Async JS
* Core: Anonymous Functions and First-Class Functions
* Core: Code Along: Functions as First-Class Objects
* Core: Functions and Callbacks
* Advanced: Anonymous Functions and IIFEs
* Advanced: IIFE Lab

---

<!-- .slide: data-background="../images/background.jpg"-->
### Learning Objectives

- Core: Store and use anonymous functions in variables.
- Core: Pass functions as arguments to functions that expect them.
- Core: Write functions that take other functions as arguments.
- Advanced: Return functions from functions.
- Advanced: Invoke anonymous functions immediately. 

---

<!-- .slide: data-background="../images/background.jpg"-->
## Introduction to Asynchronous JavaScript

As our programs start relying on user input/behavior and data that might not be available right away, we need to increasingly start thinking about how we can run our code at different times. 

We refer to this "now and later" programming as **asynchronous programming**. 

We have already used asynchronous programming in our code in previous lessons...

---

<!-- .slide: data-background="../images/background.jpg"-->
- We have listened for click and mouse events that execute certain code when that event is complete.
- We have waited for a return from an AJAX call, and we have executed code for success and error scenarios.

Although we have used asynchronous programming in our code, we have not discussed _how_ this is all happening. Before we can truly understand how asynchronous programming works in JavaScript, we need to take a deeper look at functions and scope.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Anonymous Functions and Functions as First-Class Objects: Recap

Remember this?

```js
  $('#todoList').on('click', '.btn', function(clickEvent) {
    ...
  });
```

Taking a close look at the jQuery `on()` method, we notice two very important overlooked concepts...

---

<!-- .slide: data-background="../images/background.jpg"-->
1. The `on()` method is taking a function as one of its parameters.
2. The function we are passing into the `on()` method does not have a name, we are just passing a raw function: the function keyword, a parameter list, and a function body inside curly braces.

---

<!-- .slide: data-background="../images/background.jpg"-->
##  Functions as First-Class Objects

By "first-class objects", we just mean:

* They can be used in any part of the code that strings, arrays, or data of any other type can be used. 

---

<!-- .slide: data-background="../images/background.jpg"-->
With first-class functions we can:
* Store functions as variables
* Pass them as arguments to other functions
* Return them from other functions
* Or just run them ad-hoc without the need to assign them to anything

A function that takes another function as an argument, or returns a function, is called a `higher-order function`.

---

<!-- .slide: data-background="../images/background.jpg"-->
In the prior example we saw a function being passed to the jQuery `.on()` method, but JavaScript also has a plethora of built functions that allow us to pass functions as parameters. 

Let's take a look at the setTimeout function:

```js
  setTimeout( function(){
    console.log("Hello world");
  }, 1000 );
```

1. First argument: Function to run (or call-back)

2. Second argument: time (in milliseconds) to wait before running that function

---

<!-- .slide: data-background="../images/background.jpg"-->
The syntax for defining our own function that takes a function as an argument is not any different than the syntax for defining a function that takes any other kind of argument:

```js
  var blastOff = function() {
    console.log("Blasting off!");
  }

  function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    blastOffCallback();
  }

  launchRocket("Viking", blastOff);

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off!

```

---

<!-- .slide: data-background="../images/background.jpg"-->
In the above example, the function being passed into `launchRocket` is acting as a "callback"

>**Callback**: a function that is designed to be executed by the code of another function.

---

<!-- .slide: data-background="../images/background.jpg"-->
Callback functions can also take arguments:

```js
  var blastOff = function(destination) {
    console.log("Blasting off for " + destination + "!");
  }

  function launchRocket(rocketName, blastOffCallback) {
    console.log("Launching " + rocketName);
    console.log("3... 2... 1...");
    blastOffCallback("Mars");
  }

  launchRocket("Viking", blastOff);

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off for Mars!

```

---

<!-- .slide: data-background="../images/background.jpg"-->
Just as we can pass functions as arguments to other functions, we can also return functions from other functions:


```js
  var blastOff = function(destination) {
    console.log("Blasting off for " + destination + "!");
  }

  function makeRocketLauncher(rocketName, blastOffCallback) {
    return function() {
      console.log("Launching " + rocketName);
      console.log("3... 2... 1...");
      blastOffCallback("Mars");
    };
  }

  var launchViking = makeRocketLauncher("Viking", blastOff);
  var launchMariner = makeRocketLauncher("Mariner", blastOff);

  launchViking();
  launchMariner();

  // => Launching Viking
  // => 3... 2... 1...
  // => Blasting off for Mars!

  // => Launching Mariner
  // => 3... 2... 1...
  // => Blasting off for Mars!

```

---

<!-- .slide: data-background="../images/background.jpg"-->
Notice how when you run `launchViking()` and `launchMariner()`, you somehow have access to the original rocketNames, even though the function `makeRocketLauncher()` that you passed them into has run its course and is no longer executing? 

That's because `launchViking()` and `launchMariner()` are **"closures"**, meaning they have "closed over" those rocketName variables. 

We'll go into what that means and why it's useful a couple of lessons from now.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Functions and Callbacks: Independent Practice

Open the rocket.js file in the 2_callbacks folder.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Anonymous Functions and IIFEs

By this point we have seen various examples of functions being passed as callback arguments. Taking the first setTimeout example:

```js
  setTimeout( function(){
    console.log("Hello world");
  }, 1000 );
```

* The function being passed into `setTimeout()` above is called an **anonymous function expression**.
	* It is not named in any way
	* It is not a function expression that got assigned to a variable name
	* It is not a function that got its name in a function declaration.

---

<!-- .slide: data-background="../images/background.jpg"-->
Note that you don't have to pass anonymous functions as callbacks in cases like this -- you can pass named functions as well (which can help debugging output):

```js
  function sayHi() {
    console.log("Hello world");
  }

  setTimeout(sayHi, 1000 );
```
is the same as: 

```js
  setTimeout(function(){
    console.log( "Hello world" );
  }, 1000 );
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## IIFE
**Immediately Invoked Function Expressions**

We have the ability to execute our function expressions as soon as they are declared. 

---

<!-- .slide: data-background="../images/background.jpg"-->
To make this function invoke immediately:

```js
  var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
      console.log(counter);
    }
  }
```

Change it to this by adding parenthesis at the end of the expression:

```js
  var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
      console.log(counter);
    }
  }();
```

Note that **we need to add a semicolon** at the end of IFFEs.

---

<!-- .slide: data-background="../images/background.jpg"-->
## IIFE: Independent Practice

Open the 2_iife-exercise/js/main.js file.

- Write an IIFE function that takes a timer argument.
- The function will automatically execute and count up every second until the specified argument.
- Use the setTimeout function to count up.
- Hint: a second is the timer passed * 1000 (milliseconds).

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review
Callbacks and closures are the bread and butter of asynchronous programming. Looking back at our DOM and APIs lessons, our interfaces update on user interactions or once we receive data from remote locations. Best practices in JS call for these reactions to be handled in the form of callbacks.

Callbacks, closures, and IIFEs allow us to better organize our code for each scenario, as well as make our functions significantly more dynamic.
