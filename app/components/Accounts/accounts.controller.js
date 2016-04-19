( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal', 'Accounts' ];

	function AccountsController ($scope, $ionicModal, Accounts) {
		var vm = this;

		vm.options = [
			{
				iconClass: "ion-plus-round",
				imageSource: "",
				clicked: function () { $scope.addAccountModal.show(); }
			},
			{
				iconClass: "",
				imageSource: "../img/withdraw.png",
				clicked: function () { $scope.withdrawModal.show(); }
			},
			{
				iconClass: "",
				imageSource: "../img/deposit.png",
				clicked: function () { $scope.depositModal.show(); }
			}
		];

		$scope.accounts = Accounts.get();

		$ionicModal.fromTemplateUrl('../templates/NL-Modals/Add Account/add-account-modal.html', {
    		scope: $scope,
    		animation: 'slide-in-up'
  		}).then(function(modal) {
    		$scope.addAccountModal = modal;
  		});

  		$ionicModal.fromTemplateUrl('../templates/NL-Modals/Deposit/deposit-modal.html', {
    		scope: $scope,
    		animation: 'slide-in-up'
  		}).then(function(modal) {
    		$scope.depositModal = modal;
  		});

  		$ionicModal.fromTemplateUrl('../templates/NL-Modals/Withdraw/withdraw-modal.html', {
    		scope: $scope,
    		animation: 'slide-in-up'
  		}).then(function(modal) {
    		$scope.withdrawModal = modal;
  		});
	}

})();