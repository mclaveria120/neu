/**
 * 
 */
'use strict';
 angular.module("registrationModule",[]);


 angular
 .module('appCoreModule', [
	 'ngRoute',
     'ngCookies',
     'ui.bootstrap'
 ]);
//Step 2: Register App
angular.module("app", 	
			['appCoreModule',
		
			'registrationModule',
		]);



