'use strict'

angular
.module('app')
.component('login', {
  templateUrl: "components/auth/login.html",
  controller: "LoginController",
  controllerAs: "c"
})
.controller('LoginController', function(UserFactory) {
  this.user = UserFactory;
})
.factory('UserFactory', function($firebaseAuth, Notification){

  var UserFactory = this;

  UserFactory.login = function()
  {
    UserFactory.auth.$signInWithEmailAndPassword(UserFactory.email, UserFactory.password)
    .then(function (user) {
      user.providerData.forEach(function (profile) {

        UserFactory.firebaseUser = profile;
        UserFactory.valid = true;

        Notification.success({title:"Welcome back " + profile.email, message: "New orders: " + Math.floor(Math.random()*100/10)});

        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      Notification.error({title:"Authentication failed:", message: errorMessage});
    });
  };

  UserFactory.logout = function()
  {
    UserFactory.auth.$signOut();
    UserFactory.setDefaults();

    Notification.success({message: "See ya next time."});
  };

  UserFactory.setDefaults = function()
  {
    //Default values
    UserFactory.email = "";
    UserFactory.password = "";
    UserFactory.valid = false;
    UserFactory.auth = $firebaseAuth();
    UserFactory.firebaseUser = {};
  };

  UserFactory.setDefaults();

  return UserFactory;
});
