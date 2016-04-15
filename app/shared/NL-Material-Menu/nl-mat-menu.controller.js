( function() {

	"use strict";

	angular
		.module('ACBank')
		.controller('NlMatMenuController', NlMatMenuController);

	NlMatMenuController.$inject = [ '$scope' ];

	function NlMatMenuController ($scope) {
		$scope.mainBtnIcon = 'ion-navicon-round';
		$scope.mainBtnClicked = mainBtnClicked;

		function mainBtnClicked () {
			$scope.toggleOptions = !$scope.toggleOptions;

			$scope.mainBtnIcon = 
				$scope.toggleOptions ? 'ion-close-round' : 'ion-navicon-round';
		}
	}

})();