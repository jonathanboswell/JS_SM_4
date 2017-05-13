angular
.module('app')
.component('tutors', {
    templateUrl: "components/tutors/tutors.html",
    controller: "TutorsController",
    controllerAs: "c",
})
.component('tutor', {
  templateUrl: "components/tutors/detail.html",
  controller: "TutorController",
  controllerAs: "c",
})
.controller('TutorsController', function(TutorsFactory) {
    this.factory = TutorsFactory;
})
.controller('TutorController', function(TutorsFactory) {
    this.factory = TutorsFactory;
})
.factory('TutorsFactory', function($state){
    var TutorsFactory = this;

    TutorsFactory.tutor = false;
    TutorsFactory.tutors = [];
    TutorsFactory.tutors.push({"name":"Jonathan Boswell","places":["Miami","Los Angeles"]});
    TutorsFactory.tutors.push({"name":"Valerie Kaskovich","places":["Chicago","Los Angeles"]});
    TutorsFactory.tutors.push({"name":"Kate Ballard-Rosa","places":["Loomis","San Francisco","Los Angeles"]});

    TutorsFactory.view = function(tutor)
    {
      $state.go('admin.tutor');
      TutorsFactory.tutor = tutor;
    }

    TutorsFactory.close = function()
    {
      TutorsFactory.tutor = false;
    }

    return TutorsFactory;
})
