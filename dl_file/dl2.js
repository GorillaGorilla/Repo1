/**
 * Created by Frederick on 04/01/2016.
 */
var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file2.xlsm");
var request = http.get("http://www2.nationalgrid.com/WorkArea/DownloadAsset.aspx?id=43739", function(response) {
    response.pipe(file);
});