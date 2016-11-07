var module = angular.module('horizonApp');

module.controller('PersonController', function($repo,$scope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.isTeamLead = false;

  $scope.addPerson = function() {
    alert('Inserting');
    $repo.addItem();
  }
});
