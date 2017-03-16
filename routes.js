var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://jesse:jesse@ds131890.mlab.com:31890/node-tweets')

router.get('/tweets', function(req, res, next){
	db.tweets.find(function(err, tweets){
		if(err) {
			res.send(err);
		} else {
			res.json(tweets);
		}

	})
});

module.exports = router;