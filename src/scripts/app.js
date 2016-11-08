var horizonApp = angular.module('horizonApp',['ngRoute','hzRepo']);

horizonApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: require("./views/home.htm")
      ,controller: "HomeController"
    })
    //.when("/persons", {
      //templateUrl: require("./views/persons.htm")
      //,controller: "PersonController"
    //})
    .when("/teams", {
      templateUrl: require("./views/teams.htm")
      ,controller: "TeamsController"
    })
    .when("/experiments", {
      templateUrl: require("./views/experiments.htm")
      ,controller: "ExperimentsController"
    });
});
