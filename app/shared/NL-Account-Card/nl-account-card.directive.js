( function () {

	"use strict";

	angular
		.module('ACBank')
		.directive('nlAccountCard', nlAccountCard);

	function nlAccountCard () { 
		var directive = 
        {
            restrict: 'E',
            scope: {
            	account: '=',
            	context: '='
            },
            controller: 'NlAccountCardController as vm',
            templateUrl: '../templates/NL-Account-Card/nl-account-card.html'
        };

		return directive; 
	}

} ) ();