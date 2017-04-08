<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# DOM + jQuery + Templating

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Exit Ticket Questions & Homework
* Events Continued
* Event Delegation and Best Practices
* Appending
* Separation of Concerns and Templating
* Templating
* To Do List: Independent Practice
* Review

---

<!-- .slide: data-background="../images/background.jpg"-->
### Learning Objectives
- Implement advanced jQuery events.
- Use event delegation to manage dynamic content.
- Use implicit iteration to update elements of a jQuery. Selection and chaining to place methods on selectors.
- Add templating to our projects for better and more abstracted content manipulation.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Preparation
*Before this lesson, students should already be able to:*

- Register and trigger event handles for jQuery click event.
- Manipulate the DOM by using jQuery selectors and functions.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Events Continued

* In this lesson we will work with additional jQuery events and understand implications of adding dynamic content to our pages. 

* We will also work with a templating for better separation of concerns in our code.

---

<!-- .slide: data-background="../images/background.jpg"-->
* We can listen for mouse, keyboard, form, and document/window events. 

* Today we will focus on mouse events, however listening to other events is very similar to mouse events.

*Mouse Events:*
- click
- dblclick
- mouseenter
- mouseleave

---

*Keyboard Events*
- keypress
- keydown
- keyup

*Form Events*
- submit
- change
- focus
- blur

---

<!-- .slide: data-background="../images/background.jpg"-->
*Document/Window Events*
- load
- resize
- scroll
- unload

---

<!-- .slide: data-background="../images/background.jpg"-->
## DOM Injection + Event Delegation: Codealong

---

<!-- .slide: data-background="../images/background.jpg"-->
## Appending: Independent Practice (30 mintutes)

Open shopping_cart_basic and work through the independant practice items.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Separation of Concerns and Templating: Introduction

Through event handlers and DOM manipulation we are able to making our applications more dynamic, interactive, responsive, and just plain fun. 

Even with a small to do list app, our code is starting to grow significantly. If we keep stacking features, our code will soon become much more difficult to manage. 

---

<!-- .slide: data-background="../images/background.jpg"-->
We are currently having to interact with our data as DOM elements. As our applications start forming relationships, it will become very messy to get values, serialize them, and pass them around.

---

<!-- .slide: data-background="../images/background.jpg"-->
### What's the Solution?

Separating data from our view logic using **Templating**.

>Templating lets us reference a snippet of code, and populate it with data we store in actual JavaScript objects, before adding it to the DOM. 

There are many JavaScript templating libraries like [Handlebars](http://handlebarsjs.com/), [Mustache](http://mustache.github.io/), and [Underscore templates](http://underscorejs.org/).

---

<!-- .slide: data-background="../images/background.jpg"-->
## Templating: Codealong

Build a shopping cart template in HTML then convert to JS

---

<!-- .slide: data-background="../images/background.jpg"-->
* Allows us to organize our code by **DOM and event logic** 
	* usually taken care of by jQuery in our case 

* And by model logic
	* currently just JS models
* This will help interacting with data sets much **cleaner and more manageable**

---

<!-- .slide: data-background="../images/background.jpg"-->
## Shopping Cart: Team Practice

Build on top of the shopping cart. Create a store as a team

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review

* Why would we want to use templating?
* What is event delegation? Why would we use it?
