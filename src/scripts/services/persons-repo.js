var repoModule = angular.module('personsRepoModule', []);
var horizon = require('../hz-service');

repoModule.service('$personsRepo', function($rootScope) {
  var persons = horizon("persons");

  return {
    loadPersons: function(callback) {
      persons.fetch().subscribe(callback,
      function(err){
        console.log(err);
      });
    },
    searchPersons: function(filter) {
      console.log('searching persons');
    },
    addPerson: function(person) {
      if(!person) return;
      persons.store(person);
      $rootScope.$emit('PERSON_ADDED');
    },
    deletePerson: function(id) {
      persons.remove(id);
      $rootScope.$emit('PERSON_DELETED', {id: id});
    },
    editPerson: function() {
      console.log('editing person');
    },
    connect: function(callback) {
      horizon.onReady(callback);
      horizon.connect();
    }
  };
});

module.exports = repoModule;
