var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const dbManager = require ("./database.config/database.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    
    //dbManager.sequelizeConnection.sync();
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Drop and re-sync db.");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
