var fs = require('fs');

var type = process.argv[3]

fs.readdir(process.argv[2],function rf (err, list){
// list is an array of strings holding pathnames
//for each array element, split off last 3 characters
// and if they != 2nd arg then remove from the array

for (i = 0; i < list.length; i++){

	//var start = list[i].length - 3;
	var end = list[i].split('.');
	if (type == end[1]){
		console.log(list[i])
	}
}


//var str = buf.toString();
//lines = str.split('\n');
//var result = lines.length - 1;
//console.log(result)
});





