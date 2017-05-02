'use strict';

// Access the angular object
angular

// Call the .module() function
// Pass it 2 parameters: the name of the app and an array of libraries/components to include
.module('myApp', ['ui.router','pdf'])

// Call the .config function
// Pass it an anonymous callback function
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>Hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>This is a page about life.</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state({
    name: 'portfolio',
    url: '/portfolio',
    template: '<h3>My Portfolio</h3>'
  });
});
