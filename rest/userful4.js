// making some rest call to userful server
// login
var http = require('http');
var querystring = require('querystring');

var sessionid;

var hostName = '192.168.121.225';

// var actionChain = [getDevicesOnSeatCloser('seat-usb-platform-nhBC2D98001BF5')];
// var actionChain = [getDevicesOnSeat];
var actionChain = [];

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
        host: hostName,
        port: 9000,
        path: '/api/session',
        method: 'POST'
    };

    var req = http.request(options, function(res) {
        // console.log('STATUS: ' + res.statusCode);
        // console.log('HEADERS: ' + JSON.stringify(res.headers));
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
              // next();
              getDevicesOnSeat('seat-usb-platform-nhF80F4135EB0A');

              getDevicesOnSeat('seat-usb-platform-nh001FD802269B');

              getDevicesOnSeat('seat-usb-platform-nh001FD800302E');

              getDevicesOnSeat('seat-usb-platform-nh001FD800A792');

              getDevicesOnSeat('seat-usb-platform-nh001FD800A76B');

              getDevicesOnSeat('seat-usb-platform-nh42071150006C');

              getDevicesOnSeat('seat-usb-platform-nh000BAB810757');

              getDevicesOnSeat('seat-usb-platform-nhC409389453CB');



          }
        });
    });

    req.write(loginInfo);
    // console.log(loginInfo);
    req.end();
}

function getDevicesOnSeat(seatId) {

    var query  = JSON.stringify({

    });

    var options = {
        host: hostName,
        port: 9000,
        path: '/api/network/devices/' + seatId,
        method: 'GET',
        headers: {
            'cookie': 'JSESSIONID=' + sessionid
        }
    };

    var req = http.request(options, function(res) {
        var str = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
          str += chunk;
        });
        res.on('end', function (){
          console.log('========================================');
          console.log(str);
        });
    });
    req.end();
}

function getDevicesOnSeatCloser(seatId) {
  var x = seatId;
  return getDevicesOnSeat(x);
}
