
var args = process.argv;
var no = args.length - 2
var output = 0;

for (i = 0; i < no; i++){
	output += Number(args[i+2]);

}

console.log(output);