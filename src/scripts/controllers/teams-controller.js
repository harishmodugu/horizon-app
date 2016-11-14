var module = angular.module('horizonApp');

module.controller('TeamsController', function($repo,$scope,$rootScope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.isTeamLead = false;
  $scope.teamLead = '';
  $scope.allPersons = [];
  $scope.teamLeads = [];

  $scope.addPerson = function() {
    var person = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      isTeamLead: $scope.isTeamLead,
      teamLead: $scope.teamLead
    };
    $repo.addPerson(person);
  }

  $rootScope.$on('PERSON_ADDED', function(){
    loadPersons();
  });

  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      loadTeamLeads();
      $scope.$apply();
    };
    $repo.loadPersons(setPersons);
  };

  var loadTeamLeads = function() {
     if($scope.allPersons.length) {
        $scope.teamLeads = _.filter($scope.allPersons, function(o) {
          return o.isTeamLead === true;
        });
     }
  }

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
