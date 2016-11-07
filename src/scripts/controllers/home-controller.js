var horizonApp = angular.module('horizonApp');
console.log('home controller module');

horizonApp.controller('HomeController', function($scope, $repo) {
  console.log('inside home controller');
  $scope.hzConnect = function() {
    console.log('connecting...')
   $repo.connect(function() {
    console.log("connected! YAY");
   });
  };
});
console.log(horizonApp);
