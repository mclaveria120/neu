
var utilModule = angular.module("utilModule", []);

utilModule.factory('utilService', function($rootScope,$uibModal,$http,APP_CONSTANT,$location,$rootScope,$cookieStore,$http,AUTH_EVENTS) {
	var utilModule= {};
	
	$rootScope.messageError=false;
	$rootScope.message="";
	
	
	utilModule.showErrorMessage=function(data){
		if(data==null){
			$rootScope.messageError=true;
			$rootScope.message="error";
			$location.path('/logout');
		}else{
			console.log(data);
			$rootScope.messageError=true;
			$rootScope.message=data.message==null?"Error":data.message;
			if(data.status==401){
				$location.path('/logout');
			}	
		}
	}

	utilModule.showModal = function(msgToDisplay) {
		var modalInstance = $uibModal.open({
			animation : true,
			component : 'successComponent',
			resolve : {
				msg : function() {
					return msgToDisplay;
				}
			}
		});
	};

	
	utilModule.clearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'JWT ';
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
};
	return utilModule;
});