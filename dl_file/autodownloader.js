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
var date = "2016-01-11";
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
	fName = tableNames[i].region + tableNames[i].country + i + "new3.zip";
	caller1(fName, urlC);
}


function nextFunction(filePath){
	console.log("nextFunction called successfully " + filePath);
	fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));

}

function caller1(fName, webAddress){

	https.get(webAddress, function(response){
		var filePath = path + fName;
		var file = fs.createWriteStream(fName);

			console.log("firstfunction called");
			console.log("filePath: "+filePath);
			response.pipe(file);
			file.on('finish', function() {
				console.log("filePath2: "+filePath);
				file.close(nextFunction(filePath));  // close() is async, call cb after close completes.
    	});

	});

}

console.log("go!");



