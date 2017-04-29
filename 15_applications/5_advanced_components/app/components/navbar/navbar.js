angular
.module('app')
.component('navbar', {
    templateUrl: "components/navbar/navbar.html",
    controller: "NavbarController",
    controllerAs: "controller",
})
.controller('NavbarController', function(NavbarFactory){
  
})
.factory('NavbarFactory', function() {
  var NavbarFactory = this;

  return NavbarFactory;
});
