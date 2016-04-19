( function() {

	"use strict";

	angular.module('ACBank')
		.controller('NlAccountCardController', NlAccountCardController);

	NlAccountCardController.$inject = [ '$scope', '$ionicPopup' ];

	function NlAccountCardController ($scope, $ionicPopup) {
		var vm = this;

		vm.reorder = reorder;
		vm.deleteAccount = deleteAccount;

		function reorder ($index, $data, $event) {

		}

		function deleteAccount ($index, name) {
		    let confirmPopup = $ionicPopup.confirm({
		    	title: 'Delete Account',
		    	template: 'Are you sure you want to delete ' + name + '?'
		   	});

		   	confirmPopup.then( function (res) {
			    if(res)
			        $scope.context.splice($index, 1);
		   });
		};
	}

})();