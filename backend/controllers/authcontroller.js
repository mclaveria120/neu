var userServices  = require('../services/userservices');
var jwt 		  = require('jsonwebtoken');
var   config      = require('../configs/config').conf;


function createUser(req){
   return  { email: req.body.email, password: req.body.password } ; 
}

function createToken(user) {
	return  jwt.sign(user, config.secretKey, {
            expiresIn: 10080 // in seconds
          });
}


exports.signUp = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(400).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		
			var user = createUser(req);

			userServices.addUser(user, function(err) {
			    if (err) {
			    	res.status(500).jsonp({ 'error': true, 'message': 'Error adding user .. !' });
			    } else {
					res.status(500).jsonp({ 'error': false, 'message': 'User created .. !' });
			    }
			 });
	}
};

exports.logIn = function(req, res) {

	if(!req.body.email || !req.body.password) {
		res.status(500).jsonp({ success: false, message: 'Invalid email or password.' });
	} else {
		
		var user = createUser(req);

		userServices.logIn(user, function(isError,result) {
		    if (isError) {
		    	res.status(500).jsonp({ 'error': true, 'message': 'Wrong passowrd or email .. !' });
		    } else {
		    	res.status(201).jsonp({
     				 id_token: createToken(result)
    			});
		    }
		 });
	}
};




