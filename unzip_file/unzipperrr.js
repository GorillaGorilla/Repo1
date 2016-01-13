
var fs = require('fs');
var unzip = require('unzip');

var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/unzip_file/";
var fName = "file4.zip";
var filePath = path + fName;
var destination = path + "fold";


fs.createReadStream(filePath).pipe(unzip.Extract({ path: destination }));