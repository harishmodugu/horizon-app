var horizonApp = angular.module('horizonApp',['ngRoute']);

horizonApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: require("./views/search.htm")
    ,controller: "HomeController"
  })
  .when("/persons", {
    templateUrl: require("./views/persons.htm")
    ,controller: "PersonController"
  })
  .when("/teams", {
    templateUrl: require("./views/teams.htm")
    //controller: "TeamsController"
  })
});
