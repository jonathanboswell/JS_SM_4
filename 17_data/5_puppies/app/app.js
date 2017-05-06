'use strict';

angular
.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state({
    name: 'puppies',
    url: '/puppies',
    templateUrl: '/puppies/puppies.html'
  });

  $urlRouterProvider.otherwise("/puppies");
});
