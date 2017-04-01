<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# Objects + JSON

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Homework, Attendance & Exit Ticket Questions
* Intro to Objects
* Object Properties
* Real World Scenarios
* Code-Along
* Monkey Lab
* JSON
* Lunch

---

<!-- .slide: data-background="../images/background.jpg"-->
### Learning Objectives
- Identify likely objects, attributes, and methods in real-world scenarios
- Write a constructor for a JavaScript object
- Write a prototype method for a JavaScript object
- Implement and interface with JSON data

---

<!-- .slide: data-background="../images/background.jpg"-->
### Preparation
- Understand fundamental data types
- Execute functions and understand scope
- Use control flow to manage the flow of information in our programs

---

<!-- .slide: data-background="../images/background.jpg"-->
## Objects: Introduction
Objects in JavaScript are used in two ways:
1. As simple structured data store, similar to arrays.
```js
  var array = ['Michael', 'Bolton'];
  var object = {'first': 'Michael', 'last': 'Bolton'}

  array[0] => 'Michael'; //access value by index
  object['first'] => 'Michael'; //access value by key
```

2. As a fundamental programming paradigm that helps us structure and categorize our code.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Object Properties

* An object is an associative array, also known as a hash or a dictionary in other languages. 

* It stores key-value pairs, and unlike arrays, is not ordered. 

* Object properties are variables attached to a specific object.

---

<!-- .slide: data-background="../images/background.jpg"-->
There are two ways to create objects:

```js
  var myHouse = {};```

OR

```js
  var myCar = new Object();
```
...

```js
  // We can also create objects populated with data
  var myMotorcycle = {
    wheels: 2,
    color: "blue",
    maxSpeed: 300,
    owners: ["Tedi", "Ena"]
  }
```

---

<!-- .slide: data-background="../images/background.jpg"-->
### Getting + Setting

We can get and set object properties with either **dot notation** or **square brackets** and parenthesis.

**Setting object properties:**
```js
  // We can set object properties via the key in dot notation (more common for simple scenarios)
  myHouse.windows = 6;
  myHouse.address = "Tedi Manor, Gotham City";

  // We can also set object properties via square brackets with the key as a string.
  // We use the square bracket notation when a property name has either a special character
  // like a space or a hyphen, or when the property name starts with a number.
  // This notation is also used when our property names are dynamically determined
  myCar["num-of-wheels"] = 4;
  myCar["doors"] = 2;
```

---

<!-- .slide: data-background="../images/background.jpg"-->
**We access object properties the same way as setting them:**
```js
  myHouse.windows; //returns 6
  myHouse.address; // returns "Tedi Manor, Gotham City";

  myCar["num-of-wheels"]; // returns 4;

  var numDoors = "doors";
  myCar[numDoors]; // returns 2;
```

---

<!-- .slide: data-background="../images/background.jpg"-->
Copying an object into another one does not duplicate the object, but rather references it.

```js
  var yourHouse = myHouse;
  yourHouse.doors; // returns 2
  myHouse.doors; // returns 2

  yourHouse.doors = 4;
  myHouse.doors; // returns 4
```

* This is why we have the option to use a constructor function instead

	* To create instances, but first let's play with objects

---

<!-- .slide: data-background="../images/background.jpg"-->
#### Breaking Down a Real-World Scenario

> A user, browsing on a shopping website, searches for size 12 sneakers,
> and examines several pairs before purchasing one.

What kind of object can we whiteboard from this?

* A shopping cart object
* Actions (methods)

---

<!-- .slide: data-background="../images/background.jpg"-->
## Coding Our Objects
### Constructors:

```js
  var Person = function () {};
```

**The object**
We're familiar with the new Object() syntax from our first example today. We create an instance of our "Person" class in a similar way.

```js
  var clark = new Person();
  var bruce = new Person();
```

---

<!-- .slide: data-background="../images/background.jpg"-->
**The constructor** is called at the moment that our new object is instantiated. The constructor is most often used to set the object's properties or to call methods for the object to use.

```js
  var Superhero = function () {
    console.log('Superhero instance created');
  };

  var clark = new Superhero(); // console logs "Superhero instance created"
  var bruce = new Superhero(); // console logs "Superhero instance created"
```

---

<!-- .slide: data-background="../images/background.jpg"-->
**Properties can be set in the constructor, so they are set specifically for each instance. **

This means that we pass them as parameters in our constructor function.

>While working with objects, we will run to the keyword **this** quite often. We will cover **this** in much more detail later on in the unit, however it's important to understand in the context of our objects that **this** refers to the current object instance.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Setting properties with a constructor

```js
  var Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    this.firstName = firstName;
    this.superheroName = superheroName;
    console.log('Superhero instantiated');
  };

  var superman = new Superhero('Clark', 'Superman');
  console.log(superman.firstNAme + ' is ' + superman.superheroName);
```

---

<!-- .slide: data-background="../images/background.jpg"-->
### Methods

**Methods** are functions grouped together in our objects. 

We can call our object methods the same way we call our object properties through the dot notation, with the main difference being that we add () at the end of our statement. 

To define a method, we assign a function to the named property of the class's prototype property.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Monkey Lab

Open the monkey.js file.

Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

---

<!-- .slide: data-background="../images/background.jpg"-->
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Introduction to JSON
[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight text-based data format that's based on JavaScript

---

<!-- .slide: data-background="../images/background.jpg"-->
We use JSON objects to transfer data between applications and Javascript. 

To keep everything consistent, all JSON code must follow a number of strict conventions (_stricter even than normal JavaScript!_) in order to be syntactically correct. For instance:

- Property names must be double-quoted strings.
- Trailing commas are forbidden.
- Leading zeroes are prohibited.
- In numbers, a decimal point must be followed by at least one digit.

---

<!-- .slide: data-background="../images/background.jpg"-->
- Most characters are allowed in strings; however, certain characters (such as `'`, `"`, `\`, and newline/tab) must be 'escaped' with a preceding backslash (`\`) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments!

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review
They are the center of OOP; unlike other languages, JavaScript uses a classless system. Objects not only give us more superpowers for storing and manipulating our data, they help us better structure our code. JSON will also be an important structure from this point on. All of the data we'll be working with from APIs will be in the form of JSON.

* Be able to code objects using constructors.
* Understand how JSON transfers data between programs.

---

## Lunch


