var http = require('http');
var server = http.createServer();
var url = require('url')
server.on('request', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    console.log(req.url);


    console.log(url.parse(req.url, true));
    res.end('Hello World\n');
})
server.listen(3000);
console.log('Server running at http://localhost:3000/');
