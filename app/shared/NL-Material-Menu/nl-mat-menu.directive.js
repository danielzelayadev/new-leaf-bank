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
            controller: 'NlMatMenuController',
            link: link
        };

		return directive; 

		function link (scope, element, attr) {
			scope.$watch('toggleOptions', function(cv, pv) {
				for (let i = 0; i < scope.options.length; i++) {
					let e = $("#opt"+i);
					let speed = '.3s';

					if (cv) 
						e.animate({ 'bottom': (65*(i+1)) }, speed);
					else
						e.animate({ 'bottom': 0 }, speed);
				}
			});
		}
	}

} ) ();