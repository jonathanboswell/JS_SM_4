---
title: 'Test'
output:
    html_document:
        css: style.css
---

# ![](./images/js_logo.png)

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
# Data Types

NOTE: To view slides, install [reveal-md](https://github.com/webpro/reveal-md) and run
`reveal-md --theme white`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Schedule:
* Attendance, Exit Ticket Questions
* Data Types
	* String
	* Integer
	* Float
	* Boolean
	* Array
	* Object

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Schedule (cont):
* Working with Arrays
	* Creating/Variables
	* Accessing Values
	* Helper Methods
	* Iterating through
* Lab
* Review

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Objectives:

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
- Iterate over and manipulate values in an array.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## What is a Data Type?

* A classification identifying one of various types of data. 
* Determines
	* The possible values for that type
	* The operations that can be performed
	* The meaning of the data
	* The way values of that type can be stored

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Common Data Types

| Type | Description | Example |
| --- | --- | --- |
| Strings | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| Integers | Whole numbers, with no delimiter | `42`, `1024` |
| Floats | Decimals, with no delimiter | `3.14`, `3.0` |

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
| Type | Description | Example |
| --- | --- | --- |
| Booleans | Represents either true or false | `true`, `false` |
| Arrays | Collections of Data | [ Superman, Batman, Spider-Man] |
| Objects | ------ | ----- |

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## CodeAlong: Datatypes

#### Part 1: `typeof( )`

```javascript
typeof(37) === 'number';
=> true

typeof({}) === 'object';
=> true

typeof('hi there') === 'string';
=> true

```
  `typeof()` returns a string with the type of the operand, or expression of the object you're looking at.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: Numbers

* Integers (a.k.a. "whole numbers")

```javascript
..., -1,0, 2, 3, 4, 5, ...
```

* Floats (or Decimal numbers)

```javascript
2.718, 3.14, 0.5, 0.25, etc.
```

In JS all numbers are actually **"double-precision 64-bit format IEEE 754 values"**. Other languages and databases divide them into floats and integers.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 3: Arithmetic Operators

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 4: Special Number Operators

A special `Math` object let's you perform square roots and powers.

* Taking a number to some `power`? Just use `Math.pow`.

```javascript
// 3^2 becomes
Math.pow(3,2)
=> 9
// 2^4 becomes
Math.pow(2,4)
=> 16
```
* Taking a square root

```javascript
// √(4) becomes
Math.sqrt(4)
=> 2
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
* Need a `random` number? Then use `Math.random`.

```javascript
// The following only returns a random decimal
Math.random()
=> 0.229375290430
/**
  The following will return a
  random number between 0 and 10
*/
Math.random()*10
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
* Since Numbers can be **Floats** or **Integers**, we often need to delete remaining decimal places, which can be done using `Math.floor`.

```javascript
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3
```
Fun tip: **floor** rounds down. **ceiling** rounds up.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 5: Strings

Strings are collections of letters and symbols known as *characters*. We use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

```javascript
"John"
"Jane"
"123"
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## CodeAlong: Variables and Keywords

#### Part 1: Always Use Var!

If you declare a variable without assigning a value to it, its type will be `undefined.`s

```javascript
var a;
=> undefined
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
Let’s try assigning a value to variable:

```javascript
var name = "Alex";
=> undefined

name
=> "Alex"
```

```javascript
var myNumber = 1;
// or also

var myString = "Greetings y'all!"
```

Always remember that these variables should always have the `var` keyword and use `camelCase`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: Assignment Operators

Values are assigned using `=`; compound assignment statements, such as `+=` and `-=`, can also be used:

```javascript
var x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement by 1, respectively. These can be used as prefix or postfix operators.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
* If you want to turn a number into a string, you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  Be careful though.
  Since numbers can be floats,
  JavaScript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Introduction to Arrays

Arrays are lists or collections.

Arrays are great for:

* Storing data
* Enumerating data (i.e., using an index to find them)
* Quickly reordering data

```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Arrays (cont)
* Stored in sequential order
* Indexed starting at `0` and ending at `length - 1`. 
	* JavaScript starts counting at zero, so the first position in the array will be `[0]`, the second position in the array will be `[1]`, and so forth.

```javascript
// First friend
var firstFriend = friends[0];
=> 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
We can even use strings like arrays:

```javascript
var friend = "bobby bottleservice";
// pick out first character
friend[0]
//=> 'b'
friend.length
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## CodeAlong: Working with Arrays

#### Part 1: Var New (NOT RECOMMENDED)

```javascript
var a = new Array();
=> undefined

a[0] = "dog";
=> "dog"

a[1] = "cat";
=> "cat"

a[2] = "hen";
=> "hen"

a
=> ["dog", "cat", "hen"]

a.length;
=> 3
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Array Literal Notation

#### Array literal notation (RECOMMENDED):

```javascript
var a = ["dog", "cat", "hen"];

a.length;
=> 3
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: Length Method

`array.length`

* Always one more than the highest index in the array.

```javascript
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length;
=> 101
```

**Remember**: the length of the array is one more than the highest index.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 3: Getting Data from an Array

If you query a nonexistent array index, the result will be `undefined`:

```javascript
var a = ["dog", "cat", "hen"];
=> undefined

typeof a[90];
=> undefined
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## CodeAlong: Accessing Values in Arrays

#### Part 1: Creating Arrays

Create a shopping list array.


---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: Adding Elements to the Arrays

Use bracket notation to add values to the one of the arrays; use the `.push()` method for the other.

```javascript
goods[2] = "beer"

quantity.push(8)
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 3: Accessing Elements from Arrays and Concatenating Them With Strings


```javascript
  => 'Today, I consumed ' + quantity[0] + ' cups of ' + goods[0]
  => 'I am going to have ' + quantity[1] + ' cups of ' + goods[1] + ' tonight'
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Array Helper Methods

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.
- `a.pop()` - Removes and returns the last item.
- `a.push(item1, ..., itemN)` - Adds one or more items to the end.
- `a.reverse()` - Reverses the array.
- `a.shift()` - Removes and returns the first item.
- `a.unshift([item])` - Prepends items to the start of the array.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Exercise: Decode secret message

#### Part 1: Array Creation and the `.push()` Method

```javascript
var message = []

message.push(8)
=> 1
message.push('r', 'e', 'b', 'm', 'u')
=> 6
message.push('n', 's', 'i', 'A', 'G', 'K')
=> 12

message
=> [ 8, 'r', 'e', 'b', 'm', 'u', 'n', 's', 'i', 'A', 'G', 'K' ]

```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: `.pop()`, `.shift()`, and `.unshift()`

```javascript
message.pop()
=> 'K'

message.shift()
=> 8

message.unshift(1)
=> 11
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 3: Array Reversal Using `.reverse()`
```javascript
message.reverse()
=> [ 'G', 'A', 'i', 's', 'n', 'u', 'm', 'b', 'e', 'r', 1 ]
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 4: Array `.join()`

The `.join()` method joins all elements of an array into a single string.

```javascript
message.join()
=> 'G,A,i,s,n,u,m,b,e,r,1'

message.join(' ')
=> 'G A i s n u m b e r 1'

```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Iterating through an Array

Iterating through the elements of an array, one at a time, is a very common and useful practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Using the forEach() method instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

Returns:

```javascript
Bruins
Cal Bears
Ravens
Ducks
undefined
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### More Iterators:

Here are some other iterator methods for you to research and practice:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Pop and Push

```javascript
var evens = []
evens.push(2,4,6,8,10)
=> 5

var odds = []
odds.push(1,3,5,7,9)
=> 5
```

#### YOU DO: See what happens if you "pop()" off of an array.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## LAB: Arrays: Independent Practice

In the [starter code](starter-code/arrays.js), you'll find an array.js file. Use this to get some more practice in the console with arrays.

We'll use [codepen.io](http://codepen.io) for this one. I recommend adding a "Run" button by disabling autopreview in settings.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Conclusion

#### Review

* Describe use cases of different "data types".
* Why is iterating important when working with stored data?

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Homework: Madlibs (10 min)

The due date for the exercise will be after Lesson 6 (Intro to the DOM and jQuery). 

The idea is to give students a preview of what the first assignment will entail. 
