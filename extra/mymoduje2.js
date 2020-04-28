var http = require('http');
var obj = require('./myobj.js');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("a is " + obj.myobj.a + "<br>"); //property so just reference it
	res.write("b is " + obj.myobj.b() + "<br>");
	res.end();

}).listen(8080);