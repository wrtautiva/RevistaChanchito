module.exports = (sequelize, Sequelize) =>{
    const Autor = sequelize.define ("Autor", {


            idAutor: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            textoAutor: {
                type: Sequelize.STRING,

            },
            menuAutor :{
                type:Sequelize.STRING,
            },
            imagenAutor:{
                type:Sequelize.STRING,

            },
            creation_date: Sequelize.DATE,
        },
        {
            tableName: "autor"
        });

    return Autor;
}