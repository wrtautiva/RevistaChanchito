const Sequelize = require("sequelize");

const sequelizeConnection = require('../database/db.conection');


const UsuarioModel = require("../modelo/usuario.model");
const ParametroModel = require("../modelo/parametro.modelo");
const VolumenModel = require ("../modelo/volumen.modelo");
const PublicacionModel = require("../modelo/publicacion.modelo");
const PublicacionSeccion = require("../modelo/publicacionseccion.modelo");
const SeccionModel = require("../modelo/seccion.modelo");

const Usuario = UsuarioModel(sequelizeConnection,Sequelize);
const Parametro = ParametroModel(sequelizeConnection,Sequelize);
const Volumen = VolumenModel(sequelizeConnection,Sequelize);
const Publicacion = PublicacionModel(sequelizeConnection,Sequelize);
const Publicacionseccion=PublicacionSeccion(sequelizeConnection,Sequelize);
const Seccion = SeccionModel(sequelizeConnection,Sequelize);

//se añade la relacion a la tabla volumen y publicacion
Volumen.hasMany(Publicacion);
Publicacion.belongsTo(Volumen);

//tabla  de relacion publicacion publicacionseccion

Publicacion.hasMany(Publicacionseccion);
Publicacionseccion.belongsTo(Publicacion);

//relacion seccion publicacionseccion

Seccion.hasMany(Publicacionseccion);
Publicacionseccion.belongsTo(Seccion);

const models = {
    Usuario:Usuario,
    Parametro:Parametro,
    Volumen:Volumen,
    Publicacion:Publicacion,
    PublicacionSeccion:Publicacionseccion,
    Seccion: Seccion,
    sequelizeConnection
};


const db = {
    ...models,
    sequelizeConnection
};

module.exports =db;