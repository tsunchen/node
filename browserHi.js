var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") {
        console.log('访问');
        response.write('Hi, Friend');
        response.end('');
    }
}).listen(2504);
console.log('Server running at http://127.0.0.1:2504');
