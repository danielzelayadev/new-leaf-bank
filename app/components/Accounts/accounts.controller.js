( function() {

	"use strict";

	angular.module('ACBank')
		.controller('AccountsController', AccountsController);

	AccountsController.$inject = [ '$scope', '$ionicModal' ];

	function AccountsController ($scope, $ionicModal) {
		var vm = this;

		$scope.options = [
			{
				iconClass: "ion-key",
				imageSource: "",
				clicked: function () { console.log("Key!"); }
			}
		];
	}

})();