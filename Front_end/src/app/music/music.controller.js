(function() {
  'use strict';

  angular
    .module('frontEnd')
    .controller('MusicController', MusicController);

  function MusicController($log) {
      $log.log('Hello Music')
      // vm.getPlaylistsOnLoad = function(){
      // }
  }

  // function LoginController(authService) {
  //   var vm = this;
  //   vm.authService = authService;
  //
  // }
})();
