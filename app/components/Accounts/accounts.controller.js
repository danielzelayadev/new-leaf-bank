( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal' ];

	function AccountsController ($scope, $ionicModal) {
		var vm = this;

		$scope.options = [
			{
				iconClass: "ion-plus-round",
				imageSource: "",
				clicked: function () { console.log("Create Account"); }
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
	}

})();