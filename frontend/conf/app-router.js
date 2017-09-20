var configModule = angular.module('app') 
.config(function($routeProvider) {	
	$routeProvider
	.when('/registration', {
		 templateUrl : 'views/register/registration.html',
	     controller  : 'registrationController',
	     controllerAs: 'regCtrl'
	})
	.when('/welcome', {
		 templateUrl : 'views/welcome/welcome.html',
	     controller  : 'welcomeController',
	     controllerAs: 'welcomeCtrl'
	})
	.when('/login', {
		 templateUrl : 'views/login/login.html',
	     controller  : 'loginController',
	     controllerAs: 'loginCtrl'
	})
	.when('/logout', {
		redirectTo: '/'
	})
   .otherwise({ redirectTo: '/' });
})

.run(function ($rootScope, $location, $cookieStore,$window, $http,AUTH_EVENTS) {
   
  $rootScope.$on('$locationChangeStart', function (event, next, current) {
            if ( !($location.path() == '/' || $location.path() == '/registration' || $location.path() == '/login') && !$rootScope.globals.userSession) {
                $location.path('/');
            }else if($location.path() == '/logout'){
            	$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            }else{
            }
        });
    	
	$rootScope.$on(AUTH_EVENTS.loginFailed, function(event, next){
    		console.log('Login failed');
    		$location.path('#/');
    });
	
	$rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, next){
		$window.localStorage.removeItem("globals");
		$rootScope.userSession=null;
	    $rootScope.$emit("CallParentMethod", {});
	});
    
    $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, next){
	    $window.localStorage.setItem("globals", angular.toJson($rootScope.globals));
	    $rootScope.userSession = JSON.parse($window.localStorage.getItem("globals")).userSession;
	    $http.defaults.headers.common['Authorization'] = 'JWT ' + $rootScope.globals.userSession.id_token; 
	    $rootScope.$emit("CallParentMethod", {});
		$location.path('welcome');
	});
    
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.userSession) {
        $http.defaults.headers.common['Authorization'] = 'JWT ' + $rootScope.globals.userSession.id_token; 
        $window.localStorage.setItem("globals", angular.toJson($rootScope.globals));
	    $rootScope.userSession = JSON.parse($window.localStorage.getItem("globals")).userSession;

    }
	

})



