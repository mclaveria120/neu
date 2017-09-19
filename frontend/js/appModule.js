var configModule = angular.module('app');

configModule.controller("applicationContoller", function($rootScope,$scope,$window,$location,AUTH_EVENTS) {


	$rootScope.userSession;

	$scope.init = function () {
		$scope.parentmethod();
	}

	$rootScope.$on("CallParentMethod", function(){
        $scope.parentmethod();
     });

	$rootScope.home=function(){
		$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
	}
	
     $scope.parentmethod = function() {
    	 	var globals = JSON.parse($window.localStorage.getItem("globals"));
    	 	if(globals){
    	 		$('div#guest').hide();
    	 		$('div#logout').show();
    	 		$rootScope.userSession = globals.userSession;
    	 	}else{
    	 		$('div#guest').show();
    	 		$('div#logout').hide();
    	 	}
     }
     $scope.getPath=function(){
    	 return $location.$$path; 
     }
});




