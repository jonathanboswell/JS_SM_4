angular
.module('app')
.component('reviews', {
    templateUrl: "components/reviews/reviews.html",
    controller: "ReviewController",
    controllerAs: "controller",
})
.controller('ReviewController', function(ReviewFactory) {
    this.ReviewFactory = ReviewFactory;
})
.factory('ReviewFactory', function($http){
    var ReviewFactory = this;

    ReviewFactory.reviews = [];

    ReviewFactory.getData = function()
    {
      var url = 'http://headshot.mockable.io/reviews';
      var successCallback = function(response){
        ReviewFactory.reviews = response.data.reviews;
        return response;
      }

      return $http.get(url).then(successCallback);
    }

    ReviewFactory.reload = function()
    {
        return ReviewFactory.getData().then(function(response){
          ReviewFactory.reviews = response.data.reviews
          return response;
        });
    }

    ReviewFactory.getData();

    return ReviewFactory;
});
