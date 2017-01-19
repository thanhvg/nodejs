// making some rest call to userful server
// login
var http = require('http');
var querystring = require('querystring');

var sessionid;

var actionChain = [getFailoverGroup, postFailoverGroup, deleteFailoverGroup, getFailoverGroup];
function next() {
  var func;
  // console.log('inside next');

  if (typeof actionChain[0] == 'function') {
    // console.log('function');
    func = actionChain[0];
    actionChain.shift();
    func();
  }
}

setSessionId();

function setSessionId() {
    var loginInfo = JSON.stringify({
        user: 'user',
        password: '1234'

    });

    var options = {
        host: '192.168.121.19',
        port: 9000,
        path: '/api/session',
        method: 'POST'
    };

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');

        var body = [];

        res.on('data', function(chunk) {
            body.push(chunk);
        });

        res.on('end', () => {
          sessionid = JSON.parse(body).session.value;
          console.log('ID ' + sessionid);

          if (next !== undefined) {
              console.log('next');
              next();
          }
        });
    });

    req.write(loginInfo);
    console.log(loginInfo);
    req.end();
}

function getFailoverGroup() {

    var query  = JSON.stringify({

    });

    var options = {
        host: '192.168.121.19',
        port: 9000,
        path: '/api/failover-group',
        method: 'GET',
        headers: {
            'cookie': 'JSESSIONID=' + sessionid
        }
    };

    var req = http.request(options, function(res) {
        console.log('getFailoverGroup STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);

        });
        res.on('end', next);
    });
    req.end();
}

function postFailoverGroup() {
  var query  = JSON.stringify({
    groupname: "wtf"
  });

  var options = {
      host: '192.168.121.19',
      port: 9000,
      path: '/api/failover-group',
      method: 'POST',
      headers: {
          'cookie': 'JSESSIONID=' + sessionid
      }
  };

  var req = http.request(options, function(res) {
      console.log('postFailoverGroup STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
          console.log('BODY: ' + chunk);
      });
      res.on('end', next);
  });

  req.write(query);

  req.end();
}

function deleteFailoverGroup() {

  var options = {
      host: '192.168.121.19',
      port: 9000,
      path: '/api/failover-group',
      method: 'DELETE',
      headers: {
          'cookie': 'JSESSIONID=' + sessionid
      }
  };

  var req = http.request(options, function(res) {
      console.log('deleteFailoverGroup STATUS: ' + res.statusCode);
      // console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
          console.log('BODY: ' + chunk);
      });
      res.on('end', next);
  });

  req.end();
}
