
var http = require("http")

var args = process.argv.slice(2);
// url must have "http://" at start

function callback(response){
	//var d;
	response.setEncoding("utf8")
	response.on("data",function(data){
		// do something with data
		console.log(data)

		//d = data;


	});
	response.on("error",console.error)


	}

http.get(args[0], callback)