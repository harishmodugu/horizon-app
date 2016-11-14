var repoModule = angular.module('hzRepo', []);
var horizon = require('../hz-service');

repoModule.service('$repo', function($rootScope) {
  var persons = horizon("persons");

  return {
    loadPersons: function(callback) {
      persons.fetch().subscribe(callback,
      function(err){
        console.log(err);
      });
    },
    searchItems: function(filter) {
      console.log('searching');
    },
    addPerson: function(person) {
      if(!person) return;
      persons.store(person);
      $rootScope.$emit('PERSON_ADDED');
    },
    deletePerson: function(id) {
      //console.log('deleting id', id);
      persons.remove(id);
    },
    editItem: function() {
      console.log('editing');
    },
    connect: function(callback) {
      horizon.onReady(callback);
      horizon.connect();
    }
  };
});

module.exports = repoModule;
