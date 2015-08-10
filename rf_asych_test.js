var fs = require('fs');

fs.readFile(process.argv[2],function rf (err, buf){
var str = buf.toString();
lines = str.split('\n');
var result = lines.length - 1;
console.log(result)
});





