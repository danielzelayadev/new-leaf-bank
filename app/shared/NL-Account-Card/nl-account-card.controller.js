( function() {

	"use strict";

	angular.module('ACBank')
		.controller('NlAccountCardController', NlAccountCardController);

	NlAccountCardController.$inject = [ '$scope', '$ionicPopup', 'Accounts' ];

	function NlAccountCardController ($scope, $ionicPopup, Accounts) {
		var vm = this;

		vm.deleteAccount = deleteAccount;

		function deleteAccount ($index, name) {
		    let confirmPopup = $ionicPopup.confirm({
		    	title: 'Delete Account',
		    	template: 'Are you sure you want to delete ' + name + '?'
		   	});

		   	confirmPopup.then( function (res) {
			    if(res) {
			    	$scope.context.splice($index, 1);
			    	Accounts.save($scope.context);
			    }
		   });
		};
	}

})();