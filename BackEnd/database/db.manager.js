
const Sequelize = require("sequelize");

const sequelizeConnection = require('./db.connection.js');


const models = {
};

const db = {
    ...models,
    sequelizeConnection
};

module.exports = db;
