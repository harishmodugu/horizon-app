var horizonApp = angular.module('horizonApp',['hzRepo', 'ngRoute']);

horizonApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "templates/search.htm",
    controller: "SearchController"
  })
  .when("/persons", {
    templateUrl: "templates/persons.htm",
    controller: "PersonsController"
  })
  .when("/teams", {
    templateUrl: "templates/teams.htm",
    controller: "TeamsController"
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
