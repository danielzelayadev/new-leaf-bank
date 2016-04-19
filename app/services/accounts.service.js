( function() {

  "use strict";

  angular.module('ACBank')
    .factory('Accounts', Accounts);

  function Accounts () {
    var service = {
      getAll: getAll,
      get: get,
      saveAll: saveAll,
      save: save
    };

    return service;

    function getAll () {
      let accountString = window.localStorage['accounts'];
      if (accountString) {
        return angular.fromJson(projectString);
      }
      return [];
    }

    function get () {

    }

    function saveAll () {

    }

    function save () {

    }
  }

})();