// now working
var https = require('https');
var fs = require('fs');
var unzip = require('unzip');

var urlchunk1 = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=";
var urlchunk2 = "&fileCntryName=";
var urlchunk3 = "&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=";
var urlchunk4 = "&fileDate=";
var urlchunk5 = "&jobId=1021&priceType=C&channelCode=A"
var fullUrl = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-13&jobId=1070&priceType=C&channelCode=A"
var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/dl_file/";
var fName = "file7.zip";
//var filePath = undefined;
var destination = path + "fold5";
var urlC = undefined;
var date = "2016-01-11";		// must be updated to current date whenever run.

var tableNames = [
{region : "EMEA",
fileNamePrefix : "Eurcountries",
fileCntryName : "EURO"},
{fileNamePrefix : "Unitedkingdom",
region : "EMEA",
fileCntryName : "GBR"}
];

for (i = 0; i < tableNames.length; i++){
	urlC = urlchunk1 + tableNames[i].region + urlchunk2 + tableNames[i].fileCntryName +
	urlchunk3 + tableNames[i].fileNamePrefix + urlchunk4 + date + urlchunk5;
	fName = tableNames[i].region + tableNames[i].fileNamePrefix + i + "new3.zip";
	caller1(fName, urlC);
}


function nextFunction(fName){
	// extracts the downloaded archive
	var filePath = path + fName;
	var uzName = undefined;
	console.log("nextFunction called successfully " + filePath);
//  create a read stream that parses to find the name of the file in the zip archive
	fs.createReadStream(filePath)
	.pipe(unzip.Parse())
	.on('entry', function (entry) {
	    uzName = entry.path;
	    console.log(uzName);
	    entry.autodrain();
  	});
  	// create a new Read Stream to extract the file to destination folder
  	var file = fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));

  	file.on('close',function(){
  		// change file name to remove the date (use same filename as for the .zip file but change to .csv
  		var csvName = fName.substring(0,fName.length - 5) + ".csv";
  		fs.rename(destination + "/" + uzName, destination + "/" + csvName, function(err) {
		    if ( err ) console.log('ERROR: ' + err);
		    console.log("finished");
		});
  	});
}

function caller1(fName, webAddress){
//	downloads from a url using a get request
	https.get(webAddress, function(response){
		var file = fs.createWriteStream(fName);

			console.log("firstfunction called");
			console.log("fName: "+fName);
			response.pipe(file);
			file.on('finish', function() {
				console.log("fName2: "+fName);
				file.close(nextFunction(fName));  // close() is async, call cb after close completes.
    	});

	});

}

console.log("go!");



