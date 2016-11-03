var horizonApp = angular.module('horizonApp',['hzRepo', 'ngRoute']);

horizonApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/search.htm"
    //,controller: "SearchController"
  })
  .when("/persons", {
    templateUrl: "./views/persons.htm"
    //controller: "PersonsController"
  })
  .when("/teams", {
    templateUrl: "./views/teams.htm"
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
