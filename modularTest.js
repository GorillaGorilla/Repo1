
var mod = require("./myFilter.js")


    mod (process.argv[3], process.argv[2], function (err, list){
	list.forEach(function (i) {
	        console.log(i);
    });
	});
// var fList = fs.readdir(process.argv[2], mod (process.argv[3], process.argv[2], func))



