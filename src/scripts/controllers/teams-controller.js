var module = angular.module('horizonApp');

module.controller('TeamsController', function($personsRepo, $scope, $rootScope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.isTeamLead = false;
  $scope.teamLeadId = '';
  $scope.allPersons = [];
  $scope.teamLeads = [];

  $scope.addPerson = function() {
    var lead = $scope.isTeamLead? 'None' :_.find($scope.allPersons, function(p) {
      return p.id === $scope.teamLeadId;
    });

    var person = {
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email,
      isTeamLead: $scope.isTeamLead,
      teamLead: lead
    };

    $personsRepo.addPerson(person);
  }

  $rootScope.$on('PERSON_ADDED', function(){
    loadPersons();
    clearFields();
  });

  var clearFields = function() {
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email = '';
    $scope.isTeamLead = false;
    $scope.teamLeadId = '';
  };

  $rootScope.$on('PERSON_DELETED', function(id){
    //$scope.teamLeads = _.remove($scope.teamLeads, function(lead) {
      //return lead.id === id;
    //});
    //TODO: Remove instead
    loadPersons();
  });

  var loadPersons = function() {
    var setPersons = function(items) {
      $scope.allPersons = items;
      loadTeamLeads();
      $scope.$apply();
    };
    $personsRepo.loadPersons(setPersons);
  };

  var loadTeamLeads = function() {
     if($scope.allPersons.length) {
        $scope.teamLeads = _.filter($scope.allPersons, function(o) {
          return o.isTeamLead === true;
        });
     }
  }

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
