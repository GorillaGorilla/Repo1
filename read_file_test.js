var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
lines = str.split('\n');
var result = lines.length - 1;
console.log(result)




