//import modules needed - use 'npm install <module>' on the command line to install these. 
var path = require('path');
var express = require('express');

//create an express app
var app = express();

//get the supplied URL parameters, call them back to function
app.get('/:input', function(request, response, next) {
	//response.send("Getting data!");
	var input = request.params.input;
	console.log('Input: ' + input);
	
	//create a watson instance - install with npm
	var watson = require('watson-developer-cloud');
	//setup the watson instance with the details given out by the console
	var language_translation = watson.language_translation({
		username: '0e541de8-70e8-48f0-ba87-2ac07425e439',
		password: 'jTyTCb71quve',
		version: 'v2'
	});

	//send a translation request to Watson, error check response and do something with it
	language_translation.translate({
		text: input, source: 'en', target: 'es' },
		function(err, translation) {
			if(err) {
				console.log(err);
				response.send(error);
			} else {
				console.log(JSON.stringify(translation.translations, null, 2));
				//send response back to the client
				response.send('"' + input + '" translates to: <br /><b>"' + translation.translations[0].translation + '"</b>');
			}
	});
});

//set the app to listen on port 3000 (localhost:3000)
app.listen(3000, function() {
	console.log('Listening on :3000');
});
