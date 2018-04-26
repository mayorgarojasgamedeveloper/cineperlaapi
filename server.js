var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var db = require('./assets/database.js');

var usuarioRouter = require('./routes/usuario');
var adminRouter = require('./routes/administrador');
var peliculaRouter = require('./routes/pelicula');
var funcionRouter = require('./routes/funcion');
var reciboRouter = require('./routes/recibo');
var logRouter = require('./routes/log');

var port = process.env.PORT || 8080;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('API Cineperla');
});

app.use('/usuario', usuarioRouter);
app.use('/admin', adminRouter);
//app.use('/pelicula', peliculaRouter);
app.use('/funcion', funcionRouter);
app.use('/recibo', reciboRouter);
app.use('/log', logRouter);

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;*/
