const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const autorRouter = require('./routes/autor.route');
const infoiniRouter = require('./routes/ininfo.route');



const dbmanager = require ("./database/database.manager")

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/autor',autorRouter);
app.use('/info',infoiniRouter);






dbmanager.sequelizeConnection.authenticate()
    .then(() => {
        console.log('****Connection has been established successfully.****');
        // recreate the models if the tables doesn´t exists
        dbmanager.sequelizeConnection.sync().then(() => {
            console.log("Database Synced");
        });

    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = app;