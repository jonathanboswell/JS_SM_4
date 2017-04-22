<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# Frameworks

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Intro to MVC
* Intro to Angular
* Controllers
* Multiple Controllers
* View
* Practice
* Lunch

---

<!-- .slide: data-background="../images/background.jpg"-->
## Introduction to MVC
As we develop more complex full-stack applications, it is extremely beneficial in our development to create a _separation of concerns_. If we divide the tasks of our app into their own components we create a development environment that is easier to navigate through and further, increases reusability of code since components can be plugged in where their purpose is needed.  Arguably the most well-known and implemented separation of concerns architecture for apps is the Model-View-Controller, or simply _MVC_.

---

<!-- .slide: data-background="../images/background.jpg"-->
MVC architectural pattern can be broken down like so:

- **Model**: handles data and business logic
- **View**: presents data to User in any supported format
- **Controller**: receives user inputs and call appropriate resources to carry them out

![](http://www.beansoftware.com/ASP.NET-Tutorials/Images/MVC-Diagram.gif)

---

<!-- .slide: data-background="../images/background.jpg"-->
### Model

The model is the data of an application and the rules applying to data. For example, imagine when a user signs up, you need to save him/her to your database so that your app can recognize them when they try to sign in later. What data do you want allowed into your database? Besides providing the data, the model also serves as somewhat of a gatekeeper dictating what type of data can be saved (you only want relevant data, right?) and further, it performs logic on incoming/outgoing data so it can do things like serialize your user's password so it's encrypted.

---

<!-- .slide: data-background="../images/background.jpg"-->
### View

The view is simply the user interface, everything the user can see and respond to on the screen. As you are surfing the web, staring at your screen, everything within your vision is considered part of the view: buttons, text, input, etc.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Controller

The controller serves as the intermediary between the view and the model. From the view to the model, it manages the user requests (API GETs, POSTs, etc.) and updates the database.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Intro to Angular

As discussed, having our apps architected in this MVC way really helps create an easier and more maintainable development environment. This leads us into our next topic of frameworks. Developers are prone to use frameworks because they come with MVC already in place, and we merely have to extend them with our own custom functionality. Today we will be introducing one most popular front-end frameworks in-use by the tech industry, AngularJS.

---

<!-- .slide: data-background="../images/background.jpg"-->
## What is AngularJS?

Angular is an open source JS framework maintained by Google. Maybe you've heard of them?  It was created nearly 6 years ago. Its longevity is a testament to its capability and usefulness.  AngularJS is one of the most widely adopted MVC JS frameworks in use today and is a valuable job skill to put on your resume.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Why should I use AngularJS?

AngularJS provides the following benefits when used to develop web apps:
- Enables us to organize and structure single page apps using the popular MVC design pattern.
- Makes us more productive when developing web apps because it provides features, such as data binding, that requires less code from the developer.
- Was designed with testing in mind.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Let's Jump In!

OK!

