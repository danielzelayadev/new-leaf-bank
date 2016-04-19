( function() {

	"use strict";

	angular.module('ACBank')
		.controller('WithdrawModalController', WithdrawModalController);

	WithdrawModalController.$inject = [ '$scope' ];

	function WithdrawModalController ($scope) {
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
		}

		function close (form) {
			form.$setPristine();
			vm.mount = 0.0;
			vm.accountIndex = -1;
			$scope.withdrawModal.hide();
		}

	}

})();