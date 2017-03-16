var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/static'));

app.use('/', function(req, res){
	res.sendfile(__dirname + '/static/index.html');
});

app.listen(3000);
