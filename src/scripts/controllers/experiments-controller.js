var horizonApp = angular.module('horizonApp');

horizonApp.controller('ExperimentsController',
    function($experimentsRepo, $personsRepo, $scope, $rootScope) {

  var getDate = function() {
    var date = new Date();
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  }

  $scope.experimentName = '';
  $scope.datePerformed = getDate();
  $scope.personId='';
  $scope.results = '';
  $scope.cost = 0;
  $scope.extraCost = 0;
  $scope.reason = '';
  $scope.allExperiments = [];
  $scope.allPersons = [];

  $scope.addExperiment = function() {
    var performedBy = _.find($scope.allPersons, function(p) {
      return p.id === $scope.personId
    });

    var experiment = {
      experimentName: $scope.experimentName,
      datePerformed: $scope.datePerformed,
      person: performedBy,
      cost: $scope.cost,
      extraCost: $scope.extraCost,
      results: $scope.results,
      reason: $scope.reason
    };

    $experimentsRepo.addExperiment(experiment);
  }

  $rootScope.$on('EXPERIMENT_ADDED', function(){
    loadExperiments();
    resetFields();
  });

  var resetFields = function() {
    $scope.experimentName = '';
    $scope.datePerformed = getDate();
    $scope.personId='';
    $scope.results = '';
    $scope.cost = 0;
    $scope.extraCost = 0;
    $scope.reason = '';
  };

  $rootScope.$on('EXPERIMENT_DELETED', function(id){
    //$scope.teamLeads = _.remove($scope.teamLeads, function(lead) {
      //return lead.id === id;
    //});
    //TODO: Remove instead
    loadExperiments();
  });

  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      $scope.$apply();
    };
    $personsRepo.loadPersons(setPersons);
  };

  var loadExperiments = function() {
    var setExperiments = function(items) {
      $scope.allExperiments = items;
      $scope.$apply();
    };
    $experimentsRepo.loadExperiments(setExperiments);
  };

  $scope.hzConnect = function() {
   $personsRepo.connect(function() {
    //console.log('Database Connected!')
    loadPersons();
    loadExperiments();
   });
  };

  $scope.deleteExperiment = function(id, index) {
    $scope.allExperiments.splice(index,1);
    $experimentsRepo.deleteExperiment(id);
  }

});
