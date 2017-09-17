var db      = require('../configs/dbconnection');



exports.increaseCounter=function(email,callback){

	db.query('SELECT * FROM user WHERE email = ?', email,function(error, result, field) {
	
			if(error || result.length==0 || result[0].counter!=null) {
		   		callback(true); 
    		}else{
    			db.query('UPDATE user SET counter = ? WHERE email = ?', [1, email], function(err) {
				    callback(false);
				});
    		}
	});
};

exports.getTotalNumberOfCounters=function(callback){

	db.query('SELECT COUNT(*) AS totalCounts FROM user WHERE counter IS NOT NULL',function(error, result, field) {

				if(error || result.length==0 ) {
						callback(true); 
				 }else{
				    	callback(false, result[0].totalCounts);
				   }
	});
};

