var fs =  require('fs');

var path = process.argv[2];


fs.readFile(path, splitter)


function splitter(err, data){

	var contents = data.toString();
	var chunks = contents.split("\n");
	console.log(chunks.length - 1);

}