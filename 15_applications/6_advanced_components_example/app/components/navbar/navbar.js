angular
.module('app')
.component('navbar', {
    templateUrl: "components/navbar/navbar.html",
    controller: "NavbarController",
    controllerAs: "controller",
})
.controller('NavbarController', function(NavbarFactory){
  this.NavbarFactory = NavbarFactory
})
.factory('NavbarFactory', function() {
  var NavbarFactory = this;

  NavbarFactory.is_logged_in = false;
  NavbarFactory.name = "Your Name";

  NavbarFactory.login = function()
  {
    console.log("Login");
    NavbarFactory.is_logged_in = true;
  }

  NavbarFactory.logout = function()
  {
    console.log("Logout");
    NavbarFactory.is_logged_in = false;
  }

  return NavbarFactory;
});
