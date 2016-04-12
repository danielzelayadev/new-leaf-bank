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
( function(){

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope' ];

	function AccountsController ($scope) {
		var vm = this;

		vm.accounts = 
		[ 
			{ 
				name: 'Personal',
				bells: 100200,
				portion: 20
			},
			{ 
				name: 'Town',
				bells: 500890,
				portion: 40
			},
			{ 
				name: 'House',
				bells: 300000,
				portion: 40
			}
		];
		vm.accountNameTbs = [ false, false, false ];
		vm.removeAccountClicked = removeAccountClicked;
		vm.reorder = reorder;
		vm.toggleAccountNameTb = toggleAccountNameTb;

		function removeAccountClicked ($index) {
			if (confirm("Are you sure?")) {
				vm.accounts.splice($index, 1);
			}
		}

		function reorder (index, obj, $event) {
			let otherObj = vm.accounts[index];
            let otherIndex = vm.accounts.indexOf(obj);
            vm.accounts[index] = obj;
            vm.accounts[otherIndex] = otherObj;
		}

		function toggleAccountNameTb ($index) {
			vm.accountNameTbs[$index] = !vm.accountNameTbs[$index];
		}
	}

})();
( function(){

	"use strict";

	angular.module('ACBank')
		.controller('MainController', MainController);

	function MainController () {
		var vm = this;
	}

})();