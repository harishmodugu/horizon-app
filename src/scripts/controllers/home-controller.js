var horizonApp = angular.module('horizonApp');

horizonApp.controller('HomeController', function($scope, $repo) {
  $scope.allPersons = [];
  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      $scope.$apply();
    };
    $repo.loadPersons(setPersons);
  };

  $scope.hzConnect = function() {
   $repo.connect(function() {
    //console.log('Database Connected!')
    loadPersons();
   });
  };

  $scope.deletePerson = function(id, index) {
    $scope.allPersons.splice(index,1);
    $repo.deletePerson(id);
  }
});

