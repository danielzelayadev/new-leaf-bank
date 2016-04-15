( function () {
	"use strict";

	angular.module("ACBank")
		.config(config);

	config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

	function config (stateProvider, urlRouterProvider) {
		setupRoutes(stateProvider, urlRouterProvider);
	}

	function setupRoutes (stateProvider, urlRouterProvider) {
		urlRouterProvider.otherwise('/Accounts');

		stateProvider

			.state ('Accounts', {
				url: '/Accounts',
				templateUrl: '../templates/Accounts/accounts.html',
				controller: 'AccountsController as vm',
				onEnter: [ '$rootScope', function (rs) { rs.title = "Accounts"; } ]
			});
	}

} )();
( function() {

  angular.module('ACBank')
    .run(run);

  run.$inject = [ '$ionicPlatform' ];

  function run ($ionicPlatform) {
    ionicSetup($ionicPlatform);
  }

  function ionicSetup ($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }

})();
( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal' ];

	function AccountsController ($scope, $ionicModal) {
		var vm = this;
		

	}

})();