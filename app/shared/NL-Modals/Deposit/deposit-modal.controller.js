( function() {

	"use strict";

	angular.module('ACBank')
		.controller('DepositModalController', DepositModalController);

	DepositModalController.$inject = [ '$scope', 'Accounts' ];

	function DepositModalController ($scope, Accounts) {
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

				account.bells += (vm.mount * (account.share/100));
			}
			Accounts.save($scope.accounts);
		}

		function close (form) {
			form.$setPristine();
			vm.mount = 0.0;
			$scope.depositModal.hide();
		}

	}

})();