
var fs = require('fs')
module.exports =  filteringFunc;

function filteringFunc (path, ext,  callback) {

	fs.readdir(path, function(err,list) {

		if (err)
		return callback(err)

	for (i = 0; i < lis.length; i++){

		//var start = list[i].length - 3;
		var filList = [];
		var end = list[i].split('.');
		if (ext == end[1]){
			console.log(list[i])
			filList.splice(0,0,list[i])
		}

	}
	callback(null, list)
});


}