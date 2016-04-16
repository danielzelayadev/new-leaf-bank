( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AddAccountModalController', AddAccountModalController);

	AddAccountModalController.$inject = [ '$scope' ];

	function AddAccountModalController ($scope) {
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
			vm.account = {};
		}

		function close (form) {
			form.$setPristine();
			$scope.addAccountModal.hide();
		}
	}

})();