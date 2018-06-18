angular.module('app').service('service', function($http) {
  this.superCoin = function(data) {
  return $http({
    method:'GET',
    url: '/superCoin',
    data: data,
    controller: "mainCtrl"
  })
  // .catch()
}
})
