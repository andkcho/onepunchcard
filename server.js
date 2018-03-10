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

//   function isLoggedIn(req, res, next) {
//     // console.log(req);
//     console.log(req.isAuthenticated());
//     if (req.isAuthenticated())
//         return next();
//       res.redirect('/');
//   };


app.post("/signup", function(req, res){
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }
    if (req.body.email &&
        // req.body.username &&
        req.body.password) {
        var userData = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
        //   username: req.body.username,
          password: req.body.password,
          stamps: [null,null,null,null,null,null]
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

app.post("/login", function(req, res){
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
                return res.redirect("/home");
            }
          });
        } else {
          var err = new Error('All fields required.');
          err.status = 400;
          return next(err);
        }
      }
)

app.post('/updatelocation', function(req, res, next) {
    var id = req.session.user._id;
    console.log(id);
    db.User.findByIdAndUpdate(id, { $set: { streetaddress: req.body.streetaddress, state: req.body.state, zipcode: req.body.zipcode }}, { new: true }, function (err, user) {
        if (err) return handleError(err);
        res.send(user);
      });
})

// GET /logout
app.get("/checkLogIn", function(req, res){
    if (req.session.user){
        console.log("1")
        return
    } else {
        console.log("2");
        return res.redirect('/');
    }
})

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

app.get('/userInfo', function(req,res,next){
    console.log(req.session)
    db.User.findById(req.session.user._id, function(err, user){
        res.json(user)
    })
})

app.get("/session", function(req, res){
    console.log(req.session.user)
    res.json(req.session.user._id);
})

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });