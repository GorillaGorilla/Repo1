var http = require('http');
var fs = require('fs');

var dest = "C:\Users\IBM_ADMIN\Documents\GitHub\Repo1";
var url = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=Eurcountries&fileDate=2015-11-17&jobId=922&priceType=C&channelCode=A";

var download = function(url, dest, cb) {
	console.log("something");
  var file = fs.createWriteStream(dest);
  var request = http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};