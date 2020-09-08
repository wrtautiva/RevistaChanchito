const express = require('express');
const app = express();
const myvideojuego = require('./video_juego');

const morgan = require('morgan');

app.use(morgan('dev'));


app.use(express.json());
const path = require('path');

app.use(require('./routes'));

app.listen(3000, ()=> {
    console.log('SERVER IS RUNNING ON PORT 3000')
})







