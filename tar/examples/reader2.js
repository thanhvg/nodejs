// import  {reportParser} from './reportparser.js';
// import tar from '../tar.js';
// import fs from 'fs';
// import zlib from 'zlib';

var tar = require("../tar.js")
  , fs = require("fs")
  , zlib = require("zlib")
  , reportparser = require("./reportparser")

var fstream = fs.createReadStream('mytarball.tar.gz')
                .on('error', console.log);

var pattern = /^.*\/details/g;
var myfile = '';
fstream
  .pipe(zlib.Unzip())
  .pipe(tar.Parse())
  .on('entry', function(entry) {
      // console.log(entry.props.path);
      if(pattern.test(entry.props.path)) {
          // console.log('found myfile');
          entry.on('data', function (data) {
            myfile += data;
          });
          // save file
          entry.on('end', function() {
            fstream.close();
            // console.error("  <<<EOF")
            console.log(myfile);
            reportparser(myfile);
          });
      }
  });
