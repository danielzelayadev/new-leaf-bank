( function () {

	"use strict";

	angular
		.module('ACBank')
		.directive('nlSelect', nlSelect);

	function nlSelect () { 
		var directive = 
        {
            require: 'ngModel',
            link: link
        };

		return directive; 

		function link (scope, element, attr, ctrl) {
			ctrl.$validators.nlSelect = function (modelValue, viewValue) {
		        return modelValue != -1;
		    };
		}
	}

} ) ();