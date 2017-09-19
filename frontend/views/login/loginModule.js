var loginModule = angular.module("loginModule");
loginModule.controller('loginController', function($scope,$rootScope,$location,loginService,AUTH_EVENTS,utilService) {
	$rootScope.messageError=false;
	var loginCtrl = this;
	
	loginCtrl.credentials = {
		email : '',
		password : ''
	};
	loginCtrl.clearCredentials = function() {
		utilService.clearCredentials();
	}
	
	loginCtrl.login = function() {
		loginService.login(loginCtrl.credentials,onSuccess,onError);
	};
	
	loginCtrl.cancel = function() {
		$location.path('#/');
	}
	
	var onSuccess = function(data,headers) { 
        	loginService.setCredentials(data,headers);
        	$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    };
    
    var onError = function(data,headers) {
    	utilService.showErrorMessage(data);
		$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    };
});


loginModule.factory('loginService', function($rootScope,$http,$timeout,$cookieStore,$window,APP_CONSTANT,AUTH_EVENTS) {
	var loginService = {};
		
	loginService.login = function (data, onSuccess,onError) {
		console.log(data);
        $http.post(APP_CONSTANT.REMOTE_HOST+'/login',data)
        		.success(function (data, status, headers, config) {
					onSuccess(data,headers);
				})
				.error(function (data, status, headers, config) { 
					onError(data,headers);
				});
	};
		
    loginService.setCredentials = function (data,headers) {
		         $rootScope.globals = {		userSession: {
							                    email: data.email,
							                    id_token: data.id_token,
							                }
		         						};
		   	     $cookieStore.put('globals', $rootScope.globals);
    };

	return loginService;
});
