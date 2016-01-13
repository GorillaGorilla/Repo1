/**
 * Created by Frederick on 04/01/2016.
 */
var https = require('https');
var fs = require('fs');

var tableNames = [
{region : "EMEA",
country : "Euro"},
{country : "Unitedkingdom",
region : "EMEA"},
];

var path = "";

var numberOfTables = 2;
for (i = 0; i < numberOfTables; i++){

	var fileName = "file" + i;
	var file = fs.createWriteStream(fileName);
	path = "https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=" + table

	var request = https.get("https://w3-117.ibm.com/software/sales/passportadvantage/pricepub/user/DownloadCSV.do?regionCode=EMEA&fileCntryName=EURO&fileType=PAA&fileFormat=CSV&fileContentType=300&controlCode=&fileNamePrefix=Eurcountries&fileDate=2016-01-05&jobId=1067&priceType=C&channelCode=A", function(response) {
	    response.pipe(file);

	    fs.createReadStream(file).pipe(unzip.Extract({ path: 'output/path' }));
});

}
