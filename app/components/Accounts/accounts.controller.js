( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal' ];

	function AccountsController ($scope, $ionicModal) {
		var vm = this;

		vm.account = {};
		vm.accounts = [];
		vm.accountNameTbs = [];
		vm.addAccountClicked = addAccountClicked;
		vm.removeAccountClicked = removeAccountClicked;
		vm.reorder = reorder;
		vm.toggleAccountNameTb = toggleAccountNameTb;
		vm.closeModal = closeModal;
		vm.confirmAccountCreation = confirmAccountCreation;

		$scope.vm = vm;

		function addAccountClicked () {
			
			$scope.modal.show();

		}

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

		function closeModal () {
			$scope.modal.hide();
			$scope.account = {};
		}

		function confirmAccountCreation () {
			closeModal();
			addAccount(vm.account);
		}

		function addAccount (account) {
			if (account.name === undefined || account.name.length <= 0) account.name = "Account " + vm.accounts.length;

			if (!isNumber(account.bells) || account.bells < 0) account.bells = 0;

			if (!isNumber(account.portion) || account.portion < 0 || account.portion > 100) account.portion = 0;
			
			vm.accounts.push(account);

			vm.account = {};

		}

		function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}

		$ionicModal.fromTemplateUrl('../templates/Accounts/add-account-modal.html', {
		    scope: $scope,
		    animation: 'slide-in-up'
		  }).then(function(modal) {
		    $scope.modal = modal;
		 });

	}

})();