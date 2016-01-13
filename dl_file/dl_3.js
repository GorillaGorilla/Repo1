// This one works, downloads a file and then extracts it once the  download is finished.


var https = require('https');
var fs = require('fs');
var unzip = require('unzip');

var url1 = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=PAA&fileFormat=CSV&fileContentType=300&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-05&jobId=1067&priceType=C&channelCode=A";
var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/dl_file/";
var fName = "file7.zip";
var filePath = path + fName;
var destination = path + "fold";

var file = fs.createWriteStream(fName);

function nextFunction(){
	console.log("nextFunction called successfully");
	fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));
}

function firstFunction(response){
	console.log("firstfunction called");
	response.pipe(file);
	file.on('finish', function() {
		      file.close(nextFunction);  // close() is async, call cb after close completes.
    });
};

console.log("go!");

var request = https.get(url1, firstFunction);