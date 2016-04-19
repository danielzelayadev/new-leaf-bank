( function() {

	"use strict";

	angular.module('ACBank')
		.controller('WithdrawModalController', WithdrawModalController);

	WithdrawModalController.$inject = [ '$scope', 'Accounts' ];

	function WithdrawModalController ($scope, Accounts) {
		var vm = this;

		vm.mount = 0.0;
		vm.selectedAccount = {};
		vm.accountIndex = -1;
		vm.updateSelectedAccount = updateSelectedAccount;
		vm.submit = submit;
		vm.close = close;

		function updateSelectedAccount () {
			vm.selectedAccount = $scope.accounts[vm.accountIndex];
		}

		function submit (form) {
			withdraw();
			close(form);
		}

		function withdraw () {
			vm.selectedAccount.bells -= vm.mount;
			Accounts.save($scope.accounts);
		}

		function close (form) {
			form.$setPristine();
			vm.mount = 0.0;
			vm.accountIndex = -1;
			$scope.withdrawModal.hide();
		}

	}

})();