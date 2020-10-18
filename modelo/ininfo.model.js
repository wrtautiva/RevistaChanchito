module.exports = (sequelize, Sequelize) =>{
    const Infoini = sequelize.define ("Infoini", {



            idinfoIni: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            infoAcercachanchito: {
                type: Sequelize.STRING,

            },
            menuInfo :{
                type: Sequelize.STRING,
            },
            imagenInfo:{
                type:Sequelize.STRING,

            },
            creation_date: Sequelize.DATE,
        },
        {
            tableName: "infoinicial"
        });

    return Infoini;
}