var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    router          = require('./router'),
    config          = require('./configs/config').conf,
    morgan          = require("morgan"),
    passport        = require('passport');


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(require('express-promise')());
app.use(passport.initialize());

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.header("Access-Control-Allow-Methods", "POST, GET, HEAD, OPTIONS, PUT,DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

router.setup(app);


// Start server
app.listen(config.port, function() {
  console.log('Express server listening on %s:%d', config.server, config.port);
});
