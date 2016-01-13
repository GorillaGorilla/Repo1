
var https = require('https');
var fs = require('fs');


var fileName = "file" + 17 + ".zip";
var file = fs.createWriteStream(fileName);

https.get("https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=PAA&fileFormat=CSV&fileContentType=300&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-05&jobId=1067&priceType=C&channelCode=A", function(response) {

	response.pipe(file);

	file.on('finish', function() {
	      file.close(bananaWrite);  // close() is async, call cb after close completes.
    });
});

function bananaWrite(){
	console.log("banana");
}