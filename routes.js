const { Router } = require ('express');
const  route = Router();
const fs = require('fs');
const uuid = require('uuid');




json_newvideo =fs.readFileSync('videojuego.json','utf-8');
let  newVideoarra =JSON.parse(json_newvideo);

route.post('/newvideo',
    (req,res) => {
       const {titulo,estudio,añolanzamiento,descripcion,edadminima} = req.body;

        let newVideo ={
            id: uuid.v4(),
            titulo,
            estudio,
            añolanzamiento,
            descripcion,
            edadminima

        }

        newVideoarra.push(newVideo);
        const jsonNewvideo =JSON.stringify(newVideoarra);
        fs.writeFileSync('videojuego.json',jsonNewvideo, 'utf-8');
        console.log(newVideo);
        res.send('CREATE NEW VIDEO');
    });

route.get('/deletvideo/:id',
    (req,res) => {
        newVideoarra = newVideoarra.filter(newVideoarra => newVideoarra.id != req.params.id);
        const jsonNewuser =JSON.stringify(newVideoarra)
        fs.writeFileSync('videojuego.json',jsonNewuser, 'utf-8');
        res.send('THIS IS A DELETE REQUEST');
    });





route.get('/showvideo',
    (req,res) => {
        res.send(newVideoarra);
    });


route.get('/showvideobyid/:id',
    (req,res) => {
        res.send(newVideoarra.filter(newVideoarra => newVideoarra.id == req.params.id));
    });

route.get('/showvideobytitulo/:titulo',
    (req,res) => {
        res.send(newVideoarra.filter(newVideoarra => newVideoarra.titulo == req.params.titulo));
    });

route.get('/showvideobyedad/:edadminima',
    (req,res) => {
        res.send(newVideoarra.filter(newVideoarra => newVideoarra.edadminima <= req.params.edadminima));
    });





module.exports = route;