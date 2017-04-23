
(function () {

  'use strict';

  angular
    .module('frontEnd', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .service('authService', authService);

  function authService(lock, authManager, $log) {

    function login() {
      lock.show();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();
      });

      lock.on('authorization_error', function (err) {
        $log.log(err);
      });
    }

    return {
      login: login,
      registerAuthenticationListener: registerAuthenticationListener
    }
  }
})();
