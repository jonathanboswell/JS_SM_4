'use strict';

angular
.module('app', ['ui.router','ui-notification','firebase'])
.config(function($stateProvider, $urlRouterProvider, NotificationProvider) {

  // Setup routes
  $stateProvider
  .state('admin', {
    url: '/admin',
    templateUrl: '/admin/admin.html'
  })
  .state('login', {
    url: '/login',
    template: '<navbar></navbar><login></login>'
  });

  // Default Route
  $urlRouterProvider.otherwise("/admin");

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
