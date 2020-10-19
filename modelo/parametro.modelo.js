module.exports = (sequelize, Sequelize) =>{
    const  Parametro = sequelize.define ("Parametro", {
        idParametro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        parametrotitulo :{
            type: Sequelize.STRING,
        },
        parametrodescripcion:{
            type: Sequelize.STRING,
        },
        parametrotexto :{
            type: Sequelize.STRING,
        },
        parametroimagen:{
            type: Sequelize.STRING,
        },
        parametroestado:{
            type: Sequelize.STRING,
        },
        creation_date: Sequelize.DATE,
    },
    {
        tableName : "parametro",
        timestamps:false
    });
    return Parametro;

}