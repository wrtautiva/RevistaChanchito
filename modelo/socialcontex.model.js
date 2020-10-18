module.exports = (sequelize, Sequelize) =>{
    const socialContex = sequelize.define ("Socialcontex", {



            idsocialCont: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            textoSocialContex: {
                type: Sequelize.STRING,

            },
            menuSocialContex :{
                type:Sequelize.STRING,
            },
            imagenSocialContex:{
                type:Sequelize.STRING,

            },
            creation_date: Sequelize.DATE,
        },
        {
            tableName: "social_contex"
        });

    return socialContex;
}