var counterServices  = require('../services/counterservice');

exports.increaseCounter = function(req, res) {
	console.log(req.user.email);
 	counterServices.increaseCounter(req.user.email, function(err) {
			    if (err) {
			    	res.status(500).jsonp({ 'error': true, 'message': 'Error increasing counter.. !' });
			    } else {
			    	res.status(200).jsonp({'success': true, 'message': 'Counter Added' });
			    }
			 });
};

exports.getTotalCounters = function(req, res) {
		counterServices.getTotalNumberOfCounters(function(err, answer) {
			    if (err) {
			    	res.status(500).jsonp({ 'error': true, 'message': 'Error getting counters .. !' });
			    } else {
			    	res.status(200).jsonp({'counters': answer });
			    }
			 });
};




