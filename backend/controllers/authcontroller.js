var userServices  = require('../services/userservices');



function createUser(req){
   return  { email: req.body.email, password: req.body.password } ; 
}

exports.signUp = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(500).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		
			var user = createUser(req);

			userServices.addUser(user, function(err) {
			    if (err) {
			    	res.status(500).jsonp({ 'error': true, 'message': 'Error adding user .. !' });
			    } else {
			    	res.status(200).jsonp({'success': true, 'message': 'User added succesfully' });
			    }
			 });
	}
};



exports.logIn = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(500).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		
		var user = createUser(req);

		userServices.logIn(user, function(err) {
		    if (err) {
		    	res.status(500).jsonp({ 'error': true, 'message': 'Wrong passowrd or email .. !' });
		    } else {
		    	res.status(200).jsonp({'success': true, 'message': 'Login' });
		    }
		 });
	}
};




