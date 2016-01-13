var fs =  require('fs');

var path = process.argv[2];


var contents = fs.readFileSync(path).toString();
var chunks = contents.split("\n");

console.log(chunks.length - 1);