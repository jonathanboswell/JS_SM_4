angular
.module('app')
.controller('HomeController', function(PeopleFactory, CarFactory){
  this.PeopleFactory = PeopleFactory;
  this.CarFactory = CarFactory;

  this.orderBy = function(field) {
    this.myOrder = field;
  }
})
.factory('PeopleFactory', function($http){
  var PeopleFactory = this;
  PeopleFactory.people = [];

  PeopleFactory.getData = function()
  {
    return $http.get('http://headshot.mockable.io/people').then(function(response)
    {
      PeopleFactory.people = response.data;
      return response;
    });
  }

  PeopleFactory.getData();

  return PeopleFactory;
})
.factory('CarFactory',function($http, PeopleFactory){
  var CarFactory = this;

  CarFactory.cars = []

  CarFactory.getData = function()
  {

    return $http.get('http://headshot.mockable.io/cars').then(function(response)
    {
      CarFactory.cars = response.data;
      return response;
    });
  }

  CarFactory.getData().then(function(carResponse){
    PeopleFactory.getData().then(function(peopleResponse){
      console.log("People", peopleResponse);
      console.log("Cars", carResponse);
    });
  });

  return this;
})
.filter('beginsWithFilter', function () {
  return function(input, beginsWith)
  {
    var out = [];
    angular.forEach(input, function(name){

      if(beginsWith)
      {
        var lowerStr = (name + "").toLowerCase();
        if(lowerStr.indexOf(beginsWith.toLowerCase()) === 0)
        {
          out.push(name);
        }
      } else {
        out.push(name);
      }
    })
    return out;
  }
});
