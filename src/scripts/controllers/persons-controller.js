var module = angular.module('horizonApp');

module.controller('PersonController', function($repo,$scope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.isTeamLead = false;

  $scope.addPerson = function() {
    var person = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      isTeamLead: $scope.isTeamLead
    };

    $repo.addPerson(person);
  }
});
