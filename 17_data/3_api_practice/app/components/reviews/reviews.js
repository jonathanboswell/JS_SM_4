angular
.module('app')
.component('reviews', {
    templateUrl: "components/reviews/reviews.html",
    controller: "ReviewController",
    controllerAs: "controller",
})
.controller('ReviewController', function(ReviewFactory) {
    this.reviews = ReviewFactory.reviews;
})
.factory('ReviewFactory', function($http){
    var ReviewFactory = this;

    ReviewFactory.reviews = [];

    var url = 'http://headshot.mockable.io/reviews';

    var successCallback = function(response){
      // Use the console look at the response
      console.log(response);

      // !!! Set the ReviewFactory.reviews to equal the correct array in the response
    }

    $http.get(url).then(successCallback);

    return ReviewFactory;
});
