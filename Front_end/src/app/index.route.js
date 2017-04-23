(function() {
  'use strict';

  angular
  .module('frontEnd', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('music', {
        url: '/',
        templateUrl: 'app/music/Music.Template.html',
        controller: 'MusicController',
        controllerAs: 'music'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
