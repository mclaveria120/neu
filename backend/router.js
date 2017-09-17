var express         = require("express");
var pjson           = require('./package.json');
var passport 		= require("passport");
var jwt				= require("jsonwebtoken");
var authentication   = require('./controllers/authentication');

/**
 *  Sets up the routes.
 *  @param {object} app - Express app
 */
module.exports.setup = function (app) {

    // API routes
    var api = express.Router();

    api.route('/').get( function(req, res){res.status(200).jsonp("Neu Backend API :  versión "+pjson.version);});


 	api.route('/signup').post(authentication.signUp);

 	api.route('/login').post(authentication.logIn);

     app.use('/api', api);

};




