// making some rest call to userful server

// login
var http = require('http');
var querystring = require('querystring');
var cloud = 'localhost';

function setOnline() {
  var data = {
    "licenseSystemID": "E00-69AA-4E0B-BD3F",
    "gatewayIpAddress": "192.168.123.85",
    "hostName": "userful-79db4a",
    "ipAddress": "192.168.139.99",
    "userfulVersion": "9.5",
    "userfulBuildData": "0.10.2652.df964be-1.el7",
    "linuxDistro": "UEL",
    "linuxVersion": "7.3",
    "onboardStations": 1,
    "networkStations": 6,
    "usbStations": 0,
    "unknownStations": 0,
    "connectedStatus": true,
    "cloudserver": "192.168.120.158",
    "callbackUrl": "http://192.168.120.142",
    "licenseInstalled": true,
    "licenseType": "ULTIMATE",
    "numberOfStations": 20,
    "resellerName": "00 Internal Testing 1",
    "issueDate": {
      "millis": 1508392800000
    },
    "expiryDate": {
      "millis": 3086229600000
    },
    "supportExpiryDate": {
      "millis": 1724133600000
    },
    "fastvideoFeature": true,
    "sessionManagement": true,
    "numberOfdisplays": 8,
    "licenseData": {
      "resellerName": "00 Internal Testing 1",
      "numberOfStations": 20,
      "systemId": "E00-69AA-4E0B-BD3F",
      "licenseIssued": "2017-10-17",
      "licenseExpires": "2067-10-17",
      "supportExpires": "2024-08-20",
      "videoWallModule": "Creative",
      "fastVideoFeature": true,
      "sessionManagement": true,
      "cloudSubscriptionType": "Advanced",
      "cloudSubscriptionExpires": "2060-01-01",
    }
  };
  postData = JSON.stringify(data);
  var options = {
    host: cloud,
    port: 3000,
    path: '/api/machines',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  var req = http.request(options, function(res) {});
  req.write(postData);
  req.end();
}

function setOffline() {
  var options = {
    host: cloud,
    port: 3000,
    path: '/api/machines/E00-69AA-4E0B-BD3F/disconnect',
    method: 'PUT',
  };
  var req = http.request(options, function(res) {});
  req.end();
}

setInterval(setOnline, 5000);
setTimeout(function(){setInterval(setOffline, 5000)}, 2500);
