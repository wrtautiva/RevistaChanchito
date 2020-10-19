module.exports = (sequelize, Sequelize) =>{
    const  Seccion = sequelize.define ("Seccion", {
        idSeccion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        secciontitulo :{
            type: Sequelize.STRING,

        },
        secciondescripcion:{
            type: Sequelize.STRING,
        },
        seccionestado:{
            type: Sequelize.STRING,
        },
        creation_date: Sequelize.DATE,
    },
        {
            tableName: "seccion",
            timestamps:false
        });
    return Seccion;
}
