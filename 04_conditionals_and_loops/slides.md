---
title: 'Test'
output:
    html_document:
        css: style.css
---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
# ![](./images/js_logo.png)

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
# Conditionals and Loops

NOTE: To view slides, install [reveal-md](https://github.com/webpro/reveal-md) and run
`reveal-md --theme white`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Schedule:
* What is a Conditional Statement?
* Comparison Operators
* Truthy and Falsy
* Boolean/Logical Operators
* Lab

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Schedule (cont):
* Switch Statements
* While and Do-While
* Iteration
* FizzBuzz challenge lab
* Review
* Homework and Exit Tickets

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Students will be able to (SWBAT):

- Use if/else conditionals to control program flow based on Boolean (true or false) tests.
- Use Boolean logic (!, &&, ||) to combine and manipulate conditional tests.
- Use switch/case conditionals to control program flow based on matching explicit values.
- Differentiate among true, false, 'truth-y', and 'false-y'.
- Review loop iteration using for and forEach, and introduce while and do/while loops.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Conditional Statements

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. 

JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the 'if'...'else' statement, which uses Boolean (true or false) tests.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### If/Else Statement

`if (expr) { code }`  

... is a command to run the `code` block if `expr` is `true`

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->You can also add an optional `else` clause, to run if `expr` is _not_ `true`:

`if (expr) { code } else { other code }`

```javascript
if (0 > 1) {
  console.log("hi");
} else {
  console.log("bye");
}
//=> bye
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->When you need to test more than one case, you may use `else if`:

```javascript
var name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name === "kittens!!"
//=> true
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->**Note**: It is **not** recommended to assign variables within a conditional expression because that will assign a value to the variable, as seen below:

```javascript
student = "Jamie";
//=> "Jamie"
```

What will this do?

```javascript
if (x = 3) {
    console.log("boo");
}
```

x = 3 will evaluate to true. Remember to use `==` or `===`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Ternary Operators

Basically a concise "if-else” in one line.

It not only executes blocks of code, it also returns a value:

```javascript
var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Block Statements

Statements intended to be executed after a control flow operation will be grouped into a **block statement**; they are placed inside curly braces:

```javascript

{
  console.log("hello");
  console.log("roar");
}
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Block Scope

We will talk about scope in later lessons; basically it means a limited area of code that knows about a variable's existence. In the case of **block statements** in JavaScript, no scope is created, unlike in most other languages.

```javascript
var name = "gerry";
{
  var name = "jay";
}
console.log(name);
// => jay
```

Only functions introduce scope in Javascript.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"--><a name="codealong1"></a>
## Comparison Operators

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating.

```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Double-Equals Equality Operator `==`

* Performs much of the "type coercion" in the background. 
	* (e.g., the number `1` and the string `"1"`) will match

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Triple-Equals Equality Operator `===`

* Avoids type coercion
* Strict Matching - must match value AND type.

Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript.

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`. And again, we should always use `!==` and `===`, because they are more precise than `!=` and `==`.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## CodeAlong: Truthy and Falsey

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Boolean and Logical Operators

When you feed Boolean values of `true` or `false` into logical operators, they will return `true` or `false` based on a few rules.

There are two "binary" operators:
- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:
- **NOT**, denoted `!`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->The `!` takes a value and returns the opposite Boolean value:

```javascript
!(true)
//=> false
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
### Short-Circuit Logic

`&&` and `||` and `!` don't have to operate only on true or false -- they can operate on any values, and JavaScript will evaluate the truthyness or falseyness of the operands. In the case of `!`, it returns a Boolean true-or-false, but in the case of `&&` and `||`, it returns one of the original operands themselves, using short-circuit logic.

This means that the execution of the second operand is dependent on the execution of the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = person && person.name;
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
In this case, if the first operand `person` is undefined, which is falsey, the second operand `person.name` will not be evaluated. The expression basically says, "We already know the whole `&&` expression is false, because `person` is falsey. Why bother dealing with the second operand?"

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
Short-circuit logic is also for setting default values:

```javascript
var name = person.name || "Bobby Default";
```

In this case, if the first operand `person.name` turns out to be falsey for any reason (probably because it's undefined or it's an empty string), `"Bobby Default"` will be returned. If `person.name` is truthy (probably because it's a non-empty string), it will be returned, and the second operand won't be evaluated. The expression basically says, "We already know the whole `||` expression is true, because `person.name` is truthy. Why bother dealing with the second operand?"

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Independent Practice

- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can drink alcohol
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Switch Statements

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

The default clause is optional.


----

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Switch Statement Usage

#### Part 1: Construct If/Else Conditionals

Create an if/else statement that returns a string, such as "Awesome Job" if the user gets a grade of “A” or "Bad Job" if they get an "F." Console.log a string for each letter grade.

```javascript

var grade = 'C';

if (grade === 'A') {
  console.log('Awesome job');
} else if (grade === 'B') {
  console.log('Good job');
} else if (grade === 'C') {
  console.log('Okay job');
} else if (grade === 'D') {
  console.log('Not so good job');
} else if (grade === 'F') {
  console.log('Bad job');
} else {
  console.log('Unexpected grade value entered');
}

```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 2: Construct Similar Logic Using a Switch Statement

Using the if/else statement from above, convert it into a switch statement.

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
    break;
  case 'B':
    console.log('Good job');
    break;
  case 'C':
    console.log('Okay job');
    break;
  case 'D':
    console.log('Not so good job');
    break;
  case 'F':
    console.log('Bad job');
    break;
  default:
    console.log('Unexpected grade value entered');
}

```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 3: Which is Faster?

>Which format is faster? Think about the number of computations run by each of the approaches. For example, when evaluating for `grade = 'C'` using the if/else approach, the condition (`grade === 'x'`) is evaluated three times. What if the if/else statement had 10 conditions? 100? How would this impact the speed of the program? Please see ['Writing Efficient JavaScript'](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html) for more details.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 4: Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
```javascript
var grade = 'B';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### Part 5: Illustrate the Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## While and Do-While

`While` is a loop statement that will run **while** a condition is true.

JavaScript has `while` loops and `do-while` loops.

This should be enough to break a browser.

```javascript
while (true) {
  // an infinite loop!
}
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
```javascript
var input = 0;
do {
  console.log(input++);
} while (input < 10);
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Iteration

Iterating is a way of incrementally repeating a task.

#### for

You can iterate over an array with:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  console.log(i);
}
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->If the array length is fixed (aka elements are not being added/removed which change the number of elements in the array), the previous loop is slightly inefficient because it is essentially looking up the length property once every loop. An improvement is to chain the `var` assignment:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```

Notice the placement of the comma and semi-colons.

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
#### forEach

Another way of iterating over an array added with ECMAScript 5 is [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
   console.log("I want a ", currentValue);
   console.log(array[index]);
});
```

---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Fizz Buzz: Challenge Lab

Relying on your new-found knowledge of loops and if/else statements, incrementally build the common Fizz buzz loop. Fizz buzz is a math game designed to teach the concept of division. Create a program that will iterate through numbers 1 to 100 and log each number in the console.


---

<!-- .slide: data-transition="concave"  data-background="./images/background.jpg"-->
## Conclusion

#### Review

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truthy', and 'falsey'.

#### Homework

---
