var fs = require("fs");
var fileName = "foo.js";

function cbReadFile(error, data) {
  if (error) {
    throw error;
  }

  console.log(data);
}

function cbStat(error, stats) {
  if (error) {
    throw error;
  }

  if (stats.isFile()) {
    fs.readFile(fileName, "utf8", cbReadFile);
  }
}

function cbExists(exists) {
  if (exists) {
    fs.stat(fileName, cbStat);
  }
}

fs.exists(fileName, cbExists);
