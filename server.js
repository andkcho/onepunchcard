// Dependencies
var express = require("express");
var request = require("request");
var mongoose = require("mongoose");
var logger = require("morgan");
var bodyParser = require("body-parser");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/project3");

require("./routes/routes")(app);

// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });