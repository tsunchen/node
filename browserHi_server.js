/*
@author: tsunc & zadmine
@software: NodeJS Edition
@time: 2018/03/17 00:10
*/

var http = require('http');
var fs = require('fs');
console.log("Starting up...");
var configs = JSON.parse(fs.readFileSync("./files/configs.json"));
//var config = JSON.parse(fs.readFileSync("config.json"));
var host = configs.host;
var port = configs.port;
var server = http.createServer(function(request, response){

	console.log("Received request: " + request.url);

	fs.readFile("./public" + request.url, function(error, data){

		if (error) {
			response.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
			response.end("Sorry the page was NOT 访得！");

		}
		else {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	});
	
});

server.listen(port, host, function(){
	console.log("Listening " + host + ":" + port);
});

fs.watchFile("./files/configs.json", function(){
    //console.log("Configs changed");
    configs = JSON.parse(fs.readFileSync("./files/configs.json"));
    host = configs.host;
    port = configs.port;
    server.close();
    server.listen(port, host, function(){
    	console.log("Now listening: " + host + ":" + port);
    });
});
