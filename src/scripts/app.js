var horizonApp = angular.module('horizonApp',['hzRepo']);

horizonApp.controller('HomeController', function($scope, $repo) {

  $scope.hzConnect = function() {
    console.log('connecting...')
   $repo.connect(function() {
    console.log("connected! YAY");
   });
  };

  $scope.names = [
      {
        name: 'harish'
      },
      {
        name: 'mouni'
      },
      {
        name: 'kumar'
      }

    ];
});
