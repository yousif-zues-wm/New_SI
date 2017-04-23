(function() {
  'use strict';

  angular
  .module('frontEnd', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('home', {
      //   url: '/',
      //   templateUrl: 'app/main/main.html',
      //   controller: 'MainController',
      //   controllerAs: 'main'
      // })
      // .state('/register', {
      //   url: '/register',
      //   templateUrl: 'app/register/register.html',
      //   controller: 'RegisterController',
      //   controllerAs: 'register'
      // })
      .state('home', {
        url: '/',
        templateUrl: 'app/music/Music.Template.html',
        controller: 'MusicController',
        controllerAs: 'music'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
