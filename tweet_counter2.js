var ntwitter = require("ntwitter"), 
credentials = require("./credentials.json"), 
twitter,
counts = {}; // an object to store the count of each word in our filter

counts.awesome = 0;
counts.cool = 0;
counts.rad = 0;
counts.gnarly = 0;
counts.groovy = 0;

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
			if (tweet.text.indexOf("awesome") > -1){
				counts.awesome = counts.awesome + 1;
				console.log(counts.awesome)
			}
		});
	}
);

module.exports = counts;