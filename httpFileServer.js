var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res){
	res.writeHead(200, {'content-type':'text/plain'})//optional
	strm = fs.createReadStream(process.argv[3])
	strm.pipe(res)
}).listen(process.argv[2])