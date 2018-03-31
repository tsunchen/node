/*
@author: tsunc & zadmine
@software: NodeJS Edition
@time: 2018/03/31 12:10
*/


//var underscore = require("underscore");
var fs = require("fs");
var configs = JSON.parse(fs.readFileSync("configs.json"));
var host = configs.host;
var port = configs.port;
var express = require("express");

//var app = express.createServer();
var app = express();

//app.use(app.router);
//app.use(express.static(__dirname + "/public"));


app.get("/", function(request, response){

	response.send("Hi, Friend new nodejs");
});

app.get("/hello/:text", function(request, response) {

	response.send("hello" + request.params.text);
});


var users = {

	"1": {"name": "Ollie Parseley",
	      "twitter": "ollieparsley"
	     },
	"2": {"name": "Jeffrey Way",
	      "twitter": "jeffrey_way"
         }
};

app.get("/user/:id", function(request, response){

	var user = users[request.params.id];
	if (user) {

		response.send("<a href = 'http://twitter.com" + user.twitter + "'>Follow " + user.name + " on twitter</a>");

	}else{
		response.send("Sorry! We cannot find the user :(", 404);
	}
});

app.listen(port, host);
