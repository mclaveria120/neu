var welcomeModule = angular.module("welcomeModule");
welcomeModule.controller('welcomeController', function($scope,$rootScope,$location,utilService,welcomeService) {
	$rootScope.messageError=false;
	$scope.counters=null;
	$scope.userEmail=$rootScope.globals.userSession.email;
	$scope.disabledCounterButton=$rootScope.globals.userSession.counter!=null;
	

	$scope.increaseCounter=function(value){
		
		welcomeService.increaseCounter(
					function(data, headers){
						$scope.init();
						$scope.disabledCounterButton=true;
						$rootScope.globals.userSession.counter=1;
					}	
					,function(data,headers){
						utilService.showErrorMessage(data.message);
					});
	};
	

	$scope.init=function(){

		welcomeService.getTotalNumberOfCounters(
				function(data, headers){
					$scope.counters=data.counters;
				}	
				,function(data,headers){
					utilService.showErrorMessage(data.message);
				});

	};
});

welcomeModule.factory('welcomeService', function( $http, APP_CONSTANT) {
	var welcomeService = {};

	welcomeService.getTotalNumberOfCounters = function(onSuccess, onError) {
		$http.get(APP_CONSTANT.REMOTE_HOST + '/counters')
				.success(function(data, status, headers, config) {
					onSuccess(data, headers);
				}).error(function(data, status, headers, config) {
					onError(data, headers);
				});
	};

	welcomeService.increaseCounter = function(onSuccess, onError) {
		$http.post(APP_CONSTANT.REMOTE_HOST + '/count')
		.success(function(data, status, headers, config) {
			onSuccess(data, headers);
		}).error(function(data, status, headers, config) {
			onError(data, headers);
		});
	};
	return welcomeService;
});