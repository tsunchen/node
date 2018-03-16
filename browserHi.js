var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") {
        console.log('访问');
        response.write('Hi, Friend');
        func1(response);
        response.end('');
    }
}).listen(2504);
console.log('Server running at http://127.0.0.1:2504');

function func1(res){
    console.log('func1 has run');
    res.write('running func1 on browser');
}
