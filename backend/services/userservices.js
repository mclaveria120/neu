
var db      = require('../configs/dbconnection');
var bcrypt	= require('bcrypt');




exports.addUser=function(user,callback){

	
	var encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    var insertQuery= "INSERT INTO user (`email`, `password`) VALUES ('" + user.email + "', '" + encryptedPassword + "');";

	db.query('SELECT * FROM user WHERE email = ?', user.email,function(error, result, field) {
			console.log(result);
		   if(error || result.length!=0) {
		   		callback(true); //No error
    		}else{

		        db.query(insertQuery, function(err) {
				    callback(err);
				});
    		}
	});
};

exports.logIn=function(user, callback){

	db.query("SELECT * FROM user WHERE email = ?",user.email,function(error, result, field) {
				
			   if(error || result.length ==0 || ! bcrypt.compareSync(user.password, result[0].password)) {
			   		callback(true);
	    		}else{
	    			callback(error);
			    }
			   
	});
};

