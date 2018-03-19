/*
@author: tsunc & zadmine
@software: NodeJS Edition
@time: 2018/03/17 00:10
*/

var http = require('http');
var func = require("./functions/funcall.js")

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") {
        console.log('访问');
        response.write('Hi, Friend');

        funcz(response);

        funcname = 'foo3';
        func[funcname](response);

        func.foo1(response);
        func.foo2(response);

        func['foo2'](response);
        func['foo1'](response);
        response.end('');
    }
}).listen(2504);
console.log('Server running at http://127.0.0.1:2504');

function funcz(resp){
    console.log('funcz has run');
    resp.write('running funcz on browser');
}
