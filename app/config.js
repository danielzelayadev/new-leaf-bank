( function () {
	"use strict";

	angular.module("ACBank")
		.config(config);

	config.$inject = [ '$stateProvider', '$urlRouterProvider' ];

	function config (stateProvider, urlRouterProvider) {
		setupRoutes(stateProvider, urlRouterProvider);
	}

	function setupRoutes (stateProvider, urlRouterProvider) {
		urlRouterProvider.otherwise('/Accounts');

		stateProvider

			.state ('Accounts', {
				url: '/Accounts',
				templateUrl: '../templates/Accounts/accounts.html',
				controller: 'AccountsController as vm',
				onEnter: [ '$rootScope', function (rs) { rs.title = "Accounts"; } ]
			});
	}

} )();