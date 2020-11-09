module.exports = (sequelize, Sequelize) =>{
    const  User = sequelize.define ("User", {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        usernombre:{
            type: Sequelize.STRING,
        },
        userapellido :{
            type: Sequelize.STRING,
        },
        usercorreo :{
            type: Sequelize.STRING,
        },
        userpasword:{
            type: Sequelize.STRING,
        },
        userstado :{
            type: Sequelize.STRING,
        },
        token :{
             type: Sequelize.STRING,
            },
        creation_date: Sequelize.DATE,
        },
    {
        tableName: "usuarios",
        timestamps:false

    });

return User;

}