( function () {

	"use strict";

	angular
		.module('ACBank')
		.directive('nlPortion', nlPortion);

	function nlPortion () { 
		var directive = 
        {
            require: 'ngModel',
            scope: { accounts: '=' },
            link: link
        };

		return directive; 

		function link (scope, element, attr, ctrl) {
			ctrl.$validators.nlPortion = function (modelValue, viewValue) {
		        let sum = 0;
		        for (let i = 0; i < scope.accounts.length; i++) {
		        	sum += scope.accounts[i].portion;
		        }

		        return sum + modelValue <= 100;
		    };
		}
	}

} ) ();