angular
.module('app')
.controller('PuppiesController', function($scope, $http){
  $scope.puppies = [];

  $http.get('http://localhost:3000/api/puppies').then(function(response){
    console.log(response);
    $scope.puppies = response.data.puppies;
  }).catch(function(error){
    console.log("error", error);
  });
});
