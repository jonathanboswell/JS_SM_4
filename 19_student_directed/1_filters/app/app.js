'use strict';

angular
.module('app', ['ui.router','ui-notification'])
.config(function($stateProvider, $urlRouterProvider, NotificationProvider) {

  // Setup routes
  $stateProvider
  .state('filters', {
    url: '/filters',
    templateUrl: '/home/filters.html'
  })
  .state('orderby', {
    url: '/orderby',
    templateUrl: '/home/orderby.html'
  });

  // Default Route
  $urlRouterProvider.otherwise("/filters");

  // Setup Notifications
  NotificationProvider.setOptions({
    delay: 3000,
    startTop: 20,
    startRight: 10,
    verticalSpacing: 20,
    horizontalSpacing: 20,
    positionX: 'top',
    positionY: 'right'
  });

});
