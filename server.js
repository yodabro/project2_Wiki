var express = require('express'),     // requiring everything we might be needing for the project
    server = express(),
    ejs = require('ejs'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts'),
    morgan = require('morgan'),
    mongoose = require('mongoose');

var PORT = process.env.PORT || 1337;
var MONGOURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/wiki';


server.set('views', './views');
server.set('view engine', 'ejs');  //choosing what engine to use

server.use(morgan('short'));
server.use(express.static("./public")); //all the static files

server.use(expressLayouts); //to use layouts

server.use(bodyParser.urlencoded({ extended: true })); //using bodyParser
server.use(methodOverride('_method')); // using methodOverride

// in controller/posts.js we stash all posts routes
var articlesController = require('./controllers/articles.js');
server.use('/articles', articlesController);

server.get('/', function (req, res) {
  res.render('home.ejs');
});

mongoose.connect(MONGOURI); //connecting to mongoose, updated with heroku stuff, to make it works
var db = mongoose.connection;
console.log(MONGOURI);

db.on('error', function (err) {
  console.log("Database errors!");
  console.log(err);
});

db.once('open', function () {     // what port to listen and mess upon starting of the server
  console.log("Database Up and kicking");
  server.listen(PORT, function () {
    console.log("Server is up and kicking on a port 1337");
  });
});
