var horizonApp = angular.module('horizonApp');

horizonApp.controller('HomeController', function($scope, $experimentsRepo) {
  $scope.search = '';
  $scope.allExperiments = [];
  //$scope.allPersons = [];
  $scope.allResults = [];

  $scope.getResults = function() {
    console.log($scope.search);
    if(!$scope.search.length) return;

    var words = _.map($scope.search.split(','), function(w) {
      return w.toLowerCase().trim();
    });

    $scope.allResults = _.filter($scope.allExperiments, function(exp) {
         var allNames = [];
         allNames.push(exp.experimentName);
         allNames.push(exp.person.firstName);
         allNames.push(exp.person.lastName);

         if(_.isObject(exp.person.teamLead)) {
           allNames.push(exp.person.teamLead.firstName);
           allNames.push(exp.person.teamLead.lastName);
         }

        allNames = _.map(allNames, function(n) {
          return n.toLowerCase().trim();
        });

        return _.some(words, function(word) {
           return _.some(allNames, function(name) {
              return _.includes(name, word);
           });
         });
    });
  };

  //var loadPersons = function() {
    //var setPersons = function(persons) {
      //$scope.allPersons = persons;
      //$scope.$apply();
    //};
    //$personsRepo.loadPersons(setPersons);
  //};

  var loadExperiments = function() {
    var setExperiments = function(experiments) {
      $scope.allExperiments = experiments;
      $scope.$apply();
    };
    $experimentsRepo.loadExperiments(setExperiments);
  };

  $scope.hzConnect = function() {
   $experimentsRepo.connect(function() {
    //loadPersons();
    loadExperiments();
   });
  };
});

