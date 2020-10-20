const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usuarioRouter = require('./routes/usuario.route');
const parametrosRouter = require('./routes/parametros.route');
const volumenRouter = require('./routes/volumen.route');
const publicacionRouter = require('./routes/publicacion.route');
const publicacionSeccionRouter = require('./routes/publicacionseccion.route');
const seccionRouter = require('./routes/seccion.route');




const dbmanager = require ("./database/database.manager")

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario',usuarioRouter);
app.use('/parametros',parametrosRouter);
app.use('/volumen',volumenRouter);
app.use('/publicacion',publicacionRouter);
app.use('/publicacionseccion',publicacionSeccionRouter);
app.use('/seccion',seccionRouter);






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