var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var tweets = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/static'));
app.use('/api/', tweets);

app.use('/', function(req, res){
	res.sendFile(__dirname + '/static/index.html');
});




app.listen(8000);
