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
	});
});

router.post('/tweets', function(req, res, next){
	let tweet = req.body;

	if(!tweet.message) res.status(401).end('Please enter a message');
	if(!tweet.user) res.status(401).end('Please include your username');

	db.tweets.save(tweet, (err, result) => {
		if(err){
			res.send(err);
		} else {
			res.json(result);
		}
	});
	
});

router.delete('/tweets/:id', function(req, res, next){
	db.tweets.remove({
		_id: mongojs.ObjectId(req.params.id)
	}, '', function(err, results){
		if(err) {
			res.send(err);
		} else {
			res.json(results)
		}

	});
});

module.exports = router;