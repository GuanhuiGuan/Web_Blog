console.log("App started!");
var express = require("express");
var app = express();

// homepage
app.get("/", (req, res) => res.send("Hi there, welcome to my assignment!"));

// speak
app.get("/speak/:animal", function(req, res) {
	var ani = req.params.animal.toLowerCase();
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof WOOF!!",
		cat: "I hate you HUMANS!"
	};
	var sound = sounds[ani];
	// for animals not in map
	if(sound == null)	sound = "...";
	res.send("The " + ani + " says: '" + sound + "'");
});
// app.get("/speak/pig", (req, res) => res.send("The pig says 'Oink'"));
// app.get("/speak/cow", (req, res) => res.send("The cow says 'Moo'"));
// app.get("/speak/dog", (req, res) => res.send("The dog says 'Woof WOOF!!'"));
// repeat
app.get("/repeat/:word/:times", function(req, res) {
	var params = req.params;
	var output = "";
	for(var i = 0; i < params.times; i++) {
		output += params.word + " ";
	}
	res.send(output);
});


// bad request
app.get("*", (req, res) => res.send("Sorry, page not found... What are you doing with your life?"));

// http://localhost:3000/
app.listen(3000, () => console.log("Server started!"));