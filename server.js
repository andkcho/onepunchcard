var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();
var db = require('./models');
 
// app.use(session({
//     secret: 'foo',
//     store: new MongoStore(options)
// }));

var PORT = process.env.PORT|| 3001;

// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/usersP3";


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));


app.post("/signup", function(req, res){
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }
    if (req.body.email &&
        req.body.username &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }
        //use schema.create to insert data into the db
        db.User.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
            // return res.redirect('/profile');
            return res.json(user)
          }
        });
      }
})

app.post("/signin", function(req, res){
    if (req.body.email &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          password: req.body.password,
        }
        db.User.authenticate(req.body.email, req.body.password, function (error, user) {
            if (error || !user) {
              var err = new Error('Wrong email or password.');
              err.status = 401;
              return next(err);
            } else {
            //   req.session.userId = user._id;
                req.session.user = user;
            //   return res.json(user);
                return res.redirect("/cookie");
            }
          });
        } else {
          var err = new Error('All fields required.');
          err.status = 400;
          return next(err);
        }
      }
)

// GET /logout
app.get('/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

app.get("/cookie", function(req, res){
    console.log(req.session.user)
    // console.log(Object.defineProperty(this, 'id', {value: req.sessionID}))
})

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });