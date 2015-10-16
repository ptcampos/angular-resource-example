var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.config(function($routeProvider, $httpProvider){

	$routeProvider.when('/albums',
	{
		templateUrl: '/partials/list.html', 
		controller: 'AlbumCtrl'
	})

    .when('/albums/:albumId',
    {
      templateUrl: '/partials/view.html', 
      controller: 'ViewCtrl'
    })

	.when('/add', 
    {
    	templateUrl: '/partials/add.html', 
    	controller: 'AddCtrl'
    })

    .otherwise({redirectTo: '/albums'});

});