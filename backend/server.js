var createError = require("http-errors");
var express = require("express");
var path = require("path");

var signupRouter = require("./routes/Signup");
var profileRouter = require("./routes/Profile");
var timelineRouter = require("./routes/Timeline")

var app = express();

var dev_db_url = "mongodb+srv://Alex:a22s7f94@cluster0.s6m5u.mongodb.net/Twitter_Clone?retryWrites=true&w=majority";
var mongoose = require("mongoose");
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

app.use('/', signupRouter);
app.use('/Signup', signupRouter);
app.use('/Profile', profileRouter);
app.use('/Timeline', timelineRouter);

app.use(function(req,res,next){
    next(createError(404));
});

module.exports = app;