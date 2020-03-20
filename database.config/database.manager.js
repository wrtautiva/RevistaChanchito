const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelizeConnection = require('../database.config/db.connection.js');

const UserModel = require("../model/user.model");
const PostModel = require("../model/post.model");

const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);
//CREATE RELATIONS BETWEEN MODELS
User.hasMany(Post, { foreignKey: 'idPost', sourceKey: 'idUser' });
Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idPost' });

//ORGANIZE MODELS
const models = {
  User: UserModel (sequelizeConnection, Sequelize),
  Post: PostModel (sequelizeConnection, Sequelize),
};



const db = {
    ...models,
    sequelizeConnection
};
  
 

module.exports = db;
