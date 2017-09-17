var userController   = require('./usercontroller');

exports.signUp = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(500).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		
			var user={
				email: req.body.email,
				password: req.body.password
			}
			
			userController.addUser(user, function(err) {
			    if (err) {
			      res.json({ 'error': true, 'message': 'Error adding user .. !' });
			    } else {
			      res.json({ 'success': true, 'message': 'User added succesfully' });
			    }
			 });
	}
};


exports.logIn = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(500).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		//addUser to db

    	res.json({ success: true, message: 'Successfully created new user.' });
	}
};




