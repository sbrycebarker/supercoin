angular.module('app').controller('supercoin', function($scope, service) {
  $scope.superCoin = function() {
    console.info("superCoin!!")
    service.superCoin().then(function(result){

    })}
})
