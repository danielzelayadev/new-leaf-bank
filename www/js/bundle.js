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
		var sumOfPortions = 0;

		vm.mount = 0.0;
		vm.accounts = [];
		vm.accountNameTbs = [];
		vm.openModal = openModal;
		vm.removeAccountClicked = removeAccountClicked;
		vm.reorder = reorder;
		vm.toggleAccountNameTb = toggleAccountNameTb;
		vm.closeModal = closeModal;
		vm.confirmAccountCreation = confirmAccountCreation;
		vm.confirmDeposit = confirmDeposit;

		vm.toggleMenu = false;

		$scope.vm = vm;
		$scope.account = {};
		$scope.modals = [];

		function openModal (index) {
			$scope.modals[index].show();
		}

		function removeAccountClicked ($index, accountName) {
			console.log($index);
			if (confirm("Are you sure you want to delete " + accountName + "?")) {
				sumOfPortions -= vm.accounts[$index].portion;
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

		function closeModal (index) {
			$scope.modals[index].hide();

			if (index === 0) $scope.account = {};

			else if (index == 2) vm.mount = 0.0;
		}

		function confirmAccountCreation (account) {
			closeModal(0);
			addAccount(account);
		}

		function confirmDeposit (mount) {
			closeModal(2);

			if (mount === undefined) return;

			depositMount(mount);
		}

		function depositMount (mount) {
			for (let i = 0; i < vm.accounts.length; i++) {
				let account = vm.accounts[i];
				let bells = parseFloat(account.bells);

				bells += mount * (account.portion/100);

				account.bells = bells;
			}

			vm.mount = 0.0;
		}

		function addAccount (account) {
			if (account.name === undefined || account.name.length === 0) 
				account.name = "Account # " + (vm.accounts.length+1);
			
			if (account.bells === undefined) 
				account.bells = 0;

			if (account.portion === undefined || portionNotValid(account.portion)) 
				account.portion = 0;

			vm.accounts.push(account);

			$scope.account = {};

		}

		function portionNotValid (portion) {
			let sum = sumOfPortions + portion;
			
			sumOfPortions = sum > 100 ? sumOfPortions : sum;
			
			return sumOfPortions != sum;
		}

		function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}

		$ionicModal.fromTemplateUrl('../templates/Accounts/add-account-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modals[0] = modal;
		 });

		 // $ionicModal.fromTemplateUrl('../templates/Accounts/add-account-modal.html', {
		//     scope: $scope,
		//     animation: 'slide-in-up'
		//   }).then(function(modal) {
		//     $scope.modals[1] = modal;
		//  });

		$ionicModal.fromTemplateUrl('../templates/Accounts/deposit-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modals[2] = modal;
		 });

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