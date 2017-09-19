/**
 * 
 */
'use strict';
 angular.module("registrationModule",[]);
 angular.module("loginModule",[]);
 angular.module("utilModule", []);


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
			'loginModule',
			'utilModule'
		]);



