var mysql      = require('mysql');
var config      = require('./config').conf;

var connection = mysql.createPool({
  host     : config.mysql.host,
  user     : config.mysql.user,
  password : config.mysql.passoword,
  database : config.mysql.database,
});

module.exports=connection;
