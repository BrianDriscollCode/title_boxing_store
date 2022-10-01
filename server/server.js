// var createError = require('http-errors');
// var logger = require('morgan');
// var cors = require("cors")
// const express = require('express');
// const path = require('path');
// login = require("./routes/login")

// var server = express();

// // view engine setup
// server.set('views', path.join(__dirname, 'views'));
// server.set('view engine', 'jade');

// server.use(logger('dev'));
// server.use(express.json());
// server.use(cors())
// server.use(express.urlencoded({ extended: false }));

// server.use(express.static(path.join(__dirname, 'public')));
// login = require("./routes/login");

// server.use("/login", login)

// // catch 404 and forward to error handler
// server.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// server.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.server.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = server;

//*********************** */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")
login = require("./routes/login");
// createAccount = require("./routes/createAccount")

var server = express();

// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(logger('dev'));
server.use(express.json());
server.use(cors())
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use("/login", login)
// server.use("/createAccount", createAccount)
// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(9000, () => {
  console.log("Listening at 9000")
})

module.exports = server;