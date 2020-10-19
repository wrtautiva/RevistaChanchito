module.exports = (sequelize, Sequelize) =>{

    const  Volumen = sequelize.define ("Volumen", {

        idVolumen:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        volumentitulo: {
            type: Sequelize.STRING,
        },
        columendescripcion:{
            type: Sequelize.STRING,
        },
        volumenestado :{
            type: Sequelize.STRING,
        },

        creation_date: Sequelize.DATE,

    },
        {
            tableName : "volumen",
            timestamps:false
        });
    return Volumen;
}