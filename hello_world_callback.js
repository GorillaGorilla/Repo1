function firstFunction(callback){
	callback ("Hello World");
}

function nextFunction(input){
	console.log(input)
}

firstFunction(function(output){
	nextFunction(output);
});