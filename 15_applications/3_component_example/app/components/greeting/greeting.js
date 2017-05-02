angular
.module('app')
.component('greeting', {
    templateUrl: "components/greeting/greeting.html",
    controller: "GreetingController",
    controllerAs: "c"
})
.controller('GreetingController', function() {
    this.name = "Jonathan";
    this.yourName = "Harry Potter"
});
