
var http = require("http")

var args = process.argv.slice(2);


function callback(){}

http.get(args[0], callback)