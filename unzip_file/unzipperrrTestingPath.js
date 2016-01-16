
var fs = require('fs');
var unzip = require('unzip');

var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/unzip_file/";
var fName = "file4.zip";
var filePath = path + fName;
var destination = path + "fold";

var outputFile = fs.createWriteStream("testoutput.csv");
var file = fs.createReadStream(filePath)
.pipe(unzip.Parse())
.on('entry', function (entry) {
    var fileName = entry.path;
    console.log(fileName);
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    entry.pipe(outputFile);
    //entry.autodrain();
  });

file.pipe(unzip.Extract({path : destination}));

;