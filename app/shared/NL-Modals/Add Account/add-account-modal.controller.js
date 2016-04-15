( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AddAccountModalController', AddAccountModalController);

	AddAccountModalController.$inject = [ '$scope' ];

	function AddAccountModalController ($scope) {
		var vm = this;

		vm.account = {};
		vm.close = close;

		function close () {
			vm.account = {};
			$scope.addAccountModal.hide();
		}
	}

})();