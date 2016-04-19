( function() {

  "use strict";

  angular.module('ACBank')
    .factory('Accounts', Accounts);

  function Accounts () {
    var service = {
      get: get,
      save: save
    };

    return service;

    function get () {
      let accountString = window.localStorage['accounts'];
      if (accountString) {
        return angular.fromJson(accountString);
      }
      return [];
    }

    function save (accounts) {
      window.localStorage['accounts'] = angular.toJson(accounts);
    }

  }

})();