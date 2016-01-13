
var https = require('https');
var fs = require('fs');
var unzip = require('unzip');
var urlchunk1 = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=";
var urlchunk2 = "&fileCntryName=GBR&fileType=SSA&fileFormat=CSV&fileContentType=601&controlCode=&fileNamePrefix=";
var urlchunk3 = "&fileDate=";
var urlchunk4 = "&jobId=1021&priceType=C&channelCode=A"
var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/dl_file/";
var fName = "file7.zip";
//var filePath = undefined;
var destination = path + "fold5";
var urlC = undefined;
var date = "2016-01-11";
var tableNames = [
{region : "EMEA",
country : "Euro"},
{country : "Unitedkingdom",
region : "EMEA"}
];
for (i = 0; i < tableNames.length; i++){
	urlC = urlchunk1 + tableNames[i].region + urlchunk2 + tableNames[i].country + urlchunk3 + date + urlchunk4;
	fName = tableNames[i].region + tableNames[i].country + i;
	caller1(fName, urlC);
}
function caller1(fName, webAddress){
	var filePath = path + fName;
	https.get(webAddress, function(response){
		var file = fs.createWriteStream(fName);
			console.log("firstfunction called");
			response.pipe(file);
			file.on('finish', function() {
				  file.close(function(){
					  	console.log("nextFunction called successfully");
						fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));
					  });  // close() is async, call cb after close completes.
    	});

	});

}

console.log("go!");



