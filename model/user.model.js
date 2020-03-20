const {Sequelize, DataTypes, Model} = require("sequelize");
const sequelize = require ("../database.config/db.connection");
const Post = require ("./post.model");
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define ("User", {
        idUser: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        published_date: Sequelize.DATE,
    }, {
        tableName: "users"
    });    
    
    return User;
}



