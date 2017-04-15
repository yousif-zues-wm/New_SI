(function() {
  'use strict';

  angular
    .module('frontEnd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('/register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      })
      .state('/music', {
        url: '/music',
        templateUrl: 'app/music/music.html',
        controller: 'MusicController',
        controllerAs: 'music'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
