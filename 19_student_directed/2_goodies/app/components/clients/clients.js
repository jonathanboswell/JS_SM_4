angular
.module('app')
.component('clients', {
    templateUrl: "components/clients/clients.html",
    controller: "ClientsController",
    controllerAs: "c",
})
.component('client', {
  templateUrl: "components/clients/detail.html",
  controller: "ClientController",
  controllerAs: "c",
})
.controller('ClientsController', function(ClientsFactory) {
    this.factory = ClientsFactory;
})
.controller('ClientController', function(ClientsFactory) {
    this.factory = ClientsFactory;
})
.factory('ClientsFactory', function($state){
    var ClientsFactory = this;

    ClientsFactory.client = false;
    ClientsFactory.clients = [];
    ClientsFactory.clients.push({"name":"Jonathan Boswell","places":["Miami","Los Angeles"]});
    ClientsFactory.clients.push({"name":"Valerie Kaskovich","places":["Chicago","Los Angeles"]});
    ClientsFactory.clients.push({"name":"Kate Ballard-Rosa","places":["Loomis","San Francisco","Los Angeles"]});

    ClientsFactory.view = function(client)
    {
      $state.go('admin.client');
      ClientsFactory.client = client;
    }

    ClientsFactory.close = function()
    {
      ClientsFactory.client = false;
    }

    return ClientsFactory;
})
