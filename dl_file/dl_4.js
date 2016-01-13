
var https = require('https');
var fs = require('fs');


var fileName = "file" + 13 + ".zip";
var url1 = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=PAA&fileFormat=CSV&fileContentType=300&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-05&jobId=1067&priceType=C&channelCode=A";
var dest = fileName;

function bananaWrite(){
	console.log("banana");
}

console.log("Start");

var download = function(url1, dest, bananaWrite) {
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(bananaWrite);  // close() is async, call cb after close completes.
    });
  });
}