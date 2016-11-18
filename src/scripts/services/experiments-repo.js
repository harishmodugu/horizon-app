var repoModule = angular.module('expRepoModule', []);
var horizon = require('../hz-service');

repoModule.service('$experimentsRepo', function($rootScope) {
  var experiments = horizon("experiments");

  return {
    loadExperiments: function(callback) {
      experiments.fetch().subscribe(callback,
      function(err){
        console.log(err);
      });
    },
    searchExperiments: function(filter) {
      console.log('searching experiments');
    },
    addExperiment: function(exp) {
      if(!exp) return;
      experiments.store(exp);
      $rootScope.$emit('EXPERIMENT_ADDED');
    },
    deleteExperiment: function(id) {
      experiments.remove(id);
    },
    editExperiment: function() {
      console.log('editing experiment');
    },
    connect: function(callback) {
      horizon.onReady(callback);
      horizon.connect();
    }
  };
});

module.exports = repoModule;
