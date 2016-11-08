var horizonApp = angular.module('horizonApp');

horizonApp.controller('HomeController', function($scope, $repo) {
  $scope.allPersons = [];
  var isConnected = false;

  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      $scope.$apply();
    };
    $repo.getPersons(setPersons);
  };

  $scope.hzConnect = function() {
   $repo.connect(function() {
    console.log('Database Connected!')
    isConnected = true;
    loadPersons();
   });
  };

  if(isConnected) {
    $scope.hzConnect();
  }
});

