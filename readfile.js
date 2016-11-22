var fs = require("fs");

fs.readFile("thread.js", "utf8", function(error, data) {
	if (error) {
		throw error;
	}
	console.log(data);
});

console.log("Reading file");
