var path = require("path");
var db = require("../models");

module.exports = function(app){

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/dropin", function(req, res){
		res.sendFile(path.join(__dirname, "../public/dropin.html"));
	});

	app.get("/signup", function(req, res){
		res.sendFile(path.join(__dirname, "../public/signup.html"));
	});

	app.get("/code", function(req, res){
		res.sendFile(path.join(__dirname, "../public/code.html"));
	});

	app.post("/newcode", function(req, res){
		// console.log(req)
		

		console.log(req.body.code)
		db.Codes.create({code: req.body.code})
		res.json({code: req.body.code})
	})

};