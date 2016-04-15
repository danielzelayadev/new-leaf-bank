( function() {

	"use strict";

	angular
		.module('ACBank')
		.controller('NlMatMenuController', NlMatMenuController);

	NlMatMenuController.$inject = [ '$scope' ];

	function NlMatMenuController ($scope) {
		$scope.toggleOptions = false;
	}

})();