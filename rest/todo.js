var http = require('http');
var url = require('url');
var items = [];
var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                items.push(item);
                try {
                  var test = JSON.parse(item);
                } catch (e) {
                  test = 'null';
                }

                test.name && res.end('item.name');
                res.end('OK\n');
            });
            break;
        case 'GET':
            var body = items.map(function(item, i) {
                return i + ') ' + item;
            }).join('\n');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
            res.end(body);
            break;
        case 'DELETE':
            var path = url.parse(req.url).pathname;
            var i = parseInt(path.slice(1), 10);
            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Invalid item id');
            } else if (!items[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(i, 1);
                res.end('OK\n');
            }
            break;
        case 'PUT':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk) {
                item += chunk;
            });
            req.on('end', function() {
                var path = url.parse(req.url).pathname;
                var i = parseInt(path.slice(1), 10);

                if (isNaN(i)) {
                    res.statusCode = 400;
                    res.end('Invalid item id');
                } else if (!items[i]) {
                    res.statusCode = 404;
                    res.end('Item not found');
                } else {
                    items[i] = item || "empty";
                    item.name && res.end('item.name');
                    res.end('OK\n');
                }
            });
    }
});

server.listen(3000);
