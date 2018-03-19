/*
@author: tsunc & zadmine
@software: NodeJS Edition
@time: 2018/03/17 00:10
*/

var http = require('http');
//var func = require("./functions/funcall.js")
var User = require("./modules/User")

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") {
        console.log('访问');
        response.write('Hi, Friend');

        user = new User(1, '三', 100);
        user.enter();

        response.end('');
    }
}).listen(2504);
console.log('Server running at http://127.0.0.1:2504');

function funcz(resp){
    console.log('funcz has run');
    resp.write('running funcz on browser');
}
