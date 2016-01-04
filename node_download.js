var http = require('http');
var fs = require('fs');

//var dest = "C:\Users\IBM_ADMIN\Documents\GitHub\Repo1";
var dest = "C:\Users\Frederick\Documents\GitHub\Repo1\dl_file";

var filename = "new_file";

//var url = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=Eurcountries&fileDate=2015-11-17&jobId=922&priceType=C&channelCode=A";
var url = "http://www2.nationalgrid.com/WorkArea/DownloadAsset.aspx?id=43739";

var download = function(url, filename, cb) {
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

function cb (msg){
    console.log(msg);
};