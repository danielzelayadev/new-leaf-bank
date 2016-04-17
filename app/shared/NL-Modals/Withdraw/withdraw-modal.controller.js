( function() {

	"use strict";

	angular.module('ACBank')
		.controller('WithdrawModalController', WithdrawModalController);

	WithdrawModalController.$inject = [ '$scope' ];

	function WithdrawModalController ($scope) {
		var vm = this;

		vm.mount = 0.0;
		vm.accountIndex = -1;
		vm.submit = submit;
		vm.close = close;

		function submit (form) {
			withdraw();
			close(form);
		}

		function withdraw () {
			let account = $scope.accounts[vm.accountIndex];
			account.bells -= vm.mount;

			if (account.bells < 0) account.bells = 0;
		}

		function close (form) {
			form.$setPristine();
			vm.mount = 0.0;
			vm.accountIndex = -1;
			$scope.withdrawModal.hide();
		}

	}

})();