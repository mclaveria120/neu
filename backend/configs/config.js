/* global exports*/
/*
 * server configs
 */
exports.conf = {
    server: "localhost",
    port: "3000",
    secretKey: "mySecretKey", 
    mysql:{
		  host     : 'localhost',
		  user     : 'root',
		  password : 'root',
		  database : 'mydb'
   }
};
