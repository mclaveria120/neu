var configModule = angular.module('app') 
.config(function($routeProvider) {	
	$routeProvider
	.when('/registration', {
		 templateUrl : 'views/register/registration.html',
	     controller  : 'registrationController',
	     controllerAs: 'regCtrl'
	})
	.when('/logout', {
		redirectTo: '/'
	})
   .otherwise({ redirectTo: '/' });
})

.run(function ($rootScope, $location, $cookieStore,$window, $http,AUTH_EVENTS) {
   
    	
	

})



