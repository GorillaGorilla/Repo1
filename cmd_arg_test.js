

var array = process.argv
var sum = 0;

if (array.length >1){
for (i = 2; i < array.length; i++){
sum += Number(array[i])
}
console.log(sum)
}

