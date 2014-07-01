
// filename     : app.js
// author       : Rob Lasell
// date created : 1 June 2014
// date modified: 1 June 2014
// description  : primary file for Michael Lasell's rkresearch app on heroku

//var stub = document.getElementById('stub');

// Create a HTTP server on port 8000
var http = require('http');
var port = process.env.PORT || 8000;
 
http.createServer(function (req, res) {
 
	var path = req.url;
 
	res.writeHead(200, {'Content-Type': 'text/html'});
 
	if (path == "/") {
		res.end("Hello, World!<br><a href='/page2'>Page 2</a>\n");
 
	} else if (path == "/page2") {
		res.end("This is page 2. <a href='/'>Back.</a>\n");
	}
 
}).listen(port);
