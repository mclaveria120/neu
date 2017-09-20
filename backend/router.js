var express           = require("express");
var pjson             = require('./package.json');
var passport 		  = require("passport");
var jwt				  = require("jsonwebtoken");
var authController    = require('./controllers/authcontroller');
var counterController = require('./controllers/countercontroller');
var jwt 		      = require('jsonwebtoken');
var passport          = require('passport');


/**
 *  Sets up the routes.
 *  @param {object} app - Express app
 */
module.exports.setup = function (app) {

    // API routes
    var api = express.Router();

    api.route('/').get( function(req, res){res.status(200).jsonp("Neu Backend API :  versión "+pjson.version);});

	api.route('/signup').post(authController.signUp);

 	api.route('/login').post(authController.logIn);

	require('./configs/passport')(passport);
 	
 
 	api.route('/count').post(passport.authenticate('jwt'),counterController.increaseCounter)
					 
	api.route('/counters').get(passport.authenticate('jwt'),counterController.getTotalCounters);


	app.use('/api', api);
	

};






