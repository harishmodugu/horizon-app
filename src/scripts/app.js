var horizonApp = angular.module('horizonApp',['hzRepo', 'ngRoute']);

horizonApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: require("./views/search.htm")
    //,controller: "SearchController"
  })
  .when("/persons", {
    templateUrl: require("./views/persons.htm")
    //controller: "PersonsController"
  })
  .when("/teams", {
    templateUrl: require("./views/teams.htm")
    //controller: "TeamsController"
  })
});

horizonApp.controller('HomeController', function($scope, $repo) {

  $scope.hzConnect = function() {
    console.log('connecting...')
   $repo.connect(function() {
    console.log("connected! YAY");
   });
  };
});
