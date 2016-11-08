var repoModule = angular.module('hzRepo', []);
var horizon = require('./hz-service');

repoModule.service('$repo', function() {
  var persons = horizon("persons");

  return {
    getPersons: function(callback) {
      persons.fetch().subscribe(callback,
      function(err){
        console.log(err);
      });
    },
    searchItems: function() {
      console.log('searching');
    },
    addPerson: function(person) {
      console.log('adding person');
      persons.store(person);
    },
    deleteItem: function() {
      console.log('deleting');
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
