var horizonApp = angular.module('horizonApp',
    ['ngRoute','personsRepoModule', 'expRepoModule']);

horizonApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: require("./views/home.htm")
      ,controller: "HomeController"
    })
    .when("/teams", {
      templateUrl: require("./views/teams.htm")
      ,controller: "TeamsController"
    })
    .when("/experiments", {
      templateUrl: require("./views/experiments.htm")
      ,controller: "ExperimentsController"
    });
});
