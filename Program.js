var readDir = require('./Module');

var args = process.argv.slice(2);
var dir = args[0];
var filter = args[1];

function rf(err, list){
	for (i=0; i<list.length;i++){
			console.log(list[i])
	}
}

readDir(dir, filter, rf)

//function (err, list) {




//    list.forEach(function (i) {
//        console.log(i);
//    });
//});