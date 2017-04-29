angular
.module('app')
.component('greeting', {
    templateUrl: "components/greeting/greeting.html",
    // controller: "GreetingController",
    // controllerAs: "controller"
})
.controller('GreetingController', function() {
    this.name = "Your name";
});
