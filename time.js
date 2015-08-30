var net = require('net')

var server = net.createServer(function (socket){
	socket.end(makeTime()); //writes data and ends
}).listen(process.argv[2])

function makeTime(){
	var date = new Date()
	var dString =  date.getFullYear() + '-' +
	zeroAdd(1+date.getMonth()) + '-' +
	zeroAdd(date.getDate()) + ' ' +
	zeroAdd(date.getHours()) + ':' +
	zeroAdd(date.getMinutes()) +'\n';
	//console.log(dString)
	return dString
}

function zeroAdd(number){
	if (number < 10){
		return '0' + number
	} else {
		return number;
	}
}