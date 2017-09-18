var db      = require('../configs/dbconnection');
var bcrypt	= require('bcrypt');


function createUser(result){
	return  {
			   id: result.id,
			   email: result.email
			};
}

exports.addUser=function(user,callback){

	
	var encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    var insertQuery= "INSERT INTO user (`email`, `password`) VALUES ('" + user.email + "', '" + encryptedPassword + "');";

	db.query('SELECT * FROM user WHERE email = ?', user.email,function(error, result, field) {
			console.log(result);
		   if(error || result.length!=0) {
		   		callback(true,error); //No error
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
			   		callback(true,error);
	    		}else{
	    			callback(false,createUser(result[0]));
			    }
			   
	});
};

exports.findUserById=function(userId,done){
	db.query("SELECT * FROM user WHERE id = ?",userId,function(error, result, field) {
				if(error || result.length ==0 || result[0].id!=userId) {
			   		 return done(null, false, { message: 'Wrong User' });
	    		}else{
	    			return done(null,createUser(result[0]));
			    }
	});
};

