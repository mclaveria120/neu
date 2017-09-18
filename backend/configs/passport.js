const JwtStrategy    = require('passport-jwt').Strategy;
const ExtractJwt     = require('passport-jwt').ExtractJwt;

var   userServices   = require('../services/userservices');
var   config         = require('./config').conf;


// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secretKey;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

     return userServices.findUserById(jwt_payload.id, done);

  }));

  passport.serializeUser(function(user, done) {
       done(null, user);
  });


};