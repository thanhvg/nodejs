var tar = require("../tar.js")
  , fs = require("fs")
  , zlib = require("zlib")

var fstream = fs.createReadStream('mytarball.tar.gz')
                .on('error', console.log);

var pattern = /^.*\/details/g;
fstream
  .pipe(zlib.Unzip())
  .pipe(tar.Parse())
  .on('entry', function(entry) {
      console.log(entry.props.path);
      if(pattern.test(entry.props.path)) {
          console.log('found myfile');

          entry.on("data", function (c) {
            console.error("  >>>" + c.toString())
          });
          // save file
          entry.on('end', function() {
            fstream.close();
          });
      }
  });
