var express           = require("express");
var pjson             = require('./package.json');
var passport 		  = require("passport");
var jwt				  = require("jsonwebtoken");
var authController    = require('./controllers/authcontroller');
var counterController = require('./controllers/countercontroller');

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

 	api.route('/count')
 					  .post(counterController.increaseCounter)
					  .get(counterController.getTotalCounters);
	
	app.use('/api', api);

};




