var module = angular.module('horizonApp');

module.controller('TeamsController', function($repo,$scope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.isTeamLead = false;
  $scope.allPersons = [];

  $scope.addPerson = function() {
    var person = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      isTeamLead: $scope.isTeamLead
    };

    $repo.addPerson(person);
  }

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
