
var registrationModule = angular.module("registrationModule", []);
registrationModule.controller('registrationController', function($location, $scope, $rootScope,registrationService,utilService) {
	$rootScope.messageError=false;
	
	var regCtrl = this;

	regCtrl.registration = {
		email : "",
		password : "",
		repeat_password : "",
	};

	regCtrl.cancel = function() {
		$location.path('#/');
	}

	var onSuccess = function(data, headers) { 
		utilService.showModal("You have been registered");
		$location.path('#/');
	};

	var onError = function(data, headers) {
		utilService.showModal(data.message);
	};
	
	regCtrl.register = function() {
		registrationService.register(regCtrl.registration, onSuccess, onError);
	}

});

registrationModule.factory('registrationService', function( $http, APP_CONSTANT) {
	var regService = {};

	regService.register = function(data, callback, callbackError) {
			$http.post(APP_CONSTANT.REMOTE_HOST + '/signup', data)
			.success(function(data, status, headers, config) {
				callback(data, headers);
			}).error(function(data, status, headers, config) {
				callbackError(data, headers);
			});
	};
	return regService;
});