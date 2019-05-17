var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//add mongoose
var mongoose = require('mongoose');

var logger = require('morgan');

var indexRouter = require('./routes/index');

// connect to db
mongoose.connect('mongodb://localhost/my_songs', {useNewUrlParser: true});

var app = express();

app.use(function (req, res, next) {     res.header("Access-Control-Allow-Origin", "*");     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");     next(); });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);

module.exports = app;
