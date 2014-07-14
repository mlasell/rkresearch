
// filename     : app.js
// author       : Rob Lasell
// date created : 1 June 2014
// date modified: 1 June 2014
// description  : primary file for Michael Lasell's rkresearch app on heroku

// Express initialization
var express = require('express');
	bodyParser = require('body-parser');
var app = express();
//app.use(express.bodyParser());
app.set('title', 'rkresearch');

// Create a HTTP server on port 8000
//var http = require('http');
//var port = process.env.PORT || 8000;

// Mongo initialization, setting up a connection to a MongoDB  (on heroku or localhost)
var mongoUri = process.env.MONGOLAB_URI ||
	process.env.MONGOHQ_URL ||
	'mongodb://localhost/rkdb';
var mongo = require('mongodb');
var db = mongo.Db.connect(mongoUri, function (error, databaseConnection) {
	db = databaseConnection;
});

app.get('/', function(request, response) {
	response.sendfile('./views/index.html');
});
 
/*http.createServer(function (req, res) {
 
	var path = req.url;
 
	res.writeHead(200, {'Content-Type': 'text/html'});
 
	if (path == "/") {
		res.end("Hello, World!<br><a href='/page2'>Page 2</a>\n");
 
	} else if (path == "/page2") {
		res.end("This is page 2. <a href='/'>Back.</a>\n");
	}
 
}).listen(process.env.PORT || 5000);*/

app.listen(process.env.PORT || 3000);
