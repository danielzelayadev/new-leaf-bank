( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AddAccountModalController', AddAccountModalController);

	AddAccountModalController.$inject = [ '$scope', 'Accounts' ];

	function AddAccountModalController ($scope, Accounts) {
		var vm = this;

		vm.account = {};
		vm.submit = submit;
		vm.close = close;

		function submit (form) {
			addAccount();
			close(form);
		}

		function addAccount () {
			$scope.accounts.push(vm.account);
			Accounts.save($scope.accounts);
		}

		function close (form) {
			form.$setPristine();
			vm.account = {};
			$scope.addAccountModal.hide();
		}

	}

})();