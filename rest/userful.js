// making some rest call to userful server


// login
var http = require('http');
var querystring = require('querystring');

var sessionid;

// setSessionId(getFailoverGroup);
// setSessionId(deleteFailoverGroup);

// var actionChain [];


setSessionId(getFailoverGroup(deleteFailoverGroup));


// var deleteThenGet = deleteFailoverGroup()

function setSessionId(next) {
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
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
            sessionid = JSON.parse(chunk).session.value;
            // console.log('ID' + sessionid);
            if (next !== undefined) {
                next();
            }
        });
    });

    req.write(loginInfo);
    console.log(loginInfo);
    req.end();
}

function getFailoverGroup(next) {

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
            if (next !== undefined) {
                next();
            }
        });
    });

    req.end();
}

function postFailoverGroup(next) {
  var query  = JSON.stringify({
    groupname: "huh"
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
          if (next !== undefined) {
              next();
          }
      });
  });

  req.write(query);

  req.end();
}

function deleteFailoverGroup(next) {
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
          if (next !== undefined) {
              next();
          }
      });
  });

  req.end();
}
