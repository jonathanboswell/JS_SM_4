'use strict';

angular
.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'home',
    url: '/home',
    templateUrl: '/home/home.html',
    controller: "HomeController",
    controllerAs: "controller"
  });

  $urlRouterProvider.otherwise("/home");
});
