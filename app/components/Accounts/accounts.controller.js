( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal', '$ionicPopup' ];

	function AccountsController ($scope, $ionicModal, $ionicPopup) {
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
		vm.deleteAccount = deleteAccount;

		$scope.accounts = [];

		function deleteAccount ($index, name) {
		    let confirmPopup = $ionicPopup.confirm({
		    	title: 'Delete Account',
		    	template: 'Are you sure you want to delete ' + name + '?'
		   	});

		   	confirmPopup.then( function (res) {
			    if(res)
			        $scope.accounts.splice($index, 1);
		   });
		};

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