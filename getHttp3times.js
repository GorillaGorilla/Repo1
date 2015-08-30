

var http = require('http')
var bl = require('bl')

var results = []
var countR = 0

for (i = 0; i < 3; i++){
	getHttp(i)
}

function getHttp(index){
	http.get(process.argv[2+index],callback)
}

function printResults(){
	for (i = 0; i < results.length; i++){
		console.log(results[i])
	}
}

function callback(response){
	response.pipe(bl(function cb2(err, data){
		if (err)
		return console.error(err)





		results[i] = data.toString();
		countR++
		if (countR == 3){
			printResults
		}


	}));
}