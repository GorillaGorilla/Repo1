var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res){

	if (req.method = 'POST'){
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}else{
		return res.end('only POST requests')
	}


	//res.writeHead(200, {'content-type':'text/plain'})//optional
	//strm = fs.createReadStream(process.argv[3])
	//strm.pipe(res)
}).listen(Number(process.argv[2]))