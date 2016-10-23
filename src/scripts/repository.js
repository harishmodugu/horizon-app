var repoModule = angular.module('hzRepo', []);
var hzService = require('./hz-service');

repoModule.service('$repo', function() {
  return {
    getAllItems: function() {
      console.log('getting all items');
    },
    searchItems: function() {
      console.log('searching');
    },
    addItem: function() {
      console.log('adding item');
    },
    deleteItem: function() {
      console.log('deleting');
    },
    editItem: function() {
      console.log('editing');
    },
    connect: function(callback) {
      hzService.onReady(callback);
      hzService.connect();
    }
  };
});

module.exports = repoModule;
