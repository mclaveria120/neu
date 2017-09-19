/**
 * 
 */
angular.module('app')
.constant('AUTH_EVENTS', {
	loginSuccess: 'auth-login-success',
	logoutSuccess: 'auth-logout-success',
	loginFailed:'auth-login-falied',

})

.constant('APP_CONSTANT',{
		REMOTE_HOST:'http://localhost:3000/api',
});
