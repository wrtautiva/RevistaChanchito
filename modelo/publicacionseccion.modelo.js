module.exports = (sequelize, Sequelize) =>{

    const  PublicacionSeccion = sequelize.define ("PublicacionSeccion", {

        idPublicacionSeccion :{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        publicacionseccionarchivo:{
            type: Sequelize.STRING,
        },
        publicacionseccionestado:{
            type: Sequelize.STRING,
        },
        creation_date: Sequelize.DATE,
        },
        {
            tableName:"publicacionseccion",
            timestamps:false
        });
    return PublicacionSeccion;
}