
var mod = require("./myFilter.js")
var fs = require('fs')

function logArrayElements(element, index, array) {
  console.log(element);
}

var fList = fs.readdir(process.argv[2], mod (process.argv[3], process.argv[2], func))



fList.forEach(logArrayElements)