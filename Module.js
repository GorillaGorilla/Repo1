var fs = require('fs');

module.exports = function (directory, filter, callback) {
    fs.readdir(directory, function (err, list) {
        if (err)
            return callback(err);

        var extension = '.' + filter;

        var files = list.filter(function (f) {
            return f.indexOf(extension) !== -1;
        });

        callback(null, files);
    });
};