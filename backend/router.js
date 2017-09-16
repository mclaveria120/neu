var express         = require("express");
var pjson           = require('./package.json');

/**
 *  Sets up the routes.
 *  @param {object} app - Express app
 */
module.exports.setup = function (app) {

    // API routes
    var api = express.Router();

    api.route('/').get( function(req, res){res.status(200).jsonp("Neu Backend API :  versión "+pjson.version);});
    app.use('/api', api);

};
