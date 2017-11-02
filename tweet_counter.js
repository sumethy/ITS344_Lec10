var ntwitter = require("ntwitter"), 
credentials = require("./credentials.json"), 
twitter;

// set up our twitter object
twitter = ntwitter(credentials);

// set pu our twitter stream with three parameters, separated by commas
twitter.stream(
	// the first parameter is a string
	"statuses/filter",

	// second parameter, an object containing an array
	{"track": ["awesome", "cool", "rad", "gnarly", "groovy"]},

	// the thrid parameter is our callhback for when the stream is created
	function(stream){
		stream.on("data", function(tweet){
			console.log(tweet.text);
		});
	}
);