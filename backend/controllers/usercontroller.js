
var db      = require('../configs/dbconnection');
var bcrypt	= require('bcrypt');

exports.addUser=function(user,callback){

	
	var encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
	// var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

    var query= "INSERT INTO user (`email`, `password`) VALUES ('" + user.email + "', '" + encryptedPassword + "');";
   	
   	db.query(query, function(err) {
		    callback(err);
	});


};


exports.isUserAlreadyRegister=function(user){


};


