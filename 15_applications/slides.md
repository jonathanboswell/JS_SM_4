<!-- .slide: data-transition="concave"  data-background="../images/background.jpg"-->
# ![](../images/js_logo.png)

---

<!-- .slide: data-background="../images/background.jpg"-->
# Applications

---

<!-- .slide: data-background="../images/background.jpg"-->
### Roadmap:
* Review MVC
* Routing
* Views
* Components
* Practice
* Lunch

---

<!-- .slide: data-background="../images/background.jpg"-->
## Review MVC
- M odel
- V iew
- C ontroller

---

<!-- .slide: data-background="../images/background.jpg"-->
## Routing

![](https://image.slidesharecdn.com/angularjs-routingoptions-140605144904-phpapp01/95/angular-js-routing-options-13-638.jpg)

---

<!-- .slide: data-background="../images/background.jpg"-->
## Routing Simplified

![](https://image.slidesharecdn.com/milexmiller3-160405180600/95/from-point-a-to-point-b-gaining-momentum-through-transitions-new-types-of-collaborations-2-638.jpg?cb=1459879603)

---

<!-- .slide: data-background="../images/background.jpg"-->
### What is Routing?

- Routing is the process of selecting a path for traffic in your application
- Routing enables you to navigate to different pages without reloading the entire application
- AngularJS is a Single Page Application (SPA) which has tools to manage routing

---

<!-- .slide: data-background="../images/background.jpg"-->
### Advanced: ngRoute vs. ui.router

Not all routing is the same. Angular has a native routing library: ngRoute. It is not good. I actually hate it. A lot of people use ui.router. It's better. I love it. Cleaner code, nested templates, 'nough said.

---

<!-- .slide: data-background="../images/background.jpg"-->
### Advanced: Package Management

- npm > package.json > node_modules
- bower > bower.json > bower_components

More on these this afternoon. Now let's see some routing.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Components

Reusable code that is accessed by more than one view
![](https://lh5.googleusercontent.com/w0JTkzeku_jwNWe_LIM6FJDqOOcft1GBnwQkmgDEjXxGYZj_e8-FKuV6dzCWU-vz2h6I5A4UM9_J6P2tZCygzBd6_osRbwsEpPFtWOvNw25U1lvV7co5Q6Cs9oD10umpnKQzWcg0)

---

<!-- .slide: data-background="../images/background.jpg"-->
## How to build

```js
.component('component-name', {
    'templateUrl':  'path/to/component.html',
    'controller':   'ComponentController',
    'controllerAs': 'controller' // Advanced: The default is $ctrl
})
```

```html
<component-name></component-name>
```

Hint: A great way to know when to build a component? If you build a Factory...should probably be a component.

---

<!-- .slide: data-background="../images/background.jpg"-->
## Advanced: Directives

- Components are a quick and easy way to build a directive
- Directives are custom HTML tags that tell AngularJS's compiler to attach/inject special behavior into the DOM at that tag.

```html
<greeting></greeting>
```

Get compiled and outputted to the DOM as:

```html
Hello World
```

---

<!-- .slide: data-background="../images/background.jpg"-->
## Practice

Let's play with a component...
