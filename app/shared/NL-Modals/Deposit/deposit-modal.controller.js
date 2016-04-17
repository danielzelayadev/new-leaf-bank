( function() {

	"use strict";

	angular.module('ACBank')
		.controller('DepositModalController', DepositModalController);

	DepositModalController.$inject = [ '$scope' ];

	function DepositModalController ($scope) {
		var vm = this;

		vm.mount = 0.0;
		vm.submit = submit;
		vm.close = close;

		function submit (form) {
			deposit();
			close(form);
		}

		function deposit () {
			for (let i = 0; i < $scope.accounts.length; i++) {
				let account = $scope.accounts[i];

				account.bells += (vm.mount * (account.portion/100));
			}
		}

		function close (form) {
			form.$setPristine();
			vm.mount = 0.0;
			$scope.depositModal.hide();
		}

	}

})();