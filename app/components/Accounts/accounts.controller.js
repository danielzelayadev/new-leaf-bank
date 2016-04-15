( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal' ];

	function AccountsController ($scope, $ionicModal) {
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
				clicked: function () { console.log("Withdraw"); }
			},
			{
				iconClass: "",
				imageSource: "../img/deposit.png",
				clicked: function () { console.log("Deposit"); }
			}
		];
		
		$ionicModal.fromTemplateUrl('../templates/NL-Modals/Add Account/add-account-modal.html', {
    		scope: $scope,
    		animation: 'slide-in-up'
  		}).then(function(modal) {
    		$scope.addAccountModal = modal;
  		});
	}

})();