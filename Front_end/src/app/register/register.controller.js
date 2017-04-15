(function(){
  'use strict';

  angular
  .module('frontEnd')
  .controller('RegisterController', RegisterController)

  var url = 'http://localhost:1337'

  function RegisterController($log){
    var ctrl = this;

    var registerCreds = {}
    
    ctrl.registerData = {
      email: ctrl.registerCreds.email,
      username: ctrl.registerCreds.username,
      password: ctrl.registerCreds.password
    }

    ctrl.register = function(){

      $log.log(ctrl.registerCreds);

    }

  }
})();
