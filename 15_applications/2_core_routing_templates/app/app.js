'use strict';

angular
.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: '/home/home.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '/about/about.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);

  $urlRouterProvider.otherwise("/home");
});
