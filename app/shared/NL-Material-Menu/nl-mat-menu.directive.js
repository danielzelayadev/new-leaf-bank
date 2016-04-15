( function () {

	"use strict";

	angular
		.module('ACBank')
		.directive('nlMatMenu', nlMatMenu);

	function nlMatMenu () { 
		var directive = 
        {
            restrict: 'E',
            scope: {
            	options: '=?'
            },
            templateUrl: '../templates/NL-Material-Menu/nl-mat-menu.html',
            controller: 'NlMatMenuController'
        };

		return directive; 
	}

} ) ();