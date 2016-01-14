var fs = require('fs');
var unzip = require('unzip');

var path = "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/unzip_file/";
var fName = "file4.zip";
var filePath = path + fName;
var destination = path + "fold";

console.log(destination)

fs.createReadStream(filePath)
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    var fileName = entry.path;
    console.log(fileName);
    var type = entry.type; // 'Directory' or 'File'
    var size = entry.size;
    if (fileName === "C:/Users/IBM_ADMIN/Documents/GitHub/Repo1/unzip_file/file4.zip") {
		console.log("should have worked");
      entry.pipe(fs.createWriteStream(destination));
    } else {
		console.log("didnt work");
      entry.autodrain();
    }
  });