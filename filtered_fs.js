var fs = require('fs');

fs.readdir(process.argv[2],function rf (err, list){
// list is an array of strings holding pathnames
//for each array element, split off last 3 characters
// and if they != 2nd arg then remove from the array

for (i = 2; i < list.length; i++){
	console.log(list[i].length)
}


//var str = buf.toString();
//lines = str.split('\n');
//var result = lines.length - 1;
//console.log(result)
});





