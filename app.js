angular.module('app',['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('', '/')
      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "index.html",
        // controller: "supercoin"
      })
  })
