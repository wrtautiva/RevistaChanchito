const Sequelize = require("sequelize");

const sequelizeConnection = require('./db.connection.js');

const InvestigacionModel = require("../models/investigacion.model");
const Investigacion = InvestigacionModel(sequelizeConnection, Sequelize);

const InvestigacionComentarioModel = require("../models/investigacionComentario.model");
const InvestigacionComentario = InvestigacionComentarioModel(sequelizeConnection, Sequelize);

const ContactoModel = require("../models/contacto.model");
const Contacto = ContactoModel(sequelizeConnection, Sequelize);

const PaisModel = require("../models/pais.model");
const Pais = PaisModel(sequelizeConnection, Sequelize);

const PostulacionModel = require("../models/postulacion.model");
const Postulacion = PostulacionModel(sequelizeConnection, Sequelize);

const PostulacionComentarioModel = require("../models/postulacionComentario.model");
const PostulacionComentario = PostulacionComentarioModel(sequelizeConnection, Sequelize);

//****** CREAR RELACION ENTRE TABLAS***/

/*Tabla  InvestigacionComentario*/
InvestigacionComentario.belongsTo(Investigacion, {
  foreignKey: 'investigacionId',
  as: 'Investigacion'
});
Investigacion.hasMany(InvestigacionComentario, {
  foreignKey: 'investigacionId'
});

InvestigacionComentario.belongsTo(Pais, {
  foreignKey: 'paisId',
  as: 'Pais'
});
Pais.hasMany(InvestigacionComentario, {
  foreignKey: 'paisId'
});

/*Tabla  Contacto*/
Contacto.belongsTo(Pais, {
  foreignKey: 'paisId',
  as: 'Pais'
});
Pais.hasMany(Contacto, {
  foreignKey: 'paisId'
});

/*Tabla Postulacion*/
Postulacion.belongsTo(Pais, {
  foreignKey: 'paisId',
  as: 'Pais'
});
Pais.hasMany(Postulacion, {
  foreignKey: 'paisId'
});

/*Tabla PostulacionComentario*/
PostulacionComentario.belongsTo(Postulacion, {
  foreignKey: 'postulacionId',
  as: 'Postulacion'
});
Postulacion.hasMany(PostulacionComentario, {
  foreignKey: 'postulacionId'
});

const models = {
  Investigacion: Investigacion,
  InvestigacionComentario: InvestigacionComentario,
  Contacto: Contacto,
  Pais: Pais,
  Postulacion: Postulacion,
  PostulacionComentario: PostulacionComentario
};

const db = {
  ...models,
  sequelizeConnection
};

module.exports = db;
