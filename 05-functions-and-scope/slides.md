<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# Functions and Scope

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Attendance, Exit Tickets, Review Homework
* Introduction to Functions  
* Function Declaration 
* Rolling Dice
* Parameters
* The Return Statement
* Scope
* Local and Global Scope Usage 
* Review
* Lunch

---

<!-- .slide: data-background="../images/background.jpg"-->
### Learning Objectives

*After this lesson, you will be able to:*

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values
- Determine the scope of local and global variables

---

<!-- .slide: data-background="../images/background.jpg"-->
### Preparation
*Before this lesson, you should be able to:*

- Use conditionals to control program flow
- Differentiate between true, false, 'truth-y', and 'false-y'
- Use Boolean logic (!, &&, ||) to combine and manipulate conditionals

---

<!-- .slide: data-background="../images/background.jpg"-->
## Introduction to Functions

* A reusable statement that can be called anywhere in the program. 
* Avoids the need to rewrite the same statement over and over. 
* Allow us to segment large, unwieldy applications into smaller, more manageable pieces.
* DRY - Don't Repeat Yourself Our goal is to create programs with as little code as possible, while maintaining complete clarity.
* Function can be passed into other functions as an argument.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Function Declaration

Before we call, or "use", a function, we must define it. In JavaScript, functions can be defined in several ways. Two common methods are __function declarations__ and __function expressions__.

__Function Declarations:__

```javascript
function speak (words) {
  console.log(words);
}
```

__Function Expressions:__

```javascript
var speak = function (words) {
  console.log(words);
}
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Hoisting:

You can call a function that is defined using **function declaration** *before* the part of the code where you actually define it:

```javascript
speak('hello, world!')

function speak(words) {
  console.log(words)
}

// DOES NOT RESULT IN ERROR
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Expressions don't hoist:

* Function expressions **must be defined before they are called**:

```javascript
speak('hello, world!')

var speak = function (words) {
  console.log(words)
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Function Declaration Syntax

A function declaration always has the following:

* A name
* An optional list of parameters 
	* The names of arguments to be "passed" into the function, or information the function will use
	* The () before the opening curly brace
* Statements inside the function
	* The {} code block executed every time the function is called

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Calling Functions

Calling (AKA invoking) a function executes the code defined inside this function.

* **Defining** and **calling** a function are different. 
	* A function will not be **called** when it's **defined**.

You **call (AKA Invoke)** a function by using parenthesis after the function's name `()`:

```javascript
function hello () {
  console.log("hello there!")
}

hello();

=> hello there!
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## What's a Method?

JavaScript functions are often defined as **methods** when they are on objects. 

To call a function as a method:

```javascript
# First define the fuction in an object:
var person = {
  name: 'Obama',
  speak: function () {
    console.log('Hello, World!')
  }
}

# Invoke (call) the function:
person.speak()

# results in:
=> 'Hello, World!'
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Rolling Dice: Lab

For this lab, you'll be creating a page that displays a random update of two dice every time the user hits the "Roll Dice" button. To get started, open the files in the "1_dice" folder.

![](2_dice/img/diceroller.png)

Pseudocode before writing in JS!

---

<!-- .slide: data-background="../images/background.jpg"-->
## Parameters

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application...

---

<!-- .slide: data-background="../images/background.jpg"-->
```javascript
// Bad idea...
function helloMark () {
  console.log('hello, Mark');
}

function helloObama () {
  console.log('hello, Obama')
}
```

* Why is this a bad idea?
* What happens if this structure is used for 1,000 different users? 
* Is that a scalable and maintainable program?

---

<!-- .slide: data-background="../images/background.jpg"-->
## Using Parameters instead

Parameters allow us to call (invoke) the *same* function with *different* values

```javascript
function sayHello (name) {
  console.log('Hello ' + name);
}

sayHello('Mark');
=> 'Hello Mark'

sayHello('Obama');
=> 'Hello Obama'
```

---

<!-- .slide: data-background="../images/background.jpg"-->
To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

```javascript
function sum(x, y, z) {
  console.log(x + y + z)
}

sum(1, 2, 3);
=> 6
```

---

>MORE INFO: JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. 

>While this reduces the amount of code you must write, it increases the possibility of type errors. In JavaScript, function definitions do not perform type checking on arguments passed into the functions.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Parameters vs Arguments:

Usually used interchangably, however:

__Parameters__ refer to variables defined in the function's declaration

__Arguments__ refer to the actual values passed into the function when the function is called. For example:

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## The Return Statement

Sometimes we don't want to print to the console or update the DOM; rather, we want to update a variable or even call another function. This requires a `return` statement. 

When we return something, it:
* Ends the function's execution
* "spits out" what we are returning

---

<!-- .slide: data-background="../images/background.jpg"-->
We can then store this returned value in another variable...

```javascript
function sum (x, y) {
  return x + y;
}

var z = sum(3, 4);
=> 7
```

---

<!-- .slide: data-background="../images/background.jpg"-->
... or pass it to another function:

```javascript
function sum (x, y) {
  return x + y;
}

function double (z) {
  return z * 2;
}

var num = sum(3, 4)
=> 7
var numDbl = double(num);
=> 14

// This can also be written:
var num = double(sum(3,4));
=> 14
```

---

<!-- .slide: data-background="../images/background.jpg"-->
>MORE INFO: The `return` statement will completely stop a function's execution. Any statements following the `return` statement will not be called:

```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  var x = 1;
  var y = 2;
  console.log(x + y)
}
```

---

<!-- .slide: data-background="../images/background.jpg"-->
By default, JavaScript functions will return an `undefined` value. 

To test this, use Node to define and run a function __without__ a return value. 

A `return` value "overwrites" this default value.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Introduction to Scope

Scope is the set of variables you have access to. 

* JavaScript reads from top to bottom. 

Sometimes we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. 

This is the concept of scope.

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. When a variable is declared outside a function, it is public—referred to as GLOBAL—and has a global scope. Any script or function on the page can then reference this variable.

For example, when you declare a variable right away, it's defined globally:

```javascript
var name = 'Gerry';
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Global scope can be confusing when you run into namespace clashes. 

* You don't want to use global scoping for all your variables--because using it correctly is highly complex
* Every Javascript program uses the global scope in one way or another, so it’s important to be familiar with it.

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Local Scope

If a variable is declared **inside** a function, it is referred to as LOCAL, and has a local scope.

* A variable with local scope cannot be referenced outside of that function.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Local and Global Scope Usage

```javascript
var a = "this is the global scope";
function myFunction() {
  var b = "this variable is defined in the local scope";
}
myFunction();
console.log(b);
```

In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Scope flows down:

A function can access variables of the parent scope. 

A **function defined in the global scope** can **access all variables** defined in the **global** scope.

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```

---

<!-- .slide: data-background="../images/background.jpg"-->
### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
var a = 1;

function getScore () {
  var b = 2,
  c = 3;

  function add() {
  return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review


* Summarize the difference between global and local scope.
* Explain how you define and call functions using arguments.
