module.exports = (sequelize, Sequelize) =>{

    const  Publicacion = sequelize.define ("Publicacion", {
        idPublicacion:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        publicaciontitulo:{
            type: Sequelize.STRING,
        },

        publicaciondescripcion:{
            type: Sequelize.STRING,
        },
        publicacionarchivo:{
            type: Sequelize.STRING,
        },
        publicacionestado:{
            type: Sequelize.STRING,
        },
        creation_date: Sequelize.DATE,
       },
        {
            tableName :"publicacion",
            timestamps:false
        });
    return Publicacion;
}