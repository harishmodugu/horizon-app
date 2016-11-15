var horizonApp = angular.module('horizonApp');

horizonApp.controller('HomeController', function($scope, $personsRepo) {
  $scope.allPersons = [];
  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      $scope.$apply();
    };
    $personsRepo.loadPersons(setPersons);
  };

  $scope.hzConnect = function() {
   $personsRepo.connect(function() {
    //console.log('Database Connected!')
    loadPersons();
   });
  };

  $scope.deletePerson = function(id, index) {
    $scope.allPersons.splice(index,1);
    $personsRepo.deletePerson(id);
  }
});

